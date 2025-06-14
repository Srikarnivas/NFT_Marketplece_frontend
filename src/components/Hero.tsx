import React from 'react';
import { ArrowRight, Code, Zap, Shield, Github, ExternalLink } from 'lucide-react';

const Hero = () => {
  const scrollToGettingStarted = () => {
    const element = document.getElementById('getting-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap size={16} />
              <span>Open Source NFT Platform</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                ALGONEST
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl text-gray-600 mb-4 font-light">
              Flexible NFT Hub
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Your open-source gateway to building robust, flexible, and secure NFT marketplaces using 
              <span className="font-semibold text-blue-600"> Algorand Blockchain</span>. 
              Perfect for developers, startups, and blockchain enthusiasts.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <button 
              onClick={scrollToGettingStarted}
              className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </button>
            
            <a 
              href="https://github.com/rushikesh2k04/NFT_opt-in-asset_API" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              <Github size={20} />
              <span>View on GitHub</span>
              <ExternalLink size={16} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <Code className="w-8 h-8 text-blue-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Developer Friendly</h3>
              <p className="text-gray-600 text-sm">Clean REST APIs with comprehensive documentation</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <Shield className="w-8 h-8 text-green-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
              <p className="text-gray-600 text-sm">Built on Algorand's proven blockchain technology</p>
            </div>
            
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-gray-200">
              <Zap className="w-8 h-8 text-purple-600 mb-3 mx-auto" />
              <h3 className="font-semibold text-gray-900 mb-2">Production Ready</h3>
              <p className="text-gray-600 text-sm">Modular architecture for scalable NFT applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
