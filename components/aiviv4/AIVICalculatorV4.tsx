'use client';

import { useState, useRef, useEffect } from 'react';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { BsGraphUpArrow, BsRocketTakeoff, BsArrowLeftRight } from 'react-icons/bs';
import { useRevenueLiftStyleSafe } from './RevenueLiftStyleContext';
import { useLeadGateSafe } from './LeadGateContext';

export default function AIVICalculatorV4() {
  const [currentPackage, setCurrentPackage] = useState<'basic' | 'full'>('basic');
  const [advancedOpen, setAdvancedOpen] = useState(false);

  // Get the selected Revenue Lift style from context
  const revenueLiftContext = useRevenueLiftStyleSafe();
  const liftStyle = revenueLiftContext?.style || '3';

  // Lead gate context for gating the detailed breakdown
  const leadGateContext = useLeadGateSafe();
  const isGateUnlocked = leadGateContext?.isUnlocked ?? false;

  // Floating state - for styles that show floating elements
  const [showFloatingNumber, setShowFloatingNumber] = useState(false);
  const revenueCardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Style 2: Draggable banner state
  const [bannerX, setBannerX] = useState(0); // 0 = centered
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const bannerStartX = useRef(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  // Scroll detection for floating elements
  useEffect(() => {
    const handleScroll = () => {
      if (!revenueCardRef.current || !sectionRef.current) return;

      const cardRect = revenueCardRef.current.getBoundingClientRect();
      const sectionRect = sectionRef.current.getBoundingClientRect();

      // Show floating element when card is out of view but still in section
      const cardIsAboveViewport = cardRect.bottom < 100;
      const stillInSection = sectionRect.bottom > 200;
      setShowFloatingNumber(cardIsAboveViewport && stillInSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Style 2: Drag handlers for the floating banner
  useEffect(() => {
    if (liftStyle !== '2') return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      const deltaX = e.clientX - dragStartX.current;
      const newX = bannerStartX.current + deltaX;
      // Limit drag range to prevent going off screen
      const maxDrag = window.innerWidth / 2 - 150; // Leave some margin
      setBannerX(Math.max(-maxDrag, Math.min(maxDrag, newX)));
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - dragStartX.current;
      const newX = bannerStartX.current + deltaX;
      const maxDrag = window.innerWidth / 2 - 150;
      setBannerX(Math.max(-maxDrag, Math.min(maxDrag, newX)));
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isDragging, liftStyle]);

  const handleBannerDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setIsDragging(true);
    if ('touches' in e) {
      dragStartX.current = e.touches[0].clientX;
    } else {
      dragStartX.current = e.clientX;
    }
    bannerStartX.current = bannerX;
  };

  // Form values
  const [leadVolume, setLeadVolume] = useState(23000);
  const [transferRate, setTransferRate] = useState(35);
  const [closeRate, setCloseRate] = useState(8);
  const [commission, setCommission] = useState(2500);
  const [leadSpend, setLeadSpend] = useState(1000000);
  const [avgDebt, setAvgDebt] = useState(20000);

  // Formatting helpers
  const formatNumber = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return '$' + (num / 1000000).toFixed(2) + 'M';
    }
    return '$' + formatNumber(Math.round(num));
  };

  // Calculations
  const currentTransferred = Math.round(leadVolume * (transferRate / 100));
  const currentClosed = Math.round(currentTransferred * (closeRate / 100));
  const currentRevenue = currentClosed * commission;

  // AIVI calculations (package-dependent)
  let aiviTransferRate: number, aiviCloseRate: number;

  if (currentPackage === 'basic') {
    aiviTransferRate = Math.min(transferRate + 15, 55);
    aiviCloseRate = Math.min(closeRate + 3, 11);
  } else {
    aiviTransferRate = Math.min(transferRate + 25, 60);
    aiviCloseRate = Math.min(closeRate + 5, 13);
  }

  const aiviTransferred = Math.round(leadVolume * (aiviTransferRate / 100));
  const aiviClosed = Math.round(aiviTransferred * (aiviCloseRate / 100));
  const aiviRevenue = aiviClosed * commission;

  // Calculate lifts
  const transferredLift = aiviTransferred - currentTransferred;
  const closedLift = aiviClosed - currentClosed;
  const monthlyLift = aiviRevenue - currentRevenue;
  const annualLift = monthlyLift * 12;
  const transferRateImprovement = aiviTransferRate - transferRate;
  const closeRateImprovement = aiviCloseRate - closeRate;

  // Checkmark SVG component for reuse
  const CheckIcon = () => (
    <svg className="w-3 h-3 text-[#f84608]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section
      id="calculator-section"
      ref={sectionRef}
      className="w-full relative overflow-x-clip px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32 bg-[#FAFAFA]"
    >
      {/* Decorative background elements */}
      <div
        className="absolute top-20 right-10 w-[500px] h-[500px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f84608 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-[400px] h-[400px] rounded-full opacity-[0.02] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #321ca3 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-16">
          {/* Style 3: Dual Line Embrace Eyebrow */}
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              ROI Calculator
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>

          <h2 className="text-[40px] sm:text-[52px] md:text-[64px] font-normal text-[#0a0a0a] mb-5 leading-[1.05] tracking-[-0.03em]">
            Your Revenue<br className="hidden sm:block" />
            <span className="aivi-gradient-text">Orchestration Impact</span>
          </h2>

          <p className="text-[17px] sm:text-[19px] text-[#555555] max-w-[600px] mx-auto leading-[1.7] font-normal">
            See the exact revenue lift AIVI will generate from your current lead volume
          </p>
        </div>

        {/* Two-Column Layout - Inputs Left, Results Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 xl:gap-12">
          {/* Left Column: Inputs */}
          <div className="space-y-8">
            {/* Package Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Basic Response */}
              <button
                onClick={() => setCurrentPackage('basic')}
                className={`relative p-5 sm:p-6 lg:p-7 rounded-2xl transition-all duration-400 text-left overflow-hidden ${
                  currentPackage === 'basic'
                    ? 'bg-white shadow-xl border-2 border-[#f84608]'
                    : 'bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* Gradient background on active */}
                {currentPackage === 'basic' && (
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(248,70,8,0.08), rgba(50,28,163,0.04))' }}
                  />
                )}

                {/* Premium checkmark indicator */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mb-5 relative z-10 ${
                    currentPackage === 'basic'
                      ? 'border-[#f84608] bg-gradient-to-br from-[#f84608] to-[#321ca3]'
                      : 'border-[#d1d5db]'
                  }`}
                >
                  {currentPackage === 'basic' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-4 relative z-10">Basic Response</h3>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    Instant multi-channel engagement
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    3-second response time
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    3-day follow-up sequence
                  </li>
                </ul>
              </button>

              {/* Full Orchestration */}
              <button
                onClick={() => setCurrentPackage('full')}
                className={`relative p-5 sm:p-6 lg:p-7 rounded-2xl transition-all duration-400 text-left overflow-hidden ${
                  currentPackage === 'full'
                    ? 'bg-white shadow-xl border-2 border-[#f84608]'
                    : 'bg-white/70 backdrop-blur-sm border border-white/80 hover:bg-white hover:shadow-lg'
                }`}
              >
                {/* Gradient background on active */}
                {currentPackage === 'full' && (
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{ background: 'linear-gradient(135deg, rgba(248,70,8,0.08), rgba(50,28,163,0.04))' }}
                  />
                )}

                {/* Premium checkmark indicator */}
                <div
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mb-5 relative z-10 ${
                    currentPackage === 'full'
                      ? 'border-[#f84608] bg-gradient-to-br from-[#f84608] to-[#321ca3]'
                      : 'border-[#d1d5db]'
                  }`}
                >
                  {currentPackage === 'full' && (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>

                <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-4 relative z-10">Full Orchestration</h3>

                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    12-day nurture sequence
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    Credit pull + verification
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    Real-time agent coaching
                  </li>
                  <li className="flex items-center gap-3 text-[15px] text-[#555555]">
                    <span className="w-5 h-5 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0">
                      <CheckIcon />
                    </span>
                    Multi-agent routing
                  </li>
                </ul>
              </button>
            </div>

            {/* Slider Input Cards */}
            <div className="space-y-5">
              {/* Lead Volume */}
              <div className="calculator-input-card">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[14px] sm:text-[16px] font-semibold text-[#0a0a0a]">Monthly Lead Volume</span>
                    <p className="text-[12px] sm:text-[13px] text-[#9ca3af] mt-0.5 sm:mt-1">How many leads do you receive per month?</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[22px] sm:text-[28px] font-bold aivi-gradient-text">{formatNumber(leadVolume)}</span>
                    <span className="text-[12px] sm:text-[14px] text-[#9ca3af] ml-1 sm:ml-0 sm:block">leads</span>
                  </div>
                </div>
                <div className="relative pt-2 pb-1">
                  <input
                    type="range"
                    min={5000}
                    max={100000}
                    step={1000}
                    value={leadVolume}
                    onChange={(e) => setLeadVolume(Number(e.target.value))}
                    className="calculator-slider-premium"
                  />
                  <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                    <span>5,000</span>
                    <span>100,000</span>
                  </div>
                </div>
              </div>

              {/* Transfer Rate */}
              <div className="calculator-input-card">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[14px] sm:text-[16px] font-semibold text-[#0a0a0a]">Current Transfer Rate</span>
                    <p className="text-[12px] sm:text-[13px] text-[#9ca3af] mt-0.5 sm:mt-1">What % of leads get transferred to your closers?</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[22px] sm:text-[28px] font-bold aivi-gradient-text">{transferRate}%</span>
                    <span className="text-[12px] sm:text-[14px] text-[#9ca3af] ml-1 sm:ml-0 sm:block">rate</span>
                  </div>
                </div>
                <div className="relative pt-2 pb-1">
                  <input
                    type="range"
                    min={20}
                    max={50}
                    step={1}
                    value={transferRate}
                    onChange={(e) => setTransferRate(Number(e.target.value))}
                    className="calculator-slider-premium"
                  />
                  <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                    <span>20%</span>
                    <span>50%</span>
                  </div>
                </div>
              </div>

              {/* Close Rate */}
              <div className="calculator-input-card">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[14px] sm:text-[16px] font-semibold text-[#0a0a0a]">Current Close Rate</span>
                    <p className="text-[12px] sm:text-[13px] text-[#9ca3af] mt-0.5 sm:mt-1">What % of transferred leads close?</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[22px] sm:text-[28px] font-bold aivi-gradient-text">{closeRate}%</span>
                    <span className="text-[12px] sm:text-[14px] text-[#9ca3af] ml-1 sm:ml-0 sm:block">rate</span>
                  </div>
                </div>
                <div className="relative pt-2 pb-1">
                  <input
                    type="range"
                    min={3}
                    max={15}
                    step={1}
                    value={closeRate}
                    onChange={(e) => setCloseRate(Number(e.target.value))}
                    className="calculator-slider-premium"
                  />
                  <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                    <span>3%</span>
                    <span>15%</span>
                  </div>
                </div>
              </div>

              {/* Commission */}
              <div className="calculator-input-card">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-4 mb-4 sm:mb-5">
                  <div>
                    <span className="text-[14px] sm:text-[16px] font-semibold text-[#0a0a0a]">Commission Per Closed Loan</span>
                    <p className="text-[12px] sm:text-[13px] text-[#9ca3af] mt-0.5 sm:mt-1">Average commission/revenue per funded loan</p>
                  </div>
                  <div className="text-left sm:text-right">
                    <span className="text-[22px] sm:text-[28px] font-bold aivi-gradient-text">{formatCurrency(commission)}</span>
                    <span className="text-[12px] sm:text-[14px] text-[#9ca3af] ml-1 sm:ml-0 sm:block">per loan</span>
                  </div>
                </div>
                <div className="relative pt-2 pb-1">
                  <input
                    type="range"
                    min={500}
                    max={5000}
                    step={100}
                    value={commission}
                    onChange={(e) => setCommission(Number(e.target.value))}
                    className="calculator-slider-premium"
                  />
                  <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                    <span>$500</span>
                    <span>$5,000</span>
                  </div>
                </div>
              </div>

              {/* Advanced Options Toggle */}
              <button
                onClick={() => setAdvancedOpen(!advancedOpen)}
                className="w-full flex justify-between items-center p-4 bg-white/50 backdrop-blur-sm border border-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
              >
                <span className="text-[14px] font-medium text-[#f84608] flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Advanced Options
                </span>
                <span className={`transition-transform duration-300 text-[#9ca3af] ${advancedOpen ? 'rotate-180' : ''}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>

              {/* Advanced Inputs */}
              <div className={`overflow-hidden transition-all duration-300 ${advancedOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="space-y-5 pt-2">
                  {/* Lead Spend */}
                  <div className="calculator-input-card">
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <span className="text-[16px] font-semibold text-[#0a0a0a]">Monthly Lead Acquisition Cost</span>
                        <p className="text-[13px] text-[#9ca3af] mt-1">What do you currently spend on lead acquisition?</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[28px] font-bold aivi-gradient-text">{formatCurrency(leadSpend)}</span>
                        <span className="text-[14px] text-[#9ca3af] block">spend</span>
                      </div>
                    </div>
                    <div className="relative pt-2 pb-1">
                      <input
                        type="range"
                        min={50000}
                        max={2000000}
                        step={50000}
                        value={leadSpend}
                        onChange={(e) => setLeadSpend(Number(e.target.value))}
                        className="calculator-slider-premium"
                      />
                      <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                        <span>$50K</span>
                        <span>$2M</span>
                      </div>
                    </div>
                  </div>

                  {/* Avg Debt */}
                  <div className="calculator-input-card">
                    <div className="flex justify-between items-start mb-5">
                      <div>
                        <span className="text-[16px] font-semibold text-[#0a0a0a]">Average Loan Amount</span>
                        <p className="text-[13px] text-[#9ca3af] mt-1">Average debt consolidation amount</p>
                      </div>
                      <div className="text-right">
                        <span className="text-[28px] font-bold aivi-gradient-text">{formatCurrency(avgDebt)}</span>
                        <span className="text-[14px] text-[#9ca3af] block">avg</span>
                      </div>
                    </div>
                    <div className="relative pt-2 pb-1">
                      <input
                        type="range"
                        min={5000}
                        max={50000}
                        step={1000}
                        value={avgDebt}
                        onChange={(e) => setAvgDebt(Number(e.target.value))}
                        className="calculator-slider-premium"
                      />
                      <div className="flex justify-between mt-3 text-[12px] text-[#9ca3af]">
                        <span>$5K</span>
                        <span>$50K</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: All Results */}
          <div className="space-y-6">
            {/* Main Impact Card - Normal Card (scrolls normally) */}
            <div
              ref={revenueCardRef}
              className="calculator-results-gradient rounded-3xl overflow-hidden"
            >
              <div className="relative p-8 sm:p-10 text-white text-center">
                <div className="text-[12px] font-semibold uppercase tracking-[3px] opacity-80 mb-3">
                  Your Revenue Lift
                </div>
                <div className="text-[48px] sm:text-[56px] font-bold leading-none tracking-[-0.03em] mb-2">
                  +{formatCurrency(monthlyLift)}
                </div>
                <div className="text-[15px] opacity-90 mb-5">
                  per month • <span className="font-semibold">{formatCurrency(annualLift)}</span> per year
                </div>
                {/* Mini stats row */}
                <div className="flex justify-center gap-8 pt-5 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-[24px] font-bold">+{transferRateImprovement}%</div>
                    <div className="text-[11px] opacity-70 uppercase tracking-wider">Transfer Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[24px] font-bold">+{formatNumber(closedLift)}</div>
                    <div className="text-[11px] opacity-70 uppercase tracking-wider">Extra Closes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Mini Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Current */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/80">
                <div className="text-[11px] font-semibold uppercase tracking-[2px] text-[#9ca3af] mb-3">Current</div>
                <div className="text-[22px] font-bold text-[#374151]">{formatCurrency(currentRevenue)}</div>
                <div className="text-[13px] text-[#9ca3af]">/month</div>
              </div>

              {/* With AIVI */}
              <div className="bg-gradient-to-br from-[rgba(248,70,8,0.08)] to-[rgba(50,28,163,0.08)] rounded-2xl p-5 border-2 border-[#f84608]/30">
                <div className="text-[11px] font-semibold uppercase tracking-[2px] text-[#f84608] mb-3">With AIVI</div>
                <div className="text-[22px] font-bold text-[#0a0a0a]">{formatCurrency(aiviRevenue)}</div>
                <div className="text-[13px] text-[#10b981] font-semibold">+{formatCurrency(monthlyLift)}</div>
              </div>
            </div>

            {/* Conservative Estimate Note */}
            <div className="text-center text-[13px] text-[#6b7280] bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/60">
              Conservative estimate based on {aiviTransferRate}% transfer rate. Top performers achieve 65%+.
            </div>

            {/* Detailed Performance Breakdown - Now in right column */}
            <div className="pt-6 border-t border-[#c0c1c2] relative">
              {/* Actual Content - blurred when gated */}
              <div className={`transition-all duration-500 ${!isGateUnlocked ? 'blur-md opacity-50 select-none' : ''}`}>
                <h3 className="text-[20px] font-semibold text-[#0a0a0a] mb-2">Detailed Performance Breakdown</h3>
                <p className="text-[14px] text-[#6b7280] mb-6">See exactly how AIVI improves each stage of your funnel</p>

                {/* Premium comparison cards - 2x2 grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Transfer Rate Card */}
                  <div className="calculator-breakdown-card">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[13px] text-[#555555] font-medium">Transfer Rate</span>
                      <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                        +{transferRateImprovement}pts
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{transferRate}%</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gray" style={{ width: `${(transferRate / 60) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{aiviTransferRate}%</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gradient" style={{ width: `${(aiviTransferRate / 60) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leads Transferred Card */}
                  <div className="calculator-breakdown-card">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[13px] text-[#555555] font-medium">Leads Transferred</span>
                      <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                        +{formatNumber(transferredLift)}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{formatNumber(currentTransferred)}</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gray" style={{ width: `${(currentTransferred / aiviTransferred) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{formatNumber(aiviTransferred)}</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gradient" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close Rate Card */}
                  <div className="calculator-breakdown-card">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[13px] text-[#555555] font-medium">Close Rate</span>
                      <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                        +{closeRateImprovement}pts
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{closeRate}%</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gray" style={{ width: `${(closeRate / 15) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{aiviCloseRate}%</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gradient" style={{ width: `${(aiviCloseRate / 15) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Closed Loans Card */}
                  <div className="calculator-breakdown-card">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[13px] text-[#555555] font-medium">Closed Loans</span>
                      <span className="text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 px-2 py-1 rounded-full">
                        +{formatNumber(closedLift)}
                      </span>
                    </div>

                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{formatNumber(currentClosed)}</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gray" style={{ width: `${(currentClosed / aiviClosed) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[12px] mb-1.5">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{formatNumber(aiviClosed)}</span>
                        </div>
                        <div className="calculator-progress-bar">
                          <div className="calculator-progress-fill calculator-progress-fill-gradient" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Summary - Premium unified tile */}
                <div className="mt-5 bg-white rounded-2xl p-5 border border-[#e5e5e5] shadow-[0_4px_20px_rgba(0,0,0,0.06)]">
                  <div className="flex items-center justify-between divide-x divide-[#e5e5e5]">
                    {/* Current Revenue */}
                    <div className="flex-1 flex items-center gap-3 pr-5">
                      <div className="w-10 h-10 rounded-xl bg-[#f5f5f5] flex items-center justify-center flex-shrink-0">
                        <HiOutlineCurrencyDollar className="w-5 h-5 text-[#6b7280]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#9ca3af] uppercase tracking-[0.12em] font-medium block mb-0.5">Current</span>
                        <span className="text-[17px] font-bold text-[#374151]">{formatCurrency(currentRevenue)}</span>
                      </div>
                    </div>

                    {/* With AIVI */}
                    <div className="flex-1 flex items-center gap-3 px-5">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 flex items-center justify-center flex-shrink-0">
                        <BsGraphUpArrow className="w-4 h-4 text-[#f84608]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#f84608] uppercase tracking-[0.12em] font-semibold block mb-0.5">With AIVI</span>
                        <span className="text-[17px] font-bold text-[#0a0a0a]">{formatCurrency(aiviRevenue)}</span>
                      </div>
                    </div>

                    {/* Monthly Lift */}
                    <div className="flex-1 flex items-center gap-3 pl-5">
                      <div className="w-10 h-10 rounded-xl bg-[#10b981]/10 flex items-center justify-center flex-shrink-0">
                        <BsRocketTakeoff className="w-4 h-4 text-[#10b981]" />
                      </div>
                      <div>
                        <span className="text-[10px] text-[#10b981] uppercase tracking-[0.12em] font-semibold block mb-0.5">Lift</span>
                        <span className="text-[17px] font-bold text-[#10b981]">+{formatCurrency(monthlyLift)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Revenue Disclaimer */}
                <div className="mt-4 text-center text-[13px] text-[#6b7280] leading-relaxed bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-white/60">
                  Results based on {formatNumber(leadVolume)} monthly leads at ${formatNumber(commission)} commission per close.<br />
                  Actual results may vary based on lead quality, team performance, and market conditions.<br />
                  AIVI customers typically see ROI within the first 30 days of implementation.<br />
                  Schedule a strategy call to get a personalized projection for your business.
                </div>
              </div>

              {/* Lead Gate Overlay */}
              {!isGateUnlocked && (
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/60 backdrop-blur-sm rounded-2xl">
                  <div className="text-center max-w-md px-6">
                    {/* Lock Icon */}
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 flex items-center justify-center">
                      <svg className="w-8 h-8 text-[#f84608]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>

                    {/* Title */}
                    <h3 className="text-[22px] font-bold text-[#0a0a0a] mb-2">
                      Unlock Your Full Analysis
                    </h3>

                    {/* Description */}
                    <p className="text-[14px] text-[#6b7280] mb-6">
                      Try our personalized demo in the hero section to see your detailed performance breakdown
                    </p>

                    {/* CTA Button - Scroll to Hero */}
                    <button
                      onClick={() => {
                        document.getElementById('hero-demo-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-6 py-3 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                      Try Personalized Demo
                    </button>

                    {/* Bypass Link */}
                    <button
                      onClick={() => leadGateContext?.unlockGate()}
                      className="block mx-auto mt-4 text-[12px] text-[#9ca3af] hover:text-[#6b7280] transition-colors underline"
                    >
                      Just show me the numbers
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Buttons - Full width at bottom */}
        <div className="mt-12 max-w-[500px] mx-auto space-y-3">
          <a
            href="https://calendar.app.google/CUobgKJa1AZh95tTA"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-5 rounded-2xl text-[16px] font-semibold text-center bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] hover:-translate-y-1 hover:shadow-xl transition-all duration-400"
          >
            Book Strategy Call →
          </a>
          <a
            href="#case-studies"
            className="block w-full py-4 rounded-xl text-[15px] font-medium text-center bg-white/60 backdrop-blur-sm text-[#374151] border border-white/80 hover:bg-white hover:shadow-md transition-all duration-300"
          >
            See Case Studies
          </a>
        </div>
      </div>

      {/* Floating Elements - Different styles based on liftStyle */}

      {/* Style 1: Morphing Floating Pill */}
      {liftStyle === '1' && (
        <div
          className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
            showFloatingNumber
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-4 pointer-events-none'
          }`}
        >
          <button
            onClick={() => revenueCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="group flex items-center gap-3 px-5 py-3 rounded-full cursor-pointer calculator-results-gradient shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
          >
            <span className="text-[22px] sm:text-[26px] font-bold text-white leading-none">
              +{formatCurrency(monthlyLift)}
            </span>
            <span className="text-[11px] text-white/70 uppercase tracking-wider">/mo</span>
            <svg className="w-4 h-4 text-white/60 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      )}

      {/* Style 2: Draggable Floating Banner (like ROI Option C) */}
      {liftStyle === '2' && (
        <div
          ref={bannerRef}
          className={`fixed bottom-0 z-50 select-none rounded-t-2xl overflow-hidden ${
            showFloatingNumber
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-full pointer-events-none'
          }`}
          style={{
            left: '50%',
            transform: `translateX(calc(-50% + ${bannerX}px))`,
            cursor: isDragging ? 'grabbing' : 'grab',
            transition: isDragging ? 'none' : 'all 0.3s ease',
          }}
          onMouseDown={handleBannerDragStart}
          onTouchStart={handleBannerDragStart}
        >
          {/* Gradient accent bar */}
          <div
            className="h-[3px] w-full"
            style={{
              background: 'linear-gradient(90deg, #8b00ff 0%, #f84608 50%, #8b00ff 100%)',
              backgroundSize: '200% 100%',
              animation: 'gradientFlow 3s ease-in-out infinite',
            }}
          />

          {/* Content */}
          <div
            className="flex items-center gap-4 px-6 py-4"
            style={{
              background: 'linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderTop: 'none',
              boxShadow: '0 -4px 30px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2)',
            }}
          >
            {/* Drag Handle */}
            <div className="flex items-center justify-center opacity-50 mr-1">
              <BsArrowLeftRight className="w-5 h-5 text-white/70" />
            </div>

            {/* Revenue Lift - Main Number */}
            <div className="flex items-baseline gap-2">
              <span className="text-[28px] sm:text-[32px] font-bold text-white leading-none">
                +{formatCurrency(monthlyLift)}
              </span>
              <span className="text-[12px] text-white/50">/mo</span>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/20" />

            {/* Stats */}
            <div className="flex gap-5">
              <div className="text-center">
                <div className="text-[18px] font-bold text-white">+{transferRateImprovement}%</div>
                <div className="text-[9px] text-white/50 uppercase tracking-wider">Transfer</div>
              </div>
              <div className="text-center">
                <div className="text-[18px] font-bold text-white">+{formatNumber(closedLift)}</div>
                <div className="text-[9px] text-white/50 uppercase tracking-wider">Closes</div>
              </div>
            </div>

            {/* Divider */}
            <div className="w-px h-10 bg-white/20" />

            {/* Annual */}
            <div className="text-center">
              <div className="text-[16px] font-bold text-[#10b981]">{formatCurrency(annualLift)}</div>
              <div className="text-[9px] text-white/50 uppercase tracking-wider">Per Year</div>
            </div>

            {/* Click to scroll button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                revenueCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="ml-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200"
              aria-label="Scroll to calculator"
            >
              <svg className="w-4 h-4 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Style 3: Detached Floating Number */}
      {liftStyle === '3' && (
        <div
          className={`fixed top-28 right-6 z-50 transition-all duration-300 ${
            showFloatingNumber
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <button
            onClick={() => revenueCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="group flex flex-col items-end cursor-pointer"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[1.5px] text-[#555555] mb-1">
              Revenue Lift
            </span>
            <span className="text-[28px] sm:text-[32px] font-bold aivi-gradient-text leading-none group-hover:scale-105 transition-transform duration-200">
              +{formatCurrency(monthlyLift)}
            </span>
            <span className="text-[11px] text-[#777777] mt-0.5">/month</span>
          </button>
        </div>
      )}

    </section>
  );
}
