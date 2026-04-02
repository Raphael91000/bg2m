import { useState } from 'react';
import { Phone, Send, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Gauche — infos */}
          <div className="space-y-10">
            <div>
              <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Contactez-nous</p>
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
                Un problème de plomberie ?<br />
                <span className="text-blue-600">On répond vite.</span>
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Appelez-nous ou laissez vos coordonnées. On vous rappelle sous 2h en semaine.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 rounded-xl p-3">
                  <Phone className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Téléphone</p>
                  <a href="tel:+33611412188" className="text-xl font-bold hover:text-blue-400 transition-colors">
                    06 11 41 21 88
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 rounded-xl p-3">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Zone d'intervention</p>
                  <p className="text-white font-semibold">Marseille & alentours</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-blue-600/10 rounded-xl p-3">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-500">Disponibilité</p>
                  <p className="text-white font-semibold">Lundi – Dimanche, 24h/24</p>
                </div>
              </div>
            </div>

            <a
              href="tel:+33611412188"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 text-lg"
            >
              <Phone className="w-6 h-6" />
              Appeler maintenant
            </a>
          </div>

          {/* Droite — formulaire */}
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                  <Send className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Message envoyé !</h3>
                <p className="text-gray-400">On vous rappelle sous 2h en semaine.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-bold mb-6">Demander un devis gratuit</h3>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Prénom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jean"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1.5">Nom *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dupont"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Téléphone *</label>
                  <input
                    type="tel"
                    required
                    placeholder="06 XX XX XX XX"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Ville *</label>
                  <input
                    type="text"
                    required
                    placeholder="Marseille"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Votre besoin *</label>
                  <select
                    required
                    className="w-full bg-slate-800 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition"
                  >
                    <option value="">Sélectionnez...</option>
                    <option>Dépannage urgent</option>
                    <option>Salle de bain</option>
                    <option>Pose chauffe-eau</option>
                    <option>Entretien / maintenance</option>
                    <option>Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    placeholder="Décrivez votre situation..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
                >
                  <Send className="w-5 h-5" />
                  Envoyer ma demande
                </button>

                <p className="text-xs text-gray-600 text-center">Devis gratuit · Sans engagement · Réponse sous 2h</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
