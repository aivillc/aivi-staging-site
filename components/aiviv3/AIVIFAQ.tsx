'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does AIVI charge?',
    answer:
      'We keep pricing simple with a per-lead basis for every lead AIVI processes. This transparent model means you only pay for actual results. Visit our pricing page for detailed information.',
  },
  {
    question: 'Is AIVI customizable?',
    answer:
      'Yes, every element of AIVI\'s outreach is fully customizable and personalized to your business. From voice tone to messaging cadence, you have complete control over how AIVI represents your brand.',
  },
  {
    question: 'What channels does AIVI support?',
    answer:
      'AIVI is omnichannel, delivering the best results through voice, SMS, and email. We continuously expand our channel support to ensure maximum reach and engagement.',
  },
  {
    question: 'Do we need to provide sequences and content?',
    answer:
      'You can provide your own content, but our experienced team and AI-driven data can guide you to the best options. Our managed packages handle all content creation and optimization for you.',
  },
  {
    question: 'What results can we expect?',
    answer:
      'Results depend on your data quality. With strong data, you\'ll see higher contact rates and improved close rates compared to traditional methods. Our clients typically see 2-3x improvement in lead conversion.',
  },
  {
    question: 'Does AIVI offer a trial?',
    answer:
      'Yes! We offer a free trial for 100 leads, or a paid trial covering 500 leads with full feature access. This lets you evaluate AIVI\'s performance with your actual data.',
  },
  {
    question: 'What makes AIVI different from other AI voice solutions?',
    answer:
      'Our team brings 20+ years of experience building AI, telecom, contact center, and lead generation tools for Fortune 100 companies. This deep expertise ensures we solve real business problems effectively.',
  },
  {
    question: 'Is there a minimum lead volume?',
    answer:
      'Our managed service has a minimum volume requirement. We\'re also developing a self-serve model with no limits for businesses of all sizes.',
  },
];

export default function AIVIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="w-full bg-[#F0EDE8] px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-[100px]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 md:gap-20">
          {/* Left Column - Title */}
          <div className="animate-[fadeInLeft_0.6s_ease-out]">
            <h2
              id="faq-heading"
              className="text-[28px] sm:text-[32px] md:text-[36px] leading-[1.3] font-normal text-[#000000]"
            >
              Questions? We&apos;ve Got Answers
            </h2>
            <div className="mt-3 sm:mt-4 w-16 sm:w-20 h-1 bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full" aria-hidden="true" />
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-0" role="region" aria-label="Frequently Asked Questions">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group border-b border-[#DDDDDD] py-4 sm:py-6 hover:bg-white/50 transition-all duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg animate-[fadeInRight_0.5s_ease-out]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-3 sm:gap-6 text-left focus-brand-ring"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                >
                  <span className={`text-[15px] sm:text-[17px] leading-[1.5] font-normal flex-1 transition-colors duration-300 ${
                    openIndex === index ? 'text-[#000000] font-medium' : 'text-[#333333] group-hover:text-[#000000]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-br from-[#f84608] to-[#321ca3] text-white rotate-0'
                      : 'bg-gray-100 text-[#666666] group-hover:bg-gray-200'
                  }`} aria-hidden="true">
                    {openIndex === index ? (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                </button>
                <div
                  id={`faq-answer-${index}`}
                  role="region"
                  aria-labelledby={`faq-question-${index}`}
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                  hidden={openIndex !== index}
                >
                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#666666] animate-[fadeIn_0.3s_ease-out]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
