import { Phone } from 'lucide-react';

export default function MobileCallButton() {
  return (
    <a
      href="tel:+33634171045"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 animate-pulse"
      aria-label="Appeler BG2M Plomberie"
    >
      <Phone className="w-6 h-6" />
    </a>
  );
}
