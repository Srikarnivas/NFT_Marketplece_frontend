import React, { useState } from 'react';
import { Copy, Check, Code, ArrowRight, User, Coins, ArrowLeftRight, Settings, Snowflake, RotateCcw, Clock } from 'lucide-react';

const ApiReference = () => {
  const [copiedCode, setCopiedCode] = useState<{ [key: string]: boolean }>({});

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCode({ ...copiedCode, [key]: true });
    setTimeout(() => {
      setCopiedCode({ ...copiedCode, [key]: false });
    }, 2000);
  };

  const CodeBlock = ({ code, language = 'json', copyKey }: { code: string; language?: string; copyKey: string }) => (
    <div className="relative bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between bg-gray-800 px-4 py-2">
        <span className="text-xs text-gray-400 uppercase font-medium">{language}</span>
        <button
          onClick={() => copyToClipboard(code, copyKey)}
          className="p-1 hover:bg-gray-700 rounded transition-colors"
        >
          {copiedCode[copyKey] ? (
            <Check size={14} className="text-green-400" />
          ) : (
            <Copy size={14} className="text-gray-400" />
          )}
        </button>
      </div>
      <pre className="p-4 text-sm text-gray-100 overflow-x-auto">
        <code>{code}</code>
      </pre>
    </div>
  );

  const endpoints = [
    {
      id: 'generate-account',
      title: 'Generate Account',
      method: 'GET',
      endpoint: '/api/nft/generate-account',
      description: 'Generates a new Algorand TestNet account with mnemonic',
      icon: <User className="w-5 h-5" />,
      response: `{
  "address": "ABCDEFG....",
  "mnemonic": "artist zoo lemon..."
}`,
      note: "Use this address in the TestNet Dispenser: https://bank.testnet.algorand.network/"
    },
    {
      id: 'create-nft',
      title: 'Create NFT',
      method: 'POST',
      endpoint: '/api/nft/create-nft',
      description: 'Creates a single-unit (1 of 1) NFT using a funded Algorand wallet',
      icon: <Coins className="w-5 h-5" />,
      request: `{
  "mnemonic": "12-word mnemonic...",
  "assetName": "Dragon Art",
  "unitName": "DRGN",
  "assetURL": "https://gateway.pinata.cloud/ipfs/Qm..."
}`,
      response: `{
  "txId": "TXID123...",
  "assetId": 12345678
}`,
      note: "Requires ~0.2 ALGO in the sender account"
    },
    {
      id: 'optin',
      title: 'Opt-in to NFT',
      method: 'POST',
      endpoint: '/api/nft/optin',
      description: 'Prepares a receiver account to accept a specific NFT',
      icon: <ArrowRight className="w-5 h-5" />,
      request: `{
  "mnemonic": "receiver's mnemonic",
  "assetId": 12345678
}`,
      response: `{
  "message": "Opt-in successful",
  "txId": "..."
}`
    },
    {
      id: 'transfer',
      title: 'Transfer NFT',
      method: 'POST',
      endpoint: '/api/nft/transfer',
      description: 'Transfers an NFT to another account',
      icon: <ArrowLeftRight className="w-5 h-5" />,
      request: `{
  "mnemonic": "sender mnemonic",
  "assetId": 12345678,
  "receiver": "RECEIVER_ADDRESS",
  "amount": 1
}`,
      response: `{
  "message": "Transfer successful",
  "txId": "..."
}`
    },
    {
      id: 'reconfigure',
      title: 'Reconfigure NFT',
      method: 'POST',
      endpoint: '/api/nft/reconfigure',
      description: 'Updates asset roles (manager, reserve, freeze, clawback)',
      icon: <Settings className="w-5 h-5" />,
      request: `{
  "mnemonic": "creator mnemonic",
  "assetId": 12345678,
  "manager": "NEW_MANAGER_ADDRESS"
}`,
      response: `{
  "message": "Asset reconfigured",
  "txId": "..."
}`
    },
    {
      id: 'freeze',
      title: 'Freeze NFT',
      method: 'POST',
      endpoint: '/api/nft/freeze',
      description: "Freezes a user's NFT (they can't transfer it anymore)",
      icon: <Snowflake className="w-5 h-5" />,
      request: `{
  "mnemonic": "freeze admin mnemonic",
  "assetId": 12345678,
  "target": "FROZEN_USER_ADDRESS",
  "freeze": true
}`,
      response: `{
  "message": "Account frozen",
  "txId": "..."
}`
    },
    {
      id: 'clawback',
      title: 'Clawback NFT',
      method: 'POST',
      endpoint: '/api/nft/clawback',
      description: 'Forcefully retrieves an NFT from one account to another',
      icon: <RotateCcw className="w-5 h-5" />,
      request: `{
  "mnemonic": "clawback admin mnemonic",
  "assetId": 12345678,
  "revokeFrom": "VIOLATOR_ADDRESS",
  "receiver": "OWNER_ADDRESS",
  "amount": 1
}`,
      response: `{
  "message": "Clawback successful",
  "txId": "..."
}`
    },
    {
      id: 'countdown-clawback',
      title: 'Countdown Clawback',
      method: 'POST',
      endpoint: '/api/nft/countdown-clawback',
      description: 'Delays the clawback by N seconds. Useful for dispute periods',
      icon: <Clock className="w-5 h-5" />,
      request: `{
  "mnemonic": "clawback admin",
  "assetId": 12345678,
  "revokeFrom": "USER_A",
  "receiver": "USER_B",
  "amount": 1,
  "countdownSeconds": 10
}`,
      response: `{
  "message": "Countdown completed and asset clawed back."
}`
    }
  ];

  const getMethodColor = (method: string) => {
    return method === 'GET' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800';
  };

  return (
    <section id="api-reference" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            API Reference
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete documentation for all ALGONEST API endpoints
          </p>
        </div>

        <div className="space-y-12">
          {endpoints.map((endpoint, index) => (
            <div key={endpoint.id} className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <div className="text-blue-600">
                      {endpoint.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {index + 1}. {endpoint.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{endpoint.description}</p>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getMethodColor(endpoint.method)}`}>
                        {endpoint.method}
                      </span>
                      <code className="bg-gray-200 px-3 py-1 rounded font-mono text-sm">
                        {endpoint.endpoint}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {endpoint.request && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Request Body</h4>
                    <CodeBlock 
                      code={endpoint.request} 
                      copyKey={`${endpoint.id}-request`}
                    />
                  </div>
                )}
                
                <div className={endpoint.request ? '' : 'lg:col-span-2'}>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Response</h4>
                  <CodeBlock 
                    code={endpoint.response} 
                    copyKey={`${endpoint.id}-response`}
                  />
                </div>
              </div>

              {endpoint.note && (
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> {endpoint.note}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApiReference;