'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'How does AIVI charge?',
    answer:
      'We keep costs simple, charging on a per lead basis that AIVI processes - see more on pricing here.',
  },
  {
    question: 'Is AIVI customizable?',
    answer:
      'Yes every element of AIVI\'s outreach is customizable and personalized to your business.',
  },
  {
    question: 'What channels do you manage?',
    answer:
      'We\'re omni-channel to get the best results including but not limited to voice, SMS and email',
  },
  {
    question: 'Do we need to provide the sequences and content?',
    answer:
      'You can but our highly experienced team and AI data can guide you through the best options. Our managed packages will take care of all of this for you.',
  },
  {
    question: 'What results can we expect?',
    answer:
      'Completely dependent on your data and so if we\'re provided with strong data you\'ll see higher contact rates and close rates to your human team.',
  },
  {
    question: 'Does AIVI offer a trial?',
    answer:
      'Yes we offer a limited free trial for 100 leads or a paid 500 lead trial.',
  },
  {
    question: 'I\'ve tried AI voice and it didn\'t work - what\'s the difference?',
    answer:
      'The team have 20 years experience in building AI, telecomms, contact center and lead gen tools for fortune 100 companies so we all come with immense experience to help businesses solve problems.',
  },
  {
    question: 'Is there a minimum lead volume?',
    answer:
      'For the managed service yes there is but we\'re currently working on a self serve model that will have no limits.',
  },
];

export default function AIVIFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F0EDE8] px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 sm:gap-12 md:gap-20">
          {/* Left Column - Title */}
          <div className="animate-[fadeInLeft_0.6s_ease-out]">
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] leading-[1.3] font-normal text-[#000000]">
              Frequently asked questions
            </h2>
            <div className="mt-3 sm:mt-4 w-16 sm:w-20 h-1 bg-[#f84608] rounded-full" />
          </div>

          {/* Right Column - Accordion */}
          <div className="flex flex-col gap-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group border-b border-[#DDDDDD] py-4 sm:py-6 hover:bg-white/50 transition-all duration-300 px-2 sm:px-4 -mx-2 sm:-mx-4 rounded-lg animate-[fadeInRight_0.5s_ease-out]"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center gap-3 sm:gap-6 text-left"
                >
                  <span className={`text-[15px] sm:text-[17px] leading-[1.5] font-normal flex-1 transition-colors duration-300 ${
                    openIndex === index ? 'text-[#000000] font-medium' : 'text-[#333333] group-hover:text-[#000000]'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-[#f84608] text-white rotate-90'
                      : 'bg-gray-100 text-[#666666] group-hover:bg-gray-200 group-hover:rotate-90'
                  }`}>
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
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 mt-3 sm:mt-4 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-[14px] sm:text-[15px] leading-[1.6] text-[#666666] animate-[fadeIn_0.3s_ease-out]">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
