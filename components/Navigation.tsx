'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faHospital, faTruck, faHouse, faGavel } from '@fortawesome/free-solid-svg-icons';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileUseCasesOpen, setMobileUseCasesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-out ${
        isScrolled
          ? 'bg-black/98 backdrop-blur-2xl border-b border-purple-600/30 shadow-[0_8px_32px_rgba(139,92,246,0.15)]'
          : 'bg-black backdrop-blur-lg'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={246}
              height={105}
              priority
              className="h-10 md:h-16 w-auto transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_12px_rgba(139,92,246,0.5)] cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
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
              <div className={`absolute top-full left-0 pt-3 w-52 transition-all duration-400 ease-out ${useCasesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'}`}>
                <div className="bg-black/98 backdrop-blur-2xl border border-purple-600/30 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden">
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
            </div>

            <a
              href="#about"
              className="text-white/70 hover:text-white transition-all duration-300 text-sm font-semibold tracking-wide relative group py-2"
            >
              About Us
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
            </a>

            <button
              onClick={() => window.location.href = '#demo-form'}
              className="relative px-7 py-3 bg-gradient-to-r from-purple-600 to-orange-500 text-white text-sm font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white hover:text-purple-400 transition-all duration-300 hover:scale-110"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12"></path>
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 top-[80px] bg-black/98 backdrop-blur-2xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="h-full overflow-y-auto px-6 py-8">
          <div className="space-y-1">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 text-white/80 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all text-base font-semibold"
            >
              Features
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 text-white/80 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all text-base font-semibold"
            >
              Solutions
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 text-white/80 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all text-base font-semibold"
            >
              Integrations
            </a>

            {/* Mobile Use Cases Dropdown */}
            <div>
              <button
                onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
                className="w-full flex items-center justify-between px-4 py-4 text-white/80 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all text-base font-semibold"
              >
                <span>Use Cases</span>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${mobileUseCasesOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${mobileUseCasesOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pl-4 py-2 space-y-1">
                  <Link
                    href="/financial"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all"
                  >
                    <FontAwesomeIcon icon={faChartLine} className="text-orange-500 w-4 h-4" />
                    <span>Financial</span>
                  </Link>
                  <Link
                    href="/healthcare"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all"
                  >
                    <FontAwesomeIcon icon={faHospital} className="text-purple-400 w-4 h-4" />
                    <span>Healthcare</span>
                  </Link>
                  <Link
                    href="/law-firms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all"
                  >
                    <FontAwesomeIcon icon={faGavel} className="text-orange-400 w-4 h-4" />
                    <span>Law Firms</span>
                  </Link>
                  <Link
                    href="/logistics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all"
                  >
                    <FontAwesomeIcon icon={faTruck} className="text-purple-500 w-4 h-4" />
                    <span>Logistics</span>
                  </Link>
                  <Link
                    href="/real-estate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 text-white/70 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all"
                  >
                    <FontAwesomeIcon icon={faHouse} className="text-orange-500 w-4 h-4" />
                    <span>Real Estate</span>
                  </Link>
                </div>
              </div>
            </div>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 text-white/80 hover:text-white hover:bg-purple-600/10 rounded-lg transition-all text-base font-semibold"
            >
              About Us
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '#demo-form';
              }}
              className="w-full mt-4 py-4 px-6 bg-gradient-to-r from-purple-600 to-orange-500 text-white font-bold rounded-xl transition-all hover:shadow-[0_8px_30px_rgba(139,92,246,0.5)] uppercase tracking-wider"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
