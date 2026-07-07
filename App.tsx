import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Origin from './components/Origin';
import Methodology from './components/Methodology';
import Gallery from './components/Gallery';
import Status from './components/Status';
import Footer from './components/Footer';
import { SectionId } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<SectionId>(SectionId.HERO);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-athletics-green selection:bg-athletics-gold selection:text-athletics-green">
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main>
        <Hero scrollToSection={scrollToSection} />
        <Origin />
        <Methodology />
        <Gallery />
        <Status />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;