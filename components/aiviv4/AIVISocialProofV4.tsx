'use client';

import { useRef, useEffect, useState } from 'react';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';

// Launch date constant - defined outside component to avoid recreation
const LAUNCH_DATE = new Date('2026-01-04T11:11:00');

// Countdown timer hook - with hydration-safe initialization
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return { timeLeft, mounted };
}

const integrations = [
  { name: 'Go High Level', style: 'font-semibold' },
  { name: 'Twilio', style: 'font-semibold' },
  { name: 'OpenAI', style: 'font-semibold' },
  { name: 'Stripe', style: 'font-semibold' },
  { name: 'Google Calendar', style: 'font-semibold' },
  { name: 'Zapier', style: 'font-semibold' },
  { name: 'Slack', style: 'font-semibold' },
  { name: 'Salesforce', style: 'font-semibold' },
  { name: 'ElevenLabs', style: 'font-semibold' },
  { name: 'Telnyx', style: 'font-semibold' },
  { name: 'HubSpot', style: 'font-semibold' },
  { name: 'Calendly', style: 'font-semibold' },
  { name: 'Anthropic Claude', style: 'font-semibold' },
  { name: 'RingCentral', style: 'font-semibold' },
  { name: 'Microsoft Teams', style: 'font-semibold' },
  { name: 'Zoho CRM', style: 'font-semibold' },
  { name: 'PayPal', style: 'font-semibold' },
  { name: 'Retell AI', style: 'font-semibold' },
  { name: 'Cal.com', style: 'font-semibold' },
  { name: 'Make', style: 'font-semibold' },
  { name: 'Pipedrive', style: 'font-semibold' },
  { name: 'Vonage', style: 'font-semibold' },
  { name: 'Deepgram', style: 'font-semibold' },
  { name: 'Plaid', style: 'font-semibold' },
  { name: 'Gmail', style: 'font-semibold' },
  { name: 'Close CRM', style: 'font-semibold' },
  { name: 'Plivo', style: 'font-semibold' },
  { name: 'AssemblyAI', style: 'font-semibold' },
  { name: 'Microsoft Outlook', style: 'font-semibold' },
  { name: 'Five9', style: 'font-semibold' },
  { name: 'SendGrid', style: 'font-semibold' },
  { name: 'n8n', style: 'font-semibold' },
  { name: 'Square', style: 'font-semibold' },
  { name: 'Truecaller', style: 'font-semibold' },
  { name: 'LexisNexis', style: 'font-semibold' },
  { name: 'TransUnion TLO', style: 'font-semibold' },
  { name: 'Authorize.net', style: 'font-semibold' },
  { name: 'TCPA Shield', style: 'font-semibold' },
  { name: 'STIR/SHAKEN', style: 'font-semibold' },
];

const stats = [
  { label: '3-second response time on all lead inquiries', number: '3', unit: 'sec', metric: 'Response Time' },
  { label: 'Average contact rate achieved with AIVI orchestration', number: '65%', unit: '+', metric: 'Contact Rate' },
  { label: 'Full lead qualification completed in under 90 seconds', number: '90', unit: 'sec', metric: 'Full Qualification' },
];

