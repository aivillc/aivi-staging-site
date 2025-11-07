'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-xl border-b border-purple-500/20 shadow-2xl'
          : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={182}
              height={78}
              priority
              className="h-12 w-auto transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <a
              href="#features"
              className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:text-purple-400 relative group"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#solutions"
              className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:text-purple-400 relative group"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-300" />
            </a>
            <a
              href="#integrations"
              className="text-white/80 hover:text-white transition-all duration-300 text-sm font-medium tracking-wide hover:text-purple-400 relative group"
            >
              Integrations
            </a>
            <a
              href="#contact"
              className="relative px-6 py-3 text-white text-sm font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-purple-500/50 uppercase tracking-wider overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-orange-500 via-purple-600 to-orange-500 group-hover:bg-[length:200%_100%] group-hover:animate-gradient-move bg-[length:100%_100%]" />
              <span className="relative z-10">Get Started</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-purple-400 transition-colors">
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
