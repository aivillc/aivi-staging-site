'use client';

import { useState, useEffect, useRef } from 'react';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIHeroV4 from '@/components/aiviv4/AIVIHeroV4';
import GMTechSocialProof from '@/components/gmtech/GMTechSocialProof';
import AIVIBenefitsV4 from '@/components/aiviv4/AIVIBenefitsV4';
import AIVIFeatureTabsV4 from '@/components/aiviv4/AIVIFeatureTabsV4';
import GMTechCalculator from '@/components/gmtech/GMTechCalculator';
import AIVICTASectionV4 from '@/components/aiviv4/AIVICTASectionV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import AIVIFAQMasterV4 from '@/components/aiviv4/faq/AIVIFAQMasterV4';
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

  useEffect(() => {
    if (chatBotContext) {
      chatBotContext.setHideFloatingButton(style === 'A');
      return () => chatBotContext.setHideFloatingButton(false);
    }
  }, [style, chatBotContext]);

  if (style === 'A') {
    return (
      <>
        <div className={`floating-roi-glass-container ${!isVisible ? 'floating-roi-collapsed' : ''}`}>
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
            <span className="roi-text">Calculate ROI</span>
          </a>
          <div className="glass-divider" />
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
            box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset;
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
          .roi-side:hover { background: rgba(255, 255, 255, 0.05); }
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
          .chat-side:hover { background: rgba(255, 255, 255, 0.05); }
          .floating-roi-collapsed .roi-side { max-width: 0; padding: 0; opacity: 0; pointer-events: none; }
          .floating-roi-collapsed .glass-divider { width: 0; opacity: 0; }
          .floating-roi-collapsed .chat-side { padding: 16px; border-radius: 50%; }
          .floating-roi-collapsed { border-radius: 50%; }
          @keyframes glassGlow {
            0%, 100% { box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.05) inset; }
            50% { box-shadow: 0 4px 24px rgba(139, 0, 255, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.08) inset; }
          }
          @keyframes fadeSlideInA {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @media (max-width: 768px) {
            .floating-roi-glass-container { display: none !important; }
          }
        `}</style>
      </>
    );
  }

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
          box-shadow: -6px 6px 24px rgba(139, 0, 255, 0.2), -4px 4px 20px rgba(0, 0, 0, 0.3);
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s ease;
          animation: fadeSlideInD 0.5s ease-out 0.5s both;
        }
        .floating-roi-tab:hover { transform: translateX(-6px); }
        .tab-border-accent {
          width: 5px;
          background: linear-gradient(180deg, #8b00ff 0%, #f84608 100%);
          flex-shrink: 0;
        }
        .tab-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 28px 14px;
        }
        .tab-icon { width: 22px; height: 22px; color: rgba(255, 255, 255, 0.95); }
        .tab-labels { position: relative; display: flex; align-items: center; justify-content: center; }
        .tab-label-short {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.95);
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
        }
        .floating-roi-tab:hover .tab-label-short { opacity: 0; }
        .floating-roi-tab:hover .tab-label-full { opacity: 1; }
        @keyframes fadeSlideInD {
          from { opacity: 0; transform: translateX(20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .floating-roi-hidden-d { opacity: 0 !important; transform: translateX(20px) !important; pointer-events: none !important; }
        @media (max-width: 768px) { .floating-roi-tab { display: none !important; } }
      `}</style>
    </>
  );
}

function GMTechPageContent() {
  const [isFloatingBtnVisible, setIsFloatingBtnVisible] = useState(true);
  const roiTabRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const initialPosition = 15;

    const handleScroll = () => {
      const calculatorSection = document.getElementById('calculator-section');
      if (calculatorSection) {
        const calcRect = calculatorSection.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (calcRect.top < windowHeight * 0.6) {
          setIsFloatingBtnVisible(false);
        } else {
          setIsFloatingBtnVisible(true);
        }

        const scrollY = window.scrollY;
        const docHeight = document.documentElement.scrollHeight;
        const scrollableHeight = docHeight - windowHeight;
        const scrollPercent = scrollableHeight > 0 ? scrollY / scrollableHeight : 0;

        const thumbHeightPercent = (windowHeight / docHeight) * 100;
        const trackStart = 5;
        const trackEnd = 95 - thumbHeightPercent;
        const thumbTop = trackStart + (scrollPercent * (trackEnd - trackStart));

        const effectivePosition = thumbTop < initialPosition ? initialPosition : thumbTop;

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
        <GMTechSocialProof />
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
          display: none;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          background: rgba(20, 20, 20, 0.95);
          backdrop-filter: blur(16px);
          border-radius: 50px;
          border: 1px solid transparent;
          background-image: linear-gradient(rgba(20, 20, 20, 0.95), rgba(20, 20, 20, 0.95)),
                            linear-gradient(135deg, rgba(248, 70, 8, 0.6), rgba(50, 28, 163, 0.6));
          background-origin: border-box;
          background-clip: padding-box, border-box;
          box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
          text-decoration: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .mobile-roi-button:active { transform: translateX(-50%) scale(0.95); }
        .mobile-roi-icon { width: 20px; height: 20px; color: rgba(255, 255, 255, 0.9); flex-shrink: 0; }
        .mobile-roi-text { font-size: 14px; font-weight: 600; color: rgba(255, 255, 255, 0.95); letter-spacing: 0.025em; white-space: nowrap; }
        .mobile-roi-hidden { opacity: 0 !important; transform: translateX(-50%) translateY(20px) !important; pointer-events: none !important; }
        @media (max-width: 768px) { .mobile-roi-button { display: flex; } }
        @media (max-width: 480px) {
          .mobile-roi-button { bottom: 16px; padding: 12px 20px; gap: 8px; }
          .mobile-roi-icon { width: 18px; height: 18px; }
          .mobile-roi-text { font-size: 13px; }
        }
      `}</style>
    </div>
  );
}

export default function GMTechPage() {
  return (
    <CookieConsentProvider>
      <DemoPopupProvider>
        <ROIButtonStyleProvider>
          <RevenueLiftStyleProvider>
            <LeadGateProvider>
              <GMTechPageContent />
              <CookieBanner />
            </LeadGateProvider>
          </RevenueLiftStyleProvider>
        </ROIButtonStyleProvider>
      </DemoPopupProvider>
    </CookieConsentProvider>
  );
}
