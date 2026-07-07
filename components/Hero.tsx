import React from 'react';
import { SectionId } from '../types';
import { Instagram, ArrowRight } from 'lucide-react';
import { IMAGES } from '../imageConfig';

interface HeroProps {
  scrollToSection: (id: SectionId) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section 
      id={SectionId.HERO} 
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBackground}
          alt="Oakland Coliseum at Night" 
          className="w-full h-full object-cover opacity-40 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-athletics-green/90 via-athletics-green/80 to-athletics-green"></div>
        <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay"></div>
      </div>

      {/* Graphic Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-athletics-gold opacity-10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="z-10 max-w-5xl mx-auto space-y-6 relative">
        <h2 className="font-sans text-athletics-gold font-bold tracking-[0.2em] uppercase text-sm md:text-lg animate-fade-in-up shadow-black drop-shadow-md">
          The Legend of the Bleachers
        </h2>
        
        <h1 className="font-serif font-black text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-tight animate-fade-in-up delay-100 drop-shadow-2xl">
          THE GREATEST<br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-athletics-gold to-[#bf8b0f] drop-shadow-sm">SIGN MAKER</span>
        </h1>

        <div className="w-24 h-2 bg-athletics-gold mx-auto my-8 rounded-full animate-width-expand shadow-lg"></div>

        <p className="font-sans text-white text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light opacity-90 animate-fade-in-up delay-200 text-shadow-sm">
          How a Graphic Designer turned <span className="font-bold text-athletics-gold border-b-2 border-athletics-gold/50">20x30 foam core</span> into an MLB legacy.
        </p>

        <div className="pt-10 animate-fade-in-up delay-300 flex flex-col md:flex-row gap-4 justify-center items-center">
          <a 
            href="https://www.instagram.com/greatestsignmaker/"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 bg-athletics-gold text-athletics-green font-bold text-lg uppercase tracking-wider hover:bg-white hover:text-athletics-green transition-all duration-300 rounded shadow-lg flex items-center gap-3"
          >
            <Instagram className="w-6 h-6" />
            View the Archive
          </a>
          
          <button 
            onClick={() => scrollToSection(SectionId.ORIGIN)}
            className="px-8 py-4 border-2 border-white/30 text-white font-bold text-lg uppercase tracking-wider hover:border-white hover:bg-white/10 transition-all duration-300 rounded flex items-center gap-2 backdrop-blur-sm"
          >
            Read the Story <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;