'use client';

import AudioPlayer from './AudioPlayer';

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
  return (
    <section className="w-full bg-[#E8E5E0] pt-[72px]">
      <div className="w-full px-3 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div>
              <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.1] font-normal text-black mb-4 sm:mb-6">
                {headline}
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[1.6] text-[#666666] mb-6 sm:mb-8 max-w-[600px]">
                {subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a
                  href="/aiviv3/demo"
                  className="group relative inline-flex items-center justify-center h-12 px-7 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus-brand-ring bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                >
                  <span className="relative z-10">Book a Demo</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
                <a
                  href="/aiviv3/pricing"
                  className="inline-flex items-center justify-center h-12 px-7 bg-white border-2 border-black text-black text-[15px] font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300 focus-brand-ring"
                >
                  View Pricing
                </a>
              </div>
            </div>

            {/* Right: Audio Player */}
            <div className="lg:pl-8">
              <AudioPlayer label={audioLabel} audioSrc={audioSrc} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
