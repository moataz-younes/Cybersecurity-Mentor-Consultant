import React, { useState, useEffect } from 'react';
import { Menu, X, Shield, Mail, MapPin, Phone } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-2xl border-b border-green-500/20' : 'bg-transparent'
    }`}>
      {/* Top Info Bar */}
      <div className="bg-gradient-to-r from-slate-800 to-slate-700 text-green-400 py-2 px-4 border-b border-green-500/30">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+44 7366 187685</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>moataz.yones244@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Available Worldwide | Arabic & English</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="px-4 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className={`text-3xl font-bold font-mono ${isScrolled ? 'text-white' : 'text-white'}`}>
              <span className="text-red-400">Moataz</span> <span className="text-green-400">Younes</span>
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`hover:text-green-400 transition-colors font-medium ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Home</a>
            <a href="#about" className={`hover:text-green-400 transition-colors font-medium ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>About</a>
            <a href="#services" className={`hover:text-green-400 transition-colors font-medium ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Services</a>
            <a href="#portfolio" className={`hover:text-green-400 transition-colors font-medium ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Portfolio</a>
            <a href="#contact" className={`hover:text-green-400 transition-colors font-medium ${
              isScrolled ? 'text-white' : 'text-white'
            }`}>Contact</a>
            <button className="bg-gradient-to-r from-red-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 shadow-lg font-medium">
              Schedule Consultation
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-md shadow-xl py-6 border-b border-red-500/30 z-50">
            <div className="flex flex-col space-y-6 px-6">
              <a href="#home" className="text-white hover:text-green-400 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-green-400 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>About</a>
              <a href="#services" className="text-white hover:text-green-400 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Services</a>
              <a href="#portfolio" className="text-white hover:text-green-400 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              <a href="#contact" className="text-white hover:text-green-400 transition-colors font-medium py-2" onClick={() => setIsMenuOpen(false)}>Contact</a>
              <button className="bg-gradient-to-r from-red-500 to-green-500 text-white px-6 py-3 rounded-lg hover:from-red-600 hover:to-green-600 transition-all duration-300 w-fit font-medium">
                Schedule Consultation
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;