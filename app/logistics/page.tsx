import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import ChatBot from '@/components/ChatBot';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faTruck, 
  faBox, 
  faClock, 
  faExclamationTriangle, 
  faCheckCircle,
  faComments,
  faChartBar,
  faGlobe,
  faIndustry,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

export const metadata = {
  title: 'Logistics AI Solutions | AIVI',
  description: 'Automate shipment tracking, delivery notifications, and customer communication with AI-powered logistics solutions.',
};

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-black">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-black" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-orange-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse-slower" />
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-5xl shadow-2xl shadow-orange-500/50">
                <FontAwesomeIcon icon={faTruck} className="text-white" />
              </div>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight mb-8 tracking-tight">
              Shipment Tracking That{' '}
              <span className="inline-block bg-gradient-to-r from-purple-500 via-orange-500 to-purple-500 text-transparent bg-clip-text animate-gradient-x">
                Scales
              </span>
              <br />
              <span className="text-4xl md:text-6xl lg:text-7xl text-white/60">
                At Light Speed
              </span>
            </h1>

            {/* Description */}
            <p className="text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-12">
              AI-powered logistics automation that{' '}
              <span className="text-orange-500 font-bold">reduces support tickets by 73%</span>
              {' '}and improves delivery satisfaction
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-lg font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50 uppercase tracking-wider"
              >
                Get Started
              </a>
              <a
                href="#features"
                className="px-8 py-4 bg-white/5 border-2 border-orange-600/50 hover:bg-white/10 text-white text-lg font-bold rounded-xl transition-all backdrop-blur-sm uppercase tracking-wider"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Features */}
      <section id="features" className="relative py-20 px-6 bg-gradient-to-b from-black to-orange-950/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              Logistics-Specific{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
                Solutions
              </span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Purpose-built AI automation for logistics companies, freight forwarders, and delivery services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faBox} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Automated Shipment Updates</h3>
              <p className="text-white/70">
                Real-time tracking notifications via SMS, email, and voice. Keep customers informed at every stage of delivery.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faClock} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Delivery Time Windows</h3>
              <p className="text-white/70">
                AI-powered delivery time predictions. Notify customers 30 minutes before arrival and reduce failed deliveries.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faExclamationTriangle} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Exception Management</h3>
              <p className="text-white/70">
                Proactive alerts for delays, route changes, or delivery issues. Automated resolution workflows reduce manual intervention.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faCheckCircle} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Proof of Delivery</h3>
              <p className="text-white/70">
                Automated POD collection via SMS. Customers receive signature requests and confirmation with photo evidence.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-white/5 border border-orange-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faComments} className="text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Two-Way Communication</h3>
              <p className="text-white/70">
                Customers can reschedule deliveries, provide special instructions, or ask questions via SMS with instant responses.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-white/5 border border-purple-600/30 rounded-2xl p-8 backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="text-4xl mb-4">
                <FontAwesomeIcon icon={faChartBar} className="text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Route Optimization</h3>
              <p className="text-white/70">
                AI-driven route planning based on traffic, weather, and delivery windows. Reduce fuel costs and improve on-time delivery rates.
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
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
                Works
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seamless integration with your existing logistics infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Connect Your TMS</h3>
              <p className="text-gray-600">
                Integrate AIVI with your transportation management system, warehouse software, or tracking platform. Works with all major carriers.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-600 to-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Set Communication Rules</h3>
              <p className="text-gray-600">
                Configure automated notifications for tracking updates, delivery windows, exceptions, and confirmations based on your workflow.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-black mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Go Live & Scale</h3>
              <p className="text-gray-600">
                Launch your automation and handle thousands of shipments daily. Monitor performance and optimize with real-time analytics.
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
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                73%
              </div>
              <p className="text-xl text-white/80">Reduction in Support Tickets</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text mb-4">
                94%
              </div>
              <p className="text-xl text-white/80">On-Time Delivery Rate</p>
            </div>
            <div className="p-8">
              <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text mb-4">
                2.5x
              </div>
              <p className="text-xl text-white/80">Faster Customer Response Time</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases - WHITE BACKGROUND */}
      <section className="relative py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              Built For{' '}
              <span className="bg-gradient-to-r from-orange-500 to-purple-600 text-transparent bg-clip-text">
                Your Industry
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions for every logistics segment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Use Case 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🚛</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Last-Mile Delivery</h3>
              <p className="text-gray-600 mb-4">
                Keep customers informed with real-time tracking, ETA updates, and delivery confirmations. Reduce missed deliveries and improve satisfaction.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>30-minute arrival window notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Rescheduling via SMS</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Automated delivery instructions</span>
                </li>
              </ul>
            </div>

            {/* Use Case 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Freight Forwarding</h3>
              <p className="text-gray-600 mb-4">
                Streamline international shipping with automated customs updates, port arrival notifications, and cargo milestone tracking.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Container tracking updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Customs clearance notifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Port congestion alerts</span>
                </li>
              </ul>
            </div>

            {/* Use Case 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">E-Commerce Fulfillment</h3>
              <p className="text-gray-600 mb-4">
                Scale your operations with automated order confirmations, shipping notifications, and proactive exception handling.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Order shipped confirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Delivery delay proactive alerts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">✓</span>
                  <span>Return pickup scheduling</span>
                </li>
              </ul>
            </div>

            {/* Use Case 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
              <div className="text-4xl mb-4">🏭</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">B2B Logistics</h3>
              <p className="text-gray-600 mb-4">
                Coordinate complex supply chains with automated receiving notifications, dock scheduling, and inventory updates.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Dock appointment confirmations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>BOL and POD automation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600 mt-1">✓</span>
                  <span>Pallet tracking updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 px-6 bg-gradient-to-b from-orange-950/20 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
            Ready to Streamline Your{' '}
            <span className="bg-gradient-to-r from-orange-500 to-purple-500 text-transparent bg-clip-text">
              Logistics Operations?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-12">
            Join leading logistics companies using AIVI to automate customer communication and improve delivery satisfaction.
          </p>
          <a
            href="/#contact"
            className="inline-block px-12 py-5 bg-gradient-to-r from-orange-500 to-purple-600 hover:from-orange-400 hover:to-purple-500 text-white text-xl font-bold rounded-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50 uppercase tracking-wider"
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
