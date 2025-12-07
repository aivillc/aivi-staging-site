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
  title: 'AI Voice Agents for Healthcare | AIVI',
  description: 'Keep patients cared for with HIPAA-ready AI voice agents. Reduce no-shows by 35-50% and resolve 80%+ of patient calls automatically.',
};

const useCases = [
  {
    title: 'Manage Appointments Effortlessly',
    description: 'Automate scheduling, rescheduling, and reminders to reduce no-shows. Keep calendars optimized and free staff to focus on patient care.',
    icon: 'appointment' as const,
  },
  {
    title: 'Educate Patients Instantly',
    description: 'Provide clear, real-time answers about treatments, wellness programs, medications, and procedures. Build patient trust and understanding without staff intervention.',
    icon: 'educate' as const,
  },
  {
    title: 'After-Hours Patient Support',
    description: 'Ensure patients receive timely assistance any time of day. Address urgent needs promptly and prevent important calls from being missed.',
    icon: 'support' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our healthcare template. Connect your clinic, spa, or fitness line in minutes.',
  },
  {
    title: 'Customize & Test',
    description: 'Add services, schedules, FAQs, and brand tone. Test your agent to ensure HIPAA-compliant responses.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Connect your CRM and EHR tools. Go live for appointments, rescheduling, and reminders.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track calls, outcomes, sentiment analysis, and patient engagement KPIs to improve care access.',
  },
];

const stats = [
  { value: '35-50%', label: 'Reduction in patient no-shows' },
  { value: '100+', label: 'Languages supported' },
  { value: '80%+', label: 'Patient calls fully resolved' },
];

const faqs = [
  {
    question: 'Can AI improve patient engagement?',
    answer: 'Yes. From automated wellness reminders to personalized follow-ups, AIVI keeps patients actively engaged in their care journey between visits.',
  },
  {
    question: 'Can AIVI help doctors and nurses?',
    answer: 'Absolutely. AIVI supports healthcare teams by handling repetitive calls like scheduling, reminders, and FAQs. This lets clinical staff focus entirely on patient care.',
  },
  {
    question: 'Which languages can patients use?',
    answer: 'Over 100 languages and dialects, making care accessible for diverse communities. Whether English, Spanish, Mandarin, or regional dialects, AIVI adapts.',
  },
  {
    question: 'How do I measure ROI in healthcare?',
    answer: 'Track reduced no-shows, faster scheduling, increased patient satisfaction (CSAT), and cost savings from fewer manual calls. Most practices see ROI within weeks.',
  },
  {
    question: 'Is patient data secure with AIVI?',
    answer: 'Yes. AIVI is HIPAA-ready and compliant with ISO 27001 and SOC 2 standards, ensuring sensitive health data remains fully protected.',
  },
];

export default function HealthcareSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Healthcare"
            subheadline="Keep patients cared for, engaged, and your operations stress-free with HIPAA-ready voice AI. Reduce no-shows and improve access to care 24/7."
            audioLabel="Listen to AIVI help a patient schedule their appointment"
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
