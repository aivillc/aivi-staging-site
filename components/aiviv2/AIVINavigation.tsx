'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function AIVINavigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
          {/* Logo - Left aligned */}
          <a href="/" className="flex items-center gap-2 group flex-shrink-0">
            <Image
              src="/aiviv2.png"
              alt="AIVI Logo"
              width={120}
              height={40}
              className="h-8 sm:h-10 w-auto group-hover:scale-105 transition-transform duration-300"
            />
          </a>

          {/* Main Navigation - Desktop Center */}
          <div className="hidden lg:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="relative text-[15px] font-normal text-[#000000] hover:text-[#333333] transition-colors group whitespace-nowrap"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#E5FF00] group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Right Actions - Desktop only */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#login"
              className="text-[15px] font-medium text-[#000000] px-5 py-2.5 rounded-md hover:bg-black/5 transition-all duration-300"
            >
              Log in
            </a>
            <button className="text-[15px] font-semibold text-[#000000] bg-white border-2 border-[#000000] px-5 py-2.5 rounded-md hover:bg-[#000000] hover:text-white transition-all duration-300">
              Get a demo
            </button>
          </div>

          {/* Mobile menu button - Right aligned */}
          <button
            className="lg:hidden w-7 h-7 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
        className={`lg:hidden absolute top-full left-0 w-full bg-[#E8E5E0]/98 backdrop-blur-md border-t border-[#DDDDDD] shadow-xl overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
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
