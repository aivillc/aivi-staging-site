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
    <section className="w-full bg-[#E8E5E0] px-[5%] sm:px-[7%] lg:px-[10%] py-12 sm:py-16" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        {/* White Card Container - Use Cases Style */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-3">
              Seamless Integrations
            </h2>
            <p className="text-[15px] sm:text-[16px] text-[#666666]">
              Connect with your existing tools and workflows
            </p>
          </div>

          {/* Integration Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6 mb-8">
            {integrations.map((integration, index) => (
              <div
                key={integration.name}
                className="bg-[#F5F5F5] rounded-xl p-4 border border-[#E8E5E0] text-center hover:border-[#FF8C00]/30 transition-all duration-300"
              >
                {/* Placeholder logo */}
                <div
                  className={`w-10 h-10 mx-auto rounded-lg flex items-center justify-center text-white font-bold text-[14px] ${
                    index % 2 === 0
                      ? 'bg-[#FF8C00]'
                      : 'bg-[#8A2BE2]'
                  }`}
                >
                  {integration.name.charAt(0)}
                </div>
                <p className="text-[11px] text-[#666666] mt-2 truncate">{integration.name}</p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/aiviv3/integrations"
              className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              View All Integrations
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
