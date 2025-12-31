export default function OurValues() {
  const values = [
    {
      icon: '🎯',
      title: 'Lead Monetization First',
      description: 'We don\'t build features. We build revenue recovery systems. Every feature must answer: "Does this help customers waste fewer leads?"',
    },
    {
      icon: '⚡',
      title: 'Speed Wins',
      description: 'In lead generation, first contact wins. We obsess over 3-second response times because every minute of delay costs customers $10K-50K monthly.',
    },
    {
      icon: '🧠',
      title: 'Intelligence Over Automation',
      description: 'AI should learn and optimize—not just automate. Our learning engine gets smarter with every conversation, continuously improving channel selection, timing, and routing.',
    },
    {
      icon: '🤝',
      title: 'Human + AI Hybrid',
      description: 'We don\'t replace sales teams. We make them 2X more productive by handling qualification so humans can focus on closing pre-approved deals.',
    },
  ];

  return (
    <section className="w-full py-12 sm:py-16 bg-white rounded-2xl sm:rounded-3xl font-manrope mt-6">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="text-center text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal text-[#1A1A1A] mb-4">
          Our <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">Values</span>
        </h2>
        <p className="text-center text-[17px] sm:text-[18px] md:text-[19px] text-[#666666] mb-12 max-w-[700px] mx-auto">
          The principles that guide everything we build
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white border-2 border-[#E8E5E0] rounded-2xl p-6 sm:p-8 hover:border-[#f84608]/30 hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="relative z-10">
                {/* Icon badge */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 rounded-xl mb-4 flex items-center justify-center border border-[#f84608]/20">
                  <span className="text-3xl sm:text-4xl">{value.icon}</span>
                </div>
                <h3 className="text-[19px] sm:text-[21px] md:text-[22px] font-semibold text-[#1A1A1A] mb-3">
                  {value.title}
                </h3>
                <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#666666] leading-[1.6]">
                  {value.description}
                </p>
              </div>

              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/5 to-[#321ca3]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
