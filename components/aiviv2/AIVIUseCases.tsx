'use client';

import { useState } from 'react';
import {
  HiOutlineFlag,
  HiBuildingOffice2,
  HiCheckCircle,
  HiChartBarSquare,
  HiMagnifyingGlass,
  HiArrowTrendingUp
} from 'react-icons/hi2';
import {
  FaLaptopCode,
  FaDollarSign,
  FaHospital,
  FaIndustry,
  FaBriefcase,
  FaShoppingCart,
  FaRocket,
  FaBriefcaseMedical
} from 'react-icons/fa';

const useCases = [
  {
    id: 'outbound-sales',
    title: 'Outbound Sales',
    Icon: HiOutlineFlag,
    tagline: 'Transform cold outreach into hot opportunities',
    description: 'Identify, engage, and convert your ideal customers with AI-powered prospecting and personalized outreach at scale.',
    benefits: [
      'Access 275M+ verified contacts instantly',
      'AI-generated personalized emails',
      'Multi-channel sequences (email, phone, LinkedIn)',
      'Real-time lead scoring and prioritization',
    ],
    stats: {
      metric: '3X',
      label: 'More qualified meetings',
    },
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'account-based',
    title: 'Account-Based Marketing',
    Icon: HiBuildingOffice2,
    tagline: 'Target high-value accounts with precision',
    description: 'Coordinate sales and marketing efforts to penetrate key accounts with personalized, multi-touch campaigns.',
    benefits: [
      'Identify decision-makers across target accounts',
      'Coordinate team outreach and messaging',
      'Track account engagement in real-time',
      'Orchestrate multi-stakeholder campaigns',
    ],
    stats: {
      metric: '2.5X',
      label: 'Higher close rates',
    },
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'lead-qualification',
    title: 'Lead Qualification',
    Icon: HiCheckCircle,
    tagline: 'Focus on leads that matter most',
    description: 'Automatically score, route, and prioritize inbound leads so your team spends time on opportunities most likely to close.',
    benefits: [
      'AI-powered lead scoring',
      'Instant lead enrichment',
      'Smart routing to right reps',
      'Automated follow-up sequences',
    ],
    stats: {
      metric: '60%',
      label: 'Faster response time',
    },
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50',
  },
  {
    id: 'data-enrichment',
    title: 'Data Enrichment',
    Icon: HiChartBarSquare,
    tagline: 'Keep your CRM clean and complete',
    description: 'Automatically fill gaps in your contact and company data with the most accurate, up-to-date B2B information available.',
    benefits: [
      'Real-time data validation',
      'Automatic profile updates',
      'Job change alerts',
      '95%+ data accuracy',
    ],
    stats: {
      metric: '80%',
      label: 'Reduction in bad data',
    },
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    id: 'sales-intelligence',
    title: 'Sales Intelligence',
    Icon: HiMagnifyingGlass,
    tagline: 'Arm your team with winning insights',
    description: 'Give reps the context they need to have meaningful conversations with buyers and close deals faster.',
    benefits: [
      'Company technographics and firmographics',
      'Buying intent signals',
      'Competitive intelligence',
      'Pre-meeting research automation',
    ],
    stats: {
      metric: '45%',
      label: 'Shorter sales cycle',
    },
    color: 'from-cyan-400 to-cyan-600',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'pipeline-management',
    title: 'Pipeline Management',
    Icon: HiArrowTrendingUp,
    tagline: 'Keep deals moving forward',
    description: 'Track, forecast, and accelerate opportunities through your pipeline with AI-powered insights and automation.',
    benefits: [
      'Visual pipeline boards',
      'Deal health scoring',
      'Automated next-step recommendations',
      'Accurate revenue forecasting',
    ],
    stats: {
      metric: '35%',
      label: 'More accurate forecasts',
    },
    color: 'from-pink-400 to-pink-600',
    bgColor: 'bg-pink-50',
  },
];

const industries = [
  {
    name: 'Technology & SaaS',
    Icon: FaLaptopCode,
    description: 'Scale your sales motion from startup to enterprise',
    companies: ['Salesforce', 'HubSpot', 'Zoom'],
  },
  {
    name: 'Financial Services',
    Icon: FaDollarSign,
    description: 'Build compliant, high-trust relationships',
    companies: ['JPMorgan', 'Goldman Sachs', 'Stripe'],
  },
  {
    name: 'Healthcare',
    Icon: FaHospital,
    description: 'Navigate complex buying committees',
    companies: ['UnitedHealth', 'Kaiser', 'CVS Health'],
  },
  {
    name: 'Manufacturing',
    Icon: FaIndustry,
    description: 'Manage long sales cycles and multiple stakeholders',
    companies: ['GE', 'Siemens', '3M'],
  },
  {
    name: 'Professional Services',
    Icon: FaBriefcase,
    description: 'Convert more consultations into clients',
    companies: ['Deloitte', 'McKinsey', 'Accenture'],
  },
  {
    name: 'E-commerce & Retail',
    Icon: FaShoppingCart,
    description: 'Drive B2B partnerships and wholesale deals',
    companies: ['Shopify', 'Amazon Business', 'Target'],
  },
];

