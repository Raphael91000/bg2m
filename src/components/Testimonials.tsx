import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sophie M.',
    location: 'Marseille',
    text: 'Intervention très professionnelle pour une fuite urgente. Travail propre et sérieux, je recommande vivement Maleva Plomberie.',
    rating: 5
  },
  {
    name: 'Marc D.',
    location: 'Évry',
    text: 'Rénovation complète de notre salle de bain. Résultat impeccable, dans les temps et budget respecté. Un artisan fiable.',
    rating: 5
  },
  {
    name: 'Fatima L.',
    location: 'Sainte-Geneviève-des-Bois',
    text: 'Intervention rapide pour notre chauffe-eau en panne. Explications claires et travail durable. Très satisfaite du service.',
    rating: 5
  },
  {
    name: 'Jean-Pierre R.',
    location: 'Viry-Châtillon',
    text: 'Installation de sanitaires neufs réalisée avec grand soin. Un vrai professionnel qui ne bâcle pas le travail.',
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="avis" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            La satisfaction de nos clients est notre meilleure récompense
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-blue-600/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-blue-600 text-blue-600" />
                ))}
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
