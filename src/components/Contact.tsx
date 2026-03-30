import { Phone, FileText } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Besoin d'un plombier sérieux et réactif ?
          </h2>

          <p className="text-lg sm:text-xl text-gray-300">
            Contactez-nous dès maintenant pour un devis gratuit ou une intervention rapide
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="tel:+33634171045"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              <Phone className="w-6 h-6" />
              Appeler maintenant
            </a>

            <a
              href="tel:+33634171045"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-slate-900 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              <FileText className="w-6 h-6" />
              Demander un devis
            </a>
          </div>

          <div className="pt-8 border-t border-gray-700">
            <p className="text-2xl font-bold mb-2">
              <a href="tel:+33634171045" className="hover:text-orange-500 transition-colors">
                06 34 17 10 45
              </a>
            </p>
            <p className="text-gray-400">Disponible du lundi au samedi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
