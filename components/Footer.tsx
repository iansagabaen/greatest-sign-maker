import React, { useState } from 'react';
import { SectionId } from '../types';
import { Twitter, Instagram, Coffee, Send } from 'lucide-react';

type FeedbackStatus = 'idle' | 'submitting' | 'success' | 'error';

const Footer: React.FC = () => {
  const [status, setStatus] = useState<FeedbackStatus>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('submitting');
    const formData = new FormData(form);
    const body = new URLSearchParams(formData as any).toString();
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

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
        </div>

        <div className="max-w-md mx-auto mb-16 text-left">
          {status === 'success' ? (
            <div className="bg-white/10 border border-athletics-gold/40 rounded-lg px-6 py-8 text-center">
              <p className="font-serif text-xl text-athletics-gold font-bold mb-1">Thanks — got it!</p>
              <p className="text-white/70 text-sm">I read every message. I'll get back to you if a reply makes sense.</p>
            </div>
          ) : (
            <form
              name="feedback"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input type="hidden" name="form-name" value="feedback" />
              <div>
                <label htmlFor="footer-name" className="sr-only">Name</label>
                <input
                  id="footer-name"
                  type="text"
                  name="name"
                  placeholder="Name (optional)"
                  className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-athletics-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="footer-email" className="sr-only">Email</label>
                <input
                  id="footer-email"
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full bg-white/10 border border-white/20 rounded-full px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-athletics-gold transition-colors"
                />
              </div>
              <div>
                <label htmlFor="footer-message" className="sr-only">Message</label>
                <textarea
                  id="footer-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Send feedback, a tip, or just say hi..."
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-5 py-3 text-white placeholder-white/40 focus:outline-none focus:border-athletics-gold transition-colors resize-none"
                />
              </div>
              <div className="flex items-center justify-between gap-4">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="flex items-center gap-2 bg-athletics-gold text-athletics-green px-6 py-3 rounded-full transition-all font-bold tracking-wide hover:bg-white disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  {status === 'submitting' ? 'Sending...' : 'Send Feedback'}
                </button>
                {status === 'error' && (
                  <p className="text-sm text-red-300">Something went wrong — try again?</p>
                )}
              </div>
            </form>
          )}
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