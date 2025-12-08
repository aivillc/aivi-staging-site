'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import Script from 'next/script';
import { FaExclamationTriangle, FaChartLine, FaDollarSign, FaUsers, FaCog, FaCode, FaRocket, FaChartBar } from 'react-icons/fa';
import { useDemoPopup } from '@/components/aiviv3/DemoPopupContext';

const caseStudiesData = {
  agency: {
    id: 'agency',
    title: 'Agency',
    heading: 'How a Marketing Agency Scaled AI Calling for Clients',
    description: 'A digital marketing agency transformed their lead generation services by implementing AIVI, enabling them to serve more clients while dramatically improving results.',
    metrics: [
      { value: '6x', label: 'Faster client closures' },
      { value: '45%', label: 'Higher profit margins' },
      { value: '90%', label: 'Client retention rate' },
    ],
    challenges: [
      {
        title: 'Manual Outreach Bottleneck',
        description: 'Sales team spent 70% of time on cold calls instead of closing deals, limiting growth potential.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Lead Quality',
        description: 'No standardized qualification process meant reps wasted time on unqualified prospects.',
        icon: FaChartLine,
      },
      {
        title: 'Scaling Limitations',
        description: 'Adding new clients required proportional headcount increases, eroding margins.',
        icon: FaUsers,
      },
      {
        title: 'After-Hours Coverage Gap',
        description: 'Leads generated outside business hours went cold before follow-up.',
        icon: FaDollarSign,
      },
    ],
    solutions: [
      {
        title: 'AI-Powered Lead Qualification',
        description: 'Deployed AIVI to handle initial outreach and qualification, freeing sales team for high-value conversations.',
      },
      {
        title: 'Standardized Intake Process',
        description: 'Created consistent qualification scripts that ensure every lead is properly scored and routed.',
      },
      {
        title: 'Scalable Client Onboarding',
        description: 'New clients can be onboarded in days, not weeks, with customized AI agents for each campaign.',
      },
      {
        title: '24/7 Lead Engagement',
        description: 'AIVI engages leads instantly, regardless of time zone, ensuring no opportunity goes cold.',
      },
    ],
    results: [
      { metric: '6x', description: 'Faster time from lead to close' },
      { metric: '45%', description: 'Increase in profit margins' },
      { metric: '90%', description: 'Client retention rate' },
      { metric: '3x', description: 'More clients handled per rep' },
      { metric: '85%', description: 'Reduction in manual outreach time' },
      { metric: '24/7', description: 'Lead engagement coverage' },
    ],
  },
  retail: {
    id: 'retail',
    title: 'Retail',
    heading: 'How We Automated After-Hours Support for a 400+ Store Retailer',
    description: 'A national retail chain transformed their customer experience by implementing AIVI across all locations, ensuring every customer gets immediate assistance.',
    metrics: [
      { value: '67%', label: 'Retention increase' },
      { value: '38%', label: 'Call automation rate' },
      { value: '45%', label: 'Fewer abandoned carts' },
    ],
    challenges: [
      {
        title: 'After-Hours Support Gap',
        description: 'Customer calls outside business hours went to voicemail, resulting in lost sales and frustrated customers.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Store Experience',
        description: 'Each store handled inquiries differently, leading to inconsistent brand experience.',
        icon: FaChartLine,
      },
      {
        title: 'High Cart Abandonment',
        description: 'Customers with questions during checkout had no immediate way to get answers, leading to abandoned carts.',
        icon: FaDollarSign,
      },
      {
        title: 'Overwhelmed Staff',
        description: 'Store associates spent excessive time on phone calls instead of helping in-store customers.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Customer Support',
        description: 'AIVI handles customer inquiries around the clock, ensuring no call goes unanswered.',
      },
      {
        title: 'Standardized Responses',
        description: 'Consistent, on-brand responses across all 400+ locations for product info, store hours, and policies.',
      },
      {
        title: 'Real-Time Checkout Assistance',
        description: 'Customers can get instant answers to questions during the buying process, reducing abandonment.',
      },
      {
        title: 'Smart Call Routing',
        description: 'Complex inquiries are seamlessly transferred to available staff, with full context provided.',
      },
    ],
    results: [
      { metric: '67%', description: 'Increase in customer retention' },
      { metric: '38%', description: 'Of calls fully automated' },
      { metric: '45%', description: 'Reduction in cart abandonment' },
      { metric: '400+', description: 'Stores covered 24/7' },
      { metric: '92%', description: 'Customer satisfaction score' },
      { metric: '60%', description: 'Reduction in staff phone time' },
    ],
  },
  legal: {
    id: 'legal',
    title: 'Legal',
    heading: 'How We Booked 35% More Consultations for a Nationwide Law Firm',
    description: 'A multi-state law firm transformed their client intake process with AIVI, ensuring no potential client slips through the cracks while maintaining strict compliance standards.',
    metrics: [
      { value: '100%', label: 'After-hours answered' },
      { value: '35%', label: 'More appointments' },
      { value: '95%', label: 'Cost reduction' },
    ],
    challenges: [
      {
        title: 'Missed After-Hours Leads',
        description: 'Potential clients calling outside business hours went to voicemail, often never calling back.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Intake Process',
        description: 'Different staff members collected different information, leading to incomplete case files.',
        icon: FaChartLine,
      },
      {
        title: 'High Cost Per Lead',
        description: 'Expensive answering services and dedicated intake staff drove up customer acquisition costs.',
        icon: FaDollarSign,
      },
      {
        title: 'Slow Response Times',
        description: 'Callbacks sometimes took hours, by which time potential clients had contacted competitors.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Legal Intake',
        description: 'AIVI handles client intake around the clock, collecting case details and scheduling consultations immediately.',
      },
      {
        title: 'Standardized Qualification',
        description: 'Consistent intake scripts ensure all necessary information is captured for every potential client.',
      },
      {
        title: 'Instant Attorney Routing',
        description: 'Qualified leads are immediately routed to the appropriate attorney based on practice area and availability.',
      },
      {
        title: 'Compliance-Ready Process',
        description: 'Built-in disclosures and conflict check protocols ensure ethical compliance from first contact.',
      },
    ],
    results: [
      { metric: '100%', description: 'After-hours calls answered' },
      { metric: '35%', description: 'Increase in booked consultations' },
      { metric: '95%', description: 'Reduction in intake costs' },
      { metric: '<30s', description: 'Average response time' },
      { metric: '89%', description: 'Client satisfaction score' },
      { metric: '3x', description: 'More qualified leads per week' },
    ],
  },
  healthcare: {
    id: 'healthcare',
    title: 'Healthcare',
    heading: 'How We Increased Patient Satisfaction by 30% for a Healthcare Network',
    description: 'A regional healthcare network transformed patient engagement with AIVI, delivering immediate support and dramatically reducing no-show rates.',
    metrics: [
      { value: '100%', label: 'Calls answered' },
      { value: '30%', label: 'CSAT increase' },
      { value: '35%', label: 'No-show reduction' },
    ],
    challenges: [
      {
        title: 'Overwhelmed Call Center',
        description: 'High call volumes led to long wait times and frustrated patients, impacting satisfaction scores.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'High No-Show Rates',
        description: 'Missed appointments cost millions annually and disrupted care schedules across the network.',
        icon: FaDollarSign,
      },
      {
        title: 'After-Hours Coverage Gap',
        description: 'Patients with urgent scheduling needs after hours had no immediate assistance available.',
        icon: FaChartLine,
      },
      {
        title: 'Multilingual Needs',
        description: 'Diverse patient population required support in multiple languages, straining staff resources.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Patient Support',
        description: 'AIVI handles patient calls around the clock for scheduling, rescheduling, and general inquiries.',
      },
      {
        title: 'Automated Appointment Reminders',
        description: 'Proactive outreach confirms appointments and captures cancellations before they become no-shows.',
      },
      {
        title: 'Smart Scheduling',
        description: 'Patients can book, reschedule, or cancel appointments instantly without waiting on hold.',
      },
      {
        title: 'Multilingual Conversations',
        description: 'Natural conversations in over 100 languages ensure every patient receives care in their preferred language.',
      },
    ],
    results: [
      { metric: '100%', description: 'Patient calls answered' },
      { metric: '30%', description: 'Increase in patient satisfaction' },
      { metric: '35%', description: 'Reduction in no-show rates' },
      { metric: '100+', description: 'Languages supported' },
      { metric: '45%', description: 'Reduction in call wait times' },
      { metric: '24/7', description: 'Patient support coverage' },
    ],
  },
  'real-estate': {
    id: 'real-estate',
    title: 'Real Estate',
    heading: 'How We Automated 24/7 Lead Calls for a National Developer',
    description: 'A national real estate developer transformed their lead conversion process with AIVI, ensuring every inquiry becomes a qualified opportunity.',
    metrics: [
      { value: '50%', label: 'Sales automated' },
      { value: '55%', label: 'More site visits' },
      { value: '100%', label: 'After-hours captured' },
    ],
    challenges: [
      {
        title: 'Lost After-Hours Leads',
        description: 'Property inquiries outside business hours went unanswered, with leads often purchasing from competitors.',
        icon: FaExclamationTriangle,
      },
      {
        title: 'Inconsistent Follow-Up',
        description: 'Sales agents had varying follow-up practices, leading to missed opportunities and inconsistent buyer experiences.',
        icon: FaChartLine,
      },
      {
        title: 'High Cost Per Lead',
        description: 'Marketing investments generated leads, but manual processes meant many never converted to site visits.',
        icon: FaDollarSign,
      },
      {
        title: 'Scaling Challenges',
        description: 'New developments required additional sales staff, limiting expansion speed and increasing costs.',
        icon: FaUsers,
      },
    ],
    solutions: [
      {
        title: '24/7 Lead Engagement',
        description: 'AIVI captures and qualifies leads instantly, regardless of when they inquire about properties.',
      },
      {
        title: 'Automated Tour Scheduling',
        description: 'Qualified prospects are immediately offered available tour times and booked into the sales calendar.',
      },
      {
        title: 'Consistent Qualification',
        description: 'Every lead receives the same professional qualification process, ensuring no opportunity is missed.',
      },
      {
        title: 'Scalable Outreach',
        description: 'Launch new developments with instant lead handling capacity, no additional hiring required.',
      },
    ],
    results: [
      { metric: '50%', description: 'Of sales calls fully automated' },
      { metric: '55%', description: 'Increase in site visits' },
      { metric: '100%', description: 'After-hours leads captured' },
      { metric: '3x', description: 'Faster lead response time' },
      { metric: '40%', description: 'Reduction in cost per lead' },
      { metric: '24/7', description: 'Lead engagement coverage' },
    ],
  },
};

