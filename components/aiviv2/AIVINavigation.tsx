'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

export default function AIVINavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>('');
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Roles', href: '#roles' },
    { label: 'Resources', href: '#resources' },
    { label: 'Pricing', href: '#pricing' },
  ];

  // Scroll spy for highlighting active section
  useEffect(() => {
    const ids = navItems
      .map((n) => n.href.replace('#', ''))
      .filter((id) => !!document.getElementById(id));
    if (ids.length === 0) return;

    const elements = ids.map((id) => document.getElementById(id)!)
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with greatest intersection ratio that's intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        root: null,
        // Trigger a bit before full center to feel responsive
        rootMargin: '-20% 0px -60% 0px',
        threshold: [0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
        buttonRef.current?.focus();
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
          (last as HTMLElement).focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          (first as HTMLElement).focus();
        }
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen]);

  return (
    <nav
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
            <a href="/" className="flex items-center gap-2 group flex-shrink-0">
              <Image
                src="/aivipo.png"
                alt="AIVI Logo"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
              />
            </a>

            {/* Vertical Divider */}
            <div className="h-8 w-[1px] bg-[#CCCCCC] mx-2" />

            {/* Main Navigation */}
            <div className="flex items-center gap-6">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`relative text-[15px] font-normal transition-colors group whitespace-nowrap ${
                    activeId === item.href.replace('#', '')
                      ? 'text-[#000000]'
                      : 'text-[#000000] hover:text-[#333333]'
                  }`}
                  aria-current={activeId === item.href.replace('#', '') ? 'true' : undefined}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                      activeId === item.href.replace('#', '')
                        ? 'w-full brand-gradient-underline'
                        : 'w-0 bg-[#f84608] group-hover:w-full'
                    }`}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Logo */}
          <a href="/" className="flex lg:hidden items-center gap-2 group flex-shrink-0">
            <Image
              src="/aivipo.png"
              alt="AIVI Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Right Actions - Desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="text-[15px] font-medium text-[#000000] px-5 py-2.5 rounded-md hover:bg-black/5 transition-all duration-300"
            >
              Log in
            </a>
            <button className="text-[15px] font-semibold text-white bg-[#321ca3] px-5 py-2.5 rounded-md hover:bg-[#2a1889] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              Get a demo
            </button>
          </div>

          {/* Mobile menu button - Right aligned */}
          <button
            className="lg:hidden w-7 h-7 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            ref={buttonRef}
            aria-label="Toggle mobile menu"
          >
            <span className={`w-full h-0.5 bg-[#000000] transform transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-full h-0.5 bg-[#000000] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`w-full h-0.5 bg-[#000000] transform transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        id="mobile-menu"
        className={`lg:hidden absolute top-full left-0 w-full bg-[#E8E5E0]/98 backdrop-blur-md border-t border-[#DDDDDD] shadow-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        ref={menuRef}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-[15px] font-normal text-[#000000] py-3 px-4 rounded-md hover:bg-white/50 transition-all duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#login"
            className="text-[15px] font-medium text-[#000000] py-3 px-4 rounded-md hover:bg-white/50 transition-all duration-200"
            onClick={() => setMobileMenuOpen(false)}
          >
            Log in
          </a>
        </div>
      </div>
    </nav>
  );
}