const customerStories = [
  {
    company: 'TechFlow Solutions',
    industry: 'SaaS',
    challenge: 'Low response rates on cold outreach',
    solution: 'Implemented AI-personalized multi-channel sequences',
    result: '3.5X increase in meeting bookings',
    quote: 'AIVI transformed our outbound strategy. We\'re now booking meetings with enterprise accounts we couldn\'t reach before.',
    author: 'Jennifer Martinez',
    role: 'VP of Sales',
    Icon: FaRocket,
  },
  {
    company: 'Financial Partners Group',
    industry: 'Finance',
    challenge: 'Inefficient lead qualification process',
    solution: 'Automated lead scoring and routing',
    result: '65% reduction in time-to-first-contact',
    quote: 'The AI lead scoring ensures we\'re always talking to the right prospects at the right time.',
    author: 'Robert Chen',
    role: 'Head of Business Development',
    Icon: FaBriefcase,
  },
  {
    company: 'HealthTech Innovators',
    industry: 'Healthcare',
    challenge: 'Difficulty tracking multiple stakeholders',
    solution: 'Account-based orchestration with AIVI',
    result: '2.8X improvement in deal velocity',
    quote: 'Managing complex healthcare sales is much easier when we can see all decision-makers in one place.',
    author: 'Dr. Sarah Williams',
    role: 'Chief Revenue Officer',
    Icon: FaBriefcaseMedical,
  },
];

