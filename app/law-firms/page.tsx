import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Integrations from '@/components/Integrations';
import PainPoints from '@/components/PainPoints';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function LawFirmsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero industry="Law Firms" />
      <Dashboard industry="Law Firms" />
      <Features industry="Law Firms" />
      <Solutions />
      <Integrations />
      <PainPoints industry="Law Firms" />
      <Testimonials industry="Law Firms" />
      <Footer />
    </main>
  );
}
