import { Phone } from 'lucide-react';

const steps = [
  {
    num: '01',
    title: 'Premier contact',
    description: 'Vous nous appelez ou remplissez le formulaire. On écoute votre problème, on vous pose les bonnes questions et on vous dit clairement ce qu\'on peut faire.',
    detail: 'Réponse en moins de 2h en semaine',
  },
  {
    num: '02',
    title: 'On vient vous voir',
    description: 'On se déplace chez vous pour voir la situation de vos propres yeux. Pas de diagnostic par téléphone, pas de devis au hasard. On évalue sur place.',
    detail: 'Déplacement gratuit sur devis',
  },
  {
    num: '03',
    title: 'La bonne solution',
    description: 'On vous explique ce qu\'on va faire, pourquoi, et combien ça coûte. Pas de jargon, pas de surprises. Vous validez, on intervient.',
    detail: 'Devis clair et sans engagement',
  },
];

export default function Process() {
  return (
    <section id="comment-ca-marche" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Simple et transparent</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Comment ça se passe<br />
            <span className="text-blue-600">concrètement ?</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            On ne vous complique pas la vie. Voici exactement comment on travaille.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative z-10 bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col gap-6"
            >
              <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-black text-lg">{step.num}</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{step.description}</p>
              </div>

              <div className="mt-auto pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-blue-600">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="tel:+33634171045"
            className="inline-flex items-center gap-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-10 py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
          >
            <Phone className="w-6 h-6" />
            Commencer maintenant
          </a>
        </div>
      </div>
    </section>
  );
}
