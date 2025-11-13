'use client';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState<'saas' | 'managed' | null>(null);

  return (
    <section id="solutions" className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text" style={{
              backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)'
            }}>
              Implementation Path
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {/* SaaS Platform - Light Blue to Teal */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredCard('saas')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Coming Soon Badge - Top Center */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-full blur-md opacity-50 animate-pulse"
                  style={{ backgroundImage: 'linear-gradient(90deg, #98c1d9 0%, #14b8a6 100%)' }}
                />
                <div
                  className="relative px-6 py-2 text-xs font-black rounded-full shadow-xl uppercase tracking-wider"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #98c1d9 0%, #14b8a6 100%)',
                    color: '#0f141c'
                  }}
                >
                  Coming Soon
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute -inset-1 rounded-3xl blur-xl transition-all duration-500 ${
                hoveredCard === 'saas' ? 'opacity-30' : 'opacity-0'
              }`}
              style={{ backgroundImage: 'linear-gradient(135deg, #98c1d9 0%, #14b8a6 100%)' }}
            />

            <div className="relative h-full p-8 bg-white border-2 border-gray-200 rounded-3xl transition-all duration-500 shadow-lg hover:shadow-2xl overflow-hidden" style={{
              borderColor: hoveredCard === 'saas' ? 'rgba(152, 193, 217, 0.5)' : undefined
            }}>

              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1" style={{
                backgroundImage: 'linear-gradient(90deg, #98c1d9 0%, #14b8a6 100%)'
              }} />
              <div
                className={`absolute top-0 left-0 w-1 transition-all duration-500 ${
                  hoveredCard === 'saas' ? 'h-full' : 'h-0'
                }`}
                style={{ backgroundImage: 'linear-gradient(180deg, #98c1d9 0%, #14b8a6 100%)' }}
              />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-300 ${hoveredCard === 'saas' ? '-translate-y-2' : 'translate-y-0'}`}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #98c1d9 0%, #14b8a6 100%)',
                    color: '#0f141c'
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <Tag text="Technical teams" gradient="lightblue-teal" />
                  <Tag text="Iterative testing" gradient="lightblue-teal" />
                  <Tag text="Custom workflows" gradient="lightblue-teal" />
                </div>
              </div>

              <button
                className="w-full py-4 px-6 font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-lg uppercase tracking-wider text-sm"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #98c1d9 0%, #14b8a6 100%)',
                  color: '#0f141c'
                }}
              >
                Explore Platform
              </button>
            </div>
          </div>

          {/* Managed Service - Blue to Teal */}
          <div
            className="relative group"
            onMouseEnter={() => setHoveredCard('managed')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
              <div
                className="px-6 py-2 text-xs font-black rounded-full uppercase tracking-wider shadow-xl"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)',
                  color: '#e0fbfc'
                }}
              >
                Most Popular
              </div>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute -inset-1 rounded-3xl blur-xl transition-all duration-500 ${
                hoveredCard === 'managed' ? 'opacity-30' : 'opacity-10'
              }`}
              style={{ backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)' }}
            />

            <div className="relative h-full p-8 bg-white border-2 rounded-3xl transition-all duration-500 shadow-xl hover:shadow-2xl overflow-hidden" style={{
              borderColor: hoveredCard === 'managed' ? '#0ea5e9' : 'rgba(61, 90, 128, 0.3)'
            }}>
              {/* Animated Border Gradient */}
              <div className="absolute top-0 left-0 w-full h-1" style={{
                backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)'
              }} />
              <div
                className={`absolute top-0 left-0 w-1 transition-all duration-500 ${
                  hoveredCard === 'managed' ? 'h-full' : 'h-0'
                }`}
                style={{ backgroundImage: 'linear-gradient(180deg, #0ea5e9 0%, #14b8a6 100%)' }}
              />

              {/* Floating Icon */}
              <div className={`mb-6 transition-all duration-300 ${hoveredCard === 'managed' ? '-translate-y-2' : 'translate-y-0'}`}>
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
                  style={{
                    backgroundImage: 'linear-gradient(135deg, #0ea5e9 0%, #14b8a6 100%)',
                    color: '#e0fbfc'
                  }}
                >
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <Tag text="Enterprise teams" gradient="blue-teal" />
                  <Tag text="Fast deployment" gradient="blue-teal" />
                  <Tag text="Complex integrations" gradient="blue-teal" />
                </div>
              </div>

              <button
                onClick={() => {
                  document.getElementById('demo-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full py-4 px-6 font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl uppercase tracking-wider text-sm"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #0ea5e9 0%, #14b8a6 100%)',
                  color: '#e0fbfc'
                }}
              >
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
  const iconBgGradient = highlight
    ? 'from-[#0ea5e9] to-[#14b8a6]'
    : 'from-[#14b8a6] to-[#98c1d9]';

  return (
    <div className="flex items-center gap-3 group">
      <div className="flex items-center gap-3 flex-1">
        <div className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${iconBgGradient} flex items-center justify-center`}>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-white text-xs font-bold"
          />
        </div>
        <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors">{text}</span>
      </div>
    </div>
  );
}

function Tag({ text, gradient }: { text: string; gradient?: string }) {
  const gradientStyle = gradient === 'lightblue-teal'
    ? 'linear-gradient(90deg, #98c1d9 0%, #14b8a6 100%)'
    : 'linear-gradient(90deg, #14b8a6 0%, #0ea5e9 100%)'; // blue-teal (reversed)

  const textColor = gradient === 'lightblue-teal' ? '#0f141c' : '#e0fbfc';

  return (
    <span
      className="inline-block px-4 py-2 text-xs font-bold rounded-full transition-all hover:scale-105"
      style={{
        backgroundImage: gradientStyle,
        color: textColor,
        border: '2px solid rgba(255, 255, 255, 0.2)'
      }}
    >
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
