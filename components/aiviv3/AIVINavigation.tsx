'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Navigation structure with mega menu for Solutions
const navItems = [
  { label: 'Features', href: '/aiviv3/features' },
  {
    label: 'Solutions',
    megaMenu: {
      industries: [
        { label: 'Retail & E-Commerce', href: '/aiviv3/solutions/retail' },
        { label: 'Real Estate', href: '/aiviv3/solutions/real-estate' },
        { label: 'Hospitality', href: '/aiviv3/solutions/hospitality' },
        { label: 'Healthcare', href: '/aiviv3/solutions/healthcare' },
        { label: 'Financial Services', href: '/aiviv3/solutions/financial-services' },
        { label: 'Legal', href: '/aiviv3/solutions/legal' },
      ],
      integrations: [
        { label: 'N8n', href: '/aiviv3/integrations#n8n' },
        { label: 'Twilio', href: '/aiviv3/integrations#twilio' },
        { label: 'HubSpot', href: '/aiviv3/integrations#hubspot' },
        { label: 'OpenAI', href: '/aiviv3/integrations#openai' },
        { label: 'Go High Level', href: '/aiviv3/integrations#gohighlevel' },
      ],
      seeAllIntegrations: { label: 'See All Integrations', href: '/aiviv3/integrations' },
    },
  },
  { label: 'Use Cases', href: '/aiviv3/use-cases' },
  { label: 'Pricing', href: '/aiviv3/pricing' },
  // { label: 'Resources', href: '/aiviv3/resources' },
];

