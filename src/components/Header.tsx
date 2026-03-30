import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-3">
            <div className="bg-slate-900 text-white p-2 rounded-lg">
              <Phone className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">BG2M Plomberie</h1>
              <p className="text-xs text-gray-600">Juvisy-sur-Orge & Île-de-France</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Services</a>
            <a href="#realisations" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Réalisations</a>
            <a href="#avis" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Avis</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium transition-colors">Contact</a>
            <a
              href="tel:+33634171045"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              06 34 17 10 45
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
              <a href="#services" className="text-gray-700 hover:text-orange-500 font-medium">Services</a>
              <a href="#realisations" className="text-gray-700 hover:text-orange-500 font-medium">Réalisations</a>
              <a href="#avis" className="text-gray-700 hover:text-orange-500 font-medium">Avis</a>
              <a href="#contact" className="text-gray-700 hover:text-orange-500 font-medium">Contact</a>
              <a
                href="tel:+33634171045"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                06 34 17 10 45
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
