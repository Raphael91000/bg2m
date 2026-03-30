import { Phone, FileText, CheckCircle2, Wrench } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5691607/pexels-photo-5691607.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Rapide quand il faut.<br />
                <span className="text-orange-500">Irréprochable</span> sur le résultat.
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                BG2M Plomberie intervient rapidement à Juvisy-sur-Orge, en Essonne et en Île-de-France pour des travaux propres, durables et réalisés avec sérieux.<br />
                <span className="font-semibold text-white">Une vraie réactivité, sans compromis sur la qualité.</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+33634171045"
                className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Être rappelé rapidement
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <FileText className="w-5 h-5" />
                Demander un devis
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Réponse rapide</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Travail soigné</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span>Résultat durable</span>
              </div>
            </div>
          </div>

          <div className="block">
            <div className="relative">
              <div className="absolute -inset-4 bg-orange-500/20 rounded-3xl blur-3xl"></div>
              <img
                src="/Capture_d'écran_2026-03-30_à_12.05.01_PM.png"
                alt="Plombier professionnel BG2M"
                className="relative rounded-3xl shadow-2xl w-full h-[400px] sm:h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-xl">
                <Wrench className="w-8 h-8 mb-2" />
                <p className="font-bold text-2xl">15+</p>
                <p className="text-sm">Ans d'expérience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
