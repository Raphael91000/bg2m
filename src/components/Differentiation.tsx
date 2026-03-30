import { X, Check } from 'lucide-react';

export default function Differentiation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 text-center mb-16">
          Ce que vous ne trouverez pas ici
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-red-50 rounded-xl p-8 border-2 border-red-100">
            <h3 className="text-xl font-bold text-red-900 mb-6 flex items-center gap-2">
              <X className="w-6 h-6" />
              À éviter
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-red-800">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Pas de réparations à refaire</span>
              </li>
              <li className="flex items-start gap-3 text-red-800">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Pas de travail bâclé</span>
              </li>
              <li className="flex items-start gap-3 text-red-800">
                <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Pas d'explications floues</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-8 border-2 border-green-200">
            <h3 className="text-xl font-bold text-green-900 mb-6 flex items-center gap-2">
              <Check className="w-6 h-6" />
              Notre engagement
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-green-800">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Travail propre et durable</span>
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Intervention sérieuse</span>
              </li>
              <li className="flex items-start gap-3 text-green-800">
                <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="font-semibold">Artisan fiable</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