const caseStudies = [
  { id: 'agency', title: 'Agency' },
  { id: 'retail', title: 'Retail' },
  { id: 'legal', title: 'Legal' },
  { id: 'healthcare', title: 'Healthcare' },
  { id: 'real-estate', title: 'Real Estate' },
];

const dashboardPanels = [
  {
    title: 'Lead Source Performance',
    description: 'Track conversion rates by channel, campaign attribution, and ROI per lead source.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <rect x="10" y="90" width="30" height="20" fill="#FF8C00" opacity="0.7" />
        <rect x="50" y="60" width="30" height="50" fill="#8A2BE2" opacity="0.7" />
        <rect x="90" y="40" width="30" height="70" fill="#FF8C00" opacity="0.7" />
        <rect x="130" y="70" width="30" height="40" fill="#8A2BE2" opacity="0.7" />
        <rect x="170" y="50" width="30" height="60" fill="#FF8C00" opacity="0.7" />
      </svg>
    ),
  },
  {
    title: 'AI-driven Sentiment Analysis',
    description: 'Real-time emotional intelligence tracking with tone adaptation and conversation quality scoring.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <path d="M10,60 Q60,20 110,60 T210,60" fill="none" stroke="#8A2BE2" strokeWidth="3" />
        <path d="M10,70 Q60,100 110,70 T210,70" fill="none" stroke="#FF8C00" strokeWidth="3" />
        <circle cx="60" cy="40" r="4" fill="#8A2BE2" />
        <circle cx="110" cy="60" r="4" fill="#8A2BE2" />
        <circle cx="160" cy="40" r="4" fill="#8A2BE2" />
      </svg>
    ),
  },
  {
    title: 'Conversion Rate by Funnel Stage',
    description: 'Visualize drop-off points, optimize conversion paths, and identify revenue opportunities.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <polygon points="100,10 160,40 140,70 60,70 40,40" fill="#FF8C00" opacity="0.3" stroke="#FF8C00" strokeWidth="2" />
        <polygon points="100,30 150,50 135,75 65,75 50,50" fill="#8A2BE2" opacity="0.3" stroke="#8A2BE2" strokeWidth="2" />
        <polygon points="100,50 130,65 120,85 80,85 70,65" fill="#FF8C00" opacity="0.5" stroke="#FF8C00" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: 'Agent Efficiency & Response Times',
    description: 'Monitor average handle time, first-call resolution, and agent performance scorecards.',
    svg: (
      <svg viewBox="0 0 200 120" className="w-full h-full">
        <circle cx="100" cy="60" r="45" fill="none" stroke="#E0E0E0" strokeWidth="8" />
        <circle cx="100" cy="60" r="45" fill="none" stroke="#8A2BE2" strokeWidth="8" strokeDasharray="220" strokeDashoffset="80" transform="rotate(-90 100 60)" />
        <text x="100" y="70" textAnchor="middle" fontSize="24" fill="#FF8C00" fontWeight="bold">73%</text>
      </svg>
    ),
  },
];

