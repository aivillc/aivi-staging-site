'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaUsers, FaComment, FaCheckCircle } from 'react-icons/fa';
import { updateSessionData } from '@/lib/sessionData';
import { getGlobalSessionId } from '@/lib/globalSession';

interface DemoPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  companySize: string;
  industry: string;
  currentChallenges: string;
  howDidYouHear: string;
  preferredDate: string;
  preferredTime: string;
  additionalNotes: string;
}

const industries = [
  'Select Industry',
  'Retail & E-Commerce',
  'Real Estate',
  'Healthcare',
  'Financial Services',
  'Legal',
  'Hospitality',
  'Technology',
  'Manufacturing',
  'Education',
  'Other',
];

const companySizes = [
  'Select Company Size',
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees',
];

const challengeOptions = [
  'Lead qualification & conversion',
  'After-hours customer support',
  'Scaling outbound calls',
  'Reducing call center costs',
  'Improving response times',
  'Multi-language support',
  'CRM integration',
  'Other',
];

const hearAboutOptions = [
  'Select an option',
  'Google Search',
  'LinkedIn',
  'Referral',
  'Social Media',
  'Industry Event',
  'Blog/Article',
  'Other',
];

const timeSlots = [
  'Select preferred time',
  '9:00 AM - 10:00 AM EST',
  '10:00 AM - 11:00 AM EST',
  '11:00 AM - 12:00 PM EST',
  '1:00 PM - 2:00 PM EST',
  '2:00 PM - 3:00 PM EST',
  '3:00 PM - 4:00 PM EST',
  '4:00 PM - 5:00 PM EST',
];

