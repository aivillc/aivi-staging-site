'use client';

import { useState } from 'react';

interface FeaturesProps {
  industry?: 'Financial' | 'Healthcare' | 'Law Firms' | 'Real Estate' | 'Logistics';
}

const featuresContent = {
  Financial: {
    title: 'Financial Services AI',
    subtitle: 'Capabilities',
    description: 'Secure client communication, automated reporting, and compliance-ready financial advisory automation'
  },
  Healthcare: {
    title: 'Healthcare-Specific AI',
    subtitle: 'Capabilities',
    description: 'HIPAA-compliant automation for patient engagement, appointment management, and healthcare communication'
  },
  'Law Firms': {
    title: 'Legal Practice AI',
    subtitle: 'Capabilities',
    description: 'Confidential client communication, case management automation, and consultation scheduling'
  },
  Logistics: {
    title: 'Logistics-Optimized AI',
    subtitle: 'Capabilities',
    description: 'Real-time shipment tracking, delivery notifications, and customer communication automation'
  },
  'Real Estate': {
    title: 'Real Estate-Focused AI',
    subtitle: 'Capabilities',
    description: 'Instant lead response, showing automation, and property communication at scale'
  }
};

export default function Features({ industry }: FeaturesProps = {}) {
  const content = industry ? featuresContent[industry] : {
    title: 'Multi-Channel AI',
    subtitle: 'Capabilities',
    description: 'Seamlessly engage customers across every channel with AI-powered automation'
  };

  return (
    <section id="features" className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            {content.title}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              {content.subtitle}
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            title="AI Voice Calls"
            description="Natural-sounding voice agents that handle calls, qualify leads, answer questions, and transfer to human agents when needed."
            features={[
              'Human-like conversations',
              'Real-time transcription',
              'Sentiment analysis',
              'Intelligent call routing',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            }
            gradient="from-purple-500 to-purple-700"
          />

          <FeatureCard
            title="SMS Automation"
            description="Reach customers instantly with personalized text messages triggered by CRM events or business operations."
            features={[
              'Two-way conversations',
              'Template library',
              'Automated follow-ups',
              'Delivery tracking',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            }
            gradient="from-orange-500 to-orange-700"
          />

          <FeatureCard
            title="Email Campaigns"
            description="Send targeted, personalized email campaigns that nurture leads and drive conversions."
            features={[
              'Personalization engine',
              'A/B testing',
              'Performance analytics',
              'Automated sequences',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
            gradient="from-purple-500 to-purple-700"
          />

          <FeatureCard
            title="Document Intelligence"
            description="OCR + LLM technology extracts data from documents, invoices, and forms automatically."
            features={[
              'OCR text extraction',
              'Data validation',
              'Auto-categorization',
              'CRM auto-update',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            }
            gradient="from-orange-500 to-orange-700"
          />

          <FeatureCard
            title="CRM Integration"
            description="Connect with any CRM platform. Trigger workflows based on CRM events and keep data in sync."
            features={[
              'HubSpot, Salesforce, etc.',
              'Real-time sync',
              'Custom field mapping',
              'Bi-directional updates',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            }
            gradient="from-purple-500 to-purple-700"
          />

          <FeatureCard
            title="Analytics Dashboard"
            description="Track performance, monitor agent behavior, and measure ROI with comprehensive dashboards."
            features={[
              'Real-time metrics',
              'Agent coaching insights',
              'Conversion tracking',
              'Custom reporting',
            ]}
            icon={
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            gradient="from-orange-500 to-orange-700"
          />
        </div>

        {/* Additional Capabilities - Removed Enterprise-Grade Security & Powered by xPulse Technology */}
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  gradient: string;
}

function FeatureCard({ title, description, features, icon, gradient }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-2xl blur-xl transition-all duration-500 ${
        isHovered ? 'opacity-40' : 'opacity-0'
      }`} />
      
      <div className="relative h-full p-8 bg-white/5 backdrop-blur-sm border-2 border-white/10 hover:border-white/30 rounded-2xl transition-all duration-500 overflow-hidden">
        {/* Animated top border */}
        <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
        
        {/* Side accent bar */}
        <div className={`absolute top-0 left-0 w-1 h-0 bg-gradient-to-b ${gradient} transition-all duration-500 ${
          isHovered ? 'h-full' : 'h-0'
        }`} />
        
        {/* Icon */}
        <div className={`mb-6 transition-all duration-300 ${isHovered ? '-translate-y-2' : 'translate-y-0'}`}>
          <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-lg transition-all duration-300 ${
            isHovered ? 'scale-110 shadow-2xl' : 'scale-100'
          }`}>
            {icon}
          </div>
        </div>
        
        <h3 className="text-2xl font-black text-white mb-3 transition-colors group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text" style={{
          backgroundImage: isHovered ? `linear-gradient(to right, var(--tw-gradient-stops))` : undefined,
          '--tw-gradient-from': isHovered ? (gradient.includes('purple') ? '#a855f7' : '#f97316') : undefined,
          '--tw-gradient-to': isHovered ? (gradient.includes('purple') ? '#7c3aed' : '#ea580c') : undefined,
          '--tw-gradient-stops': isHovered ? 'var(--tw-gradient-from), var(--tw-gradient-to)' : undefined,
        } as React.CSSProperties}>
          {title}
        </h3>
        
        <p className="text-white/60 group-hover:text-white/80 mb-6 leading-relaxed transition-colors">{description}</p>
        
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-white/70 group-hover:text-white/90 transition-all">
              <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text font-black text-lg transition-transform ${
                isHovered ? 'scale-125' : 'scale-100'
              }`}>✓</span>
              <span className="transition-transform">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
