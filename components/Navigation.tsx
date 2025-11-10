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
          ? 'backdrop-blur-2xl border-b shadow-lg'
          : 'backdrop-blur-lg'
      }`}
      style={{
        backgroundColor: isScrolled ? 'rgba(15, 20, 28, 0.98)' : 'rgba(15, 20, 28, 0.8)',
        borderBottomColor: isScrolled ? 'rgba(61, 90, 128, 0.3)' : 'transparent',
        boxShadow: isScrolled ? '0 8px 32px rgba(61, 90, 128, 0.15)' : 'none'
      }}
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
              className="h-10 md:h-16 w-auto transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{
                filter: 'drop-shadow(0 0 12px rgba(61, 90, 128, 0.5))'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="relative group py-2 transition-all duration-300"
              style={{ color: 'rgba(224, 251, 252, 0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e0fbfc'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)'}
            >
              <span className="text-sm font-semibold tracking-wide">Features</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)' }} />
            </a>
            <a
              href="#solutions"
              className="relative group py-2 transition-all duration-300"
              style={{ color: 'rgba(224, 251, 252, 0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e0fbfc'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)'}
            >
              <span className="text-sm font-semibold tracking-wide">Solutions</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)' }} />
            </a>
            <a
              href="#integrations"
              className="relative group py-2 transition-all duration-300"
              style={{ color: 'rgba(224, 251, 252, 0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e0fbfc'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)'}
            >
              <span className="text-sm font-semibold tracking-wide">Integrations</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)' }} />
            </a>

            {/* Use Cases Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button
                className="relative flex items-center gap-2 py-2 transition-all duration-300 text-sm font-semibold tracking-wide"
                style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#e0fbfc'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)'}
              >
                Use Cases
                <svg
                  className="w-4 h-4 transition-all duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  style={{
                    transform: useCasesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    color: useCasesOpen ? '#98c1d9' : 'rgba(224, 251, 252, 0.5)'
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)' }} />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 pt-3 w-52 transition-all duration-400 ease-out ${useCasesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-3 pointer-events-none'}`}>
                <div className="backdrop-blur-2xl rounded-xl shadow-lg overflow-hidden" style={{ backgroundColor: 'rgba(15, 20, 28, 0.98)', borderWidth: '1px', borderColor: 'rgba(61, 90, 128, 0.3)', boxShadow: '0 16px 48px rgba(0, 0, 0, 0.6)' }}>
                <Link
                  href="/financial"
                  className="block px-5 py-3.5 transition-all duration-300 text-sm font-medium group"
                  style={{
                    color: 'rgba(224, 251, 252, 0.75)',
                    borderBottom: '1px solid rgba(61, 90, 128, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e0fbfc';
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(61, 90, 128, 0.2) 0%, transparent 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(224, 251, 252, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faChartLine} className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#ee6c4d' }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Financial</span>
                  </span>
                </Link>
                <Link
                  href="/healthcare"
                  className="block px-5 py-3.5 transition-all duration-300 text-sm font-medium group"
                  style={{
                    color: 'rgba(224, 251, 252, 0.75)',
                    borderBottom: '1px solid rgba(61, 90, 128, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e0fbfc';
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(61, 90, 128, 0.2) 0%, transparent 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(224, 251, 252, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faHospital} className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#98c1d9' }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Healthcare</span>
                  </span>
                </Link>
                <Link
                  href="/law-firms"
                  className="block px-5 py-3.5 transition-all duration-300 text-sm font-medium group"
                  style={{
                    color: 'rgba(224, 251, 252, 0.75)',
                    borderBottom: '1px solid rgba(61, 90, 128, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e0fbfc';
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(61, 90, 128, 0.2) 0%, transparent 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(224, 251, 252, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#00cc99' }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Law Firms</span>
                  </span>
                </Link>
                <Link
                  href="/logistics"
                  className="block px-5 py-3.5 transition-all duration-300 text-sm font-medium group"
                  style={{
                    color: 'rgba(224, 251, 252, 0.75)',
                    borderBottom: '1px solid rgba(61, 90, 128, 0.1)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e0fbfc';
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(61, 90, 128, 0.2) 0%, transparent 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(224, 251, 252, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faTruck} className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#3d5a80' }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Logistics</span>
                  </span>
                </Link>
                <Link
                  href="/real-estate"
                  className="block px-5 py-3.5 transition-all duration-300 text-sm font-medium group"
                  style={{
                    color: 'rgba(224, 251, 252, 0.75)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#e0fbfc';
                    e.currentTarget.style.background = 'linear-gradient(90deg, rgba(61, 90, 128, 0.2) 0%, transparent 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(224, 251, 252, 0.75)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  <span className="flex items-center gap-3">
                    <FontAwesomeIcon icon={faHouse} className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" style={{ color: '#ee6c4d' }} />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">Real Estate</span>
                  </span>
                </Link>
                </div>
              </div>
            </div>

            <a
              href="#about"
              className="relative group py-2 transition-all duration-300"
              style={{ color: 'rgba(224, 251, 252, 0.7)' }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#e0fbfc'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)'}
            >
              <span className="text-sm font-semibold tracking-wide">About Us</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-500 ease-out" style={{ background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)' }} />
            </a>

            <button
              onClick={() => window.location.href = '#demo-form'}
              className="relative px-7 py-3 text-sm font-bold rounded-xl transition-all duration-400 hover:-translate-y-1 uppercase tracking-wider overflow-hidden group"
              style={{
                background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)',
                color: '#e0fbfc',
                boxShadow: '0 8px 30px rgba(61, 90, 128, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 204, 153, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 90, 128, 0.3)'}
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400" style={{ background: 'linear-gradient(90deg, #00cc99 0%, #3d5a80 100%)' }} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden transition-all duration-300 hover:scale-110"
            style={{ color: '#e0fbfc' }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#98c1d9'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#e0fbfc'}
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
      <div className={`md:hidden fixed inset-0 top-[80px] backdrop-blur-2xl transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`} style={{ backgroundColor: 'rgba(15, 20, 28, 0.98)' }}>
        <div className="h-full overflow-y-auto px-6 py-8">
          <div className="space-y-1">
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 rounded-lg transition-all text-base font-semibold"
              style={{ color: 'rgba(224, 251, 252, 0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e0fbfc';
                e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(224, 251, 252, 0.8)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Features
            </a>
            <a
              href="#solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 rounded-lg transition-all text-base font-semibold"
              style={{ color: 'rgba(224, 251, 252, 0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e0fbfc';
                e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(224, 251, 252, 0.8)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Solutions
            </a>
            <a
              href="#integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 rounded-lg transition-all text-base font-semibold"
              style={{ color: 'rgba(224, 251, 252, 0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e0fbfc';
                e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(224, 251, 252, 0.8)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              Integrations
            </a>

            {/* Mobile Use Cases Dropdown */}
            <div>
              <button
                onClick={() => setMobileUseCasesOpen(!mobileUseCasesOpen)}
                className="w-full flex items-center justify-between px-4 py-4 rounded-lg transition-all text-base font-semibold"
                style={{ color: 'rgba(224, 251, 252, 0.8)', backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#e0fbfc';
                  e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(224, 251, 252, 0.8)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
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
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                    style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e0fbfc';
                      e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FontAwesomeIcon icon={faChartLine} className="w-4 h-4" style={{ color: '#ee6c4d' }} />
                    <span>Financial</span>
                  </Link>
                  <Link
                    href="/healthcare"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                    style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e0fbfc';
                      e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FontAwesomeIcon icon={faHospital} className="w-4 h-4" style={{ color: '#98c1d9' }} />
                    <span>Healthcare</span>
                  </Link>
                  <Link
                    href="/law-firms"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                    style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e0fbfc';
                      e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FontAwesomeIcon icon={faGavel} className="w-4 h-4" style={{ color: '#00cc99' }} />
                    <span>Law Firms</span>
                  </Link>
                  <Link
                    href="/logistics"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                    style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e0fbfc';
                      e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FontAwesomeIcon icon={faTruck} className="w-4 h-4" style={{ color: '#3d5a80' }} />
                    <span>Logistics</span>
                  </Link>
                  <Link
                    href="/real-estate"
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all"
                    style={{ color: 'rgba(224, 251, 252, 0.7)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#e0fbfc';
                      e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'rgba(224, 251, 252, 0.7)';
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    <FontAwesomeIcon icon={faHouse} className="w-4 h-4" style={{ color: '#ee6c4d' }} />
                    <span>Real Estate</span>
                  </Link>
                </div>
              </div>
            </div>

            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-4 py-4 rounded-lg transition-all text-base font-semibold"
              style={{ color: 'rgba(224, 251, 252, 0.8)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#e0fbfc';
                e.currentTarget.style.backgroundColor = 'rgba(61, 90, 128, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(224, 251, 252, 0.8)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }}
            >
              About Us
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.location.href = '#demo-form';
              }}
              className="w-full mt-4 py-4 px-6 font-bold rounded-xl transition-all uppercase tracking-wider"
              style={{
                background: 'linear-gradient(90deg, #3d5a80 0%, #00cc99 100%)',
                color: '#e0fbfc',
                boxShadow: '0 8px 30px rgba(61, 90, 128, 0.3)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 204, 153, 0.5)'}
              onMouseLeave={(e) => e.currentTarget.style.boxShadow = '0 8px 30px rgba(61, 90, 128, 0.3)'}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
