'use client';

import { useState, useRef, useEffect } from 'react';
import { useDemoPopup } from '../aiviv3/DemoPopupContext';

export default function AIVICTASectionV4() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { openDemoPopup } = useDemoPopup();

  // Intersection Observer for auto-play on scroll
  // Try unmuted first (works after user interaction), fall back to muted
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Try unmuted autoplay first (works if user has interacted with page)
            video.muted = false;
            setIsMuted(false);
            video.play().catch(() => {
              // If unmuted play fails, fall back to muted (browser requirement)
              video.muted = true;
              setIsMuted(true);
              video.play().catch(() => {});
            });
          } else {
            // Section is not visible - pause video
            video.pause();
          }
        });
      },
      {
        threshold: 0.4, // Trigger when 40% of section is visible
        rootMargin: '0px',
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleMuteToggle = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering video click
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      openDemoPopup();
      setEmail('');
    }
  };

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnded = () => {
    // Loop only when muted
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      setIsPlaying(false);
    }
  };

  const blockedItems = [
    'Unknown Numbers',
    'Spam-Flagged Callers',
    'Robocalls',
    'Unverified Business IDs',
  ];

  const getsThroughItems = [
    'Verified Business Caller ID',
    'Trusted Brand Registry Calls',
    'Authenticated Outreach',
    'AIVI-Powered Smart Calls',
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full relative bg-[#FAFAFA] px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32"
      aria-labelledby="cta-heading"
    >
      <div className="max-w-[1300px] mx-auto">
        {/* Premium Card Container */}
        <div className="relative bg-white rounded-[24px] sm:rounded-[32px] p-6 sm:p-10 md:p-14 lg:p-16 shadow-[0_4px_60px_rgba(0,0,0,0.06)] border border-[#f0f0f0]/50 overflow-hidden">
          {/* Subtle gradient accent */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#f84608] via-[#a855f7] to-[#321ca3]" />

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* Left Column - Content */}
            <div className="space-y-8">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-4">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  The Great Disconnect
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>

              {/* Headline */}
              <h2
                id="cta-heading"
                className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.1] font-light text-[#0a0a0a] tracking-[-0.03em]"
              >
                Your Calls Are Being{' '}
                <span className="font-normal bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                  Screened Out
                </span>
              </h2>

              {/* Subheadline */}
              <p className="text-[16px] sm:text-[17px] leading-[1.7] text-[#525252]">
                Apple&apos;s iOS 26 Call Screening and Google&apos;s Call Screen now block unknown and unverified callers by default.
                If your outbound calls aren&apos;t authenticated, they&apos;re not getting through.
              </p>

              {/* Two Column Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* What's Blocked Column */}
                <div className="relative bg-[#fafafa] rounded-xl p-5 border border-[#f0f0f0]">
                  {/* Red accent line */}
                  <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#dc2626] to-[#ef4444] rounded-full" />

                  <div className="pt-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#fef2f2] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0a0a0a]">
                        What&apos;s Blocked
                      </h3>
                    </div>

                    <ul className="space-y-2.5">
                      {blockedItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#fef2f2] flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#dc2626]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          </div>
                          <span className="text-[13px] sm:text-[14px] text-[#525252]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* What Gets Through Column */}
                <div className="relative bg-[#fafafa] rounded-xl p-5 border border-[#f0f0f0]">
                  {/* Green accent line */}
                  <div className="absolute top-0 left-5 right-5 h-[2px] bg-gradient-to-r from-[#16a34a] to-[#22c55e] rounded-full" />

                  <div className="pt-3">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-8 h-8 rounded-full bg-[#f0fdf4] flex items-center justify-center">
                        <svg className="w-4 h-4 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-[15px] sm:text-[16px] font-semibold text-[#0a0a0a]">
                        What Gets Through
                      </h3>
                    </div>

                    <ul className="space-y-2.5">
                      {getsThroughItems.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-[#f0fdf4] flex items-center justify-center flex-shrink-0">
                            <svg className="w-3 h-3 text-[#16a34a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-[13px] sm:text-[14px] text-[#525252]">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Target Industries Note */}
              <p className="text-[13px] text-[#737373] italic">
                Critical for: Debt consolidation, legal intake, real estate, healthcare, and any business relying on outbound calls
              </p>

              {/* CTA Form */}
              <form onSubmit={handleEmailSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="relative flex-1">
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
                      className={`w-full h-[52px] bg-[#FAFAFA] border rounded-xl px-5 text-[15px] text-[#0a0a0a] placeholder:text-[#a3a3a3] focus:outline-none transition-all duration-300 ${
                        isFocused
                          ? 'border-[#0a0a0a] bg-white shadow-[0_0_0_4px_rgba(10,10,10,0.04)]'
                          : 'border-[#e5e5e5] hover:border-[#d4d4d4]'
                      }`}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group h-[52px] px-6 bg-[#0a0a0a] text-white text-[15px] font-medium rounded-xl hover:bg-[#171717] hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] transition-all duration-300 flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    <span>Get Your Calls Through</span>
                    <svg
                      className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>

                {/* Terms */}
                <p className="text-[12px] leading-[1.5] text-[#a3a3a3]">
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
              </form>
            </div>

            {/* Right Column - Video */}
            <div className="relative flex items-center justify-center">
              <div
                className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] cursor-pointer group w-[70%]"
                onClick={handleVideoClick}
              >
                {/* Video */}
                <video
                  ref={videoRef}
                  className="w-full h-auto"
                  poster="/aiviscreening-poster.jpg"
                  playsInline
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={handleVideoEnded}
                >
                  <source src="/aiviscreening.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Play/Pause Overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center bg-black/20 transition-opacity duration-300 ${
                    isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/95 shadow-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    {isPlaying ? (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a0a0a]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 sm:w-8 sm:h-8 text-[#0a0a0a] ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </div>
                </div>

                {/* Unmute Button - Shows in corner when muted */}
                {isMuted && (
                  <button
                    onClick={handleMuteToggle}
                    className="absolute bottom-3 left-3 flex items-center gap-2 bg-white/95 hover:bg-white px-3 py-2 rounded-full shadow-lg z-20 transition-all duration-200 hover:scale-105"
                  >
                    <svg className="w-4 h-4 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                    </svg>
                    <span className="text-[13px] font-medium text-[#0a0a0a]">Unmute</span>
                  </button>
                )}

                {/* Mute/Unmute Button - Shows in corner when unmuted */}
                {!isMuted && (
                  <button
                    onClick={handleMuteToggle}
                    className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-200 z-10"
                    aria-label="Mute video"
                  >
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                  </button>
                )}

                {/* Gradient border effect */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none border border-white/20" />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#321ca3]/10 to-[#f84608]/10 rounded-full blur-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
