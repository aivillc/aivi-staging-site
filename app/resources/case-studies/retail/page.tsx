import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Case Study: Retail Chain | AIVI',
  description: 'How we automated after-hours support for a 400+ store retailer, achieving 67% retention increase and 38% automation rate.',
};

const metrics = [
  { value: '67%', label: 'Retention increase' },
  { value: '38%', label: 'Call automation rate' },
  { value: '45%', label: 'Fewer abandoned carts' },
];

const challenges = [
  {
    title: 'After-Hours Support Gap',
    description: 'Customer calls outside business hours went to voicemail, resulting in lost sales and frustrated customers.',
  },
  {
    title: 'Inconsistent Store Experience',
    description: 'Each store handled inquiries differently, leading to inconsistent brand experience.',
  },
  {
    title: 'High Cart Abandonment',
    description: 'Customers with questions during checkout had no immediate way to get answers, leading to abandoned carts.',
  },
  {
    title: 'Overwhelmed Staff',
    description: 'Store associates spent excessive time on phone calls instead of helping in-store customers.',
  },
];

const solutions = [
  {
    title: '24/7 Customer Support',
    description: 'AIVI handles customer inquiries around the clock, ensuring no call goes unanswered.',
  },
  {
    title: 'Standardized Responses',
    description: 'Consistent, on-brand responses across all 400+ locations for product info, store hours, and policies.',
  },
  {
    title: 'Real-Time Checkout Assistance',
    description: 'Customers can get instant answers to questions during the buying process, reducing abandonment.',
  },
  {
    title: 'Smart Call Routing',
    description: 'Complex inquiries are seamlessly transferred to available staff, with full context provided.',
  },
];

const results = [
  { metric: '67%', description: 'Increase in customer retention' },
  { metric: '38%', description: 'Of calls fully automated' },
  { metric: '45%', description: 'Reduction in cart abandonment' },
  { metric: '400+', description: 'Stores covered 24/7' },
  { metric: '92%', description: 'Customer satisfaction score' },
  { metric: '60%', description: 'Reduction in staff phone time' },
];

export default function RetailCaseStudyPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0] font-manrope">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[88px] pb-12 sm:pb-16">
            <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
              <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16">
                <Link
                  href="/resources"
                  className="inline-flex items-center gap-2 text-[14px] text-[#666666] hover:text-[#f84608] transition-colors mb-8"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Resources
                </Link>

                <div className="text-center max-w-[800px] mx-auto">
                  <h1 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[60px] leading-[1.1] font-normal text-black mb-6">
                    How We Automated After-Hours Support for a 400+ Store Retailer
                  </h1>

                  <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#666666] mb-10">
                    A national retail chain transformed their customer experience by implementing AIVI across all locations, ensuring every customer gets immediate assistance.
                  </p>

                  {/* Key Metrics */}
                  <div className="grid grid-cols-3 gap-4 sm:gap-6 max-w-[600px] mx-auto">
                    {metrics.map((metric, i) => (
                      <div key={i} className="text-center">
                        <div className={`text-[32px] sm:text-[42px] md:text-[48px] font-bold ${i % 2 === 0 ? 'text-[#f84608]' : 'text-[#321ca3]'}`}>
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
                A leading national retail chain with over 400 stores across the country, specializing in home goods and lifestyle products. With millions of customer interactions annually, they needed a scalable solution for customer support.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#666666]">
                Their challenge was maintaining consistent, high-quality customer service across all locations while managing costs and freeing staff to focus on in-store experiences.
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
                  <p className="text-[16px] leading-[1.6] text-[#666666] font-medium">
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
                  <p className="text-[16px] leading-[1.6] text-[#666666] font-medium">
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
              AIVI gave us the ability to provide exceptional customer service around the clock without adding headcount. Our customers love the instant responses, and our staff can focus on what they do best.
            </blockquote>
            <div className="text-white/80">
              <div className="font-semibold">VP of Customer Experience</div>
              <div className="text-[14px]">National Retail Chain</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-white max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
              Ready to Transform Your Retail Experience?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] mb-8 max-w-[600px] mx-auto">
              Join leading retailers using AIVI to deliver exceptional customer experiences at scale.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/demo"
                className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                Start Free Trial
              </Link>
              <Link
                href="/resources"
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
