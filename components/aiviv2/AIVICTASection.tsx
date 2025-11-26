'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AIVICTASection() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // TODO: Send email to backend API
      setEmail('');
    }
  };

  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-6">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Column - Text and Form */}
          <div className="space-y-6 sm:space-y-8">
            <h2 className="text-[32px] sm:text-[42px] md:text-[52px] lg:text-[58px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em]">
              Why buy five tools when AIVI does it better?
            </h2>

            <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[500px] mb-8 sm:mb-12">
              AIVI replaces your data provider, outreach platform, dialer, enrichment, and CRM—saving teams thousands each year.
            </p>

            {/* Email Form */}
            <form onSubmit={handleEmailSubmit} className="space-y-4 mt-8 sm:mt-12">
              <div className="relative group">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter email"
                  className={`w-full h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none transition-all duration-300 ${
                    isFocused ? 'border-[#000000] shadow-lg' : 'border-[#CCCCCC]'
                  }`}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full h-12 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] hover:shadow-xl transition-all duration-300"
              >
                Get started for free
              </button>

              <div className="text-center text-[14px] text-[#666666]">or</div>

              {/* Social Sign-Up Buttons */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="group h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                </button>

                <button
                  type="button"
                  className="group h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
                >
                  <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
                    <path fill="#F25022" d="M0 0h11.5v11.5H0z" />
                    <path fill="#00A4EF" d="M12.5 0H24v11.5H12.5z" />
                    <path fill="#7FBA00" d="M0 12.5h11.5V24H0z" />
                    <path fill="#FFB900" d="M12.5 12.5H24V24H12.5z" />
                  </svg>
                </button>
              </div>
            </form>

            <p className="text-[12px] leading-[1.4] text-[#999999]">
              By signing up, I agree to Aivi&apos;s{' '}
              <a href="#" className="underline hover:text-[#000000] transition-colors">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="underline hover:text-[#000000] transition-colors">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-shadow duration-500">
              <Image
                src="/aiviwork.jpg"
                alt="AIVI at work"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
