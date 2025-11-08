'use client';

import { useState, useEffect } from 'react';
import DemoForm from './DemoForm';
import Image from 'next/image';
import { useTheme } from '@/lib/ThemeContext';
import { DynamicGradient, DynamicTextGradient } from './DynamicTheme';

const industryHeadlines = [
  {
    industry: 'General',
    title: 'Turn Cold Leads Into',
    subtitle: 'In 13 Seconds',
    description: 'AI-powered omnichannel automation that reactivates 50% of dead leads and increases conversions by',
    stat: '391%'
  },
  {
    industry: 'Healthcare',
    title: 'Patient Follow-Ups That',
    subtitle: 'In 13 Seconds',
    description: 'AI-powered appointment reminders and patient engagement that reduces no-shows by',
    stat: '67%'
  },
  {
    industry: 'Law Firms',
    title: 'Convert Consultations Into',
    subtitle: 'In 13 Seconds',
    description: 'AI-powered client intake and case management that increases client retention by',
    stat: '85%'
  },
  {
    industry: 'Real Estate',
    title: 'Turn Property Leads Into',
    subtitle: 'In 13 Seconds',
    description: 'AI-powered showing requests and buyer engagement that closes deals',
    stat: '3x Faster'
  }
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % industryHeadlines.length);
        setIsTransitioning(false);
      }, 500); // Half second fade out, then change content
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const current = industryHeadlines[currentIndex];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
      {/* Animated Background Gradients - TRON Style */}
      <div className="absolute inset-0 bg-black" />

      {/* Moving gradient orbs */}
      <div 
        className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow opacity-20"
        style={{ backgroundColor: theme.primary.main }}
      />
      <div 
        className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slower opacity-20"
        style={{ backgroundColor: theme.secondary.main }}
      />
      <DynamicGradient
        direction="to-r"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full blur-3xl animate-spin-slow opacity-10"
      >
        <div className="w-full h-full" />
      </DynamicGradient>

      {/* Grid overlay - cyberpunk style */}
      <div 
        className="absolute inset-0 bg-[size:50px_50px]"
        style={{
          backgroundImage: `linear-gradient(${theme.primary.main}08 1px, transparent 1px), linear-gradient(90deg, ${theme.primary.main}08 1px, transparent 1px)`
        }}
      />

      {/* Diagonal moving gradient lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div 
          className="absolute w-full h-px top-1/4 animate-scan-horizontal"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${theme.primary.main}, transparent)`
          }}
        />
        <div 
          className="absolute w-full h-px top-1/2 animate-scan-horizontal-reverse"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${theme.secondary.main}, transparent)`
          }}
        />
        <div 
          className="absolute w-full h-px top-3/4 animate-scan-horizontal-slow"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent, ${theme.primary.main}, transparent)`
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          {/* Logo */}
          <div className="mb-12 flex flex-col items-center">
            <Image
              src="/AIVI-LOGO-W.png"
              alt="AIVI"
              width={400}
              height={167}
              priority
              className="h-24 md:h-32 w-auto mb-6 drop-shadow-2xl"
            />
            <div className="h-px w-48" style={{
              backgroundImage: `linear-gradient(90deg, transparent, ${theme.primary.main}, transparent)`
            }} />
          </div>

          {/* Main Headline - ROTATING with smooth transition */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              {current.title}{' '}
              <DynamicTextGradient className="inline-block animate-gradient-x" variant="secondary-primary">
                Revenue
              </DynamicTextGradient>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                {current.subtitle}
              </span>
            </h1>

            {/* Sub-headline - ROTATING with smooth transition */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              {current.description}
              <br className="hidden md:block" />
              <span className="font-bold" style={{ color: theme.secondary.main }}>{current.stat}</span>
            </p>
          </div>

          {/* Industry Indicator Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industryHeadlines.map((item, index) => (
              index === currentIndex ? (
                <DynamicGradient
                  key={item.industry}
                  as="button"
                  onClick={() => setCurrentIndex(index)}
                  direction="to-r"
                  variant="secondary-primary"
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 text-white scale-110"
                >
                  {item.industry}
                </DynamicGradient>
              ) : (
                <button
                  key={item.industry}
                  onClick={() => setCurrentIndex(index)}
                  className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80"
                >
                  {item.industry}
                </button>
              )
            ))}
          </div>

          {/* ROI Stats - Sleek cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <StatCard number="391%" label="Conversion Increase" color="primary" />
            <StatCard number="50%" label="Dead Leads Revived" color="secondary" />
            <StatCard number="13s" label="Response Time" color="primary" />
          </div>

          {/* Key Features - NO EMOJIS, sleek icons */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FeaturePill text="AI Voice" />
            <FeaturePill text="SMS Automation" />
            <FeaturePill text="Email Campaigns" />
            <FeaturePill text="Document AI" />
            <FeaturePill text="CRM Integration" />
            <FeaturePill text="Agent Coaching" />
            <FeaturePill text="Secure PII" />
          </div>
        </div>

        {/* Demo Form */}
        <DemoForm />

        {/* Trust Indicators - Sleek */}
        <div className="mt-16 text-center">
          <p className="text-sm text-white/40 mb-4 uppercase tracking-wider">Trusted Globally</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm font-medium text-white/60">
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

interface StatCardProps {
  number: string;
  label: string;
  color: 'primary' | 'secondary';
}

function StatCard({ number, label, color }: StatCardProps) {
  return (
    <DynamicGradient
      direction="to-br"
      variant={color === 'primary' ? 'primary-only' : 'secondary-only'}
      className="relative p-6 rounded-xl border border-white/10 backdrop-blur-sm min-w-[140px] group hover:scale-105 transition-transform"
    >
      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-black text-white mb-1">{number}</div>
        <div className="text-xs text-white/80 uppercase tracking-wider">{label}</div>
      </div>
    </DynamicGradient>
  );
}

function FeaturePill({ text }: { text: string }) {
  const { theme } = useTheme();
  
  return (
    <span 
      className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 transition-all cursor-default"
      style={{
        borderColor: `${theme.primary.main}00`,
        '--hover-border': `${theme.primary.main}80`
      } as React.CSSProperties}
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${theme.primary.main}80`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
    >
      {text}
    </span>
  );
}

function TrustBadge({ text }: { text: string }) {
  const { theme } = useTheme();
  
  return (
    <span 
      className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 transition-colors"
      onMouseEnter={(e) => e.currentTarget.style.borderColor = `${theme.primary.main}50`}
      onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
    >
      {text}
    </span>
  );
}
