'use client';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-12 sm:py-16">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12">
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-3">
            How It Works
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[600px] mx-auto">
            Get started in minutes with our simple 4-step process
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, visible on lg) */}
              {index < steps.length - 1 && (
                <div
                  className="hidden lg:block absolute top-8 left-[calc(50%+40px)] w-[calc(100%-80px)] h-[2px] bg-gradient-to-r from-[#f84608] to-[#321ca3]"
                  aria-hidden="true"
                />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step Number */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-[20px] font-bold mb-4 ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-[#f84608] to-[#f84608]/80'
                      : 'bg-gradient-to-br from-[#321ca3] to-[#321ca3]/80'
                  }`}
                >
                  {index + 1}
                </div>

                {/* Step Title */}
                <h3 className="text-[16px] sm:text-[18px] font-semibold text-black mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-[13px] sm:text-[14px] leading-[1.6] text-[#666666]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
