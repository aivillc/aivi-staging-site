'use client';

import { useState } from 'react';
import { updateSessionData } from '@/lib/sessionData';
import { getGlobalSessionId } from '@/lib/globalSession';

type QuestionType = 'select' | 'multiselect' | 'text';

interface Question {
  id: number;
  question: string;
  type: QuestionType;
  options?: string[];
  key: string;
}

interface BotResponses {
  userName?: string;
  industry?: string;
  challenge?: string;
  channels?: string[];
  volume?: string;
  goal?: string;
  crm?: string;
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  additionalNotes?: string;
  [key: string]: string | string[] | undefined;
}

const questions: Question[] = [
  {
    id: 0,
    question: "Hi! I'm AIVI's AI Assistant. Let me help design the perfect automation solution for your business.",
    type: 'text',
    key: 'userName',
  },
  {
    id: 1,
    question: "What industry are you in?",
    type: 'select',
    key: 'industry',
    options: [
      'Trucking & Logistics',
      'Financial Services',
      'Insurance',
      'Healthcare',
      'Other'
    ]
  },
  {
    id: 2,
    question: "What's your biggest customer engagement challenge right now?",
    type: 'select',
    key: 'challenge',
    options: [
      'Slow response times to leads',
      'High volume of repetitive inquiries',
      'Poor follow-up on cold leads',
      'Manual data entry from documents',
      'Limited after-hours support'
    ]
  },
  {
    id: 3,
    question: "Which channels do you currently use to reach customers? (Select all that apply)",
    type: 'multiselect',
    key: 'channels',
    options: [
      'Phone calls',
      'SMS/Text messaging',
      'Email',
      'Web forms',
      'None yet / Just starting'
    ]
  },
  {
    id: 4,
    question: "How many customer interactions do you handle monthly?",
    type: 'select',
    key: 'volume',
    options: [
      'Under 100',
      '100-500',
      '500-2,000',
      '2,000-10,000',
      '10,000+'
    ]
  },
  {
    id: 5,
    question: "What's your primary goal with AI automation?",
    type: 'select',
    key: 'goal',
    options: [
      'Increase lead conversion rates',
      'Reduce response time',
      'Scale without hiring more staff',
      'Improve customer satisfaction',
      'Reactivate dormant leads'
    ]
  },
  {
    id: 6,
    question: "Last question! Do you currently use a CRM?",
    type: 'select',
    key: 'crm',
    options: [
      'Yes - HubSpot',
      'Yes - Salesforce',
      'Yes - Other',
      'No, but planning to',
      'No CRM'
    ]
  }
];

