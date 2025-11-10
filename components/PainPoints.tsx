'use client';

import { useState } from 'react';

interface PainPointsProps {
  industry?: 'Financial' | 'Healthcare' | 'Law Firms' | 'Real Estate' | 'Logistics';
}

const painPointsContent = {
  Financial: {
    title: 'Stop Losing Clients to',
    subtitle: 'Slow Onboarding',
    description: 'Every delayed response costs you a high-value client. Modern investors expect instant communication. Can you deliver?',
    painPoints: [
      { title: 'Slow Onboarding', stat: '45% abandon process', solution: '12-second response time', color: 'purple' as const },
      { title: 'Manual Document Processing', stat: '20+ hours wasted weekly', solution: 'Automated document handling', color: 'orange' as const },
      { title: 'Low Client Retention', stat: '$500K+ lost annually', solution: '78% retention increase', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Financial Firms This Month',
    spotsText: 'Current availability: 6 spots'
  },
  Healthcare: {
    title: 'Stop Losing Patients to',
    subtitle: 'Slow Follow-Ups',
    description: 'Every missed appointment reminder costs you $200 in lost revenue. Your patients expect instant communication. Can you deliver?',
    painPoints: [
      { title: 'High No-Shows', stat: '30% miss appointments', solution: '67% no-show reduction', color: 'purple' as const },
      { title: 'Manual Reminders', stat: '15+ hours wasted weekly', solution: '100% automated reminders', color: 'orange' as const },
      { title: 'Low Patient Engagement', stat: '$100K+ lost annually', solution: '2x patient retention', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Healthcare Practices This Month',
    spotsText: 'Current availability: 6 spots'
  },
  'Law Firms': {
    title: 'Stop Losing Clients to',
    subtitle: 'Slow Response Times',
    description: 'Every hour delay costs you a potential client. Legal clients expect immediate attention. Can you keep up?',
    painPoints: [
      { title: 'Missed Consultations', stat: '60% never schedule', solution: '15-second response time', color: 'purple' as const },
      { title: 'Manual Case Updates', stat: '18+ hours wasted weekly', solution: 'Automated client updates', color: 'orange' as const },
      { title: 'Low Client Retention', stat: '$300K+ lost annually', solution: '85% retention increase', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Law Firms This Month',
    spotsText: 'Current availability: 6 spots'
  },
  Logistics: {
    title: 'Stop Losing Customers to',
    subtitle: 'Delivery Issues',
    description: 'Every failed delivery costs you $50+ and a customer. Real-time updates keep customers happy. Can you afford not to?',
    painPoints: [
      { title: 'Failed Deliveries', stat: '15% require re-delivery', solution: '30-min arrival warnings', color: 'purple' as const },
      { title: 'Manual Updates', stat: '25+ hours wasted weekly', solution: 'Real-time auto-updates', color: 'orange' as const },
      { title: 'Customer Complaints', stat: '500+ calls monthly', solution: '85% complaint reduction', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Logistics Companies This Month',
    spotsText: 'Current availability: 6 spots'
  },
  'Real Estate': {
    title: 'Stop Losing Deals to',
    subtitle: 'Slow Response Times',
    description: 'Every hour delay costs you 5 potential buyers. Your competition responds instantly. Can you keep up?',
    painPoints: [
      { title: 'Leads Go Cold', stat: '78% never get a showing', solution: '8-second lead response', color: 'purple' as const },
      { title: 'Manual Scheduling', stat: '20+ hours wasted weekly', solution: 'Automated showing booking', color: 'orange' as const },
      { title: 'Missed Opportunities', stat: '$200K+ lost annually', solution: '3x faster deal closing', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Real Estate Agents This Month',
    spotsText: 'Current availability: 6 spots'
  }
};

export default function PainPoints({ industry }: PainPointsProps = {}) {
  const content = industry ? painPointsContent[industry] : {
    title: 'Stop Losing Clients to Outbound That\'s Now',
    subtitle: 'Outdated',
    description: 'Traditional outbound calling is failing. Modern customers ignore unknown numbers and sophisticated call screening blocks your reach. Can your business afford to keep losing opportunities?',
    painPoints: [
      { title: 'Unknown Numbers', stat: '87% don\'t answer', solution: 'AIVI warms leads through SMS and email before initiating outbound calls, ensuring higher connection rates', color: 'purple' as const },
      { title: 'Apple & Google Call Screening', stat: 'Blocks 60% of calls', solution: 'AIVI\'s intelligent system detects call screening technology and adapts in real-time to reach customers through alternative channels', color: 'orange' as const },
      { title: 'Loss of Intent', stat: 'Intent drops 80%/hour', solution: 'AIVI\'s instant multi-channel outreach captures customers at peak interest, maximizing conversion potential', color: 'purple' as const },
    ],
    ctaText: 'Limited: 10 Spots This Month',
    spotsText: 'Current availability: 6 spots'
  };

  return (
    <section className="relative py-24 px-6 bg-white border-y border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            {content.title}{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
              {content.subtitle}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Pain Points Grid - SLEEK */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.painPoints.map((point, index) => (
            <PainPointCard
              key={index}
              title={point.title}
              stat={point.stat}
              solution={point.solution}
              color={point.color}
            />
          ))}
        </div>

        {/* Urgency CTA */}
        <div className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-r from-purple-600 to-orange-500 rounded-2xl shadow-2xl">
          <p className="text-white text-2xl font-bold mb-2">
            {content.ctaText}
          </p>
          <p className="text-white/90 text-lg">
            {content.spotsText.split(':')[0]}: <span className="font-black text-3xl">{content.spotsText.split(':')[1]}</span>
          </p>
        </div>
      </div>
    </section>
  );
}

interface PainPointCardProps {
  title: string;
  stat: string;
  solution: string;
  color: 'purple' | 'orange';
}

function PainPointCard({ title, stat, solution, color }: PainPointCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-br ${gradient} rounded-2xl blur-xl transition-all duration-500 ${
        isHovered ? 'opacity-30' : 'opacity-0'
      }`} />
      
      <div className="relative h-full p-8 bg-white border-2 border-gray-200 hover:border-gray-300 rounded-2xl transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
        {/* Animated top border */}
        <div className={`absolute top-0 left-0 h-1 bg-gradient-to-r ${gradient} transition-all duration-500 ${
          isHovered ? 'w-full' : 'w-0'
        }`} />
        
        {/* Animated side accent bar */}
        <div className={`absolute top-0 left-0 w-1 bg-gradient-to-b ${gradient} transition-all duration-500 ${
          isHovered ? 'h-full' : 'h-16'
        }`} />
        
        {/* Content */}
        <div className={`transition-all duration-300 ${isHovered ? '-translate-y-1' : 'translate-y-0'}`}>
          <h3 className={`text-2xl font-black mb-3 pl-4 transition-all duration-300 ${
            isHovered 
              ? 'text-transparent bg-gradient-to-r bg-clip-text ' + gradient 
              : 'text-black'
          }`}>
            {title}
          </h3>
          
          <div className={`mb-4 pl-4 transition-all duration-300 ${isHovered ? 'scale-105' : 'scale-100'}`}>
            <p className="text-red-600 font-bold text-lg">{stat}</p>
          </div>

          <div className={`h-px bg-gradient-to-r from-gray-300 to-transparent mb-4 transition-all duration-500 ${
            isHovered ? 'opacity-100 scale-x-100' : 'opacity-50 scale-x-75'
          } origin-left`} />

          <div className="flex items-start gap-2 pl-4">
            <span className={`font-black text-xl transition-all duration-300 ${
              isHovered 
                ? `text-transparent bg-gradient-to-r bg-clip-text ${gradient} scale-125` 
                : 'text-green-600 scale-100'
            }`}>
              ✓
            </span>
            <p className={`font-medium transition-colors duration-300 ${
              isHovered ? 'text-gray-900' : 'text-gray-700'
            }`}>
              {solution}
            </p>
          </div>
        </div>
        
        {/* Background gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${
          color === 'purple' ? 'from-purple-50 to-transparent' : 'from-orange-50 to-transparent'
        } opacity-0 group-hover:opacity-50 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
      </div>
    </div>
  );
}
