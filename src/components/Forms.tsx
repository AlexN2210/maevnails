import { useState } from 'react';
import { Banknote, Clock3, FileText, Download, UserRound, ShieldCheck, PenLine } from 'lucide-react';

const documents = [
  {
    id: 'consent-mineur',
    title: 'Consentement pour mineur',
    description: 'Autorisation parentale obligatoire pour toute prestation sur une personne mineure.',
    icon: FileText,
  },
];

export default function Forms() {
  const [onlineFormOpen, setOnlineFormOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    legalName: '',
    legalAddress: '',
    legalPhone: '',
    minorName: '',
    birthDate: '',
    practitionerName: '',
    appointmentDate: '',
    location: '',
    madeAt: '',
    signature: '',
    representativeConfirmed: false,
    conditionsConfirmed: false,
    prestationConfirmed: false,
  });

  const updateField = (field: string, value: string | boolean) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const downloadBlankConsent = () => {
    const content = `FORMULAIRE - AUTORISATION PARENTALE
Prestation de prothésiste ongulaire

Ce formulaire est destiné aux mineurs âgés de 16 à 17 ans.
Il doit être complété et signé par un parent ou représentant légal.

INFORMATIONS DU REPRESENTANT LEGAL
Nom / Prénom :
Adresse :
Numéro de téléphone :

INFORMATIONS DU MINEUR
Nom / Prénom :
Date de naissance :

DECLARATION DU REPRESENTANT LEGAL
Je soussigné(e) ____________________, certifie être le représentant légal de ____________________ et autorise la prothésiste ongulaire à réaliser la prestation demandée.

☐ Je certifie être le représentant légal du mineur.
☐ J’atteste avoir pris connaissance des conditions de la prestation.
☐ J’autorise la réalisation de la prestation de prothésiste ongulaire.

INFORMATIONS COMPLEMENTAIRES
Nom de la prothésiste ongulaire :
Date de la prestation :
Lieu :

SIGNATURE
Fait à :
Le :
Signature du représentant légal :

Merci pour votre confiance.
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'autorisation-parentale.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const handleConsentSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormSubmitted(true);
  };

  const openOnlineForm = () => {
    setFormSubmitted(false);
    setOnlineFormOpen(true);
    requestAnimationFrame(() => {
      document.getElementById('autorisation-parentale')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const downloadCompletedConsent = () => {
    const content = `FORMULAIRE - AUTORISATION PARENTALE
Prestation de prothésiste ongulaire

Ce formulaire est destiné aux mineurs âgés de 16 à 17 ans.

INFORMATIONS DU REPRESENTANT LEGAL
Nom / Prénom : ${formData.legalName}
Adresse : ${formData.legalAddress}
Numéro de téléphone : ${formData.legalPhone}

INFORMATIONS DU MINEUR
Nom / Prénom : ${formData.minorName}
Date de naissance : ${formData.birthDate}

DECLARATION DU REPRESENTANT LEGAL
Je soussigné(e) ${formData.legalName}, certifie être le représentant légal de ${formData.minorName} et autorise la prothésiste ongulaire à réaliser la prestation demandée.

Cases confirmées :
- Représentant légal : ${formData.representativeConfirmed ? 'Oui' : 'Non'}
- Conditions connues : ${formData.conditionsConfirmed ? 'Oui' : 'Non'}
- Prestation autorisée : ${formData.prestationConfirmed ? 'Oui' : 'Non'}

INFORMATIONS COMPLEMENTAIRES
Nom de la prothésiste ongulaire : ${formData.practitionerName}
Date de la prestation : ${formData.appointmentDate}
Lieu : ${formData.location}

SIGNATURE
Fait à : ${formData.madeAt}
Signature du représentant légal : ${formData.signature}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'autorisation-parentale-remplie.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  const inputClass = 'w-full px-4 py-2.5 rounded-lg border border-powder-200 bg-white/70 font-light text-sm focus:outline-none focus:border-rosegold-300 focus:ring-1 focus:ring-rosegold-200 transition-all';

  return (
    <section id="formulaires" className="py-20 md:py-28 bg-white/50">
      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <div className="text-center mb-14">
          <p className="section-subtitle">Formulaires</p>
          <h2 className="section-title mt-2">Documents &amp; consentements</h2>
          <p className="text-stone-500 font-light mt-4 max-w-lg mx-auto">
            Téléchargez et remplissez les formulaires nécessaires avant votre rendez-vous.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {documents.map((doc) => (
            <div key={doc.id} className="card-soft p-6 flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-11 h-11 rounded-full bg-powder-100 flex items-center justify-center flex-shrink-0">
                  <doc.icon size={22} className="text-rosegold-500" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-stone-800 mb-1">{doc.title}</h3>
                  <p className="text-sm text-stone-500 font-light leading-relaxed">{doc.description}</p>
                </div>
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                <button type="button" onClick={onlineFormOpen ? () => setOnlineFormOpen(false) : openOnlineForm} className="btn-outline text-sm">
                  <PenLine size={16} /> Remplir en ligne
                </button>
                <button type="button" onClick={downloadBlankConsent} className="btn-outline text-sm">
                  <Download size={16} /> Télécharger
                </button>
              </div>
            </div>
          ))}
        </div>

        {onlineFormOpen && (
          <form id="autorisation-parentale" onSubmit={handleConsentSubmit} className="card-soft p-6 md:p-8 mt-8 space-y-6 scroll-mt-24">
            <div>
              <p className="section-subtitle">16 - 17 ans</p>
              <h3 className="font-serif text-2xl text-stone-800 mt-2">Autorisation parentale</h3>
              <p className="text-sm text-stone-500 font-light mt-2">Ce formulaire doit être complété et signé par un parent ou représentant légal.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <fieldset className="space-y-4">
                <legend className="font-serif text-lg text-stone-700 mb-3">Représentant légal</legend>
                <input aria-label="Nom et prénom du représentant légal" placeholder="Nom / Prénom *" value={formData.legalName} onChange={(event) => updateField('legalName', event.target.value)} required className={inputClass} />
                <input aria-label="Adresse du représentant légal" placeholder="Adresse *" value={formData.legalAddress} onChange={(event) => updateField('legalAddress', event.target.value)} required className={inputClass} />
                <input aria-label="Téléphone du représentant légal" type="tel" placeholder="Numéro de téléphone *" value={formData.legalPhone} onChange={(event) => updateField('legalPhone', event.target.value)} required className={inputClass} />
              </fieldset>
              <fieldset className="space-y-4">
                <legend className="font-serif text-lg text-stone-700 mb-3">Mineur concerné</legend>
                <input aria-label="Nom et prénom du mineur" placeholder="Nom / Prénom *" value={formData.minorName} onChange={(event) => updateField('minorName', event.target.value)} required className={inputClass} />
                <input aria-label="Date de naissance du mineur" type="date" value={formData.birthDate} onChange={(event) => updateField('birthDate', event.target.value)} required className={inputClass} />
              </fieldset>
            </div>

            <fieldset className="space-y-3">
              <legend className="font-serif text-lg text-stone-700 mb-3">Déclaration du représentant légal</legend>
              <label className="flex items-start gap-3 text-sm text-stone-600 font-light"><input type="checkbox" checked={formData.representativeConfirmed} onChange={(event) => updateField('representativeConfirmed', event.target.checked)} required className="mt-1 accent-rosegold-500" /> Je certifie être le représentant légal du mineur.</label>
              <label className="flex items-start gap-3 text-sm text-stone-600 font-light"><input type="checkbox" checked={formData.conditionsConfirmed} onChange={(event) => updateField('conditionsConfirmed', event.target.checked)} required className="mt-1 accent-rosegold-500" /> J’atteste avoir pris connaissance des conditions de la prestation.</label>
              <label className="flex items-start gap-3 text-sm text-stone-600 font-light"><input type="checkbox" checked={formData.prestationConfirmed} onChange={(event) => updateField('prestationConfirmed', event.target.checked)} required className="mt-1 accent-rosegold-500" /> J’autorise la réalisation de la prestation de prothésiste ongulaire.</label>
            </fieldset>

            <div className="grid sm:grid-cols-2 gap-4">
              <input placeholder="Nom de la prothésiste ongulaire *" value={formData.practitionerName} onChange={(event) => updateField('practitionerName', event.target.value)} required className={inputClass} />
              <input type="date" aria-label="Date de la prestation" value={formData.appointmentDate} onChange={(event) => updateField('appointmentDate', event.target.value)} required className={inputClass} />
              <input placeholder="Lieu (Biscarrosse ou Sabres) *" value={formData.location} onChange={(event) => updateField('location', event.target.value)} required className={inputClass} />
              <input placeholder="Fait à *" value={formData.madeAt} onChange={(event) => updateField('madeAt', event.target.value)} required className={inputClass} />
              <input placeholder="Signature du représentant légal *" value={formData.signature} onChange={(event) => updateField('signature', event.target.value)} required className={`${inputClass} sm:col-span-2`} />
            </div>

            {formSubmitted ? (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <p className="text-sm text-green-700 font-light">Formulaire complété. Vous pouvez télécharger votre version remplie.</p>
                <button type="button" onClick={downloadCompletedConsent} className="btn-primary text-sm"><Download size={16} /> Télécharger le formulaire</button>
              </div>
            ) : (
              <button type="submit" className="btn-primary"><Check size={18} /> Valider le formulaire</button>
            )}
          </form>
        )}

        <div className="border-t border-powder-200 pt-10">
          <h3 className="font-serif text-2xl text-stone-800 text-center mb-6">Informations importantes</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm text-stone-600 font-light">
            <p className="flex items-start gap-3"><Banknote size={19} className="text-rosegold-500 shrink-0" /> Paiement uniquement en espèces.</p>
            <p className="flex items-start gap-3"><Clock3 size={19} className="text-rosegold-500 shrink-0" /> Un retard de 15 minutes entraîne l’annulation du rendez-vous.</p>
            <p className="flex items-start gap-3"><UserRound size={19} className="text-rosegold-500 shrink-0" /> Une seule personne accompagnante est autorisée par cliente.</p>
            <p className="flex items-start gap-3"><ShieldCheck size={19} className="text-rosegold-500 shrink-0" /> Prestations réservées aux majeures. Les jeunes de 16 à 17 ans sont acceptées uniquement avec l’accord d’un représentant légal.</p>
          </div>
          <p className="text-center text-sm text-stone-500 font-light mt-5">Pour les mineures concernées, un formulaire d’autorisation parentale doit être rempli avant la prestation.</p>
        </div>

      </div>
    </section>
  );
}
