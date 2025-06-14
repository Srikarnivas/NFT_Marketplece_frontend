import React from 'react';
import { Coins, ArrowLeftRight, Snowflake, RotateCcw, Clock, Shield, Code, Layers } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Coins className="w-6 h-6" />,
      title: "Create NFTs on Algorand",
      description: "Mint unique NFTs with custom metadata and asset URLs on the Algorand blockchain"
    },
    {
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Transfer NFTs",
      description: "Seamlessly transfer NFTs between wallets with secure transaction handling"
    },
    {
      icon: <Snowflake className="w-6 h-6" />,
      title: "Freeze Assets",
      description: "Freeze NFTs to prevent transfers when needed for security or compliance"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      title: "Reconfigure & Clawback",
      description: "Update asset roles and perform clawback operations for asset management"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Countdown Clawback",
      description: "Implement time-delayed clawback mechanisms for dispute resolution"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Clean REST API",
      description: "Well-structured API endpoints with comprehensive documentation"
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Modular Architecture",
      description: "Easy integration with web frontends and existing applications"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "TestNet Ready",
      description: "Perfect for development and experimentation on Algorand TestNet"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to build and manage NFT marketplaces on Algorand blockchain
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to build your NFT marketplace?
          </h3>
          <p className="text-gray-600 mb-6">
            Get started with our comprehensive API and join the growing community of developers
          </p>
          <button 
            onClick={() => document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Start Building Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;