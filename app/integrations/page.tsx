'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState } from 'react';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import {
  FaCode,
  FaPhone,
  FaCalendarAlt,
  FaRobot,
  FaComments,
  FaCreditCard,
  FaTools,
  FaChartLine,
  FaEnvelope,
  FaCloud,
  FaBolt,
  FaDatabase,
  FaExchangeAlt,
  FaUsers,
  FaBullhorn
} from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: IconType;
  category: string;
}

const integrations: Integration[] = [
  // Popular
  { id: 'n8n', name: 'n8n', description: 'Workflow automation platform for connecting apps and building custom integrations without code.', icon: FaBolt, category: 'Popular' },
  { id: 'twilio', name: 'Twilio', description: 'Cloud communications platform for voice, SMS, and video messaging capabilities.', icon: FaPhone, category: 'Popular' },
  { id: 'ghl', name: 'Go High Level', description: 'All-in-one marketing automation and CRM platform for agencies and businesses.', icon: FaBullhorn, category: 'Popular' },
  { id: 'elevenlabs', name: 'ElevenLabs', description: 'Advanced AI voice synthesis for natural-sounding text-to-speech generation.', icon: FaRobot, category: 'Popular' },
  { id: 'openai', name: 'OpenAI', description: 'Powerful AI language models for intelligent conversations and content generation.', icon: FaRobot, category: 'Popular' },
  { id: 'hubspot', name: 'HubSpot', description: 'Leading CRM and marketing automation platform for inbound sales and support.', icon: FaChartLine, category: 'Popular' },
  { id: 'retell', name: 'Retell', description: 'Voice AI platform for building conversational phone agents with natural interactions.', icon: FaPhone, category: 'Popular' },

  // CRM & Sales
  { id: 'salesforce', name: 'Salesforce', description: 'World\'s #1 enterprise CRM for sales, service, and marketing automation.', icon: FaChartLine, category: 'CRM & Sales' },
  { id: 'hubspot-crm', name: 'HubSpot', description: 'CRM and marketing hub for managing contacts, deals, and customer relationships.', icon: FaChartLine, category: 'CRM & Sales' },
  { id: 'zoho', name: 'Zoho CRM', description: 'Sales automation and customer management with AI-powered insights.', icon: FaChartLine, category: 'CRM & Sales' },
  { id: 'pipedrive', name: 'Pipedrive', description: 'Sales pipeline CRM designed to help teams track deals and close more sales.', icon: FaChartLine, category: 'CRM & Sales' },
  { id: 'ghl-crm', name: 'Go High Level', description: 'Marketing automation and CRM with sales funnel and campaign management.', icon: FaBullhorn, category: 'CRM & Sales' },
  { id: 'monday', name: 'Monday.com', description: 'Work management platform for tracking sales processes and team collaboration.', icon: FaUsers, category: 'CRM & Sales' },

  // Telephony
  { id: 'twilio-tel', name: 'Twilio', description: 'Cloud communications API for voice calls, SMS, and WhatsApp messaging.', icon: FaPhone, category: 'Telephony' },
  { id: 'telnyx', name: 'Telnyx', description: 'Global voice and messaging network with real-time communications APIs.', icon: FaPhone, category: 'Telephony' },
  { id: 'ringcentral', name: 'RingCentral', description: 'Business phone system with video, messaging, and contact center solutions.', icon: FaPhone, category: 'Telephony' },
  { id: 'vonage', name: 'Vonage', description: 'Unified communications platform for voice, video, and messaging APIs.', icon: FaPhone, category: 'Telephony' },
  { id: 'plivo', name: 'Plivo', description: 'Cloud communications platform for voice and SMS with global coverage.', icon: FaPhone, category: 'Telephony' },

  // Calendar & Scheduling
  { id: 'gcal', name: 'Google Calendar', description: 'Smart calendar management for scheduling meetings and tracking availability.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'cal', name: 'Cal.com', description: 'Open-source scheduling infrastructure for booking meetings and appointments.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'calendly', name: 'Calendly', description: 'Automated meeting scheduling tool that eliminates back-and-forth emails.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },
  { id: 'mscal', name: 'Microsoft Calendar', description: 'Outlook calendar integration for enterprise scheduling and availability.', icon: FaCalendarAlt, category: 'Calendar & Scheduling' },

  // AI & Automation
  { id: 'n8n-auto', name: 'n8n', description: 'Workflow automation for connecting 200+ apps with visual workflow builder.', icon: FaBolt, category: 'AI & Automation' },
  { id: 'zapier', name: 'Zapier', description: 'App automation platform connecting 5000+ apps without coding required.', icon: FaExchangeAlt, category: 'AI & Automation' },
  { id: 'make', name: 'Make', description: 'Visual automation platform for building complex workflows and integrations.', icon: FaBolt, category: 'AI & Automation' },
  { id: 'openai-auto', name: 'OpenAI', description: 'AI language models for intelligent automation and natural conversations.', icon: FaRobot, category: 'AI & Automation' },
  { id: 'elevenlabs-auto', name: 'ElevenLabs', description: 'AI voice synthesis for creating natural-sounding voice agents.', icon: FaRobot, category: 'AI & Automation' },
  { id: 'anthropic', name: 'Anthropic', description: 'Claude AI assistant for advanced reasoning and conversation capabilities.', icon: FaRobot, category: 'AI & Automation' },
  { id: 'retell-auto', name: 'Retell', description: 'Voice AI platform for automated phone conversations and call handling.', icon: FaPhone, category: 'AI & Automation' },

  // Communication
  { id: 'slack', name: 'Slack', description: 'Team messaging platform for real-time notifications and collaboration.', icon: FaComments, category: 'Communication' },
  { id: 'teams', name: 'Microsoft Teams', description: 'Collaboration hub for chat, meetings, and team communication.', icon: FaComments, category: 'Communication' },
  { id: 'gmail', name: 'Gmail', description: 'Email service integration for automated email notifications and tracking.', icon: FaEnvelope, category: 'Communication' },
  { id: 'outlook', name: 'Outlook', description: 'Email and calendar integration for enterprise communication workflows.', icon: FaEnvelope, category: 'Communication' },

  // Payments
  { id: 'stripe', name: 'Stripe', description: 'Payment processing platform for online transactions and subscription billing.', icon: FaCreditCard, category: 'Payments' },
  { id: 'zoho-invoice', name: 'Zoho Invoice', description: 'Invoicing and billing solution for automated payment collection.', icon: FaCreditCard, category: 'Payments' },

  // Developer Tools
  { id: 'supabase', name: 'Supabase', description: 'Open-source backend platform with database, auth, and real-time capabilities.', icon: FaDatabase, category: 'Developer Tools' },
  { id: 'azure', name: 'Azure', description: 'Microsoft cloud platform for enterprise infrastructure and AI services.', icon: FaCloud, category: 'Developer Tools' },
  { id: 'sentry', name: 'Sentry', description: 'Error tracking and performance monitoring for debugging production issues.', icon: FaCode, category: 'Developer Tools' },
  { id: 'datadog', name: 'DataDog', description: 'Monitoring and analytics platform for cloud infrastructure and applications.', icon: FaTools, category: 'Developer Tools' },
];

const filterCategories = [
  'All',
  'Popular',
  'CRM & Sales',
  'Telephony',
  'Calendar & Scheduling',
  'AI & Automation',
  'Communication',
  'Payments',
  'Developer Tools',
];

export default function IntegrationsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredIntegrations = integrations.filter((integration) => {
    const matchesSearch =
      integration.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      integration.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = activeFilter === 'All' || integration.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0] font-manrope">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[72px] relative overflow-hidden mb-[15px]">
            <div className="bg-soft-gradient absolute inset-0 rounded-2xl"></div>

            <div className="w-full px-3 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
              <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
                <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] font-normal text-black mb-4 sm:mb-6">
                  Connect AIVI to Your Entire Stack
                </h1>
                <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto mb-8">
                  50+ integrations to connect AIVI with your CRM, telephony, calendar, automation tools, and more.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/demo"
                    className="group relative inline-flex items-center justify-center h-12 px-8 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC]"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A3FFC] to-[#FF5F37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="#request"
                    className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-black text-black text-[15px] font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Request Integration
                  </Link>
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
                  placeholder="Search integrations..."
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

          {/* Integration Cards Grid */}
          <section className="w-full px-3 sm:px-6 pb-16 sm:pb-20">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
              {filteredIntegrations.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredIntegrations.map((integration, index) => (
                    <div
                      key={integration.id}
                      className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5E0] hover:border-[#FF5F37]/30 hover:-translate-y-2 hover:shadow-lg transition-all duration-500 relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#FF5F37]/0 to-[#8A3FFC]/0 group-hover:from-[#FF5F37]/5 group-hover:to-[#8A3FFC]/5 transition-all duration-500"></div>

                      <div className="relative z-10">
                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 bg-[#FF5F37]/10 text-[#FF5F37] group-hover:bg-[#FF5F37]/20">
                          <integration.icon className="text-[32px]" />
                        </div>

                        {/* Title */}
                        <h3 className="text-[18px] sm:text-[20px] font-semibold text-black mb-3 group-hover:text-[#FF5F37] transition-colors duration-300">
                          {integration.name}
                        </h3>

                        {/* Description */}
                        <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#666666] mb-5">
                          {integration.description}
                        </p>

                        {/* Category Badge */}
                        <span className="inline-block px-3 py-1 bg-[#F5F5F5] text-[#666666] text-[12px] font-medium rounded-full">
                          {integration.category}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-[18px] text-[#666666]">No integrations found matching your search.</p>
                </div>
              )}
            </div>
          </section>

          {/* Request Integration Section */}
          <section id="request" className="w-full bg-gradient-to-br from-[#FF5F37] to-[#8A3FFC] px-3 sm:px-6 py-16 sm:py-20">
            <div className="w-full max-w-[600px] mx-auto text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-white mb-4">
                Need a Custom Integration?
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-8">
                We build custom integrations for enterprise customers. Tell us what you need and our team will make it happen.
              </p>
              <div className="bg-white rounded-3xl p-6 sm:p-8">
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full h-12 px-4 border-2 border-[#E8E5E0] rounded-md text-[15px] placeholder:text-[#999999] focus:border-[#FF5F37] focus:outline-none transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Work email"
                      className="w-full h-12 px-4 border-2 border-[#E8E5E0] rounded-md text-[15px] placeholder:text-[#999999] focus:border-[#FF5F37] focus:outline-none transition-colors"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Company name"
                    className="w-full h-12 px-4 border-2 border-[#E8E5E0] rounded-md text-[15px] placeholder:text-[#999999] focus:border-[#FF5F37] focus:outline-none transition-colors"
                  />
                  <textarea
                    placeholder="What integration do you need? Tell us about your use case..."
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-[#E8E5E0] rounded-md text-[15px] placeholder:text-[#999999] focus:border-[#FF5F37] focus:outline-none transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full h-12 bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC] text-white text-[15px] font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                  >
                    Request Integration
                  </button>
                </form>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-16 sm:py-20">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
                Ready to Connect Your Stack?
              </h2>
              <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] mb-8 max-w-[600px] mx-auto">
                Start your free trial and connect AIVI to your existing tools in minutes.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC] text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Link>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
