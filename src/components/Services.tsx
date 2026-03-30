import { Wrench, Droplet, Bath, Flame } from 'lucide-react';

const services = [
  {
    icon: Wrench,
    title: 'Dépannage plomberie',
    description: 'Intervention rapide avec une solution fiable et durable.',
    color: 'bg-blue-500'
  },
  {
    icon: Droplet,
    title: 'Installation',
    description: 'Chauffe-eau, sanitaires et réseaux posés proprement pour éviter les problèmes futurs.',
    color: 'bg-cyan-500'
  },
  {
    icon: Bath,
    title: 'Rénovation salle de bain',
    description: 'Un chantier maîtrisé avec un résultat propre et durable.',
    color: 'bg-teal-500'
  },
  {
    icon: Flame,
    title: 'Chauffage',
    description: 'Installation fiable et adaptée à votre logement.',
    color: 'bg-orange-500'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Des interventions complètes pour tous vos besoins en plomberie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className={`${service.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
