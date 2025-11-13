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
    <main className="min-h-screen" style={{ backgroundColor: '#0f141c' }}>
      <TronHeader />
      <Navigation />
      <Hero />
      <PainPoints />
      <Features />
      <Solutions />
      {/* <Integrations /> */}
      <Dashboard />
      <Testimonials />
      <Footer />
    </main>
  );
}
