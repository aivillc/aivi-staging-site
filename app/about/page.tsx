import { Metadata } from 'next';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';
import {
  IndustryHero,
  TheResults,
  OurStory,
  OurValues,
  HowItWorks,
  IndustryFAQ,
  IndustryCTA,
} from '@/components/aiviv3/shared';

export const metadata: Metadata = {
  title: 'About AIVI | AI-Powered Lead Conversion Platform',
  description: 'Learn about AIVI - founded by Amazon, Five9, and Cisco veterans to transform how businesses connect with customers through intelligent AI automation.',
};

const resultsStats = [
  { value: '500+', label: 'Businesses Impacted' },
  { value: '10M+', label: 'Happy Customers' },
  { value: '391%', label: 'ROI for Our Customers' },
];

const steps = [
  {
    title: 'Leadership',
    description: 'Our leadership team brings decades of combined experience from Amazon, Five9, and Cisco, with a proven track record of scaling enterprise software solutions.',
  },
  {
    title: 'Engineering',
    description: 'World-class AI researchers and engineers who have published papers in top conferences and built systems processing millions of interactions daily.',
  },
  {
    title: 'Customer Success',
    description: 'Dedicated specialists focused on your ROI, providing strategic guidance and hands-on support to ensure you achieve your business goals.',
  },
  {
    title: 'Our Vision',
    description: 'Use artificial intelligence to enhance human connection, not replace it. AI should amplify what sales teams do best—building relationships and closing deals.',
  },
];

const faqs = [
  {
    question: 'Who founded AIVI?',
    answer: 'AIVI was founded by a team of seasoned executives from Amazon, Five9, and Cisco who saw a critical gap in how businesses engage with their customers. Our leadership brings decades of combined experience scaling enterprise software solutions.',
  },
  {
    question: 'What makes AIVI different from other AI platforms?',
    answer: 'We focus on intelligent automation that enhances human capabilities rather than replacing them. AIVI works alongside your team to amplify their effectiveness, handling routine tasks so your people can focus on high-value relationships.',
  },
  {
    question: 'How has AIVI been recognized in the industry?',
    answer: 'We\'ve been recognized as a leader in AI-powered sales engagement, with awards for innovation and customer success from leading industry analysts. But what matters most to us is the results our customers achieve.',
  },
  {
    question: 'What are AIVI\'s core values?',
    answer: 'Innovation First, Customer Obsessed, Intelligent Automation, and Trust & Transparency. These aren\'t just words on a wall—they guide every decision we make and every feature we build.',
  },
  {
    question: 'How does AIVI ensure data security and privacy?',
    answer: 'We take data security extremely seriously. Your data stays yours, always. We maintain enterprise-grade security certifications and are transparent about our data practices. Trust is earned through actions, not promises.',
  },
  {
    question: 'What kind of results can customers expect?',
    answer: 'Our customers see an average 391% increase in conversion rates. Some achieve even higher gains. But beyond the numbers, they report better customer relationships, more efficient teams, and sustainable growth.',
  },
];

export default function AboutPage() {
  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0] font-manrope">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          <IndustryHero
            headline="Building the Future of AI-Powered Engagement"
            subheadline="Founded by Amazon, Five9, and Cisco veterans, AIVI is on a mission to transform how businesses connect with their customers through intelligent, personalized AI that drives real results."
            hideAudio={true}
            centerText={true}
          />
          <TheResults stats={resultsStats} />
          <OurStory />
          <OurValues />
          <HowItWorks steps={steps} />
          <IndustryFAQ faqs={faqs} />
          <IndustryCTA />
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
