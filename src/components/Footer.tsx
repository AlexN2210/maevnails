import { Instagram, Facebook, Phone, MapPin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-stone-800 text-stone-300">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/logo%20vide.png"
                alt="Maev'nails"
                className="h-16 md:h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-stone-400">
              Prothésiste ongulaire passionnée, dédiée à la beauté et au soin de vos mains.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-rosegold-400" />
                <a href="tel:+33612345678" className="hover:text-rosegold-400 transition-colors">06 12 34 56 78</a>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin size={16} className="text-rosegold-400" />
                <span>12 Rue des Roses, 75001 Paris</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Suivez-moi</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center hover:bg-rosegold-500 transition-colors duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-stone-700 flex items-center justify-center hover:bg-rosegold-500 transition-colors duration-300">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Legal links */}
        <div className="border-t border-stone-700 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs font-light text-stone-400">
            <a href="#" className="hover:text-rosegold-400 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-rosegold-400 transition-colors">Politique de confidentialité</a>
            <a href="#" className="hover:text-rosegold-400 transition-colors">CGV</a>
          </div>
          <p className="text-xs font-light text-stone-500 flex items-center gap-1.5">
            © {new Date().getFullYear()} Maev'nails — Conçu avec <Heart size={12} className="text-rosegold-400 fill-rosegold-400" />
          </p>
        </div>
      </div>
    </footer>
  );
}
