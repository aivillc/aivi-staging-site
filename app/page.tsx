'use client';

import { useState, useEffect, useRef } from 'react';
import dynamic from 'next/dynamic';

// Critical above-the-fold components - load immediately
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIHeroV4 from '@/components/aiviv4/AIVIHeroV4';
import AIVISocialProofV4 from '@/components/aiviv4/AIVISocialProofV4';
import AIVICTASectionV4 from '@/components/aiviv4/AIVICTASectionV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

// Heavy below-the-fold components - lazy load for better performance
const AIVIFeatureTabsV4 = dynamic(() => import('@/components/aiviv4/AIVIFeatureTabsV4'), {
  loading: () => <div className="min-h-[600px] bg-[#FAFAFA]" />,
});
const GMTechCalculator = dynamic(() => import('@/components/gmtech/GMTechCalculator'), {
  loading: () => <div className="min-h-[600px] bg-[#FAFAFA]" />,
});
const AIVIBenefitsV4 = dynamic(() => import('@/components/aiviv4/AIVIBenefitsV4'), {
  loading: () => <div className="min-h-[400px] bg-[#FAFAFA]" />,
});
const AIVIFAQMasterV4 = dynamic(() => import('@/components/aiviv4/faq/AIVIFAQMasterV4'), {
  loading: () => <div className="min-h-[600px] bg-[#0a0a0a]" />,
});

// Context providers and utilities
import { ROIButtonStyleProvider, useROIButtonStyle } from '@/components/aiviv4/ROIButtonStyleContext';
import { RevenueLiftStyleProvider } from '@/components/aiviv4/RevenueLiftStyleContext';
import { LeadGateProvider } from '@/components/aiviv4/LeadGateContext';
import { useChatBotSafe } from '@/components/ChatBotContext';
import { DemoPopupProvider } from '@/components/aiviv3/DemoPopupContext';
import { CookieConsentProvider } from '@/components/aiviv3/CookieConsentContext';
import CookieBanner from '@/components/aiviv3/CookieBanner';

interface ROIFloatingButtonProps {
  isVisible: boolean;
  onScrollToCalculator: (e: React.MouseEvent) => void;
  roiTabRef: React.RefObject<HTMLAnchorElement | null>;
}

