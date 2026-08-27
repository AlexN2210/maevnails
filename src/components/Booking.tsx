import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, Check, Loader2, CalendarCheck } from 'lucide-react';
import { services, timeSlots } from '@/data';
import { supabase } from '@/lib/supabase';

const WEEKDAYS = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
const MONTHS = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre',
];

function formatDate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

type BookedSlot = { appointment_date: string; time_slot: string };

export default function Booking() {
  const today = useMemo(() => new Date(), []);
  const [viewDate, setViewDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [bookedSlots, setBookedSlots] = useState<BookedSlot[]>([]);
  const [formOpen, setFormOpen] = useState(false);

  // form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [comment, setComment] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [confirmed, setConfirmed] = useState(false);

  // fetch booked slots
  useEffect(() => {
    if (!supabase) return;

    const fetchBooked = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select('appointment_date, time_slot')
        .in('status', ['pending', 'confirmed']);
      if (!error && data) setBookedSlots(data as BookedSlot[]);
    };
    fetchBooked();
  }, [confirmed]);

  const calendarDays = useMemo(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = (firstDay.getDay() + 6) % 7; // Monday = 0
    const days: (Date | null)[] = [];
    for (let i = 0; i < startOffset; i++) days.push(null);
    for (let d = 1; d <= lastDay.getDate(); d++) days.push(new Date(year, month, d));
    return days;
  }, [viewDate]);

  const isDateAvailable = (date: Date): boolean => {
    const now = new Date();
    const todayMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    if (date < todayMidnight) return false;
    const dow = date.getDay();
    if (dow === 0) return false; // Sunday closed
    return true;
  };

  const isSlotBooked = (dateStr: string, slot: string): boolean => {
    return bookedSlots.some((b) => b.appointment_date === dateStr && b.time_slot === slot);
  };

  const handleDateClick = (date: Date) => {
    if (!isDateAvailable(date)) return;
    setSelectedDate(date);
    setSelectedSlot(null);
    setFormOpen(false);
  };

  const handleSlotClick = (slot: string) => {
    setSelectedSlot(slot);
    setFormOpen(true);
    setConfirmed(false);
  };

  const prevMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, 1));
  const nextMonth = () => setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, 1));

  const validate = (): boolean => {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Le nom est requis';
    if (!email.trim()) e.email = 'L\'email est requis';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Email invalide';
    if (!phone.trim()) e.phone = 'Le téléphone est requis';
    else if (!/^[\d\s+().-]{8,}$/.test(phone)) e.phone = 'Téléphone invalide';
    if (!service) e.service = 'Veuillez choisir une prestation';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate() || !selectedDate || !selectedSlot) return;
    if (!supabase) {
      setErrors({ form: 'La réservation est momentanément indisponible.' });
      return;
    }

    setSubmitting(true);
    const { error } = await supabase.from('appointments').insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone.trim(),
      service,
      appointment_date: formatDate(selectedDate),
      time_slot: selectedSlot,
      comment: comment.trim() || null,
      status: 'pending',
    });
    setSubmitting(false);
    if (error) {
      setErrors({ form: 'Une erreur est survenue. Veuillez réessayer.' });
      return;
    }
    setConfirmed(true);
    setName(''); setEmail(''); setPhone(''); setService(''); setComment('');
  };

  const selectedDateStr = selectedDate ? formatDate(selectedDate) : '';

  return (
    <section id="reservation" className="py-20 md:py-28 bg-powder-50">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Réservation</p>
          <h2 className="section-title mt-2">Prendre rendez-vous</h2>
          <p className="text-stone-500 font-light mt-4 max-w-lg mx-auto">
            Choisissez une date et un créneau disponible, puis remplissez le formulaire.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="card-soft p-6">
            <div className="flex items-center justify-between mb-6">
              <button onClick={prevMonth} className="p-2 rounded-full hover:bg-powder-100 transition-colors" aria-label="Mois précédent">
                <ChevronLeft size={20} className="text-stone-600" />
              </button>
              <h3 className="font-serif text-lg text-stone-800">
                {MONTHS[viewDate.getMonth()]} {viewDate.getFullYear()}
              </h3>
              <button onClick={nextMonth} className="p-2 rounded-full hover:bg-powder-100 transition-colors" aria-label="Mois suivant">
                <ChevronRight size={20} className="text-stone-600" />
              </button>
            </div>

            <div className="grid grid-cols-7 gap-1 mb-2">
              {WEEKDAYS.map((d) => (
                <div key={d} className="text-center text-xs text-stone-400 font-light py-1">
                  {d}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1">
              {calendarDays.map((date, i) => {
                if (!date) return <div key={i} />;
                const available = isDateAvailable(date);
                const isSelected =
                  selectedDate &&
                  date.getTime() === selectedDate.getTime();
                const isToday =
                  date.getDate() === today.getDate() &&
                  date.getMonth() === today.getMonth() &&
                  date.getFullYear() === today.getFullYear();
                return (
                  <button
                    key={i}
                    onClick={() => handleDateClick(date)}
                    disabled={!available}
                    className={`aspect-square rounded-lg text-sm font-light transition-all duration-200 relative
                      ${isSelected
                        ? 'bg-rosegold-400 text-white shadow-soft'
                        : available
                          ? 'text-stone-700 hover:bg-powder-100'
                          : 'text-stone-300 cursor-not-allowed'}
                      ${isToday && !isSelected ? 'ring-1 ring-rosegold-300' : ''}
                    `}
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-stone-400 font-light mt-4 flex items-center gap-1.5">
              <span className="w-3 h-3 rounded-full bg-rosegold-400 inline-block" /> Date sélectionnée
              <span className="w-3 h-3 rounded-full ring-1 ring-rosegold-300 inline-block ml-3" /> Aujourd'hui
            </p>
          </div>

          {/* Time slots */}
          <div className="card-soft p-6">
            <h3 className="font-serif text-lg text-stone-800 mb-2">Créneaux horaires</h3>
            {selectedDate ? (
              <>
                <p className="text-sm text-stone-500 font-light mb-5">
                  {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                </p>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {timeSlots.map((slot) => {
                    const booked = isSlotBooked(selectedDateStr, slot);
                    const isSelected = selectedSlot === slot;
                    return (
                      <button
                        key={slot}
                        onClick={() => !booked && handleSlotClick(slot)}
                        disabled={booked}
                        className={`py-2.5 rounded-lg text-sm font-light transition-all duration-200 flex items-center justify-center gap-1
                          ${isSelected
                            ? 'bg-rosegold-400 text-white shadow-soft'
                            : booked
                              ? 'bg-stone-100 text-stone-300 cursor-not-allowed line-through'
                              : 'bg-powder-50 text-stone-700 hover:bg-powder-100 border border-powder-200'}
                        `}
                      >
                        {booked && <Clock size={12} />}
                        {slot}
                      </button>
                    );
                  })}
                </div>
                <p className="text-xs text-stone-400 font-light mt-4">
                  Les créneaux barrés sont déjà réservés.
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 text-center">
                <CalendarCheck size={32} className="text-powder-300 mb-3" />
                <p className="text-sm text-stone-400 font-light">
                  Sélectionnez d'abord une date dans le calendrier.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Form */}
        {formOpen && selectedDate && selectedSlot && (
          <div className="mt-8 card-soft p-6 md:p-8 animate-fadeInUp">
            {confirmed ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
                  <Check size={32} className="text-green-600" />
                </div>
                <h3 className="font-serif text-2xl text-stone-800 mb-3">Rendez-vous confirmé !</h3>
                <p className="text-stone-500 font-light">
                  Votre demande pour le{' '}
                  <span className="text-rosegold-600">
                    {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })}
                  </span>{' '}
                  à <span className="text-rosegold-600">{selectedSlot}</span> a bien été enregistrée.
                  Vous recevrez une confirmation par email.
                </p>
                <button
                  onClick={() => { setFormOpen(false); setSelectedDate(null); setSelectedSlot(null); setConfirmed(false); }}
                  className="btn-outline mt-6"
                >
                  Nouvelle réservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-serif text-xl text-stone-800 mb-1">
                  Formulaire de réservation
                </h3>
                <p className="text-sm text-stone-500 font-light mb-4">
                  {selectedDate.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long' })} à {selectedSlot}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-stone-500 font-light mb-1.5">Nom complet *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/60 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                      placeholder="Votre nom"
                    />
                    {errors.name && <p className="text-xs text-red-400 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 font-light mb-1.5">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/60 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                      placeholder="vous@email.com"
                    />
                    {errors.email && <p className="text-xs text-red-400 mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 font-light mb-1.5">Téléphone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/60 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                      placeholder="06 12 34 56 78"
                    />
                    {errors.phone && <p className="text-xs text-red-400 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label className="block text-xs text-stone-500 font-light mb-1.5">Prestation *</label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/60 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all"
                    >
                      <option value="">Choisir...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>{s.name} — {s.price}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-xs text-red-400 mt-1">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-stone-500 font-light mb-1.5">Commentaire (optionnel)</label>
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    rows={3}
                    className="w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/60 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all resize-none"
                    placeholder="Précisions, idées de nail art, allergies..."
                  />
                </div>

                {errors.form && <p className="text-sm text-red-400">{errors.form}</p>}

                <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
                  {submitting ? (
                    <><Loader2 size={18} className="animate-spin" /> Envoi en cours...</>
                  ) : (
                    <><Check size={18} /> Confirmer le rendez-vous</>
                  )}
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
