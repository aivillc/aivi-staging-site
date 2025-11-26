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
      // TODO: Send form data to backend API
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
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 pt-6 pb-6 min-h-[calc(100vh-72px)] flex flex-col items-start justify-start">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto text-center bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16 animate-[fadeInUp_0.6s_ease-out]">
        {/* Main Headline */}
        <h1 className="text-[32px] sm:text-[42px] md:text-[56px] lg:text-[68px] leading-[1.1] font-normal text-[#000000] tracking-[-0.015em] mb-4 sm:mb-6 animate-[fadeInUp_0.8s_ease-out]">
          Instant <span className="relative inline-block animate-[pulse_2s_ease-in-out_infinite]">Lead-to-Deal</span>{' '}
          Conversion
          {' '}
          <br />
          with AI
        </h1>

        {/* Subheadline */}
        <p className="text-[15px] sm:text-[17px] leading-[1.6] font-normal text-[#333333] mb-6 sm:mb-8 max-w-[640px] mx-auto px-2 sm:px-0 animate-[fadeInUp_1s_ease-out]">
          Using AI voice and SMS, AIVI contacts, nurtures and transfers ready to close leads within seconds of an enquiry, increasing lead conversion by 391%
        </p>

        {/* Multi-Step Form */}
        <div className="max-w-[640px] mx-auto mb-4 animate-[fadeInUp_1.2s_ease-out]">
          {/* Progress Bar - Only show when in question steps */}
          {formStep !== 'email' && formStep !== 'complete' && (
            <div className="mb-6 animate-[slideInDown_0.5s_ease-out]">
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#321ca3] to-[#f84608] rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${getProgress()}%` }}
                />
              </div>
            </div>
          )}

          {/* Email Step */}
          {formStep === 'email' && (
            <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3 justify-center items-center animate-[slideInFromRight_0.5s_ease-out]">
              <div className="relative group w-full sm:w-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Enter email"
                  className={`w-full sm:w-[320px] h-12 bg-white border-2 rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none transition-all duration-300 ${
                    isFocused ? 'border-[#000000] shadow-lg' : 'border-[#CCCCCC]'
                  }`}
                  required
                />
                <div className={`absolute inset-0 bg-[#f84608]/10 rounded-md -z-10 blur transition-opacity duration-300 ${
                  isFocused ? 'opacity-100' : 'opacity-0'
                }`} />
              </div>
              <button
                type="submit"
                className="group relative w-full sm:w-auto h-12 px-7 bg-[#f84608] text-white text-[15px] font-semibold rounded-md hover:bg-[#e03d07] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 whitespace-nowrap overflow-hidden"
              >
                <span className="relative z-10">Sign up for free</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </button>
            </form>
          )}

          {/* Question Steps */}
          {(formStep === 'question1' || formStep === 'question2' || formStep === 'question3') && (
            <form
              key={formStep}
              onSubmit={handleQuestionSubmit}
              className="animate-[slideInFromRight_0.5s_ease-out]"
            >
              {(() => {
                const currentIndex = getCurrentQuestionIndex();
                const currentQuestion = questions[currentIndex];
                return (
                  <div className="space-y-4">
                    <label className="block text-[18px] sm:text-[20px] font-medium text-[#000000] mb-4 animate-[fadeIn_0.3s_ease-out_0.2s_both]">
                      {currentQuestion.label}
                    </label>
                    <div className="relative group animate-[fadeIn_0.3s_ease-out_0.3s_both]">
                      <input
                        type="text"
                        value={formData[currentQuestion.id as keyof typeof formData]}
                        onChange={(e) => handleInputChange(currentQuestion.id, e.target.value)}
                        placeholder={currentQuestion.placeholder}
                        className="w-full h-12 bg-white border-2 border-[#CCCCCC] rounded-md px-4 text-[15px] text-[#000000] placeholder:text-[#999999] focus:outline-none focus:border-[#000000] focus:shadow-lg transition-all duration-300"
                        required
                        autoFocus
                      />
                      <div className="absolute inset-0 bg-[#321ca3]/10 rounded-md -z-10 blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />
                    </div>
                    <button
                      type="submit"
                      className="group relative w-full h-12 px-7 bg-[#321ca3] text-white text-[15px] font-semibold rounded-md hover:bg-[#2a1889] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 overflow-hidden animate-[fadeIn_0.3s_ease-out_0.4s_both]"
                    >
                      <span className="relative z-10">
                        {currentIndex === 2 ? 'Complete' : 'Next'}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </button>
                  </div>
                );
              })()}
            </form>
          )}

          {/* Completion Step */}
          {formStep === 'complete' && (
            <div className="py-8 animate-[zoomIn_0.6s_ease-out]">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center animate-[scaleIn_0.5s_ease-out_0.3s_both]">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-[24px] sm:text-[28px] font-semibold text-[#000000] mb-2 animate-[fadeIn_0.5s_ease-out_0.5s_both]">
                Thank you!
              </h3>
              <p className="text-[15px] text-[#666666] animate-[fadeIn_0.5s_ease-out_0.7s_both]">
                We'll be in touch soon to help you get started with AIVI.
              </p>
            </div>
          )}
        </div>

        {/* Custom Keyframe Animations */}
        <style jsx>{`
          @keyframes slideInFromRight {
            from {
              opacity: 0;
              transform: translateX(30px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          @keyframes slideInDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes zoomIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
            }
          }

          @keyframes scaleIn {
            from {
              transform: scale(0);
              opacity: 0;
            }
            to {
              transform: scale(1);
              opacity: 1;
            }
          }
        `}</style>

        {/* Divider - Only show on email step */}
        {formStep === 'email' && (
          <div className="text-[14px] text-[#666666] my-4">or</div>
        )}

        {/* Social Sign-Up Buttons - Only show on email step */}
        {formStep === 'email' && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch mb-6">
            <button className="group w-full sm:w-[224px] h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Sign up with Google</span>
            </button>

            <button className="group w-full sm:w-[224px] h-12 bg-white border-2 border-[#DDDDDD] rounded-md flex items-center justify-center gap-2.5 text-[15px] font-medium text-[#000000] hover:bg-[#F9F9F9] hover:border-[#999999] hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300">
              <svg className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                <path fill="#F25022" d="M0 0h11.5v11.5H0z" />
                <path fill="#00A4EF" d="M12.5 0H24v11.5H12.5z" />
                <path fill="#7FBA00" d="M0 12.5h11.5V24H0z" />
                <path fill="#FFB900" d="M12.5 12.5H24V24H12.5z" />
              </svg>
              <span className="group-hover:translate-x-0.5 transition-transform duration-300">Sign up with Microsoft</span>
            </button>
          </div>
        )}

        {/* Legal Text - Only show on email step */}
        {formStep === 'email' && (
          <p className="text-[11px] sm:text-[12px] leading-[1.4] text-[#999999] mt-2 mb-8 sm:mb-12 md:mb-16 px-2">
            By signing up, I agree to AIVI&apos;s{' '}
            <a href="#" className="underline hover:text-[#000000] transition-colors">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="underline hover:text-[#000000] transition-colors">
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
              >
                <source src="/aivisales.mp4" type="video/mp4" />
              </video>

              {/* Mute/Unmute Button */}
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 z-20"
                aria-label={isMuted ? 'Unmute video' : 'Mute video'}
              >
                {isMuted ? (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                  </svg>
                )}
              </button>

              {/* Cookie Consent Banner (Overlaid) */}
              {showCookieBanner && (
                <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.2)] max-w-[calc(100%-16px)] sm:max-w-[400px] transition-all duration-300 animate-[fadeInLeft_1.5s_ease-out]">
                  <p className="text-[11px] sm:text-[12px] leading-[1.5] text-[#333333] mb-2 sm:mb-3">
                    We use cookies to enhance your browsing experience and analyze our traffic. By clicking
                    &quot;Accept all&quot;, you consent to our use of cookies.
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-2">
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[11px] sm:text-[12px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] hover:scale-105 transition-all duration-200"
                    >
                      More choices
                    </button>
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-transparent border border-[#DDDDDD] text-[#000000] text-[11px] sm:text-[12px] rounded-md hover:bg-[#F9F9F9] hover:border-[#999999] hover:scale-105 transition-all duration-200"
                    >
                      Reject all
                    </button>
                    <button
                      onClick={() => setShowCookieBanner(false)}
                      className="flex-1 min-w-[70px] px-2 sm:px-3 py-1.5 bg-[#000000] text-white text-[11px] sm:text-[12px] rounded-md hover:bg-[#222222] hover:scale-105 transition-all duration-200"
                    >
                      Accept all
                    </button>
                  </div>
                  <a href="#" className="text-[11px] sm:text-[12px] text-[#666666] underline hover:text-[#000000] flex items-center gap-1 w-fit hover:translate-x-1 transition-transform duration-200">
                    <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" />
                    </svg>
                    See our privacy policy
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
