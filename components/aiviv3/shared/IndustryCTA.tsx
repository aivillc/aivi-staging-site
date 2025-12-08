'use client';

import Link from 'next/link';
import { useDemoPopup } from '../DemoPopupContext';

interface IndustryCTAProps {
  headline?: string;
  subheadline?: string;
}

export default function IndustryCTA({
  headline = 'Ready to Transform Your Business?',
  subheadline = 'Join hundreds of businesses achieving exceptional results with AIVI.',
}: IndustryCTAProps) {
  const { openDemoPopup } = useDemoPopup();

  return (
    <section className="w-full bg-[#E8E5E0] px-[5%] sm:px-[7%] lg:px-[10%] pt-12 sm:pt-16" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        {/* Gradient CTA Card - Use Cases Style */}
        <div className="bg-gradient-to-br from-[#FF8C00] to-[#8A2BE2] rounded-t-2xl sm:rounded-t-3xl p-8 sm:p-12 text-center">
          <h2 className="text-[28px] sm:text-[36px] font-normal text-white mb-4">
            {headline}
          </h2>
          <p className="text-[16px] text-white/80 mb-8 max-w-[500px] mx-auto">
            {subheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openDemoPopup}
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#FF8C00] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Get Started Today
            </button>
            <Link
              href="/aiviv3/pricing"
              className="inline-flex items-center justify-center h-12 px-8 bg-white/10 backdrop-blur-sm border-2 border-white/50 text-white text-[15px] font-semibold rounded-md hover:bg-white/20 hover:border-white transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
