import TronHeader from '@/components/TronHeader';
import Navigation from '@/components/Navigation';
import AboutUs from '@/components/AboutUs';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About Us | AIVI - AI-Powered Customer Engagement',
  description: 'Learn about AIVI\'s mission to transform business communication through intelligent AI automation. Built by experts from Amazon, Five9, and Cisco.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black">
      <TronHeader />
      <Navigation />
      <AboutUs />
      <Footer />
    </main>
  );
}
