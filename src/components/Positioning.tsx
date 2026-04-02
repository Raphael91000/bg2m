import { Shield } from 'lucide-react';

export default function Positioning() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-900 rounded-full mb-4">
            <Shield className="w-8 h-8 text-orange-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Pourquoi nos clients nous rappellent
          </h2>

          <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
            Un chantier mal fait coûte toujours plus cher à refaire.<br />
            Chez Maleva Plomberie, chaque intervention est réalisée avec exigence :
            <span className="font-semibold text-slate-900"> diagnostic sérieux, explications claires et travail propre du début à la fin.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
