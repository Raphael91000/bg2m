import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Maleva Plomberie</h3>
            <p className="text-gray-400 leading-relaxed">
              Votre expert en plomberie à Marseille et alentours.
              Intervention rapide, travail soigné, résultat durable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+33611412188"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 11 41 21 88
              </a>
              <a
                href="mailto:contact@maleva-plomberie.fr"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@maleva-plomberie.fr
              </a>
              <a
                href="https://www.google.com/maps/place/Maleva+Plomberie+-+Plombier+Marseille+13/@43.2550007,5.3839155,17z/data=!3m1!4b1!4m6!3m5!1s0x12c9bf59f86fe0e5:0x921b03be66da3d72!8m2!3d43.2550007!4d5.3839155!16s%2Fg%2F11cp5hm4d4?entry=ttu&g_ep=EgoyMDI2MDMzMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-400 hover:text-blue-400 transition-colors"
              >
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>47 bis Bd Leau<br />13008 Marseille</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Zone d'intervention</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Marseille et alentours
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Marseille 13e</li>
              <li>• Marseille centre</li>
              <li>• Aubagne</li>
              <li>• Et communes environnantes</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 Maleva Plomberie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
