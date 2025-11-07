'use client';

import DemoForm from './DemoForm';
import Image from 'next/image';

export default function Hero() {
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

          {/* Main Headline - BADASS */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
            Turn Cold Leads Into{' '}
            <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
              Revenue
            </span>
            <br />
            <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
              In 13 Seconds
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
            AI-powered omnichannel automation that reactivates 50% of dead leads
            <br className="hidden md:block" />
            and increases conversions by{' '}
            <span className="text-orange-500 font-bold">391%</span>
          </p>

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
  const gradient = color === 'purple'
    ? 'from-purple-600 to-purple-800'
    : 'from-orange-500 to-orange-700';

  return (
    <div className={`relative p-6 bg-gradient-to-br ${gradient} rounded-xl border border-white/10 backdrop-blur-sm min-w-[140px] group hover:scale-105 transition-transform`}>
      <div className="absolute inset-0 bg-white/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative">
        <div className="text-4xl md:text-5xl font-black text-white mb-1">{number}</div>
        <div className="text-xs text-white/80 uppercase tracking-wider">{label}</div>
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
