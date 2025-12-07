'use client';

import { useState, useRef } from 'react';

type FormStep = 'email' | 'question1' | 'question2' | 'question3' | 'complete';

export default function AIVIHero() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [formStep, setFormStep] = useState<FormStep>('email');
  const [formData, setFormData] = useState({
    email: '',
    companyName: '',
    industry: '',
    teamSize: '',
  });
  const [showCookieBanner, setShowCookieBanner] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const questions = [
    { id: 'companyName', label: 'What is your company name?', placeholder: 'Enter company name' },
    { id: 'industry', label: 'What industry are you in?', placeholder: 'e.g., Technology, Finance, Healthcare' },
    { id: 'teamSize', label: 'How large is your sales team?', placeholder: 'e.g., 1-10, 11-50, 50+' },
  ];

  const getCurrentQuestionIndex = () => {
    if (formStep === 'question1') return 0;
    if (formStep === 'question2') return 1;
    if (formStep === 'question3') return 2;
    return -1;
  };

  const getProgress = () => {
    if (formStep === 'email') return 0;
    if (formStep === 'question1') return 33;
    if (formStep === 'question2') return 66;
    if (formStep === 'question3') return 100;
    return 100;
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setFormData({ ...formData, email });
      setFormStep('question1');
    }
  };

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const currentIndex = getCurrentQuestionIndex();
    if (currentIndex === 0) setFormStep('question2');
    else if (currentIndex === 1) setFormStep('question3');
    else if (currentIndex === 2) {
      setFormStep('complete');
      // Form data ready for submission
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className="w-full bg-[#E8E5E0] px-3 sm:px-6 pt-6 pb-6 min-h-[calc(100vh-72px)] flex flex-col items-start justify-start"
      aria-labelledby="hero-heading"
    >
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 animate-fadeInUp">
        {/* Main Headline - Improved copy */}
        <h1
          id="hero-heading"
          className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-4 sm:mb-6"
        >
          <span className="aivi-gradient-text">Convert Leads 391% Faster</span>
          <br />
          with AI Voice & SMS
        </h1>

        {/* Subheadline - Improved copy with active voice */}
        <p className="text-[15px] sm:text-[17px] md:text-[19px] leading-[1.6] font-normal text-[#333333] mb-6 sm:mb-8 max-w-[640px] mx-auto px-2 sm:px-0">
          AIVI contacts, nurtures, and transfers ready-to-close leads within seconds.
          No manual follow-up required.
        </p>

        {/* Multi-Step Form */}
        <div className="max-w-[640px] mx-auto mb-4">
          {/* Progress Bar */}
          {formStep !== 'email' && formStep !== 'complete' && (
            <div className="mb-6" role="progressbar" aria-valuenow={getProgress()} aria-valuemin={0} aria-valuemax={100}>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f84608] to-[#321ca3] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
              <span className="sr-only">{getProgress()}% complete</span>
            </div>
          )}

          {/* Email Step */}
          {formStep === 'email' && (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <div className="relative group w-full sm:w-auto">
                <label htmlFor="hero-email" className="sr-only">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter your email"
                  autoComplete="email"
                  className={`w-full sm:w-[320px] h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none transition-all duration-300 focus-brand-ring ${
                    isFocused ? 'border-[#f84608] shadow-lg' : 'border-[#CCCCCC]'
                  }`}
                  required
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#f84608]/10 to-[#321ca3]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                    isFocused ? 'opacity-100' : 'opacity-0'
                  }`}
                  aria-hidden="true"
                />
              </div>
              <button
                type="submit"
                className="group relative w-full sm:w-auto h-12 px-7 text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap overflow-hidden bg-gradient-to-r from-[#f84608] to-[#321ca3] focus-brand-ring"
              >
                <span className="relative z-10">Start Free Trial</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#321ca3] to-[#f84608] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </form>
          )}

          {/* Question Steps */}
          {(formStep === 'question1' || formStep === 'question2' || formStep === 'question3') && (
            <form
              key={formStep}
              onSubmit={handleQuestionSubmit}
            >
              {(() => {
                const currentIndex = getCurrentQuestionIndex();
                const currentQuestion = questions[currentIndex];
                return (
                  <div className="space-y-4">
                    <label
                      htmlFor={`question-${currentQuestion.id}`}
                      className="block text-[18px] sm:text-[20px] font-medium text-[#000000] mb-4"
                    >
                      {currentQuestion.label}
                    </label>
                    <div className="relative group">
                      <input
                        id={`question-${currentQuestion.id}`}
                        type="text"
                        value={formData[currentQuestion.id as keyof typeof formData]}
                        onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                        placeholder={currentQuestion.placeholder}
                        className="w-full h-12 bg-white border-2 border-[#CCCCCC] rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#321ca3] focus:shadow-lg transition-all duration-300 focus-brand-ring"
                        required
                        autoFocus
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-[#321ca3]/10 to-[#f84608]/10 rounded-md -z-10 blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full h-12 px-7 text-white text-[15px] font-semibold rounded-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden bg-gradient-to-r from-[#321ca3] to-[#f84608] focus-brand-ring"
                    >
                      <span className="relative z-10">
                        {currentIndex === 2 ? 'Complete Setup' : 'Continue'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#f84608] to-[#321ca3] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </button>
                  </div>
                );
              })()}
            </form>
          )}

          {/* Completion Step */}
          {formStep === 'complete' && (
            <div className="py-8" role="status" aria-live="polite">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#000000] mb-2">
                Welcome to AIVI!
              </h3>
              <p className="text-[15px] text-[#666666]">
                We&apos;ll reach out within 24 hours to get you started.
              </p>
            </div>
          )}
        </div>

        {/* Legal Text */}
        {formStep === 'email' && (
          <p className="text-[11px] sm:text-[12px] leading-[1.4] text-[#999999] mt-2 mb-8 sm:mb-12 md:mb-16 px-2">
            By signing up, I agree to AIVI&apos;s{' '}
            <a href="/terms" className="underline hover:text-[#000000] transition-colors focus-brand-ring">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="/privacy" className="underline hover:text-[#000000] transition-colors focus-brand-ring">
              Privacy Policy
            </a>
            .
          </p>
        )}

        {/* Hero Visual Section */}
        <div className="w-full max-w-[90%] sm:max-w-[85%] md:max-w-[80%] lg:max-w-[75%] mx-auto relative group">
          <div className="w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.12)] group-hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-shadow duration-500">
            <div className="relative aspect-video bg-white">
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                aria-label="AIVI platform demonstration video"
              >
                <source src="/aivisales.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20 focus-brand-ring"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                aria-pressed={!isMuted}
              >
                {isMuted ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>

              {/* Cookie Consent Banner */}
              {showCookieBanner && (
                <div
                  className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)] max-w-[calc(100%-16px)] sm:max-w-[400px] transition-all duration-300"
                  role="dialog"
                  aria-label="Cookie consent"
                >
                  <p className="text-[11px] sm:text-[12px] leading-[1.5] text-[#333333] mb-2 sm:mb-3">
                    We use cookies to enhance your experience. By clicking &quot;Accept&quot;, you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[11px] sm:text-[12px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] transition-all duration-200 focus-brand-ring"
                    >
                      Preferences
                    </button>
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[11px] sm:text-[12px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] transition-all duration-200 focus-brand-ring"
                    >
                      Reject
                    </button>
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-[#000000] text-white text-[11px] sm:text-[12px] rounded-md hover:bg-[#222222] transition-all duration-200 focus-brand-ring"
                    >
                      Accept
                    </button>
                  </div>
                  <a href="/privacy" className="text-[11px] sm:text-[12px] text-[#666666] underline hover:text-[#000000] flex items-center gap-1 w-fit transition-colors focus-brand-ring">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                    Privacy Policy
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
