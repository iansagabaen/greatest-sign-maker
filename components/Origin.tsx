import React from 'react';
import { SectionId } from '../types';
import { IMAGES } from '../imageConfig';

const Origin: React.FC = () => {
  return (
    <section id={SectionId.ORIGIN} className="py-24 bg-white text-athletics-green relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block px-4 py-1 bg-athletics-green text-athletics-gold font-bold uppercase tracking-widest text-xs rounded-full">
            The Origin Story • 2012-2013
          </div>
          
          <h2 className="font-serif font-black text-4xl md:text-6xl leading-tight">
            It started with a <br/>
            <span className="text-athletics-gold">First Pitch Promise.</span>
          </h2>
          
          <div className="text-gray-600 font-sans text-lg leading-relaxed space-y-8">
            <p>
              The saga began with a stroke of luck. In December 2012, I won a Twitter contest hosted by the Oakland Athletics. The prize? Throwing out the ceremonial first pitch at a game in April 2013.
            </p>
            <p>
              Worried that a cold Tuesday night game might lack energy, I invited friends with a guarantee: <strong className="text-athletics-green bg-athletics-gold/20 px-1">if you come, I'll get you on TV.</strong>
            </p>
            <p>
              To honor that promise, I bypassed standard poster board. I utilized my professional graphic design skills to create 7 high-quality, witty prints mounted on rigid foam core.
            </p>
            <blockquote className="border-l-4 border-athletics-gold pl-6 py-4 italic text-xl font-serif text-athletics-green bg-gray-50 pr-4 rounded-r my-8">
              "Ian Sagabaen has to be greatest sign-maker in MLB history."
              <footer className="text-sm font-sans font-bold not-italic mt-2 text-gray-400">— MLB.com, Cut4 Blog</footer>
            </blockquote>
            <p>
              My work caught the eye of MLB.com, leading to a headline that would define my fandom for the next decade. I bought the domain that night.
            </p>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="absolute -inset-4 bg-athletics-gold/20 rounded-lg transform rotate-3"></div>
          
          {/* Image representing the era */}
          <div className="relative group overflow-hidden rounded-lg shadow-2xl transform -rotate-1 hover:rotate-0 transition-transform duration-500">
            <img 
              src={IMAGES.originFeature}
              alt="Pitcher's Mound View" 
              className="w-full h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Overlay Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur p-6 border-l-4 border-athletics-gold shadow-lg">
               <h3 className="font-serif text-athletics-green font-bold text-2xl mb-1">April 2013</h3>
               <p className="font-sans text-sm text-gray-600">
                 The moment the standard was set. No more flimsy poster board.
               </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Origin;