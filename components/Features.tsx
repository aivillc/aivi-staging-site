export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Multi-Channel AI{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            Seamlessly engage customers across every channel with AI-powered automation
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
            color="purple"
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
            color="orange"
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
            color="purple"
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
            color="orange"
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
            color="purple"
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
            color="orange"
          />
        </div>

        {/* Additional Capabilities */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="group relative p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/50 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-2xl" />
            <h3 className="text-2xl font-black text-white mb-3 pl-4">
              Enterprise-Grade Security
            </h3>
            <p className="text-white/70 mb-6 pl-4">
              PII data in transit only. SOC 2 compliant infrastructure with end-to-end encryption.
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-center gap-2">
                <span className="text-purple-500 font-black text-xl">✓</span>
                <span className="text-white/80">HIPAA & SOC 2 compliant</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500 font-black text-xl">✓</span>
                <span className="text-white/80">End-to-end encryption</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500 font-black text-xl">✓</span>
                <span className="text-white/80">PII data in transit only</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-500 font-black text-xl">✓</span>
                <span className="text-white/80">Regular security audits</span>
              </li>
            </ul>
          </div>

          <div className="group relative p-8 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-orange-500/50 transition-all">
            <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-orange-700 rounded-l-2xl" />
            <h3 className="text-2xl font-black text-white mb-3 pl-4">
              Powered by xPulse Technology
            </h3>
            <p className="text-white/70 mb-6 pl-4">
              Proprietary AI decision engine built by experts from Amazon, Five9, and Cisco with 23+ years of experience.
            </p>
            <ul className="space-y-3 pl-4">
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-black text-xl">✓</span>
                <span className="text-white/80">Real-time decision making</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-black text-xl">✓</span>
                <span className="text-white/80">Continuous learning</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-black text-xl">✓</span>
                <span className="text-white/80">Optimized for conversions</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-orange-500 font-black text-xl">✓</span>
                <span className="text-white/80">Battle-tested at scale</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  features: string[];
  color: 'purple' | 'orange';
}

function FeatureCard({ title, description, features, color }: FeatureCardProps) {
  const borderColor = color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30';
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500/70' : 'hover:border-orange-500/70';
  const checkColor = color === 'purple' ? 'text-purple-500' : 'text-orange-500';
  const gradientBar = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className={`group relative p-8 bg-white/5 backdrop-blur-sm border-2 ${borderColor} ${hoverBorder} rounded-2xl transition-all hover:shadow-2xl`}>
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradientBar} rounded-l-2xl`} />
      <h3 className="text-2xl font-black text-white mb-3 pl-4">{title}</h3>
      <p className="text-white/60 mb-6 leading-relaxed pl-4">{description}</p>
      <ul className="space-y-2 pl-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-white/70">
            <span className={`${checkColor} font-black`}>✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
