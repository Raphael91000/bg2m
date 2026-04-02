import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Intervenez-vous en urgence ?',
    answer: 'Oui. Pour les fuites ou pannes urgentes, on essaie d\'intervenir dans la journée ou le lendemain. Appelez-nous directement au 06 11 41 21 88 pour les urgences.',
  },
  {
    question: 'Dans quelles villes intervenez-vous ?',
    answer: 'On intervient principalement à Marseille et dans les communes alentours : Aubagne, Cassis, La Ciotat, Allauch, Plan-de-Cuques... Contactez-nous pour vérifier votre commune.',
  },
  {
    question: 'Est-ce que le déplacement est payant ?',
    answer: 'Le déplacement pour établir un devis est gratuit. Les frais de déplacement pour intervention sont inclus dans le devis final que vous validez avant le début des travaux.',
  },
  {
    question: 'Combien coûte une rénovation de salle de bain ?',
    answer: 'Le prix dépend de la surface, des équipements choisis et de l\'état existant. On établit un devis détaillé et sans engagement après visite. Il n\'y a pas de surprise après validation.',
  },
  {
    question: 'Êtes-vous qualifié RGE pour les pompes à chaleur ?',
    answer: 'Contactez-nous pour en discuter. Nous pouvons vous orienter vers la bonne solution selon votre logement et votre budget, y compris les aides disponibles (MaPrimeRénov\', CEE).',
  },
  {
    question: 'Proposez-vous un contrat d\'entretien ?',
    answer: 'Oui. On assure le suivi annuel de vos installations : désembouage, vérification des joints, réglage. C\'est le meilleur moyen d\'éviter les pannes coûteuses.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Questions fréquentes
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
              >
                <span className="font-semibold text-slate-900 text-base">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-200 ${open === index ? 'rotate-180' : ''}`}
                />
              </button>
              {open === index && (
                <div className="px-7 pb-6 text-gray-600 leading-relaxed text-sm border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
