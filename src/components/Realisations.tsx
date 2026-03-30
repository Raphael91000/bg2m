import { ExternalLink } from 'lucide-react';

const realisations = [
  {
    title: 'Rénovation complète salle de bain',
    image: "/Capture_d'écran_2026-03-30_à_12.05.01_PM.png",
    type: 'Rénovation'
  },
  {
    title: 'Installation chauffe-eau',
    image: "/Capture_d'écran_2026-03-30_à_12.05.09_PM.png",
    type: 'Installation'
  },
  {
    title: 'Dépannage fuite urgente',
    image: "/Capture_d'écran_2026-03-30_à_12.05.15_PM.png",
    type: 'Dépannage'
  },
  {
    title: 'Pose sanitaires neufs',
    image: "/Capture_d'écran_2026-03-30_à_12.05.24_PM.png",
    type: 'Installation'
  }
];

export default function Realisations() {
  return (
    <section id="realisations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Des chantiers propres. Des résultats qui durent.
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {realisations.map((realisation, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={realisation.image}
                  alt={realisation.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {realisation.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <ExternalLink className="w-6 h-6 text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900">
                  {realisation.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
