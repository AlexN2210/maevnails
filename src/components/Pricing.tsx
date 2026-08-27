import { pricingCategories } from '@/data';

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

        <div className="space-y-8">
          {pricingCategories.map((category) => (
            <div key={category.name} className="card-soft overflow-hidden">
              <h3 className="bg-powder-100 px-6 py-4 font-serif text-xl text-stone-700">{category.name}</h3>
              <table className="w-full">
                <tbody>
                  {category.items.map((item, i) => (
                    <tr key={item.name} className={`border-t border-powder-100 transition-colors hover:bg-powder-50 ${i % 2 === 0 ? 'bg-white/40' : ''}`}>
                      <td className="px-6 py-4 font-serif text-stone-800">{item.name}</td>
                      <td className="px-6 py-4 text-right text-rosegold-600 font-medium">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
