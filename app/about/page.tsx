'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import AIVINavigationV4 from '@/components/aiviv4/AIVINavigationV4';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

const resultsStats = [
  { value: '1.2M+', label: 'AI Conversations Processed Daily' },
  { value: '$18M+', label: 'Revenue Generated for Customers' },
  { value: '65%+', label: 'Contact Rate Achieved' },
];

const teamMembers = [
  {
    name: 'Giorgio Mihaila',
    role: 'Co-Founder & CTO',
    image: '/giorgiom.webp',
    bio: 'Built Amazon Connect\'s global expansion (100,000 agents, 22 countries) and Five9\'s enterprise platform still in use today. 20+ years architecting contact center technology at Amazon, Cisco, Five9, and Avaya.',
    mission: 'Now building the AI Revenue Engine that makes traditional contact centers obsolete. Not by replacing humans, but by making them 2X more productive.',
    linkedin: 'https://www.linkedin.com/in/gmihaila/',
    email: 'giorgio@aivi.io',
  },
  {
    name: 'Olly Whittle',
    role: 'Co-Founder & Chief Revenue Officer',
    image: '/ollyw.webp',
    bio: '15+ years running digital agencies managing $100M+ in annual ad spend. Founder of SWARM Social (digital marketing) and BudiPay (fintech).',
    mission: 'Saw clients waste millions on "bad leads" that were actually fine. They just followed up too slowly. Built AIVI to solve the $1.2M/month problem he saw everywhere.',
    linkedin: 'https://www.linkedin.com/in/ollyaivoice/',
    email: 'olly@aivi.io',
  },
];

const values = [
  {
    iconType: 'target',
    title: 'Lead Monetization First',
    description: 'We don\'t build features. We build revenue recovery systems. Every feature must answer: "Does this help customers waste fewer leads?"',
  },
  {
    iconType: 'lightning',
    title: 'Speed Wins',
    description: 'In lead generation, first contact wins. We obsess over 3-second response times because every minute of delay costs customers $10K-50K monthly.',
  },
  {
    iconType: 'lightbulb',
    title: 'Intelligence Over Automation',
    description: 'AI should learn and optimize, not just automate. Our learning engine gets smarter with every conversation, continuously improving channel selection, timing, and routing.',
  },
  {
    iconType: 'users',
    title: 'Human + AI Hybrid',
    description: 'We don\'t replace sales teams. We make them 2X more productive by handling qualification so humans can focus on closing pre-approved deals.',
  },
];

const ValueIcon = ({ type }: { type: string }) => {
  const iconClass = "w-7 h-7 sm:w-8 sm:h-8 text-[#f84608]";

  switch (type) {
    case 'target':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case 'lightning':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'lightbulb':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'users':
      return (
        <svg className={iconClass} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      );
    default:
      return null;
  }
};

const steps = [
  {
    number: '01',
    title: 'Our Engineering',
    description: 'Built by former Amazon Connect and Five9 architects who have processed billions of customer interactions. AI-agnostic orchestration, learning engine that optimizes continuously, and financial services workflows including credit pull and compliance.',
  },
  {
    number: '02',
    title: 'Customer Success',
    description: 'We don\'t just onboard you and disappear. We actively monitor your contact rates, transfer rates, and revenue lift, then optimize until you hit your targets. Typical results in 90 days: 45% to 65% contact rate, $1.2M+ monthly revenue recovery.',
  },
  {
    number: '03',
    title: 'Our Commitment',
    description: 'We only win when you win. That\'s why we focus on one metric: revenue lift. Everything else is just noise. No inflated stats, no vague promises. Just measurable results.',
  },
  {
    number: '04',
    title: 'Our Vision',
    description: 'Make lead waste obsolete. Every company spending $10K-$1M+/month on leads should achieve 65%+ contact rates, 3-second response times, and intelligent routing. When we\'re done, "wasting 55% of leads" will sound as outdated as calling customers from a rolodex.',
  },
];

