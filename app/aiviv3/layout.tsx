import type { Metadata } from 'next';
import { DemoPopupProvider } from '@/components/aiviv3/DemoPopupContext';

export const metadata: Metadata = {
  title: {
    default: 'AIVI | AI-Powered Lead Conversion Platform',
    template: '%s | AIVI',
  },
  description: 'Convert leads 391% faster with AI voice and SMS. AIVI automates lead nurturing and transfers warm leads in seconds.',
  keywords: ['AI sales', 'lead conversion', 'sales automation', 'AI voice', 'SMS marketing', 'lead nurturing', 'sales engagement'],
  authors: [{ name: 'AIVI' }],
  creator: 'AIVI',
  publisher: 'AIVI',
  openGraph: {
    title: 'AIVI | AI-Powered Lead Conversion Platform',
    description: 'Convert leads 391% faster with AI voice and SMS. AIVI automates lead nurturing and transfers warm leads in seconds.',
    type: 'website',
    locale: 'en_US',
    siteName: 'AIVI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIVI | AI-Powered Lead Conversion Platform',
    description: 'Convert leads 391% faster with AI voice and SMS.',
    creator: '@aivi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AIVIv3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <DemoPopupProvider>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#f84608] focus:text-white focus:rounded-md focus:outline-none"
      >
        Skip to main content
      </a>
      {children}
    </DemoPopupProvider>
  );
}
