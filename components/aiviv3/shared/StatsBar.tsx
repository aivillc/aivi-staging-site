'use client';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  sectionTitle?: string;
}

export default function StatsBar({ stats, sectionTitle = 'The Results' }: StatsBarProps) {
  return (
    <section className="w-full bg-[#E8E5E0] px-[5%] sm:px-[7%] lg:px-[10%] py-12 sm:py-16" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        {/* Results Section with Gradient Background - Use Cases Style */}
        <div className="bg-gradient-to-br from-[#FF8C00] to-[#8A2BE2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
          <h2 className="text-[24px] sm:text-[32px] font-normal text-white mb-8 text-center">
            {sectionTitle}
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center"
              >
                <div className="text-[28px] sm:text-[36px] font-bold mb-2 text-white">
                  {stat.value}
                </div>
                <p className="text-[13px] text-white/90">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
