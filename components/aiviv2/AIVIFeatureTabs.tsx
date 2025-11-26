'use client';

import { useState } from 'react';

const features = [
  {
    id: 'outbound',
    title: 'Outbound',
    color: 'bg-[#F5F5F5]',
    activeColor: 'bg-[#F5F5F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
      </svg>
    ),
    description: 'Book more meetings faster with better data, smarter AI, and easier automation.',
    mainTitle: 'Every Call Executed in Seconds',
    features: [
      'Never drop a lead',
      '24/7 communication',
      'Automated follow-up',
      'Booked appointments',
    ],
  },
  {
    id: 'inbound',
    title: 'Inbound',
    color: 'bg-[#D4E8F5]',
    activeColor: 'bg-[#D4E8F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
    description: 'Capture, qualify, and route every lead instantly so hot leads never go cold.',
    mainTitle: 'Never Hit Call Capacity',
    features: [
      'Every call is answered',
      'Data and query collection',
      'Lead prequalification',
      'Smart transfer routing',
    ],
  },
  {
    id: 'enrichment',
    title: 'Smart Routing',
    color: 'bg-[#E8E5F5]',
    activeColor: 'bg-[#E8E5F5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
      </svg>
    ),
    description: 'Cleanse and complete your records with always-fresh data that powers smarter targeting.',
    mainTitle: 'Ensure Every Lead is Closed',
    features: [
      'Skill based agent routing',
      'High value lead routing',
      'Priority lead routing',
      'Time of day call routing',
    ],
  },
  {
    id: 'execution',
    title: 'CRM Integration',
    color: 'bg-[#5DD5D5]',
    activeColor: 'bg-[#5DD5D5]',
    icon: (
      <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
      </svg>
    ),
    description: 'Keep deals moving with AI-powered prep, meeting insights, and follow-up.',
    mainTitle: 'Capture Every Lead Detail',
    features: [
      'Post every interaction to your CRM',
      'Transcript and call recording',
      'CRM event update',
      'Funnel status update',
    ],
  },
];

export default function AIVIFeatureTabs() {
  const [activeTab, setActiveTab] = useState('outbound');

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-6">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 min-h-screen">
        {/* Section Header */}
        <div className="text-center mb-6 sm:mb-8 mt-6 sm:mt-8 md:mt-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-[#000000] mb-3 sm:mb-4 max-w-[800px] mx-auto px-2">
            AI-powered precision for smarter lead engagement and conversion
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto px-2">
            Powered by AIVI data so that every outreach is tested and proven before any of your campaigns launch to guarantee results.
          </p>
        </div>

        {/* Horizontal Tab Navigation */}
        <div className="flex gap-2 mb-8 sm:mb-12 flex-wrap justify-center">
          {features.map((feature, index) => (
            <button
              key={feature.id}
              onClick={() => setActiveTab(feature.id)}
              className={`group relative flex-1 min-w-[120px] sm:min-w-0 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap overflow-hidden animate-[fadeInUp_0.5s_ease-out] ${
                activeTab === feature.id
                  ? `${feature.activeColor} text-[#000000] shadow-md scale-105`
                  : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E8E8E8] hover:scale-102 hover:shadow-sm'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

              <span className="relative z-10 text-[11px] sm:text-[13px] font-semibold uppercase tracking-[0.5px]">
                {feature.title}
              </span>

              {/* Active indicator */}
              {activeTab === feature.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#000000] animate-[expandWidth_0.3s_ease-out]" />
              )}
            </button>
          ))}
        </div>

        {/* Main Content Grid - Two Columns */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Column - Content */}
          <div
            key={activeTab}
            className="space-y-6 sm:space-y-8 animate-[fadeInUp_0.5s_ease-out]"
          >
            <h3 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.25] font-normal text-[#000000]">
              {activeFeature.mainTitle}
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="group relative w-full sm:w-auto px-6 py-3 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Get started for free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
              <button className="group relative w-full sm:w-auto px-6 py-3 bg-white border-2 border-[#000000] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#000000] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Learn more</span>
                <div className="absolute inset-0 bg-[#000000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ zIndex: 0 }} />
              </button>
            </div>

            {/* Feature List */}
            <div className="space-y-3 sm:space-y-4">
              {activeFeature.features.map((item, index) => (
                <div
                  key={index}
                  className="group flex gap-3 items-start animate-[fadeInLeft_0.5s_ease-out] hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-5 h-5 mt-0.5 flex-shrink-0 bg-[#f84608] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-[14px] sm:text-[15px] leading-[1.5] text-[#333333] group-hover:text-[#000000] transition-colors">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Product Demo */}
          <div
            key={`demo-${activeTab}`}
            className={`group relative rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] ${activeFeature.activeColor} animate-[fadeInRight_0.5s_ease-out] transition-shadow duration-500 mt-6 lg:mt-0`}
          >
            {/* Animated gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="aspect-[16/9] p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <div className="relative w-full bg-white/20 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 space-y-3 sm:space-y-4 group-hover:bg-white/30 transition-all duration-300">
                {/* Animated skeleton loaders */}
                <div className="h-3 sm:h-4 bg-white/30 rounded w-3/4 animate-pulse"></div>
                <div className="h-3 sm:h-4 bg-white/30 rounded w-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
                <div className="h-3 sm:h-4 bg-white/30 rounded w-5/6 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <div className="h-10 sm:h-12 bg-[#f84608] rounded-lg flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer shadow-lg">
                    <span className="text-[12px] sm:text-[14px] font-semibold text-white">{activeFeature.title} Dashboard</span>
                  </div>
                  <div className="h-8 sm:h-10 bg-white/30 rounded-lg hover:bg-white/40 transition-colors duration-300 cursor-pointer"></div>
                  <div className="h-8 sm:h-10 bg-white/30 rounded-lg hover:bg-white/40 transition-colors duration-300 cursor-pointer"></div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-[#f84608] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
