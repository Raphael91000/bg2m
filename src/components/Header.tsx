import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Maleva Plomberie" className="h-12 w-auto" />
            <span className="text-xl font-bold"><span className="text-blue-600">Maleva</span> <span className="text-gray-500">Plomberie</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Services</a>
            <a href="#realisations" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Réalisations</a>
            <a href="#avis" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Avis</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Contact</a>
            <a
              href="tel:+33611412188"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Appeler maintenant
            </a>
          </nav>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium">Services</a>
              <a href="#realisations" className="text-gray-700 hover:text-blue-600 font-medium">Réalisations</a>
              <a href="#avis" className="text-gray-700 hover:text-blue-600 font-medium">Avis</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
              <a
                href="tel:+33611412188"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Appeler maintenant
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
