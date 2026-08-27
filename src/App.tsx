import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Booking from '@/components/Booking';
import Forms from '@/components/Forms';
import CallbackRequest from '@/components/CallbackRequest';
import Footer from '@/components/Footer';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section');
    const root = document.documentElement;
    root.classList.add('scroll-reveal-ready');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('is-visible'));
      return () => root.classList.remove('scroll-reveal-ready');
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      root.classList.remove('scroll-reveal-ready');
    };
  }, []);

  return (
    <div className="min-h-screen bg-powder-50">
      <Header />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Pricing />
        <Booking />
        <Forms />
        <CallbackRequest />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
