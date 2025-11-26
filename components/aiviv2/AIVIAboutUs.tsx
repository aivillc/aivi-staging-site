'use client';

import { useState } from 'react';

const teamMembers = [
  {
    name: 'Sarah Chen',
    role: 'CEO & Co-Founder',
    image: '👩‍💼',
    bio: '15+ years in enterprise sales technology',
  },
  {
    name: 'Michael Rodriguez',
    role: 'CTO & Co-Founder',
    image: '👨‍💻',
    bio: 'Former AI lead at major tech companies',
  },
  {
    name: 'Emily Watson',
    role: 'Chief Product Officer',
    image: '👩‍🔬',
    bio: 'Product strategy expert with 12+ years experience',
  },
  {
    name: 'David Kim',
    role: 'VP of Engineering',
    image: '👨‍🔧',
    bio: 'Built scalable systems at Fortune 500 companies',
  },
];

const values = [
  {
    icon: '🎯',
    title: 'Customer First',
    description: 'Every decision we make starts with understanding and solving our customers\' real problems.',
  },
  {
    icon: '🚀',
    title: 'Innovation',
    description: 'We push boundaries and embrace cutting-edge technology to stay ahead of the curve.',
  },
  {
    icon: '🤝',
    title: 'Integrity',
    description: 'Transparency, honesty, and ethical practices guide everything we do.',
  },
  {
    icon: '💪',
    title: 'Excellence',
    description: 'We set high standards and continuously strive to exceed expectations.',
  },
];

const milestones = [
  { year: '2018', event: 'AIVI Founded', description: 'Started with a vision to revolutionize sales technology' },
  { year: '2019', event: '10K Users', description: 'Reached our first 10,000 active users milestone' },
  { year: '2021', event: 'Series A', description: 'Raised $25M to accelerate product development' },
  { year: '2022', event: '100K Companies', description: 'Serving over 100,000 companies worldwide' },
  { year: '2023', event: 'AI Innovation', description: 'Launched industry-leading AI-powered features' },
  { year: '2024', event: '500K Users', description: 'Crossed half a million users globally' },
];

