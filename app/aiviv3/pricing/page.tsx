import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Pricing | AIVI - Simple Per-Lead Pricing',
  description: 'Transparent per-lead pricing for AI-powered lead engagement. Start free with 100 leads or scale with managed services. No hidden fees.',
};

const pricingTiers = [
  {
    name: 'Starter',
    price: '$0.50',
    unit: 'per lead',
    description: 'Perfect for small teams getting started with AI voice automation.',
    features: [
      'Up to 500 leads/month',
      'Voice + SMS channels',
      'Basic CRM integration',
      'Email support',
      'Standard analytics',
      '5 concurrent calls',
      '14-day call recordings',
    ],
    cta: 'Start Free Trial',
    href: '/aiviv3/demo',
    popular: false,
    color: 'orange',
  },
  {
    name: 'Growth',
    price: '$0.35',
    unit: 'per lead',
    description: 'For growing teams that need advanced features and priority support.',
    features: [
      'Up to 5,000 leads/month',
      'Voice + SMS + Email channels',
      'Advanced integrations (n8n, GHL, Twilio)',
      'Priority support',
      'Advanced analytics + A/B testing',
      '25 concurrent calls',
      'Custom voice personality',
      '90-day call recordings',
    ],
    cta: 'Start Free Trial',
    href: '/aiviv3/demo',
    popular: true,
    color: 'gradient',
  },
  {
    name: 'Scale',
    price: '$0.25',
    unit: 'per lead',
    description: 'For high-volume operations that demand maximum performance.',
    features: [
      'Up to 25,000 leads/month',
      'All channels + social',
      'All integrations + custom webhooks',
      'Dedicated success manager',
      'Real-time analytics + ML insights',
      'Unlimited concurrent calls',
      'Multi-language support',
      'White-label option',
      '1-year call recordings',
    ],
    cta: 'Contact Sales',
    href: '/aiviv3/demo',
    popular: false,
    color: 'purple',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    unit: 'pricing',
    description: 'For organizations with custom requirements and compliance needs.',
    features: [
      'Unlimited leads',
      'Custom AI model training',
      'SSO + advanced security',
      'Dedicated infrastructure',
      'SLA guarantees',
      'Compliance packages (HIPAA, SOC 2, GDPR)',
      'API access + custom development',
      'Unlimited call recordings',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    href: '/aiviv3/demo',
    popular: false,
    color: 'black',
  },
];

const comparisonFeatures = [
  {
    category: 'Channels',
    features: [
      { name: 'AI Voice Calls', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'SMS Automation', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Email Sequences', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Social Channels', starter: false, growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: 'Integrations',
    features: [
      { name: 'Basic CRM (HubSpot, Salesforce)', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Advanced Integrations (n8n, GHL)', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Custom Webhooks', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'API Access', starter: false, growth: 'Limited', scale: true, enterprise: true },
    ],
  },
  {
    category: 'Analytics',
    features: [
      { name: 'Standard Dashboard', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'A/B Testing', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'ML-Powered Insights', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'Custom Reports', starter: false, growth: false, scale: true, enterprise: true },
    ],
  },
  {
    category: 'Support',
    features: [
      { name: 'Email Support', starter: true, growth: true, scale: true, enterprise: true },
      { name: 'Priority Support', starter: false, growth: true, scale: true, enterprise: true },
      { name: 'Dedicated Success Manager', starter: false, growth: false, scale: true, enterprise: true },
      { name: 'Custom Training', starter: false, growth: false, scale: false, enterprise: true },
    ],
  },
];

const faqs = [
  {
    question: 'How does per-lead pricing work?',
    answer: 'You\'re charged for each lead that AIVI processes through any channel. A lead is counted once, regardless of how many touchpoints (calls, SMS, emails) occur during the engagement cycle.',
  },
  {
    question: 'What counts as a "processed lead"?',
    answer: 'A lead is processed when AIVI initiates contact through voice, SMS, or email. Leads that result in no engagement attempt (e.g., invalid numbers) are not charged.',
  },
  {
    question: 'Can I upgrade my plan mid-cycle?',
    answer: 'Yes, you can upgrade at any time. Your new pricing takes effect immediately, and we\'ll apply the new rate to remaining leads in your current billing cycle.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes! Start with 100 free leads on any plan. No credit card required. This gives you enough volume to see real results before committing.',
  },
  {
    question: 'Do you offer volume discounts?',
    answer: 'Yes. Our Scale and Enterprise tiers include volume-based pricing. For very high volumes, contact our sales team for a custom quote.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, ACH transfers, and wire transfers for Enterprise accounts. Monthly and annual billing options are available.',
  },
];

export default function PricingPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[72px] relative overflow-hidden mb-[10vh]">
            <div className="bg-soft-gradient absolute inset-0 rounded-2xl"></div>

            <div className="w-full px-3 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
              <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
                <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] font-normal text-black mb-4 sm:mb-6">
                  Simple, Transparent Pricing
                </h1>
                <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto mb-8">
                  Pay only for leads you engage. No hidden fees, no long-term contracts, no surprises.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/aiviv3/demo"
                    className="group relative inline-flex items-center justify-center h-12 px-8 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#FF5F37] to-[#8A3FFC]"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8A3FFC] to-[#FF5F37] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                  <Link
                    href="/aiviv3/demo"
                    className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-black text-black text-[15px] font-semibold rounded-md hover:bg-black hover:text-white transition-all duration-300"
                  >
                    Contact Sales
                  </Link>
                </div>
              </div>
            </div>
          </section>

        {/* Pricing Tiers */}
        <section className="w-full px-3 sm:px-6 pb-16 sm:pb-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier, index) => (
                <div
                  key={tier.name}
                  className={`group relative bg-white rounded-2xl p-6 sm:p-8 border-2 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up ${
                    tier.popular
                      ? 'border-[#f84608] shadow-lg scale-105'
                      : 'border-[#E8E5E0] hover:border-[#f84608]/30'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Animated gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/0 to-[#321ca3]/0 group-hover:from-[#f84608]/5 group-hover:to-[#321ca3]/5 transition-all duration-500 rounded-2xl"></div>

                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                      <span className="px-4 py-1 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-[12px] font-semibold rounded-full shadow-lg animate-pulse-glow">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6 relative z-10">
                    <h3 className="text-[20px] font-semibold text-black mb-2 group-hover:text-[#f84608] transition-colors">{tier.name}</h3>
                    <div className="flex items-baseline gap-1 mb-2">
                      <span
                        className={`text-[36px] sm:text-[42px] font-bold transition-all duration-300 group-hover:scale-105 ${
                          tier.color === 'gradient'
                            ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent animate-gradient-x'
                            : tier.color === 'orange'
                            ? 'text-[#f84608]'
                            : tier.color === 'purple'
                            ? 'text-[#321ca3]'
                            : 'text-black'
                        }`}
                      >
                        {tier.price}
                      </span>
                      <span className="text-[14px] text-[#666666]">{tier.unit}</span>
                    </div>
                    <p className="text-[14px] leading-[1.5] text-[#666666]">{tier.description}</p>
                  </div>

                  <ul className="space-y-3 mb-8 relative z-10">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            tier.color === 'gradient' || tier.color === 'orange'
                              ? 'bg-[#f84608]'
                              : tier.color === 'purple'
                              ? 'bg-[#321ca3]'
                              : 'bg-black'
                          }`}
                        >
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-[13px] sm:text-[14px] text-[#333333]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={tier.href}
                    className={`relative z-10 block w-full py-3 text-center text-[15px] font-semibold rounded-md transition-all duration-300 overflow-hidden group/btn ${
                      tier.popular
                        ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white hover:-translate-y-1 hover:shadow-xl'
                        : 'bg-[#FAFAFA] text-black border-2 border-[#E8E5E0] hover:border-black hover:bg-black hover:text-white'
                    }`}
                  >
                    <span className="relative z-10">{tier.cta}</span>
                    {tier.popular && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Comparison */}
        <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="text-center mb-12">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
                Compare Plans
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#666666]">
                See exactly what's included in each tier
              </p>
            </div>

            <div className="overflow-x-auto -mx-3 sm:mx-0">
              <table className="w-full min-w-[700px]">
                <thead>
                  <tr className="border-b-2 border-[#E8E5E0]">
                    <th className="text-left py-4 px-4 text-[14px] font-semibold text-black w-1/3">
                      Features
                    </th>
                    <th className="text-center py-4 px-4 text-[14px] font-semibold text-[#f84608]">
                      Starter
                    </th>
                    <th className="text-center py-4 px-4 text-[14px] font-semibold bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                      Growth
                    </th>
                    <th className="text-center py-4 px-4 text-[14px] font-semibold text-[#321ca3]">
                      Scale
                    </th>
                    <th className="text-center py-4 px-4 text-[14px] font-semibold text-black">
                      Enterprise
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((category) => (
                    <React.Fragment key={category.category}>
                      <tr className="bg-[#FAFAFA]">
                        <td
                          colSpan={5}
                          className="py-3 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider"
                        >
                          {category.category}
                        </td>
                      </tr>
                      {category.features.map((feature, i) => (
                        <tr key={feature.name} className="border-b border-[#E8E5E0]">
                          <td className="py-4 px-4 text-[14px] text-[#333333]">{feature.name}</td>
                          <td className="text-center py-4 px-4">
                            {feature.starter === true ? (
                              <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : feature.starter === false ? (
                              <span className="text-[#CCCCCC]">-</span>
                            ) : (
                              <span className="text-[12px] text-[#666666]">{feature.starter}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {feature.growth === true ? (
                              <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : feature.growth === false ? (
                              <span className="text-[#CCCCCC]">-</span>
                            ) : (
                              <span className="text-[12px] text-[#666666]">{feature.growth}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {feature.scale === true ? (
                              <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : feature.scale === false ? (
                              <span className="text-[#CCCCCC]">-</span>
                            ) : (
                              <span className="text-[12px] text-[#666666]">{feature.scale}</span>
                            )}
                          </td>
                          <td className="text-center py-4 px-4">
                            {feature.enterprise === true ? (
                              <svg className="w-5 h-5 mx-auto text-[#22c55e]" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            ) : feature.enterprise === false ? (
                              <span className="text-[#CCCCCC]">-</span>
                            ) : (
                              <span className="text-[12px] text-[#666666]">{feature.enterprise}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[800px] mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
                Pricing FAQ
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#E8E5E0]"
                >
                  <h3 className="text-[16px] font-semibold text-black mb-2">{faq.question}</h3>
                  <p className="text-[14px] leading-[1.6] text-[#666666]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enterprise CTA */}
        <section className="w-full bg-gradient-to-br from-[#f84608] to-[#321ca3] rounded-t-2xl px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-white mb-4">
                  Need Enterprise-Grade Solutions?
                </h2>
                <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-6">
                  Get custom pricing, dedicated infrastructure, and compliance features for large organizations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    'Custom AI model training',
                    'SSO and advanced security',
                    'Dedicated infrastructure',
                    'HIPAA, SOC 2, GDPR compliance',
                    'Custom SLA agreements',
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="text-[15px] text-white">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/aiviv3/demo"
                  className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#f84608] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
              <div className="hidden lg:block">
                <div className="bg-white/10 rounded-3xl p-8 backdrop-blur-sm">
                  <div className="text-center">
                    <div className="text-[64px] font-bold text-white mb-2">275M+</div>
                    <div className="text-[18px] text-white/80 mb-6">Active contacts in our database</div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-[32px] font-bold text-white">99.9%</div>
                        <div className="text-[14px] text-white/60">Uptime SLA</div>
                      </div>
                      <div>
                        <div className="text-[32px] font-bold text-white">SOC 2</div>
                        <div className="text-[14px] text-white/60">Certified</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
