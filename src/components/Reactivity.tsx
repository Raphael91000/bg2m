import { Zap, Clock, Shield } from 'lucide-react';

export default function Reactivity() {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Intervenir vite, sans bâcler
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            BG2M Plomberie intervient rapidement tout en garantissant un travail propre, réfléchi et durable.
          </p>

          <div className="grid md:grid-cols-3 gap-8 pt-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Réactivité</h3>
              <p className="text-gray-400">Réponse et intervention rapides pour résoudre vos urgences</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Qualité</h3>
              <p className="text-gray-400">Travail soigné et durable qui respecte les normes</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold">Efficacité</h3>
              <p className="text-gray-400">Solutions adaptées sans perte de temps ni complications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
