'use client';

import { useState } from 'react';

export default function AIVISocialProof() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const companies = [
    'AUTODESK',
    'Dolby',
    'SMARTLING',
    'Realis',
    'ANTHROPIC',
    'kandji',
    'DocuSign',
  ];

  const stats = [
    { label: '70% increase in sales leads', number: '70%', company: 'customer.io' },
    { label: '4X SDR efficiency', number: '4x', company: 'GTM Ops' },
    { label: '64% lower tech stack costs', number: '64%', company: 'Census' },
  ];

  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-6">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Company Logos Bar */}
        <div className="text-left mb-8 sm:mb-12 md:mb-16">
          <p className="text-[10px] sm:text-[11px] font-bold tracking-[1.5px] text-[#666666] uppercase mb-6 sm:mb-8 animate-[fadeIn_0.6s_ease-out]">
            JOIN OVER 500,000 COMPANIES USING AIVI
          </p>
          <div className="relative overflow-hidden">
            {/* Left blur gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />

            {/* Right blur gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            {/* Infinite scrolling container */}
            <div className="flex items-center animate-[scroll_40s_linear_infinite]">
              {/* Render multiple sets for seamless infinite loop */}
              {[...Array(4)].map((_, setIndex) => (
                companies.map((company, index) => (
                  <div
                    key={`set-${setIndex}-${index}`}
                    className="h-6 sm:h-8 flex items-center justify-center text-[#666666] opacity-60 hover:opacity-100 transition-all duration-300 filter grayscale hover:grayscale-0 hover:scale-110 cursor-pointer flex-shrink-0 mx-4 sm:mx-8"
                  >
                    <span className={`text-[14px] sm:text-[18px] whitespace-nowrap ${company === 'Realis' ? 'font-serif italic' : 'font-bold'}`}>
                      {company}
                    </span>
                  </div>
                ))
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column - Testimonial */}
          <div className="text-left animate-[fadeInLeft_0.8s_ease-out]">
            <blockquote className="text-[24px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.25] font-normal text-[#000000] mb-6 sm:mb-8 relative">
              <span className="absolute -top-4 sm:-top-6 -left-1 sm:-left-2 text-[50px] sm:text-[80px] text-[#E5FF00] opacity-30 font-serif">"</span>
              <span className="relative">
                Every rep is more productive with AIVI. We booked 75% more meetings while cutting manual work
                in half.
              </span>
            </blockquote>
            <div className="text-[12px] sm:text-[13px] font-semibold text-[#666666] tracking-[0.5px] uppercase leading-[1.6] mt-6 sm:mt-8">
              ANDREW FRONING
              <br />
              <span className="font-normal">BDR LEADER</span>
            </div>
            <div className="mt-3 sm:mt-4 group inline-block">
              <span className="text-[20px] sm:text-[24px] font-bold text-[#000000] group-hover:text-[#333333] transition-colors">
                CYERA
              </span>
              <div className="h-1 w-0 bg-[#E5FF00] group-hover:w-full transition-all duration-300" />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="hidden lg:block w-[1px] h-full bg-gradient-to-b from-transparent via-[#E0E0E0] to-transparent self-stretch min-h-[400px]" />

          {/* Right Column - Stats Cards */}
          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
                className="group relative bg-white rounded-xl p-6 sm:p-8 text-left shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)] transition-all duration-300 cursor-pointer overflow-hidden"
                style={{
                  animation: `fadeInRight 0.6s ease-out ${index * 0.15}s both`,
                }}
              >
                {/* Background gradient effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-[#E5FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10">
                  <p className="text-[12px] sm:text-[13px] font-medium text-[#666666] mb-3 sm:mb-4 leading-[1.4] group-hover:text-[#000000] transition-colors">
                    {stat.label}
                  </p>
                  <div className="text-[42px] sm:text-[52px] lg:text-[56px] leading-[1] font-bold text-[#000000] mb-3 sm:mb-4 tracking-[-0.02em] group-hover:scale-110 transition-transform duration-300 origin-left">
                    {stat.number}
                  </div>
                  <div className="mt-3 sm:mt-4 flex items-center gap-2">
                    <span className="text-[13px] sm:text-[14px] font-semibold text-[#000000] opacity-70 group-hover:opacity-100 transition-opacity">
                      {stat.company}
                    </span>
                    <svg
                      className={`w-4 h-4 flex-shrink-0 transform transition-all duration-300 ${
                        hoveredStat === index ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
