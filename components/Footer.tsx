import React from 'react';
import { SectionId } from '../types';
import { Twitter, Instagram, Coffee, MessageSquare } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer id={SectionId.CONTACT} className="bg-athletics-green text-white pt-20 pb-10 border-t border-athletics-gold/20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        
        <h2 className="font-serif font-black text-3xl md:text-5xl text-athletics-gold mb-8">
          The Archive is Live.
        </h2>
        
        <p className="font-sans text-lg text-white/70 mb-12 max-w-xl mx-auto">
          While the signs were temporary, the digital footprint is permanent. Check the feeds for the full history of designs and interactions.
        </p>

        <div className="flex justify-center gap-6 mb-16">
          <a 
            href="https://www.instagram.com/greatestsignmaker/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-athletics-gold hover:text-athletics-green px-6 py-3 rounded-full transition-all font-bold tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            Instagram
          </a>
          <a
            href="http://twitter.com/gr8estsignmaker"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-athletics-gold hover:text-athletics-green px-6 py-3 rounded-full transition-all font-bold tracking-wide"
          >
            <Twitter className="w-5 h-5" />
            Twitter
          </a>
          <a
            href="mailto:iansagabaen@gmail.com?subject=Greatest%20Sign%20Maker%20Feedback"
            className="flex items-center gap-2 bg-white/10 hover:bg-athletics-gold hover:text-athletics-green px-6 py-3 rounded-full transition-all font-bold tracking-wide"
          >
            <MessageSquare className="w-5 h-5" />
            Send Feedback
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; {new Date().getFullYear()} Ian Sagabaen.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <Coffee className="w-4 h-4" />
            <span>I still owe Susan Slusser a coffee.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;