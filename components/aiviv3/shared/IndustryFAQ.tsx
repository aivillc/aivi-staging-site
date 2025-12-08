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
    <section className="w-full bg-[#E8E5E0] px-[5%] sm:px-[7%] lg:px-[10%] py-12 sm:py-16" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        {/* White Card Container - Use Cases Style */}
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-soft">
          {/* Section Header */}
          <h2 className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-8">
            Frequently Asked Questions
          </h2>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-[#E8E5E0] rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F5F5] transition-colors"
                  aria-expanded={openIndex === index}
                >
                  <span className="text-[16px] font-semibold text-[#1A1A1A]">
                    {faq.question}
                  </span>
                  <span
                    className="text-[24px] text-[#FF8C00] transition-transform duration-300 flex-shrink-0 ml-4"
                    style={{
                      transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                    }}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className={`p-5 text-[14px] text-[#666666] leading-[1.6] ${openIndex === index ? 'pt-2.5' : 'pt-0'}`}>
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