function ROIFloatingButton({ isVisible, onScrollToCalculator, roiTabRef }: ROIFloatingButtonProps) {
  const { style } = useROIButtonStyle();
  const chatBotContext = useChatBotSafe();

  // Hide the default chatbot floating button when Option A is selected
  useEffect(() => {
    if (chatBotContext) {
      chatBotContext.setHideFloatingButton(style === 'A');
      return () => chatBotContext.setHideFloatingButton(false);
    }
  }, [style, chatBotContext]);

  // Style A: Dark Glass Horizontal Tab with Chat Button
  // When ROI is visible: show full pill (ROI + divider + chat)
  // When ROI is hidden (at calculator): show only chat button (circular)
  if (style === 'A') {
    return (
      <>
        {/* Full pill when ROI is visible */}
        <div className={`floating-roi-glass-container ${!isVisible ? 'floating-roi-collapsed' : ''}`}>
          {/* ROI Calculator Side - hidden when collapsed */}
          <a
            href="#calculator-section"
            onClick={onScrollToCalculator}
            className="roi-side"
            aria-label="Calculate your ROI"
          >
            <svg
              className="w-[18px] h-[18px] text-white/90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="4" y="2" width="16" height="20" rx="2" />
              <line x1="8" y1="6" x2="16" y2="6" />
              <line x1="8" y1="10" x2="10" y2="10" />
              <line x1="14" y1="10" x2="16" y2="10" />
              <line x1="8" y1="14" x2="10" y2="14" />
              <line x1="14" y1="14" x2="16" y2="14" />
              <line x1="8" y1="18" x2="16" y2="18" />
            </svg>
            <span className="roi-text">
              Calculate ROI
            </span>
          </a>

          {/* Divider - hidden when collapsed */}
          <div className="glass-divider" />

          {/* Chat Side - always visible */}
          <button
            onClick={() => chatBotContext?.openChat()}
            className="chat-side"
            aria-label="Open chat"
          >
            <svg
              className="w-[18px] h-[18px] text-white/90"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </button>
        </div>
        <style jsx>{`
          .floating-roi-glass-container {
            position: fixed;
            bottom: 32px;
            right: 32px;
            z-index: 999;
            display: flex;
            align-items: center;
            border-radius: 50px;
            background: rgba(20, 20, 20, 0.85);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid transparent;
            background-image: linear-gradient(rgba(20, 20, 20, 0.85), rgba(20, 20, 20, 0.85)),
                              linear-gradient(135deg, rgba(139, 0, 255, 0.5), rgba(248, 70, 8, 0.5));
            background-origin: border-box;
            background-clip: padding-box, border-box;
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3),
                        0 0 0 1px rgba(255, 255, 255, 0.05) inset;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: glassGlow 6s ease-in-out infinite, fadeSlideInA 0.5s ease-out 0.5s both;
            overflow: hidden;
          }
          .roi-side {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 14px 16px 14px 20px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 50px 0 0 50px;
            opacity: 1;
            max-width: 200px;
          }
          .roi-side:hover {
            background: rgba(255, 255, 255, 0.05);
          }
          .roi-text {
            font-size: 13px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.9);
            letter-spacing: 0.025em;
            white-space: nowrap;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          }
          .glass-divider {
            width: 1px;
            height: 24px;
            background: linear-gradient(180deg, rgba(139, 0, 255, 0.5), rgba(248, 70, 8, 0.5));
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            opacity: 1;
          }
          .chat-side {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 14px 18px;
            cursor: pointer;
            border: none;
            background: transparent;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            border-radius: 0 50px 50px 0;
          }
          .chat-side:hover {
            background: rgba(255, 255, 255, 0.05);
          }

          /* Collapsed state - only show chat button as circle */
          .floating-roi-collapsed .roi-side {
            max-width: 0;
            padding: 0;
            opacity: 0;
            pointer-events: none;
          }
          .floating-roi-collapsed .glass-divider {
            width: 0;
            opacity: 0;
          }
          .floating-roi-collapsed .chat-side {
            padding: 16px;
            border-radius: 50%;
          }
          .floating-roi-collapsed {
            border-radius: 50%;
          }

          @keyframes glassGlow {
            0%, 100% { box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset; }
            50% { box-shadow: 0 4px 24px rgba(139, 0, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08) inset; }
          }
          @keyframes fadeSlideInA {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          /* Hide on desktop - we'll show the mobile button instead */
          @media (min-width: 769px) {
            .floating-roi-glass-container {
              /* Styles remain for desktop */
            }
          }

          /* Hide this version on mobile - we'll show dedicated mobile button */
          @media (max-width: 768px) {
            .floating-roi-glass-container {
              display: none !important;
            }
          }
        `}</style>
      </>
    );
  }

  // Style B: Minimalist Line Accent with Pulsating Glow
  if (style === 'B') {
    return (
      <>
        <a
          href="#calculator-section"
          onClick={onScrollToCalculator}
          className={`floating-roi-line ${!isVisible ? 'floating-roi-hidden-b' : ''}`}
          aria-label="Calculate your ROI"
        >
          <div className="roi-line" />
          <span className="roi-label">ROI</span>
        </a>
        <style jsx>{`
          .floating-roi-line {
            position: fixed;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            z-index: 999;
            display: flex;
            align-items: center;
            gap: 0;
            padding: 16px 12px 16px 8px;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: fadeSlideInB 0.5s ease-out 0.5s both;
          }
          .roi-line {
            width: 3px;
            height: 80px;
            background: linear-gradient(180deg, #8b00ff 0%, #f84608 100%);
            border-radius: 2px;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: lineShimmer 4s ease-in-out infinite, linePulse 2.5s ease-in-out infinite;
          }
          .roi-label {
            writing-mode: vertical-rl;
            text-orientation: mixed;
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 2px;
            text-transform: uppercase;
            color: #666;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            transform: scale(0.95);
            opacity: 0.8;
          }
          .floating-roi-line:hover .roi-line {
            width: 5px;
            height: 90px;
          }
          .floating-roi-line:hover .roi-label {
            color: #8b00ff;
            transform: scale(1);
            opacity: 1;
            letter-spacing: 3px;
          }
          @keyframes lineShimmer {
            0%, 100% { background: linear-gradient(180deg, #8b00ff 0%, #f84608 100%); }
            50% { background: linear-gradient(180deg, #a855f7 0%, #fb923c 100%); }
          }
          @keyframes linePulse {
            0%, 100% {
              box-shadow:
                0 0 8px rgba(139, 0, 255, 0.5),
                0 0 16px rgba(139, 0, 255, 0.3);
            }
            50% {
              box-shadow:
                0 0 15px rgba(139, 0, 255, 0.7),
                0 0 30px rgba(139, 0, 255, 0.4),
                0 0 45px rgba(248, 70, 8, 0.25);
            }
          }
          @keyframes fadeSlideInB {
            from { opacity: 0; transform: translateY(-50%) translateX(20px); }
            to { opacity: 1; transform: translateY(-50%) translateX(0); }
          }
          .floating-roi-hidden-b {
            opacity: 0 !important;
            transform: translateY(-50%) translateX(20px) !important;
            pointer-events: none !important;
          }

          /* Hide on mobile - overlaps content */
          @media (max-width: 768px) {
            .floating-roi-line {
              display: none !important;
            }
          }
        `}</style>
      </>
    );
  }

  // Style C: Sleek Horizontal Banner - Bottom edge pill with slide-up reveal
  if (style === 'C') {
    return (
      <>
        <a
          href="#calculator-section"
          onClick={onScrollToCalculator}
          className={`floating-roi-banner ${!isVisible ? 'floating-roi-hidden-c' : ''}`}
          aria-label="Calculate your ROI"
        >
          {/* Gradient accent bar */}
          <div className="banner-accent" />

          {/* Content */}
          <div className="banner-content">
            <div className="banner-icon-wrapper">
              <svg
                className="banner-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
              </svg>
            </div>
            <div className="banner-text">
              <span className="banner-label">ROI Calculator</span>
              <span className="banner-cta">See your potential savings →</span>
            </div>
          </div>

          {/* Shimmer effect */}
          <div className="banner-shimmer" />
        </a>
        <style jsx>{`
          .floating-roi-banner {
            position: fixed;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%) translateY(0);
            z-index: 999;
            display: flex;
            flex-direction: column;
            cursor: pointer;
            text-decoration: none;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            animation: bannerSlideUp 0.6s ease-out 0.5s both;
            border-radius: 16px 16px 0 0;
            overflow: hidden;
          }
          .banner-accent {
            height: 3px;
            width: 100%;
            background: linear-gradient(90deg, #8b00ff 0%, #f84608 50%, #8b00ff 100%);
            background-size: 200% 100%;
            animation: gradientFlow 3s ease-in-out infinite;
          }
          .banner-content {
            display: flex;
            align-items: center;
            gap: 14px;
            padding: 14px 28px 18px 20px;
            background: linear-gradient(180deg, rgba(20, 20, 20, 0.95) 0%, rgba(10, 10, 10, 0.98) 100%);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            border-top: none;
            border-radius: 0;
            box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.3), 0 4px 20px rgba(0, 0, 0, 0.2);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
          }
          .floating-roi-banner:hover .banner-content {
            background: linear-gradient(180deg, rgba(30, 30, 30, 0.95) 0%, rgba(15, 15, 15, 0.98) 100%);
            box-shadow: 0 -4px 40px rgba(139, 0, 255, 0.15), 0 4px 30px rgba(0, 0, 0, 0.3);
          }
          .banner-icon-wrapper {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, rgba(139, 0, 255, 0.15) 0%, rgba(248, 70, 8, 0.15) 100%);
            border-radius: 10px;
            border: 1px solid rgba(139, 0, 255, 0.2);
            transition: all 0.3s ease;
          }
          .floating-roi-banner:hover .banner-icon-wrapper {
            background: linear-gradient(135deg, rgba(139, 0, 255, 0.25) 0%, rgba(248, 70, 8, 0.25) 100%);
            border-color: rgba(139, 0, 255, 0.4);
            transform: scale(1.05);
          }
          .banner-icon {
            width: 20px;
            height: 20px;
            color: #a855f7;
            transition: all 0.3s ease;
          }
          .floating-roi-banner:hover .banner-icon {
            color: #c084fc;
            animation: iconSpin 0.6s ease-out;
          }
          .banner-text {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .banner-label {
            font-size: 14px;
            font-weight: 600;
            color: white;
            letter-spacing: -0.01em;
          }
          .banner-cta {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.5);
            transition: all 0.3s ease;
          }
          .floating-roi-banner:hover .banner-cta {
            color: #a855f7;
          }
          .banner-shimmer {
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.03), transparent);
            animation: shimmerPass 4s ease-in-out infinite;
            pointer-events: none;
          }
          @keyframes bannerSlideUp {
            from {
              opacity: 0;
              transform: translateX(-50%) translateY(100%);
            }
            to {
              opacity: 1;
              transform: translateX(-50%) translateY(0);
            }
          }
          @keyframes gradientFlow {
            0%, 100% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
          }
          @keyframes iconSpin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(180deg); }
          }
          @keyframes shimmerPass {
            0%, 100% { left: -100%; }
            50% { left: 100%; }
          }
          .floating-roi-hidden-c {
            opacity: 0 !important;
            transform: translateX(-50%) translateY(100%) !important;
            pointer-events: none !important;
          }

          /* Responsive adjustments */
          @media (max-width: 480px) {
            .banner-content {
              padding: 12px 20px 16px 16px;
              gap: 12px;
            }
            .banner-icon-wrapper {
              width: 36px;
              height: 36px;
            }
            .banner-icon {
              width: 18px;
              height: 18px;
            }
            .banner-label {
              font-size: 13px;
            }
            .banner-cta {
              font-size: 11px;
            }
          }
        `}</style>
      </>
    );
  }

  // Style D: Scroll-Following Vertical Tab
  // Position is updated directly via ref for 100% fluid movement

  return (
    <>
      <a
        ref={roiTabRef}
        href="#calculator-section"
        onClick={onScrollToCalculator}
        className={`floating-roi-tab ${!isVisible ? 'floating-roi-hidden-d' : ''}`}
        style={{ top: '15%' }}
        aria-label="Calculate your ROI"
      >
        <div className="tab-border-accent" />
        <div className="tab-content">
          <svg className="tab-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <line x1="8" y1="6" x2="16" y2="6" />
            <line x1="8" y1="10" x2="10" y2="10" />
            <line x1="14" y1="10" x2="16" y2="10" />
            <line x1="8" y1="14" x2="10" y2="14" />
            <line x1="14" y1="14" x2="16" y2="14" />
            <line x1="8" y1="18" x2="16" y2="18" />
          </svg>
          <div className="tab-labels">
            <span className="tab-label-short">ROI Calculator</span>
            <span className="tab-label-full">See Your Impact</span>
          </div>
        </div>
      </a>
      <style jsx>{`
        .floating-roi-tab {
          position: fixed;
          right: 0;
          z-index: 999;
          display: flex;
          align-items: stretch;
          border-radius: 12px 0 0 12px;
          background: #1a1a1a;
          box-shadow: -6px 6px 24px rgba(139, 0, 255, 0.2), -4px 4px 20px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.08) inset, -8px 0 30px rgba(255, 255, 255, 0.08);
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
          will-change: top, transform;
          animation: fadeSlideInD 0.5s ease-out 0.5s both, attentionNudge 2.5s ease-in-out 2s infinite;
        }
        .floating-roi-tab:hover {
          transform: translateX(-6px);
          box-shadow: -10px 10px 40px rgba(139, 0, 255, 0.25), -6px 6px 20px rgba(248, 70, 8, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset, -12px 0 40px rgba(255, 255, 255, 0.1);
          animation-play-state: paused;
        }
        .tab-border-accent {
          width: 5px;
          background: linear-gradient(180deg, #8b00ff 0%, #f84608 100%);
          flex-shrink: 0;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 0 12px rgba(139, 0, 255, 0.4);
          animation: borderPulse 2.5s ease-in-out infinite;
        }
        .floating-roi-tab:hover .tab-border-accent {
          width: 6px;
          box-shadow: 0 0 20px rgba(139, 0, 255, 0.6), 0 0 30px rgba(248, 70, 8, 0.3);
        }
        .tab-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 28px 14px;
          position: relative;
          min-height: 120px;
          transition: min-height 0.3s ease;
        }
        .floating-roi-tab:hover .tab-content {
          min-height: 200px;
        }
        .tab-icon { width: 22px; height: 22px; color: rgba(255, 255, 255, 0.95); transition: all 0.3s ease; }
        .floating-roi-tab:hover .tab-icon { color: white; transform: scale(1.1); }
        .tab-labels {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .tab-label-short {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
          transition: opacity 0.3s ease;
        }
        .tab-label-full {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: white;
          opacity: 0;
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          transition: opacity 0.3s ease;
          white-space: nowrap;
        }
        .floating-roi-tab:hover .tab-label-short { opacity: 0; }
        .floating-roi-tab:hover .tab-label-full { opacity: 1; }
        @keyframes borderPulse {
          0%, 100% { box-shadow: 0 0 12px rgba(139, 0, 255, 0.4); }
          50% { box-shadow: 0 0 20px rgba(139, 0, 255, 0.6), 0 0 30px rgba(248, 70, 8, 0.3); }
        }
        @keyframes attentionNudge {
          0%, 76%, 100% { transform: translateX(0); }
          82% { transform: translateX(-8px); }
          88% { transform: translateX(-4px); }
          94% { transform: translateX(-6px); }
        }
        @keyframes fadeSlideInD {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .floating-roi-hidden-d {
          opacity: 0 !important;
          transform: translateX(20px) !important;
          pointer-events: none !important;
          animation: none !important;
        }

        /* Hide on mobile - overlaps hero content */
        @media (max-width: 768px) {
          .floating-roi-tab {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}

function HomePageContent() {
  const [isFloatingBtnVisible, setIsFloatingBtnVisible] = useState(true);
  const roiTabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const initialPosition = 15; // Starting position in %

    const handleScroll = () => {
      const calculatorSection = document.getElementById('calculator-section');
      if (calculatorSection) {
        const calcRect = calculatorSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Hide when calculator section is visible
        if (calcRect.top < windowHeight * 0.6) {
          setIsFloatingBtnVisible(false);
        } else {
          setIsFloatingBtnVisible(true);
        }

        // Calculate actual scrollbar thumb position (as percentage of viewport)
        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const scrollableHeight = docHeight - windowHeight;
        const scrollPercent = scrollableHeight > 0 ? scrollY / scrollableHeight : 0;

        // Scrollbar track typically spans from ~5% to ~95% of viewport height
        const thumbHeightPercent = (windowHeight / docHeight) * 100;
        const trackStart = 5;
        const trackEnd = 95 - thumbHeightPercent;
        const thumbTop = trackStart + (scrollPercent * (trackEnd - trackStart));

        // Only start following once scrollbar reaches initial position
        const effectivePosition = thumbTop < initialPosition ? initialPosition : thumbTop;

        // Update position directly via ref - no React state, 100% fluid
        if (roiTabRef.current) {
          roiTabRef.current.style.top = `${effectivePosition}%`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToCalculator = (e: React.MouseEvent) => {
    e.preventDefault();
    const calculatorSection = document.getElementById('calculator-section');
    if (calculatorSection) {
      calculatorSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-[#000] min-h-screen antialiased font-manrope">
      <AIVINavigationV4 />
      <main id="main-content">
        <AIVIHeroV4 />
        <AIVISocialProofV4 />
        <AIVICTASectionV4 />
        <AIVIFeatureTabsV4 />
        <GMTechCalculator />
        <AIVIBenefitsV4 />
        <AIVIFAQMasterV4 />
      </main>
      <AIVIFooter />

      <ROIFloatingButton
        isVisible={isFloatingBtnVisible}
        onScrollToCalculator={handleScrollToCalculator}
        roiTabRef={roiTabRef}
      />

      {/* Mobile-Only ROI Calculator Button */}
      <a
        href="#calculator-section"
        onClick={handleScrollToCalculator}
        className={`mobile-roi-button ${!isFloatingBtnVisible ? 'mobile-roi-hidden' : ''}`}
        aria-label="Calculate your ROI"
      >
        <svg
          className="mobile-roi-icon"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="4" y="2" width="16" height="20" rx="2" />
          <line x1="8" y1="6" x2="16" y2="6" />
          <line x1="8" y1="10" x2="10" y2="10" />
          <line x1="14" y1="10" x2="16" y2="10" />
          <line x1="8" y1="14" x2="10" y2="14" />
          <line x1="14" y1="14" x2="16" y2="14" />
          <line x1="8" y1="18" x2="16" y2="18" />
        </svg>
        <span className="mobile-roi-text">ROI Calculator</span>
      </a>

      <style jsx>{`
        .mobile-roi-button {
          position: fixed;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 999;
          display: none; /* Hidden by default, shown on mobile */
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 50px;
          border: 1px solid transparent;
          background-image: linear-gradient(rgba(20, 20, 20, 0.95), rgba(20, 20, 20, 0.95)),
                            linear-gradient(135deg, rgba(248, 70, 8, 0.6), rgba(50, 28, 163, 0.6));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4),
                      0 0 0 1px rgba(255, 255, 255, 0.08) inset;
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          animation: mobileNudge 2.5s ease-in-out 1s infinite, mobileFadeIn 0.5s ease-out;
        }

        .mobile-roi-button:active {
          transform: translateX(-50%) scale(0.95);
        }

        .mobile-roi-icon {
          width: 20px;
          height: 20px;
          color: rgba(255, 255, 255, 0.9);
          flex-shrink: 0;
        }

        .mobile-roi-text {
          font-size: 14px;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.95);
          letter-spacing: 0.025em;
          white-space: nowrap;
        }

        .mobile-roi-hidden {
          opacity: 0 !important;
          transform: translateX(-50%) translateY(20px) !important;
          pointer-events: none !important;
          animation: none !important;
        }

        @keyframes mobileNudge {
          0%, 70%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          75%, 85% {
            transform: translateX(-50%) translateY(-8px);
          }
          80% {
            transform: translateX(-50%) translateY(-4px);
          }
        }

        @keyframes mobileFadeIn {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        /* Show only on mobile */
        @media (max-width: 768px) {
          .mobile-roi-button {
            display: flex;
          }
        }

        /* Smaller screens - adjust sizing */
        @media (max-width: 480px) {
          .mobile-roi-button {
            bottom: 16px;
            padding: 12px 20px;
            gap: 8px;
          }
          .mobile-roi-icon {
            width: 18px;
            height: 18px;
          }
          .mobile-roi-text {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}

export default function Home() {
  return (
    <CookieConsentProvider>
      <DemoPopupProvider>
        <ROIButtonStyleProvider>
          <RevenueLiftStyleProvider>
            <LeadGateProvider>
              <HomePageContent />
              <CookieBanner />
            </LeadGateProvider>
          </RevenueLiftStyleProvider>
        </ROIButtonStyleProvider>
      </DemoPopupProvider>
    </CookieConsentProvider>
  );
}
