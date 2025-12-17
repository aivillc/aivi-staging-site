'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsLightning, BsPersonCheck, BsGraphUp } from 'react-icons/bs';
import { BiTargetLock } from 'react-icons/bi';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';

const features = [
  {
    id: 'instant-engagement',
    title: 'Instant Engagement',
    activeColor: 'bg-[#FFF5F2]',
    icon: <BsLightning className="w-7 h-7" />,
    description: '3-Second Multi-Channel Response',
    mainTitle: '3-Second Multi-Channel Response',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          AIVI instantly connects with every lead within 3 seconds of their inquiry—before they even have time to consider a competitor.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Why This Matters:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">78% of customers buy from whoever responds first</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Average industry response time: 47 hours</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Every minute of delay drops conversion rates by 7%</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'intelligent-qualification',
    title: 'Intelligent Qualification',
    activeColor: 'bg-[#F0F7FF]',
    icon: <BiTargetLock className="w-7 h-7" />,
    description: 'AI-Driven Pre-Approval',
    mainTitle: 'AI-Driven Pre-Approval',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          Through natural conversation, AIVI gathers critical qualification data while building rapport—no robotic questionnaires, no lost leads.
        </p>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal mt-6">
          Within 90 seconds, AIVI has collected: property value, loan amount, credit range, employment status, and refinancing goals—all through conversational flow.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Data Captured:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Home Value: $450,000</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Current Balance: $280,000</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">LTV Ratio: 62%</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Credit Score: 720-740 range</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Goal: Lower monthly payment</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Lead Score: 87/100 (Hot)</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 'strategic-handoff',
    title: 'Strategic Human Handoff',
    activeColor: 'bg-[#F5F0FF]',
    icon: <BsPersonCheck className="w-7 h-7" />,
    description: 'Warm Transfer to Revenue Specialist',
    mainTitle: 'Warm Transfer to Revenue Specialist',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          When a lead is qualified and ready, AIVI executes a seamless warm transfer—providing your loan officer with complete context before they say hello.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">What Mike Sees (Before Answering):</h4>
        <div className="bg-[#f8f8f8] rounded-2xl p-6 border border-[#e5e5e5]">
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Lead:</span>
              <span className="text-[16px] font-semibold text-[#0a0a0a]">Sarah Johnson</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Score:</span>
              <span className="text-[16px] font-semibold text-[#f84608]">87/100 (Hot)</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Opportunity:</span>
              <span className="text-[16px] font-semibold text-[#0a0a0a]">Refinance, $170K equity</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Credit:</span>
              <span className="text-[16px] font-semibold text-[#0a0a0a]">720-740</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Motivation:</span>
              <span className="text-[16px] font-semibold text-[#0a0a0a]">Lower monthly payment</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[16px] text-[#666666] font-medium">Summary:</span>
              <span className="text-[16px] font-semibold text-[#0a0a0a]">Engaged, ready to discuss</span>
            </div>
          </div>
        </div>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal mt-6">
          <strong className="font-semibold">Mike&apos;s first words:</strong> &quot;Hi Sarah! I see you&apos;re looking to lower your monthly payment on your refinance—with your equity position, we have some great options. Let me pull up a few scenarios for you...&quot;
        </p>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          No awkward restarts. No repeated questions. Just a smooth, professional experience that converts.
        </p>
      </div>
    ),
  },
  {
    id: 'continuous-optimization',
    title: 'Continuous Optimization',
    activeColor: 'bg-[#F0FFF4]',
    icon: <BsGraphUp className="w-7 h-7" />,
    description: 'Performance Intelligence',
    mainTitle: 'Performance Intelligence',
    content: (
      <div className="space-y-6 font-manrope">
        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal">
          Every interaction feeds AIVI&apos;s learning engine. Real-time analytics reveal what&apos;s working and what needs adjustment—automatically.
        </p>

        <h4 className="text-[20px] font-semibold text-[#0a0a0a] mt-8">Automated Optimization:</h4>
        <ul className="space-y-4">
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">A/B tests conversation approaches automatically</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Identifies optimal contact times by lead segment</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Refines qualification questions based on conversion data</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Adjusts channel preferences per lead behavior</span>
          </li>
          <li className="flex gap-4 items-start">
            <div className="w-6 h-6 mt-1 flex-shrink-0 bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-[18px] leading-[1.6] text-[#1a1a1a] font-normal">Surfaces coaching opportunities for human agents</span>
          </li>
        </ul>

        <p className="text-[18px] leading-[1.8] text-[#1a1a1a] font-normal mt-6">
          <strong className="font-semibold">Result:</strong> Performance improves week over week without manual intervention—AIVI gets smarter with every conversation.
        </p>
      </div>
    ),
  },
];

