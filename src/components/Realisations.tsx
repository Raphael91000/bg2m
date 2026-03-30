import { useState } from 'react';
import { X } from 'lucide-react';

const realisations = [
  {
    title: 'Installation chauffe-eau',
    image: '/pb2.png',
    type: 'Installation',
  },
  {
    title: 'Rénovation salle de bain',
    image: '/pb3.png',
    type: 'Rénovation',
  },
  {
    title: 'Dépannage & réparation',
    image: '/pb4.png',
    type: 'Dépannage',
  },
];

export default function Realisations() {
  const [selected, setSelected] = useState<typeof realisations[0] | null>(null);

  return (
    <section id="realisations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Nos travaux</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900">
            Nos réalisations
          </h2>
          <p className="mt-4 text-lg text-gray-500 max-w-xl mx-auto">
            Des chantiers propres, des résultats qui durent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {realisations.map((r, index) => (
            <div
              key={index}
              onClick={() => setSelected(r)}
              className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={r.image}
                  alt={r.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {r.type}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-6">
                  <h3 className="text-white font-bold text-lg">{r.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div className="mt-4 flex items-center gap-3">
              <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">{selected.type}</span>
              <p className="text-white font-semibold text-lg">{selected.title}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
