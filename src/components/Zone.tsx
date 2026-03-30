import { MapPin } from 'lucide-react';

const zones = [
  'Juvisy-sur-Orge',
  'Évry-Courcouronnes',
  'Corbeil-Essonnes',
  'Sainte-Geneviève-des-Bois',
  'Viry-Châtillon',
  'Athis-Mons',
  'Draveil',
  'Vigneux-sur-Seine',
  'Yerres',
  'Brunoy',
  'Montgeron',
  'Et toute l\'Île-de-France'
];

export default function Zone() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Zone d'intervention
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Basés à Juvisy-sur-Orge, nous intervenons dans toute l'Essonne et en Île-de-France.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {zones.map((zone, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
              >
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="font-medium">{zone}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-orange-50 rounded-xl border border-orange-200">
            <p className="text-center text-gray-700">
              <span className="font-semibold text-orange-600">Une zone non listée ?</span> Contactez-nous pour vérifier notre disponibilité dans votre secteur.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
