import { Heart, Instagram, MapPin, Music2 } from 'lucide-react';

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
                className="h-40 md:h-48 w-auto object-contain"
              />
            </div>
            <p className="text-sm font-light leading-relaxed text-stone-400">
              Prothésiste ongulaire passionnée, dédiée à la beauté et au soin de vos mains.
            </p>
          </div>

          {/* Appointment locations */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Lieux des rendez-vous</h4>
            <p className="text-sm font-light leading-relaxed text-stone-400 mb-4">
              Les rendez-vous ont lieu à Biscarrosse ou à Sabres, selon vos disponibilités.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Biscarrosse%2C%20France"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="h-20 rounded-lg overflow-hidden border border-stone-700 bg-stone-700 relative">
                  <iframe
                    title="Carte de Biscarrosse"
                    src="https://www.google.com/maps?q=Biscarrosse%2C%20France&output=embed"
                    loading="lazy"
                    className="w-full h-full border-0 pointer-events-none opacity-70"
                  />
                  <MapPin size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rosegold-400 drop-shadow" />
                </div>
                <span className="block text-xs text-stone-300 mt-2 group-hover:text-rosegold-400 transition-colors">Biscarrosse</span>
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Sabres%2C%20France"
                target="_blank"
                rel="noreferrer"
                className="group"
              >
                <div className="h-20 rounded-lg overflow-hidden border border-stone-700 bg-stone-700 relative">
                  <iframe
                    title="Carte de Sabres"
                    src="https://www.google.com/maps?q=Sabres%2C%20France&output=embed"
                    loading="lazy"
                    className="w-full h-full border-0 pointer-events-none opacity-70"
                  />
                  <MapPin size={20} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-rosegold-400 drop-shadow" />
                </div>
                <span className="block text-xs text-stone-300 mt-2 group-hover:text-rosegold-400 transition-colors">Sabres</span>
              </a>
            </div>
          </div>

          {/* Social links */}
          <div>
            <h4 className="font-serif text-white text-lg mb-4">Retrouvez-moi</h4>
            <ul className="space-y-3 text-sm font-light">
              <li className="flex items-center gap-2.5">
                <Instagram size={17} className="text-rosegold-400" />
                <a
                  href="https://www.instagram.com/maev_nails40/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-rosegold-400 transition-colors"
                >
                  @maev_nails40
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Music2 size={17} className="text-rosegold-400" />
                <a
                  href="https://www.tiktok.com/@maevnails40"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-rosegold-400 transition-colors"
                >
                  @maevnails40
                </a>
              </li>
            </ul>
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
