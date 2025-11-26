'use client';

import AIVINavigation from '@/components/aiviv2/AIVINavigation';
import AIVIContact from '@/components/aiviv2/AIVIContact';
import AIVIFooter from '@/components/aiviv2/AIVIFooter';

export default function ContactPage() {
  return (
    <div className="bg-[#E8E5E0] min-h-screen antialiased">
      <AIVINavigation />
      <div className="pt-[72px]">
        <AIVIContact />
        <AIVIFooter />
      </div>
    </div>
  );
}
