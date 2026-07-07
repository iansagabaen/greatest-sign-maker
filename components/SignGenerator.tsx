import React, { useState } from 'react';
import { SectionId, SignConcept } from '../types';
import { generateSignConcept } from '../services/geminiService';
import { Sparkles, Loader2, Paintbrush } from 'lucide-react';

const SignGenerator: React.FC = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    type: '',
    vibe: ''
  });
  const [concept, setConcept] = useState<SignConcept | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.businessName || !formData.type) return;

    setLoading(true);
    setError('');
    setConcept(null);

    try {
      const result = await generateSignConcept(formData.businessName, formData.type, formData.vibe);
      setConcept(result);
    } catch (err) {
      setError('The spirits of the sign workshop are quiet. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={SectionId.WORKSHOP} className="py-24 bg-sign-navy text-sign-paper relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-sign-gold opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Sparkles className="w-8 h-8 text-sign-gold" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4">The Concept Workshop</h2>
          <p className="text-white/70 font-sans max-w-lg mx-auto">
            Not sure what you need? Describe your business, and I'll sketch out a mental blueprint for your perfect sign using the latest technology.
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-lg shadow-2xl">
          <form onSubmit={handleGenerate} className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-sign-gold">Business Name</label>
              <input 
                type="text" 
                placeholder="e.g. The Drunken Sailor"
                value={formData.businessName}
                onChange={e => setFormData({...formData, businessName: e.target.value})}
                className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/30 focus:outline-none focus:border-sign-gold transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-sign-gold">Type</label>
              <input 
                type="text" 
                placeholder="e.g. Seafood Restaurant"
                value={formData.type}
                onChange={e => setFormData({...formData, type: e.target.value})}
                className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/30 focus:outline-none focus:border-sign-gold transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-sign-gold">Vibe</label>
              <input 
                type="text" 
                placeholder="e.g. Rustic, Haunted, Classy"
                value={formData.vibe}
                onChange={e => setFormData({...formData, vibe: e.target.value})}
                className="w-full bg-white/10 border border-white/20 p-3 text-white placeholder-white/30 focus:outline-none focus:border-sign-gold transition-colors"
              />
            </div>
            
            <div className="md:col-span-3">
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-sign-gold text-sign-navy font-bold py-4 uppercase tracking-widest hover:bg-white transition-colors disabled:opacity-50 flex justify-center items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin" /> : <Paintbrush className="w-5 h-5" />}
                {loading ? 'Sketching Ideas...' : 'Generate Concept'}
              </button>
            </div>
          </form>

          {error && <p className="text-red-300 text-center mb-6">{error}</p>}

          {concept && (
            <div className="animate-fade-in bg-sign-paper text-sign-ink p-8 shadow-inner border-t-4 border-sign-gold">
              <h3 className="font-serif text-3xl text-sign-navy mb-6 text-center italic">"Here is what I envision..."</h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-sign-gold uppercase text-xs tracking-widest mb-2">The Slogan</h4>
                  <p className="font-serif text-2xl mb-6">"{concept.slogan}"</p>
                  
                  <h4 className="font-bold text-sign-gold uppercase text-xs tracking-widest mb-2">Typography</h4>
                  <p className="font-sans mb-6">{concept.typographySuggestion}</p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sign-gold uppercase text-xs tracking-widest mb-2">Visual Style</h4>
                  <p className="font-sans mb-6 text-sm leading-relaxed">{concept.visualStyle}</p>

                  <h4 className="font-bold text-sign-gold uppercase text-xs tracking-widest mb-2">Palette</h4>
                  <div className="flex gap-3">
                    {concept.colorPalette.map((color, idx) => (
                      <div key={idx} className="flex flex-col items-center gap-1">
                        <div 
                          className="w-12 h-12 rounded-full border-2 border-gray-200 shadow-sm"
                          style={{ backgroundColor: color }}
                        ></div>
                        <span className="text-[10px] uppercase text-gray-500">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default SignGenerator;