'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function AIVICTASectionV4() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <section
      className="w-full relative bg-[#FAFAFA] px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Premium Card Container */}
        <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 lg:p-20 shadow-[0_4px_60px_rgba(0,0,0,0.06)] border border-[#f0f0f0]/50 overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center">
            {/* Left Column - Text and Form */}
            <div className="space-y-8">
              {/* Style 3: Dual Line Embrace Eyebrow */}
              <div className="inline-flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  Get Started Today
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>

              {/* Headline */}
              <h2
                id="cta-heading"
                className="text-[36px] sm:text-[44px] md:text-[52px] leading-[1.08] font-light text-[#0a0a0a] tracking-[-0.03em]"
              >
                Stay Ahead of{' '}
                <span className="font-normal bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                  Call Screening
                </span>{' '}
                Changes
              </h2>

              {/* Description */}
              <p className="text-[17px] leading-[1.8] text-[#525252] max-w-[480px]">
                With iOS 26 adoption increasing, Apple&apos;s call screening prevents unknown numbers from reaching customers. Our AI agent adapts and reaches end customers dynamically.
              </p>

              {/* Email Form */}
              <form onSubmit={handleEmailSubmit} className="space-y-5 pt-2">
                <div className="relative">
                  <label htmlFor="cta-email" className="sr-only">Email address</label>
                  <input
                    id="cta-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder="Enter your email"
                    autoComplete="email"
                    className={`w-full h-[56px] bg-[#FAFAFA] border rounded-2xl px-6 text-[16px] text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none transition-all duration-300 ${
                      isFocused
                        ? 'border-[#0a0a0a] bg-white shadow-[0_0_0_4px_rgba(10,10,10,0.04)]'
                        : 'border-[#e5e5e5] hover:border-[#d4d4d4]'
                    }`}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full h-[56px] bg-[#0a0a0a] text-white text-[16px] font-medium rounded-2xl hover:bg-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Start Free Trial</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-4 py-2">
                  <div className="flex-1 h-[1px] bg-[#e5e5e5]" />
                  <span className="text-[13px] text-[#a3a3a3]">or continue with</span>
                  <div className="flex-1 h-[1px] bg-[#e5e5e5]" />
                </div>

                {/* Social Sign-Up Buttons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="h-[52px] bg-white border border-[#e5e5e5] rounded-xl flex items-center justify-center gap-3 text-[15px] font-medium text-[#374151] hover:border-[#d4d4d4] hover:bg-[#FAFAFA] transition-all duration-200"
                    aria-label="Sign up with Google"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    <span>Google</span>
                  </button>

                  <button
                    type="button"
                    className="h-[52px] bg-white border border-[#e5e5e5] rounded-xl flex items-center justify-center gap-3 text-[15px] font-medium text-[#374151] hover:border-[#d4d4d4] hover:bg-[#FAFAFA] transition-all duration-200"
                    aria-label="Sign up with Microsoft"
                  >
                    <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                      <path fill="#F25022" d="M1 1h10.5v10.5H1z" />
                      <path fill="#00A4EF" d="M12.5 1H23v10.5H12.5z" />
                      <path fill="#7FBA00" d="M1 12.5h10.5V23H1z" />
                      <path fill="#FFB900" d="M12.5 12.5H23V23H12.5z" />
                    </svg>
                    <span>Microsoft</span>
                  </button>
                </div>
              </form>

              {/* Terms */}
              <p className="text-[13px] leading-[1.6] text-[#a3a3a3]">
                By signing up, I agree to AIVI&apos;s{' '}
                <a href="/terms" className="text-[#525252] hover:text-[#0a0a0a] transition-colors">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-[#525252] hover:text-[#0a0a0a] transition-colors">
                  Privacy Policy
                </a>
                .
              </p>
            </div>

            {/* Right Column - Image */}
            <div className="relative">
              {/* Floating image effect */}
              <div className="relative group">
                {/* Shadow layer */}
                <div className="absolute -inset-4 bg-gradient-to-br from-[#f84608]/5 to-[#321ca3]/5 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Image container */}
                <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] group-hover:shadow-[0_30px_80px_rgba(0,0,0,0.15)] transition-all duration-500 group-hover:-translate-y-2">
                  <Image
                    src="/aiviwork.jpg"
                    alt="AIVI AI agent handling customer calls seamlessly"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    priority={false}
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 rounded-full blur-xl" />
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#321ca3]/10 to-[#f84608]/10 rounded-full blur-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
