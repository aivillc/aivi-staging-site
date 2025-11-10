'use client';

import { useState } from 'react';
import { updateSessionData } from '@/lib/sessionData';
import { getGlobalSessionId } from '@/lib/globalSession';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faBullseye, faMobileAlt, faChartBar, faRocket, faBriefcase, faCheck } from '@fortawesome/free-solid-svg-icons';

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
      <div className="w-full max-w-3xl mx-auto">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-purple-500/40 transition-all duration-500">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-3xl pointer-events-none" />

          {/* Bot Avatar - Enhanced */}
          <div className="relative flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl blur-md opacity-60 animate-pulse" />
              <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
            <div>
              <div className="text-sm text-white font-bold tracking-wide">AIVI Assistant</div>
              <div className="text-xs text-white/50 font-medium">Final Step - Contact Information</div>
            </div>
          </div>

          <div className="relative mb-8">
            <h3 className="text-2xl md:text-3xl font-black text-white mb-3 leading-tight tracking-tight">
              Perfect{responses.userName ? `, ${responses.userName}` : ''}! Let's get you started
            </h3>
            <p className="text-white/70 text-lg">
              Share your contact information so we can create your custom AI solution and schedule a personalized demo.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="relative space-y-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-white/90 mb-2.5 uppercase tracking-wider">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={contactData.fullName}
                onChange={handleContactChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                placeholder="John Doe"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-bold text-white/90 mb-2.5 uppercase tracking-wider">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={contactData.companyName}
                onChange={handleContactChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                placeholder="Acme Corporation"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white/90 mb-2.5 uppercase tracking-wider">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={contactData.email}
                onChange={handleContactChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                placeholder="john@acmecorp.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-white/90 mb-2.5 uppercase tracking-wider">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={contactData.phone}
                onChange={handleContactChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-bold text-white/90 mb-2.5 uppercase tracking-wider">
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={4}
                value={contactData.additionalNotes}
                onChange={handleContactChange}
                className="w-full px-6 py-4 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                placeholder="Any specific requirements or questions you'd like us to know about..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 px-8 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl shadow-xl shadow-purple-500/20 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 uppercase tracking-wider text-base"
            >
              See My Custom Solution →
            </button>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => {
                setShowContactForm(false);
                setCurrentQuestion(questions.length - 1);
              }}
              className="w-full py-4 px-6 bg-white/5 border-2 border-white/10 text-white/70 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all font-semibold"
            >
              ← Back to Questions
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="w-full max-w-5xl mx-auto">
        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          {/* Decorative gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-3xl pointer-events-none" />

          <div className="relative text-center mb-12">
            <div className="inline-block relative mb-6">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full blur-xl opacity-40 animate-pulse" />
              <div className="relative p-5 bg-gradient-to-br from-purple-500/20 to-orange-500/20 rounded-full border-2 border-purple-500/30">
                <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <h3 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
              Your Custom AI Solution
            </h3>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Based on your responses, here's your personalized automation strategy
            </p>
          </div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            <ResultCard
              title="Industry Focus"
              value={responses.industry || 'N/A'}
              icon={faBuilding}
            />
            <ResultCard
              title="Primary Challenge"
              value={responses.challenge || 'N/A'}
              icon={faBullseye}
            />
            <ResultCard
              title="Current Channels"
              value={Array.isArray(responses.channels) ? responses.channels.join(', ') : 'N/A'}
              icon={faMobileAlt}
            />
            <ResultCard
              title="Monthly Volume"
              value={responses.volume || 'N/A'}
              icon={faChartBar}
            />
            <ResultCard
              title="Primary Goal"
              value={responses.goal || 'N/A'}
              icon={faRocket}
            />
            <ResultCard
              title="CRM Status"
              value={responses.crm || 'N/A'}
              icon={faBriefcase}
            />
          </div>

          <div className="relative p-8 bg-gradient-to-br from-purple-500/10 to-orange-500/10 border-2 border-purple-500/30 rounded-2xl shadow-xl">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-t-2xl" />

            <h4 className="text-2xl font-black text-white mb-4 flex items-center gap-3">
              <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-orange-500 rounded-full animate-pulse" />
              Recommended Solution
            </h4>
            <p className="text-white/80 leading-relaxed mb-6 text-lg">
              Based on your <span className="text-purple-400 font-bold">{responses.industry}</span> business handling <span className="text-orange-400 font-bold">{responses.volume}</span> interactions monthly,
              we recommend a <span className="text-transparent bg-gradient-to-r from-purple-400 to-orange-400 bg-clip-text font-black">managed service approach</span> with:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg group-hover:bg-purple-500 transition-all">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-400 group-hover:text-white text-sm transition-colors" />
                </div>
                <span className="text-white/80 text-base pt-1 group-hover:text-white transition-colors">AI-powered voice calls for instant lead response</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg group-hover:bg-purple-500 transition-all">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-400 group-hover:text-white text-sm transition-colors" />
                </div>
                <span className="text-white/80 text-base pt-1 group-hover:text-white transition-colors">SMS automation for quick follow-ups</span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg group-hover:bg-purple-500 transition-all">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-400 group-hover:text-white text-sm transition-colors" />
                </div>
                <span className="text-white/80 text-base pt-1 group-hover:text-white transition-colors">
                  {responses.crm?.includes('Yes') ? 'Seamless integration with your existing CRM' : 'CRM setup and integration'}
                </span>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="flex items-center justify-center w-8 h-8 bg-purple-500/20 border border-purple-500/50 rounded-lg group-hover:bg-purple-500 transition-all">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-400 group-hover:text-white text-sm transition-colors" />
                </div>
                <span className="text-white/80 text-base pt-1 group-hover:text-white transition-colors">Real-time analytics and coaching dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Thank You Popup Modal */}
        {showThankYouPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
            <div className="relative max-w-lg w-full bg-gradient-to-br from-purple-900/95 to-black/95 backdrop-blur-xl border-2 border-purple-500/50 rounded-3xl p-10 shadow-2xl animate-scaleIn">
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-orange-500/10 rounded-3xl pointer-events-none" />

              {/* Close button */}
              <button
                onClick={() => setShowThankYouPopup(false)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-300 hover:scale-110"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Success Icon */}
              <div className="relative flex justify-center mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full blur-xl opacity-50 animate-pulse" />
                </div>
                <div className="relative w-24 h-24 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl">
                  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <h3 className="relative text-3xl font-black text-white text-center mb-4">
                Thank You!
              </h3>
              <p className="relative text-white/80 text-center leading-relaxed mb-8 text-lg">
                Your information has been submitted successfully. The AIVI team will reach out to you shortly to schedule a personalized demo.
              </p>

              {/* Close button */}
              <button
                onClick={() => setShowThankYouPopup(false)}
                className="relative w-full py-4 px-8 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl transition-all transform hover:scale-[1.02] shadow-xl shadow-purple-500/30 uppercase tracking-wider"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Progress Bar - Enhanced */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs font-semibold text-white/60 uppercase tracking-wider">Question {currentQuestion + 1} of {questions.length}</span>
          <span className="text-xs font-bold text-purple-400">{Math.round(progress)}%</span>
        </div>
        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden backdrop-blur-sm">
          <div
            className="h-full bg-gradient-to-r from-purple-500 via-purple-400 to-orange-500 transition-all duration-700 ease-out rounded-full shadow-lg shadow-purple-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:border-purple-500/40 transition-all duration-500 ${
        isAnimating ? 'opacity-50 scale-[0.98]' : 'opacity-100 scale-100'
      }`}>
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-orange-500/5 rounded-3xl pointer-events-none" />

        {/* Bot Avatar - Enhanced */}
        <div className="relative flex items-center gap-4 mb-8 pb-6 border-b border-white/10">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl blur-md opacity-60 animate-pulse" />
            <div className="relative w-14 h-14 bg-gradient-to-br from-purple-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
          </div>
          <div>
            <div className="text-sm text-white font-bold tracking-wide">AIVI Assistant</div>
            <div className="text-xs text-white/50 font-medium">AI-Powered Solution Designer</div>
          </div>
        </div>

        {/* Horizontal Layout: Question Left, Options Right */}
        <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Left Side - Question */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight sticky top-0">
              {getPersonalizedQuestion(question)}
            </h3>
          </div>

          {/* Right Side - Inputs/Options */}
          <div className="lg:col-span-3">
            {/* Text Input (for first question) */}
            {question.type === 'text' && (
              <form onSubmit={handleTextSubmit} className="relative space-y-5">
                <div className="relative">
                  <input
                    type="text"
                    value={textInput}
                    onChange={(e) => setTextInput(e.target.value)}
                    placeholder="Enter your name..."
                    disabled={isAnimating}
                    className="w-full px-6 py-5 bg-white/5 border-2 border-white/10 rounded-xl text-white text-lg placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 disabled:opacity-50 font-medium"
                    autoFocus
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-orange-500/0 pointer-events-none opacity-0 transition-opacity duration-300 peer-focus:opacity-100" />
                </div>
                <button
                  type="submit"
                  disabled={isAnimating || !textInput.trim()}
                  className="w-full py-5 px-8 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl shadow-xl shadow-purple-500/20 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wider text-base"
                >
                  Continue →
                </button>
              </form>
            )}

            {/* Options (for select/multiselect questions) */}
            {question.type !== 'text' && (
              <div className="relative space-y-3">
                {question.options?.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleOptionClick(option)}
                    disabled={isAnimating}
                    className={`group relative w-full text-left px-6 py-5 rounded-xl border-2 font-semibold text-base transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden ${
                      selectedOptions.includes(option)
                        ? 'bg-gradient-to-r from-purple-500/20 to-orange-500/10 border-purple-500 text-white shadow-lg shadow-purple-500/20'
                        : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-purple-500/50 hover:text-white'
                    }`}
                  >
                    {/* Animated gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${selectedOptions.includes(option) ? 'opacity-100' : ''}`} />

                    <div className="relative flex items-center justify-between">
                      <span>{option}</span>
                      {selectedOptions.includes(option) && (
                        <div className="flex items-center justify-center w-7 h-7 bg-purple-500 rounded-lg shadow-lg">
                          <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Multi-select confirm button */}
            {question.type === 'multiselect' && selectedOptions.length > 0 && (
              <button
                onClick={handleMultiselectConfirm}
                disabled={isAnimating}
                className="w-full mt-6 py-5 px-8 bg-gradient-to-r from-purple-500 to-orange-500 hover:from-purple-600 hover:to-orange-600 text-white font-black rounded-xl shadow-xl shadow-purple-500/20 transition-all transform hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none uppercase tracking-wider text-base"
              >
                Continue ({selectedOptions.length} selected) →
              </button>
            )}
          </div>
        </div>

        {/* Back button - Full width at bottom */}
        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedOptions([]);
            }}
            disabled={isAnimating}
            className="w-full mt-8 py-4 px-6 bg-white/5 border-2 border-white/10 text-white/70 rounded-xl hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}

interface ResultCardProps {
  title: string;
  value: string;
  icon: any;
}

function ResultCard({ title, value, icon }: ResultCardProps) {
  return (
    <div className="group relative p-6 bg-white/5 border-2 border-white/10 rounded-2xl hover:border-purple-500/40 hover:bg-white/10 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
      {/* Gradient accent on hover */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-orange-500 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-4">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500/20 to-orange-500/20 border border-purple-500/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
          <FontAwesomeIcon icon={icon} className="text-xl text-purple-400 group-hover:text-purple-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-xs text-white/50 uppercase tracking-wider font-bold mb-2">{title}</div>
          <div className="text-white font-bold text-base break-words">{value}</div>
        </div>
      </div>
    </div>
  );
}
