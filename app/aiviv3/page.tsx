import AIVINavigation from '@/components/aiviv3/AIVINavigation';
import AIVIHero from '@/components/aiviv3/AIVIHero';
import AIVISocialProof from '@/components/aiviv3/AIVISocialProof';
import AIVIFeatureTabs from '@/components/aiviv3/AIVIFeatureTabs';
import AIVIMetrics from '@/components/aiviv3/AIVIMetrics';
import AIVICTASection from '@/components/aiviv3/AIVICTASection';
import AIVIFAQ from '@/components/aiviv3/AIVIFAQ';
import AIVIFooter from '@/components/aiviv3/AIVIFooter';

export default function AIVIv3Page() {
  return (
    <div className="bg-[#E8E5E0] min-h-screen antialiased">
      <AIVINavigation />
      <main id="main-content" className="pt-[72px]">
        <AIVIHero />
        <AIVISocialProof />
        <AIVIFeatureTabs />
        <AIVIMetrics />
        <AIVICTASection />
        <AIVIFAQ />
      </main>
      <AIVIFooter />
    </div>
  );
}
