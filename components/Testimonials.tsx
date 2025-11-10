'use client';

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
        quote: "Client onboarding time dropped from 3 days to 12 seconds. AIVI's automated document processing and verification saved us countless hours.",
        author: "Robert Chen",
        role: "Managing Partner",
        company: "Summit Wealth Advisors",
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
  const content = industry ? testimonialsContent[industry] : {
    title: 'Trusted by Industry Leaders',
    subtitle: 'Industry Leaders',
    description: 'See how AIVI transforms customer engagement across industries',
    testimonials: [
      {
        quote: "AIVI successfully grew our lead remarketing campaigns. From 1 in 5 using email to almost 1 in 2 using their AI SMS. Increasing our conversion rate by 120%.",
        author: "Marketing Director",
        role: "Lead Generation Manager",
        company: "AIVI Client",
        industry: "Lead Generation",
        color: 'purple' as const
      },
      {
        quote: "The document intelligence feature alone saved us 20 hours per week. OCR + LLM automatically processes invoices and updates our CRM.",
        author: "Michael Chen",
        role: "Director of Finance",
        company: "Capital Solutions Group",
        industry: "Financial Services",
        color: 'orange' as const
      },
      {
        quote: "Their managed service team had us up and running in 48 hours. The ROI was immediate—we saw 35% increase in policy renewals.",
        author: "Jennifer Adams",
        role: "Chief Marketing Officer",
        company: "Shield Insurance Partners",
        industry: "Insurance",
        color: 'purple' as const
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
    <section className="relative py-24 px-6 bg-black">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Trusted by{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              {content.subtitle}
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {content.testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              company={testimonial.company}
              industry={testimonial.industry}
              color={testimonial.color}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
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
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
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
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500/70' : 'hover:border-orange-500/70';
  const badgeBg = color === 'purple' ? 'bg-purple-500/10' : 'bg-orange-500/10';
  const badgeBorder = color === 'purple' ? 'border-purple-500/30' : 'border-orange-500/30';
  const badgeText = color === 'purple' ? 'text-purple-400' : 'text-orange-400';
  const glowColor = color === 'purple' ? 'rgba(139, 92, 246, 0.2)' : 'rgba(255, 107, 53, 0.2)';

  return (
    <div className={`group relative p-8 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md border-2 ${borderColor} ${hoverBorder} rounded-2xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1`}
         style={{ boxShadow: `0 0 0 0 ${glowColor}`, transition: 'all 0.5s ease' }}
         onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 20px 60px ${glowColor}`}
         onMouseLeave={(e) => e.currentTarget.style.boxShadow = `0 0 0 0 ${glowColor}`}>
      {/* Gradient accent bar */}
      <div className={`absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b ${gradient} rounded-l-2xl opacity-80 group-hover:w-2 transition-all duration-300`} />
      
      {/* Corner accent */}
      <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-br ${gradient} opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-300`} />
      
      <div className="relative pl-4">
        <div className={`${color === 'purple' ? 'text-purple-400' : 'text-orange-400'} text-6xl font-bold mb-4 leading-none opacity-40`}>"</div>
        <p className="text-white/90 mb-6 leading-relaxed text-base font-light">{quote}</p>
        <div className="flex items-center gap-4 mb-4">
          <div className={`w-14 h-14 bg-gradient-to-br ${gradient} rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg`}>
            {author.charAt(0)}
          </div>
          <div>
            <div className="text-white font-bold text-base">{author}</div>
            <div className="text-sm text-white/70 font-medium">{role}</div>
            <div className="text-sm text-white/50">{company}</div>
          </div>
        </div>
        <div className={`inline-block px-4 py-1.5 ${badgeBg} border ${badgeBorder} rounded-full text-xs ${badgeText} font-semibold tracking-wide backdrop-blur-sm`}>
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
    <div className="text-center p-6 bg-white/5 border-2 border-white/10 rounded-xl hover:border-purple-500/50 transition-all">
      <div className={`text-4xl md:text-5xl font-black bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2`}>
        {number}
      </div>
      <div className="text-sm text-white/60 font-medium">{label}</div>
    </div>
  );
}

function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-2 border-green-500/30 rounded-lg hover:border-green-500/50 transition-all">
      <FontAwesomeIcon icon={faCheck} className="text-green-400 text-lg" />
      <span className="text-white/80 font-medium">{text}</span>
    </div>
  );
}
