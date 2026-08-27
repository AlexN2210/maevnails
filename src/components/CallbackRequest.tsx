import { useState } from 'react';
import { Check, Clock3, PhoneCall } from 'lucide-react';

export default function CallbackRequest() {
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-powder-100/60">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="card-soft p-7 md:p-10">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center">
            <div>
              <div className="w-12 h-12 rounded-full bg-rosegold-100 flex items-center justify-center mb-5">
                <PhoneCall size={24} className="text-rosegold-600" />
              </div>
              <p className="section-subtitle">Besoin d’aide ?</p>
              <h2 className="section-title mt-2">Une question, un conseil ?</h2>
              <p className="text-stone-500 font-light leading-relaxed mt-4">
                Laissez-nous vos disponibilités et nous vous rappellerons gratuitement pour vous renseigner.
              </p>
            </div>

            {submitted ? (
              <div className="text-center py-6">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <Check size={28} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-2">Demande envoyée</h3>
                <p className="text-stone-500 font-light">
                  Nous vous rappellerons gratuitement au moment souhaité.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="callback-phone" className="block text-xs text-stone-500 font-light mb-1.5">
                    Numéro de téléphone *
                  </label>
                  <input
                    id="callback-phone"
                    type="tel"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="06 12 34 56 78"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-powder-200 bg-white/70 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="callback-date" className="block text-xs text-stone-500 font-light mb-1.5">
                      Date souhaitée *
                    </label>
                    <input
                      id="callback-date"
                      type="date"
                      min={today}
                      value={date}
                      onChange={(event) => setDate(event.target.value)}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-powder-200 bg-white/70 font-light text-sm text-stone-600 focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="callback-time" className="block text-xs text-stone-500 font-light mb-1.5">
                      Heure souhaitée *
                    </label>
                    <div className="relative">
                      <Clock3 size={16} className="absolute left-3 top-3.5 text-rosegold-500 pointer-events-none" />
                      <input
                        id="callback-time"
                        type="time"
                        value={time}
                        onChange={(event) => setTime(event.target.value)}
                        required
                        className="w-full pl-9 pr-4 py-3 rounded-lg border border-powder-200 bg-white/70 font-light text-sm text-stone-600 focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                      />
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn-primary w-full sm:w-auto">
                  <PhoneCall size={18} /> Être rappelée gratuitement
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
