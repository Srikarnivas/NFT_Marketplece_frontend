import React from 'react';
import { Github, Heart, ExternalLink, Code, Users, BookOpen } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">💠</span>
              </div>
              <span className="text-2xl font-bold">ALGONEST</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Open-source NFT marketplace platform built on Algorand blockchain. 
              Empowering developers to create secure, scalable, and flexible NFT applications.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="https://github.com/Srikarnivas/algonest-nft-hub" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <a 
                href="https://www.algorand.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>Algorand</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Code className="w-5 h-5 mr-2" />
              Development
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <button 
                  onClick={() => document.getElementById('api-reference')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  API Documentation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
                  className="hover:text-white transition-colors"
                >
                  Getting Started
                </button>
              </li>
              <li>
                <a 
                  href="https://bank.testnet.algorand.network/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  TestNet Dispenser
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Community
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a 
                  href="https://github.com/Srikarnivas/algonest-nft-hub/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/Srikarnivas/algonest-nft-hub/pulls" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Contribute
                </a>
              </li>
              <li>
                <a 
                  href="https://developer.algorand.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Algorand Docs
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by</span>
              <a 
                href="https://github.com/Srikarnivas" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white font-semibold hover:text-blue-400 transition-colors"
              >
                Srikarnivas
              </a>
            </div>
            
            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2024 ALGONEST</span>
              <span>MIT License</span>
              <div className="flex items-center space-x-1">
                <span>Powered by</span>
                <a 
                  href="https://www.algorand.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Algorand
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-lg p-6 border border-gray-700">
            <h3 className="text-xl font-bold mb-2">Ready to Build?</h3>
            <p className="text-gray-400 mb-4">
              Join the growing community of developers building the future of NFTs
            </p>
            <button 
              onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;