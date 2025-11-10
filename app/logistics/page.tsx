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

export default function LogisticsPage() {
  return (
    <main className="min-h-screen bg-white">
      <TronHeader />
      <Navigation />
      <Hero industry="Logistics" />
      <Dashboard industry="Logistics" />
      <Features industry="Logistics" />
      <Solutions />
      <Integrations />
      <PainPoints industry="Logistics" />
      <Testimonials industry="Logistics" />
      <Footer />
    </main>
  );
}
