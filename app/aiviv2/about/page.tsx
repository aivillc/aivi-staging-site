'use client';

import AIVINavigation from '@/components/aiviv2/AIVINavigation';
import AIVIAboutUs from '@/components/aiviv2/AIVIAboutUs';
import AIVIFooter from '@/components/aiviv2/AIVIFooter';

export default function AboutPage() {
  return (
    <div className="bg-[#E8E5E0] min-h-screen antialiased">
      <AIVINavigation />
      <div className="pt-[72px]">
        <AIVIAboutUs />
        <AIVIFooter />
      </div>
    </div>
  );
}
