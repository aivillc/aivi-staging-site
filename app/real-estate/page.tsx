import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHouse, 
  faKey, 
  faCalendarAlt, 
  faHome,
  faBriefcase,
  faFileAlt,
  faBell,
  faBuilding,
  faUsers,
  faCity,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Real Estate AI Solutions | AIVI',
  description: 'Transform property leads into showings with AI-powered follow-ups, scheduling, and automated real estate communication.',
};

export default function RealEstatePage() {
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
              Turn Property Leads Into{' '}
              <span className="inline-block bg-gradient-to-r from-orange-500 via-purple-500 to-orange-500 text-transparent bg-clip-text animate-gradient-x">
                Showings
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                In 13 Seconds
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered showing requests and buyer engagement that closes deals{' '}
              <span className="text-orange-500 font-bold">3x Faster</span>
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

      {/* Real Estate Features */}
      <section id="features" className="relative py-24 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Real Estate-Specific{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built AI automation for realtors, brokerages, and property management companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faKey} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Instant Lead Response</h3>
              <p className="text-gray-600">
                Respond to property inquiries within seconds via SMS, email, or voice. Never miss a hot lead again.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Automated Showing Scheduling</h3>
              <p className="text-gray-600">
                Let buyers schedule property viewings via SMS or voice. Automated calendar integration and reminders included.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faHome} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Alerts</h3>
              <p className="text-gray-600">
                Notify interested buyers instantly when matching properties hit the market. First to know, first to show.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faBriefcase} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Open House Management</h3>
              <p className="text-gray-600">
                Automated open house invitations, reminders, and follow-ups. Collect feedback and schedule private showings.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white border border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faFileAlt} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Offer Status Updates</h3>
              <p className="text-gray-600">
                Keep buyers and sellers informed throughout the offer process. Automated updates for counteroffers and acceptance.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white border border-orange-200 rounded-2xl p-8 hover:border-orange-400 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faBell} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Closing Coordination</h3>
              <p className="text-gray-600">
                Automated reminders for inspections, appraisals, and closing dates. Keep all parties on track and informed.
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
              Get up and running in minutes with seamless MLS and CRM integration
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Your Tools</h3>
              <p className="text-gray-600">
                Integrate with your MLS, CRM (e.g., Follow Up Boss, KV Core), and calendar in under 5 minutes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange-500 to-purple-600 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Your Preferences</h3>
              <p className="text-gray-600">
                Configure response templates, showing availability, and lead qualification criteria.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-orange-500 flex items-center justify-center text-white text-3xl font-black shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Close More Deals</h3>
              <p className="text-gray-600">
                Sit back as AIVI engages leads, books showings, and keeps your pipeline hot 24/7.
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
                3x
              </div>
              <p className="text-xl text-white/80">Faster Deal Closing</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                85%
              </div>
              <p className="text-xl text-white/80">Lead Response Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                42%
              </div>
              <p className="text-xl text-white/80">More Showings Booked</p>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Every Agent - WHITE BACKGROUND */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Perfect For{' '}
              <span className="bg-gradient-to-r from-purple-600 to-orange-500 text-transparent bg-clip-text">
                Every Agent
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're a solo agent or managing a brokerage, AIVI scales with your business
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faBuilding} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Independent Agents</h3>
              <p className="text-gray-600 mb-4">
                Compete with large teams by providing instant 24/7 lead response. Never lose a lead to a faster competitor again.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Instant lead response automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Showing scheduling while you sleep</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Buyer qualification and nurturing</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faUsers} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real Estate Teams</h3>
              <p className="text-gray-600 mb-4">
                Scale your operations without hiring more ISAs. Distribute leads intelligently and track team performance.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Smart lead routing by geography/price</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Team calendar coordination</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Performance analytics dashboard</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faCity} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Brokerages</h3>
              <p className="text-gray-600 mb-4">
                Provide enterprise-level lead response as a value-add for your agents. Increase agent retention and recruitment.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>White-label branding options</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Multi-agent management dashboard</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-purple-600 mt-1" />
                  <span>Compliance and call recording</span>
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faCity} className="text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Property Managers</h3>
              <p className="text-gray-600 mb-4">
                Automate tenant inquiries, maintenance requests, and lease renewals. Reduce vacancy time and improve tenant satisfaction.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Automated showing appointments</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Maintenance ticket creation</span>
                </li>
                <li className="flex items-start gap-2">
                  <FontAwesomeIcon icon={faCheck} className="text-orange-500 mt-1" />
                  <span>Lease renewal reminders</span>
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
            Ready to Close More{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Deals?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join top-performing real estate agents using AIVI to automate lead response and accelerate deal closings.
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
