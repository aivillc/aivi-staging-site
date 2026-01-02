'use client';

import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import Fuse from 'fuse.js';
import { faqs, FAQ } from './faqData';

const categories = [
  { id: 'all', label: 'All Questions', color: '#0a0a0a' },
  { id: 'pricing', label: 'Pricing', color: '#f84608' },
  { id: 'features', label: 'Features', color: '#8b00ff' },
  { id: 'technical', label: 'Technical', color: '#321ca3' },
  { id: 'support', label: 'Support', color: '#059669' },
];

export default function AIVISearchMatrixFAQ() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState<string[]>(['all']);
  const [expandedCardId, setExpandedCardId] = useState<string | null>(null);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Debounce search query
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(
    () =>
      new Fuse(faqs, {
        keys: ['question', 'answer', 'category'],
        threshold: 0.3,
        includeScore: true,
        includeMatches: true,
      }),
    []
  );

  // Filter FAQs based on search and category
  const filteredFAQs = useMemo(() => {
    let results: FAQ[] = faqs;

    // Apply search
    if (debouncedQuery.trim()) {
      const searchResults = fuse.search(debouncedQuery);
      results = searchResults.map((result) => result.item);
    }

    // Apply category filter
    if (!activeFilters.includes('all')) {
      results = results.filter((faq) => activeFilters.includes(faq.category));
    }

    return results;
  }, [debouncedQuery, activeFilters, fuse]);

  const toggleFilter = (filterId: string) => {
    if (filterId === 'all') {
      setActiveFilters(['all']);
    } else {
      setActiveFilters((prev) => {
        const newFilters = prev.filter((f) => f !== 'all');

        if (newFilters.includes(filterId)) {
          const updated = newFilters.filter((f) => f !== filterId);
          return updated.length === 0 ? ['all'] : updated;
        } else {
          return [...newFilters, filterId];
        }
      });
    }
  };

  const toggleCard = (cardId: string) => {
    setExpandedCardId(expandedCardId === cardId ? null : cardId);
  };

  // Handle keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        document.getElementById('faq-search-input')?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="w-full bg-[#FAFAFA] px-6 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-28 md:py-32">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              FAQ
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>

          <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-light text-[#0a0a0a] mb-6 leading-[1.08] tracking-[-0.03em]">
            Questions? We&apos;ve Got Answers
          </h2>
          <p className="text-[17px] text-[#525252] max-w-[520px] mx-auto leading-[1.8]">
            Search or browse through our most common questions
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="max-w-[700px] mx-auto mb-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="relative">
            <input
              id="faq-search-input"
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search questions... (⌘K)"
              className="w-full h-[60px] px-6 pr-14 rounded-2xl bg-white border-2 border-[#e5e5e5] text-[17px] text-[#0a0a0a] placeholder-[#9ca3af] focus:border-[#0a0a0a] focus:outline-none focus:shadow-[0_0_0_4px_rgba(10,10,10,0.04)] transition-all duration-300"
            />
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
              {searchQuery ? (
                <button
                  onClick={() => setSearchQuery('')}
                  className="pointer-events-auto w-6 h-6 rounded-full bg-[#f5f5f5] hover:bg-[#e5e5e5] flex items-center justify-center transition-colors"
                >
                  <svg className="w-4 h-4 text-[#737373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              ) : (
                <svg className="w-5 h-5 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map((category, index) => {
            const isActive = activeFilters.includes(category.id);
            const count = category.id === 'all' ? faqs.length : faqs.filter((faq) => faq.category === category.id).length;

            return (
              <motion.button
                key={category.id}
                onClick={() => toggleFilter(category.id)}
                className={`relative px-5 py-2.5 rounded-full text-[13px] font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-lg'
                    : 'text-[#737373] bg-white border border-[#e5e5e5] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'
                }`}
                style={
                  isActive
                    ? {
                        background: `linear-gradient(135deg, ${category.color}, ${category.color}dd)`,
                      }
                    : undefined
                }
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
                <span
                  className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold ${
                    isActive ? 'bg-white/20' : 'bg-[#f5f5f5] text-[#737373]'
                  }`}
                >
                  {count}
                </span>
              </motion.button>
            );
          })}
        </motion.div>

        {/* Results Grid */}
        <LayoutGroup>
          {filteredFAQs.length > 0 ? (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              layout="position"
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              <AnimatePresence mode="popLayout">
                {filteredFAQs.map((faq, index) => {
                  const cardId = `${faq.category}-${faqs.indexOf(faq)}`;
                  const isExpanded = expandedCardId === cardId;

                  return (
                    <motion.div
                      key={cardId}
                      layout="position"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{
                        layout: { duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                        opacity: { duration: 0.25 },
                        y: { duration: 0.3, delay: index * 0.03 }
                      }}
                      className={`bg-white rounded-2xl p-6 border cursor-pointer transition-[border-color,box-shadow] duration-300 ${
                        isExpanded
                          ? 'border-[#0a0a0a] shadow-xl'
                          : 'border-[#e5e5e5] hover:border-[#0a0a0a] hover:shadow-lg'
                      }`}
                      onClick={() => toggleCard(cardId)}
                    >
                      {/* Question */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3
                          className={`text-[16px] font-semibold leading-[1.4] transition-colors duration-200 ${
                            isExpanded ? 'text-[#0a0a0a]' : 'text-[#374151]'
                          }`}
                        >
                          {/* Highlight matched text if searching */}
                          {debouncedQuery ? (
                            <span
                              dangerouslySetInnerHTML={{
                                __html: faq.question.replace(
                                  new RegExp(`(${debouncedQuery})`, 'gi'),
                                  '<mark class="bg-yellow-200">$1</mark>'
                                ),
                              }}
                            />
                          ) : (
                            faq.question
                          )}
                        </h3>
                        <motion.svg
                          className="w-5 h-5 flex-shrink-0 text-[#9ca3af]"
                          animate={{ rotate: isExpanded ? 180 : 0, color: isExpanded ? '#0a0a0a' : '#9ca3af' }}
                          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </motion.svg>
                      </div>

                      {/* Category Badge */}
                      <div className="mb-3">
                        <span className="inline-block px-2.5 py-1 rounded-full bg-[#f5f5f5] text-[11px] text-[#737373] uppercase tracking-wider font-semibold">
                          {faq.category}
                        </span>
                      </div>

                      {/* Answer */}
                      <AnimatePresence initial={false}>
                        {isExpanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
                              opacity: { duration: 0.25, delay: isExpanded ? 0.1 : 0 }
                            }}
                            className="overflow-hidden"
                          >
                            <div className="h-[1px] bg-[#e5e5e5] my-4" />
                            <p className="text-[15px] text-[#525252] leading-[1.8]">{faq.answer}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </motion.div>
          ) : (
            // No Results
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <svg className="w-8 h-8 text-[#9ca3af]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-2">No results found</h3>
              <p className="text-[15px] text-[#737373] mb-6">
                Try adjusting your search or filters
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveFilters(['all']);
                }}
                className="text-[14px] text-[#f84608] hover:text-[#321ca3] font-medium"
              >
                Clear search and filters
              </button>
            </motion.div>
          )}
        </LayoutGroup>

      </div>
    </section>
  );
}
