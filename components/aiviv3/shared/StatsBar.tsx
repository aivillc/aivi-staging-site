'use client';

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <section className="w-full bg-white px-3 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black">
            What to Expect from AIVI
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 text-center border border-[#E8E5E0] hover:border-[#f84608]/30 transition-colors duration-300"
            >
              <div
                className={`text-[36px] sm:text-[42px] md:text-[48px] font-bold mb-2 ${
                  index % 2 === 0 ? 'text-[#f84608]' : 'text-[#321ca3]'
                }`}
              >
                {stat.value}
              </div>
              <div className="text-[14px] sm:text-[15px] text-[#666666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
