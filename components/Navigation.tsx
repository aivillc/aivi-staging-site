'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHospital, faTruck, faHouse, faGavel } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
        isScrolled
          ? 'bg-black/98 backdrop-blur-2xl border-b border-purple-600/30 shadow-[0_8px_32px_rgba(139,92,246,0.15)]'
          : 'bg-black/85 backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={182}
              height={78}
              priority
              className="h-12 w-auto transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Use Cases Dropdown */}
            <div 
              className="relative group"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button className="text-white/70 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative flex items-center gap-2 py-2">
                Use Cases
                <svg 
                  className={`w-4 h-4 transition-all duration-300 ${useCasesOpen ? 'rotate-180 text-purple-400' : 'text-white/50'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-3 w-52 bg-black/98 backdrop-blur-2xl border border-purple-600/30 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden transition-all duration-400 ease-out ${useCasesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'}`}>
                <Link
                  href="/financial"
                  className="block px-5 py-3.5 text-white/75 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-transparent transition-all duration-300 text-sm font-medium border-b border-purple-600/10 group"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faChartLine} className="text-orange-500 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Financial</span>
                  </span>
                </Link>
                <Link
                  href="/healthcare"
                  className="block px-5 py-3.5 text-white/75 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-transparent transition-all duration-300 text-sm font-medium border-b border-purple-600/10 group"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faHospital} className="text-purple-400 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Healthcare</span>
                  </span>
                </Link>
                <Link
                  href="/law-firms"
                  className="block px-5 py-3.5 text-white/75 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-transparent transition-all duration-300 text-sm font-medium border-b border-purple-600/10 group"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faGavel} className="text-orange-400 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Law Firms</span>
                  </span>
                </Link>
                <Link
                  href="/logistics"
                  className="block px-5 py-3.5 text-white/75 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-transparent transition-all duration-300 text-sm font-medium border-b border-purple-600/10 group"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faTruck} className="text-purple-500 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Logistics</span>
                  </span>
                </Link>
                <Link
                  href="/real-estate"
                  className="block px-5 py-3.5 text-white/75 hover:text-white hover:bg-gradient-to-r hover:from-purple-600/20 hover:to-transparent transition-all duration-300 text-sm font-medium group"
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faHouse} className="text-orange-500 w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Real Estate</span>
                  </span>
                </Link>
              </div>
            </div>

            <a
              href="#features"
              className="text-white/70 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative group py-2"
            >
              Features
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
            <a
              href="#solutions"
              className="text-white/70 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative group py-2"
            >
              Solutions
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
            <a
              href="#integrations"
              className="text-white/70 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative group py-2"
            >
              Integrations
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
            </a>
            
            <button
              onClick={() => window.location.href = '#contact'}
              className="relative px-7 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white hover:text-purple-400 transition-all duration-300 hover:scale-110">
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
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
