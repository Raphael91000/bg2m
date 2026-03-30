import { Phone, FileText, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden min-h-[80vh] flex items-center">

      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Partie gauche - Texte */}
          <div className="space-y-7">
            <div className="inline-flex items-center gap-2 bg-blue-700/10 text-blue-400 text-xs font-medium px-4 py-1.5 rounded-full border border-blue-600/20">
              <Clock className="w-3.5 h-3.5" />
              Intervention rapide - Essonne & Île-de-France
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              Ne confiez pas votre plomberie<br />
              <span className="text-blue-600">au premier venu.</span>
            </h1>

            <p className="text-base text-gray-400 max-w-md leading-relaxed">
              Fuite, canalisation bouchée, chauffe-eau en panne ou installation complète :{' '}
              <span className="text-gray-200 font-medium">BG2M intervient avec sérieux et travail durable.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+33634171045"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base px-7 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Appeler maintenant
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/8 font-semibold text-base px-7 py-4 rounded-xl transition-all"
              >
                <FileText className="w-5 h-5" />
                Demander un devis gratuit
              </a>
            </div>
          </div>

          {/* Partie droite - Photo du plombier */}
          <div className="relative mt-0 lg:mt-4">
            <div className="absolute -inset-8 bg-blue-600/10 rounded-[3rem] blur-3xl"></div>

            <img
              src="/hero.png"
              alt="Plombier professionnel BG2M Plomberie"
              className="relative rounded-3xl shadow-2xl w-full object-cover lg:h-[460px]"
            />

            {/* Badge expérience */}
            <div className="absolute -bottom-5 -right-5 bg-slate-900 border border-blue-600/30 px-6 py-5 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔧</span>
                <div>
                  <p className="text-3xl font-bold text-white">15+</p>
                  <p className="text-blue-400 text-xs font-medium">ans d'expérience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
