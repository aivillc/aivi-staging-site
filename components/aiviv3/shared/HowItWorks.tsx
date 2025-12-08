'use client';

import { FaCog, FaCode, FaRocket, FaChartBar } from 'react-icons/fa';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

const stepIcons = [FaCog, FaCode, FaRocket, FaChartBar];

export default function HowItWorks({ steps }: HowItWorksProps) {
  return (
    <section className="w-full bg-[#E8E5E0] px-[5%] sm:px-[7%] lg:px-[10%] py-12 sm:py-16" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto">
        {/* Section Header */}
        <h2 className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-12 text-center">
          How It Works
        </h2>

        {/* Steps Grid with Flow Line */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Flow line - desktop only */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px flow-line"></div>

          {steps.map((step, index) => {
            const Icon = stepIcons[index % stepIcons.length];
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Icon with gradient background */}
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF8C00]/20 to-[#8A2BE2]/20 flex items-center justify-center relative z-10">
                    <Icon
                      className="text-[36px]"
                      style={{ color: index % 2 === 0 ? '#FF8C00' : '#8A2BE2' }}
                    />
                  </div>

                  {/* Step Title */}
                  <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-2">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-[13px] text-[#666666]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
