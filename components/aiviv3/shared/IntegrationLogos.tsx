'use client';

import Link from 'next/link';

const integrations = [
  { name: 'n8n', category: 'Automation' },
  { name: 'Twilio', category: 'Telephony' },
  { name: 'Go High Level', category: 'CRM' },
  { name: 'ElevenLabs', category: 'AI' },
  { name: 'OpenAI', category: 'AI' },
  { name: 'HubSpot', category: 'CRM' },
  { name: 'Retell', category: 'AI' },
  { name: 'Salesforce', category: 'CRM' },
  { name: 'Zapier', category: 'Automation' },
  { name: 'Slack', category: 'Communication' },
  { name: 'Calendly', category: 'Calendar' },
  { name: 'Stripe', category: 'Payments' },
];

export default function IntegrationLogos() {
  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black mb-3">
            Seamless Integration With 50+ Tools
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[600px] mx-auto">
            Connect instantly with your favorite apps. Need something custom? We'll add new integrations on request.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {integrations.map((integration, index) => (
            <div
              key={integration.name}
              className="group bg-[#FAFAFA] rounded-xl p-4 sm:p-5 text-center border border-[#E8E5E0] hover:border-[#f84608]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              {/* Placeholder logo */}
              <div
                className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 rounded-lg flex items-center justify-center text-white font-bold text-[14px] ${
                  index % 3 === 0
                    ? 'bg-[#f84608]'
                    : index % 3 === 1
                    ? 'bg-[#321ca3]'
                    : 'bg-gradient-to-br from-[#f84608] to-[#321ca3]'
                }`}
              >
                {integration.name.charAt(0)}
              </div>
              <div className="text-[13px] sm:text-[14px] font-medium text-black group-hover:text-[#f84608] transition-colors">
                {integration.name}
              </div>
              <div className="text-[11px] text-[#999999] mt-1">
                {integration.category}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-8 sm:mt-10">
          <Link
            href="/aiviv3/integrations"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#f84608] hover:gap-3 transition-all duration-300"
          >
            Explore All Integrations
            <svg
              className="w-5 h-5 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
