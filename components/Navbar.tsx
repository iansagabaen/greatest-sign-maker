import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  activeSection: SectionId;
  scrollToSection: (id: SectionId) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, scrollToSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: SectionId.ORIGIN, label: 'The Origin' },
    { id: SectionId.METHODOLOGY, label: 'Methodology' },
    { id: SectionId.GALLERY, label: 'The Archive' },
    { id: SectionId.STATUS, label: 'Legacy' },
    { id: SectionId.CONTACT, label: 'Social' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-athletics-green/95 shadow-lg py-4 border-b border-athletics-gold' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2 cursor-pointer group" 
          onClick={() => scrollToSection(SectionId.HERO)}
        >
          <div className="w-10 h-10 bg-athletics-gold rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
            <span className="font-serif font-black text-athletics-green text-lg">GS</span>
          </div>
          <span className="font-serif font-bold text-xl tracking-wide text-white hidden md:block">
            Greatest Sign Maker
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-sans text-sm uppercase font-bold tracking-widest transition-colors ${
                activeSection === item.id 
                  ? 'text-athletics-gold underline decoration-2 underline-offset-4' 
                  : 'text-white hover:text-athletics-gold'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-athletics-gold"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-athletics-green border-b-4 border-athletics-gold p-6 flex flex-col gap-6 shadow-2xl h-screen">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileMenuOpen(false);
              }}
              className="text-left font-serif text-2xl font-bold text-white hover:text-athletics-gold"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;