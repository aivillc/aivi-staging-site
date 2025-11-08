import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Integrations from '@/components/Integrations';
import Dashboard from '@/components/Dashboard';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      <Hero />
      <Dashboard />
      <PainPoints />
      <Features />
      <Solutions />
      <Integrations />
      <Testimonials />
      <Footer />
    </main>
  );
}
