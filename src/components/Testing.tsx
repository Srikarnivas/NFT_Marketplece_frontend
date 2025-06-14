import React from 'react';
import { Zap, Settings, Send, CheckCircle } from 'lucide-react';

const Testing = () => {
  const testingSteps = [
    {
      step: 1,
      title: "Setup Postman",
      description: "Open Postman and create a new collection called 'ALGONEST APIs'",
      icon: <Settings className="w-5 h-5" />
    },
    {
      step: 2,
      title: "Set Base URL",
      description: "Configure the base URL to http://localhost:5000/api/nft",
      icon: <Zap className="w-5 h-5" />
    },
    {
      step: 3,
      title: "Test Endpoints",
      description: "Start with generating an account, then create NFTs and test transfers",
      icon: <Send className="w-5 h-5" />
    },
    {
      step: 4,
      title: "Verify Results",
      description: "Check transaction IDs and asset IDs in the Algorand TestNet explorer",
      icon: <CheckCircle className="w-5 h-5" />
    }
  ];

  const exampleTest = `{
  "mnemonic": "your mnemonic phrase here",
  "assetName": "Golden Token",
  "unitName": "GLD",
  "assetURL": "https://link.to/your/asset"
}`;

  return (
    <section id="testing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Testing Guide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Test your ALGONEST API endpoints using Postman
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Testing Steps</h3>
            <div className="space-y-6">
              {testingSteps.map((step) => (
                <div key={step.step} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="text-blue-600">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {step.title}
                      </h4>
                    </div>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Example Test: Create NFT</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-900 text-white p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-blue-600 px-2 py-1 rounded text-xs font-medium">POST</span>
                  <code className="text-sm">http://localhost:5000/api/nft/create-nft</code>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Request Body (JSON):</h4>
                <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-100">
                    <code>{exampleTest}</code>
                  </pre>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                Testing Tips
              </h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Start by generating an account and funding it with TestNet tokens</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Test each endpoint sequentially to understand the flow</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Save transaction IDs and asset IDs for follow-up operations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-blue-600 mt-1">•</span>
                  <span>Use the Algorand TestNet explorer to verify transactions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to start testing?
            </h3>
            <p className="text-gray-600 mb-6">
              Download Postman and start exploring the ALGONEST API
            </p>
            <a 
              href="https://www.postman.com/downloads/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
            >
              <span>Download Postman</span>
              <Zap size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;