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
  title: 'AI Voice Agents for Retail & E-Commerce | AIVI',
  description: 'Automate sales, support, and order inquiries with AIVI intelligent voice agents. Reduce cart abandonment by 25-35% and increase CSAT by 18 points.',
};

const useCases = [
  {
    title: 'Never Miss a Lead',
    description: 'Answer calls 24/7, qualify prospects in real-time, book appointments, and capture every sales opportunity before competitors even respond.',
    icon: 'leads' as const,
  },
  {
    title: 'Reduce Support Costs',
    description: 'Handle thousands of simultaneous calls at a fraction of traditional contact center costs. One AI agent replaces an entire phone queue.',
    icon: 'cost' as const,
  },
  {
    title: 'On-Brand Customer Experience',
    description: 'Deliver natural, human-like conversations that match your brand voice and style. Customers get instant help that feels personal.',
    icon: 'brand' as const,
  },
];

const steps = [
  {
    title: 'Sign Up & Connect',
    description: 'Start with our retail template and connect your phone line in minutes. No technical expertise required.',
  },
  {
    title: 'Customize & Test',
    description: 'Add your products, inventory, policies, FAQs, and brand tone. Test until it sounds exactly like your team.',
  },
  {
    title: 'Integrate & Deploy',
    description: 'Sync with your CRM and tools. Go live for order tracking, returns, product questions, and voicemail capture.',
  },
  {
    title: 'Analyze & Optimize',
    description: 'Track real-time analytics, sentiment analysis, and operational KPIs. Continuously improve performance.',
  },
];

const stats = [
  { value: '25-35%', label: 'Reduction in cart abandonment' },
  { value: '18pt', label: 'Increase in customer satisfaction' },
  { value: '100%', label: 'Calls answered, 24/7/365' },
];

const faqs = [
  {
    question: 'Will AI voice agents replace my support team?',
    answer: 'No. AIVI enhances your team by handling routine inquiries like order status, return policies, and FAQs. This frees your human agents to focus on complex issues and high-value customer relationships that require a personal touch.',
  },
  {
    question: 'Is customer data secure with AIVI?',
    answer: 'Absolutely. AIVI is SOC 2 Type II certified and follows enterprise-grade security protocols. All data is encrypted in transit and at rest, and we never store sensitive payment information.',
  },
  {
    question: 'Which languages does AIVI support?',
    answer: 'AIVI supports over 100 languages and dialects, making it ideal for global retail operations. The AI adapts its accent and speaking style to match your customer base.',
  },
  {
    question: 'How do I measure ROI with AIVI?',
    answer: 'Track metrics like cart recovery rate, response times, customer satisfaction scores, and cost per contact. Most retailers see positive ROI within the first month through reduced abandonment and increased conversions.',
  },
  {
    question: 'Can AIVI handle seasonal call spikes?',
    answer: 'Yes. Unlike human teams, AIVI scales instantly during Black Friday, holiday seasons, or flash sales. Handle 10x normal volume without hiring temporary staff or dropping calls.',
  },
];

export default function RetailSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="AI Voice Agents for Retail & E-Commerce"
            subheadline="Automate sales, support, and order inquiries with AIVI's intelligent voice agents. Never miss a lead, reduce support costs, and deliver on-brand experiences 24/7."
            audioLabel="Listen to AIVI help a customer with their order"
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
