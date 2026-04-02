import { Award, Users, MapPin } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Une entreprise locale sérieuse
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Maleva Plomberie est une société basée à Marseille.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Entreprise à taille humaine, elle privilégie le travail bien fait, la transparence et la satisfaction client.
            </p>

            <div className="grid gap-6 pt-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Expertise reconnue</h3>
                  <p className="text-gray-600">Plus de 15 ans d'expérience dans tous types d'interventions</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Proximité client</h3>
                  <p className="text-gray-600">Un interlocuteur unique pour toute la durée de votre projet</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Ancrage local</h3>
                  <p className="text-gray-600">Basés à Marseille, nous connaissons parfaitement la région</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Équipe Maleva Plomberie"
              className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl max-w-xs">
              <p className="text-4xl font-bold text-orange-500 mb-1">100%</p>
              <p className="text-gray-700 font-semibold">Clients satisfaits</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
