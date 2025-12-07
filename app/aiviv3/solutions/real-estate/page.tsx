import { Metadata } from 'next';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import {
  IndustryHero,
  UseCaseCards,
  HowItWorks,
  StatsBar,
  IntegrationLogos,
  IndustryFAQ,
  IndustryCTA,
} from '@/components/aiviv3/shared';

export const metadata: Metadata = {
  title: 'AI Voice Agents for Real Estate | AIVI',
  description: 'Convert property inquiries into site visits and prospects into buyers with AIVI voice AI. Increase tour bookings by 25-40% with 24/7 lead engagement.',
};

const useCases = [
  {
    title: 'Qualify Leads Instantly',
    description: 'Engage property inquiries immediately, evaluate buyer intent, collect key details, and trigger timely follow-ups that convert interest into confirmed viewings.',
    icon: 'qualify' as const,
  },
  {
    title: 'Provide Property Information',
    description: 'Deliver real-time details on pricing, amenities, location, and availability. Keep buyers informed and accelerate their decision-making process.',
    icon: 'info' as const,
  },
  {
    title: 'Schedule Tours Effortlessly',
    description: 'Automate booking, rescheduling, and reminders for property viewings. Reduce no-shows and keep agent calendars optimized for closings.',
    icon: 'schedule' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our real estate template. Connect your brokerage or property line in minutes.',
  },
  {
    title: 'Customize & Test',
    description: 'Add listings, neighborhoods, pricing, availability windows, FAQs, and your brand tone.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Connect your CRM and tools for instant sync. Go live for lead qualification and showing bookings.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track calls, outcomes, sentiment analysis, and conversion KPIs to continuously improve.',
  },
];

const stats = [
  { value: '25-40%', label: 'More tour bookings from calls' },
  { value: '100+', label: 'Languages supported' },
  { value: '95%', label: 'Reduction in cost per contact' },
];

const faqs = [
  {
    question: 'Will AI voice replace real estate agents?',
    answer: 'No. AIVI supports agents by handling initial inquiries, scheduling, and follow-ups. This frees agents to focus on what matters most: showing properties and closing deals.',
  },
  {
    question: 'Is client data secure with AIVI?',
    answer: 'Yes. AIVI is ISO 27001 and SOC 2 compliant, ensuring all client information is protected with enterprise-grade security protocols.',
  },
  {
    question: 'Can AIVI answer property-specific questions?',
    answer: 'Absolutely. AIVI can provide detailed information on pricing, location, amenities, availability, and neighborhood details for every listing in your portfolio.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'Over 100 languages and dialects, making AIVI ideal for diverse markets and international buyers.',
  },
  {
    question: 'How do I measure ROI?',
    answer: 'Track response times, booking rates, follow-up completion, and closures. Most brokerages see positive ROI within weeks through increased showing volume.',
  },
  {
    question: 'Does AIVI work after hours?',
    answer: 'Yes. AIVI operates 24/7, ensuring late-night and weekend inquiries are captured and qualified while you sleep.',
  },
];

export default function RealEstateSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Real Estate"
            subheadline="Convert property inquiries into site visits and prospects into buyers with intelligent voice automation. Engage leads 24/7 and never miss a showing opportunity."
            audioLabel="Listen to AIVI book a property tour"
          />
          <UseCaseCards useCases={useCases} />
          <HowItWorks steps={steps} />
          <StatsBar stats={stats} />
          <IntegrationLogos />
          <IndustryFAQ faqs={faqs} />
          <IndustryCTA />
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
