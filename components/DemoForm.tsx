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
    id: 1,
    question: "Hi! I'm AIVI's AI assistant. Let me help design the perfect automation solution for your business. What industry are you in?",
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
    question: "Great! What's your biggest customer engagement challenge right now?",
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
      } else {
        // After last question, show contact form
        setShowContactForm(true);
      }
      
      setIsAnimating(false);
    }, 300);
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
        const hubspotResponse = await fetch('/api/hubspot/sync', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            sessionId,
            includeConversation: false, // No chat conversation from form
          }),
        });
        
        if (hubspotResponse.ok) {
          const data = await hubspotResponse.json();
          console.log('✅ [HubSpot] Form data synced:', data);
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

  // Contact Form View
  if (showContactForm) {
    return (
      <div className="w-full max-w-2xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all">
          {/* Bot Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <div className="text-xs text-purple-400 font-bold uppercase tracking-wider">AIVI Assistant</div>
              <div className="text-xs text-white/40">Almost done!</div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-2xl font-black text-white mb-2">
              Perfect! Let's get you started
            </h3>
            <p className="text-white/70">
              Please share your contact information so we can create your custom AI solution and get in touch.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-bold text-white/80 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={contactData.fullName}
                onChange={handleContactChange}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-bold text-white/80 mb-2">
                Company Name *
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                required
                value={contactData.companyName}
                onChange={handleContactChange}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="Acme Corporation"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white/80 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={contactData.email}
                onChange={handleContactChange}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="john@acmecorp.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-white/80 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={contactData.phone}
                onChange={handleContactChange}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="additionalNotes" className="block text-sm font-bold text-white/80 mb-2">
                Additional Notes (Optional)
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                rows={3}
                value={contactData.additionalNotes}
                onChange={handleContactChange}
                className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
                placeholder="Any specific requirements or questions you'd like us to know about..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg shadow-lg transition-all transform hover:scale-[1.02] uppercase tracking-wider"
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
              className="w-full py-3 px-6 bg-white/5 border-2 border-white/10 text-white/70 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all font-medium"
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
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border-2 border-purple-500/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="inline-block p-4 bg-gradient-to-r from-purple-500/20 to-orange-500/20 rounded-full mb-4">
              <svg className="w-16 h-16 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-3">
              Your Custom AI Solution
            </h3>
            <p className="text-white/70 text-lg">
              Based on your responses, here's what we recommend
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <ResultCard
              title="Industry Focus"
              value={responses.industry || 'N/A'}
              icon="🏢"
            />
            <ResultCard
              title="Primary Challenge"
              value={responses.challenge || 'N/A'}
              icon="🎯"
            />
            <ResultCard
              title="Current Channels"
              value={Array.isArray(responses.channels) ? responses.channels.join(', ') : 'N/A'}
              icon="📱"
            />
            <ResultCard
              title="Monthly Volume"
              value={responses.volume || 'N/A'}
              icon="📊"
            />
            <ResultCard
              title="Primary Goal"
              value={responses.goal || 'N/A'}
              icon="🚀"
            />
            <ResultCard
              title="CRM Status"
              value={responses.crm || 'N/A'}
              icon="💼"
            />
          </div>

          <div className="p-6 bg-gradient-to-br from-purple-500/10 to-orange-500/10 border-2 border-purple-500/30 rounded-xl mb-6">
            <h4 className="text-xl font-black text-white mb-3">Recommended Solution</h4>
            <p className="text-white/80 leading-relaxed mb-4">
              Based on your {responses.industry} business handling {responses.volume} interactions monthly,
              we recommend a <span className="text-orange-500 font-bold">managed service approach</span> with:
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">AI-powered voice calls for instant lead response</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">SMS automation for quick follow-ups</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">
                  {responses.crm?.includes('Yes') ? 'Seamless integration with your existing CRM' : 'CRM setup and integration'}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-purple-400 text-xl font-black mt-0.5">✓</span>
                <span className="text-white/80">Real-time analytics and coaching dashboard</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Thank You Popup Modal */}
        {showThankYouPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-md w-full bg-gradient-to-br from-purple-900/90 to-black/90 backdrop-blur-md border-2 border-purple-500/50 rounded-2xl p-8 shadow-2xl animate-scaleIn">
              {/* Close button */}
              <button
                onClick={() => setShowThankYouPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full transition-all"
                aria-label="Close"
              >
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Success Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Message */}
              <h3 className="text-2xl font-black text-white text-center mb-3">
                Thank You!
              </h3>
              <p className="text-white/80 text-center leading-relaxed mb-6">
                Your information has been submitted successfully. The AIVI team will reach out to you shortly to schedule a personalized demo.
              </p>

              {/* Close button */}
              <button
                onClick={() => setShowThankYouPopup(false)}
                className="w-full py-3 px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02]"
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
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-6">
        <div className="h-2 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-purple-500 to-orange-500 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className={`bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all ${
        isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
      } duration-300`}>
        {/* Bot Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-orange-500 rounded-full flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
          </div>
          <div>
            <div className="text-xs text-purple-400 font-bold uppercase tracking-wider">AIVI Assistant</div>
            <div className="text-xs text-white/40">Powered by AI</div>
          </div>
        </div>

        {/* Question */}
        <div className="mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed">
            {question.question}
          </h3>
        </div>

        {/* Options */}
        <div className="space-y-3">
          {question.options?.map((option, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleOptionClick(option)}
              disabled={isAnimating}
              className={`w-full text-left px-6 py-4 rounded-xl border-2 font-medium transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                selectedOptions.includes(option)
                  ? 'bg-purple-500/20 border-purple-500 text-white'
                  : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:border-purple-500/50'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {selectedOptions.includes(option) && (
                  <span className="text-purple-400 text-xl font-black">✓</span>
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
            className="w-full mt-6 py-4 px-6 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-black rounded-lg shadow-lg transition-all transform hover:scale-[1.02] disabled:opacity-50 uppercase tracking-wider"
          >
            Continue →
          </button>
        )}

        {/* Back button */}
        {currentQuestion > 0 && (
          <button
            onClick={() => {
              setCurrentQuestion(currentQuestion - 1);
              setSelectedOptions([]);
            }}
            disabled={isAnimating}
            className="w-full mt-4 py-3 px-6 bg-white/5 border-2 border-white/10 text-white/70 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all font-medium disabled:opacity-50"
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
  icon: string;
}

function ResultCard({ title, value, icon }: ResultCardProps) {
  return (
    <div className="p-4 bg-white/5 border-2 border-white/10 rounded-xl hover:border-purple-500/30 transition-all">
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icon}</span>
        <div className="flex-1">
          <div className="text-xs text-white/50 uppercase tracking-wider mb-1">{title}</div>
          <div className="text-white font-bold text-sm">{value}</div>
        </div>
      </div>
    </div>
  );
}
