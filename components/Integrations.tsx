interface CRMCarouselCardProps {
  name: string;
  category: string;
}

function CRMCarouselCard({ name, category }: CRMCarouselCardProps) {
  return (
    <div className="flex-shrink-0 w-64 mx-4 group">
      <div className="p-6 rounded-xl border-2 border-white/10 bg-white/5 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 h-full">
        <div className="flex items-center justify-center h-16 mb-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500/20 to-orange-500/20 border-2 border-purple-500/30 flex items-center justify-center group-hover:border-purple-500 transition-all">
            <div className="text-4xl font-black text-purple-400 group-hover:text-purple-300 transition-colors">
              {name.charAt(0)}
            </div>
          </div>
        </div>
        <h4 className="text-white font-bold text-center mb-2 text-lg">{name}</h4>
        <p className="text-xs text-center text-white/50 uppercase tracking-wider">
          {category}
        </p>
      </div>
    </div>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Seamless{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. No complex setup required.
          </p>
        </div>

        {/* CRM Platforms Carousel */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            CRM Platforms
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Seamlessly integrate with your existing CRM or choose from our supported platforms
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track */}
            <div className="flex animate-scroll">
              <CRMCarouselCard name="Salesforce" category="Enterprise CRM" />
              <CRMCarouselCard name="HubSpot" category="Inbound CRM" />
              <CRMCarouselCard name="Microsoft Dynamics" category="Business CRM" />
              <CRMCarouselCard name="Zoho CRM" category="Cloud CRM" />
              <CRMCarouselCard name="Pipedrive" category="Sales CRM" />
              <CRMCarouselCard name="Monday.com" category="Work OS" />
              <CRMCarouselCard name="Freshsales" category="Sales CRM" />
              <CRMCarouselCard name="Copper" category="Google CRM" />
              <CRMCarouselCard name="ActiveCampaign" category="Marketing CRM" />
              <CRMCarouselCard name="SugarCRM" category="Customer CRM" />
              <CRMCarouselCard name="Insightly" category="Project CRM" />
              <CRMCarouselCard name="Nutshell" category="Growth CRM" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Salesforce" category="Enterprise CRM" />
              <CRMCarouselCard name="HubSpot" category="Inbound CRM" />
              <CRMCarouselCard name="Microsoft Dynamics" category="Business CRM" />
              <CRMCarouselCard name="Zoho CRM" category="Cloud CRM" />
              <CRMCarouselCard name="Pipedrive" category="Sales CRM" />
              <CRMCarouselCard name="Monday.com" category="Work OS" />
              <CRMCarouselCard name="Freshsales" category="Sales CRM" />
              <CRMCarouselCard name="Copper" category="Google CRM" />
              <CRMCarouselCard name="ActiveCampaign" category="Marketing CRM" />
              <CRMCarouselCard name="SugarCRM" category="Customer CRM" />
              <CRMCarouselCard name="Insightly" category="Project CRM" />
              <CRMCarouselCard name="Nutshell" category="Growth CRM" />
            </div>
          </div>
          
          {/* Custom API Integration CTA */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/5 border border-purple-500/30 rounded-full hover:border-purple-500/60 transition-all group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center text-white font-black text-lg">
                +
              </div>
              <div className="text-left">
                <div className="text-white font-bold text-sm">Custom CRM Integration</div>
                <div className="text-white/50 text-xs">Connect any system via API</div>
              </div>
            </div>
          </div>
        </div>

        {/* Communication Channels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Communication Channels
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Connect through multiple channels for comprehensive customer engagement
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track - Left to Right (reverse) */}
            <div className="flex animate-scroll-reverse">
              <CRMCarouselCard name="Twilio" category="Voice & SMS" />
              <CRMCarouselCard name="SendGrid" category="Email" />
              <CRMCarouselCard name="AWS SES" category="Cloud Email" />
              <CRMCarouselCard name="Mailgun" category="Email API" />
              <CRMCarouselCard name="Vonage" category="Communications" />
              <CRMCarouselCard name="Postmark" category="Transactional Email" />
              <CRMCarouselCard name="MessageBird" category="Omnichannel" />
              <CRMCarouselCard name="RingCentral" category="Business Phone" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Twilio" category="Voice & SMS" />
              <CRMCarouselCard name="SendGrid" category="Email" />
              <CRMCarouselCard name="AWS SES" category="Cloud Email" />
              <CRMCarouselCard name="Mailgun" category="Email API" />
              <CRMCarouselCard name="Vonage" category="Communications" />
              <CRMCarouselCard name="Postmark" category="Transactional Email" />
              <CRMCarouselCard name="MessageBird" category="Omnichannel" />
              <CRMCarouselCard name="RingCentral" category="Business Phone" />
            </div>
          </div>
        </div>

        {/* Financial & Data Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Financial & Data Services
          </h3>
          <p className="text-white/60 text-center mb-8 max-w-2xl mx-auto">
            Secure integrations with financial and data verification services
          </p>
          
          {/* Carousel Container */}
          <div className="relative overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
            
            {/* Scrolling Track - Right to Left */}
            <div className="flex animate-scroll">
              <CRMCarouselCard name="Plaid" category="Banking Data" />
              <CRMCarouselCard name="Stripe" category="Payments" />
              <CRMCarouselCard name="DocuSign" category="E-Signatures" />
              <CRMCarouselCard name="Equifax" category="Credit Bureau" />
              <CRMCarouselCard name="Experian" category="Credit Data" />
              <CRMCarouselCard name="TransUnion" category="Credit Reports" />
              <CRMCarouselCard name="HelloSign" category="Documents" />
              <CRMCarouselCard name="Yodlee" category="Financial Data" />
              
              {/* Duplicate set for seamless loop */}
              <CRMCarouselCard name="Plaid" category="Banking Data" />
              <CRMCarouselCard name="Stripe" category="Payments" />
              <CRMCarouselCard name="DocuSign" category="E-Signatures" />
              <CRMCarouselCard name="Equifax" category="Credit Bureau" />
              <CRMCarouselCard name="Experian" category="Credit Data" />
              <CRMCarouselCard name="TransUnion" category="Credit Reports" />
              <CRMCarouselCard name="HelloSign" category="Documents" />
              <CRMCarouselCard name="Yodlee" category="Financial Data" />
            </div>
          </div>
        </div>

        {/* Key Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Real-Time Sync</h4>
            <p className="text-white/60">
              Bi-directional data sync keeps your CRM and AIVI always in sync, triggering actions in real-time.
            </p>
          </div>

          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-orange-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Secure PII Handling</h4>
            <p className="text-white/60">
              All personally identifiable information is encrypted in transit with zero storage, ensuring compliance.
            </p>
          </div>

          <div className="group relative text-center p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-2xl" />
            <h4 className="text-xl font-black text-white mb-3">Custom Field Mapping</h4>
            <p className="text-white/60">
              Map any custom fields from your CRM to AIVI workflows with our flexible field mapping system.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-br from-white/5 to-white/10 border-2 border-purple-500/30 rounded-3xl hover:border-purple-500/50 transition-all">
          <h3 className="text-3xl font-black text-white mb-4">
            Don't See Your Integration?
          </h3>
          <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
            We build custom integrations for our managed service clients. Our API-first architecture can connect to virtually any system.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider">
            Request Custom Integration
          </button>
        </div>
      </div>
    </section>
  );
}

interface IntegrationCardProps {
  name: string;
  category: string;
  highlight?: boolean;
}

function IntegrationCard({ name, category, highlight = false }: IntegrationCardProps) {
  return (
    <div
      className={`group p-6 rounded-xl border-2 transition-all hover:scale-105 ${
        highlight
          ? 'bg-gradient-to-br from-orange-500/10 to-orange-600/10 border-orange-500/50 hover:border-orange-400'
          : 'bg-white/5 border-white/10 hover:border-purple-500/50'
      }`}
    >
      <div className="flex items-center justify-center h-12 mb-3">
        <div className={`text-3xl font-black ${highlight ? 'text-orange-500' : 'text-purple-500'}`}>
          {name.charAt(0)}
        </div>
      </div>
      <h4 className="text-white font-bold text-center mb-1">{name}</h4>
      <p className={`text-xs text-center ${highlight ? 'text-orange-400' : 'text-white/50'}`}>
        {category}
      </p>
    </div>
  );
}
