import { galleryImages } from '@/data';

export default function Gallery() {
  return (
    <section id="galerie" className="py-20 md:py-28 bg-powder-50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Galerie</p>
          <h2 className="section-title mt-2">Réalisations</h2>
          <p className="text-stone-500 font-light mt-4 max-w-lg mx-auto">
            Un aperçu de mes créations récentes.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className="aspect-square rounded-xl overflow-hidden shadow-soft group cursor-pointer"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
