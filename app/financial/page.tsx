import Hero from '@/components/Hero';
import Dashboard from '@/components/Dashboard';
import Features from '@/components/Features';
import Solutions from '@/components/Solutions';
import Integrations from '@/components/Integrations';
import PainPoints from '@/components/PainPoints';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function FinancialPage() {
  return (
    <main className="min-h-screen bg-white">
      <Hero industry="Financial" />
      <Dashboard industry="Financial" />
      <Features industry="Financial" />
      <Solutions />
      <Integrations />
      <PainPoints industry="Financial" />
      <Testimonials industry="Financial" />
      <Footer />
    </main>
  );
}
