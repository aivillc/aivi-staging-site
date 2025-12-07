'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 'l2c',
    title: 'Accelerate Conversions',
    activeColor: 'bg-[#F5F5F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    description: 'Orchestrate intelligent cross-channel engagement from first contact to closed deal.',
    mainTitle: 'From Contact to Conversion',
    features: [
      'Omnichannel lead nurturing with contextual engagement',
      'AI-optimized channel selection for maximum impact',
      'Intelligent 3-way conversational threading',
      'Automated callback scheduling and prioritization',
      'Native CRM and data source integrations',
      'Apple & Google call screening navigation',
      'Pre-engagement lead warming sequences',
      'Direct social media platform connectivity',
    ],
  },
  {
    id: 'ltv',
    title: 'Maximize LTV',
    activeColor: 'bg-[#D4E8F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description: 'Reactivate dormant relationships and extract maximum value from your customer base.',
    mainTitle: 'Unlock Customer Lifetime Value',
    features: [
      'Intelligent relationship reactivation campaigns',
      'Purpose-built CRM with engagement intelligence',
      'Advanced orchestration and automation engine',
      'Rule-based campaign management system',
      'Unified command center for engagement history',
      'Time-triggered reengagement workflows',
    ],
  },
  {
    id: 'performance',
    title: 'Optimize Performance',
    activeColor: 'bg-[#E8E5F5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
    description: 'Continuously monitor and enhance both human and AI agent performance.',
    mainTitle: 'Elevate Agent Excellence',
    features: [
      'Real-time engagement monitoring and scoring',
      'Predictive anomaly detection algorithms',
      'Live coaching powered by best practices',
      'AI agent performance analytics dashboard',
      'Supervisor listen-in and barge capabilities',
      'Comprehensive agent performance scorecards',
      'Autonomous prompt optimization engine',
      'Systematic A/B testing framework',
    ],
  },
  {
    id: 'intelligence',
    title: 'Data Intelligence',
    activeColor: 'bg-[#5DD5D5]',
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
        <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
        <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
      </svg>
    ),
    description: 'Transform raw data into actionable insights with enterprise-grade analytics.',
    mainTitle: 'Intelligence at Scale',
    features: [
      'Real-time analytics and reporting dashboard',
      'Predictive lead scoring with ML models',
      'Custom KPI tracking and benchmarking',
      'Cross-channel attribution modeling',
      'Automated insight generation',
      'Data enrichment and validation pipelines',
      'Enterprise security and compliance',
      'API-first architecture for extensibility',
    ],
  },
];