export default function DemoForm() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<BotResponses>({});
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [textInput, setTextInput] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showThankYouPopup, setShowThankYouPopup] = useState(false);
  const [contactData, setContactData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    additionalNotes: ''
  });

  const handleAnswer = (answer: string | string[]) => {
    const question = questions[currentQuestion];

    setIsAnimating(true);

    setTimeout(() => {
      setResponses({
        ...responses,
        [question.key]: answer
      });

      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOptions([]);
        setTextInput('');
      } else {
        // After last question, show contact form
        setShowContactForm(true);
      }

      setIsAnimating(false);
    }, 300);
  };

  const handleTextSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim()) {
      handleAnswer(textInput.trim());
    }
  };

  const handleOptionClick = (option: string) => {
    const question = questions[currentQuestion];
    
    if (question.type === 'multiselect') {
      if (selectedOptions.includes(option)) {
        setSelectedOptions(selectedOptions.filter(o => o !== option));
      } else {
        setSelectedOptions([...selectedOptions, option]);
      }
    } else {
      handleAnswer(option);
    }
  };

  const handleMultiselectConfirm = () => {
    if (selectedOptions.length > 0) {
      handleAnswer(selectedOptions);
    }
  };

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    });
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Prepare complete data payload
    const completeData = {
      // Question responses
      industry: responses.industry,
      challenge: responses.challenge,
      channels: responses.channels,
      volume: responses.volume,
      goal: responses.goal,
      crm: responses.crm,
      // Contact information
      fullName: contactData.fullName,
      companyName: contactData.companyName,
      email: contactData.email,
      phone: contactData.phone,
      additionalNotes: contactData.additionalNotes,
      // Metadata
      timestamp: new Date().toISOString(),
      source: 'AIVI Staging - Interactive Bot'
    };
    
    // Save to session data for use in chat
    try {
      // Use global session ID (shared with ChatBot)
      const sessionId = getGlobalSessionId();
      
      // Update session data with form responses
      updateSessionData(sessionId, {
        name: contactData.fullName,
        email: contactData.email,
        phone: contactData.phone,
        businessName: contactData.companyName,
        industry: responses.industry as string,
        challenge: responses.challenge as string,
        channels: responses.channels as string[],
        volume: responses.volume as string,
        goal: responses.goal as string,
        crm: responses.crm as string,
        additionalNotes: contactData.additionalNotes,
      });
      
      console.log('✅ Form data saved to global session:', sessionId);
      
      // Sync to HubSpot after form submission
      try {
        console.log('📤 [HubSpot] Syncing form submission...');
        
        // Get the session data we just saved to send to API
        const savedSessionData = {
          name: contactData.fullName,
          email: contactData.email,
          phone: contactData.phone,
          businessName: contactData.companyName,
          industry: responses.industry as string,
          challenge: responses.challenge as string,
          channels: responses.channels as string[],
          volume: responses.volume as string,
          goal: responses.goal as string,
          crm: responses.crm as string,
          additionalNotes: contactData.additionalNotes,
        };
        
        const hubspotResponse = await fetch('/api/hubspot/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            includeConversation: false, // No chat conversation from form
            sessionData: savedSessionData, // Send session data directly
          }),
        });
        
        if (hubspotResponse.ok) {
          const data = await hubspotResponse.json();
          
          // Only log if actually synced (not skipped)
          if (data.success) {
            console.log('✅ [HubSpot] Form data synced:', data);
          } else if (data.skipped) {
            console.log('⏭️ [HubSpot]', data.message);
          }
        } else {
          const errorText = await hubspotResponse.text();
          console.error('❌ [HubSpot] Sync failed:', errorText);
        }
      } catch (hubspotError) {
        console.error('❌ [HubSpot] Error syncing form:', hubspotError);
      }
    } catch (error) {
      console.error('Error saving form data to session:', error);
    }
    
    // Send to webhook
    try {
      const response = await fetch('https://stage.aivi.io/webhook/prospects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(completeData),
      });

      if (response.ok) {
        console.log('Data sent successfully to webhook');
      } else {
        console.error('Webhook request failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending data to webhook:', error);
    }
    
    // Merge contact data into responses
    setResponses({
      ...responses,
      fullName: contactData.fullName,
      companyName: contactData.companyName,
      email: contactData.email,
      phone: contactData.phone,
      additionalNotes: contactData.additionalNotes
    });
    
    // Show results
    setShowContactForm(false);
    setShowResults(true);
    
    // Show thank you popup after a brief delay
    setTimeout(() => {
      setShowThankYouPopup(true);
    }, 500);
  };

  const resetBot = () => {
    setCurrentQuestion(0);
    setResponses({});
    setSelectedOptions([]);
    setTextInput('');
    setShowContactForm(false);
    setShowResults(false);
    setShowThankYouPopup(false);
    setContactData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      additionalNotes: ''
    });
  };

  // Helper function to personalize questions with user's name
  const getPersonalizedQuestion = (question: Question): string => {
    const userName = responses.userName as string;

    if (!userName || currentQuestion === 0) {
      return question.question;
    }

    // Map of question IDs to personalized versions
    const personalizedQuestions: { [key: number]: string } = {
      1: `Great to meet you, ${userName}! What industry are you in?`,
      2: `Thanks, ${userName}! What's your biggest customer engagement challenge right now?`,
      3: `Got it, ${userName}! Which channels do you currently use to reach customers? (Select all that apply)`,
      4: `Perfect, ${userName}! How many customer interactions do you handle monthly?`,
      5: `Excellent, ${userName}! What's your primary goal with AI automation?`,
      6: `Almost done, ${userName}! Last question - do you currently use a CRM?`
    };

    return personalizedQuestions[question.id] || question.question;
  };

  // Contact Form View
  if (showContactForm) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-4 leading-tight">
                Perfect{responses.userName ? `, ${responses.userName}` : ''}!
              </h3>
              <p className="text-white/40 text-base sm:text-lg font-light">
                Share your contact information to receive your personalized solution.
              </p>
            </div>

            <form onSubmit={handleContactSubmit} className="space-y-8">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm text-white/40 mb-3 font-light">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={contactData.fullName}
                onChange={handleContactChange}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm text-white/40 mb-3 font-light">
                Company Name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={contactData.companyName}
                onChange={handleContactChange}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="Your company"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm text-white/40 mb-3 font-light">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={contactData.email}
                onChange={handleContactChange}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm text-white/40 mb-3 font-light">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={contactData.phone}
                onChange={handleContactChange}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm text-white/40 mb-3 font-light">
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                value={contactData.additionalNotes}
                onChange={handleContactChange}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/20 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                placeholder="Tell us more..."
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="relative px-8 py-3 bg-gradient-to-r from-[#3d5a80] to-[#00cc99] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(61,90,128,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group"
              >
                <span className="relative z-10">Submit</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00cc99] to-[#3d5a80] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </button>
            </div>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => {
                setShowContactForm(false);
                setCurrentQuestion(questions.length - 1);
              }}
              className="text-white/40 hover:text-white transition-colors text-sm font-medium"
            >
              ← Back
            </button>
          </form>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
          <div className="space-y-16">
            {/* Header */}
            <div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
                Your Custom AI Solution
              </h3>
              <p className="text-white/40 text-base sm:text-lg font-light">
                Based on your responses, here's your personalized automation strategy
              </p>
            </div>

          {/* Results List */}
          <div className="space-y-8">
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">Industry Focus</div>
              <div className="text-white text-xl font-light">{responses.industry || 'N/A'}</div>
            </div>
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">Primary Challenge</div>
              <div className="text-white text-xl font-light">{responses.challenge || 'N/A'}</div>
            </div>
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">Current Channels</div>
              <div className="text-white text-xl font-light">
                {Array.isArray(responses.channels) ? responses.channels.join(', ') : 'N/A'}
              </div>
            </div>
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">Monthly Volume</div>
              <div className="text-white text-xl font-light">{responses.volume || 'N/A'}</div>
            </div>
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">Primary Goal</div>
              <div className="text-white text-xl font-light">{responses.goal || 'N/A'}</div>
            </div>
            <div className="pb-6 border-b border-white/10">
              <div className="text-sm text-white/40 mb-2 font-light">CRM Status</div>
              <div className="text-white text-xl font-light">{responses.crm || 'N/A'}</div>
            </div>
          </div>

          {/* Recommended Solution */}
          <div className="pt-8 border-t border-white/20">
            <h4 className="text-2xl md:text-3xl font-light text-white mb-6">
              Recommended Solution
            </h4>
            <p className="text-white/60 leading-relaxed mb-8 text-lg font-light">
              Based on your {responses.industry} business handling {responses.volume} interactions monthly,
              we recommend a managed service approach with:
            </p>
            <div className="space-y-4">
              <div className="text-white/60 text-base font-light">
                AI-powered voice calls for instant lead response
              </div>
              <div className="text-white/60 text-base font-light">
                SMS automation for quick follow-ups
              </div>
              <div className="text-white/60 text-base font-light">
                {responses.crm?.includes('Yes') ? 'Seamless integration with your existing CRM' : 'CRM setup and integration'}
              </div>
              <div className="text-white/60 text-base font-light">
                Real-time analytics and coaching dashboard
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Thank You Popup Modal */}
        {showThankYouPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 animate-fadeIn">
            <div className="relative max-w-lg w-full bg-black border border-white/20 p-12 animate-scaleIn shadow-[0_0_40px_rgba(255,255,255,0.1)]">
              {/* Close button */}
              <button
                onClick={() => setShowThankYouPopup(false)}
                className="absolute top-6 right-6 text-white/40 hover:text-white transition-colors"
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Content */}
              <div className="space-y-6">
                <h3 className="text-3xl md:text-4xl font-light text-white">
                  Thank You
                </h3>
                <p className="text-white/60 leading-relaxed text-lg font-light">
                  Your information has been submitted successfully. The AIVI team will reach out to you shortly to schedule a personalized demo.
                </p>
                <button
                  onClick={() => setShowThankYouPopup(false)}
                  className="relative w-full py-3 px-8 bg-gradient-to-r from-[#3d5a80] to-[#00cc99] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(61,90,128,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group"
                >
                  <span className="relative z-10">Close</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00cc99] to-[#3d5a80] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Background container with low opacity */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 sm:p-8 md:p-12 shadow-[0_0_40px_rgba(255,255,255,0.1)]">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="h-px bg-white/10">
            <div
              className="h-full bg-white transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className={`relative transition-opacity duration-300 ${
          isAnimating ? 'opacity-40' : 'opacity-100'
        }`}>

        {/* Vertical Layout for First Question (Name Input) */}
        {currentQuestion === 0 ? (
          <div className="relative space-y-12">
            {/* Question */}
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
              {getPersonalizedQuestion(question)}
            </h3>

            {/* Text Input */}
            <form onSubmit={handleTextSubmit} className="space-y-6">
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Your name"
                disabled={isAnimating}
                className="w-full px-0 py-4 bg-transparent border-b border-white/20 text-white text-xl placeholder-white/30 focus:outline-none focus:border-white transition-colors duration-300 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={isAnimating || !textInput.trim()}
                className="relative px-8 py-3 bg-gradient-to-r from-[#3d5a80] to-[#00cc99] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(61,90,128,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">Continue</span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00cc99] to-[#3d5a80] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </button>
            </form>
          </div>
        ) : (
          /* Horizontal Layout for Subsequent Questions */
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left Side - Question */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight lg:sticky lg:top-8">
                {getPersonalizedQuestion(question)}
              </h3>
            </div>

            {/* Right Side - Options */}
            <div className="lg:col-span-3">
              <div className="space-y-3">
                {question.options?.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleOptionClick(option)}
                    disabled={isAnimating}
                    className={`group w-full text-left px-6 py-4 border border-white/20 rounded-lg font-normal text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${
                      selectedOptions.includes(option)
                        ? 'text-white border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] bg-white/5'
                        : 'text-white hover:text-white hover:border-white/40 hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {selectedOptions.includes(option) && (
                        <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Multi-select confirm button */}
              {question.type === 'multiselect' && selectedOptions.length > 0 && (
                <button
                  onClick={handleMultiselectConfirm}
                  disabled={isAnimating}
                  className="relative mt-8 px-8 py-3 bg-gradient-to-r from-[#3d5a80] to-[#00cc99] text-white font-bold rounded-xl transition-all duration-400 hover:shadow-[0_8px_30px_rgba(61,90,128,0.5)] hover:-translate-y-1 uppercase tracking-wider overflow-hidden group disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10">Continue</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#00cc99] to-[#3d5a80] opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Back button - Minimalist */}
        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedOptions([]);
            }}
            disabled={isAnimating}
            className="mt-12 text-white/40 hover:text-white transition-colors text-sm font-medium disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
        )}
        </div>
      </div>
    </div>
  );
}

