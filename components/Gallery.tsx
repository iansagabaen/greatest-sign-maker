import React from 'react';
import { SectionId } from '../types';

interface SignProps {
  title: string;
  subtitle?: string;
  reference?: string;
  variant: 'frankie' | 'lastella' | 'coco' | 'vogt' | 'generic';
}

const DigitalSign: React.FC<SignProps> = ({ title, subtitle, reference, variant }) => {
  const getStyles = () => {
    switch (variant) {
      case 'frankie':
        return "bg-white text-black border-4 border-black font-sans font-black";
      case 'lastella':
        return "bg-athletics-gold text-athletics-green border-4 border-athletics-green font-serif italic";
      case 'coco':
        return "bg-athletics-green text-athletics-gold border-4 border-white font-sans font-bold tracking-widest";
      case 'vogt':
        return "bg-black text-white border-4 border-white font-serif uppercase";
      default:
        return "bg-white text-athletics-green border-4 border-athletics-green font-serif";
    }
  };

  return (
    <div className="group perspective-1000 cursor-pointer">
      <div className={`
        relative aspect-[4/3] p-6 flex flex-col items-center justify-center text-center shadow-xl 
        transition-all duration-500 transform group-hover:rotate-y-12 group-hover:scale-105
        ${getStyles()}
      `}>
        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

        <h3 className="text-4xl md:text-5xl leading-none z-10 drop-shadow-sm">
          {title}
        </h3>
        {subtitle && (
          <>
            <div className="w-12 h-1 bg-current my-3 opacity-50"></div>
            <p className="text-xl md:text-2xl z-10 uppercase tracking-wide">{subtitle}</p>
          </>
        )}
        
        {/* Spec Label */}
        <div className="absolute bottom-2 right-2 text-[10px] opacity-40 font-sans font-normal tracking-tighter">
          20" x 30" FOAM CORE
        </div>
      </div>
      
      {/* Reference Caption */}
      <div className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-xs font-mono text-athletics-green/60 uppercase tracking-widest">{reference}</p>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  return (
    <section id={SectionId.GALLERY} className="py-24 bg-athletics-gray relative">
      {/* Texture Overlay */}
      <div className="absolute inset-0 bg-noise opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif font-black text-4xl md:text-5xl text-athletics-green mb-4">
            The Digital Archive
          </h2>
          <p className="text-athletics-green/70 font-sans max-w-xl mx-auto">
            A digital recreation of the foam core collection. 
            <br/><span className="text-xs uppercase tracking-widest opacity-60">Click specific signs to see original context (Coming Soon)</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <DigitalSign 
            title="FRANKIE" 
            subtitle="SAY RELAX" 
            variant="frankie" 
            reference="Re: Frankie Montas / Zoolander"
          />
          <DigitalSign 
            title="La Stella!" 
            variant="lastella" 
            reference="Re: Tommy La Stella / Streetcar Named Desire"
          />
          <DigitalSign 
            title="I BELIEVE" 
            subtitle="IN STEPHEN VOGT" 
            variant="vogt" 
            reference="Re: Stephen Vogt / US Soccer Chant"
          />
          <DigitalSign 
            title="I'M IN LOVE" 
            subtitle="WITH THE COCO" 
            variant="coco" 
            reference="Re: Coco Crisp / O.T. Genasis"
          />
           <DigitalSign 
            title="DOOOOO" 
            variant="generic" 
            reference="Re: Sean Doolittle"
          />
          <div className="aspect-[4/3] flex items-center justify-center border-2 border-dashed border-athletics-green/30 rounded bg-transparent text-athletics-green/40">
             <div className="text-center">
               <p className="font-serif italic">More from the archive...</p>
               <a href="https://instagram.com/greatestsignmaker" className="text-xs font-bold uppercase underline mt-2 block hover:text-athletics-green">Visit Instagram</a>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;