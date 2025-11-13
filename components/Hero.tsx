'use client';

import { useState } from 'react';
import DemoForm from './DemoForm';

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 py-20 overflow-hidden bg-black">
      {/* Animated Background Gradients - TRON Style */}
      <div className="absolute inset-0 bg-black" />

      {/* Moving gradient orbs */}
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: 'rgba(14, 165, 233, 0.15)' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slower" style={{ backgroundColor: 'rgba(20, 184, 166, 0.12)' }} />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl animate-spin-slow" style={{ background: 'linear-gradient(90deg, rgba(14, 165, 233, 0.08) 0%, transparent 50%, rgba(20, 184, 166, 0.08) 100%)' }} />

      {/* Grid overlay - cyberpunk style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Diagonal moving gradient lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-full h-px top-1/4 animate-scan-horizontal" style={{ background: 'linear-gradient(90deg, transparent 0%, #0ea5e9 50%, transparent 100%)' }} />
        <div className="absolute w-full h-px top-1/2 animate-scan-horizontal-reverse" style={{ background: 'linear-gradient(90deg, transparent 0%, #14b8a6 50%, transparent 100%)' }} />
        <div className="absolute w-full h-px top-3/4 animate-scan-horizontal-slow" style={{ background: 'linear-gradient(90deg, transparent 0%, #0ea5e9 50%, transparent 100%)' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full pt-[15vh]">
        <div className="text-center mb-16">
          {/* Main Headline - Static */}
          <div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-10 tracking-tight" style={{ color: '#e0fbfc' }}>
              <span className="inline-block animate-fadeInUp">Turn Cold Leads Into</span>{' '}
              <span className="inline-block text-transparent bg-clip-text animate-gradient-x bg-[length:200%_auto]" style={{
                backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 50%, #0ea5e9 100%)',
                filter: 'drop-shadow(0 0 30px rgba(14, 165, 233, 0.5))'
              }}>
                Revenue
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide" style={{ color: 'rgba(224, 251, 252, 0.5)' }}>
                In 13 Seconds
              </span>
            </h1>

            {/* Sub-headline - Static */}
            <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-12 leading-relaxed font-light tracking-wide" style={{ color: 'rgba(224, 251, 252, 0.6)' }}>
              AI-powered omnichannel automation that reactivates 50% of dead leads and increases conversions by
              <br className="hidden md:block" />
              <span className="font-bold px-3 py-1 rounded-lg border" style={{
                color: '#14b8a6',
                backgroundColor: 'rgba(20, 184, 166, 0.1)',
                borderColor: 'rgba(20, 184, 166, 0.3)'
              }}>391%</span>
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 animate-fadeInUp">
          <button
            onClick={() => {
              const demoForm = document.getElementById('demo-form');
              if (demoForm) {
                demoForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }
            }}
            className="relative px-10 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(14,165,233,0.6)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group text-lg"
          >
            <span className="relative z-10">Try AIVI</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#14b8a6] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </button>

          <button
            onClick={() => {
              window.location.href = 'tel:+1-555-000-0000';
            }}
            className="relative px-10 py-4 bg-transparent border-2 border-white/80 text-white font-bold rounded-xl transition-all duration-400 hover:bg-white hover:text-black hover:shadow-[0_8px_30px_rgba(255,255,255,0.4)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group text-lg"
          >
            <span className="relative z-10">Call Me</span>
          </button>
        </div>

        {/* Demo Form */}
        <div id="demo-form" className="animate-fadeInUp">
          <DemoForm />
        </div>

        {/* Key Features - NO EMOJIS, sleek icons */}
        <div className="flex flex-wrap justify-center gap-3 mt-16 mb-16 animate-fadeInUp">
          <FeaturePill text="AI Voice" />
          <FeaturePill text="SMS Automation" />
          <FeaturePill text="Email Campaigns" />
          <FeaturePill text="Document AI" />
          <FeaturePill text="CRM Integration" />
          <FeaturePill text="Agent Coaching" />
          <FeaturePill text="Secure PII" />
        </div>

        {/* Trust Indicators - Sleek */}
        <div className="text-center animate-fadeInUp">
          <p className="text-sm text-white/30 mb-5 uppercase tracking-widest font-semibold">Trusted Globally</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/50">
            <TrustBadge text="Trucking & Logistics" />
            <TrustBadge text="Financial Services" />
            <TrustBadge text="Insurance" />
            <TrustBadge text="Healthcare" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.15;
            transform: scale(1);
          }
          50% {
            opacity: 0.25;
            transform: scale(1.15);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @keyframes scan-horizontal {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        @keyframes scan-horizontal-reverse {
          0% {
            transform: translateY(100vh);
          }
          100% {
            transform: translateY(-100vh);
          }
        }

        @keyframes scan-horizontal-slow {
          0% {
            transform: translateY(-100vh);
          }
          100% {
            transform: translateY(100vh);
          }
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-scan-horizontal {
          animation: scan-horizontal 8s linear infinite;
        }

        .animate-scan-horizontal-reverse {
          animation: scan-horizontal-reverse 10s linear infinite;
        }

        .animate-scan-horizontal-slow {
          animation: scan-horizontal-slow 12s linear infinite;
        }
      `}</style>
    </section>
  );
}

function FeaturePill({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className="px-6 py-3 backdrop-blur-sm border rounded-full text-sm font-semibold hover:scale-105 transition-all duration-400 cursor-pointer"
      style={{
        backgroundColor: isHovered ? 'rgba(14, 165, 233, 0.15)' : 'rgba(255, 255, 255, 0.05)',
        borderColor: isHovered ? 'rgba(14, 165, 233, 0.5)' : 'rgba(255, 255, 255, 0.1)',
        color: isHovered ? '#e0fbfc' : 'rgba(224, 251, 252, 0.8)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </button>
  );
}

function TrustBadge({ text }: { text: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <span
      className="px-5 py-2.5 backdrop-blur-sm rounded-lg border transition-all duration-400 font-medium"
      style={{
        backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
        borderColor: isHovered ? 'rgba(61, 90, 128, 0.5)' : 'rgba(255, 255, 255, 0.1)',
        color: isHovered ? 'rgba(224, 251, 252, 0.8)' : 'rgba(224, 251, 252, 0.5)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}
