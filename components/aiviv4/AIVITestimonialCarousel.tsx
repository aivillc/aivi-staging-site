'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    quote: "We reactivate cold databases for clients—thousands of leads that went dark months ago. AIVI brought them back to life.\n\nOur email campaigns got 1-in-5 responses. AIVI's AI SMS got 1-in-2. That's 150% better conversion on the same dead leads.\n\nThe AI doesn't sound like a bot. It sounds like a real person who actually read the lead's history. Clients are asking us to scale this across their entire database now.",
    name: 'Andy Mackensen',
    role: 'Founder & CEO',
    company: 'LEADROLLER',
    image: '/andym.webp',
    initials: 'AM',
    stats: [
      { label: 'Database Reactivation', value: 'Cold leads revived' },
      { label: '1-in-2 Response Rate', value: 'vs 1-in-5 email' },
      { label: '150% Conversion Lift', value: 'Same leads, better tech' },
      { label: 'AI SMS Remarketing', value: 'Natural conversation' },
    ],
  },
  {
    id: 2,
    quote: "I run a small debt consolidation shop—12 people. We can't afford Salesforce and a full contact center stack.\n\nAIVI gave us enterprise-level AI for a fraction of the cost. We plug in our Facebook leads, the AI texts them in 3 seconds, qualifies them, and routes to our closers.\n\nOur lead remarketing went from 1-in-5 conversion (email) to almost 1-in-2 (AI SMS). That's 120% improvement on the same ad spend.\n\nThe platform is dead simple. No tech team needed. Just works.",
    name: 'Luca Wells',
    role: '',
    company: 'LoanPro',
    image: '/dannyh.webp',
    initials: 'LW',
    stats: [
      { label: '120% Conversion Lift', value: 'Same ad spend' },
      { label: 'Email → AI SMS', value: 'Almost 1-in-2 response' },
      { label: 'All-in-One Platform', value: 'No tech team needed' },
      { label: '12-Person Team', value: 'Enterprise results' },
    ],
  },
];

export default function AIVITestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 15 seconds
    setTimeout(() => setIsAutoPlaying(true), 15000);
  };

  return (
    <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 sm:py-28 md:py-32 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              Customer Success Stories
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white mb-4 leading-[1.1] tracking-[-0.02em]">
            Real Results from <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">Real Customers</span>
          </h2>
        </motion.div>

        {/* Testimonial Cards Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Stacked Card Effect - Background cards */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div
              className="w-full h-[500px] sm:h-[480px] rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#252525] border border-white/5 transform translate-y-4 scale-[0.96] opacity-40"
              style={{ transform: 'translateY(16px) scale(0.96)' }}
            />
            <div
              className="absolute w-full h-[500px] sm:h-[480px] rounded-3xl bg-gradient-to-br from-[#151515] to-[#202020] border border-white/5 transform translate-y-8 scale-[0.92] opacity-20"
              style={{ transform: 'translateY(32px) scale(0.92)' }}
            />
          </div>

          {/* Active Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30, rotateX: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -30, rotateX: 10 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#1a1a1a] rounded-3xl p-6 sm:p-10 md:p-12 border border-white/10 shadow-2xl overflow-hidden">
                {/* Gradient accent line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3]" />

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f84608]/5 to-transparent rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-[#321ca3]/5 to-transparent rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Two Column Layout */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Quote and Author */}
                    <div className="flex flex-col justify-center order-2 lg:order-1">
                      {/* Quote */}
                      <blockquote className="text-[16px] sm:text-[17px] md:text-[18px] text-white/90 font-light leading-[1.8] mb-8 whitespace-pre-line">
                        &ldquo;{testimonials[activeIndex].quote}&rdquo;
                      </blockquote>

                      {/* Author */}
                      <div className="flex items-center gap-4">
                        <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-[#f84608]/50 shadow-lg">
                          <Image
                            src={testimonials[activeIndex].image}
                            alt={testimonials[activeIndex].name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <span className="text-[18px] sm:text-[20px] font-bold text-white block">
                            {testimonials[activeIndex].name}
                          </span>
                          <p className="text-[14px] text-white/60 mt-0.5">
                            {testimonials[activeIndex].role} at <span className="text-[#f84608] font-semibold">{testimonials[activeIndex].company}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Hero Stat Card */}
                    <div className="flex flex-col justify-center order-1 lg:order-2">
                      {/* Large Hero Stat */}
                      <div className="rounded-2xl bg-gradient-to-br from-[#f84608]/10 via-[#8b00ff]/5 to-[#321ca3]/10 border border-[#f84608]/20 p-8 mb-6">
                        <span className="text-[64px] sm:text-[80px] md:text-[96px] font-bold leading-[0.9] bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3] bg-clip-text text-transparent tracking-[-0.04em] block text-center">
                          {testimonials[activeIndex].stats[0]?.label.match(/\d+%?/)?.[0] || '150%'}
                        </span>
                        <p className="text-[14px] sm:text-[16px] text-white/60 mt-3 font-medium uppercase tracking-[0.1em] text-center">
                          {testimonials[activeIndex].stats[0]?.value || 'Conversion Lift'}
                        </p>
                      </div>

                      {/* Supporting Stats - 3 smaller cards */}
                      <div className="grid grid-cols-3 gap-3">
                        {testimonials[activeIndex].stats.slice(1, 4).map((stat, i) => (
                          <div
                            key={i}
                            className="rounded-xl bg-white/[0.03] border border-white/[0.08] p-4 text-center hover:border-[#f84608]/30 transition-colors"
                          >
                            <span className="text-[12px] font-semibold text-white/80 block leading-tight">{stat.label}</span>
                            <span className="text-[10px] text-white/40 mt-1 block">{stat.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`relative h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? 'w-10 bg-gradient-to-r from-[#f84608] to-[#321ca3]'
                    : 'w-3 bg-white/20 hover:bg-white/40'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                {index === activeIndex && (
                  <motion.div
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                    layoutId="activeDot"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
