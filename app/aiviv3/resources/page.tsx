import { Metadata } from 'next';
import Link from 'next/link';
import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export const metadata: Metadata = {
  title: 'Resources | AIVI - Guides & Best Practices',
  description: 'Learn how to maximize lead conversion with AIVI. Access guides and best practices for AI-powered voice automation.',
};

export default function ResourcesPage() {

  return (
    <>
      <AIVINavigation />
      <main className="min-h-screen bg-[#E8E5E0]">
        <div className="mx-4 sm:mx-6 lg:mx-12">
          {/* Hero Section */}
          <section className="w-full pt-[72px] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#f84608]/5 via-transparent to-[#321ca3]/5 animate-gradient-shift"></div>

            <div className="w-full px-3 sm:px-6 py-16 sm:py-20 relative z-10">
              <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
              <h1 className="text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px] leading-[1.1] font-normal text-black mb-4 sm:mb-6 animate-fade-in-up">
                Resources & Guides
              </h1>
              <p className="text-[17px] sm:text-[19px] md:text-[21px] leading-[1.6] text-[#666666] max-w-[600px] mx-auto">
                Learn how to maximize your AI-powered lead engagement with AIVI.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[600px] mx-auto bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-black mb-4">
              Stay Ahead of the Curve
            </h2>
            <p className="text-[16px] sm:text-[17px] leading-[1.6] text-[#666666] mb-8">
              Get the latest insights on AI-powered sales delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 border-2 border-[#E8E5E0] rounded-md text-[15px] focus:border-[#f84608] focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="h-12 px-6 bg-gradient-to-r from-[#f84608] to-[#321ca3] text-white text-[15px] font-semibold rounded-md hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[13px] text-[#999999] mt-4">
              We respect your privacy. Unsubscribe anytime.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-br from-[#f84608] to-[#321ca3] px-3 sm:px-6 py-16 sm:py-20">
          <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] leading-[1.2] font-normal text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-[16px] sm:text-[18px] leading-[1.6] text-white/80 mb-8 max-w-[600px] mx-auto">
              Join hundreds of businesses transforming their lead engagement with AIVI.
            </p>
            <Link
              href="/aiviv3/demo"
              className="inline-flex items-center justify-center h-12 px-8 bg-white text-[#f84608] text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Start Free Trial
              </Link>
            </div>
          </section>
        </div>
      </main>
      <AIVIFooter />
    </>
  );
}
