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
  title: 'AI Voice Agents for Law Firms | AIVI',
  description: 'Make client intake faster, compliant, and always available with AIVI voice AI. Book 2.5-3.5x more qualified consultations with 24/7 coverage.',
};

const useCases = [
  {
    title: 'Capture Intake Instantly',
    description: 'Collect case details, perform conflict checks, and schedule consultations automatically. Enable faster client onboarding and efficient attorney routing.',
    icon: 'intake' as const,
  },
  {
    title: 'Case Status & Documents',
    description: 'Let clients access case updates, submit documents, and receive next steps without repeated calls. Reduce follow-ups while maintaining matter visibility.',
    icon: 'status' as const,
  },
  {
    title: 'Qualify Leads Faster',
    description: 'Ensure all inquiries receive immediate attention with intent scoring and KYC-ready information. Route warm prospects to appropriate attorneys instantly.',
    icon: 'qualify-leads' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our law firm template. Connect your phone lines in minutes with secure integration.',
  },
  {
    title: 'Customize & Test',
    description: 'Add practice areas, intake questions, conflict prompts, and brand tone. Test for accuracy and compliance.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Sync with your CRM and practice management tools. Go live for intake, updates, and scheduling.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track calls, outcomes, sentiment, and operational KPIs to continuously improve client acquisition.',
  },
];

const stats = [
  { value: '2.5-3.5x', label: 'More qualified consultations booked' },
  { value: '18pt', label: 'Increase in client satisfaction' },
  { value: '100%', label: 'Calls answered, 24/7/365' },
];

const faqs = [
  {
    question: 'Will AI replace attorneys?',
    answer: 'Absolutely not. AIVI handles administrative intake tasks, allowing attorneys to focus on practicing law. The AI captures information and schedules consultations but never provides legal advice.',
  },
  {
    question: 'Is client data secure?',
    answer: 'Yes. AIVI is SOC 2 Type II certified and follows attorney-client privilege protocols. All data is encrypted and access is strictly controlled.',
  },
  {
    question: 'Can AIVI support compliance and confidentiality?',
    answer: 'Yes. AIVI can be configured with required disclosures, conflict check protocols, and confidentiality scripts appropriate for legal intake.',
  },
  {
    question: 'Does AIVI avoid giving legal advice?',
    answer: 'Absolutely. AIVI is specifically trained to capture information and schedule consultations. It explicitly directs clients to speak with an attorney for any legal questions.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'Over 100 languages and dialects, enabling your firm to serve diverse client populations without language barriers.',
  },
  {
    question: 'How do I measure ROI?',
    answer: 'Track consultations booked, cost per intake, response time, and conversion rates. Most firms see positive ROI within weeks through increased qualified consultations.',
  },
];

export default function LegalSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Law Firms"
            subheadline="Make client intake faster, compliant, and always available with intelligent voice automation. Never miss a potential client, even at 3 AM."
            audioLabel="Listen to AIVI capture a legal inquiry"
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
