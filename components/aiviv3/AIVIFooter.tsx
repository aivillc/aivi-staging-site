'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function AIVIFooter() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const footerColumns = [
    {
      title: 'Get started',
      links: [
        { label: 'Get started', href: '/get-started' },
        { label: 'Pricing', href: '/pricing' },
        { label: 'Request a demo', href: '/demo' },
      ],
    },
    {
      title: 'Solutions',
      links: [
        { label: 'Outbound', href: '/solutions/outbound' },
        { label: 'Inbound', href: '/solutions/inbound' },
        { label: 'Data Enrichment', href: '/solutions/data-enrichment' },
        { label: 'Deal Execution', href: '/solutions/deal-execution' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { label: 'AIVI Data', href: '/platform/data' },
        { label: 'AIVI AI', href: '/platform/ai' },
        { label: 'Integrations', href: '/platform/integrations' },
        { label: 'Chrome Extension', href: '/platform/chrome-extension' },
        { label: 'Workflow Automation', href: '/platform/automation' },
        { label: 'Security', href: '/platform/security' },
      ],
    },
    {
      title: 'Use Cases',
      links: [
        { label: 'B2B Database', href: '/use-cases/b2b-database' },
        { label: 'Lead Scoring', href: '/use-cases/lead-scoring' },
        { label: 'Inbound Lead Router', href: '/use-cases/inbound-router' },
        { label: 'Sales Engagement', href: '/use-cases/sales-engagement' },
        { label: 'Meetings Scheduler', href: '/use-cases/meetings' },
        { label: 'Deal Management', href: '/use-cases/deal-management' },
        { label: 'Conversation Intelligence', href: '/use-cases/conversation-intelligence' },
        { label: 'Sales Analytics', href: '/use-cases/analytics' },
        { label: 'Sales Coaching', href: '/use-cases/coaching' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'AIVI Academy', href: '/academy' },
        { label: 'Magazine', href: '/magazine' },
        { label: 'Insights', href: '/insights' },
        { label: 'Partners', href: '/partners' },
        { label: 'Knowledge Base', href: '/knowledge-base' },
        { label: 'Webinars', href: '/webinars' },
        { label: 'Success Stories', href: '/success-stories' },
        { label: 'Privacy Center', href: '/privacy-center' },
        { label: 'API Docs', href: '/api-docs' },
        { label: 'Join Our Community', href: '/community' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About AIVI', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Customer Reviews', href: '/reviews' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Roles',
      links: [
        { label: 'Sales Leaders', href: '/roles/sales-leaders' },
        { label: 'Account Executives', href: '/roles/account-executives' },
        { label: 'Sales Development', href: '/roles/sales-development' },
        { label: 'Founders', href: '/roles/founders' },
        { label: 'Marketing', href: '/roles/marketing' },
        { label: 'Revenue Operations', href: '/roles/revenue-ops' },
      ],
    },
  ];

  const socialLinks = [
    { name: 'YouTube', path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', href: 'https://youtube.com' },
    { name: 'Instagram', path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: 'https://instagram.com' },
    { name: 'TikTok', path: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z', href: 'https://tiktok.com' },
    { name: 'X', path: 'M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z', href: 'https://x.com' },
    { name: 'Facebook', path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: 'https://facebook.com' },
  ];

  return (
    <footer
      className="w-full bg-gradient-to-b from-[#0A0A0A] to-[#000000] text-white relative overflow-hidden"
      role="contentinfo"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }} />
      </div>

      {/* Gradient overlay effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#f84608]/5 to-transparent blur-3xl rounded-full" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#321ca3]/5 to-transparent blur-3xl rounded-full" aria-hidden="true" />

      <div className="relative max-w-[1600px] mx-auto px-8 lg:px-16 py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Left side - Large Logo */}
          <div className="lg:col-span-4">
            <a href="/" className="group cursor-pointer inline-block focus-brand-ring" aria-label="AIVI Home">
              <div className="relative w-[400px] max-w-full transition-all duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/aiviblack.png"
                  alt="AIVI Logo"
                  width={400}
                  height={400}
                  className="w-full h-auto brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#f84608]/0 via-[#321ca3]/10 to-[#f84608]/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" aria-hidden="true" />
              </div>
            </a>

            <div className="mt-8 space-y-3 opacity-60">
              <p className="text-xs font-medium tracking-wide">&copy; 2025 AIVI. All rights reserved.</p>
              <nav className="flex flex-col gap-2 text-xs" aria-label="Legal links">
                <a
                  href="/privacy"
                  className="inline-block hover:text-[#f84608] transition-colors duration-300 hover:translate-x-1 transform w-fit focus-brand-ring"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="inline-block hover:text-[#f84608] transition-colors duration-300 hover:translate-x-1 transform w-fit focus-brand-ring"
                >
                  Terms of Service
                </a>
                <a
                  href="/privacy#do-not-sell"
                  className="inline-block hover:text-[#f84608] transition-colors duration-300 hover:translate-x-1 transform w-fit focus-brand-ring"
                >
                  Don&apos;t Sell My Info
                </a>
              </nav>
            </div>
          </div>

          {/* Right side - Navigation Links */}
          <nav className="lg:col-span-8" aria-label="Footer navigation">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-10">
              {footerColumns.map((column, index) => (
                <div
                  key={index}
                  className="space-y-4 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xs font-bold uppercase tracking-widest text-white/90 mb-5">
                    {column.title}
                  </h3>
                  <ul className="space-y-3">
                    {column.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href={link.href}
                          onMouseEnter={() => setHoveredLink(`${index}-${linkIndex}`)}
                          onMouseLeave={() => setHoveredLink(null)}
                          className="group text-xs text-white/60 hover:text-white transition-all duration-300 flex items-center gap-2 w-fit focus-brand-ring"
                        >
                          <span className="relative">
                            {link.label}
                            <span
                              className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-[#f84608] to-[#321ca3] transition-all duration-300 ${
                                hoveredLink === `${index}-${linkIndex}` ? 'w-full' : 'w-0'
                              }`}
                              aria-hidden="true"
                            />
                          </span>
                          <svg
                            className={`w-3 h-3 transform transition-all duration-300 ${
                              hoveredLink === `${index}-${linkIndex}` ? 'translate-x-1 opacity-100' : 'translate-x-0 opacity-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </nav>
        </div>

        {/* Divider with gradient */}
        <div className="relative h-[1px] mb-16" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Bottom Section - CTA and Social */}
        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Prospect Anywhere CTA */}
          <div className="space-y-5">
            <h3 className="text-sm font-bold tracking-wide">Prospect anywhere</h3>
            <p className="text-xs text-white/70 leading-relaxed max-w-md">
              Get verified emails and phone numbers and instantly reach out while working in your favorite tools.
            </p>
            <a
              href="/chrome-extension"
              className="group relative inline-flex px-6 py-3 bg-transparent border border-white/30 text-white text-xs font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:border-[#f84608] hover:shadow-[0_0_20px_rgba(248,70,8,0.3)] focus-brand-ring"
            >
              <span className="relative z-10 flex items-center gap-2">
                AIVI Chrome Extension
                <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#f84608]/0 via-[#321ca3]/10 to-[#f84608]/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" aria-hidden="true" />
            </a>
          </div>

          {/* Social Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold tracking-wide">Connect with us</h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={`Follow us on ${social.name}`}
                  className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:border-[#f84608] transition-all duration-300 hover:shadow-[0_0_15px_rgba(248,70,8,0.3)] hover:-translate-y-1 focus-brand-ring"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <svg className="w-4 h-4 text-white/60 group-hover:text-[#f84608] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path} />
                  </svg>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f84608]/0 to-[#321ca3]/20 opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Final divider */}
        <div className="relative h-[1px] mb-8" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <div>
            Powered by cutting-edge AI technology
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              <span>All systems operational</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
