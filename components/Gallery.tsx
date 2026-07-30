import React from 'react';
import { SectionId } from '../types';

interface SignProps {
  reference?: string;
  imageUrl: string;
  imageAlt: string;
  secondImageUrl?: string;
  secondImageAlt?: string;
}

const DigitalSign: React.FC<SignProps> = ({ reference, imageUrl, imageAlt, secondImageUrl, secondImageAlt }) => {
  return (
    <div className="group perspective-1000 cursor-pointer">
      <div className={`grid ${secondImageUrl ? 'grid-cols-2 gap-1' : 'grid-cols-1'}`}>
        <div className="relative aspect-[4/3] shadow-xl overflow-hidden transition-all duration-500 transform group-hover:rotate-y-12 group-hover:scale-105">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
        </div>

        {secondImageUrl && (
          <div className="relative aspect-[4/3] shadow-xl overflow-hidden transition-all duration-500 transform group-hover:rotate-y-12 group-hover:scale-105">
            <img
              src={secondImageUrl}
              alt={secondImageAlt || imageAlt}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
          </div>
        )}
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
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <DigitalSign
            reference='"One of the very first signs I&rsquo;ve ever made, and definitely my most popular." &mdash; @greatestsignmaker'
            imageUrl="/images/brick-tamland-lets-go-oakland.jpg"
            imageAlt="Brick Tamland (Anchorman) 'LET'S GO OAKLAND' poster, in an A's tie"
          />
          <DigitalSign
            reference="Fictional baseball card — led to meeting Beane in person at Fan Fest"
            imageUrl="/images/billy-beane-card.jpg"
            imageAlt="Photoshopped Billy Beane 'Executive of the Decade' baseball card"
          />
          <DigitalSign
            reference='"Signed by Ryan Cook, handed off to Grant Balfour & Sean Doolittle. Turned into buttons, gave a few to Doolittle himself." &mdash; @greatestsignmaker'
            imageUrl="/images/pen-pals-bullpen.jpg"
            imageAlt="'Pen Pals' collage of 2013 A's bullpen pitchers, signed by Grant Balfour and teammates"
            secondImageUrl="/images/doolittle-pen-pals-buttons.jpg"
            secondImageAlt="Ian with A's reliever Sean Doolittle at spring training, holding up a 'Pen Pals' button made from the poster"
          />
          <DigitalSign
            reference="Bartolo Colon pun poster — caught the A's front office's eye, leading to a guest-speaker invite at Fan Fest"
            imageUrl="/images/colon-semicolon-poster.jpg"
            imageAlt="Split poster of A's pitcher Bartolo Colon captioned 'COLON' and 'SEMICOLON', a pun on his last name"
          />
          <DigitalSign
            reference="An early fan-favorite — timed perfectly for Jed Lowrie's second stint with the A's"
            imageUrl="/images/return-of-the-jed-lowrie.jpg"
            imageAlt="'Return of the Jed Lowrie' poster, a Star Wars 'Return of the Jedi' pun with Darth Vader and Yoda composited onto A's infielder Jed Lowrie"
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
