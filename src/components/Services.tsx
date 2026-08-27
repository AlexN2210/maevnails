import { Sparkles, Hand, Palette, Brush, Shield, Wrench, Tag, type LucideIcon } from 'lucide-react';
import { services } from '@/data';

const iconMap: Record<string, LucideIcon> = {
  Sparkles,
  Hand,
  Palette,
  Brush,
  Shield,
  Wrench,
};

export default function Services() {
  return (
    <section id="prestations" className="py-20 md:py-28 bg-white/50">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Prestations</p>
          <h2 className="section-title mt-2">Nos services</h2>
          <p className="text-stone-500 font-light mt-4 max-w-lg mx-auto">
            Une gamme complète de soins pour sublimer vos mains au quotidien.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? Sparkles;
            return (
              <div
                key={service.id}
                className="card-soft p-6 hover:shadow-premium hover:-translate-y-1 group cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-powder-100 flex items-center justify-center mb-5 group-hover:bg-rosegold-100 transition-colors duration-300">
                  <Icon size={24} className="text-rosegold-500" />
                </div>
                <h3 className="font-serif text-xl text-stone-800 mb-2">{service.name}</h3>
                <p className="text-sm text-stone-500 font-light leading-relaxed mb-5">
                  {service.description}
                </p>
                <div className="flex items-center justify-end pt-4 border-t border-powder-200">
                  <span className="flex items-center gap-1.5 text-rosegold-600 font-medium">
                    <Tag size={14} /> {service.price}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
