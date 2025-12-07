'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface IndustryFAQProps {
  faqs: FAQItem[];
}

export default function IndustryFAQ({ faqs }: IndustryFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white px-3 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] max-w-[800px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-3">
            Questions?
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666]">
            Find answers to common questions about AIVI
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#FAFAFA] rounded-xl border border-[#E8E5E0] overflow-hidden transition-all duration-300 hover:border-[#f84608]/30"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus-brand-ring"
                aria-expanded={openIndex === index}
              >
                <span className="text-[15px] sm:text-[16px] font-medium text-black pr-4">
                  {faq.question}
                </span>
                <span
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white rotate-180'
                      : 'bg-[#E8E5E0] text-[#666666]'
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-[500px]' : 'max-h-0'
                }`}
              >
                <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                  <p className="text-[14px] sm:text-[15px] leading-[1.7] text-[#666666]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
