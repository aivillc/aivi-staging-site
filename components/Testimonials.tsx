export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            See how AIVI transforms customer engagement across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TestimonialCard
            quote="AIVI successfully grew our lead remarketing campaigns. From 1 in 5 using email to almost 1 in 2 using their AI SMS. Increasing our conversion rate by 120%."
            author="Marketing Director"
            role="Lead Generation Manager"
            company="AIVI Client"
            industry="Lead Generation"
            color="purple"
          />
          <TestimonialCard
            quote="The document intelligence feature alone saved us 20 hours per week. OCR + LLM automatically processes invoices and updates our CRM."
            author="Michael Chen"
            role="Director of Finance"
            company="Capital Solutions Group"
            industry="Financial Services"
            color="orange"
          />
          <TestimonialCard
            quote="Their managed service team had us up and running in 48 hours. The ROI was immediate—we saw 35% increase in policy renewals."
            author="Jennifer Adams"
            role="Chief Marketing Officer"
            company="Shield Insurance Partners"
            industry="Insurance"
            color="purple"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard number="50%" label="Dead Leads Revived" color="purple" />
          <StatCard number="391%" label="Conversion Increase" color="orange" />
          <StatCard number="120%" label="Client ROI Boost" color="purple" />
          <StatCard number="13s" label="Response Time" color="orange" />
        </div>

        {/* Security & Compliance */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <ComplianceBadge text="SOC 2 Certified" />
            <ComplianceBadge text="HIPAA Compliant" />
            <ComplianceBadge text="GDPR Ready" />
            <ComplianceBadge text="PII In-Transit Only" />
            <ComplianceBadge text="End-to-End Encryption" />
            <ComplianceBadge text="Regular Security Audits" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  color: 'purple' | 'orange';
}

function TestimonialCard({ quote, author, role, company, industry, color }: TestimonialCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';
  const borderColor = color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30';
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500/70' : 'hover:border-orange-500/70';
  const badgeBg = color === 'purple' ? 'bg-purple-500/10' : 'bg-orange-500/10';
  const badgeBorder = color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30';
  const badgeText = color === 'purple' ? 'text-purple-400' : 'text-orange-400';

  return (
    <div className={`relative p-8 bg-white/5 backdrop-blur-sm border-2 ${borderColor} ${hoverBorder} rounded-2xl transition-all hover:shadow-2xl`}>
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient} rounded-l-2xl`} />
      <div className="pl-4">
        <div className={`${color === 'purple' ? 'text-purple-400' : 'text-orange-400'} text-5xl font-bold mb-4 leading-none`}>"</div>
        <p className="text-white/80 mb-6 leading-relaxed">{quote}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-12 h-12 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-black text-lg`}>
            {author.charAt(0)}
          </div>
          <div>
            <div className="text-white font-bold">{author}</div>
            <div className="text-sm text-white/60">{role}</div>
            <div className="text-sm text-white/40">{company}</div>
          </div>
        </div>
        <div className={`inline-block px-3 py-1 ${badgeBg} border ${badgeBorder} rounded-full text-xs ${badgeText} font-medium`}>
          {industry}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  color: 'purple' | 'orange';
}

function StatCard({ number, label, color }: StatCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className="text-center p-6 bg-white/5 border-2 border-white/10 rounded-xl hover:border-purple-500/50 transition-all">
      <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {number}
      </div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}

function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-2 border-green-500/30 rounded-lg hover:border-green-500/50 transition-all">
      <span className="text-green-400 text-lg font-black">✓</span>
      <span className="text-white/80 font-medium">{text}</span>
    </div>
  );
}
