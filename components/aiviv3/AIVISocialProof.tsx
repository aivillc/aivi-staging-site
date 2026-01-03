'use client';

const companies = [
  { name: 'AUTODESK', style: 'font-bold tracking-wide' },
  { name: 'Dolby', style: 'font-bold' },
  { name: 'SMARTLING', style: 'font-bold tracking-wide' },
  { name: 'Realis', style: 'font-serif italic' },
  { name: 'ANTHROPIC', style: 'font-bold tracking-wider' },
  { name: 'kandji', style: 'font-bold' },
  { name: 'DocuSign', style: 'font-bold' },
];

const stats = [
  { label: '73% of successful transfers occur within 13 seconds of outreach', number: '73%', company: 'Meridian Financial' },
  { label: 'Doubled monthly loan closures with AI-powered follow-up', number: '2X', company: 'LoanPro' },
  { label: '300% more productive than traditional contact centers', number: '300%', company: 'TechVista' },
];

export default function AIVISocialProof() {
  return (
    <section
      className="w-full bg-[#E8E5E0] relative"
      aria-labelledby="social-proof-heading"
    >
      {/* Main Content Area */}
      <div className="px-6 sm:px-12 md:px-16 lg:px-24 pt-16 pb-32 sm:pb-40 md:pb-48">
        {/* Top Row: Label left, Company logos right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-16 sm:mb-20 md:mb-24">
          <p className="text-[11px] sm:text-[12px] font-medium tracking-[2px] text-[#666666] uppercase">
            Trusted by 500,000+ companies worldwide
          </p>

          {/* Company Logos */}
          <div
            className="flex items-center gap-6 sm:gap-8 md:gap-10 flex-wrap"
            role="list"
            aria-label="Featured companies"
          >
            {companies.map((company, index) => (
              <span
                key={index}
                role="listitem"
                className={`text-[14px] sm:text-[16px] text-[#1a1a1a] ${company.style}`}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial with Author */}
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-24 mb-20 sm:mb-28 md:mb-36">
          {/* Quote */}
          <figure>
            <blockquote
              id="social-proof-heading"
              className="text-[28px] sm:text-[38px] md:text-[48px] lg:text-[56px] leading-[1.15] font-normal text-[#000000] tracking-[-0.02em]"
            >
              &ldquo;Every rep is more productive with AIVI.<br />We booked 75% more meetings<br />while cutting manual work in half.&rdquo;
            </blockquote>

            {/* Author */}
            <figcaption className="flex flex-col justify-end lg:text-right mt-8 lg:mt-0">
              <div className="text-[11px] sm:text-[12px] font-medium tracking-[1.5px] text-[#666666] uppercase mb-1">
                Michael Reynolds
              </div>
              <div className="text-[11px] sm:text-[12px] font-medium tracking-[1.5px] aivi-gradient-text uppercase mb-4">
                Sales Director
              </div>
              <div className="text-[16px] sm:text-[18px] font-bold text-[#1a1a1a]">
                R1 Financial
              </div>
            </figcaption>
          </figure>
        </div>

        {/* Stats Cards - 3 column */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6"
          role="list"
          aria-label="Performance statistics"
        >
          {stats.map((stat, index) => (
            <article
              key={index}
              role="listitem"
              className="bg-white rounded-lg p-6 sm:p-8 min-h-[220px] sm:min-h-[260px] flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Top row: Label left, Company right */}
              <div className="flex items-start justify-between gap-4">
                <p className="text-[13px] sm:text-[14px] font-normal text-[#9a8a7c] leading-[1.5] max-w-[180px]">
                  {stat.label}
                </p>
                <span className="text-[14px] sm:text-[15px] font-bold text-[#1a1a1a] whitespace-nowrap flex-shrink-0">
                  {stat.company}
                </span>
              </div>

              {/* Bottom: Large number with gradient */}
              <div className="text-[70px] sm:text-[90px] lg:text-[110px] leading-[1] font-light aivi-gradient-text tracking-[-0.03em] mt-[15px]">
                {stat.number}
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Asymmetrical Diagonal Divider - Beige to White transition */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" aria-hidden="true">
        <svg
          className="w-full h-[120px] sm:h-[160px] md:h-[200px]"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* White fill for the diagonal shape */}
          <path
            d="M0 200L1440 200L1440 60L0 200Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
