'use client';

import { useState } from 'react';

export default function AIVIHero() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
  };

  return (
    <section className="w-full bg-[#E8E5E0] px-6 pt-6 pb-6 min-h-[calc(100vh-72px)] flex flex-col items-start justify-start">
      <div className="w-full max-w-[calc(100%-48px)] mx-auto text-center bg-white rounded-3xl shadow-lg p-12 lg:p-16 animate-[fadeInUp_0.6s_ease-out]">
        {/* Main Headline */}
        <h1 className="text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-6 animate-[fadeInUp_0.8s_ease-out]">
          The AI sales platform for{' '}
          <span className="relative inline-block">
            smarter
            <span className="absolute bottom-0 left-0 w-full h-2 bg-[#E5FF00]/30 -z-10" />
          </span>
          ,
          <br />
          faster revenue growth
        </h1>

        {/* Subheadline */}
        <p className="text-[17px] leading-[1.6] font-normal text-[#333333] mb-8 max-w-[640px] mx-auto animate-[fadeInUp_1s_ease-out]">
          Build pipeline smarter, close deals faster, and simplify your tech stack with a unified platform built for modern sales and marketing teams.
        </p>

        {/* Email Signup Form */}
        <form onSubmit={handleSubmit} className="flex gap-3 justify-center mb-4 flex-wrap animate-[fadeInUp_1.2s_ease-out]">
          <div className="relative group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Enter email"
              className={`w-[320px] h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none transition-all duration-300 ${
                isFocused ? 'border-[#000000] shadow-lg' : 'border-[#CCCCCC]'
              }`}
              required
            />
            <div className={`absolute inset-0 bg-[#E5FF00]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
              isFocused ? 'opacity-100' : 'opacity-0'
            }`} />
          </div>
          <button
            type="submit"
            className="group relative h-12 px-7 bg-[#E5FF00] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#D4EE00] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap overflow-hidden"
          >
            <span className="relative z-10">Sign up for free</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </button>
        </form>

        {/* Divider */}
        <div className="text-[14px] text-[#666666] my-4">or</div>

        {/* Social Sign-Up Buttons */}
        <div className="flex gap-3 justify-center mb-6 flex-wrap">
          <button className="group w-[224px] h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
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
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">Sign up with Google</span>
          </button>

          <button className="group w-[224px] h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
            <svg className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
              <path fill="#F25022" d="M0 0h11.5v11.5H0z" />
              <path fill="#00A4EF" d="M12.5 0H24v11.5H12.5z" />
              <path fill="#7FBA00" d="M0 12.5h11.5V24H0z" />
              <path fill="#FFB900" d="M12.5 12.5H24V24H12.5z" />
            </svg>
            <span className="group-hover:translate-x-0.5 transition-transform duration-300">Sign up with Microsoft</span>
          </button>
        </div>

        {/* Legal Text */}
        <p className="text-[12px] leading-[1.4] text-[#999999] mt-2 mb-16">
          By signing up, I agree to AIVI&apos;s{' '}
          <a href="#" className="underline hover:text-[#000000] transition-colors">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="underline hover:text-[#000000] transition-colors">
            Privacy Policy
          </a>
          .
        </p>

        {/* Hero Visual Section */}
        <div className="w-full mx-auto relative group">
          <div className="w-full rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-shadow duration-500">
            <div className="relative aspect-video bg-white">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/Aivi2.mp4" type="video/mp4" />
              </video>

              {/* Cookie Consent Banner (Overlaid) */}
              <div className="absolute bottom-6 left-6 bg-white rounded-xl p-6 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-[480px] transition-all duration-300 animate-[fadeInLeft_1.5s_ease-out]">
                <p className="text-[13px] leading-[1.5] text-[#333333] mb-4">
                  We use cookies to enhance your browsing experience and analyze our traffic. By clicking
                  &quot;Accept all&quot;, you consent to our use of cookies.
                </p>
                <div className="flex gap-2 mb-3">
                  <button className="px-4 py-2 bg-transparent border border-[#DDDDDD] text-[13px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] hover:scale-105 transition-all duration-200">
                    More choices
                  </button>
                  <button className="px-4 py-2 bg-transparent border border-[#DDDDDD] text-[13px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] hover:scale-105 transition-all duration-200">
                    Reject all
                  </button>
                  <button className="px-4 py-2 bg-[#000000] text-white text-[13px] rounded-md hover:bg-[#222222] hover:scale-105 transition-all duration-200">
                    Accept all
                  </button>
                </div>
                <a href="#" className="text-[13px] text-[#666666] underline hover:text-[#000000] flex items-center gap-1 w-fit hover:translate-x-1 transition-transform duration-200">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                  </svg>
                  See our privacy policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
