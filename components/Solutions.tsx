export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              Implementation Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want full control or turnkey deployment, we've got you covered
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* SaaS Platform */}
          <div className="relative group">
            <div className="relative p-8 bg-white border-2 border-gray-200 hover:border-purple-500/50 rounded-3xl transition-all hover:shadow-2xl">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-purple-500 to-purple-700 rounded-l-3xl" />

              <div className="pl-4">
                <h3 className="text-3xl font-black text-black mb-2">SaaS Platform</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-purple-500 to-purple-700 mb-6" />

                <p className="text-lg text-gray-600 mb-8">
                  Self-service platform for teams who want full control and flexibility
                </p>

                <div className="space-y-4 mb-8">
                  <Feature text="Complete platform access" />
                  <Feature text="Drag-and-drop workflow builder" />
                  <Feature text="Pre-built templates & integrations" />
                  <Feature text="Real-time analytics dashboard" />
                  <Feature text="API access for custom builds" />
                  <Feature text="Community support + documentation" />
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-500 mb-3 font-medium">Best for:</div>
                  <div className="flex flex-wrap gap-2">
                    <Tag text="Technical teams" />
                    <Tag text="Iterative testing" />
                    <Tag text="Custom workflows" />
                  </div>
                </div>

                <button className="w-full py-4 px-6 bg-white border-2 border-purple-500 text-purple-600 font-bold rounded-lg transition-all hover:bg-purple-50 hover:shadow-lg">
                  Explore Platform
                </button>
              </div>
            </div>
          </div>

          {/* Managed Service */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-purple-600/10 rounded-3xl blur-xl" />
            <div className="relative p-8 bg-gradient-to-br from-orange-50 to-purple-50 border-2 border-orange-500 rounded-3xl transition-all shadow-2xl">
              <div className="absolute top-4 right-4 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-black rounded-full uppercase tracking-wider">
                Popular
              </div>

              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-orange-500 to-orange-700 rounded-l-3xl" />

              <div className="pl-4">
                <h3 className="text-3xl font-black text-black mb-2">Managed Service</h3>
                <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-orange-700 mb-6" />

                <p className="text-lg text-gray-700 mb-8">
                  Turnkey solution with white-glove implementation and ongoing optimization
                </p>

                <div className="space-y-4 mb-8">
                  <Feature text="Dedicated account manager" highlight />
                  <Feature text="Custom workflow design & setup" highlight />
                  <Feature text="Complete integration handling" highlight />
                  <Feature text="Ongoing optimization & A/B testing" highlight />
                  <Feature text="24/7 monitoring & support" highlight />
                  <Feature text="Human call center coaching" highlight />
                </div>

                <div className="mb-6">
                  <div className="text-sm text-gray-600 mb-3 font-medium">Best for:</div>
                  <div className="flex flex-wrap gap-2">
                    <Tag text="Enterprise teams" highlight />
                    <Tag text="Fast deployment" highlight />
                    <Tag text="Complex integrations" highlight />
                  </div>
                </div>

                <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-black text-black mb-8 text-center">
            Industry Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UseCaseCard
              industry="Trucking & Logistics"
              useCases={[
                'Invoice factoring automation',
                'Insurance renewal reminders',
                'Broker-to-driver communication',
                'Load confirmation & updates',
              ]}
              color="purple"
            />
            <UseCaseCard
              industry="Financial Services"
              useCases={[
                'Debt consolidation outreach',
                'Credit application processing',
                'Payment reminders',
                'Document verification',
              ]}
              color="orange"
            />
            <UseCaseCard
              industry="Insurance"
              useCases={[
                'Policy renewal campaigns',
                'Claims processing automation',
                'Lead qualification',
                'Customer onboarding',
              ]}
              color="purple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`font-black text-lg ${highlight ? 'text-orange-500' : 'text-purple-500'}`}>✓</span>
      <span className="text-gray-700 font-medium">{text}</span>
    </div>
  );
}

function Tag({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <span
      className={`px-4 py-2 text-xs font-bold rounded-full border-2 ${
        highlight
          ? 'bg-orange-100 text-orange-600 border-orange-300'
          : 'bg-purple-100 text-purple-600 border-purple-300'
      }`}
    >
      {text}
    </span>
  );
}

interface UseCaseCardProps {
  industry: string;
  useCases: string[];
  color: 'purple' | 'orange';
}

function UseCaseCard({ industry, useCases, color }: UseCaseCardProps) {
  const borderColor = color === 'purple' ? 'border-purple-300' : 'border-orange-300';
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500' : 'hover:border-orange-500';
  const bgGradient = color === 'purple' ? 'from-purple-50 to-white' : 'from-orange-50 to-white';
  const accentBar = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className={`relative p-6 bg-gradient-to-br ${bgGradient} border-2 ${borderColor} ${hoverBorder} rounded-xl transition-all hover:shadow-xl`}>
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${accentBar} rounded-l-xl`} />
      <h4 className="text-xl font-black text-black mb-4 pl-4">{industry}</h4>
      <ul className="space-y-2 pl-4">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className={`${color === 'purple' ? 'text-purple-500' : 'text-orange-500'} font-black mt-0.5`}>•</span>
            {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}
