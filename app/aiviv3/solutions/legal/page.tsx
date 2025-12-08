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
  description: 'Never miss another potential client. AIVI AI voice agents handle legal intake 24/7, qualify cases, schedule consultations, and keep existing clients informed—all while maintaining attorney-client confidentiality.',
};

const useCases = [
  {
    title: 'Capture Every Case, Day or Night',
    description: 'Legal emergencies don\'t wait for business hours. AIVI answers every call instantly, collects case details, runs conflict checks, and schedules consultations—converting after-hours inquiries into signed retainers.',
    icon: 'intake' as const,
  },
  {
    title: 'Keep Clients Informed Automatically',
    description: 'Reduce "what\'s my case status?" calls by 70%. AIVI provides real-time updates on filings, court dates, document requests, and next steps—keeping clients satisfied without interrupting your attorneys.',
    icon: 'status' as const,
  },
  {
    title: 'Focus on Cases That Matter',
    description: 'Not every caller is a qualified client. AIVI screens for case merit, jurisdiction fit, and budget—routing only viable matters to your attorneys while politely declining or referring mismatches.',
    icon: 'qualify-leads' as const,
  },
];

const steps = [
  {
    title: 'Configure Your Practice Areas',
    description: 'Define intake questions for each practice area—PI, family law, criminal defense, estate planning. AIVI learns your qualification criteria and conflict parameters.',
  },
  {
    title: 'Integrate Your Systems',
    description: 'Connect with Clio, MyCase, PracticePanther, or your practice management platform. Calendar availability and client data sync automatically.',
  },
  {
    title: 'Train on Your Voice',
    description: 'Customize greetings, firm values, and communication style. AIVI represents your firm professionally while you\'re in court or with clients.',
  },
  {
    title: 'Grow Your Practice',
    description: 'Monitor intake metrics, conversion rates, and call quality. Watch your consultation calendar fill while your cost per acquisition drops.',
  },
];

const stats = [
  { value: '3x', label: 'More consultations booked' },
  { value: '70%', label: 'Reduction in status calls' },
  { value: '24/7', label: 'Intake coverage' },
];

const faqs = [
  {
    question: 'How does AIVI handle attorney-client confidentiality?',
    answer: 'AIVI treats all communications as privileged from first contact. Data is encrypted end-to-end, access is strictly controlled, and we maintain SOC 2 Type II certification. AIVI never stores call content beyond what\'s needed for your case management system integration.',
  },
  {
    question: 'Will AIVI accidentally give legal advice?',
    answer: 'Never. AIVI is explicitly trained to collect information, not dispense guidance. When callers ask legal questions, AIVI responds: "I can\'t provide legal advice, but I can schedule you with an attorney who can help." This boundary is absolute.',
  },
  {
    question: 'How does conflict checking work?',
    answer: 'AIVI collects party names, opposing counsel, and relevant entities, then cross-references your conflict database in real-time. Potential conflicts are flagged immediately for attorney review before any consultation is scheduled.',
  },
  {
    question: 'Can AIVI qualify personal injury cases?',
    answer: 'Yes. AIVI collects incident details, injury severity, treatment status, liability indicators, and statute of limitations information. Cases are scored and prioritized so your best opportunities get immediate attorney attention.',
  },
  {
    question: 'What practice management systems does AIVI integrate with?',
    answer: 'AIVI connects with Clio, MyCase, PracticePanther, Smokeball, Filevine, and 25+ legal practice management platforms. New intakes flow directly into your system with complete case details and scheduled consultation times.',
  },
  {
    question: 'What ROI do law firms typically see?',
    answer: 'Firms report 3x more consultations from the same marketing spend by capturing after-hours leads. With average case values of $5,000-50,000+ and AIVI\'s monthly cost equivalent to a few billable hours, most firms see significant ROI from their first signed case.',
  },
];

export default function LegalSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Turn Every Call Into a Consultation"
            subheadline="That potential million-dollar case called at 11 PM. Your receptionist wasn't there. A competitor answered. AIVI ensures this never happens—handling intake, qualifying cases, and scheduling consultations 24/7 while you focus on practicing law."
            audioLabel="Hear AIVI qualify a legal intake"
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
