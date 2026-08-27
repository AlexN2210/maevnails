import { CalendarHeart } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-powder-100 via-powder-50 to-rosegold-50"
    >
      {/* Decorative circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full bg-powder-200/40 blur-3xl" />
      <div className="absolute bottom-10 -right-10 w-96 h-96 rounded-full bg-rosegold-100/40 blur-3xl" />

      <div className="relative z-10 text-center px-6 max-w-3xl animate-fadeInUp">
        <p className="text-rosegold-500 font-light text-sm tracking-[0.3em] uppercase mb-5">
          Prothésiste Ongulaire
        </p>
        <h1 className="font-serif text-5xl md:text-7xl text-stone-800 leading-tight mb-6">
          Maev<span className="text-rosegold-500">'</span>nails
        </h1>
        <p className="text-stone-600 font-light text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Sublimez vos mains avec des prestations sur-mesure, dans un univers doux,
          raffiné et féminin.
        </p>
        <a href="#reservation" className="btn-primary text-base">
          <CalendarHeart size={20} />
          Prendre rendez-vous
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 rounded-full border-2 border-rosegold-300 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-rosegold-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
