'use client';

import { useCookieConsent } from './CookieConsentContext';

export default function CookieBanner() {
  const { consent, acceptCookies, rejectCookies, openPreferences } = useCookieConsent();

  // Don't show banner if user has already made a choice
  if (consent !== null) {
    return null;
  }

  return (
    <div
      className="fixed bottom-3 left-3 right-3 sm:right-auto sm:left-4 sm:bottom-4 bg-white rounded-xl p-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)] sm:max-w-[400px] transition-all duration-300 z-[60] animate-fadeInUp"
      style={{ bottom: 'calc(12px + env(safe-area-inset-bottom, 0px))' }}
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
    >
      <p className="text-[13px] sm:text-[13px] leading-[1.5] text-[#333333] mb-3">
        We use cookies to enhance your experience. By clicking &quot;Accept&quot;, you consent to our use of cookies.
      </p>
      <div className="flex flex-wrap gap-2 mb-2">
        <button
          onClick={openPreferences}
          className="flex-1 min-w-[70px] px-3 py-2.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[13px] font-medium rounded-lg hover:bg-[#F9F9F9] hover:border-[#999999] transition-all duration-200 focus-brand-ring touch-target"
          aria-label="Open cookie preferences"
        >
          Preferences
        </button>
        <button
          onClick={rejectCookies}
          className="flex-1 min-w-[70px] px-3 py-2.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[13px] font-medium rounded-lg hover:bg-[#F9F9F9] hover:border-[#999999] transition-all duration-200 focus-brand-ring touch-target"
          aria-label="Reject cookies"
        >
          Reject
        </button>
        <button
          onClick={acceptCookies}
          className="flex-1 min-w-[70px] px-3 py-2.5 bg-[#000000] text-white text-[13px] font-medium rounded-lg hover:bg-[#222222] transition-all duration-200 focus-brand-ring touch-target"
          aria-label="Accept cookies"
        >
          Accept
        </button>
      </div>
      <a
        href="/privacy"
        className="text-[11px] sm:text-[12px] text-[#666666] underline hover:text-[#000000] flex items-center gap-1 w-fit transition-colors focus-brand-ring"
      >
        <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
        </svg>
        Privacy Policy
      </a>
    </div>
  );
}