export default function AboutPage() {
  return (
    <>
      <AIVINavigationV4 transparent={false} />
      <main className="min-h-screen font-manrope">
        {/* Hero Section - Dark */}
        <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] pt-32 pb-20 sm:pt-40 sm:pb-28 px-6 sm:px-12 md:px-16 lg:px-24 overflow-hidden">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-4 mb-8">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  About AIVI
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>

              <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-light text-white leading-[1.1] tracking-[-0.02em] mb-8">
                Building the{' '}
                <span className="bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3] bg-clip-text text-transparent">
                  AI Revenue Engine
                </span>
                <br />for Lead Generation
              </h1>

              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-white/70 font-light leading-[1.7] max-w-3xl mx-auto mb-12">
                Founded by Amazon Connect and Five9 architects, AIVI solves the biggest problem in lead generation: 55% of expensive leads get wasted because follow-up takes too long. We built the AI Revenue Engine that contacts leads in 3 seconds, qualifies automatically, and routes to the best closer.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-demo"
                  className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#f84608] to-[#d63b06] text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(248,70,8,0.4)]"
                >
                  <span className="relative z-10">Book a Demo</span>
                  <svg className="w-5 h-5 relative z-10 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 text-white font-semibold rounded-full border border-white/20 hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                >
                  Calculate Your Impact
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results Stats Section - Light Grey */}
        <section className="w-full bg-[#E8E5E0] py-16 sm:py-20 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#1a1a1a] rounded-3xl p-8 sm:p-12 border border-white/10 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3]" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#f84608]/10 to-transparent rounded-full blur-3xl" />

              <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                {resultsStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <span className="text-[48px] sm:text-[56px] md:text-[64px] font-bold bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3] bg-clip-text text-transparent tracking-[-0.02em]">
                      {stat.value}
                    </span>
                    <p className="text-[14px] sm:text-[16px] text-white/60 mt-2 font-medium">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Story Section - Light */}
        <section className="w-full bg-[#E8E5E0] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  Our Story
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-[#1a1a1a] leading-[1.1] tracking-[-0.02em]">
                The <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">$1.2 Million</span> Problem
              </h2>
              <p className="text-[20px] sm:text-[24px] font-medium bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent mt-4">
                (Discovered Twice)
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6 text-[18px] sm:text-[19px] md:text-[20px] leading-[1.7] text-[#666666]"
            >
              <p>
                In 2023, Giorgio and Olly were solving the same problem from opposite sides of the industry, without knowing it.
              </p>
              <p>
                Giorgio had just finished scaling Amazon Connect to 100,000 agents across 22 countries and building Five9&apos;s global expansion. Everywhere he looked, he saw the same pattern: companies spending $50-100 per lead were losing 55% of them to slow follow-up.
              </p>
              <p>
                At the same time, Olly was running a digital agency managing $100M in annual ad spend. His clients kept blaming &quot;bad lead quality&quot; but the leads were fine. The problem was simple: by the time they called back 23 minutes later, competitors had already gotten there.
              </p>
              <p>
                When we met through a mutual contact center industry connection, we realized we were diagnosing the exact same $1.2M problem:
              </p>

              <div className="bg-white rounded-xl p-6 my-8 border border-[#e5e5e5] shadow-sm">
                <ul className="space-y-2 text-[17px] sm:text-[18px]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#f84608]">•</span>
                    <span>$1M/month on leads</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#f84608]">•</span>
                    <span>55% never contacted (23-minute response time)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#f84608]">•</span>
                    <span className="font-semibold text-[#1A1A1A]">$550K wasted every single month</span>
                  </li>
                </ul>
              </div>

              <p>
                Giorgio had the contact center AI expertise. Olly had the lead generation data. Together, we had the complete picture.
              </p>

              <p>
                Existing AI tools didn&apos;t solve this. They were either too generic (built for every industry, mastered none),
                single-vendor (locked to OpenAI, failed when it went down), voice-only (ignored SMS and email channels),
                or had no learning engine (static, didn&apos;t optimize).
              </p>
              <p>
                So we built AIVI, the AI Revenue Engine specifically for lead generation companies. Multi-channel (SMS, voice, email),
                AI-agnostic (routes to best provider automatically), with a learning engine that optimizes channel, timing,
                messaging, and routing continuously.
              </p>

              <div className="bg-gradient-to-r from-[#f84608]/10 to-[#321ca3]/10 rounded-xl p-6 my-8 border border-[#f84608]/20">
                <p className="text-[17px] sm:text-[18px] font-semibold text-[#1A1A1A] mb-3">The results speak for themselves:</p>
                <ul className="space-y-2 text-[17px] sm:text-[18px]">
                  <li className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span>
                    <span>SimplePath Financial: 50% → 73% contact rate</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span>
                    <span>LoanPro: 2X close rate improvement</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#10b981]">✓</span>
                    <span>Meridian: +$2.1M annually</span>
                  </li>
                </ul>
              </div>

              <p>
                Today, we&apos;re processing 1.2M+ conversations and recovering millions in lost revenue for companies
                that refuse to waste another $50 lead.
              </p>
              <p className="text-[19px] sm:text-[20px] font-medium text-[#1A1A1A] text-center mt-8">
                This is just the beginning.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Team Section - Dark */}
        <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  Meet the Team
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white leading-[1.1] tracking-[-0.02em]">
                Meet the{' '}
                <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-[17px] sm:text-[18px] md:text-[19px] text-white/60 mt-4 max-w-[700px] mx-auto">
                The experienced leaders driving AIVI&apos;s mission forward
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="group relative bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#1a1a1a] rounded-2xl p-8 border border-white/10 hover:border-[#f84608]/30 transition-all duration-300"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#f84608] via-[#8b00ff] to-[#321ca3] rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col items-center text-center">
                    {/* Photo */}
                    <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-6 border-4 border-[#f84608]/20 shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Name & Role */}
                    <h3 className="text-[22px] sm:text-[26px] font-semibold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-[16px] sm:text-[17px] md:text-[18px] font-medium bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent mb-4">
                      {member.role}
                    </p>

                    {/* Bio */}
                    <p className="text-[16px] sm:text-[17px] text-white/60 leading-[1.7] mb-3">
                      {member.bio}
                    </p>
                    <p className="text-[16px] sm:text-[17px] text-white leading-[1.7] mb-6 font-medium">
                      {member.mission}
                    </p>

                    {/* Links */}
                    <div className="flex items-center gap-4">
                      {/* LinkedIn */}
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-[#0A66C2] text-white text-[14px] font-medium rounded-lg hover:bg-[#004182] transition-colors duration-300"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                        LinkedIn
                      </a>

                      {/* Email */}
                      <a
                        href={`mailto:${member.email}`}
                        className="flex items-center gap-2 px-4 py-2 bg-white/5 text-white text-[14px] font-medium rounded-lg border border-white/20 hover:border-[#f84608]/30 hover:bg-white/10 transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        {member.email}
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section - Light */}
        <section className="w-full bg-[#E8E5E0] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  Our Values
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-[#1a1a1a] leading-[1.1] tracking-[-0.02em]">
                Our <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-[17px] sm:text-[18px] md:text-[19px] text-[#666666] mt-4 max-w-[700px] mx-auto">
                The principles that guide everything we build
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 shadow-lg border border-black/5 hover:shadow-xl hover:border-[#f84608]/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#f84608]/10 to-[#321ca3]/10 rounded-xl mb-4 flex items-center justify-center border border-[#f84608]/20 group-hover:scale-110 transition-transform">
                    <ValueIcon type={value.iconType} />
                  </div>
                  <h3 className="text-[19px] sm:text-[21px] md:text-[22px] font-semibold text-[#1A1A1A] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[16px] sm:text-[17px] md:text-[18px] text-[#666666] leading-[1.6]">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Work Section - Dark */}
        <section className="w-full bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12 sm:mb-16"
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#f84608]" />
                <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#f84608]">
                  How It Works
                </span>
                <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#f84608]" />
              </div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white leading-[1.1] tracking-[-0.02em]">
                How We <span className="bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent">Work</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-gradient-to-br from-[#1a1a1a] via-[#222222] to-[#1a1a1a] rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-[#f84608]/30 transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <span className="text-[48px] sm:text-[56px] font-bold bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent tracking-[-0.02em] leading-none">
                      {step.number}
                    </span>
                    <div className="pt-2">
                      <h3 className="text-[20px] sm:text-[22px] font-semibold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-[15px] sm:text-[16px] text-white/60 leading-[1.7]">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Gradient */}
        <section className="w-full bg-gradient-to-br from-[#f84608] via-[#d63b06] to-[#321ca3] py-20 sm:py-28 px-6 sm:px-12 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-light text-white leading-[1.1] tracking-[-0.02em] mb-6">
                Ready to Recover Your Lost Revenue?
              </h2>
              <p className="text-[16px] sm:text-[18px] text-white/80 font-light leading-[1.7] mb-10 max-w-2xl mx-auto">
                Stop wasting 55% of your leads. See how much revenue you&apos;re leaving on the table.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/book-demo"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#f84608] font-semibold rounded-full hover:bg-white/90 transition-all duration-300 shadow-lg"
                >
                  <span>Book a Demo</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/#calculator"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-full border border-white/30 hover:bg-white/20 transition-all duration-300"
                >
                  ROI Calculator
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <AIVIFooter />
    </>
  );
}
