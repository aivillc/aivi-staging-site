'use client';

import AIVINavigation from '@/components/aiviv2/AIVINavigation';
import AIVIUseCases from '@/components/aiviv2/AIVIUseCases';
import AIVIFooter from '@/components/aiviv2/AIVIFooter';

export default function UseCasesPage() {
  return (
    <div className="bg-[#E8E5E0] min-h-screen antialiased">
      <AIVINavigation />
      <div className="pt-[72px]">
        <AIVIUseCases />
        <AIVIFooter />
      </div>
    </div>
  );
}