export default function DemoPopup({ isOpen, onClose }: DemoPopupProps) {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    companySize: '',
    industry: '',
    currentChallenges: '',
    howDidYouHear: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: '',
  });
  const [selectedChallenges, setSelectedChallenges] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  // Session tracking refs
  const sessionIdRef = useRef<string>(getGlobalSessionId());
  const inactivityTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastSyncedDataRef = useRef<string>('');

  // Prevent body scroll when popup is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  // Save session data locally (no webhook POST)
  const saveSessionDataLocally = useCallback((
    currentFormData: FormData,
    currentChallenges: string[]
  ) => {
    // Update local session storage only
    updateSessionData(sessionIdRef.current, {
      name: `${currentFormData.firstName} ${currentFormData.lastName}`.trim(),
      email: currentFormData.email,
      phone: currentFormData.phone,
      businessName: currentFormData.company,
      industry: currentFormData.industry,
      challenge: currentChallenges.join(', '),
      additionalNotes: currentFormData.additionalNotes,
    });
    console.log('💾 [DemoPopup] Session data saved locally');
  }, []);

  // POST session data to webhook (called after inactivity or on close)
  const postSessionDataToWebhook = useCallback(async (
    currentFormData: FormData,
    currentChallenges: string[],
    currentStep: number,
    isFinal: boolean = false
  ) => {
    // Create payload
    const payload = {
      ...currentFormData,
      currentChallenges: currentChallenges,
      sessionId: sessionIdRef.current,
      timestamp: new Date().toISOString(),
      source: 'AIVI Demo Request Popup',
      isPartial: !isFinal,
      step: currentStep,
    };

    // Check if data has changed to avoid duplicate POSTs
    const payloadString = JSON.stringify(payload);
    if (payloadString === lastSyncedDataRef.current) {
      return;
    }
    lastSyncedDataRef.current = payloadString;

    // POST to webhook
    try {
      await fetch('https://stage.aivi.io/webhook/aivileadcapture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log(`📤 [DemoPopup] Session data posted to webhook (${isFinal ? 'final' : 'inactivity'})`);
    } catch (error) {
      console.error('❌ [DemoPopup] Error sending to webhook:', error);
    }
  }, []);

  // Reset inactivity timer - POST after 5 minutes of no activity
  const resetInactivityTimer = useCallback(() => {
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }
    inactivityTimerRef.current = setTimeout(() => {
      // Send to webhook after 5 minutes of inactivity
      postSessionDataToWebhook(formData, selectedChallenges, step, false);
    }, 5 * 60 * 1000); // 5 minutes
  }, [postSessionDataToWebhook, formData, selectedChallenges, step]);

  // Handle field blur - save locally and reset inactivity timer
  const handleFieldBlur = useCallback(() => {
    saveSessionDataLocally(formData, selectedChallenges);
    resetInactivityTimer();
  }, [saveSessionDataLocally, formData, selectedChallenges, resetInactivityTimer]);

  // Cleanup on unmount or when popup closes
  useEffect(() => {
    return () => {
      if (inactivityTimerRef.current) {
        clearTimeout(inactivityTimerRef.current);
      }
    };
  }, []);

  // Send final sync when popup closes (if there's data)
  useEffect(() => {
    if (!isOpen && formData.email) {
      postSessionDataToWebhook(formData, selectedChallenges, step, true);
    }
  }, [isOpen, formData, selectedChallenges, step, postSessionDataToWebhook]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setSelectedChallenges((prev) => {
      const newChallenges = prev.includes(challenge)
        ? prev.filter((c) => c !== challenge)
        : [...prev, challenge];
      // Save locally on challenge toggle (button click)
      saveSessionDataLocally(formData, newChallenges);
      resetInactivityTimer();
      return newChallenges;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clear inactivity timer since form is being submitted
    if (inactivityTimerRef.current) {
      clearTimeout(inactivityTimerRef.current);
    }

    const payload = {
      ...formData,
      currentChallenges: selectedChallenges,
      sessionId: sessionIdRef.current,
      submittedAt: new Date().toISOString(),
      source: 'AIVI Demo Request Popup',
      isPartial: false,
      step: step,
    };

    try {
      // Send to lead capture webhook
      await fetch('https://stage.aivi.io/webhook/aivileadcapture', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      console.log('✅ [DemoPopup] Form submitted to webhook');

      // Sync to HubSpot
      try {
        const hubspotResponse = await fetch('/api/hubspot/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId: sessionIdRef.current,
            includeConversation: false,
            sessionData: {
              name: `${formData.firstName} ${formData.lastName}`.trim(),
              email: formData.email,
              phone: formData.phone,
              businessName: formData.company,
              industry: formData.industry,
              challenge: selectedChallenges.join(', '),
              additionalNotes: formData.additionalNotes,
            },
          }),
        });

        if (hubspotResponse.ok) {
          const data = await hubspotResponse.json();
          if (data.success) {
            console.log('✅ [HubSpot] Contact synced:', data);
          }
        }
      } catch (hubspotError) {
        console.error('❌ [HubSpot] Error syncing:', hubspotError);
      }

      setIsSubmitted(true);
    } catch (error) {
      console.error('❌ [DemoPopup] Webhook error:', error);
      // Still show success for demo purposes
      setIsSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    onClose();
    // Reset form after animation
    setTimeout(() => {
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        companySize: '',
        industry: '',
        currentChallenges: '',
        howDidYouHear: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: '',
      });
      setSelectedChallenges([]);
      setIsSubmitted(false);
      setStep(1);
    }, 300);
  };

  const nextStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid = formData.company && formData.industry && formData.companySize;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Container */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 pointer-events-none">
        <div
          className="relative w-full max-w-2xl max-h-[85vh] sm:max-h-[90vh] overflow-y-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl pointer-events-auto transform transition-all duration-300 animate-popup-enter safe-area-bottom"
          style={{ WebkitOverflowScrolling: 'touch' }}
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="demo-popup-title"
        >
          {/* Gradient Top Bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#FF8C00] via-[#f84608] to-[#8A2BE2] rounded-t-3xl" />

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#E8E5E0] text-[#666666] hover:text-[#1A1A1A] transition-all duration-200 z-10 touch-target"
            aria-label="Close popup"
          >
            <FaTimes className="w-4 h-4" />
          </button>

          {isSubmitted ? (
            /* Success State */
            <div className="p-8 sm:p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#FF8C00]/20 to-[#8A2BE2]/20 flex items-center justify-center">
                <FaCheckCircle className="w-10 h-10 text-[#FF8C00]" />
              </div>
              <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1A1A1A] mb-4 font-manrope">
                Thank You!
              </h2>
              <p className="text-[16px] text-[#666666] mb-8 max-w-md mx-auto leading-relaxed">
                Your demo request has been received. Our team will reach out within 24 hours to confirm your appointment.
              </p>
              <button
                onClick={handleClose}
                className="inline-flex items-center justify-center h-12 px-8 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white text-[15px] font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            /* Form Content */
            <div className="p-4 sm:p-6 md:p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2
                  id="demo-popup-title"
                  className="text-[24px] sm:text-[28px] font-semibold text-[#1A1A1A] mb-2 font-manrope"
                >
                  Book Your Demo
                </h2>
                <p className="text-[15px] text-[#666666]">
                  See how AIVI can transform your business communications
                </p>
              </div>

              {/* Progress Steps */}
              <div className="flex items-center justify-center gap-2 mb-8">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold transition-all duration-300 ${
                        step >= s
                          ? 'bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white'
                          : 'bg-[#E8E5E0] text-[#999999]'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div
                        className={`w-12 h-0.5 transition-all duration-300 ${
                          step > s ? 'bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2]' : 'bg-[#E8E5E0]'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Information */}
                {step === 1 && (
                  <div className="space-y-5 animate-fade-in">
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-4">Personal Information</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                        <input
                          type="text"
                          name="firstName"
                          placeholder="First Name *"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div className="relative">
                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                        <input
                          type="text"
                          name="lastName"
                          placeholder="Last Name *"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="email"
                        name="email"
                        placeholder="Work Email *"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <FaPhone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Company Information */}
                {step === 2 && (
                  <div className="space-y-5 animate-fade-in">
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-4">Company Information</h3>
                    
                    <div className="relative">
                      <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="text"
                        name="company"
                        placeholder="Company Name *"
                        value={formData.company}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        required
                        className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="relative">
                        <FaUsers className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                        <select
                          name="companySize"
                          value={formData.companySize}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                        >
                          {companySizes.map((size) => (
                            <option key={size} value={size === 'Select Company Size' ? '' : size}>
                              {size}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative">
                        <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                        <select
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          required
                          className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                        >
                          {industries.map((ind) => (
                            <option key={ind} value={ind === 'Select Industry' ? '' : ind}>
                              {ind}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <p className="text-[14px] font-medium text-[#1A1A1A] mb-4">Current Challenges (select all that apply)</p>
                      <div className="flex flex-wrap gap-3">
                        {challengeOptions.map((challenge) => (
                          <button
                            key={challenge}
                            type="button"
                            onClick={() => handleChallengeToggle(challenge)}
                            className={`px-5 py-2.5 rounded-xl text-[13px] font-medium transition-all duration-300 border ${
                              selectedChallenges.includes(challenge)
                                ? 'bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white border-transparent shadow-lg shadow-[#FF8C00]/20'
                                : 'bg-white text-[#4a4a4a] border-[#E8E5E0] hover:border-[#FF8C00]/40 hover:bg-[#FFF8F5] hover:shadow-md'
                            }`}
                          >
                            <span className="flex items-center gap-2">
                              {selectedChallenges.includes(challenge) && (
                                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                              {challenge}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Scheduling & Additional Info */}
                {step === 3 && (
                  <div className="space-y-5 animate-fade-in">
                    <h3 className="text-[16px] font-semibold text-[#1A1A1A] mb-4">Schedule Your Demo</h3>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[13px] font-medium text-[#666666] mb-2">Preferred Date</label>
                        <input
                          type="date"
                          name="preferredDate"
                          value={formData.preferredDate}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                        />
                      </div>
                      <div>
                        <label className="block text-[13px] font-medium text-[#666666] mb-2">Preferred Time</label>
                        <select
                          name="preferredTime"
                          value={formData.preferredTime}
                          onChange={handleInputChange}
                          onBlur={handleFieldBlur}
                          className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot === 'Select preferred time' ? '' : slot}>
                              {slot}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-[13px] font-medium text-[#666666] mb-2">How did you hear about us?</label>
                      <select
                        name="howDidYouHear"
                        value={formData.howDidYouHear}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        className="w-full h-12 px-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200 appearance-none cursor-pointer"
                      >
                        {hearAboutOptions.map((opt) => (
                          <option key={opt} value={opt === 'Select an option' ? '' : opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="relative">
                      <FaComment className="absolute left-4 top-4 w-4 h-4 text-[#999999]" />
                      <textarea
                        name="additionalNotes"
                        placeholder="Anything specific you'd like us to cover in the demo?"
                        value={formData.additionalNotes}
                        onChange={handleInputChange}
                        onBlur={handleFieldBlur}
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200 resize-none"
                      />
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E8E5E0]">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={(e) => prevStep(e)}
                      className="h-12 px-6 text-[14px] font-medium text-[#666666] hover:text-[#1A1A1A] transition-colors duration-200"
                    >
                      ← Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={(e) => nextStep(e)}
                      disabled={step === 1 ? !isStep1Valid : !isStep2Valid}
                      className="h-12 px-8 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white text-[15px] font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                    >
                      Continue →
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 px-8 bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white text-[15px] font-semibold rounded-lg hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Submitting...</span>
                        </>
                      ) : (
                        'Book Demo'
                      )}
                    </button>
                  )}
                </div>
              </form>

              {/* Trust Indicators */}
              <div className="mt-8 pt-6 border-t border-[#E8E5E0]">
                <div className="flex flex-wrap items-center justify-center gap-6 text-[12px] text-[#999999]">
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                    </svg>
                    Your data is secure
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    No spam, ever
                  </span>
                  <span className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    30-min personalized demo
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes popup-enter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-popup-enter {
          animation: popup-enter 0.3s ease-out forwards;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}
