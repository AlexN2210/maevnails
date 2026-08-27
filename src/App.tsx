import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Pricing from '@/components/Pricing';
import Booking from '@/components/Booking';
import Forms from '@/components/Forms';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-powder-50">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Pricing />
        <Booking />
        <Forms />
      </main>
      <Footer />
    </div>
  );
}

export default App;
