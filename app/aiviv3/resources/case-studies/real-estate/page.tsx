import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Case Study: Real Estate Developer | AIVI',
  description: 'How we automated 24/7 lead calls for a national developer, achieving 50% sales automation and 55% more site visits.',
};

const metrics = [
  { value: '50%', label: 'Sales automated' },
  { value: '55%', label: 'More site visits' },
  { value: '100%', label: 'After-hours captured' },
];

const challenges = [
  {
    title: 'Lost After-Hours Leads',
    description: 'Property inquiries outside business hours went unanswered, with leads often purchasing from competitors.',
  },
  {
    title: 'Inconsistent Follow-Up',
    description: 'Sales agents had varying follow-up practices, leading to missed opportunities and inconsistent buyer experiences.',
  },
  {
    title: 'High Cost Per Lead',
    description: 'Marketing investments generated leads, but manual processes meant many never converted to site visits.',
  },
  {
    title: 'Scaling Challenges',
    description: 'New developments required additional sales staff, limiting expansion speed and increasing costs.',
  },
];

const solutions = [
  {
    title: '24/7 Lead Engagement',
    description: 'AIVI captures and qualifies leads instantly, regardless of when they inquire about properties.',
  },
  {
    title: 'Automated Tour Scheduling',
    description: 'Qualified prospects are immediately offered available tour times and booked into the sales calendar.',
  },
  {
    title: 'Consistent Qualification',
    description: 'Every lead receives the same professional qualification process, ensuring no opportunity is missed.',
  },
  {
    title: 'Scalable Outreach',
    description: 'Launch new developments with instant lead handling capacity, no additional hiring required.',
  },
];

const results = [
  { metric: '50%', description: 'Of sales calls fully automated' },
  { metric: '55%', description: 'Increase in site visits' },
  { metric: '100%', description: 'After-hours leads captured' },
  { metric: '3x', description: 'Faster lead response time' },
  { metric: '40%', description: 'Reduction in cost per lead' },
  { metric: '24/7', description: 'Lead engagement coverage' },
];

export default function RealEstateCaseStudyPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[88px] pb-12 sm:pb-16">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16">
                <Link
                  href="/aiviv3/resources"
                  className="inline-flex items-center gap-2 text-[14px] text-[#666666] hover:text-[#f84608] transition-colors mb-8"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Resources
                </Link>

                <div className="text-center max-w-[800px] mx-auto">
                  <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.1] font-normal text-black mb-6">
                    How We Automated 24/7 Lead Calls for a National Developer
                  </h1>

                  <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#666666] mb-10">
                    A national real estate developer transformed their lead conversion process with AIVI, ensuring every inquiry becomes a qualified opportunity.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-[600px] mx-auto">
                    {metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-[28px] sm:text-[36px] md:text-[42px] font-light ${i % 2 === 0 ? 'text-[#f84608]' : 'text-[#321ca3]'}`}>
                          {metric.value}
                        </div>
                        <div className="text-[13px] sm:text-[14px] text-[#666666]">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* Company Background */}
        <section className="w-full bg-[#E8E5E0] max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <div className="max-w-[800px]">
              <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black mb-6">
                About the Client
              </h2>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#666666] mb-4">
                A national real estate developer with 20+ active developments across major metropolitan areas, specializing in residential communities and mixed-use properties. They generate thousands of leads monthly through digital marketing and needed a way to convert more into site visits.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#666666]">
                Their traditional sales process relied on on-site agents who could only handle calls during business hours, missing valuable opportunities from evening and weekend inquiries.
              </p>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black mb-10 text-center">
              The Challenges
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E5E0]"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f84608]/10 flex items-center justify-center mb-4">
                    <span className="text-[#f84608] font-semibold">{i + 1}</span>
                  </div>
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-black mb-2">
                    {challenge.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#666666]">
                    {challenge.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="w-full bg-[#E8E5E0] max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black mb-10 text-center">
              The AIVI Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {solutions.map((solution, i) => (
                <div
                  key={i}
                  className="relative pl-6 border-l-2 border-[#f84608]"
                >
                  <h3 className="text-[18px] sm:text-[20px] font-semibold text-black mb-2">
                    {solution.title}
                  </h3>
                  <p className="text-[15px] leading-[1.6] text-[#666666]">
                    {solution.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
            <h2 className="text-[24px] sm:text-[28px] md:text-[32px] font-normal text-black mb-10 text-center">
              The Results
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((result, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center border border-[#E8E5E0]"
                >
                  <div className={`text-[32px] sm:text-[40px] font-light mb-2 ${i % 2 === 0 ? 'text-[#f84608]' : 'text-[#321ca3]'}`}>
                    {result.metric}
                  </div>
                  <p className="text-[15px] text-[#666666]">
                    {result.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="w-full bg-gradient-to-br from-[#f84608] to-[#321ca3] max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[800px] mx-auto text-center">
            <svg className="w-12 h-12 text-white/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-[20px] sm:text-[24px] md:text-[28px] leading-[1.4] font-light text-white mb-6">
              AIVI has revolutionized how we handle leads. We are capturing opportunities we used to miss entirely, and our cost per acquisition has dropped dramatically.
            </blockquote>
            <div className="text-white/80">
              <div className="font-semibold">VP of Sales</div>
              <div className="text-[14px]">National Real Estate Developer</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-white max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
              Ready to Transform Your Real Estate Sales?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] mb-8 max-w-[600px] mx-auto">
              Join leading developers using AIVI to convert more leads into site visits and sales.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/aiviv3/demo"
                className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/aiviv3/resources"
                className="inline-flex items-center justify-center h-12 px-8 border-2 border-[#E8E5E0] text-black text-[15px] font-semibold rounded-md hover:border-[#f84608] hover:text-[#f84608] transition-all duration-300"
              >
                  View More Case Studies
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
