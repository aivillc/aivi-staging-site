'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Does AIVI.io provide a large and rich B2B contact and company database?',
    answer:
      'Yes, AIVI provides access to one of the most comprehensive B2B databases available, with millions of verified contacts and company records that are continuously updated to ensure accuracy.',
  },
  {
    question: 'Can AIVI.io enable highly precise lead targeting via advanced filtering?',
    answer:
      'Absolutely. Our platform offers advanced filtering capabilities that allow you to target leads based on dozens of criteria including company size, industry, location, revenue, and many other data points.',
  },
  {
    question: 'Does AIVI.io automate outreach sequences and follow-ups?',
    answer:
      'Yes, AIVI includes powerful automation features that let you create multi-channel outreach sequences across email, phone, and SMS with intelligent follow-up scheduling.',
  },
  {
    question: 'Does AIVI.io integrate smoothly with CRMs and existing sales tools?',
    answer:
      'AIVI integrates seamlessly with all major CRM platforms including Salesforce, HubSpot, and Pipedrive, as well as popular communication and productivity tools.',
  },
  {
    question: 'Does AIVI.io offer strong analytics and reporting on outreach performance?',
    answer:
      'Yes, our platform provides comprehensive analytics dashboards with real-time metrics on email performance, call outcomes, meeting bookings, and pipeline generation.',
  },
  {
    question: 'Is AIVI.io good value for its cost, especially for growing sales teams?',
    answer:
      'AIVI offers exceptional value by replacing multiple tools with one unified platform, reducing your tech stack costs by up to 64% while improving team productivity.',
  },
  {
    question: 'Does AIVI.io support users with helpful educational resources and onboarding?',
    answer:
      'We provide extensive onboarding support, comprehensive documentation, video tutorials, and a dedicated customer success team to ensure you get maximum value from the platform.',
  },
  {
    question: 'Can AIVI.io help reduce time spent on manual prospecting?',
    answer:
      'Yes, AIVI automates the most time-consuming parts of prospecting including lead research, data enrichment, and initial outreach, allowing your team to focus on high-value conversations.',
  },
  {
    question: 'Does AIVI.io improve the quality of sales pipelines?',
    answer:
      'AIVI helps you build higher-quality pipelines through better targeting, automated lead qualification, and AI-powered insights that identify the most promising opportunities.',
  },
  {
    question: 'Can AIVI.io scale with a business as sales needs grow?',
    answer:
      'Absolutely. AIVI is built to scale from small teams to enterprise organizations, with flexible pricing plans and infrastructure that grows with your business needs.',
  },
];

export default function AIVIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F0EDE8] px-12 py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-20">
          {/* Left Column - Title */}
          <div className="animate-[fadeInLeft_0.6s_ease-out]">
            <h2 className="text-[36px] leading-[1.3] font-normal text-[#000000]">
              Frequently asked questions
            </h2>
            <div className="mt-4 w-20 h-1 bg-[#E5FF00] rounded-full" />
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group border-b border-[#DDDDDD] py-6 hover:bg-white/50 transition-all duration-300 px-4 -mx-4 rounded-lg animate-[fadeInRight_0.5s_ease-out]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-6 text-left"
                >
                  <span className={`text-[17px] leading-[1.5] font-normal flex-1 transition-colors duration-300 ${
                    openIndex === index ? 'text-[#000000] font-medium' : 'text-[#333333] group-hover:text-[#000000]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-[#E5FF00] text-[#000000] rotate-90'
                      : 'bg-gray-100 text-[#666666] group-hover:bg-gray-200 group-hover:rotate-90'
                  }`}>
                    {openIndex === index ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[15px] leading-[1.6] text-[#666666] animate-[fadeIn_0.3s_ease-out]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
