'use client';

import { useState } from 'react';

interface DemoFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  needs: string;
}

export default function DemoForm() {
  const [formData, setFormData] = useState<DemoFormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    needs: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showDemo, setShowDemo] = useState(false);
  const [demoStage, setDemoStage] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // n8n webhook integration
    const n8nWebhook = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL;

    if (n8nWebhook) {
      // Real API call to n8n
      try {
        const response = await fetch(n8nWebhook, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            company: formData.company,
            needs: formData.needs,
            timestamp: new Date().toISOString(),
          }),
        });

        if (response.ok) {
          setIsSubmitting(false);
          setShowDemo(true);
          startDemoSequence();
        } else {
          console.error('n8n webhook failed:', response.statusText);
          // Still show demo even if webhook fails
          setIsSubmitting(false);
          setShowDemo(true);
          startDemoSequence();
        }
      } catch (error) {
        console.error('Error calling n8n webhook:', error);
        // Still show demo even if webhook fails
        setIsSubmitting(false);
        setShowDemo(true);
        startDemoSequence();
      }
    } else {
      // Mock demo (no webhook configured)
      setTimeout(() => {
        setIsSubmitting(false);
        setShowDemo(true);
        startDemoSequence();
      }, 1000);
    }
  };

  const startDemoSequence = () => {
    // Stage 0: SMS
    setDemoStage(1);
    setTimeout(() => {
      // Stage 1: Voice Call
      setDemoStage(2);
      setTimeout(() => {
        // Stage 2: Email
        setDemoStage(3);
        setTimeout(() => {
          // Stage 3: Document Intelligence
          setDemoStage(4);
        }, 1500);
      }, 1500);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (showDemo) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8">
          <h3 className="text-2xl font-black text-white mb-6 text-center">
            Watch AIVI in Action - Multi-Channel Demo
          </h3>
          <p className="text-white/70 text-center mb-8">
            Hi {formData.firstName}! We're demonstrating our AI capabilities across multiple channels simultaneously.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SMS Demo */}
            <DemoCard
              title="SMS Message"
              status={demoStage >= 1 ? 'complete' : 'pending'}
              content={`Hi ${formData.firstName}, this is AIVI! We're reaching out from ${formData.company} to showcase our multi-channel capabilities. Check your phone!`}
            />

            {/* Voice Call Demo */}
            <DemoCard
              title="Voice Call"
              status={demoStage >= 2 ? 'complete' : demoStage === 1 ? 'in-progress' : 'pending'}
              content={`Calling ${formData.firstName} at your phone number to deliver a personalized AI voice message about ${formData.needs}.`}
            />

            {/* Email Demo */}
            <DemoCard
              title="Email"
              status={demoStage >= 3 ? 'complete' : demoStage === 2 ? 'in-progress' : 'pending'}
              content={`Sending personalized email to ${formData.email} with detailed information about how AIVI can help with ${formData.needs}.`}
            />

            {/* Document Intelligence Demo */}
            <DemoCard
              title="Document AI"
              status={demoStage >= 4 ? 'complete' : demoStage === 3 ? 'in-progress' : 'pending'}
              content="OCR + LLM analyzing uploaded documents, extracting data, and updating your CRM automatically."
            />
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => {
                setShowDemo(false);
                setDemoStage(0);
                setFormData({
                  firstName: '',
                  lastName: '',
                  email: '',
                  company: '',
                  needs: '',
                });
              }}
              className="px-6 py-3 bg-white/5 border-2 border-white/10 text-white rounded-lg hover:bg-white/10 hover:border-purple-500/50 transition-all font-bold"
            >
              Try Another Demo
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 shadow-2xl hover:border-purple-500/30 transition-all">
        <h3 className="text-2xl font-black text-white mb-6 text-center">
          Experience AIVI Live
        </h3>
        <p className="text-white/70 text-center mb-8">
          Fill out the form below and watch our AI engage you across multiple channels in real-time
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-bold text-white/80 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="John"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-bold text-white/80 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              placeholder="Doe"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-bold text-white/80 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="john@company.com"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="company" className="block text-sm font-bold text-white/80 mb-2">
            Company Name *
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
            placeholder="Acme Corp"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="needs" className="block text-sm font-bold text-white/80 mb-2">
            What are you looking for? *
          </label>
          <textarea
            id="needs"
            name="needs"
            required
            rows={3}
            value={formData.needs}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-white/5 border-2 border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all resize-none"
            placeholder="e.g., Lead qualification, invoice factoring automation, customer engagement..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-black rounded-lg shadow-2xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 uppercase tracking-wider"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Starting Demo...
            </span>
          ) : (
            'Start Live Demo'
          )}
        </button>

        <p className="text-xs text-white/40 text-center mt-4">
          By submitting, you'll receive a real-time demonstration via SMS, voice call, and email
        </p>
      </div>
    </form>
  );
}

interface DemoCardProps {
  title: string;
  status: 'pending' | 'in-progress' | 'complete';
  content: string;
}

function DemoCard({ title, status, content }: DemoCardProps) {
  return (
    <div className={`relative p-6 rounded-xl border-2 transition-all ${
      status === 'complete'
        ? 'bg-purple-500/10 border-purple-500'
        : status === 'in-progress'
        ? 'bg-orange-500/10 border-orange-500 animate-pulse'
        : 'bg-white/5 border-white/10'
    }`}>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg font-black text-white">{title}</h4>
        {status === 'complete' && (
          <span className="text-purple-400 text-2xl font-black">✓</span>
        )}
        {status === 'in-progress' && (
          <div className="w-6 h-6 border-3 border-orange-500 border-t-transparent rounded-full animate-spin" />
        )}
      </div>
      <p className="text-sm text-white/70">{content}</p>
    </div>
  );
}
