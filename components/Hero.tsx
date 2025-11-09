'use client';

import { useState, useEffect } from 'react';
import DemoForm from './DemoForm';
import Image from 'next/image';

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
      <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl animate-pulse-slower" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/10 via-transparent to-orange-500/10 rounded-full blur-3xl animate-spin-slow" />

      {/* Grid overlay - cyberpunk style */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

      {/* Diagonal moving gradient lines */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/4 animate-scan-horizontal" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent top-1/2 animate-scan-horizontal-reverse" />
        <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-3/4 animate-scan-horizontal-slow" />
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
            <div className="h-px w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Main Headline - ROTATING with smooth transition */}
          <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'}`}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              {current.title}{' '}
              <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
                Revenue
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                {current.subtitle}
              </span>
            </h1>

            {/* Sub-headline - ROTATING with smooth transition */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              {current.description}
              <br className="hidden md:block" />
              <span className="text-orange-500 font-bold">{current.stat}</span>
            </p>
          </div>

          {/* Industry Indicator Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {industryHeadlines.map((item, index) => (
              <button
                key={item.industry}
                onClick={() => setCurrentIndex(index)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-orange-500 to-purple-500 text-white scale-110'
                    : 'bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/80'
                }`}
              >
                {item.industry}
              </button>
            ))}
          </div>

          {/* ROI Stats - Sleek cards */}
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <StatCard number="391%" label="Conversion Increase" color="purple" />
            <StatCard number="50%" label="Dead Leads Revived" color="orange" />
            <StatCard number="13s" label="Response Time" color="purple" />
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
  color: 'purple' | 'orange';
}

function StatCard({ number, label, color }: StatCardProps) {
  const gradientBorder = color === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-orange-500 to-orange-600';
  
  const gradientText = color === 'purple'
    ? 'from-purple-400 to-purple-600'
    : 'from-orange-400 to-orange-600';

  return (
    <div className="relative group">
      {/* Glow effect on hover */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${gradientBorder} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`} />
      
      {/* Card */}
      <div className="relative px-8 py-6 bg-black/80 backdrop-blur-sm border border-white/10 rounded-2xl min-w-[160px] hover:border-white/20 transition-all duration-300">
        {/* Top gradient line */}
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${gradientBorder}`} />
        
        <div className="text-center">
          <div className={`text-5xl md:text-6xl font-black bg-gradient-to-br ${gradientText} text-transparent bg-clip-text mb-2`}>
            {number}
          </div>
          <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
}

function FeaturePill({ text }: { text: string }) {
  return (
    <span className="px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-sm font-medium text-white/90 hover:bg-white/10 hover:border-purple-500/50 transition-all cursor-default">
      {text}
    </span>
  );
}

function TrustBadge({ text }: { text: string }) {
  return (
    <span className="px-4 py-2 bg-white/5 rounded-lg border border-white/10 hover:border-purple-500/30 transition-colors">
      {text}
    </span>
  );
}
