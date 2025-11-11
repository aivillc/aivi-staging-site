'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer id="contact" className="relative py-12 sm:py-14 md:py-16 px-4 sm:px-6 bg-black border-t" style={{ borderColor: 'rgba(14, 165, 233, 0.2)' }}>
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Animated gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 opacity-50 animate-shimmer" style={{
          backgroundImage: 'linear-gradient(90deg, transparent 0%, #0ea5e9 50%, transparent 100%)'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16 pb-12 sm:pb-14 md:pb-16 border-b border-white/10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6" style={{ color: '#e0f2fe' }}>
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)'
            }}>
              Customer Experience?
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-8 max-w-2xl mx-auto" style={{ color: 'rgba(224, 242, 254, 0.6)' }}>
            Start with a live demo or speak with our team to see how AIVI can drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 sm:py-4 font-black rounded-lg transition-all transform hover:scale-105 shadow-2xl uppercase tracking-wider text-sm sm:text-base" style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)',
              color: '#e0f2fe'
            }}>
              Start Free Demo
            </button>
            <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white/5 hover:bg-white/10 font-bold rounded-lg transition-all border-2 text-sm sm:text-base" style={{
              borderColor: 'rgba(14, 165, 233, 0.5)',
              color: '#e0f2fe'
            }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#0ea5e9'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(14, 165, 233, 0.5)'}>
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-12">
          <div>
            <h4 className="text-sm sm:text-base text-white font-black mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base text-white font-black mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Trucking & Logistics
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Healthcare
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base text-white font-black mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm sm:text-base text-white font-black mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-[#0ea5e9] transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/AIVI-LOGO-W.png"
                alt="AIVI"
                width={100}
                height={42}
                className="h-8 w-auto"
              />
              <span className="text-white/40 text-sm">
                © 2025 AIVI. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="/privacy" className="text-white/50 hover:text-[#0ea5e9] transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-white/50 hover:text-[#0ea5e9] transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-white/50 hover:text-[#0ea5e9] transition-colors text-sm">
                Security
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-white/40">
            <p>
              Powered by AIVI • Built by experts from Amazon, Five9 & Cisco
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
      `}</style>
    </footer>
  );
}
