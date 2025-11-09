import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHospital, 
  faCalendarAlt, 
  faPills, 
  faClipboardList, 
  faBell, 
  faLock,
  faTooth,
  faRunning,
  faSyringe,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Healthcare AI Solutions | AIVI',
  description: 'Transform patient engagement with AI-powered appointment reminders, follow-ups, and automated healthcare communication.',
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
        {/* Animated Background Gradients - TRON Style */}
        <div className="absolute inset-0 bg-black" />

        {/* Moving gradient orbs */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-orange-500/20 rounded-full blur-3xl animate-pulse-slower" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-purple-600/10 via-transparent to-orange-500/10 rounded-full blur-3xl animate-spin-slow" />

        {/* Grid overlay - cyberpunk style */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Diagonal moving gradient lines */}
        <div className="absolute inset-0 overflow-hidden opacity-30">
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-1/4 animate-scan-horizontal" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent top-1/2 animate-scan-horizontal-reverse" />
          <div className="absolute w-full h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent top-3/4 animate-scan-horizontal-slow" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            {/* Logo */}
            <div className="mb-12 flex flex-col items-center">
              <Image
                src="/AIVI-LOGO-W.png"
                alt="AIVI"
                width={400}
                height={167}
                priority
                className="h-24 md:h-32 w-auto mb-6 drop-shadow-2xl"
              />
              <div className="h-px w-48 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              Patient Follow-Ups That{' '}
              <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
                Convert
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                In 13 Seconds
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered appointment reminders and patient engagement that{' '}
              <span className="text-orange-500 font-bold">reduces no-shows by 67%</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/50 uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/5 border-2 border-purple-600/50 hover:bg-white/10 text-white text-lg font-bold rounded-xl transition-all backdrop-blur-sm uppercase tracking-wider"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare Features */}
      <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Healthcare-Specific{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built AI automation for healthcare providers, clinics, and medical practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Appointment Reminders</h3>
              <p className="text-gray-600">
                Automated SMS, voice, and email reminders 48 hours, 24 hours, and 2 hours before appointments. Reduce no-shows dramatically.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faPills} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Prescription Refill Automation</h3>
              <p className="text-gray-600">
                Proactive outreach when prescriptions are due. Patients can request refills via SMS or voice with instant confirmation.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faClipboardList} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pre-Visit Forms</h3>
              <p className="text-gray-600">
                Send and collect intake forms, insurance information, and medical history before appointments. Save time at check-in.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faBell} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lab Results Notification</h3>
              <p className="text-gray-600">
                Automated notifications when lab results are ready. HIPAA-compliant delivery via secure patient portals.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faHospital} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Post-Visit Follow-Up</h3>
              <p className="text-gray-600">
                Check-in with patients after procedures or visits. Collect feedback, address concerns, and improve care quality.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faLock} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">HIPAA Compliant</h3>
              <p className="text-gray-600">
                Fully HIPAA-compliant infrastructure with encrypted communications, secure data storage, and audit trails.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - WHITE BACKGROUND */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              How It{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get up and running in minutes with our simple 3-step process
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Systems</h3>
              <p className="text-gray-600">
                Integrate AIVI with your existing EHR, practice management software, or calendar system. Works with Epic, Cerner, athenahealth, and more.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Customize Your Workflows</h3>
              <p className="text-gray-600">
                Set up automated reminders, follow-ups, and communication preferences. Configure timing, messaging, and escalation rules.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Launch & Monitor</h3>
              <p className="text-gray-600">
                Activate your automation and watch patient engagement soar. Track performance with real-time analytics and insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                67%
              </div>
              <p className="text-xl text-white/80">Reduction in No-Shows</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                89%
              </div>
              <p className="text-xl text-white/80">Patient Satisfaction Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                15hrs
              </div>
              <p className="text-xl text-white/80">Staff Time Saved Per Week</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - WHITE BACKGROUND */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Perfect For{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Every Practice
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From small clinics to large hospital systems, AIVI scales to meet your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faHospital} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Primary Care Practices</h3>
              <p className="text-gray-600 mb-4">
                Reduce administrative burden with automated appointment reminders, prescription refill requests, and post-visit follow-ups.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Automated wellness visit reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Chronic care management outreach</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Annual physical scheduling</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faTooth} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Dental Offices</h3>
              <p className="text-gray-600 mb-4">
                Keep chairs filled with proactive recall campaigns, appointment confirmations, and payment reminders.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>6-month cleaning reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Treatment plan follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Insurance verification automation</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faRunning} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Physical Therapy & Rehab</h3>
              <p className="text-gray-600 mb-4">
                Improve patient compliance with exercise reminders, session scheduling, and progress check-ins.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Home exercise reminders</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Session confirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Progress milestone celebrations</span>
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faSyringe} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Specialty Practices</h3>
              <p className="text-gray-600 mb-4">
                Coordinate complex care with automated pre-procedure instructions, lab work reminders, and post-op check-ins.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Pre-surgical prep instructions</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Lab result follow-ups</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Referral coordination</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-purple-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Patient Experience?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join hundreds of healthcare providers using AIVI to improve patient engagement and reduce administrative burden.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-purple-600 to-orange-500 hover:from-purple-500 hover:to-orange-400 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-purple-500/50 uppercase tracking-wider"
          >
            Schedule a Demo
          </a>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      <ChatBot />
    </main>
  );
}