const workflowSteps = [
  {
    icon: FaCog,
    title: 'Configure & Integrate',
    description: 'Connect your CRM, telephony, and data sources in minutes. No code required.',
  },
  {
    icon: FaCode,
    title: 'Train & Customize',
    description: 'Fine-tune AI agents with your brand voice, workflows, and business rules.',
  },
  {
    icon: FaRocket,
    title: 'Deploy & Monitor',
    description: 'Launch AI agents across channels with real-time observability and control.',
  },
  {
    icon: FaChartBar,
    title: 'Analyze & Optimize',
    description: 'Leverage ML-powered insights to continuously improve performance and ROI.',
  },
];

const faqItems = [
  {
    question: 'What capabilities does the AI dashboard offer?',
    answer: 'The AI dashboard provides comprehensive analytics including real-time performance metrics, sentiment analysis, conversion tracking, lead scoring, agent efficiency reports, and custom KPI monitoring. All data is visualized through intuitive charts and exportable reports.',
  },
  {
    question: 'Can I integrate AIVI analytics with existing BI tools?',
    answer: 'Yes, AIVI offers full API access for seamless integration with tools like Tableau, Power BI, Looker, and Google Data Studio. Export data in CSV, JSON, or connect directly via our RESTful API with comprehensive documentation.',
  },
  {
    question: 'How secure is the data processed by AIVI agents?',
    answer: 'AIVI is built with enterprise-grade security: SOC 2 Type II certified, HIPAA compliant, end-to-end encryption, role-based access control, and regular security audits. All data is encrypted at rest and in transit with AES-256 and TLS 1.3.',
  },
];