export default function AIVIFeatureTabsV4() {
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

  // Canvas ref for constellation animation
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const activeFeature = features[activeIndex];

  // Use the shared neural canvas hook
  useNeuralCanvas(canvasRef);

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
      className="w-full relative overflow-hidden px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32 font-manrope bg-[#f5f0e8]"
      aria-labelledby="features-heading"
    >
      {/* Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.7 }}
      />

      {/* Subtle gradient orbs for depth */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{ background: 'radial-gradient(circle, #f84608 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-[0.02]"
        style={{ background: 'radial-gradient(circle, #321ca3 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="w-full relative z-10">
        {/* Premium Section Header */}
        <div ref={headerRef} className="text-center mb-14 sm:mb-18">
          {/* Style 3: Dual Line Embrace Eyebrow */}
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              How It Works
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>

          <h2
            id="features-heading"
            className="text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] font-medium text-[#0a0a0a] mb-6 max-w-[900px] mx-auto tracking-[-0.02em]"
          >
            The AIVI Orchestration Flow
          </h2>
          <p className="text-[18px] sm:text-[20px] leading-[1.7] text-[#555555] max-w-[700px] mx-auto font-normal">
            From first contact to closed deal—see how AIVI transforms every lead into a qualified opportunity.
          </p>
        </div>

        {/* Main Content Container */}
        <div ref={containerRef} className="space-y-10">
          {/* Premium Progress Indicator */}
          {!isMobile && (
            <div className="flex justify-center items-center gap-3 mb-10" role="group" aria-label="Feature progress">
              {features.map((feature, i) => (
                <motion.button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="relative h-3.5 rounded-full focus-brand-ring overflow-hidden"
                  animate={{ width: i === activeIndex ? 56 : 14 }}
                  transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  aria-label={`Go to ${feature.title}`}
                  aria-current={i === activeIndex ? 'true' : undefined}
                >
                  <div className="absolute inset-0 bg-[#e5e7eb] rounded-full" />
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'linear-gradient(90deg, #f84608, #321ca3)' }}
                    animate={{ opacity: i <= activeIndex ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>
          )}

          {/* Premium Scroll Lock Indicator */}
          <AnimatePresence>
            {isLocked && !isMobile && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center mb-8"
                role="status"
                aria-live="polite"
              >
                <div className="flex items-center gap-4 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full border border-[#f84608]/20 shadow-lg shadow-[#f84608]/5">
                  <motion.div
                    animate={{ y: [0, -4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    className="w-7 h-7 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </motion.div>
                  <span className="text-[15px] font-semibold text-[#374151]">
                    Scroll to explore all steps
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Premium Tab Buttons */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5"
            role="tablist"
            aria-label="AIVI Orchestration Steps"
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
                className={`relative flex flex-col items-start gap-3 sm:gap-4 p-5 sm:p-6 lg:p-7 rounded-2xl transition-all duration-400 ease-out focus:outline-none focus-brand-ring ${
                  activeIndex === index
                    ? 'bg-white shadow-xl shadow-black/5 border border-[#f84608]/20'
                    : 'bg-white/60 border border-[#e5e7eb] hover:bg-white hover:shadow-lg hover:shadow-black/5'
                }`}
              >
                {/* Step number badge */}
                <div className={`absolute -top-2.5 -left-2.5 w-7 h-7 rounded-full text-[12px] font-bold flex items-center justify-center transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white shadow-md shadow-[#f84608]/20'
                    : 'bg-[#f3f4f6] text-[#9ca3af]'
                }`}>
                  {index + 1}
                </div>

                {/* Icon with premium styling */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white shadow-lg shadow-[#f84608]/20'
                    : 'bg-[#f8f9fa] text-[#6b7280]'
                }`}>
                  {feature.icon}
                </div>

                {/* Text with description */}
                <div className="flex-1 text-left">
                  <span className="block text-[17px] font-semibold text-[#0a0a0a]">{feature.title}</span>
                  <span className="block text-[14px] text-[#6b7280] mt-1.5 font-medium">{feature.description}</span>
                </div>

                {/* Active indicator line */}
                <motion.div
                  className="absolute bottom-0 left-5 right-5 h-1 rounded-full bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                  initial={false}
                  animate={{
                    opacity: activeIndex === index ? 1 : 0,
                    scaleX: activeIndex === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Premium Content Panel */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start min-h-[400px] md:min-h-[480px] lg:min-h-[560px]"
            role="tabpanel"
            id="feature-panel"
            aria-labelledby={features[activeIndex].id}
          >
            {/* Left Column - Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -30, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="space-y-8"
              >
                <div>
                  {/* Premium step indicator */}
                  <div className="inline-flex items-center gap-3 mb-5">
                    <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white text-[14px] font-bold flex items-center justify-center shadow-lg shadow-[#f84608]/20">
                      {activeIndex + 1}
                    </span>
                    <span className="text-[14px] font-semibold tracking-[2px] text-[#f84608] uppercase">of 4</span>
                  </div>

                  <h3 className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] font-medium text-[#0a0a0a] tracking-[-0.02em]">
                    {activeFeature.mainTitle}
                  </h3>
                </div>

                {/* Dynamic Content */}
                {activeFeature.content}

                {/* Premium CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-5 pt-10">
                  <button className="group relative w-full sm:w-auto px-10 py-5 overflow-hidden text-white text-[17px] font-semibold rounded-xl bg-gradient-to-r from-[#f84608] to-[#321ca3] hover:shadow-xl hover:shadow-[#f84608]/20 hover:-translate-y-0.5 transition-all duration-400">
                    <span className="relative z-10">See It In Action</span>
                    {/* Shine effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </button>
                  <button className="w-full sm:w-auto px-10 py-5 bg-white/90 backdrop-blur-sm border-2 border-[#f84608]/30 text-[#f84608] text-[17px] font-semibold rounded-xl hover:bg-white hover:border-[#f84608]/50 hover:shadow-lg hover:shadow-[#f84608]/10 transition-all duration-400">
                    Learn more
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right Column - Premium Visual Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`visual-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                exit={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
                transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                className="relative mt-8 lg:mt-0"
              >
                {/* Outer glow effect */}
                <div
                  className="absolute -inset-4 rounded-[32px] opacity-40 pointer-events-none"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(248,70,8,0.15), transparent 70%)' }}
                  aria-hidden="true"
                />

                {/* Main card with glass-morphism */}
                <div className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${
                  activeIndex === 0 ? 'from-[#FFF7F5] to-[#FFF0EB]' :
                  activeIndex === 1 ? 'from-[#F5F8FF] to-[#EBF2FF]' :
                  activeIndex === 2 ? 'from-[#FAF5FF] to-[#F3EBFF]' :
                  'from-[#F5FFF7] to-[#EBFFEF]'
                } border border-white/60 shadow-2xl shadow-black/5`}>
                  <div className="aspect-[16/10] p-7 md:p-9 flex items-center justify-center">
                    <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-7 lg:p-9 shadow-xl border border-white/80 space-y-6">
                      {/* Step indicator */}
                      <div className="flex items-center gap-5 mb-3">
                        <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center text-white shadow-lg shadow-[#f84608]/20">
                          {activeFeature.icon}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold tracking-[2px] text-[#f84608] uppercase">Step {activeIndex + 1}</p>
                          <p className="text-[22px] font-semibold text-[#0a0a0a]">{activeFeature.title}</p>
                        </div>
                      </div>

                      {/* Visual representation */}
                      <div className="space-y-4">
                        {activeIndex === 0 ? (
                          /* Real Example visual for Instant Engagement */
                          <div className="space-y-4">
                            <h4 className="text-[16px] font-semibold text-[#0a0a0a]">Real Example:</h4>
                            <p className="text-[14px] leading-[1.7] text-[#555555]">
                              A lead submits their information at 2:47 PM. By 2:47:03 PM, they receive:
                            </p>

                            {/* Chat bubble */}
                            <div className="flex gap-3 items-start">
                              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[11px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-4 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[14px] leading-[1.7] text-[#374151]">
                                  Hi Sarah, this is Alex from Premier Lending. I see you're looking at refinancing options—I can help you explore rates that could save you $400/month. Is now a good time for a quick chat?
                                </p>
                              </div>
                            </div>

                            <p className="text-[14px] leading-[1.7] text-[#555555]">
                              The lead responds via text, and AIVI continues the conversation naturally—switching to phone when the lead shows buying signals.
                            </p>
                          </div>
                        ) : activeIndex === 1 ? (
                          /* Conversation Flow visual for Intelligent Qualification */
                          <div className="space-y-3">
                            <h4 className="text-[16px] font-semibold text-[#0a0a0a]">The Conversation Flow:</h4>

                            {/* AI Message 1 */}
                            <div className="flex gap-2 items-start">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[10px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-3 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[13px] leading-[1.6] text-[#374151]">
                                  Great to connect, Sarah! To find the best rates for you, what's the approximate value of your current home?
                                </p>
                              </div>
                            </div>

                            {/* User Response 1 */}
                            <div className="flex gap-2 items-start justify-end">
                              <div className="bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-2xl rounded-tr-md p-3 shadow-sm max-w-[60%]">
                                <p className="text-[13px] leading-[1.6] text-white">Around $450,000</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                                <span className="text-[10px] font-bold text-[#6b7280]">S</span>
                              </div>
                            </div>

                            {/* AI Message 2 */}
                            <div className="flex gap-2 items-start">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[10px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-3 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[13px] leading-[1.6] text-[#374151]">
                                  Perfect. And roughly how much do you still owe on your mortgage?
                                </p>
                              </div>
                            </div>

                            {/* User Response 2 */}
                            <div className="flex gap-2 items-start justify-end">
                              <div className="bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-2xl rounded-tr-md p-3 shadow-sm max-w-[60%]">
                                <p className="text-[13px] leading-[1.6] text-white">About $280,000</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                                <span className="text-[10px] font-bold text-[#6b7280]">S</span>
                              </div>
                            </div>

                            {/* AI Message 3 */}
                            <div className="flex gap-2 items-start">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[10px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-3 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[13px] leading-[1.6] text-[#374151]">
                                  Excellent—with that equity position, you have some great options. Do you know approximately where your credit score falls?
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : activeIndex === 2 ? (
                          /* Transfer Moment visual for Strategic Human Handoff */
                          <div className="space-y-3">
                            <h4 className="text-[16px] font-semibold text-[#0a0a0a]">The Transfer Moment:</h4>

                            {/* AI Message 1 */}
                            <div className="flex gap-2 items-start">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[10px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-3 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[12px] leading-[1.6] text-[#374151]">
                                  Sarah, based on what you've shared, I think you're a great candidate for our preferred rates. I'd love to connect you with Mike, one of our senior loan officers who specializes in exactly this type of refinance. He can walk you through specific numbers. Can I connect you right now?
                                </p>
                              </div>
                            </div>

                            {/* User Response */}
                            <div className="flex gap-2 items-start justify-end">
                              <div className="bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-2xl rounded-tr-md p-3 shadow-sm max-w-[60%]">
                                <p className="text-[12px] leading-[1.6] text-white">Yes, that would be great!</p>
                              </div>
                              <div className="w-8 h-8 rounded-full bg-[#e5e7eb] flex items-center justify-center flex-shrink-0">
                                <span className="text-[10px] font-bold text-[#6b7280]">S</span>
                              </div>
                            </div>

                            {/* AI Message 2 */}
                            <div className="flex gap-2 items-start">
                              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f84608] to-[#321ca3] flex items-center justify-center flex-shrink-0 shadow-md">
                                <span className="text-[10px] font-bold text-white">AI</span>
                              </div>
                              <div className="flex-1 bg-[#f8f8f8] rounded-2xl rounded-tl-md p-3 shadow-sm border border-[#e8e8e8]">
                                <p className="text-[12px] leading-[1.6] text-[#374151]">
                                  Perfect. Mike will be with you in just a moment. He'll have all the details we discussed ready to go.
                                </p>
                              </div>
                            </div>
                          </div>
                        ) : (
                          /* Live Dashboard Insights for Continuous Optimization */
                          <div className="space-y-3">
                            <h4 className="text-[16px] font-semibold text-[#0a0a0a]">Live Dashboard Insights:</h4>

                            {/* 2x2 Grid of Stats */}
                            <div className="grid grid-cols-2 gap-3">
                              <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-[#e8e8e8]">
                                <p className="text-[28px] font-bold text-[#9b2c5a]">94%</p>
                                <p className="text-[12px] text-[#6b7280] font-medium">Contact Rate</p>
                              </div>
                              <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-[#e8e8e8]">
                                <p className="text-[28px] font-bold text-[#6b7280]">2.3s</p>
                                <p className="text-[12px] text-[#6b7280] font-medium">Avg Response Time</p>
                              </div>
                              <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-[#e8e8e8]">
                                <p className="text-[28px] font-bold text-[#9b2c5a]">67%</p>
                                <p className="text-[12px] text-[#6b7280] font-medium">Qualification Rate</p>
                              </div>
                              <div className="bg-[#f8f8f8] rounded-xl p-4 text-center border border-[#e8e8e8]">
                                <p className="text-[28px] font-bold text-[#6b7280]">43%</p>
                                <p className="text-[12px] text-[#6b7280] font-medium">Transfer Acceptance</p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Premium stat cards */}
                      <div className="grid grid-cols-2 gap-5 mt-3">
                        {[
                          activeIndex === 0 ? ['3 sec', 'Response'] : activeIndex === 1 ? ['90 sec', 'Qualification'] : activeIndex === 2 ? ['100%', 'Context Transfer'] : ['24/7', 'Learning'],
                          activeIndex === 0 ? ['Multi', 'Channel'] : activeIndex === 1 ? ['Natural', 'Conversation'] : activeIndex === 2 ? ['Warm', 'Handoff'] : ['Auto', 'Optimize'],
                        ].map((item, i) => (
                          <div key={i} className="bg-white rounded-xl p-5 text-center border border-[#f0f0f0] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
                            <p className="text-[28px] lg:text-[32px] font-bold aivi-gradient-text">{item[0]}</p>
                            <p className="text-[13px] text-[#6b7280] font-semibold uppercase tracking-wider mt-1">{item[1]}</p>
                          </div>
                        ))}
                      </div>
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