export default function AIVIFeatureTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const accumulatedDelta = useRef(0);
  const isProcessing = useRef(false);
  const hasCompletedForward = useRef(false);
  const hasCompletedBackward = useRef(true);
  const exitCooldown = useRef(false);
  const initialLoadComplete = useRef(false);

  const activeFeature = features[activeIndex];

  // Check for mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Set initialLoadComplete after mount delay to prevent auto-lock on page refresh
  useEffect(() => {
    const timer = setTimeout(() => {
      initialLoadComplete.current = true;
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  // Center section in viewport
  const centerSection = useCallback(() => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const elementCenter = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;
    const scrollOffset = elementCenter - viewportCenter;

    window.scrollBy({
      top: scrollOffset,
      behavior: 'smooth'
    });
  }, []);

  // Observer for header leaving viewport (scrolling down) - engage lock at tab 0
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (exitCooldown.current) return;
        if (!initialLoadComplete.current) return;

        if (!entry.isIntersecting && !isLocked && hasCompletedBackward.current) {
          setIsLocked(true);
          setActiveIndex(0);
          hasCompletedBackward.current = false;
          accumulatedDelta.current = 0;
          isProcessing.current = false;
          centerSection();
        }
      },
      { threshold: 0, rootMargin: '0px 0px 0px 0px' }
    );

    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, [isMobile, isLocked, centerSection]);

  // Observer for container re-entry from bottom (scrolling up) - engage lock at tab 3
  useEffect(() => {
    if (isMobile) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (exitCooldown.current) return;

        if (!entry.isIntersecting) {
          exitCooldown.current = false;
          return;
        }

        const rect = entry.boundingClientRect;
        if (rect.top > 0 && !isLocked && hasCompletedForward.current) {
          setIsLocked(true);
          setActiveIndex(3);
          hasCompletedForward.current = false;
          accumulatedDelta.current = 0;
          isProcessing.current = false;
          centerSection();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isMobile, isLocked, centerSection]);

  // Wheel handler - cleaner tab switching
  useEffect(() => {
    if (!isLocked || isMobile) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();

      if (isProcessing.current) return;

      accumulatedDelta.current += e.deltaY;

      const threshold = 80;

      if (Math.abs(accumulatedDelta.current) >= threshold) {
        isProcessing.current = true;
        const direction = accumulatedDelta.current > 0 ? 1 : -1;
        accumulatedDelta.current = 0;

        setActiveIndex(prev => {
          if (prev === 3 && direction > 0) {
            exitCooldown.current = true;
            hasCompletedForward.current = true;
            hasCompletedBackward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: 400, behavior: 'smooth' });
            }, 50);
            return 3;
          }

          if (prev === 0 && direction < 0) {
            exitCooldown.current = true;
            hasCompletedBackward.current = true;
            hasCompletedForward.current = false;
            setTimeout(() => {
              setIsLocked(false);
              window.scrollBy({ top: -400, behavior: 'smooth' });
            }, 50);
            return 0;
          }

          return prev + direction;
        });

        setTimeout(() => {
          isProcessing.current = false;
        }, 200);
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [isLocked, isMobile]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 sm:px-12 md:px-16 lg:px-24 py-16 sm:py-20 md:py-24"
      aria-labelledby="features-heading"
    >
      <div className="w-full">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-8 sm:mb-12">
          <h2
            id="features-heading"
            className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-[#000000] mb-3 sm:mb-4 max-w-[800px] mx-auto px-2"
          >
            AI-powered precision for smarter lead engagement
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto px-2">
            Every outreach is tested and proven before campaigns launch, guaranteeing results backed by AIVI data.
          </p>
        </div>

        {/* Main Content Container */}
        <div ref={containerRef} className="space-y-8">
          {/* Progress Indicator */}
          {!isMobile && (
            <div className="flex justify-center gap-3 mb-6" role="group" aria-label="Feature progress">
              {features.map((feature, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="h-2 rounded-full focus-brand-ring"
                  animate={{
                    width: i === activeIndex ? 40 : 24,
                    backgroundColor: i <= activeIndex ? '#f84608' : '#d1d5db',
                  }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  aria-label={`Go to ${feature.title}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                />
              ))}
            </div>
          )}

          {/* Scroll Lock Indicator */}
          <AnimatePresence>
            {isLocked && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex justify-center mb-4"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#f84608]/10 to-[#321ca3]/10 rounded-full">
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                    className="text-[#f84608]"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.span>
                  <span className="text-sm font-medium aivi-gradient-text">
                    Scroll to explore all features
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tab Buttons */}
          <div
            className="grid grid-cols-2 lg:grid-cols-4 gap-3"
            role="tablist"
            aria-label="AIVI Feature Tabs"
          >
            {features.map((feature, index) => (
              <button
                key={feature.id}
                id={feature.id}
                ref={(el) => { tabRefs.current[index] = el; }}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(e) => {
                  const key = e.key;
                  if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(key)) return;
                  e.preventDefault();
                  let next = index;
                  if (key === 'ArrowRight') next = (index + 1) % features.length;
                  if (key === 'ArrowLeft') next = (index - 1 + features.length) % features.length;
                  if (key === 'Home') next = 0;
                  if (key === 'End') next = features.length - 1;
                  setActiveIndex(next);
                  requestAnimationFrame(() => tabRefs.current[next]?.focus());
                }}
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="feature-panel"
                tabIndex={activeIndex === index ? 0 : -1}
                className={`relative flex items-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 focus:outline-none focus-brand-ring ${
                  activeIndex === index
                    ? 'border-[#f84608]/30 bg-[#FAFAFA] shadow-md'
                    : 'border-[#E5E5E5] bg-white hover:border-[#CCCCCC] hover:bg-[#FAFAFA]'
                }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                  activeIndex === index ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white' : 'bg-[#F5F5F5] text-[#000000]'
                }`}>
                  {feature.icon}
                </div>
                <span className="font-semibold text-[14px] text-[#000000] text-left">
                  {feature.title}
                </span>
                <motion.div
                  className="absolute bottom-0 left-2 right-2 h-1 rounded-full bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div
            className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start min-h-[400px]"
            role="tabpanel"
            id="feature-panel"
            aria-labelledby={features[activeIndex].id}
          >
            {/* Left Column - Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 30, filter: 'blur(4px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="space-y-6"
              >
                <h3 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.25] font-normal text-[#000000]">
                  {activeFeature.mainTitle}
                </h3>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="group relative w-full sm:w-auto px-6 py-3 text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#f84608] to-[#321ca3] focus-brand-ring">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 group-hover:opacity-100 transition-opacity duration-300" aria-hidden="true" />
                  </button>
                  <button className="w-full sm:w-auto px-6 py-3 bg-white border-2 border-[#000000] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#000000] hover:text-white transition-colors focus-brand-ring">
                    Learn more
                  </button>
                </div>

                {/* Feature List */}
                <ul className="space-y-3" aria-label={`${activeFeature.title} features`}>
                  {activeFeature.features.map((item, index) => (
                    <motion.li
                      key={`${activeIndex}-${index}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: index * 0.05 }}
                      className="flex gap-3 items-start"
                    >
                      <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center" aria-hidden="true">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-[15px] leading-[1.5] text-[#333333]">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Demo Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`demo-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(4px)' }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className={`rounded-2xl overflow-hidden shadow-lg ${activeFeature.activeColor} mt-6 lg:mt-0`}
              >
                <div className="aspect-[16/10] p-6 md:p-8 flex items-center justify-center">
                  <div className="w-full bg-white/25 backdrop-blur-sm rounded-xl p-6 space-y-4">
                    <div className="h-4 bg-white/40 rounded w-3/4" aria-hidden="true"></div>
                    <div className="h-4 bg-white/40 rounded w-full" aria-hidden="true"></div>
                    <div className="h-4 bg-white/40 rounded w-5/6" aria-hidden="true"></div>
                    <div className="mt-6 space-y-3">
                      <div className="h-12 bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-lg flex items-center justify-center shadow-md">
                        <span className="text-[14px] font-semibold text-white">{activeFeature.title} Dashboard</span>
                      </div>
                      <div className="h-10 bg-white/40 rounded-lg" aria-hidden="true"></div>
                      <div className="h-10 bg-white/40 rounded-lg" aria-hidden="true"></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
