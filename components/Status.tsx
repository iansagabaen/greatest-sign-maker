import React from 'react';
import { SectionId } from '../types';
import { Camera, Users, BadgeCheck } from 'lucide-react';
import { IMAGES } from '../imageConfig';

const Status: React.FC = () => {
  return (
    <section id={SectionId.STATUS} className="py-24 bg-white text-athletics-green">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="grid md:grid-cols-2 gap-16 items-center mb-12">
          <div className="order-2 md:order-1">
             <div className="relative group">
                <div className="absolute inset-0 bg-athletics-gold transform translate-x-4 translate-y-4 rounded-lg transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-xl border-4 border-white">
                    <img 
                      src={IMAGES.statusFeature}
                      alt="Fans in the bleachers" 
                      className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-athletics-green/20 mix-blend-multiply"></div>
                    
                    <div className="absolute bottom-0 left-0 bg-athletics-gold px-4 py-2">
                      <span className="text-athletics-green font-bold text-xs uppercase tracking-widest">
                        Right Field Bleachers
                      </span>
                    </div>
                </div>
             </div>
          </div>
          
          <div className="order-1 md:order-2">
             <h2 className="font-serif font-black text-4xl mb-8">A Familiar Face</h2>
             <p className="font-sans text-lg text-gray-600 mb-10 leading-loose">
               What started as a design project turned into a phenomenon. I became a fixture in the right-field bleachers, known for bringing a fresh, relevant sign to every game.
             </p>
             <ul className="space-y-8">
               <li className="flex gap-4 group">
                 <div className="bg-athletics-green text-white p-3 rounded-full h-fit group-hover:bg-athletics-gold group-hover:text-athletics-green transition-colors">
                    <Camera className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">The "Sightings"</h4>
                   <p className="text-base text-gray-500 leading-relaxed">Fans treated spotting me like spotting a mascot, posting #GreatestSignMaker sightings across social media.</p>
                 </div>
               </li>
               <li className="flex gap-4 group">
                 <div className="bg-athletics-green text-white p-3 rounded-full h-fit group-hover:bg-athletics-gold group-hover:text-athletics-green transition-colors">
                    <Users className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">Bleachers to Backstage</h4>
                   <p className="text-base text-gray-500 leading-relaxed">The Front Office took notice. I moved from buying tickets to receiving invites to restricted areas of the stadium.</p>
                 </div>
               </li>
               <li className="flex gap-4 group">
                 <div className="bg-athletics-green text-white p-3 rounded-full h-fit group-hover:bg-athletics-gold group-hover:text-athletics-green transition-colors">
                    <BadgeCheck className="w-6 h-6" />
                 </div>
                 <div>
                   <h4 className="font-bold text-xl mb-2">On The Field</h4>
                   <p className="text-base text-gray-500 leading-relaxed">The pinnacle: Being invited onto the diamond to hold a sign, officially validating my contribution to the game-day atmosphere.</p>
                 </div>
               </li>
             </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Status;