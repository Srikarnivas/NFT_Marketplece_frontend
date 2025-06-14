import React, { useState } from 'react';
import { Copy, Check, Terminal, Download, Play } from 'lucide-react';

const GettingStarted = () => {
  const [copiedSteps, setCopiedSteps] = useState<{ [key: number]: boolean }>({});

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedSteps({ ...copiedSteps, [stepIndex]: true });
    setTimeout(() => {
      setCopiedSteps({ ...copiedSteps, [stepIndex]: false });
    }, 2000);
  };

  const installationSteps = [
    {
      title: "Clone the Repository",
      command: "git clone https://github.com/YOUR_USERNAME/algonest-nft-hub.git",
      description: "Get the ALGONEST source code from GitHub"
    },
    {
      title: "Navigate to Directory",
      command: "cd algonest-nft-hub",
      description: "Change to the project directory"
    },
    {
      title: "Install Dependencies",
      command: "npm install",
      description: "Install all required Node.js packages"
    },
    {
      title: "Start the Server",
      command: "node server.js",
      description: "Launch the API server on localhost"
    }
  ];

  const prerequisites = [
    { name: "Node.js", version: "v16+", icon: "🟢" },
    { name: "npm/yarn", version: "Latest", icon: "📦" },
    { name: "Postman", version: "For testing", icon: "🚀" }
  ];

  return (
    <section id="getting-started" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Getting Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Set up ALGONEST in minutes and start building your NFT marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Download className="w-6 h-6 mr-2 text-blue-600" />
              Prerequisites
            </h3>
            <div className="space-y-4">
              {prerequisites.map((req, index) => (
                <div key={index} className="bg-white rounded-lg p-4 border border-gray-200">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{req.icon}</span>
                    <div>
                      <div className="font-semibold text-gray-900">{req.name}</div>
                      <div className="text-sm text-gray-600">{req.version}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Terminal className="w-6 h-6 mr-2 text-blue-600" />
              Installation
            </h3>
            <div className="space-y-4">
              {installationSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-900">
                        {index + 1}. {step.title}
                      </h4>
                      <span className="text-sm text-gray-500">{step.description}</span>
                    </div>
                  </div>
                  <div className="bg-gray-900 text-gray-100 p-4 relative">
                    <div className="flex items-center justify-between">
                      <code className="text-sm font-mono">{step.command}</code>
                      <button
                        onClick={() => copyToClipboard(step.command, index)}
                        className="ml-2 p-2 hover:bg-gray-700 rounded transition-colors"
                      >
                        {copiedSteps[index] ? (
                          <Check size={16} className="text-green-400" />
                        ) : (
                          <Copy size={16} className="text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
            <Play className="w-6 h-6 mr-2 text-green-600" />
            Root API URL
          </h3>
          <p className="text-gray-600 mb-4">
            Once your server is running, all endpoints will be available under:
          </p>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <code className="text-lg font-mono text-blue-600">
              https://your-deployment-url.com/api/nft
            </code>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            For local development, this will be: <code className="bg-gray-200 px-2 py-1 rounded">http://localhost:5000/api/nft</code>
          </p>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;