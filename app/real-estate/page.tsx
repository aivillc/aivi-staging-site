import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Integrations from '@/components/Integrations';
import PainPoints from '@/components/PainPoints';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function RealEstatePage() {
  return (
    <main className="min-h-screen bg-white">
      <TronHeader />
      <Navigation />
      <Hero industry="Real Estate" />
      <Dashboard industry="Real Estate" />
      <Features industry="Real Estate" />
      <Solutions />
      <Integrations />
      <PainPoints industry="Real Estate" />
      <Testimonials industry="Real Estate" />
      <Footer />
    </main>
  );
}