export default function UseCasesPage() {
  const [activeCaseStudy, setActiveCaseStudy] = useState('agency');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [sidebarStyle, setSidebarStyle] = useState<{ position: 'fixed' | 'absolute'; top: string }>({ position: 'fixed', top: '140px' });
  
  const mainRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const { openDemoPopup } = useDemoPopup();

  const currentCaseStudy = caseStudiesData[activeCaseStudy as keyof typeof caseStudiesData];

  // Consistent left position for sidebar (48px from edge = mx-12 equivalent)
  const sidebarLeftPosition = 48;

  // Handle sidebar scroll behavior - stop 50px before footer
  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current || !sidebarRef.current) return;
      
      const mainBottom = mainRef.current.offsetTop + mainRef.current.offsetHeight;
      const sidebarHeight = sidebarRef.current.offsetHeight;
      const sidebarFixedTop = 140; // Fixed top position
      const footerGap = 75; // Gap from footer
      
      // Calculate the stopping point (main content bottom - sidebar height - gap)
      const stopPoint = mainBottom - sidebarHeight - footerGap;
      
      // Current scroll position
      const scrollY = window.scrollY;
      
      // Calculate when sidebar bottom would go past the stopping point
      if (scrollY + sidebarFixedTop + sidebarHeight >= mainBottom - footerGap) {
        // Switch to absolute positioning
        setSidebarStyle({ position: 'absolute', top: `${stopPoint}px` });
      } else {
        // Keep fixed positioning
        setSidebarStyle({ position: 'fixed', top: '140px' });
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const handleCaseStudyChange = (id: string) => {
    if (id !== activeCaseStudy) {
      setIsTransitioning(true);
      setTimeout(() => {
        setActiveCaseStudy(id);
        setIsTransitioning(false);
      }, 150);
    }
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js" defer />
      <AIVINavigation />
      <main ref={mainRef} className="min-h-screen bg-[#E8E5E0] relative" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {/* Fixed Sidebar Navigation - Desktop Only */}
        <aside 
          ref={sidebarRef}
          className="hidden lg:block w-64 z-40"
          style={{ 
            position: sidebarStyle.position, 
            top: sidebarStyle.top,
            left: `${sidebarLeftPosition}px`
          }}
        >
          <div className="bg-white rounded-2xl p-6 shadow-soft overflow-y-auto" style={{ maxHeight: 'calc(100vh - 156px)' }}>
            <h3
              className="text-[18px] font-semibold text-[#1A1A1A] mb-6"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Case Studies
            </h3>
            <nav className="space-y-2 mb-8">
              {caseStudies.map((caseStudy) => (
                <button
                  key={caseStudy.id}
                  onClick={() => handleCaseStudyChange(caseStudy.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-[14px] font-medium transition-all duration-300 ${
                    activeCaseStudy === caseStudy.id
                      ? 'bg-gradient-to-r from-[#FF8C00]/10 to-[#8A2BE2]/10 text-[#FF8C00] border border-[#FF8C00]/20'
                      : 'text-[#666666] hover:bg-[#F5F5F5]'
                  }`}
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {caseStudy.title}
                </button>
              ))}
            </nav>

            <div className="pt-6 border-t border-[#E8E5E0]">
              <p className="text-[12px] font-semibold text-[#999999] uppercase tracking-wider mb-3">
                Quick Links
              </p>
              <Link
                href="/aiviv3/integrations"
                className="block text-[14px] text-[#FF8C00] hover:underline mb-2"
              >
                View all integrations
              </Link>
              <Link
                href="#"
                className="block text-[14px] text-[#8A2BE2] hover:underline"
              >
                Developer API documentation
              </Link>
            </div>
          </div>
        </aside>

        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Main Layout - with left margin for sidebar on desktop */}
          <div className="pt-[72px] lg:ml-[280px]">
            {/* Main Content Area */}
            <div>
              {/* Hero Section */}
              <section className="w-full relative overflow-hidden mb-12">
                <div className="gradient-bg absolute inset-0 rounded-2xl"></div>

                <div className="w-full px-3 sm:px-6 py-16 sm:py-20 relative z-10">
                  {/* Content wrapper with animation */}
                  <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                    {/* Hero Text */}
                    <div className="text-center lg:text-left mb-12">
                      <h1
                        className="text-[36px] sm:text-[48px] md:text-[60px] leading-[1.1] font-normal text-[#1A1A1A] mb-4"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {currentCaseStudy.heading}
                      </h1>
                      <p className="text-[17px] sm:text-[19px] leading-[1.6] text-[#666666] max-w-[600px] mx-auto lg:mx-0 mb-8">
                        {currentCaseStudy.description}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link
                          href="/aiviv3/demo"
                          className="group relative inline-flex items-center justify-center h-12 px-8 text-white text-[15px] font-semibold rounded-md overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2]"
                        >
                          <span className="relative z-10">View Live Dashboard</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#8A2BE2] to-[#FF8C00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </Link>
                        <button
                          onClick={openDemoPopup}
                          className="inline-flex items-center justify-center h-12 px-8 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] text-[15px] font-semibold rounded-md hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
                        >
                          Book a Demo
                        </button>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid sm:grid-cols-3 gap-6 mb-16">
                      {currentCaseStudy.metrics.map((metric, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-soft">
                          <div
                            className="text-[32px] sm:text-[42px] font-bold mb-2 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] bg-clip-text text-transparent"
                            style={{ fontFamily: 'Manrope, sans-serif' }}
                          >
                            {metric.value}
                          </div>
                          <p className="text-[14px] text-[#666666]">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>

                    {/* Challenges Section */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 shadow-soft">
                      <h2
                        className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-8"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        The Challenge
                      </h2>
                      <div className="grid sm:grid-cols-2 gap-6">
                        {currentCaseStudy.challenges.map((challenge, index) => (
                          <div key={index} className="bg-[#F5F5F5] rounded-xl p-6 flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-[#FF8C00]/20 to-[#8A2BE2]/20 flex items-center justify-center">
                              <challenge.icon className="text-[24px]" style={{ color: index % 2 === 0 ? '#FF8C00' : '#8A2BE2' }} />
                            </div>
                            <div className="flex-1">
                              <h3
                                className="text-[16px] font-semibold text-[#1A1A1A] mb-2"
                                style={{ fontFamily: 'Manrope, sans-serif' }}
                              >
                                {challenge.title}
                              </h3>
                              <p className="text-[14px] text-[#666666] leading-[1.6]">
                                {challenge.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Solutions Section */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 shadow-soft">
                      <h2
                        className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-8"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        The Solution
                      </h2>
                      <div className="lg:flex lg:gap-8 items-start">
                        {/* SVG Illustration on the left */}
                        <div className="hidden lg:block lg:w-1/3 flex-shrink-0 mb-8 lg:mb-0">
                          <div className="bg-gradient-to-br from-[#FF8C00]/10 to-[#8A2BE2]/10 rounded-2xl p-8 h-full flex items-center justify-center">
                            <svg viewBox="0 0 200 200" className="w-full h-auto">
                              {/* Robot/AI Icon */}
                              <circle cx="100" cy="80" r="35" fill="#8A2BE2" opacity="0.2" />
                              <circle cx="100" cy="80" r="25" fill="#8A2BE2" />
                              <circle cx="90" cy="75" r="4" fill="white" />
                              <circle cx="110" cy="75" r="4" fill="white" />
                              <path d="M85,90 Q100,95 115,90" stroke="white" strokeWidth="2" fill="none" />
                              {/* Body */}
                              <rect x="75" y="115" width="50" height="50" rx="8" fill="#FF8C00" opacity="0.8" />
                              {/* Arms */}
                              <rect x="55" y="125" width="20" height="8" rx="4" fill="#8A2BE2" opacity="0.6" />
                              <rect x="125" y="125" width="20" height="8" rx="4" fill="#8A2BE2" opacity="0.6" />
                              {/* Connecting nodes */}
                              <circle cx="40" cy="50" r="8" fill="#FF8C00" opacity="0.5" />
                              <circle cx="160" cy="50" r="8" fill="#FF8C00" opacity="0.5" />
                              <circle cx="40" cy="150" r="8" fill="#8A2BE2" opacity="0.5" />
                              <circle cx="160" cy="150" r="8" fill="#8A2BE2" opacity="0.5" />
                              {/* Connection lines */}
                              <line x1="40" y1="50" x2="75" y2="80" stroke="#FF8C00" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
                              <line x1="160" y1="50" x2="125" y2="80" stroke="#FF8C00" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
                              <line x1="40" y1="150" x2="75" y2="140" stroke="#8A2BE2" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
                              <line x1="160" y1="150" x2="125" y2="140" stroke="#8A2BE2" strokeWidth="2" opacity="0.3" strokeDasharray="4,4" />
                            </svg>
                          </div>
                        </div>

                        {/* Solutions list on the right */}
                        <div className="lg:w-2/3 space-y-6">
                          {currentCaseStudy.solutions.map((solution, index) => (
                            <div key={index} className="flex gap-4">
                              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-[#FF8C00] to-[#8A2BE2] flex items-center justify-center text-white font-bold text-[14px]">
                                {index + 1}
                              </div>
                              <div>
                                <h3
                                  className="text-[16px] font-semibold text-[#1A1A1A] mb-2"
                                  style={{ fontFamily: 'Manrope, sans-serif' }}
                                >
                                  {solution.title}
                                </h3>
                                <p className="text-[14px] text-[#666666] leading-[1.6]">
                                  {solution.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Results Section */}
                    <div className="bg-gradient-to-br from-[#FF8C00] to-[#8A2BE2] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16">
                      <h2
                        className="text-[24px] sm:text-[32px] font-normal text-white mb-8 text-center"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        The Results
                      </h2>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentCaseStudy.results.map((result, index) => (
                          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                            <div
                              className="text-[28px] sm:text-[36px] font-bold mb-2 text-white"
                              style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                              {result.metric}
                            </div>
                            <p className="text-[13px] text-white/90">
                              {result.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Dashboard Section */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 shadow-soft">
                      <div className="mb-8">
                        <h2
                          className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-3"
                          style={{ fontFamily: 'Manrope, sans-serif' }}
                        >
                          Real-time Performance Dashboard
                        </h2>
                        <p className="text-[15px] sm:text-[16px] text-[#666666]">
                          Visualize, analyze, and act on insights across every touchpoint.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6 mb-8">
                        {dashboardPanels.map((panel, index) => (
                          <div
                            key={index}
                            className="bg-[#F5F5F5] rounded-xl p-6 border border-[#E8E5E0]"
                          >
                            <div className="w-full h-32 mb-4 bg-white rounded-lg p-4 flex items-center justify-center">
                              {panel.svg}
                            </div>
                            <h3
                              className="text-[16px] font-semibold text-[#1A1A1A] mb-2"
                              style={{ fontFamily: 'Manrope, sans-serif' }}
                            >
                              {panel.title}
                            </h3>
                            <p className="text-[13px] text-[#666666]">{panel.description}</p>
                          </div>
                        ))}
                      </div>

                      <div className="text-center">
                        <Link
                          href="/aiviv3/demo"
                          className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                        >
                          Explore Live Demo Dashboard
                        </Link>
                      </div>
                    </div>

                    {/* AI Workflow Process */}
                    <div className="mb-16">
                      <h2
                        className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-12 text-center"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        AI Workflow Process
                      </h2>

                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Flow line - desktop only */}
                        <div className="hidden lg:block absolute top-12 left-0 right-0 h-px flow-line"></div>

                        {workflowSteps.map((step, index) => (
                          <div key={index} className="relative">
                            <div className="text-center">
                              {/* Icon with gradient background */}
                              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#FF8C00]/20 to-[#8A2BE2]/20 flex items-center justify-center relative z-10">
                                <step.icon
                                  className="text-[36px]"
                                  style={{ color: index % 2 === 0 ? '#FF8C00' : '#8A2BE2' }}
                                />
                              </div>

                              <h3
                                className="text-[16px] font-semibold text-[#1A1A1A] mb-2"
                                style={{ fontFamily: 'Manrope, sans-serif' }}
                              >
                                {step.title}
                              </h3>
                              <p className="text-[13px] text-[#666666]">{step.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* FAQ Section */}
                    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mb-16 shadow-soft">
                      <h2
                        className="text-[24px] sm:text-[32px] font-normal text-[#1A1A1A] mb-8"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Frequently Asked Questions
                      </h2>

                      <div className="space-y-4">
                        {faqItems.map((item, index) => (
                          <div
                            key={index}
                            className="border border-[#E8E5E0] rounded-xl overflow-hidden"
                          >
                            <button
                              onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                              className="w-full flex items-center justify-between p-5 text-left hover:bg-[#F5F5F5] transition-colors"
                            >
                              <span
                                className="text-[16px] font-semibold text-[#1A1A1A]"
                                style={{ fontFamily: 'Manrope, sans-serif' }}
                              >
                                {item.question}
                              </span>
                              <span
                                className="text-[24px] text-[#FF8C00] transition-transform duration-300 flex-shrink-0 ml-4"
                                style={{
                                  transform: openFaqIndex === index ? 'rotate(45deg)' : 'rotate(0deg)',
                                }}
                              >
                                +
                              </span>
                            </button>
                            <div
                              className={`overflow-hidden transition-all duration-300 ${
                                openFaqIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                              }`}
                            >
                              <div className={`p-5 text-[14px] text-[#666666] leading-[1.6] ${openFaqIndex === index ? 'pt-2.5' : 'pt-0'}`}>
                                {item.answer}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Final CTA */}
                    <div className="bg-gradient-to-br from-[#FF8C00] to-[#8A2BE2] rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center">
                      <h2
                        className="text-[28px] sm:text-[36px] font-normal text-white mb-4"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Ready to Achieve Similar Results?
                      </h2>
                      <p className="text-[16px] text-white/80 mb-8 max-w-[500px] mx-auto">
                        Join hundreds of businesses transforming their operations with AIVI's AI-powered platform.
                      </p>
                      <Link
                        href="/aiviv3/demo"
                        className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#FF8C00] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                      >
                        Get Started Today
                      </Link>
                    </div>
                    {/* End of animation wrapper */}
                  </div>
                </div>
              </section>
              {/* End of Hero Section */}
            </div>
            {/* End of Main Content Area */}
          </div>
          {/* End of Main Layout with Sidebar */}
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
