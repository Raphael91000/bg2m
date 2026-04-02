import { Bath, Flame, Wrench, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Bath,
    title: 'Salle de bain',
    description: 'Rénovation complète ou partielle : carrelage, sanitaires, douche à l\'italienne. Un chantier propre du début à la fin.',
    items: ['Pose de douche & baignoire', 'Remplacement sanitaires', 'Rénovation complète'],
    color: 'bg-blue-500',
    light: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-600',
  },
  {
    icon: Flame,
    title: 'Pose chauffe-eau',
    description: 'Remplacement ou première installation de chauffe-eau thermodynamique, électrique ou gaz. Intervention rapide.',
    items: ['Chauffe-eau thermodynamique', 'Ballon électrique', 'Chauffe-eau gaz'],
    color: 'bg-blue-600',
    light: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-700',
  },
  {
    icon: Wrench,
    title: 'Dépannage',
    description: 'Fuite, canalisation bouchée, robinet cassé... On intervient rapidement pour une solution fiable et durable.',
    items: ['Fuite d\'eau', 'Canalisation bouchée', 'Robinetterie'],
    color: 'bg-blue-600',
    light: 'bg-blue-50 border-blue-100',
    accent: 'text-blue-600',
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Ce qu'on fait</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4">
            Nos services de plomberie<br />
            <span className="text-blue-600">à Marseille & alentours</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Du dépannage d'urgence à la rénovation complète, Maleva intervient sur tous vos chantiers avec sérieux.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`rounded-2xl border-2 ${service.light} p-8 flex flex-col gap-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`${service.color} w-14 h-14 rounded-xl flex items-center justify-center shadow-md`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>

                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm font-medium ${service.accent}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-current flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:+33611412188"
                  className={`mt-auto inline-flex items-center gap-2 font-semibold ${service.accent} hover:gap-3 transition-all text-sm`}
                >
                  Demander un devis <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
