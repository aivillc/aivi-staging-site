'use client';

import { useRef } from 'react';
import { useNeuralCanvas } from './hooks/useNeuralCanvas';

const companies = [
  { name: 'AUTODESK', style: 'font-semibold tracking-wide' },
  { name: 'Dolby', style: 'font-semibold' },
  { name: 'SMARTLING', style: 'font-semibold tracking-wide' },
  { name: 'Realis', style: 'font-serif italic font-medium' },
  { name: 'ANTHROPIC', style: 'font-semibold tracking-wider' },
  { name: 'kandji', style: 'font-semibold' },
  { name: 'DocuSign', style: 'font-semibold' },
];

const stats = [
  { label: '3-second response time on all lead inquiries', number: '3', unit: 'sec', metric: 'Response Time' },
  { label: 'Average contact rate achieved with AIVI orchestration', number: '65%', unit: '+', metric: 'Contact Rate' },
  { label: 'Full lead qualification completed in under 90 seconds', number: '90', unit: 'sec', metric: 'Full Qualification' },
];

export default function AIVISocialProofV4() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Use the shared neural canvas hook
  useNeuralCanvas(canvasRef);

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
              <span className="trust-text-dark">Trusted by 500,000+ companies worldwide</span>
            </div>
          </div>

          {/* Premium Company Logos - Dark Theme */}
          <div
            className="company-logos-dark"
            role="list"
            aria-label="Featured companies"
          >
            {companies.map((company, index) => (
              <span
                key={index}
                role="listitem"
                className={`company-logo-dark ${company.style}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {company.name}
              </span>
            ))}
          </div>
        </div>

        {/* Premium Testimonial - Dark Theme */}
        <div className="testimonial-dark mb-20 sm:mb-28 md:mb-36">
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
              <div className="author-company-dark">CYERA</div>
            </figcaption>
          </figure>
        </div>

        {/* Premium Stats Cards - Glass Effect for Dark Theme */}
        <div
          className="stats-grid-dark mb-16 sm:mb-20 md:mb-24"
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
              {/* Decorative corner accent */}
              <div className="stat-card-accent-dark" aria-hidden="true"></div>

              {/* Top row: Label left, Metric right */}
              <div className="stat-card-header-dark">
                <p className="stat-card-label-dark">{stat.label}</p>
                <span className="stat-card-metric-dark">{stat.metric}</span>
              </div>

              {/* Bottom: Large number with gradient (PRESERVED) */}
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
