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
  description: 'HIPAA-compliant AI voice agents that transform patient access. Reduce no-shows by 50%, automate scheduling, and let your clinical staff focus on what matters—patient care.',
};

const useCases = [
  {
    title: 'Eliminate No-Shows Forever',
    description: 'AIVI sends smart reminders, handles reschedules on the spot, and fills cancellations from your waitlist automatically. Practices report 50% fewer no-shows and optimized provider schedules.',
    icon: 'appointment' as const,
  },
  {
    title: 'Empower Patients with Instant Answers',
    description: 'Pre-visit instructions, medication questions, insurance verification, lab result availability—patients get accurate information immediately, reducing anxiety and building trust in your practice.',
    icon: 'educate' as const,
  },
  {
    title: 'Compassionate Care, Around the Clock',
    description: 'After-hours calls don\'t go to voicemail. AIVI triages urgency, schedules next-day appointments, answers common questions, and escalates true emergencies—so patients always feel cared for.',
    icon: 'support' as const,
  },
];

const steps = [
  {
    title: 'HIPAA-Compliant Setup',
    description: 'Connect securely with your EHR and practice management system. AIVI meets all compliance requirements from day one.',
  },
  {
    title: 'Configure Clinical Workflows',
    description: 'Define appointment types, triage protocols, and escalation rules. Train AIVI on your services, insurance, and patient communication standards.',
  },
  {
    title: 'Deploy Across Access Points',
    description: 'Handle phone calls, patient portal messages, and appointment requests. Integrate with Epic, Cerner, athenahealth, and 40+ platforms.',
  },
  {
    title: 'Improve Patient Outcomes',
    description: 'Track access metrics, patient satisfaction, and operational efficiency. AIVI helps you deliver better care to more patients.',
  },
];

const stats = [
  { value: '50%', label: 'Reduction in no-shows' },
  { value: '89%', label: 'Patient satisfaction rate' },
  { value: '3x', label: 'More calls handled' },
];

const faqs = [
  {
    question: 'Is AIVI truly HIPAA compliant?',
    answer: 'Yes. AIVI maintains a signed BAA, encrypts all PHI in transit and at rest, maintains detailed audit logs, and undergoes regular third-party security assessments. We\'re built for healthcare from the ground up.',
  },
  {
    question: 'How does AIVI handle urgent medical situations?',
    answer: 'AIVI is trained to recognize urgency indicators and follows your defined triage protocols. True emergencies are immediately escalated—transferred to on-call staff, directed to emergency services, or routed per your guidelines. Non-urgent after-hours calls are handled appropriately.',
  },
  {
    question: 'Can AIVI access patient records?',
    answer: 'AIVI integrates with your EHR to provide relevant information within HIPAA guidelines. It can confirm upcoming appointments, provide pre-visit instructions, and verify basic information—always following your access control policies.',
  },
  {
    question: 'What EHR systems does AIVI work with?',
    answer: 'AIVI integrates with Epic, Cerner, athenahealth, eClinicalWorks, NextGen, Allscripts, and 40+ healthcare platforms. Our healthcare integration team ensures smooth deployment with your existing systems.',
  },
  {
    question: 'How do you handle non-English speaking patients?',
    answer: 'AIVI speaks 100+ languages with medically-appropriate vocabulary. Patients can communicate in their preferred language, improving access to care and health literacy for diverse communities.',
  },
  {
    question: 'What\'s the ROI for a typical practice?',
    answer: 'A practice with 20% no-show rates loses $150,000+ annually. AIVI cuts that in half while handling 3x the call volume with existing staff. Most practices achieve positive ROI within 30 days through reduced no-shows and improved operational efficiency.',
  },
];

export default function HealthcareSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Better Patient Access, Without More Staff"
            subheadline="Your front desk is overwhelmed. Patients wait on hold. No-shows drain revenue. AIVI changes everything—handling scheduling, reminders, and patient inquiries 24/7 while maintaining full HIPAA compliance. Let your team focus on care."
            audioLabel="Hear AIVI schedule a patient appointment"
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
