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
  description: 'Transform your retail customer experience with AIVI AI voice agents. Recover abandoned carts, automate order support, and drive sales 24/7 with human-like conversations.',
};

const useCases = [
  {
    title: 'Recover Lost Revenue Automatically',
    description: 'Turn abandoned carts into completed sales. AIVI proactively reaches out to hesitant shoppers, answers product questions, and guides them to checkout—recovering up to 35% of lost revenue.',
    icon: 'leads' as const,
  },
  {
    title: 'Slash Support Costs by 60%',
    description: 'Handle unlimited concurrent calls without expanding headcount. AIVI resolves order tracking, returns, and product inquiries instantly—at a fraction of traditional call center costs.',
    icon: 'cost' as const,
  },
  {
    title: 'Deliver White-Glove Service at Scale',
    description: 'Every customer gets VIP treatment. AIVI remembers purchase history, anticipates needs, and speaks in your brand voice—creating memorable experiences that drive loyalty and repeat purchases.',
    icon: 'brand' as const,
  },
];

const steps = [
  {
    title: 'Launch in Minutes',
    description: 'Connect your phone system instantly with our retail-optimized templates. No coding, no IT tickets, no waiting.',
  },
  {
    title: 'Train Your AI',
    description: 'Upload your product catalog, policies, and brand guidelines. AIVI learns your business and sounds like your best sales associate.',
  },
  {
    title: 'Go Live Everywhere',
    description: 'Deploy across inbound calls, outbound campaigns, and web chat. Sync seamlessly with Shopify, Salesforce, and your existing stack.',
  },
  {
    title: 'Scale & Optimize',
    description: 'Monitor real-time dashboards, A/B test conversation flows, and watch your metrics climb. AIVI gets smarter with every interaction.',
  },
];

const stats = [
  { value: '35%', label: 'Cart recovery rate increase' },
  { value: '60%', label: 'Reduction in support costs' },
  { value: '<3sec', label: 'Average response time' },
];

const faqs = [
  {
    question: 'How quickly can we go live with AIVI?',
    answer: 'Most retail brands are live within 48 hours. Our retail-specific templates include pre-built flows for order tracking, returns, product recommendations, and cart recovery. Simply connect your systems and customize to your brand.',
  },
  {
    question: 'Will customers know they\'re talking to AI?',
    answer: 'AIVI\'s voice technology is indistinguishable from human agents. Our retail clients report that customers frequently compliment the "helpful representative" without realizing it\'s AI. We recommend transparency, but the experience feels completely natural.',
  },
  {
    question: 'How does AIVI handle complex returns or escalations?',
    answer: 'AIVI seamlessly transfers complex cases to human agents with full context—purchase history, conversation summary, and recommended resolution. Your team picks up right where AIVI left off, no repetition needed.',
  },
  {
    question: 'What integrations are available for e-commerce?',
    answer: 'AIVI connects natively with Shopify, WooCommerce, Magento, BigCommerce, Salesforce Commerce Cloud, and 50+ other platforms. Real-time inventory, order status, and customer data sync automatically.',
  },
  {
    question: 'Can AIVI upsell and cross-sell products?',
    answer: 'Absolutely. AIVI analyzes purchase patterns and browsing behavior to make intelligent recommendations. Retailers see 15-25% lift in average order value from AI-powered product suggestions during calls.',
  },
  {
    question: 'How does pricing work for high call volumes?',
    answer: 'AIVI pricing scales with your business. Unlike per-seat licensing, you pay based on usage—making it cost-effective during slow periods and infinitely scalable during peak seasons like Black Friday.',
  },
];

export default function RetailSolutionPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Turn Every Customer Call Into Revenue"
            subheadline="AIVI's AI voice agents handle sales inquiries, recover abandoned carts, and resolve support tickets—all while delivering the premium experience your customers expect. Available 24/7, scales infinitely, costs 60% less."
            audioLabel="Hear AIVI recover an abandoned cart"
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