export default function AIVIAboutUs() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);

  return (
    <div className="w-full bg-[#E8E5E0]">
      {/* Hero Section */}
      <section className="w-full px-6 py-20">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-20 text-center animate-[fadeInUp_0.6s_ease-out]">
          <div className="inline-block mb-6">
            <span className="text-[11px] font-bold tracking-[1.5px] text-[#666666] uppercase px-4 py-2 bg-[#E5FF00]/20 rounded-full">
              About AIVI
            </span>
          </div>
          <h1 className="text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-6 animate-[fadeInUp_0.8s_ease-out]">
            We're building the future of
            <br />
            <span className="relative inline-block">
              intelligent sales
              <span className="absolute bottom-2 left-0 w-full h-3 bg-[#E5FF00]/30 -z-10" />
            </span>
          </h1>
          <p className="text-[19px] leading-[1.6] text-[#333333] max-w-[800px] mx-auto mb-8 animate-[fadeInUp_1s_ease-out]">
            AIVI was born from a simple belief: sales teams deserve better tools. We combine cutting-edge AI
            with intuitive design to help businesses grow faster and smarter.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#F5F5F5] to-white hover:from-[#E5FF00]/10 hover:to-white transition-all duration-500 animate-[fadeInLeft_0.6s_ease-out]">
              <div className="absolute top-8 right-8 text-[80px] opacity-10 group-hover:opacity-20 transition-opacity">
                🎯
              </div>
              <h2 className="text-[36px] leading-[1.2] font-normal text-[#000000] mb-4 relative z-10">
                Our Mission
              </h2>
              <div className="w-16 h-1 bg-[#E5FF00] rounded-full mb-6" />
              <p className="text-[17px] leading-[1.6] text-[#666666] relative z-10">
                To empower every sales professional with AI-powered tools that eliminate busywork,
                amplify their strengths, and help them build meaningful customer relationships. We believe
                technology should enhance human connection, not replace it.
              </p>
            </div>

            {/* Vision */}
            <div className="group relative p-8 rounded-2xl bg-gradient-to-br from-[#F5F5F5] to-white hover:from-[#E5FF00]/10 hover:to-white transition-all duration-500 animate-[fadeInRight_0.6s_ease-out]">
              <div className="absolute top-8 right-8 text-[80px] opacity-10 group-hover:opacity-20 transition-opacity">
                🔮
              </div>
              <h2 className="text-[36px] leading-[1.2] font-normal text-[#000000] mb-4 relative z-10">
                Our Vision
              </h2>
              <div className="w-16 h-1 bg-[#E5FF00] rounded-full mb-6" />
              <p className="text-[17px] leading-[1.6] text-[#666666] relative z-10">
                A world where every business, regardless of size, has access to enterprise-grade sales
                intelligence. We envision a future where AI and human expertise work in perfect harmony
                to drive unprecedented growth and customer success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Our Core Values
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              The principles that guide our decisions and shape our culture
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredValue(index)}
                onMouseLeave={() => setHoveredValue(null)}
                className="group relative bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[48px] mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-[20px] font-semibold text-[#000000] mb-3">
                  {value.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#666666]">
                  {value.description}
                </p>
                <div className={`absolute inset-0 bg-[#E5FF00]/5 rounded-2xl transition-opacity duration-300 ${
                  hoveredValue === index ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Meet Our Leadership
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              Experienced leaders passionate about transforming sales technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
                className="group text-center animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-40 h-40 mx-auto rounded-2xl bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-[64px] group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-2xl">
                    {member.image}
                  </div>
                  <div className={`absolute inset-0 bg-[#E5FF00]/20 rounded-2xl transition-opacity duration-300 ${
                    hoveredMember === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
                <h3 className="text-[20px] font-semibold text-[#000000] mb-2 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-[14px] font-medium text-[#E5FF00] mb-3 uppercase tracking-wider">
                  {member.role}
                </p>
                <p className="text-[14px] text-[#666666] leading-[1.5]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="text-center mb-12 animate-[fadeInUp_0.6s_ease-out]">
            <h2 className="text-[48px] leading-[1.2] font-normal text-[#000000] mb-4">
              Our Journey
            </h2>
            <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto">
              Key milestones that shaped AIVI into what it is today
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#E5FF00] to-purple-500 hidden lg:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center gap-8 animate-[fadeInUp_0.6s_ease-out] ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="group inline-block bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-[#E5FF00] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                      <div className="text-[13px] font-bold text-[#E5FF00] mb-2 uppercase tracking-wider">
                        {milestone.year}
                      </div>
                      <h3 className="text-[24px] font-semibold text-[#000000] mb-2 group-hover:text-blue-600 transition-colors">
                        {milestone.event}
                      </h3>
                      <p className="text-[15px] text-[#666666]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#E5FF00] rounded-full border-4 border-white shadow-lg z-10 hover:scale-125 transition-transform cursor-pointer" />

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="w-full px-6 py-6">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-gradient-to-br from-[#000000] to-[#333333] rounded-3xl shadow-lg p-12 lg:p-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '500K+', label: 'Active Users' },
              { number: '275M+', label: 'Contact Records' },
              { number: '73M+', label: 'Companies' },
              { number: '150+', label: 'Countries' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer animate-[fadeInUp_0.6s_ease-out]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-[56px] lg:text-[64px] font-bold text-[#E5FF00] mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-[15px] font-medium text-white/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-6 py-6 pb-12">
        <div className="w-full max-w-[calc(100%-48px)] mx-auto bg-white rounded-3xl shadow-lg p-12 lg:p-16 text-center animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-[42px] leading-[1.2] font-normal text-[#000000] mb-6">
            Join us on our mission
          </h2>
          <p className="text-[17px] leading-[1.6] text-[#666666] max-w-[600px] mx-auto mb-8">
            We're always looking for talented individuals who share our passion for innovation and customer success.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="group relative px-8 py-4 bg-[#000000] text-white text-[15px] font-semibold rounded-md hover:bg-[#222222] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <span className="relative z-10">View Open Positions</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </button>
            <button className="group relative px-8 py-4 bg-white border-2 border-[#000000] text-[#000000] text-[15px] font-semibold rounded-md hover:bg-[#000000] hover:text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden">
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#000000] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" style={{ zIndex: 0 }} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
