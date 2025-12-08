'use client';

import { useState, useEffect } from 'react';
import { FaTimes, FaUser, FaEnvelope, FaPhone, FaBuilding, FaBriefcase, FaUsers, FaComment, FaCheckCircle } from 'react-icons/fa';

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
  jobTitle: string;
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
    jobTitle: '',
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleChallengeToggle = (challenge: string) => {
    setSelectedChallenges((prev) =>
      prev.includes(challenge) ? prev.filter((c) => c !== challenge) : [...prev, challenge]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      ...formData,
      currentChallenges: selectedChallenges.join(', '),
      submittedAt: new Date().toISOString(),
      source: 'AIVI Demo Request Popup',
    };

    try {
      // Test webhook URL - replace with actual webhook later
      const response = await fetch('https://webhook.site/test', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // Even if webhook fails for now, show success (it's a test webhook)
      setIsSubmitted(true);
    } catch (error) {
      console.error('Webhook error:', error);
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
        jobTitle: '',
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

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const isStep1Valid = formData.firstName && formData.lastName && formData.email && formData.phone;
  const isStep2Valid = formData.company && formData.industry && formData.companySize;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur */}
      <div
        className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Popup Container */}
      <div className="fixed inset-0 z-[201] flex items-center justify-center p-4 pointer-events-none">
        <div
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl pointer-events-auto transform transition-all duration-300 animate-popup-enter"
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
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-[#F5F5F5] hover:bg-[#E8E5E0] text-[#666666] hover:text-[#1A1A1A] transition-all duration-200 z-10"
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
              <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#1A1A1A] mb-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
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
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="text-center mb-8">
                <h2
                  id="demo-popup-title"
                  className="text-[24px] sm:text-[28px] font-semibold text-[#1A1A1A] mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
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
                        required
                        className="w-full h-12 pl-11 pr-4 bg-[#F5F5F5] border border-transparent rounded-xl text-[14px] text-[#1A1A1A] placeholder-[#999999] focus:outline-none focus:border-[#FF8C00] focus:bg-white transition-all duration-200"
                      />
                    </div>

                    <div className="relative">
                      <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999]" />
                      <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        onChange={handleInputChange}
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
                      <p className="text-[14px] font-medium text-[#1A1A1A] mb-3">Current Challenges (select all that apply)</p>
                      <div className="flex flex-wrap gap-2">
                        {challengeOptions.map((challenge) => (
                          <button
                            key={challenge}
                            type="button"
                            onClick={() => handleChallengeToggle(challenge)}
                            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-200 ${
                              selectedChallenges.includes(challenge)
                                ? 'bg-gradient-to-r from-[#FF8C00] to-[#8A2BE2] text-white'
                                : 'bg-[#F5F5F5] text-[#666666] hover:bg-[#E8E5E0]'
                            }`}
                          >
                            {challenge}
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
                      onClick={prevStep}
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
                      onClick={nextStep}
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
