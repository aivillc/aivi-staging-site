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
  description: 'Deliver 5-star service at every touchpoint. AIVI AI voice agents handle reservations, guest inquiries, and concierge requests 24/7—so your staff can focus on creating unforgettable experiences.',
};

const useCases = [
  {
    title: 'Never Miss a Reservation',
    description: 'Every booking inquiry gets answered instantly. AIVI checks real-time availability, processes reservations, handles modifications, and sends confirmations—even at 2 AM when the front desk is busy.',
    icon: 'reservation' as const,
  },
  {
    title: 'Instant Answers, Happy Guests',
    description: 'Check-in times, pool hours, restaurant menus, local recommendations—AIVI answers in seconds. Guests get the information they need without waiting on hold, improving satisfaction before they even arrive.',
    icon: 'faq' as const,
  },
  {
    title: '24/7 Concierge Excellence',
    description: 'Late-night room service, airport shuttle requests, spa appointments, local dining reservations—AIVI handles it all. Deliver luxury-level service without the luxury-level staffing costs.',
    icon: 'concierge' as const,
  },
];

const steps = [
  {
    title: 'Connect Your Property',
    description: 'Integrate with your PMS, booking engine, and phone system. AIVI syncs availability and rates in real-time.',
  },
  {
    title: 'Customize the Experience',
    description: 'Train AIVI on your amenities, policies, local recommendations, and brand voice. Sound exactly like your best concierge.',
  },
  {
    title: 'Launch Across Channels',
    description: 'Answer phone calls, web inquiries, and SMS. Handle multiple languages for international guests seamlessly.',
  },
  {
    title: 'Elevate Guest Satisfaction',
    description: 'Monitor real-time feedback, track resolution rates, and continuously improve. Watch your reviews climb.',
  },
];

const stats = [
  { value: '97%', label: 'Calls resolved without staff' },
  { value: '4.8★', label: 'Average post-call rating' },
  { value: '0', label: 'Missed reservation calls' },
];

const faqs = [
  {
    question: 'How does AIVI handle complex booking requests?',
    answer: 'AIVI manages multi-room bookings, special requests (cribs, accessible rooms, anniversary setups), package upgrades, and group reservations. For truly complex situations, it seamlessly transfers to staff with full context.',
  },
  {
    question: 'Can AIVI upsell rooms and amenities?',
    answer: 'Yes. AIVI intelligently suggests upgrades, spa packages, dining reservations, and experiences based on guest profiles and booking patterns. Properties report 15-20% lift in ancillary revenue from AI-powered recommendations.',
  },
  {
    question: 'How do you handle VIP and loyalty guests differently?',
    answer: 'AIVI recognizes returning guests and loyalty members instantly. VIPs receive personalized greetings, priority handling, and immediate escalation paths to management. Their preferences are remembered across stays.',
  },
  {
    question: 'What PMS systems does AIVI integrate with?',
    answer: 'AIVI connects natively with Opera, Cloudbeds, Mews, RoomRaccoon, Little Hotelier, and 30+ property management systems. Real-time two-way sync ensures availability and rates are always current.',
  },
  {
    question: 'Can one AIVI handle multiple properties?',
    answer: 'Absolutely. Multi-property chains use a single AIVI deployment with customized responses per location. Callers are routed correctly, and each property maintains its unique brand voice while sharing centralized management.',
  },
  {
    question: 'How do international guests experience AIVI?',
    answer: 'AIVI speaks 100+ languages with natural accents. A Japanese guest calling your Miami hotel speaks Japanese; a Brazilian guest speaks Portuguese. The AI detects language automatically and responds accordingly.',
  },
];

export default function HospitalitySolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="5-Star Service, Zero Hold Time"
            subheadline="Your guests expect instant, exceptional service—at 3 PM and 3 AM. AIVI delivers concierge-level assistance for every caller, handling reservations, requests, and inquiries while your team creates unforgettable in-person experiences."
            audioLabel="Hear AIVI assist a guest with a special request"
          />
          <StatsBar stats={stats} />
          <UseCaseCards useCases={useCases} />
          <IntegrationLogos />
          <HowItWorks steps={steps} />
          <IndustryFAQ faqs={faqs} />
          <IndustryCTA />
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
