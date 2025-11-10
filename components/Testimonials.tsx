
'use client';

import React, { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface TestimonialsProps {
  industry?: 'Financial' | 'Healthcare' | 'Law Firms' | 'Real Estate' | 'Logistics';
}

const testimonialsContent = {
  Financial: {
    title: 'Trusted by Financial Leaders',
    subtitle: 'Financial Leaders',
    description: 'See how AIVI transforms client engagement and advisory services',
    testimonials: [
      {
        quote: "AIVI's AI voice agent handles 80% of client inquiries autonomously. Our advisors now focus exclusively on high-value consultations. ROI paid for itself in 6 weeks.",
        author: "Thomas Reynolds",
        role: "CEO",
        company: "Reynolds Wealth Management",
        industry: "Financial",
        color: 'purple' as const
      },
      {
        quote: "Client onboarding time dropped from 3 days to 12 seconds. AIVI's automated document processing and verification saved us countless hours.",
        author: "Robert Chen",
        role: "Managing Partner",
        company: "Summit Wealth Advisors",
        industry: "Financial",
        color: 'orange' as const
      },
      {
        quote: "The AI detected that 23% of our clients were considering switching advisors. Proactive outreach campaigns saved $2.4M in AUM retention.",
        author: "Katherine Morrison",
        role: "VP of Client Experience",
        company: "Pinnacle Investment Group",
        industry: "Financial",
        color: 'purple' as const
      },
      {
        quote: "Client retention increased by 78%. Automated portfolio updates and investment alerts keep our clients engaged and informed.",
        author: "Sarah Martinez",
        role: "Director of Client Services",
        company: "Capital Growth Partners",
        industry: "Financial",
        color: 'orange' as const
      },
      {
        quote: "Response time to client inquiries went from hours to seconds. The AI handles routine questions while escalating complex issues seamlessly.",
        author: "David Williams",
        role: "Chief Technology Officer",
        company: "Premier Financial Group",
        industry: "Financial",
        color: 'purple' as const
      },
      {
        quote: "We closed 42 new accounts in Q1 from re-engaged cold leads. AIVI's AI identified optimal contact times and personalized messaging for each prospect.",
        author: "Brandon Lee",
        role: "Senior Financial Advisor",
        company: "Horizon Financial Partners",
        industry: "Financial",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '78%', label: 'Client Retention', color: 'purple' as const },
      { number: '89%', label: 'Onboarding Rate', color: 'orange' as const },
      { number: '3x', label: 'Faster Processing', color: 'purple' as const },
      { number: '12s', label: 'Response Time', color: 'orange' as const }
    ]
  },
  Healthcare: {
    title: 'Trusted by Healthcare Providers',
    subtitle: 'Healthcare Providers',
    description: 'See how AIVI transforms patient engagement and communication',
    testimonials: [
      {
        quote: "AIVI reduced our no-show rate by 67% in the first month. Automated appointment reminders reached 94% of patients, saving us over $50K in lost revenue.",
        author: "Dr. Sarah Williams",
        role: "Chief Medical Officer",
        company: "City Medical Center",
        industry: "Healthcare",
        color: 'purple' as const
      },
      {
        quote: "The HIPAA-compliant SMS automation is a game-changer. We now send prescription reminders, lab results, and follow-up instructions automatically.",
        author: "Michael Chen",
        role: "Director of Patient Services",
        company: "HealthFirst Clinic",
        industry: "Healthcare",
        color: 'orange' as const
      },
      {
        quote: "Patient satisfaction scores jumped from 3.2 to 4.7 stars. The 45-second response time for patient inquiries transformed our practice.",
        author: "Jennifer Rodriguez",
        role: "Practice Manager",
        company: "Family Care Associates",
        industry: "Healthcare",
        color: 'purple' as const
      },
      {
        quote: "AIVI's AI voice agent handles prescription refill requests 24/7. Our staff can focus on in-person patient care instead of answering routine phone calls.",
        author: "Dr. James Patterson",
        role: "Medical Director",
        company: "Riverside Health Group",
        industry: "Healthcare",
        color: 'orange' as const
      },
      {
        quote: "Post-operative follow-up calls went from 40% completion to 98% with AIVI. Patients love the personalized check-ins and our outcomes have improved significantly.",
        author: "Linda Morrison",
        role: "Chief Nursing Officer",
        company: "Summit Surgical Center",
        industry: "Healthcare",
        color: 'purple' as const
      },
      {
        quote: "We collected 3x more patient feedback after visits using AIVI's automated text surveys. The insights helped us identify and fix service gaps quickly.",
        author: "Carlos Ramirez",
        role: "Patient Experience Director",
        company: "Community Health Network",
        industry: "Healthcare",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '67%', label: 'No-Show Reduction', color: 'purple' as const },
      { number: '94%', label: 'Appointment Confirmations', color: 'orange' as const },
      { number: '2x', label: 'Patient Retention', color: 'purple' as const },
      { number: '45s', label: 'Response Time', color: 'orange' as const }
    ]
  },
  'Law Firms': {
    title: 'Trusted by Top Law Firms',
    subtitle: 'Top Law Firms',
    description: 'See how AIVI transforms client intake and case management',
    testimonials: [
      {
        quote: "Consultation conversion rate jumped to 85%. AIVI's 15-second response time means we never lose a potential client to slow follow-up.",
        author: "Patricia Anderson",
        role: "Managing Partner",
        company: "Anderson & Associates Law",
        industry: "Law Firms",
        color: 'purple' as const
      },
      {
        quote: "Automated case updates freed up 18 hours weekly. Our clients stay informed without constant manual updates from our paralegals.",
        author: "Michael Thompson",
        role: "Senior Partner",
        company: "Thompson Legal Group",
        industry: "Law Firms",
        color: 'orange' as const
      },
      {
        quote: "Client retention increased by 91%. The AI handles appointment reminders, document requests, and court date notifications flawlessly.",
        author: "Elizabeth Chen",
        role: "Client Relations Director",
        company: "Metropolitan Law Partners",
        industry: "Law Firms",
        color: 'purple' as const
      },
      {
        quote: "We recovered $180K in billable hours lost to missed callbacks. AIVI contacts new leads instantly and schedules consultations when we're available.",
        author: "Robert Davidson",
        role: "Partner",
        company: "Davidson & Sharp Law Offices",
        industry: "Law Firms",
        color: 'orange' as const
      },
      {
        quote: "Our intake team went from 12 paralegals to 4. AIVI pre-qualifies leads, gathers initial information, and only escalates viable cases to our attorneys.",
        author: "Angela Martinez",
        role: "Director of Intake",
        company: "Justice Legal Group",
        industry: "Law Firms",
        color: 'purple' as const
      },
      {
        quote: "Client satisfaction scores increased 42% after implementing AIVI's automated communication. Clients feel informed and valued throughout their case.",
        author: "Steven Park",
        role: "Managing Attorney",
        company: "Park & Associates",
        industry: "Law Firms",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '85%', label: 'Consultation Conversion', color: 'purple' as const },
      { number: '91%', label: 'Client Retention', color: 'orange' as const },
      { number: '18hrs', label: 'Time Saved Weekly', color: 'purple' as const },
      { number: '15s', label: 'Response Time', color: 'orange' as const }
    ]
  },
  Logistics: {
    title: 'Trusted by Logistics Leaders',
    subtitle: 'Logistics Leaders',
    description: 'See how AIVI transforms delivery operations and customer satisfaction',
    testimonials: [
      {
        quote: "Failed deliveries dropped by 15% after implementing AIVI's 30-minute arrival warnings. Customers love the real-time updates via SMS.",
        author: "David Martinez",
        role: "VP of Operations",
        company: "Express Freight Solutions",
        industry: "Logistics",
        color: 'purple' as const
      },
      {
        quote: "We eliminated 500+ monthly customer complaint calls. Automated tracking updates keep customers informed throughout the entire delivery process.",
        author: "Lisa Thompson",
        role: "Customer Experience Director",
        company: "FastTrack Logistics",
        industry: "Logistics",
        color: 'orange' as const
      },
      {
        quote: "On-time delivery rate increased to 96%. The AI instantly notifies customers of any delays and provides real-time ETAs.",
        author: "James Wilson",
        role: "CEO",
        company: "Premier Shipping Co.",
        industry: "Logistics",
        color: 'purple' as const
      },
      {
        quote: "AIVI's AI handles delivery exceptions automatically. Customers get instant notifications about delays with rescheduling options. Our CSAT scores jumped 38%.",
        author: "Michelle Chang",
        role: "COO",
        company: "Swift Delivery Network",
        industry: "Logistics",
        color: 'orange' as const
      },
      {
        quote: "Proof of delivery confirmations went from 60% to 98%. AIVI texts customers immediately after drop-off to confirm receipt and gather feedback.",
        author: "Kevin Roberts",
        role: "Director of Last Mile",
        company: "Urban Transport Solutions",
        industry: "Logistics",
        color: 'purple' as const
      },
      {
        quote: "We reduced missed delivery attempts by 72%. AIVI confirms delivery windows with customers an hour before arrival and adjusts routes in real-time.",
        author: "Amanda Foster",
        role: "VP of Logistics",
        company: "National Freight Express",
        industry: "Logistics",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '96%', label: 'On-Time Deliveries', color: 'purple' as const },
      { number: '85%', label: 'Complaint Reduction', color: 'orange' as const },
      { number: '4.8/5', label: 'Customer Satisfaction', color: 'purple' as const },
      { number: '2.1s', label: 'Notification Speed', color: 'orange' as const }
    ]
  },
  'Real Estate': {
    title: 'Trusted by Top Agents',
    subtitle: 'Top Agents',
    description: 'See how AIVI transforms lead conversion and deal closing speed',
    testimonials: [
      {
        quote: "I went from 22% lead response to 98% overnight. AIVI's 8-second response time means I never lose a hot lead to a competitor again.",
        author: "Amanda Foster",
        role: "Top Producer",
        company: "Luxury Realty Group",
        industry: "Real Estate",
        color: 'purple' as const
      },
      {
        quote: "Automated showing scheduling freed up 20 hours weekly. The AI handles booking, confirmations, and reminders while I focus on closing deals.",
        author: "Robert Chang",
        role: "Broker/Owner",
        company: "Metro Properties",
        industry: "Real Estate",
        color: 'orange' as const
      },
      {
        quote: "My showing-to-contract conversion rate jumped 43%. Instant follow-up with property details keeps buyers engaged and ready to make offers.",
        author: "Maria Santos",
        role: "Senior Agent",
        company: "Prestige Real Estate",
        industry: "Real Estate",
        color: 'purple' as const
      },
      {
        quote: "AIVI re-engaged 300+ old leads from my database. We closed 14 deals worth $7.2M that I thought were completely dead. Absolute game-changer.",
        author: "Jason Miller",
        role: "Real Estate Investor",
        company: "Miller Property Group",
        industry: "Real Estate",
        color: 'orange' as const
      },
      {
        quote: "Open house RSVPs increased 156% with AIVI's automated text invitations. The AI sends personalized invites based on buyer preferences and follows up.",
        author: "Nicole Anderson",
        role: "Luxury Agent",
        company: "Elite Real Estate Partners",
        industry: "Real Estate",
        color: 'purple' as const
      },
      {
        quote: "My average days-on-market dropped from 42 to 18 days. AIVI nurtures interested buyers with property updates and price changes automatically.",
        author: "Christopher Lee",
        role: "Team Leader",
        company: "Prime Realty Associates",
        industry: "Real Estate",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '98%', label: 'Lead Response Rate', color: 'purple' as const },
      { number: '43%', label: 'Conversion Increase', color: 'orange' as const },
      { number: '3x', label: 'Faster Deal Closing', color: 'purple' as const },
      { number: '8s', label: 'Lead Response Time', color: 'orange' as const }
    ]
  }
};

export default function Testimonials({ industry }: TestimonialsProps = {}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false);
      if (scrollContainerRef.current) {
        scrollContainerRef.current.style.cursor = 'grab';
      }
    }
  };

  const content = industry ? testimonialsContent[industry] : {
    title: 'Trusted by Industry Leaders',
    subtitle: 'Industry Leaders',
    description: 'See how AIVI transforms customer engagement across industries',
    testimonials: [
      {
        quote: "AIVI knows what they're doing when it comes to AI SMS bots and AI lead gen. Great communication, quality product, and a pleasure to work with. Highly recommend!",
        author: "Andy Mackensen",
        role: "Founder",
        company: "LeadRoller",
        industry: "Lead Generation",
        color: 'purple' as const
      },
      {
        quote: "AIVI successfully grew our lead remarketing campaigns. From 1 in 5 using email to almost 1 in 2 using their AI SMS. Increasing our conversion rate by 120%.",
        author: "Danny Hobbs",
        role: "Marketing Director",
        company: "My Financial Broker",
        industry: "Financial Services",
        color: 'orange' as const
      },
      {
        quote: "The 13-second response time at any time of day completely transformed our lead conversion. We saw a 391% increase in qualified appointments booked.",
        author: "Michael Stevens",
        role: "VP of Sales",
        company: "Apex Insurance Group",
        industry: "Insurance",
        color: 'purple' as const
      },
      {
        quote: "AIVI's AI voice agent prequalified leads and live transferred qualified prospects to our team. We saw a 250% increase in conversion rate within 8 weeks.",
        author: "Rachel Martinez",
        role: "Director of Operations",
        company: "Prime Lending Solutions",
        industry: "Financial Services",
        color: 'orange' as const
      },
      {
        quote: "We reactivated our dormant database with AIVI's text campaigns. 105% revenue growth from customers we thought were lost forever. Absolutely incredible ROI.",
        author: "Jonathan Park",
        role: "Chief Revenue Officer",
        company: "Capital Direct",
        industry: "Financial Services",
        color: 'purple' as const
      },
      {
        quote: "80% contact rate using a mix of text and voice. AIVI handles after-hours inquiries and schedules appointments automatically. Our sales team focuses only on closing.",
        author: "Sarah Thompson",
        role: "Sales Manager",
        company: "Metro Realty Partners",
        industry: "Real Estate",
        color: 'orange' as const
      }
    ],
    stats: [
      { number: '50%', label: 'Dead Leads Revived', color: 'purple' as const },
      { number: '391%', label: 'Conversion Increase', color: 'orange' as const },
      { number: '120%', label: 'Client ROI Boost', color: 'purple' as const },
      { number: '13s', label: 'Response Time', color: 'orange' as const }
    ]
  };

  return (
    <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              {content.subtitle}
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          {/* Carousel Container with overflow hidden */}
          <div className="relative overflow-hidden py-8">
            {/* Fading Gradient Overlays - Enhanced visibility */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

            {/* Scrolling Track - Auto-scrolling with hover pause and drag */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 animate-scroll overflow-x-auto scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {/* Duplicate testimonials for seamless loop (need exactly 2 sets for -50% transform) */}
              {[...content.testimonials, ...content.testimonials].map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 w-[280px] sm:w-[340px] md:w-[380px] lg:w-[420px]">
                  <TestimonialCard
                    quote={testimonial.quote}
                    author={testimonial.author}
                    role={testimonial.role}
                    company={testimonial.company}
                    industry={testimonial.industry}
                    color={testimonial.color}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-14 md:mb-16">
          {content.stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              color={stat.color}
            />
          ))}
        </div>

        {/* Security & Compliance */}
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">
            Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <ComplianceBadge text="SOC 2 Certified" />
            <ComplianceBadge text="HIPAA Compliant" />
            <ComplianceBadge text="GDPR Ready" />
            <ComplianceBadge text="PII In-Transit Only" />
            <ComplianceBadge text="End-to-End Encryption" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  color: 'purple' | 'orange';
}

function TestimonialCard({ quote, author, role, company, industry, color }: TestimonialCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';
  const borderColor = color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30';
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500/50' : 'hover:border-orange-500/50';
  const badgeText = color === 'purple' ? 'text-purple-400' : 'text-orange-400';
  const avatarGradient = color === 'purple'
    ? 'from-purple-500/20 to-purple-600/20 border-purple-500/30 group-hover:border-purple-500'
    : 'from-orange-500/20 to-orange-600/20 border-orange-500/30 group-hover:border-orange-500';

  return (
    <div className={`group relative p-5 sm:p-6 md:p-7 lg:p-8 bg-white/5 hover:bg-white/10 backdrop-blur-md border-2 ${borderColor} ${hoverBorder} rounded-xl transition-all duration-300 hover:scale-105 overflow-hidden h-full`}>
      {/* Gradient accent bar at top - matching Integrations style */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient}`} />

      <div className="relative">
        <div className={`${badgeText} text-5xl font-bold mb-4 leading-none opacity-30`}>"</div>
        <p className="text-white/90 mb-6 leading-relaxed text-base font-light">{quote}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${avatarGradient} border-2 rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg transition-all`}>
            {author.charAt(0)}
          </div>
          <div>
            <div className="text-white font-bold text-base">{author}</div>
            <div className="text-sm text-white/70 font-medium">{role}</div>
            <div className="text-sm text-white/50">{company}</div>
          </div>
        </div>
        <div className={`inline-block px-3 py-1 bg-white/5 border border-white/20 rounded text-xs ${badgeText} font-semibold tracking-wide uppercase`}>
          {industry}
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  number: string;
  label: string;
  color: 'purple' | 'orange';
}

function StatCard({ number, label, color }: StatCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className="text-center p-4 sm:p-5 md:p-6 bg-white/5 border-2 border-white/10 rounded-xl hover:border-purple-500/50 transition-all">
      <div className={`text-3xl sm:text-4xl md:text-5xl font-black bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {number}
      </div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}

function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-3 sm:px-4 py-2 sm:py-3 bg-white/5 border-2 border-green-500/30 rounded-lg hover:border-green-500/50 transition-all">
      <FontAwesomeIcon icon={faCheck} className="text-green-400 text-sm sm:text-base md:text-lg" />
      <span className="text-white/80 font-medium text-sm sm:text-base">{text}</span>
    </div>
  );
}
