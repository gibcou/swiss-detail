import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import CeramicCoatings from '@/components/sections/CeramicCoatings';
import FAQ from '@/components/sections/FAQ';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <CeramicCoatings />
      <FAQ limit={6} />
      <Contact />
      <Footer />
    </>
  );
}
