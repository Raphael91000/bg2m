import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Approach from './components/Approach';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Realisations from './components/Realisations';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileCallButton from './components/MobileCallButton';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Approach />
      <Process />
      <Testimonials />
      <Realisations />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCallButton />
    </div>
  );
}

export default App;
