'use client';

import React, { useRef } from 'react';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';

interface BenefitItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: BenefitItem[] = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Instant Lead Response',
    description: 'Engage leads within seconds of form submission with AI-powered voice calls that feel natural and personalized.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: 'Smart Qualification',
    description: 'AI intelligently qualifies leads by asking the right questions and scoring based on your custom criteria.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
    title: 'Real-time Transfers',
    description: 'Warm transfer qualified leads directly to your sales team while they\'re still engaged and ready to convert.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
    title: 'CRM Integration',
    description: 'Seamlessly sync with your existing CRM to track every interaction and maintain a complete customer history.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: 'Multi-channel Outreach',
    description: 'Reach leads through AI voice, SMS, and email campaigns that work together for maximum engagement.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: 'Analytics & Insights',
    description: 'Track conversion rates, call outcomes, and ROI with detailed dashboards and real-time reporting.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: '24/7 Availability',
    description: 'Never miss a lead again. AIVI works around the clock, responding instantly even outside business hours.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: 'Scalable Capacity',
    description: 'Handle unlimited concurrent conversations without adding headcount or sacrificing quality.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
      </svg>
    ),
    title: 'Custom Scripts',
    description: 'Tailor conversation flows to your industry, product, and brand voice for authentic interactions.',
  },
];

export default function AIVIBenefitsV4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use the shared neural canvas hook
  useNeuralCanvas(canvasRef);

  return (
    <section className="relative py-20 sm:py-24 md:py-28 lg:py-32 bg-[#f5f0e8] overflow-hidden">
      {/* Neural Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Style 3: Dual Line Embrace Eyebrow */}
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
            <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
              Benefits
            </span>
            <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
          </div>
          <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#0a0a0a] leading-[1.1] tracking-[-0.02em] mb-6">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
              convert more leads
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-[16px] sm:text-[18px] text-[#6b7280] leading-relaxed">
            AIVI combines AI voice technology with intelligent automation to transform
            how you engage, qualify, and convert leads at scale.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative p-5 sm:p-6 lg:p-8 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/60 hover:bg-white hover:shadow-xl hover:shadow-black/5 transition-all duration-300"
            >
              {/* Icon Badge */}
              <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 mb-4 sm:mb-5 lg:mb-6 rounded-xl bg-[#1e293b] flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-[#f84608] group-hover:to-[#321ca3] transition-all duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-[16px] sm:text-[17px] lg:text-[18px] font-semibold text-[#0a0a0a] mb-2 sm:mb-3 group-hover:text-[#f84608] transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#6b7280] leading-relaxed">
                {benefit.description}
              </p>

              {/* Subtle hover indicator */}
              <div className="absolute bottom-0 left-5 right-5 sm:left-6 sm:right-6 lg:left-8 lg:right-8 h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
