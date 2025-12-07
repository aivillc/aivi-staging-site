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
  title: 'AI Voice Agents for Financial Services | AIVI',
  description: 'Make banking faster, safer, and always available with compliant AI voice agents. Complete KYC 35% faster and reduce cost per contact by 95%.',
};

const useCases = [
  {
    title: 'Handle Customer Calls Instantly',
    description: 'Answer loan inquiries, banking questions, and account queries via live calls. Provide real-time assistance and resolve routine requests without wait times.',
    icon: 'calls' as const,
  },
  {
    title: 'Pre-Qualify Leads at Scale',
    description: 'Engage prospects over calls, verify eligibility, collect required information, and route qualified leads to your human representatives for closing.',
    icon: 'prequalify' as const,
  },
  {
    title: 'End-to-End Loan Support',
    description: 'Guide borrowers through application questions, payment details, and loan status inquiries. Reduce human workload while maintaining service quality.',
    icon: 'loan' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our financial services template. Connect your lines in minutes with secure integration.',
  },
  {
    title: 'Customize & Test',
    description: 'Add policies, compliance prompts, product details, and brand tone. Test for regulatory accuracy.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Sync with your CRM and core banking systems. Go live for inquiries, pre-qualification, and support.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track calls, conversion rates, compliance metrics, and KPIs to continuously improve performance.',
  },
];

const stats = [
  { value: '35-36%', label: 'Faster KYC completion' },
  { value: '95%', label: 'Reduction in cost per contact' },
  { value: '<200ms', label: 'Median voice response latency' },
];

const faqs = [
  {
    question: 'Will AI replace financial advisors?',
    answer: 'No. AIVI handles routine inquiries, pre-qualification, and status updates. This frees your advisors to focus on complex financial planning and relationship building.',
  },
  {
    question: 'Is financial data secure?',
    answer: 'Absolutely. AIVI is ISO 27001 and SOC 2 Type II certified. All data is encrypted, and we follow strict financial services security protocols.',
  },
  {
    question: 'Can AIVI support regulatory compliance?',
    answer: 'Yes. AIVI can be configured with compliance scripts, required disclosures, and regulatory language. All calls are recorded and transcribed for audit purposes.',
  },
  {
    question: 'Which languages are supported?',
    answer: 'Over 100 languages, enabling you to serve diverse customer bases and expand into new markets without language barriers.',
  },
  {
    question: 'How do I measure ROI?',
    answer: 'Track metrics like pre-qualification rates, cost per contact, average handling time, and conversion rates. Most financial institutions see ROI within the first month.',
  },
];

export default function FinancialServicesSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Financial Services"
            subheadline="Make banking faster, safer, and always available with compliant voice AI. Pre-qualify leads at scale and reduce operational costs by 95%."
            audioLabel="Listen to AIVI help with a loan inquiry"
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
