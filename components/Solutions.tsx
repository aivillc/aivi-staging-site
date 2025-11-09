'use client';

import { useState } from 'react';

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<'saas' | 'managed' | null>(null);

  return (
    <section id="solutions" className="relative py-24 px-6 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black mb-6">
            Choose Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
              Implementation Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you want full control or turnkey deployment, we've got you covered
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* SaaS Platform - Green to Blue */}
          <div 
            className="relative group"
            onMouseEnter={() => setHoveredCard('saas')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Coming Soon Badge - Top Center */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 rounded-full blur-md opacity-50 animate-pulse" />
                <div className="relative px-6 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-black rounded-full shadow-xl uppercase tracking-wider">
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br from-green-500 to-blue-500 rounded-3xl blur-xl transition-all duration-500 ${
              hoveredCard === 'saas' ? 'opacity-30' : 'opacity-0'
            }`} />
            
            <div className="relative h-full p-8 bg-white border-2 border-gray-200 hover:border-green-500/50 rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden">

              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-blue-500" />
              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500 transition-all duration-500 ${
                hoveredCard === 'saas' ? 'h-full' : 'h-0'
              }`} />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-300 ${hoveredCard === 'saas' ? '-translate-y-2' : 'translate-y-0'}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black mb-3">SaaS Platform</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Self-service platform for teams who want full control and flexibility
              </p>

              <div className="space-y-3 mb-8">
                <Feature text="Complete platform access" />
                <Feature text="Drag-and-drop workflow builder" />
                <Feature text="Pre-built templates & integrations" />
                <Feature text="Real-time analytics dashboard" />
                <Feature text="API access for custom builds" />
                <Feature text="Community support + documentation" />
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-3 font-bold uppercase tracking-wider">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Technical teams" gradient="from-green-500 to-blue-500" />
                  <Tag text="Iterative testing" gradient="from-green-500 to-blue-500" />
                  <Tag text="Custom workflows" gradient="from-green-500 to-blue-500" />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider text-sm">
                Explore Platform
              </button>
            </div>
          </div>

          {/* Managed Service - Purple to Orange */}
          <div 
            className="relative group"
            onMouseEnter={() => setHoveredCard('managed')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="px-6 py-2 bg-gradient-to-r from-purple-500 to-orange-500 text-white text-xs font-black rounded-full uppercase tracking-wider shadow-xl">
                Most Popular
              </div>
            </div>

            {/* Glow Effect */}
            <div className={`absolute -inset-1 bg-gradient-to-br from-purple-500 to-orange-500 rounded-3xl blur-xl transition-all duration-500 ${
              hoveredCard === 'managed' ? 'opacity-30' : 'opacity-10'
            }`} />
            
            <div className="relative h-full p-8 bg-white border-2 border-purple-500/30 hover:border-purple-500 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden">
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500" />
              <div className={`absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-purple-500 to-orange-500 transition-all duration-500 ${
                hoveredCard === 'managed' ? 'h-full' : 'h-0'
              }`} />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-300 ${hoveredCard === 'managed' ? '-translate-y-2' : 'translate-y-0'}`}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-orange-500 flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black mb-3">Managed Service</h3>
              <p className="text-gray-600 mb-8 text-lg">
                Turnkey solution with white-glove implementation and optimization
              </p>

              <div className="space-y-3 mb-8">
                <Feature text="Dedicated account manager" highlight />
                <Feature text="Custom workflow design & setup" highlight />
                <Feature text="Complete integration handling" highlight />
                <Feature text="Ongoing optimization & A/B testing" highlight />
                <Feature text="24/7 monitoring & support" highlight />
                <Feature text="Human call center coaching" highlight />
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-3 font-bold uppercase tracking-wider">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Enterprise teams" gradient="from-purple-500 to-orange-500" />
                  <Tag text="Fast deployment" gradient="from-purple-500 to-orange-500" />
                  <Tag text="Complex integrations" gradient="from-purple-500 to-orange-500" />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl uppercase tracking-wider text-sm">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-3 group">
      <div className="flex items-center gap-3 flex-1">
        <span className={`font-black text-lg transition-all ${
          highlight 
            ? 'text-transparent bg-gradient-to-r from-purple-500 to-orange-500 bg-clip-text' 
            : 'text-transparent bg-gradient-to-r from-orange-500 to-purple-500 bg-clip-text'
        }`}>✓</span>
        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{text}</span>
      </div>
    </div>
  );
}

function Tag({ text, gradient }: { text: string; gradient?: string }) {
  return (
    <span className={`px-4 py-2 text-xs font-bold rounded-full border-2 border-white/20 bg-gradient-to-r ${gradient || 'from-purple-500 to-orange-500'} text-white transition-all hover:scale-105 hover:border-white/40`}>
      {text}
    </span>
  );
}

interface UseCaseCardProps {
  industry: string;
  useCases: string[];
  gradient: string;
}

function UseCaseCard({ industry, useCases, gradient }: UseCaseCardProps) {
  return (
    <div className="group relative p-6 bg-white border-2 border-gray-200 hover:border-purple-500/50 rounded-2xl transition-all hover:shadow-xl overflow-hidden">
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${gradient}`} />
      <div className={`absolute top-0 left-0 h-0 w-1 bg-gradient-to-b ${gradient} group-hover:h-full transition-all duration-500`} />
      
      <h4 className="text-xl font-black text-black mb-4">{industry}</h4>
      <ul className="space-y-3">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start gap-3 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
            <span className={`bg-gradient-to-r ${gradient} text-transparent bg-clip-text font-black mt-0.5`}>•</span>
            {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}
