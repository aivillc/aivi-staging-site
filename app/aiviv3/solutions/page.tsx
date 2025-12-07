import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Solutions | AIVI - AI Voice Agents for Every Industry',
  description: 'Discover how AIVI AI voice agents transform lead engagement across retail, real estate, hospitality, healthcare, financial services, and legal industries.',
};

const industries = [
  {
    title: 'Retail & E-Commerce',
    description: 'Automate sales, support, and order inquiries with intelligent voice agents that never miss a lead.',
    href: '/aiviv3/solutions/retail',
    icon: 'retail',
    stats: ['25-35% less cart abandonment', '18-point CSAT increase'],
  },
  {
    title: 'Real Estate',
    description: 'Convert inquiries into site visits and prospects into buyers with 24/7 voice automation.',
    href: '/aiviv3/solutions/real-estate',
    icon: 'realestate',
    stats: ['25-40% more tour bookings', '95% cost reduction'],
  },
  {
    title: 'Hospitality',
    description: 'Welcome guests, manage bookings, and deliver always-on concierge service.',
    href: '/aiviv3/solutions/hospitality',
    icon: 'hospitality',
    stats: ['85-97% calls handled day-1', '80%+ resolution rate'],
  },
  {
    title: 'Healthcare',
    description: 'Keep patients cared for with HIPAA-ready voice AI that reduces no-shows and improves satisfaction.',
    href: '/aiviv3/solutions/healthcare',
    icon: 'healthcare',
    stats: ['35-50% no-show reduction', '80%+ calls resolved'],
  },
  {
    title: 'Financial Services',
    description: 'Make banking faster, safer, and always available with compliant voice automation.',
    href: '/aiviv3/solutions/financial-services',
    icon: 'finance',
    stats: ['35% faster KYC', '95% cost reduction'],
  },
  {
    title: 'Legal',
    description: 'Make client intake faster and always available with intelligent voice automation.',
    href: '/aiviv3/solutions/legal',
    icon: 'legal',
    stats: ['2.5-3.5x more consultations', '100% calls answered'],
  },
];

const iconMap: Record<string, React.JSX.Element> = {
  retail: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  realestate: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  ),
  hospitality: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  healthcare: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  finance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  legal: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
    </svg>
  ),
};

export default function SolutionsPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[72px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/5 via-transparent to-[#321ca3]/5 animate-gradient-shift"></div>

            <div className="w-full px-3 sm:px-6 py-16 sm:py-20 md:py-24 relative z-10">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] font-normal text-black mb-4 sm:mb-6 animate-fade-in-up">
                AI Voice Solutions for{' '}
                <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent animate-gradient-x">
                  Every Industry
                </span>
              </h1>
              <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto mb-8">
                From retail to legal, AIVI's intelligent voice agents transform how businesses engage leads and serve customers across every touchpoint.
              </p>
            </div>
          </div>
        </section>

        {/* Industries Grid */}
        <section className="w-full px-3 sm:px-6 pb-16 sm:pb-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {industries.map((industry, index) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5E0] hover:border-[#f84608]/30 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 relative overflow-hidden animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/0 to-[#321ca3]/0 group-hover:from-[#f84608]/5 group-hover:to-[#321ca3]/5 transition-all duration-500"></div>
                  <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${
                      index % 2 === 0
                        ? 'bg-[#f84608]/10 text-[#f84608] group-hover:bg-[#f84608]/20'
                        : 'bg-[#321ca3]/10 text-[#321ca3] group-hover:bg-[#321ca3]/20'
                    }`}
                  >
                    {iconMap[industry.icon]}
                  </div>

                  {/* Title */}
                  <h2 className="text-[20px] sm:text-[22px] font-semibold text-black mb-3 group-hover:text-[#f84608] transition-colors duration-300">
                    {industry.title}
                  </h2>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#666666] mb-5">
                    {industry.description}
                  </p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {industry.stats.map((stat, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 rounded-full text-[12px] font-medium ${
                          i % 2 === 0
                            ? 'bg-[#f84608]/10 text-[#f84608]'
                            : 'bg-[#321ca3]/10 text-[#321ca3]'
                        }`}
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center gap-2 text-[14px] font-semibold text-[#f84608] group-hover:gap-3 transition-all">
                    Learn More
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-[#f84608] to-[#321ca3] px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-white mb-4">
              Don't See Your Industry?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-8 max-w-[600px] mx-auto">
              AIVI adapts to any business. Let's discuss how voice AI can transform your specific use case.
            </p>
            <Link
              href="/aiviv3/demo"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#f84608] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Book a Demo
              </Link>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
