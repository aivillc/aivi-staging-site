export default function PainPoints() {
  return (
    <section className="relative py-24 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Stop Losing Revenue to{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              Slow Follow-Ups
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every minute you wait, your conversion rate drops 10%.
            <br />
            Your competitors respond in seconds. Can you?
          </p>
        </div>

        {/* Pain Points Grid - SLEEK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <PainPointCard
            title="Leads Go Cold"
            stat="80% never contacted"
            solution="13-second response time"
            color="purple"
          />
          <PainPointCard
            title="Manual Follow-Ups"
            stat="20+ hours wasted weekly"
            solution="100% automated outreach"
            color="orange"
          />
          <PainPointCard
            title="Low Conversions"
            stat="$50K+ lost monthly"
            solution="391% conversion increase"
            color="purple"
          />
        </div>

        {/* Urgency CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl shadow-2xl">
          <p className="text-white text-2xl font-bold mb-2">
            Limited: 10 Spots This Month
          </p>
          <p className="text-white/90 text-lg">
            Current availability: <span className="font-black text-3xl">6 spots</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface PainPointCardProps {
  title: string;
  stat: string;
  solution: string;
  color: 'purple' | 'orange';
}

function PainPointCard({ title, stat, solution, color }: PainPointCardProps) {
  const borderColor = color === 'purple' ? 'border-purple-500' : 'border-orange-500';
  const gradientBg = color === 'purple'
    ? 'from-purple-50 to-white'
    : 'from-orange-50 to-white';

  return (
    <div className={`group relative p-8 bg-gradient-to-br ${gradientBg} border-2 ${borderColor} rounded-2xl hover:shadow-2xl transition-all duration-300`}>
      <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${color === 'purple' ? 'from-purple-500 to-purple-700' : 'from-orange-500 to-orange-700'} rounded-l-2xl`} />

      <h3 className="text-2xl font-black text-black mb-3 pl-4">{title}</h3>
      <p className="text-red-600 font-bold text-lg mb-4 pl-4">{stat}</p>

      <div className="h-px bg-gradient-to-r from-gray-300 to-transparent mb-4" />

      <div className="flex items-start gap-2 pl-4">
        <span className="text-green-600 font-black text-xl">✓</span>
        <p className="text-gray-700 font-medium">{solution}</p>
      </div>
    </div>
  );
}
