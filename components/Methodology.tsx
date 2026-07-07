import React from 'react';
import { SectionId } from '../types';
import { PenTool, Layout, type LucideIcon } from 'lucide-react';

interface SpecCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const SpecCard: React.FC<SpecCardProps> = ({ icon: Icon, title, desc }) => (
  <div className="bg-white/10 backdrop-blur-sm p-8 rounded border border-athletics-gold/30 hover:border-athletics-gold transition-colors flex flex-col h-full">
    <Icon className="w-10 h-10 text-athletics-gold mb-6" />
    <h4 className="font-serif font-bold text-2xl text-white mb-4">{title}</h4>
    <p className="font-sans text-gray-300 text-base leading-relaxed flex-grow">{desc}</p>
  </div>
);

const Methodology: React.FC = () => {
  return (
    <section id={SectionId.METHODOLOGY} className="py-24 bg-athletics-green relative">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(#EFB21E 1px, transparent 1px)', backgroundSize: '24px 24px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif font-black text-4xl md:text-6xl text-white mb-6">
            Smart Fandom. <br/>
            <span className="text-athletics-gold">Design Methodology.</span>
          </h2>
          <p className="text-white/80 font-sans text-xl max-w-2xl mx-auto leading-relaxed">
            This wasn't just scribbles on poster board. As a Graphic Designer, I treated fandom as a visual communication challenge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <SpecCard 
            icon={Layout}
            title="The Hardware" 
            desc="20x30 inch foam core boards. Rigid enough to withstand the Coliseum wind without flopping, light enough to carry to the bleachers."
          />
          <SpecCard 
            icon={PenTool}
            title="The Content Strategy" 
            desc="Mixing baseball stats with pop culture. If the reference is too niche, it fails. If it's too generic, it's boring."
          />
          <SpecCard 
            icon={Layout}
            title="Legibility" 
            desc="High-contrast typography designed specifically for TV broadcast cameras from 400 feet away."
          />
        </div>
      </div>
    </section>
  );
};

export default Methodology;