export default function AIVISocialProofV4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  // Countdown to Jan 4th 2026 at 11:11am
  const { timeLeft } = useCountdown(LAUNCH_DATE);

  // Use the shared neural canvas hook
  useNeuralCanvas(canvasRef);

  // Infinite scroll animation for AI models
  useEffect(() => {
    const animationFrame = requestAnimationFrame(function animate() {
      setScrollPosition((prev) => {
        // Reset when we've scrolled through one set
        if (prev <= -100) return 0;
        return prev - 0.05; // Adjust speed here
      });
      requestAnimationFrame(animate);
    });

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Auto-switch to slide 2 after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide(1);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Loop back to slide 1 after 10 seconds on slide 2
  useEffect(() => {
    if (currentSlide === 1) {
      const timer = setTimeout(() => {
        setCurrentSlide(0);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  // Then switch back to slide 2 after 5 seconds on slide 1
  useEffect(() => {
    if (currentSlide === 0) {
      const timer = setTimeout(() => {
        setCurrentSlide(1);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  // Handle video autoplay when slide 2 is active
  useEffect(() => {
    if (currentSlide === 1 && videoRef.current) {
      videoRef.current.muted = true;
      setIsMuted(true);
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [currentSlide]);

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoEnded = () => {
    if (videoRef.current && videoRef.current.muted) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      setIsPlaying(false);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section
      className="social-proof-section-dark w-full relative overflow-hidden"
      aria-labelledby="social-proof-heading"
    >
      {/* Neural Canvas Background */}
      <canvas ref={canvasRef} className="social-proof-canvas" />

      {/* Main Content Area */}
      <div className="relative z-10 px-6 sm:px-8 md:px-12 lg:px-16 py-20 sm:py-24 md:py-28 lg:py-32">
        {/* Top Row: Trust Badge left, Company logos right */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-16 sm:mb-20 md:mb-24">
          {/* Premium Trust Badge - Dark Theme */}
          <div className="social-proof-trust-row">
            <div className="trust-badge-dark">
              <div className="trust-icon-dark">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <span className="trust-text-dark">$18M+ Revenue Generated for Customers This Year</span>
            </div>
          </div>

          {/* Premium AI Models Carousel - Dark Theme */}
          <div
            className="relative overflow-hidden"
            role="list"
            aria-label="Supported integrations"
            style={{ width: '100%', maxWidth: '700px' }}
          >
            {/* Fade gradient on left */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#f5f0e8] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

            {/* Fade gradient on right */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#f5f0e8] to-transparent z-10 pointer-events-none" aria-hidden="true"></div>

            {/* Scrolling container */}
            <div className="flex gap-8" style={{ transform: `translateX(${scrollPosition}%)` }}>
              {/* First set */}
              {integrations.map((integration, index) => (
                <span
                  key={`first-${index}`}
                  role="listitem"
                  className={`company-logo-dark whitespace-nowrap ${integration.style}`}
                >
                  {integration.name}
                </span>
              ))}
              {/* Duplicate set for seamless loop */}
              {integrations.map((integration, index) => (
                <span
                  key={`second-${index}`}
                  role="listitem"
                  className={`company-logo-dark whitespace-nowrap ${integration.style}`}
                >
                  {integration.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {/* Slide 1: Original Testimonial + Stats */}
            <div className="min-w-full">
              {/* Premium Testimonial - Dark Theme */}
              <div className="testimonial-dark mb-20 sm:mb-28 md:mb-36" style={{ minHeight: '400px' }}>
                <div className="testimonial-quote-dark" aria-hidden="true">&ldquo;</div>
                <figure className="testimonial-content-dark">
                  <blockquote
                    id="social-proof-heading"
                    className="testimonial-text-dark"
                  >
                    Every rep is more productive with AIVI.
                    <br />We booked 75% more meetings
                    <br />while cutting manual work in half.
                  </blockquote>

                  <figcaption className="testimonial-author-dark">
                    <div className="author-details-dark">
                      <div className="author-avatar-dark">
                        <span>AF</span>
                      </div>
                      <div className="author-info-dark">
                        <span className="author-name-dark">Andrew Froning</span>
                        <span className="author-role-dark">BDR Leader</span>
                      </div>
                    </div>
                    <div className="author-company-dark">IGNITE</div>
                  </figcaption>
                </figure>
              </div>

              {/* Premium Stats Cards */}
              <div
                className="stats-grid-dark"
                role="list"
                aria-label="Performance statistics"
              >
                {stats.map((stat, index) => (
                  <article
                    key={index}
                    role="listitem"
                    className="stat-card-dark"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    <div className="stat-card-accent-dark" aria-hidden="true"></div>
                    <div className="stat-card-header-dark">
                      <p className="stat-card-label-dark">{stat.label}</p>
                      <span className="stat-card-metric-dark">{stat.metric}</span>
                    </div>
                    <div className="stat-card-value-dark">
                      <span className="text-[72px] sm:text-[96px] lg:text-[112px] leading-[0.9] font-medium aivi-gradient-text tracking-[-0.04em] premium-number text-shadow-subtle">
                        {stat.number}
                      </span>
                      <span className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#6b7280] tracking-[-0.02em] font-inter">
                        {stat.unit}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Slide 2: AIVI Ignite Preview */}
            <div className="min-w-full">
              {/* Two Column Layout - Text Left, Video Right */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12 mb-20 sm:mb-28 md:mb-36" style={{ minHeight: '400px' }}>
                {/* Left Column - Text Content (same format as slide 1) */}
                <div className="flex-1 mb-10 lg:mb-0">
                  <div className="testimonial-quote-dark" aria-hidden="true">&ldquo;</div>
                  <figure className="testimonial-content-dark">
                    <blockquote className="testimonial-text-dark">
                      AIVI Ignite
                      <br />Facebook Leads to Revenue
                      <br />in 3 Seconds.
                    </blockquote>

                    {/* Countdown Timer */}
                    <div className="mt-8">
                      <p className="text-[#525252] text-sm uppercase tracking-wider mb-3">Launching In</p>
                      <div className="flex gap-4">
                        <div className="text-center">
                          <div className="text-[36px] sm:text-[48px] font-light text-[#1a1a1a] leading-none">{timeLeft.days}</div>
                          <div className="text-[11px] uppercase tracking-wider text-[#737373] mt-1">Days</div>
                        </div>
                        <div className="text-[36px] sm:text-[48px] font-light text-[#d4d4d4] leading-none">:</div>
                        <div className="text-center">
                          <div className="text-[36px] sm:text-[48px] font-light text-[#1a1a1a] leading-none">{String(timeLeft.hours).padStart(2, '0')}</div>
                          <div className="text-[11px] uppercase tracking-wider text-[#737373] mt-1">Hours</div>
                        </div>
                        <div className="text-[36px] sm:text-[48px] font-light text-[#d4d4d4] leading-none">:</div>
                        <div className="text-center">
                          <div className="text-[36px] sm:text-[48px] font-light text-[#1a1a1a] leading-none">{String(timeLeft.minutes).padStart(2, '0')}</div>
                          <div className="text-[11px] uppercase tracking-wider text-[#737373] mt-1">Min</div>
                        </div>
                        <div className="text-[36px] sm:text-[48px] font-light text-[#d4d4d4] leading-none">:</div>
                        <div className="text-center">
                          <div className="text-[36px] sm:text-[48px] font-light text-[#f84608] leading-none">{String(timeLeft.seconds).padStart(2, '0')}</div>
                          <div className="text-[11px] uppercase tracking-wider text-[#737373] mt-1">Sec</div>
                        </div>
                      </div>
                    </div>
                  </figure>
                </div>

                {/* Right Column - Video (wider) */}
                <div className="flex-[1.2] flex items-center justify-center">
                  <div className="relative w-[90%]">
                    <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-[#e5e5e5]">
                      <video
                        ref={videoRef}
                        className="w-full h-auto"
                        poster="/gmtech-poster.jpg"
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={handleVideoEnded}
                      >
                        <source src="/gmtech-video.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

                      {/* Mute/Unmute Button */}
                      <button
                        onClick={handleMuteToggle}
                        className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-all duration-200 z-10"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? (
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                          </svg>
                        ) : (
                          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards - Same format as slide 1 */}
              <div
                className="stats-grid-dark"
                role="list"
                aria-label="Ignite features"
              >
                {/* Demo Card */}
                <article role="listitem" className="stat-card-dark">
                  <div className="stat-card-accent-dark" aria-hidden="true"></div>
                  <div className="stat-card-header-dark">
                    <p className="stat-card-label-dark">Live form submit → 90-second full cycle → agent transfer</p>
                    <span className="stat-card-metric-dark">Demo</span>
                  </div>
                  <div className="stat-card-value-dark">
                    <span className="text-[72px] sm:text-[96px] lg:text-[112px] leading-[0.9] font-medium aivi-gradient-text tracking-[-0.04em] premium-number text-shadow-subtle">
                      90
                    </span>
                    <span className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#6b7280] tracking-[-0.02em] font-inter">
                      sec
                    </span>
                  </div>
                </article>

                {/* Limited Preview Card */}
                <article role="listitem" className="stat-card-dark">
                  <div className="stat-card-accent-dark" aria-hidden="true"></div>
                  <div className="stat-card-header-dark">
                    <p className="stat-card-label-dark">Be the first to experience AIVI Ignite - Join our exclusive early access list</p>
                    <span className="stat-card-metric-dark">Limited Preview</span>
                  </div>
                  <div className="stat-card-value-dark flex-col !items-start gap-4">
                    <span className="text-[36px] sm:text-[48px] lg:text-[56px] leading-[1] font-medium aivi-gradient-text tracking-[-0.02em]">
                      Get Early Access
                    </span>
                    <form className="flex w-full gap-2 mt-2" onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 h-12 px-4 rounded-xl bg-white border border-[#e5e5e5] text-[#0a0a0a] text-sm placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#f84608] focus:ring-2 focus:ring-[#f84608]/20 transition-all"
                      />
                      <button
                        type="submit"
                        className="h-12 px-6 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-sm font-semibold rounded-xl hover:opacity-90 transition-opacity whitespace-nowrap"
                      >
                        Join Waitlist
                      </button>
                    </form>
                  </div>
                </article>

                {/* Follow-up Card */}
                <article role="listitem" className="stat-card-dark">
                  <div className="stat-card-accent-dark" aria-hidden="true"></div>
                  <div className="stat-card-header-dark">
                    <p className="stat-card-label-dark">Early access list → 50% off first 3 months</p>
                    <span className="stat-card-metric-dark">Follow-up</span>
                  </div>
                  <div className="stat-card-value-dark">
                    <span className="text-[72px] sm:text-[96px] lg:text-[112px] leading-[0.9] font-medium aivi-gradient-text tracking-[-0.04em] premium-number text-shadow-subtle">
                      50%
                    </span>
                    <span className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#6b7280] tracking-[-0.02em] font-inter">
                      off
                    </span>
                  </div>
                </article>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-12">
            {[0, 1].map((index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-[#f84608] w-8'
                    : 'bg-[#d4d4d4] w-2 hover:bg-[#a3a3a3]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Slanted Divider to Next Section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[80px] sm:h-[100px] md:h-[120px] overflow-hidden pointer-events-none z-20"
        aria-hidden="true"
      >
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0 120L1440 120L1440 0L0 80L0 120Z"
            fill="#FAFAFA"
          />
        </svg>
      </div>
    </section>
  );
}
