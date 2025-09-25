import Header from './components/Header';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import FeatureGrid from './components/FeatureGrid';
import StatsSection from './components/StatsSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className='bg-[#f9fafb]'>
      <Header />
      <Hero />
      <Testimonial />
      <FeatureGrid />
      <StatsSection />
      <FAQ />
      <Footer />
    </main>
  );
}
