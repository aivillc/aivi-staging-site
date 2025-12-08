'use client';

import AudioPlayer from './AudioPlayer';
import { useDemoPopup } from '../DemoPopupContext';

interface IndustryHeroProps {
  headline: string;
  subheadline: string;
  audioLabel: string;
  audioSrc?: string;
}

export default function IndustryHero({
  headline,
  subheadline,
  audioLabel,
  audioSrc,
}: IndustryHeroProps) {
  const { openDemoPopup } = useDemoPopup();

  return (
    <section className="w-full pt-[72px] relative overflow-hidden" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {/* Light gradient background with rounded bottom corners - Pricing style */}
      <div className="relative rounded-b-2xl sm:rounded-b-3xl">
        <div className="bg-soft-gradient absolute inset-0 rounded-b-2xl sm:rounded-b-3xl"></div>

        <div className="w-full px-[5%] sm:px-[7%] lg:px-[10%] py-16 sm:py-20 md:py-24 relative z-10">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[56px] leading-[1.1] font-normal text-[#1A1A1A] mb-4 sm:mb-6">
                  {headline}
                </h1>
                <p className="text-[16px] sm:text-[18px] md:text-[19px] leading-[1.6] text-[#666666] mb-6 sm:mb-8 max-w-[600px]">
                  {subheadline}
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    onClick={openDemoPopup}
                    className="group relative inline-flex items-center justify-center h-12 px-7 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus-brand-ring bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2]"
                  >
                    <span className="relative z-10">Book a Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </button>
                  <a
                    href="/aiviv3/pricing"
                    className="inline-flex items-center justify-center h-12 px-7 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] text-[15px] font-semibold rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all duration-300 focus-brand-ring"
                  >
                    View Pricing
                  </a>
                </div>
              </div>

              {/* Right: Audio Player */}
              <div className="lg:pl-8">
                <AudioPlayer label={audioLabel} audioSrc={audioSrc} darkMode={false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
