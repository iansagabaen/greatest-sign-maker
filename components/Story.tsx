import React from 'react';
import { SectionId } from '../types';
import { IMAGES } from '../imageConfig';

const Story: React.FC = () => {
  return (
    <section id={SectionId.STORY} className="py-24 bg-white relative">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
        <div className="relative order-2 md:order-1">
          {/* Decorative border frame */}
          <div className="absolute top-4 left-4 w-full h-full border-2 border-sign-gold z-0"></div>
          <img 
            src={IMAGES.storyPortrait}
            alt="The Sign Maker at work" 
            className="relative z-10 w-full h-auto grayscale contrast-125 shadow-xl"
          />
          <div className="absolute bottom-[-20px] right-[-20px] bg-sign-navy text-white p-4 z-20 font-serif italic text-lg shadow-lg">
            "A steady hand and a true eye."
          </div>
        </div>

        <div className="order-1 md:order-2 space-y-6">
          <h2 className="font-serif text-4xl md:text-5xl text-sign-navy mb-6">
            Not Just a Sign. <br/> A Legacy.
          </h2>
          
          <div className="prose prose-lg text-sign-ink font-sans leading-relaxed space-y-4">
            <p>
              It started in a dusty garage with a single can of enamel and a squirrel-hair brush. 
              While the rest of the world rushed toward vinyl plotters and digital prints, I went backwards. 
              I fell in love with the smell of turpentine and the way gold leaf catches the afternoon sun.
            </p>
            <p>
              For over three decades, I have been the "Greatest Sign Maker" not because of arrogance, 
              but because of an uncompromising dedication to the craft. Every curve is intentional. 
              Every serif is calculated. 
            </p>
            <p>
              My signs don't just label a building; they give it a soul. Whether it's a gilded window 
              for a law firm or a distressed wooden hanger for a local pub, I build pieces that tell 
              your story before a customer even walks through the door.
            </p>
          </div>

          <div className="pt-4 flex gap-8">
            <div>
              <span className="block font-serif text-3xl text-sign-gold">35+</span>
              <span className="text-sm uppercase tracking-widest text-gray-500">Years Active</span>
            </div>
            <div>
              <span className="block font-serif text-3xl text-sign-gold">2k+</span>
              <span className="text-sm uppercase tracking-widest text-gray-500">Signs Crafted</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Story;