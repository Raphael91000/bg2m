import Header from './components/Header';
import Hero from './components/Hero';
import Positioning from './components/Positioning';
import Services from './components/Services';
import Differentiation from './components/Differentiation';
import Realisations from './components/Realisations';
import Testimonials from './components/Testimonials';
import Reactivity from './components/Reactivity';
import About from './components/About';
import Zone from './components/Zone';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCallButton from './components/MobileCallButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Positioning />
      <Services />
      <Differentiation />
      <Realisations />
      <Testimonials />
      <Reactivity />
      <About />
      <Zone />
      <Contact />
      <Footer />
      <MobileCallButton />
    </div>
  );
}

export default App;
