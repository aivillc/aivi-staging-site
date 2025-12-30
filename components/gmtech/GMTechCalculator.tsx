'use client';

import { useState, useRef, useEffect } from 'react';
import { HiOutlineCurrencyDollar } from 'react-icons/hi2';
import { BsGraphUpArrow, BsRocketTakeoff } from 'react-icons/bs';
import { useRevenueLiftStyleSafe } from '../aiviv4/RevenueLiftStyleContext';
import { useLeadGateSafe } from '../aiviv4/LeadGateContext';
import { useDemoPopup } from '../aiviv3/DemoPopupContext';

/**
 * GMTech-specific ROI Calculator
 * - Header: "Speed to Lead ROI Calculator"
 * - Transfer Rate: +10% basic, +15% premium (fixed increase)
 * - Close Rate: +3% basic, +5% premium (fixed increase)
 * - Compact sizing optimized for GMTech page
 */
export default function GMTechCalculator() {
  const [currentPackage, setCurrentPackage] = useState<'basic' | 'full'>('basic');
  const [advancedOpen, setAdvancedOpen] = useState(false);

  const revenueLiftContext = useRevenueLiftStyleSafe();
  const liftStyle = revenueLiftContext?.style || '3';

  const leadGateContext = useLeadGateSafe();
  const isGateUnlocked = leadGateContext?.isUnlocked ?? false;

  const { openDemoPopup } = useDemoPopup();

  const [showFloatingNumber, setShowFloatingNumber] = useState(false);
  const revenueCardRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const benefitsSection = document.getElementById('benefits-section');
      const calculatorInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;
      let benefitsInView = false;
      if (benefitsSection) {
        const benefitsRect = benefitsSection.getBoundingClientRect();
        benefitsInView = benefitsRect.top < window.innerHeight;
      }
      setShowFloatingNumber(calculatorInView && !benefitsInView);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Form values
  const [leadVolume, setLeadVolume] = useState(23000);
  const [transferRate, setTransferRate] = useState(35);
  const [closeRate, setCloseRate] = useState(8);
  const [commission, setCommission] = useState(2500);

  // Formatting helpers
  const formatNumber = (num: number) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  const formatCurrency = (num: number) => {
    if (num >= 1000000) {
      return '$' + (num / 1000000).toFixed(2) + 'M';
    }
    return '$' + formatNumber(Math.round(num));
  };

  // Current calculations
  const currentTransferred = Math.round(leadVolume * (transferRate / 100));
  const currentClosed = Math.round(currentTransferred * (closeRate / 100));
  const currentRevenue = currentClosed * commission;

  // AIVI calculations - GMTech specific:
  // Basic: +10% transfer rate, +3% close rate
  // Premium: +15% transfer rate, +5% close rate
  let aiviTransferRate: number, aiviCloseRate: number;

  if (currentPackage === 'basic') {
    aiviTransferRate = transferRate + 10;
    aiviCloseRate = closeRate + 3;
  } else {
    aiviTransferRate = transferRate + 15;
    aiviCloseRate = closeRate + 5;
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

  const CheckIcon = () => (
    <svg className="w-3 h-3 text-[#f84608]" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );

  return (
    <section
      id="calculator-section"
      ref={sectionRef}
      className="w-full relative overflow-x-clip px-4 sm:px-6 md:px-10 lg:px-12 py-12 sm:py-16 md:py-20 bg-[#FAFAFA]"
    >
      {/* Decorative background - smaller */}
      <div
        className="absolute top-10 right-5 w-[300px] h-[300px] rounded-full opacity-[0.03] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #f84608 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="max-w-[1300px] mx-auto relative z-10">
        {/* Compact Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#f84608]">
              Speed to Lead ROI Calculator
            </span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-normal text-[#0a0a0a] mb-3 leading-[1.1] tracking-[-0.03em]">
            What&apos;s 20 Minutes<br />
            <span className="aivi-gradient-text">Costing You?</span>
          </h2>

          <p className="text-[15px] sm:text-[16px] text-[#555555] max-w-[500px] mx-auto leading-[1.6]">
            Calculate your monthly revenue recovery from instant 3-second contact
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {/* Left Column: Inputs */}
          <div className="space-y-4">
            {/* Package Selector - More Compact */}
            <div className="grid grid-cols-2 gap-3">
              {/* Basic Response */}
              <button
                onClick={() => setCurrentPackage('basic')}
                className={`relative p-3 sm:p-4 rounded-xl transition-all duration-300 text-left overflow-hidden ${
                  currentPackage === 'basic'
                    ? 'bg-white shadow-lg border-2 border-[#f84608]'
                    : 'bg-white/70 border border-white/80 hover:bg-white hover:shadow-md'
                }`}
              >
                {currentPackage === 'basic' && (
                  <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(248,70,8,0.06), rgba(50,28,163,0.03))' }} />
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mb-2 relative z-10 ${
                  currentPackage === 'basic' ? 'border-[#f84608] bg-gradient-to-br from-[#f84608] to-[#321ca3]' : 'border-[#d1d5db]'
                }`}>
                  {currentPackage === 'basic' && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2 relative z-10">Basic</h3>
                <ul className="space-y-1.5 relative z-10">
                  <li className="flex items-center gap-2 text-[12px] text-[#555555]">
                    <span className="w-4 h-4 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                    +10% transfer rate
                  </li>
                  <li className="flex items-center gap-2 text-[12px] text-[#555555]">
                    <span className="w-4 h-4 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                    +3% close rate
                  </li>
                </ul>
              </button>

              {/* Premium */}
              <button
                onClick={() => setCurrentPackage('full')}
                className={`relative p-3 sm:p-4 rounded-xl transition-all duration-300 text-left overflow-hidden ${
                  currentPackage === 'full'
                    ? 'bg-white shadow-lg border-2 border-[#f84608]'
                    : 'bg-white/70 border border-white/80 hover:bg-white hover:shadow-md'
                }`}
              >
                {currentPackage === 'full' && (
                  <div className="absolute inset-0 rounded-xl" style={{ background: 'linear-gradient(135deg, rgba(248,70,8,0.06), rgba(50,28,163,0.03))' }} />
                )}
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mb-2 relative z-10 ${
                  currentPackage === 'full' ? 'border-[#f84608] bg-gradient-to-br from-[#f84608] to-[#321ca3]' : 'border-[#d1d5db]'
                }`}>
                  {currentPackage === 'full' && (
                    <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <h3 className="text-[15px] font-semibold text-[#0a0a0a] mb-2 relative z-10">Premium</h3>
                <ul className="space-y-1.5 relative z-10">
                  <li className="flex items-center gap-2 text-[12px] text-[#555555]">
                    <span className="w-4 h-4 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                    +15% transfer rate
                  </li>
                  <li className="flex items-center gap-2 text-[12px] text-[#555555]">
                    <span className="w-4 h-4 rounded-full bg-[#f84608]/10 flex items-center justify-center flex-shrink-0"><CheckIcon /></span>
                    +5% close rate
                  </li>
                </ul>
              </button>
            </div>

            {/* Slider Inputs - Compact */}
            <div className="space-y-3">
              {/* Lead Volume */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/80 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-semibold text-[#0a0a0a]">Monthly Leads</span>
                  <span className="text-[18px] sm:text-[22px] font-bold aivi-gradient-text">{formatNumber(leadVolume)}</span>
                </div>
                <input
                  type="range"
                  min={5000}
                  max={100000}
                  step={1000}
                  value={leadVolume}
                  onChange={(e) => setLeadVolume(Number(e.target.value))}
                  className="calculator-slider-premium w-full"
                />
                <div className="flex justify-between mt-1 text-[10px] text-[#9ca3af]">
                  <span>5K</span>
                  <span>100K</span>
                </div>
              </div>

              {/* Transfer Rate */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/80 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-semibold text-[#0a0a0a]">Current Transfer Rate</span>
                  <span className="text-[18px] sm:text-[22px] font-bold aivi-gradient-text">{transferRate}%</span>
                </div>
                <input
                  type="range"
                  min={20}
                  max={50}
                  step={1}
                  value={transferRate}
                  onChange={(e) => setTransferRate(Number(e.target.value))}
                  className="calculator-slider-premium w-full"
                />
                <div className="flex justify-between mt-1 text-[10px] text-[#9ca3af]">
                  <span>20%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Close Rate */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/80 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-semibold text-[#0a0a0a]">Current Close Rate</span>
                  <span className="text-[18px] sm:text-[22px] font-bold aivi-gradient-text">{closeRate}%</span>
                </div>
                <input
                  type="range"
                  min={3}
                  max={15}
                  step={1}
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="calculator-slider-premium w-full"
                />
                <div className="flex justify-between mt-1 text-[10px] text-[#9ca3af]">
                  <span>3%</span>
                  <span>15%</span>
                </div>
              </div>

              {/* Commission */}
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-white/80 shadow-sm">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[13px] font-semibold text-[#0a0a0a]">Commission Per Close</span>
                  <span className="text-[18px] sm:text-[22px] font-bold aivi-gradient-text">{formatCurrency(commission)}</span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={5000}
                  step={100}
                  value={commission}
                  onChange={(e) => setCommission(Number(e.target.value))}
                  className="calculator-slider-premium w-full"
                />
                <div className="flex justify-between mt-1 text-[10px] text-[#9ca3af]">
                  <span>$500</span>
                  <span>$5K</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Results */}
          <div className="space-y-4">
            {/* Main Impact Card */}
            <div ref={revenueCardRef} className="calculator-results-gradient rounded-2xl overflow-hidden">
              <div className="relative p-5 sm:p-6 text-white text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[2px] opacity-80 mb-2">
                  Revenue You&apos;re Recovering
                </div>
                <div className="text-[36px] sm:text-[44px] font-bold leading-none tracking-[-0.03em] mb-1">
                  +{formatCurrency(monthlyLift)}
                </div>
                <div className="text-[13px] opacity-90 mb-4">
                  per month • <span className="font-semibold">{formatCurrency(annualLift)}</span> per year
                </div>
                <div className="flex justify-center gap-6 pt-4 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-[20px] font-bold">+{transferRateImprovement}%</div>
                    <div className="text-[9px] opacity-70 uppercase tracking-wider">Transfer</div>
                  </div>
                  <div className="text-center">
                    <div className="text-[20px] font-bold">+{formatNumber(closedLift)}</div>
                    <div className="text-[9px] opacity-70 uppercase tracking-wider">Extra Closes</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Before/After Cards */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-2.5 sm:p-3 border border-white/80">
                <div className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[1px] text-[#9ca3af] mb-1">Current</div>
                <div className="text-[13px] sm:text-[16px] font-bold text-[#374151] truncate">{formatCurrency(currentRevenue)}</div>
                <div className="text-[9px] text-[#9ca3af]">/month</div>
              </div>
              <div className="bg-gradient-to-br from-[rgba(248,70,8,0.08)] to-[rgba(50,28,163,0.08)] rounded-xl p-2.5 sm:p-3 border-2 border-[#f84608]/30">
                <div className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[1px] text-[#f84608] mb-1">With AIVI</div>
                <div className="text-[13px] sm:text-[16px] font-bold text-[#0a0a0a] truncate">{formatCurrency(aiviRevenue)}</div>
                <div className="text-[9px] text-[#555555]">/month</div>
              </div>
              <div className="bg-gradient-to-br from-[#10b981]/10 to-[#10b981]/5 rounded-xl p-2.5 sm:p-3 border-2 border-[#10b981]/30">
                <div className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[1px] text-[#10b981] mb-1">Lift</div>
                <div className="text-[13px] sm:text-[16px] font-bold text-[#10b981] truncate">+{formatCurrency(monthlyLift)}</div>
                <div className="text-[9px] text-[#10b981]/70 font-semibold truncate">{formatCurrency(annualLift)}/yr</div>
              </div>
            </div>

            {/* Breakdown - Collapsible */}
            <button
              onClick={() => setAdvancedOpen(!advancedOpen)}
              className="w-full flex justify-between items-center p-3 bg-white/50 backdrop-blur-sm border border-white/80 rounded-xl hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <span className="text-[12px] font-medium text-[#555555]">View Detailed Breakdown</span>
              <span className={`transition-transform duration-300 text-[#9ca3af] ${advancedOpen ? 'rotate-180' : ''}`}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>

            {/* Collapsible Breakdown */}
            <div className={`overflow-hidden transition-all duration-300 ${advancedOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="pt-2 space-y-3">
                {/* 2x2 Grid Breakdown */}
                <div className="grid grid-cols-2 gap-2">
                  {/* Transfer Rate */}
                  <div className="bg-white rounded-xl p-3 border border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-[#555555] font-medium">Transfer Rate</span>
                      <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-full">+{transferRateImprovement}pts</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{transferRate}%</span>
                        </div>
                        <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                          <div className="h-full bg-[#9ca3af] rounded-full" style={{ width: `${(transferRate / 65) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{aiviTransferRate}%</span>
                        </div>
                        <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full" style={{ width: `${(aiviTransferRate / 65) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Close Rate */}
                  <div className="bg-white rounded-xl p-3 border border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-[#555555] font-medium">Close Rate</span>
                      <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-full">+{closeRateImprovement}pts</span>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-[#9ca3af]">Before</span>
                          <span className="font-semibold text-[#374151]">{closeRate}%</span>
                        </div>
                        <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                          <div className="h-full bg-[#9ca3af] rounded-full" style={{ width: `${(closeRate / 20) * 100}%` }} />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] mb-1">
                          <span className="text-[#f84608] font-medium">With AIVI</span>
                          <span className="font-semibold text-[#0a0a0a]">{aiviCloseRate}%</span>
                        </div>
                        <div className="h-1.5 bg-[#e5e5e5] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full" style={{ width: `${(aiviCloseRate / 20) * 100}%` }} />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Leads Transferred */}
                  <div className="bg-white rounded-xl p-3 border border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-[#555555] font-medium">Transferred</span>
                      <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-full">+{formatNumber(transferredLift)}</span>
                    </div>
                    <div className="text-[18px] font-bold text-[#0a0a0a]">{formatNumber(aiviTransferred)}</div>
                    <div className="text-[10px] text-[#9ca3af]">vs {formatNumber(currentTransferred)} before</div>
                  </div>

                  {/* Closed */}
                  <div className="bg-white rounded-xl p-3 border border-[#e5e5e5]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] text-[#555555] font-medium">Closed</span>
                      <span className="text-[9px] font-bold text-[#10b981] bg-[#10b981]/10 px-1.5 py-0.5 rounded-full">+{formatNumber(closedLift)}</span>
                    </div>
                    <div className="text-[18px] font-bold text-[#0a0a0a]">{formatNumber(aiviClosed)}</div>
                    <div className="text-[10px] text-[#9ca3af]">vs {formatNumber(currentClosed)} before</div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="text-center text-[11px] text-[#6b7280] bg-white/50 rounded-lg p-2.5 border border-white/60">
                  Based on {formatNumber(leadVolume)} leads at {formatCurrency(commission)} commission.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA - Compact */}
        <div className="mt-8 max-w-[400px] mx-auto">
          <button
            onClick={openDemoPopup}
            className="block w-full py-4 rounded-xl text-[14px] font-semibold text-center bg-[#0a0a0a] text-white hover:bg-[#1a1a1a] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
          >
            Book Strategy Call →
          </button>
        </div>
      </div>

      {/* Floating Element - Style 3 only */}
      {liftStyle === '3' && (
        <div
          className={`fixed top-28 right-6 z-50 transition-all duration-300 ${
            showFloatingNumber ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'
          }`}
        >
          <button
            onClick={() => revenueCardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
            className="group flex flex-col items-end cursor-pointer"
          >
            <span className="text-[9px] font-semibold uppercase tracking-[1px] text-[#555555] mb-0.5">Revenue Lift</span>
            <span className="text-[24px] font-bold aivi-gradient-text leading-none group-hover:scale-105 transition-transform duration-200">
              +{formatCurrency(monthlyLift)}
            </span>
            <span className="text-[10px] text-[#777777]">/month</span>
          </button>
        </div>
      )}
    </section>
  );
}
