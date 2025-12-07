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
  title: 'AI Voice Agents for Hospitality | AIVI',
  description: 'Welcome guests, manage bookings, and deliver always-on concierge service with AIVI voice AI. Handle 85-97% of non-reservation calls from day one.',
};

const useCases = [
  {
    title: 'Manage Reservations Effortlessly',
    description: 'Handle bookings, reschedules, cancellations, and confirmations automatically. Help guests secure their plans while freeing staff for exceptional service.',
    icon: 'reservation' as const,
  },
  {
    title: 'Answer Guest FAQs Instantly',
    description: 'Respond to questions about parking, WiFi, breakfast hours, late checkout, and amenities immediately. Reduce repeated calls with accurate, consistent information.',
    icon: 'faq' as const,
  },
  {
    title: 'After-Hours Concierge Support',
    description: 'Fulfill guest requests anytime - extra pillows, airport transfers, restaurant recommendations. Maintain seamless service when staff are offline.',
    icon: 'concierge' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our hospitality template. Connect your hotel or restaurant line in minutes.',
  },
  {
    title: 'Customize & Test',
    description: 'Add availability rules, amenities, policies, menus, FAQs, and your brand tone.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Sync your CRM and booking tools. Go live for reservations, FAQs, and guest requests.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track real-time calls, outcomes, guest sentiment, and service KPIs to improve experiences.',
  },
];

const stats = [
  { value: '85-97%', label: 'Non-reservation calls handled day-1' },
  { value: '80%+', label: 'Guest calls fully resolved' },
  { value: '<200ms', label: 'Median voice response latency' },
];

const faqs = [
  {
    question: 'Will AI voice replace front desk staff?',
    answer: 'No. AIVI supports your team by handling repetitive inquiries and after-hours requests. This frees staff to deliver exceptional in-person guest experiences that build loyalty.',
  },
  {
    question: 'Can AIVI handle multi-property chains?',
    answer: 'Yes. AIVI scales seamlessly from boutique hotels to nationwide chains without adding headcount. Each property can have customized responses while sharing a unified platform.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'Over 100 languages and dialects, making AIVI ideal for international travelers and diverse guest bases. The AI adapts pronunciation and cultural context automatically.',
  },
  {
    question: 'How do I measure ROI in hospitality?',
    answer: 'Track higher booking conversion rates, fewer missed calls, reduced front desk workload, and improved guest satisfaction scores. Most properties see ROI within the first month.',
  },
  {
    question: 'Does AIVI work 24/7?',
    answer: 'Yes. AIVI handles late-night inquiries, early morning check-in questions, and urgent guest requests around the clock without staffing concerns.',
  },
];

export default function HospitalitySolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Hospitality"
            subheadline="Welcome guests, manage bookings, and deliver always-on concierge service with voice AI that never sleeps. Create memorable experiences from the first call."
            audioLabel="Listen to AIVI help a guest book their stay"
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
