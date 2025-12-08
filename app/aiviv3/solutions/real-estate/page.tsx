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
  description: 'Never lose a lead to voicemail again. AIVI AI voice agents qualify buyers, answer property questions, and book showings 24/7—so you close more deals faster.',
};

const useCases = [
  {
    title: 'Capture Every Lead, Day or Night',
    description: 'Buyers don\'t wait for business hours. AIVI answers every inquiry instantly, qualifies budget and timeline, and books showings before your competitors even call back.',
    icon: 'qualify' as const,
  },
  {
    title: 'Your Listings, Always Available',
    description: 'AIVI knows every property in your portfolio—square footage, price history, HOA fees, school districts. Buyers get instant, accurate answers that build confidence and accelerate decisions.',
    icon: 'info' as const,
  },
  {
    title: 'Fill Your Calendar with Qualified Showings',
    description: 'Stop playing phone tag. AIVI coordinates schedules, sends confirmations, handles reschedules, and follows up—turning interest into booked appointments automatically.',
    icon: 'schedule' as const,
  },
];

const steps = [
  {
    title: 'Import Your Listings',
    description: 'Connect your MLS feed or upload listings directly. AIVI learns every property detail in minutes.',
  },
  {
    title: 'Set Your Criteria',
    description: 'Define qualification questions, availability windows, and routing rules. AIVI knows exactly who deserves your time.',
  },
  {
    title: 'Go Live Instantly',
    description: 'Forward your line or get a new number. AIVI handles calls, texts, and web inquiries from day one.',
  },
  {
    title: 'Close More Deals',
    description: 'Focus on showings while AIVI nurtures leads, sends reminders, and keeps your pipeline full.',
  },
];

const stats = [
  { value: '40%', label: 'More showings booked' },
  { value: '2min', label: 'Average lead response time' },
  { value: '24/7', label: 'Lead capture & qualification' },
];

const faqs = [
  {
    question: 'How does AIVI handle multiple listings?',
    answer: 'AIVI connects directly to your MLS feed and syncs in real-time. Whether you have 10 listings or 10,000, every property detail is instantly accessible. Buyers get accurate pricing, availability, and property specs without you lifting a finger.',
  },
  {
    question: 'Can AIVI differentiate between buyers and sellers?',
    answer: 'Yes. AIVI uses intelligent questioning to determine caller intent within seconds. Buyers are qualified on budget, timeline, and preferences. Sellers are captured for listing appointments. Each gets routed appropriately.',
  },
  {
    question: 'What happens when a buyer wants to see a property immediately?',
    answer: 'AIVI checks your real-time calendar availability and offers showing times instantly. For urgent requests, it can text you for approval or route directly to your cell. You control the escalation rules.',
  },
  {
    question: 'Does AIVI work with my existing CRM?',
    answer: 'AIVI integrates with Follow Up Boss, kvCORE, BoomTown, Salesforce, HubSpot, and 40+ other real estate platforms. Leads flow directly into your pipeline with full conversation context and qualification data.',
  },
  {
    question: 'How do international buyers communicate with AIVI?',
    answer: 'AIVI speaks 100+ languages fluently. International buyers can inquire in Mandarin, Spanish, Arabic, or any major language—and receive the same premium experience as English speakers.',
  },
  {
    question: 'What\'s the ROI for a typical brokerage?',
    answer: 'Brokerages report 40% more showings booked and 25% faster time-to-contract. At $0.15-0.30 per minute versus $15-25 per lead for traditional ISAs, AIVI typically pays for itself in the first week.',
  },
];

export default function RealEstateSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Never Lose Another Lead to Voicemail"
            subheadline="While you're at a showing, AIVI is qualifying your next buyer. Our AI voice agents answer every call, capture every lead, and book showings around the clock—so you can focus on closing deals."
            audioLabel="Hear AIVI qualify a buyer and book a showing"
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
