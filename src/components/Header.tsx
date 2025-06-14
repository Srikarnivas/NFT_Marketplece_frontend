import React, { useState, useEffect } from 'react';
import { Menu, X, Github, ExternalLink } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">💠</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ALGONEST
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('getting-started')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Getting Started
            </button>
            <button onClick={() => scrollToSection('api-reference')} className="text-gray-700 hover:text-blue-600 transition-colors">
              API Reference
            </button>
            <button onClick={() => scrollToSection('testing')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Testing
            </button>
            <a 
              href="https://github.com/rushikesh2k04/NFT_opt-in-asset_API" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-1 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('features')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Features
              </button>
              <button onClick={() => scrollToSection('getting-started')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Getting Started
              </button>
              <button onClick={() => scrollToSection('api-reference')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                API Reference
              </button>
              <button onClick={() => scrollToSection('testing')} className="block px-3 py-2 text-gray-700 hover:text-blue-600">
                Testing
              </button>
              <a 
                href="https://github.com/rushikesh2k04/NFT_opt-in-asset_API" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-1 mx-3 mt-2 bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