export default function AIVIUseCases() {
  const [activeCase, setActiveCase] = useState('outbound-sales');
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);
  const [hoveredStory, setHoveredStory] = useState<number | null>(null);

  const activeCaseData = useCases.find((uc) => uc.id === activeCase) || useCases[0];

  return (
    <div className="w-full bg-[#E8E5E0]">
      {/* Combined Hero & Use Case Navigator Section */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-20">
          {/* Hero Content */}
          <div className="text-center mb-16 animate-[fadeInUp_0.6s_ease-out]">
            <div className="inline-block mb-6">
              <span className="text-[11px] font-bold tracking-[1.5px] text-[#666666] uppercase px-4 py-2 bg-[#E5FF00]/20 rounded-full">
                Use Cases
              </span>
            </div>
            <h1 className="text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-6 animate-[fadeInUp_0.8s_ease-out]">
              One platform,
              <br />
              <span className="relative inline-block">
                endless possibilities
                <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E5FF00]/30 -z-10" />
              </span>
            </h1>
            <p className="text-[19px] leading-[1.6] text-[#333333] max-w-[800px] mx-auto animate-[fadeInUp_1s_ease-out]">
              From outbound prospecting to pipeline management, see how teams like yours use AIVI to drive revenue growth
            </p>
          </div>

          {/* Use Case Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12">
            {useCases.map((useCase, index) => {
              const IconComponent = useCase.Icon;
              return (
                <button
                  key={useCase.id}
                  onClick={() => setActiveCase(useCase.id)}
                  className={`group relative p-4 rounded-xl transition-all duration-300 animate-[fadeInUp_0.5s_ease-out] ${
                    activeCase === useCase.id
                      ? `${useCase.bgColor} border-2 border-gray-300 shadow-md scale-105`
                      : 'bg-gray-50 border-2 border-transparent hover:border-gray-200 hover:shadow-sm'
                  }`}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className={`text-[32px] mb-2 transition-transform duration-300 ${
                    activeCase === useCase.id ? 'scale-110' : 'group-hover:scale-110'
                  }`}>
                    <IconComponent className="mx-auto text-[#000000]" />
                  </div>
                  <div className={`text-[13px] font-semibold transition-colors ${
                    activeCase === useCase.id ? 'text-[#000000]' : 'text-[#666666] group-hover:text-[#000000]'
                  }`}>
                    {useCase.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Use Case Content */}
          <div
            key={activeCase}
            className="grid lg:grid-cols-[1.5fr_1fr] gap-12 animate-[fadeInUp_0.5s_ease-out]"
          >
            {/* Left Column */}
            <div>
              <div className={`inline-block px-4 py-2 rounded-full text-[12px] font-bold uppercase tracking-wider text-white bg-gradient-to-r ${activeCaseData.color} mb-4`}>
                {activeCaseData.title}
              </div>
              <h2 className="text-[42px] leading-[1.2] font-normal text-[#000000] mb-4">
                {activeCaseData.tagline}
              </h2>
              <p className="text-[17px] leading-[1.6] text-[#666666] mb-8">
                {activeCaseData.description}
              </p>

              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {activeCaseData.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex gap-3 items-start hover:translate-x-2 transition-transform duration-300"
                  >
                    <div className="w-6 h-6 mt-0.5 flex-shrink-0 bg-[#E5FF00] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4 text-[#000000]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[16px] leading-[1.5] text-[#333333] group-hover:text-[#000000] transition-colors font-medium">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="group relative px-8 py-4 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
                <span className="relative z-10">Learn More</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </div>

            {/* Right Column - Stats & Visual */}
            <div>
              <div className={`relative rounded-2xl p-12 bg-gradient-to-br ${activeCaseData.color} text-white shadow-xl hover:shadow-2xl transition-all duration-500 group`}>
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  {activeCaseData.Icon && <activeCaseData.Icon className="w-32 h-32" />}
                </div>
                <div className="relative z-10">
                  <div className="text-[15px] font-semibold uppercase tracking-wider mb-4 opacity-90">
                    Average Result
                  </div>
                  <div className="text-[72px] font-bold leading-none mb-3 group-hover:scale-110 transition-transform duration-300">
                    {activeCaseData.stats.metric}
                  </div>
                  <div className="text-[20px] font-medium opacity-95">
                    {activeCaseData.stats.label}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-6 bg-gray-50 rounded-2xl border-2 border-gray-100">
                <h4 className="text-[16px] font-semibold text-[#000000] mb-3">Perfect for:</h4>
                <div className="space-y-2">
                  {['Sales Teams', 'Marketing Teams', 'Revenue Operations'].map((team, index) => (
                    <div key={index} className="flex items-center gap-2 text-[14px] text-[#666666]">
                      <div className="w-2 h-2 bg-[#E5FF00] rounded-full" />
                      {team}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              Teams in every sector use AIVI to accelerate their sales performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => {
              const IconComponent = industry.Icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredIndustry(index)}
                  onMouseLeave={() => setHoveredIndustry(null)}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-[fadeInUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-[56px] mb-4 text-[#000000] group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent />
                  </div>
                  <h3 className="text-[22px] font-semibold text-[#000000] mb-3 group-hover:text-blue-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-[15px] text-[#666666] mb-6 leading-[1.6]">
                    {industry.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {industry.companies.map((company, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white border border-gray-200 rounded-full text-[12px] font-medium text-[#666666] group-hover:border-[#E5FF00] group-hover:bg-[#E5FF00]/10 transition-all"
                      >
                        {company}
                      </span>
                    ))}
                  </div>
                  <div className={`absolute inset-0 bg-[#E5FF00]/5 rounded-2xl transition-opacity duration-300 ${
                    hoveredIndustry === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Customer Stories */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Real Results from Real Customers
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              See how companies like yours are driving growth with AIVI
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {customerStories.map((story, index) => {
              const IconComponent = story.Icon;
              return (
                <div
                  key={index}
                  onMouseEnter={() => setHoveredStory(index)}
                  onMouseLeave={() => setHoveredStory(null)}
                  className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-[fadeInUp_0.6s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Logo */}
                  <div className="w-16 h-16 bg-white rounded-xl shadow-md flex items-center justify-center text-[32px] mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                    <IconComponent className="text-[#000000]" />
                  </div>

                  {/* Company & Industry */}
                  <h3 className="text-[22px] font-semibold text-[#000000] mb-2 group-hover:text-blue-600 transition-colors">
                    {story.company}
                  </h3>
                  <div className="text-[12px] font-bold text-[#E5FF00] uppercase tracking-wider mb-6">
                    {story.industry}
                  </div>

                  {/* Challenge */}
                  <div className="mb-4">
                    <div className="text-[13px] font-semibold text-[#666666] uppercase tracking-wider mb-2">
                      Challenge
                    </div>
                    <p className="text-[14px] text-[#333333]">{story.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-4">
                    <div className="text-[13px] font-semibold text-[#666666] uppercase tracking-wider mb-2">
                      Solution
                    </div>
                    <p className="text-[14px] text-[#333333]">{story.solution}</p>
                  </div>

                  {/* Result */}
                  <div className="mb-6 p-4 bg-[#E5FF00]/20 rounded-xl">
                    <div className="text-[13px] font-semibold text-[#000000] uppercase tracking-wider mb-2">
                      Result
                    </div>
                    <p className="text-[18px] font-bold text-[#000000]">{story.result}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-4 border-[#E5FF00] pl-4 mb-4">
                    <p className="text-[14px] text-[#666666] italic leading-[1.6] mb-3">
                      "{story.quote}"
                    </p>
                    <div className="text-[13px] text-[#000000] font-semibold">
                      {story.author}
                    </div>
                    <div className="text-[12px] text-[#666666]">
                      {story.role}
                    </div>
                  </blockquote>

                  <div className={`absolute inset-0 bg-[#E5FF00]/5 rounded-2xl transition-opacity duration-300 ${
                    hoveredStory === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-6 pb-12">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-gradient-to-br from-[#000000] to-[#333333] rounded-3xl shadow-lg p-12 lg:p-16 text-center animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-[48px] leading-[1.2] font-normal text-white mb-6">
            Ready to transform your sales process?
          </h2>
          <p className="text-[17px] leading-[1.6] text-white/80 max-w-[600px] mx-auto mb-8">
            Join 500,000+ users who are already accelerating their revenue growth with AIVI.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="group relative px-8 py-4 bg-[#E5FF00] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#D4EE00] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Start Free Trial</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <button className="group relative px-8 py-4 bg-transparent border-2 border-white text-white text-[15px] font-semibold rounded-md hover:bg-white hover:text-[#000000] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Schedule Demo</span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ zIndex: 0 }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
