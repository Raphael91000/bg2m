import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">BG2M Plomberie</h3>
            <p className="text-gray-400 leading-relaxed">
              Votre expert en plomberie à Juvisy-sur-Orge et en Île-de-France.
              Intervention rapide, travail soigné, résultat durable.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="tel:+33634171045"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-5 h-5" />
                06 34 17 10 45
              </a>
              <a
                href="mailto:contact@bg2m-plomberie.fr"
                className="flex items-center gap-3 text-gray-400 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
                contact@bg2m-plomberie.fr
              </a>
              <div className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>79 avenue de la Cour de France<br />91260 Juvisy-sur-Orge</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Zone d'intervention</h4>
            <p className="text-gray-400 leading-relaxed mb-4">
              Essonne (91) et toute l'Île-de-France
            </p>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>• Juvisy-sur-Orge</li>
              <li>• Évry-Courcouronnes</li>
              <li>• Sainte-Geneviève-des-Bois</li>
              <li>• Et communes environnantes</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2024 BG2M Plomberie. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
