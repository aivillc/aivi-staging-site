'use client';

import Link from 'next/link';

interface IndustryCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function IndustryCTA({
  headline = 'Turn Your Calls Into Revenue',
  subheadline = 'Start converting more leads today with AIVI voice automation.',
}: IndustryCTAProps) {
  return (
    <section className="w-full bg-gradient-to-br from-[#f84608] to-[#321ca3] px-3 sm:px-6 py-16 sm:py-20 md:py-24">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
        <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-white mb-4">
          {headline}
        </h2>
        <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-8 max-w-[600px] mx-auto">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/aiviv3/demo"
            className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#f84608] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 focus-brand-ring"
          >
            Get Started
          </Link>
          <Link
            href="/aiviv3/pricing"
            className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-white text-white text-[15px] font-semibold rounded-md hover:bg-white/10 transition-all duration-300 focus-brand-ring"
          >
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
