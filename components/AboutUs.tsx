'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faUsers, faLightbulb, faAward, faHandshake, faChartLine } from '@fortawesome/free-solid-svg-icons';

export default function AboutUs() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: faRocket,
      title: 'Innovation First',
      description: 'We push the boundaries of AI technology to deliver cutting-edge solutions that transform how businesses engage with customers.'
    },
    {
      icon: faUsers,
      title: 'Customer Obsessed',
      description: 'Every decision we make is driven by our commitment to delivering exceptional value and results for our clients.'
    },
    {
      icon: faLightbulb,
      title: 'Intelligent Automation',
      description: 'We believe AI should augment human capabilities, not replace them. Our solutions empower teams to focus on what matters most.'
    },
    {
      icon: faHandshake,
      title: 'Trust & Transparency',
      description: 'We build lasting partnerships through honest communication, reliable technology, and proven results.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Businesses Transformed' },
    { value: '10M+', label: 'Customer Interactions' },
    { value: '391%', label: 'Avg. Conversion Increase' },
    { value: '24/7', label: 'AI-Powered Support' }
  ];

  const team = [
    {
      role: 'Leadership',
      description: 'Former executives from Amazon, Five9, and Cisco bringing decades of experience in AI, automation, and customer engagement.',
      color: 'purple' as const
    },
    {
      role: 'Engineering',
      description: 'World-class AI researchers and engineers building the next generation of intelligent automation platforms.',
      color: 'teal' as const
    },
    {
      role: 'Customer Success',
      description: 'Dedicated team ensuring every client achieves measurable results and ROI from day one.',
      color: 'purple' as const
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 bg-black">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black" />
      <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full blur-3xl animate-pulse-slow" style={{ backgroundColor: 'rgba(14, 165, 233, 0.08)' }} />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slower" style={{ backgroundColor: 'rgba(20, 184, 166, 0.08)' }} />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(14,165,233,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div className="text-center mb-20 md:mb-28">
          <div className="inline-block mb-6 animate-fadeInUp">
            <div className="px-6 py-3 bg-gradient-to-r from-[rgba(14,165,233,0.1)] to-[rgba(20,184,166,0.1)] border-2 border-[rgba(14,165,233,0.2)] rounded-full shadow-[0_4px_20px_rgba(14,165,233,0.1)]">
              <span className="text-sm font-bold bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text uppercase tracking-widest">
                About AIVI
              </span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight animate-fadeInUp">
            Building the Future of{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
              AI-Powered Engagement
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed animate-fadeInUp">
            We're on a mission to transform how businesses connect with their customers through intelligent,
            human-like AI automation that drives real results.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 md:mb-28">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#0ea5e9]/50 transition-all duration-500 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-[#14b8a6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm md:text-base font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                Our{' '}
                <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
                  Story
                </span>
              </h2>
              <p className="text-lg text-white/70 leading-relaxed">
                Founded by veterans from Amazon, Five9, and Cisco, AIVI was born from a simple observation:
                businesses were losing millions in revenue due to slow response times and inefficient customer engagement.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We knew AI could solve this problem, but existing solutions were either too complex,
                too expensive, or simply didn't deliver real results. So we built AIVI—an intelligent
                automation platform that's powerful enough for enterprises yet simple enough for any business to deploy.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                Today, we're proud to help hundreds of businesses transform their customer engagement,
                reactivate dormant leads, and drive measurable growth through AI-powered automation.
              </p>
            </div>

            <div className="relative">
              <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl">
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/10 to-[#14b8a6]/10 rounded-3xl" />
                <div className="relative space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faAward} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Industry Recognition</h3>
                      <p className="text-white/60">Trusted by leading brands across financial services, healthcare, logistics, and real estate.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] rounded-xl flex items-center justify-center">
                      <FontAwesomeIcon icon={faChartLine} className="text-white text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                      <p className="text-white/60">Our clients see an average 391% increase in conversions and 50% reactivation of dormant leads.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
                Values
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="group relative p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#0ea5e9]/50 transition-all duration-500 hover:scale-[1.02]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-[#14b8a6]/5 rounded-2xl transition-opacity duration-500 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`} />
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#0ea5e9] to-[#14b8a6] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <FontAwesomeIcon icon={value.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-white/60 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 md:mb-28">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4">
              Our{' '}
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
                Team
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Experts from the world's leading tech companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="relative group p-8 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-[#0ea5e9]/50 transition-all duration-500 hover:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#0ea5e9]/5 to-[#14b8a6]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] rounded-full mb-4">
                    <span className="text-white font-bold text-sm uppercase tracking-wider">
                      {member.role}
                    </span>
                  </div>
                  <p className="text-white/70 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center p-12 md:p-16 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 rounded-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-transparent bg-clip-text">
              Customer Engagement?
            </span>
          </h2>
          <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses already using AIVI to drive growth through intelligent automation.
          </p>
          <a
            href="/#demo"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#0ea5e9] to-[#14b8a6] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(14,165,233,0.5)] hover:-translate-y-1 uppercase tracking-wider"
          >
            Get Started Today
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.4;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
