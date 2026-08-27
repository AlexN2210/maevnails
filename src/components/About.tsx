import { Sparkles, Hand, Palette, Shield } from 'lucide-react';

const specialties = [
  { icon: Sparkles, label: 'Gel' },
  { icon: Hand, label: 'Semi-permanent' },
  { icon: Palette, label: 'Nail Art' },
  { icon: Shield, label: 'Renfort' },
];

export default function About() {
  return (
    <section id="presentation" className="py-20 md:py-28 bg-powder-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-premium border-4 border-white">
              <img
                src="https://images.pexels.com/photos/3997389/pexels-photo-3997389.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Maev, prothésiste ongulaire"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="absolute -bottom-5 -right-2 md:-right-5 bg-white rounded-full shadow-premium px-6 py-3 flex items-center gap-2">
              <Sparkles size={18} className="text-rosegold-500" />
              <span className="font-serif text-stone-800 text-sm">Art &amp; Précision</span>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="section-subtitle">À propos</p>
            <h2 className="section-title mt-2 mb-6">Votre prothésiste ongulaire</h2>
            <p className="text-stone-600 font-light leading-relaxed mb-5">
              Passionnée par l'art des ongles, Maev vous accueille dans un espace intime
              et raffiné dédié à la beauté de vos mains. Chaque prestation est réalisée
              avec minutie, dans le respect de l'hygiène et de vos envies.
            </p>
            <p className="text-stone-600 font-light leading-relaxed mb-8">
              Du soin naturel à la pose la plus créative, vous repartez avec des ongles
              qui vous ressemblent — élégants, durables et parfaitement finis.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {specialties.map((s) => (
                <div
                  key={s.label}
                  className="card-soft flex items-center gap-3 px-4 py-3 hover:shadow-premium hover:-translate-y-0.5"
                >
                  <s.icon size={20} className="text-rosegold-500" />
                  <span className="text-sm font-light text-stone-700">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
