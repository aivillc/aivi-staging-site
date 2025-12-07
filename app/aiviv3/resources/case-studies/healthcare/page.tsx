import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Case Study: Healthcare Network | AIVI',
  description: 'How we increased patient satisfaction by 30% for a healthcare network with 100% call coverage and 35% no-show reduction.',
};

const metrics = [
  { value: '100%', label: 'Calls answered' },
  { value: '30%', label: 'CSAT increase' },
  { value: '35%', label: 'No-show reduction' },
];

const challenges = [
  {
    title: 'Overwhelmed Call Center',
    description: 'High call volumes led to long wait times and frustrated patients, impacting satisfaction scores.',
  },
  {
    title: 'High No-Show Rates',
    description: 'Missed appointments cost millions annually and disrupted care schedules across the network.',
  },
  {
    title: 'After-Hours Coverage Gap',
    description: 'Patients with urgent scheduling needs after hours had no immediate assistance available.',
  },
  {
    title: 'Multilingual Needs',
    description: 'Diverse patient population required support in multiple languages, straining staff resources.',
  },
];

const solutions = [
  {
    title: '24/7 Patient Support',
    description: 'AIVI handles patient calls around the clock for scheduling, rescheduling, and general inquiries.',
  },
  {
    title: 'Automated Appointment Reminders',
    description: 'Proactive outreach confirms appointments and captures cancellations before they become no-shows.',
  },
  {
    title: 'Smart Scheduling',
    description: 'Patients can book, reschedule, or cancel appointments instantly without waiting on hold.',
  },
  {
    title: 'Multilingual Conversations',
    description: 'Natural conversations in over 100 languages ensure every patient receives care in their preferred language.',
  },
];

const results = [
  { metric: '100%', description: 'Patient calls answered' },
  { metric: '30%', description: 'Increase in patient satisfaction' },
  { metric: '35%', description: 'Reduction in no-show rates' },
  { metric: '100+', description: 'Languages supported' },
  { metric: '45%', description: 'Reduction in call wait times' },
  { metric: '24/7', description: 'Patient support coverage' },
];

export default function HealthcareCaseStudyPage() {
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
                    How We Increased Patient Satisfaction by 30% for a Healthcare Network
                  </h1>

                  <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#666666] mb-10">
                    A regional healthcare network transformed patient engagement with AIVI, delivering immediate support and dramatically reducing no-show rates.
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
                A regional healthcare network with 15 clinics and over 200 healthcare providers, serving a diverse population of 500,000+ patients annually. They needed a solution that could scale while maintaining HIPAA compliance.
              </p>
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#666666]">
                Their existing call center struggled with high volumes, leading to patient frustration and missed appointment opportunities.
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
              AIVI has transformed how we engage with patients. The reduction in no-shows alone has saved us millions, and our patient satisfaction scores have never been higher.
            </blockquote>
            <div className="text-white/80">
              <div className="font-semibold">Chief Operations Officer</div>
              <div className="text-[14px]">Regional Healthcare Network</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="w-full bg-white max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] lg:max-w-[1000px] mx-auto">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
              Ready to Transform Patient Engagement?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-[#666666] mb-8 max-w-[600px] mx-auto">
              Join leading healthcare organizations using AIVI to improve patient satisfaction and reduce no-shows.
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
