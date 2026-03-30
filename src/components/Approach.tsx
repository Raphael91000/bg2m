import { CheckCircle2 } from 'lucide-react';

const problems = [
  {
    title: 'Votre équipement fuit ou est en panne',
    description: 'Fuite sous évier, robinet qui coule, chasse d\'eau cassée : on répare proprement sans laisser le problème revenir.',
  },
  {
    title: 'Vous voulez refaire votre salle de bain',
    description: 'De la dépose à la finition, on gère tout le chantier avec soin et sans mauvaises surprises.',
  },
  {
    title: 'Votre chauffe-eau doit être remplacé',
    description: 'On choisit avec vous l\'équipement le mieux adapté à votre logement et on installe dans les règles.',
  },
  {
    title: 'Vous avez besoin d\'un entretien',
    description: 'Détartrage, vérification des canalisations, contrôle des joints : on évite les pannes avant qu\'elles arrivent.',
  },
];

const engagements = [
  {
    num: '1',
    title: 'Le bon diagnostic',
    description: 'On analyse votre situation avant de vous proposer quoi que ce soit. Pas de remplacement inutile.',
  },
  {
    num: '2',
    title: 'Un travail soigné',
    description: 'On protège vos sols, on nettoie après notre passage. Vous retrouvez votre logement comme on l\'a trouvé — en mieux.',
  },
  {
    num: '3',
    title: 'Un suivi dans la durée',
    description: 'On reste disponibles après l\'intervention. Si un problème survient, on revient.',
  },
];

export default function Approach() {
  return (
    <section id="approche" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Gauche */}
          <div className="space-y-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Notre approche</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
                Une approche sérieuse<br />avant tout travaux
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Même pour un simple remplacement, on prend le temps de comprendre votre situation pour vous proposer la solution la plus adaptée — pas la plus chère.
              </p>
            </div>

            <ul className="space-y-6">
              {problems.map((p, i) => (
                <li key={i} className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-slate-900">{p.title}</p>
                    <p className="text-gray-600 text-sm mt-1">{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Droite — carte engagement */}
          <div className="bg-slate-900 rounded-3xl p-10 text-white shadow-2xl">
            <h3 className="text-2xl font-bold mb-8 text-white">Notre engagement qualité :</h3>
            <div className="space-y-8">
              {engagements.map((e, i) => (
                <div key={i} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold text-white text-lg">
                    {e.num}
                  </div>
                  <div>
                    <p className="font-bold text-white text-lg">{e.title}</p>
                    <p className="text-gray-400 mt-1 text-sm leading-relaxed">{e.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <a
                href="tel:+33634171045"
                className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-xl transition-all text-lg"
              >
                Appeler maintenant
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
