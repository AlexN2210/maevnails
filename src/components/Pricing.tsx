import { services } from '@/data';

export default function Pricing() {
  return (
    <section id="tarifs" className="py-20 md:py-28 bg-white/50">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Tarifs</p>
          <h2 className="section-title mt-2">Table des prix</h2>
          <p className="text-stone-500 font-light mt-4 max-w-lg mx-auto">
            Des tarifs transparents, sans surprise.
          </p>
        </div>

        <div className="card-soft overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-powder-100">
                <th className="text-left px-6 py-4 font-serif text-stone-700 text-base">Prestation</th>
                <th className="text-center px-4 py-4 font-serif text-stone-700 text-base hidden sm:table-cell">Durée</th>
                <th className="text-right px-6 py-4 font-serif text-stone-700 text-base">Prix</th>
              </tr>
            </thead>
            <tbody>
              {services.map((s, i) => (
                <tr
                  key={s.id}
                  className={`border-t border-powder-100 transition-colors hover:bg-powder-50 ${
                    i % 2 === 0 ? 'bg-white/40' : ''
                  }`}
                >
                  <td className="px-6 py-4">
                    <span className="font-serif text-stone-800">{s.name}</span>
                    <p className="text-xs text-stone-400 font-light mt-0.5 sm:hidden">{s.duration}</p>
                  </td>
                  <td className="px-4 py-4 text-center text-stone-500 font-light text-sm hidden sm:table-cell">
                    {s.duration}
                  </td>
                  <td className="px-6 py-4 text-right text-rosegold-600 font-medium">{s.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
