'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import { FaCode, FaChartLine, FaEdit, FaFileAlt, FaSmile, FaCheckCircle, FaUsersCog, FaChartBar, FaPhoneAlt } from 'react-icons/fa';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const features = [
  {
    id: 'sdk-dev-kit',
    title: 'SDK-Style Dev Kit',
    description: 'Build custom voice AI solutions with our developer-first SDK. Full control over call flows, integrations, and customization.',
    icon: FaCode,
    category: 'Infrastructure and Efficiency',
  },
  {
    id: 'observability-dashboard',
    title: 'Observability Dashboard',
    description: 'Monitor every metric that matters with customizable dashboards, real-time KPIs, and exportable reports for data-driven decisions.',
    icon: FaChartLine,
    category: 'Analytics',
  },
  {
    id: 'prompt-flow-editor',
    title: 'Prompt and Flow Editor',
    description: 'Design conversational AI flows with an intuitive visual editor. Create complex workflows with triggers, conditions, and smart sequencing.',
    icon: FaEdit,
    category: 'Intelligence Layer',
  },
  {
    id: 'call-transcription',
    title: 'Call Transcription and Summaries',
    description: 'Automatically transcribe and summarize every conversation with AI-powered insights. Full compliance with recording and archival.',
    icon: FaFileAlt,
    category: 'Call Centre Automation',
  },
  {
    id: 'sentiment-analysis',
    title: 'Customer Sentiment Analysis',
    description: 'Real-time sentiment detection with tone adaptation. Know exactly how leads feel and respond with perfect emotional intelligence.',
    icon: FaSmile,
    category: 'Intelligence Layer',
  },
  {
    id: 'qa-compliance',
    title: 'Auto QA and Compliance Checks',
    description: 'Built-in TCPA, CAN-SPAM, and HIPAA compliance. Automated quality assurance with anomaly detection and alerts.',
    icon: FaCheckCircle,
    category: 'Call Centre Automation',
  },
  {
    id: 'performance-dashboard',
    title: 'Agent and AI Performance Dashboard',
    description: 'Track agent performance scorecards, campaign ROI, and conversion funnels with live analytics and automated reporting.',
    icon: FaUsersCog,
    category: 'Analytics',
  },
  {
    id: 'kpi-tracking',
    title: 'Custom KPI Tracking',
    description: 'Define and monitor custom KPIs that matter to your business. Predictive conversion probability and lead prioritization.',
    icon: FaChartBar,
    category: 'Analytics',
  },
  {
    id: 'inbound-automation',
    title: 'Inbound Automation',
    description: 'Handle incoming calls 24/7 with intelligent routing, 3-way transfers, and seamless handoff to live agents in under 13 seconds.',
    icon: FaPhoneAlt,
    category: 'Call Centre Automation',
  },
];

const filterCategories = [
  'All',
  'Analytics',
  'Call Centre Automation',
  'Intelligence Layer',
  'Infrastructure and Efficiency',
];

export default function FeaturesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const { openDemoPopup } = useDemoPopup();

  const filteredFeatures = features.filter((feature) => {
    const matchesSearch =
      feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feature.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || feature.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <AIVINavigationV4 />
      <main className="min-h-screen bg-[#E8E5E0] font-manrope">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[72px] relative overflow-hidden mb-[15px]">
            <div className="bg-soft-gradient absolute inset-0 rounded-2xl"></div>

            <div className="w-full px-3 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
              <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
                <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] font-normal text-black mb-4 sm:mb-6">
                  Every Feature Your AI Workflow Needs
                </h1>
                <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto mb-8">
                  AIVI unifies voice, data, and automation, so nothing breaks in between.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/demo"
                    className="group relative inline-flex items-center justify-center h-12 px-8 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC]"
                  >
                    <span className="relative z-10">Create Agent</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A3FFC] to-[#FF5F37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <button
                    onClick={openDemoPopup}
                    className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-black text-black text-[15px] font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Book a Demo
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Search & Filter Section */}
          <section className="w-full px-3 sm:px-6 pb-8">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
              {/* Search Input */}
              <div className="relative mb-6 max-w-[60%] mx-auto">
                <input
                  type="text"
                  placeholder="Search features..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full h-12 px-4 rounded-xl border-2 border-[#E8E5E0] bg-white text-[15px] text-[#666666] placeholder:text-[#666666] focus:border-[#FF5F37] focus:outline-none transition-colors shadow-soft"
                />
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap gap-3 justify-center">
                {filterCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC] text-white shadow-lg'
                        : 'bg-white text-[#666666] border border-[#E8E5E0] hover:border-[#FF5F37]/30'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Feature Cards Grid */}
          <section className="w-full px-3 sm:px-6 pb-16 sm:pb-20">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
              {filteredFeatures.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredFeatures.map((feature, index) => (
                    <div
                      key={feature.id}
                      className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5E0] hover:border-[#FF5F37]/30 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F37]/0 to-[#8A3FFC]/0 group-hover:from-[#FF5F37]/5 group-hover:to-[#8A3FFC]/5 transition-all duration-500"></div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-[#FF5F37]/10 text-[#FF5F37] group-hover:bg-[#FF5F37]/20">
                          <feature.icon className="text-[32px]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[18px] sm:text-[20px] font-semibold text-black mb-3 group-hover:text-[#FF5F37] transition-colors duration-300">
                          {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#666666] mb-5">
                          {feature.description}
                        </p>

                        {/* View More Link */}
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#FF5F37] hover:gap-3 transition-all hover:underline"
                        >
                          View More
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-[18px] text-[#666666]">No features found matching your search.</p>
                </div>
              )}
            </div>
          </section>

          {/* CTA Section */}
          <section className="w-full bg-gradient-to-br from-[#FF5F37] to-[#8A3FFC] rounded-t-2xl px-3 sm:px-6 py-16 sm:py-20">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-white mb-4">
                Your AI Call Center, Simplified
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-8 max-w-[600px] mx-auto">
                Start automating your lead engagement today. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#FF5F37] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  Create Agent
                </Link>
                <button
                  onClick={openDemoPopup}
                  className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-white text-white text-[15px] font-semibold rounded-md hover:bg-white/10 transition-all duration-300"
                >
                  Book a Demo
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
