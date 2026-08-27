import { Banknote, Clock3, FileText, Download, UserRound, ShieldCheck } from 'lucide-react';

const documents = [
  {
    id: 'consent-mineur',
    title: 'Consentement pour mineur',
    description: 'Autorisation parentale obligatoire pour toute prestation sur une personne mineure.',
    icon: FileText,
  },
  {
    id: 'consent-prestations',
    title: 'Consentement prestations spécifiques',
    description: 'Formulaire de consentement éclairé pour les prestations de gel et nail art.',
    icon: FileText,
  },
];

export default function Forms() {
  const handleDownload = (id: string) => {
    // Placeholder: generates a simple text file as a stand-in PDF
    const doc = documents.find((d) => d.id === id);
    if (!doc) return;
    const content = `${doc.title}\n\n${doc.description}\n\nFormulaire de consentement — Maev'nails\n\nNom: ____________________\nDate: ____________________\nSignature: ____________________`;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${id}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

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
              <button
                onClick={() => handleDownload(doc.id)}
                className="btn-outline mt-auto self-start text-sm"
              >
                <Download size={16} /> Télécharger
              </button>
            </div>
          ))}
        </div>

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