export default function AIVINavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check if current path matches nav item
  const isActive = (href: string) => {
    if (href === '/aiviv3') return pathname === '/aiviv3';
    return pathname.startsWith(href);
  };

  // Handle mega menu hover with delay
  const handleMegaMenuEnter = () => {
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
    }
    setMegaMenuOpen(true);
  };

  const handleMegaMenuLeave = () => {
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 150);
  };

  // Keyboard navigation and focus trap
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (megaMenuOpen) {
          setMegaMenuOpen(false);
        }
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
          buttonRef.current?.focus();
        }
      }
      if (!mobileMenuOpen) return;
      if (e.key === 'Tab' && menuRef.current) {
        const focusables = menuRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen, megaMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileSubmenuOpen(false);
  }, [pathname]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled
          ? 'bg-[#E8E5E0]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#E8E5E0]'
      } h-[72px]`}
    >
      <div className="w-full h-full px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-full">
          {/* Left Section - Logo + Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Logo */}
            <Link href="/aiviv3" className="flex items-center gap-2 group flex-shrink-0">
              <Image
                src="/aivipo.png"
                alt="AIVI - AI-Powered Lead Conversion"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </Link>

            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-[#CCCCCC] mx-2" aria-hidden="true" />

            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={item.megaMenu ? handleMegaMenuEnter : undefined}
                  onMouseLeave={item.megaMenu ? handleMegaMenuLeave : undefined}
                >
                  {item.megaMenu ? (
                    <button
                      className={`relative text-[15px] font-normal transition-colors group whitespace-nowrap focus-brand-ring flex items-center gap-1 text-[#000000] hover:text-[#333333]`}
                      aria-haspopup="true"
                      aria-expanded={megaMenuOpen}
                    >
                      {item.label}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${megaMenuOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] w-0 bg-[#f84608] group-hover:w-full transition-all duration-300`}
                        aria-hidden="true"
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href!}
                      className={`relative text-[15px] font-normal transition-colors group whitespace-nowrap focus-brand-ring flex items-center gap-1 ${
                        isActive(item.href!)
                          ? 'text-[#000000]'
                          : 'text-[#000000] hover:text-[#333333]'
                      }`}
                      aria-current={isActive(item.href!) ? 'page' : undefined}
                    >
                      {item.label}
                      <span
                        className={`absolute -bottom-1 left-0 h-[2px] transition-all duration-300 ${
                          isActive(item.href!)
                            ? 'w-full bg-gradient-to-r from-[#f84608] to-[#321ca3]'
                            : 'w-0 bg-[#f84608] group-hover:w-full'
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  )}

                  {/* Mega Menu for Solutions */}
                  {item.megaMenu && (
                    <div
                      ref={megaMenuRef}
                      className={`absolute top-full left-1/2 -translate-x-1/2 pt-4 transition-all duration-200 ${
                        megaMenuOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                      }`}
                    >
                      <div className="bg-white rounded-2xl shadow-xl border border-[#E8E5E0] p-6 min-w-[500px]">
                        <div className="grid grid-cols-2 gap-6">
                          {/* Industries Column */}
                          <div>
                            <h3 className="text-[12px] font-medium text-[#999999] uppercase tracking-wide mb-3">
                              Industries
                            </h3>
                            <ul className="space-y-1">
                              {item.megaMenu.industries.map((industry) => (
                                <li key={industry.href}>
                                  <Link
                                    href={industry.href}
                                    className="block py-2 px-3 text-[14px] text-[#333333] hover:text-[#f84608] hover:bg-[#F5F5F5] rounded-lg transition-all duration-200"
                                  >
                                    {industry.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Integrations Column */}
                          <div>
                            <h3 className="text-[12px] font-medium text-[#999999] uppercase tracking-wide mb-3">
                              Integrations
                            </h3>
                            <ul className="space-y-1 mb-4">
                              {item.megaMenu.integrations.map((integration) => (
                                <li key={integration.href}>
                                  <Link
                                    href={integration.href}
                                    className="block py-2 px-3 text-[14px] text-[#333333] hover:text-[#f84608] hover:bg-[#F5F5F5] rounded-lg transition-all duration-200"
                                  >
                                    {integration.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                            <Link
                              href={item.megaMenu.seeAllIntegrations.href}
                              className="flex items-center gap-2 py-2 px-3 text-[14px] text-[#f84608] hover:bg-[#F5F5F5] rounded-lg transition-all duration-200 group font-medium"
                            >
                              <span>{item.megaMenu.seeAllIntegrations.label}</span>
                              <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Logo */}
          <Link href="/aiviv3" className="flex lg:hidden items-center gap-2 group flex-shrink-0">
            <Image
              src="/aivipo.png"
              alt="AIVI - AI-Powered Lead Conversion"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          {/* Right Actions - Desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/aiviv3/login"
              className="text-[15px] font-medium text-[#000000] px-5 py-2.5 rounded-md hover:bg-black/5 transition-all duration-300 focus-brand-ring"
            >
              Log in
            </Link>
            <Link
              href="/aiviv3/demo"
              className="group relative text-[15px] font-semibold text-white px-5 py-2.5 rounded-md overflow-hidden hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 focus-brand-ring bg-gradient-to-r from-[#f84608] to-[#321ca3]"
            >
              <span className="relative z-10">Book a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden w-7 h-7 flex flex-col justify-center items-center gap-1.5 group focus-brand-ring"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            ref={buttonRef}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span
              className={`w-full h-0.5 bg-[#000000] transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              aria-hidden="true"
            />
            <span
              className={`w-full h-0.5 bg-[#000000] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              aria-hidden="true"
            />
            <span
              className={`w-full h-0.5 bg-[#000000] transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        role="menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-[#E8E5E0]/98 backdrop-blur-md border-t border-[#DDDDDD] shadow-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
        ref={menuRef}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.href}>
              {item.megaMenu ? (
                <>
                  <button
                    role="menuitem"
                    className="w-full flex items-center justify-between text-[15px] font-normal text-[#000000] py-3 px-4 rounded-md hover:bg-white/50 transition-all duration-200 focus-brand-ring"
                    onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                    tabIndex={mobileMenuOpen ? 0 : -1}
                    aria-expanded={mobileSubmenuOpen}
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${mobileSubmenuOpen ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      mobileSubmenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 py-2 space-y-4">
                      {/* Industries */}
                      <div>
                        <h4 className="text-[11px] font-semibold text-[#999999] uppercase tracking-wider px-4 mb-2">
                          Industries
                        </h4>
                        <div className="space-y-1">
                          {item.megaMenu.industries.map((industry) => (
                            <Link
                              key={industry.href}
                              href={industry.href}
                              role="menuitem"
                              className="block text-[14px] text-[#333333] py-2 px-4 rounded-md hover:bg-white/50 transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                              tabIndex={mobileMenuOpen && mobileSubmenuOpen ? 0 : -1}
                            >
                              {industry.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                      {/* Integrations */}
                      <div>
                        <h4 className="text-[11px] font-semibold text-[#999999] uppercase tracking-wider px-4 mb-2">
                          Integrations
                        </h4>
                        <div className="space-y-1">
                          {item.megaMenu.integrations.map((integration) => (
                            <Link
                              key={integration.href}
                              href={integration.href}
                              role="menuitem"
                              className="block text-[14px] text-[#333333] py-2 px-4 rounded-md hover:bg-white/50 transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                              tabIndex={mobileMenuOpen && mobileSubmenuOpen ? 0 : -1}
                            >
                              {integration.label}
                            </Link>
                          ))}
                        </div>
                        <Link
                          href={item.megaMenu.seeAllIntegrations.href}
                          role="menuitem"
                          className="flex items-center gap-2 text-[14px] text-[#f84608] py-2 px-4 rounded-md hover:bg-white/50 transition-all duration-200 font-medium mt-2"
                          onClick={() => setMobileMenuOpen(false)}
                          tabIndex={mobileMenuOpen && mobileSubmenuOpen ? 0 : -1}
                        >
                          {item.megaMenu.seeAllIntegrations.label}
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  role="menuitem"
                  className="block text-[15px] font-normal text-[#000000] py-3 px-4 rounded-md hover:bg-white/50 transition-all duration-200 focus-brand-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  tabIndex={mobileMenuOpen ? 0 : -1}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="border-t border-[#DDDDDD] my-2" />
          <Link
            href="/aiviv3/login"
            role="menuitem"
            className="block text-[15px] font-medium text-[#000000] py-3 px-4 rounded-md hover:bg-white/50 transition-all duration-200 focus-brand-ring"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Log in
          </Link>
          <Link
            href="/aiviv3/demo"
            role="menuitem"
            className="block text-[15px] font-semibold text-white py-3 px-4 rounded-md bg-gradient-to-r from-[#f84608] to-[#321ca3] hover:opacity-90 transition-all duration-200 focus-brand-ring text-center"
            onClick={() => setMobileMenuOpen(false)}
            tabIndex={mobileMenuOpen ? 0 : -1}
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
