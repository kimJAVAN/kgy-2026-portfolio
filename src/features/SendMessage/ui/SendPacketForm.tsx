import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface SendStatus {
  type: 'idle' | 'sending' | 'success' | 'error';
  message: string;
}

export const SendPacketForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState<SendStatus>({
    type: 'idle',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setStatus({ type: 'sending', message: 'Sending packet...' });
    
    // Simulate API call
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus({ 
          type: 'success', 
          message: 'Message sent successfully! I\'ll get back to you soon.' 
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus({ 
          type: 'error', 
          message: 'Please fill in all fields.' 
        });
      }
      
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 5000);
    }, 2000);
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-green-400 font-mono mb-2">
          $ send --packet
        </h3>
        <p className="text-gray-400 text-sm">
          Transmit your message through the network
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-400 text-sm font-mono mb-2">
            <span className="text-green-400">--name</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors font-mono"
            placeholder="Enter your name"
            disabled={status.type === 'sending'}
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-mono mb-2">
            <span className="text-green-400">--email</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors font-mono"
            placeholder="your@email.com"
            disabled={status.type === 'sending'}
          />
        </div>

        <div>
          <label className="block text-gray-400 text-sm font-mono mb-2">
            <span className="text-green-400">--message</span>
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors resize-none font-mono"
            placeholder="Your message here..."
            disabled={status.type === 'sending'}
          />
        </div>

        {/* Status Messages */}
        {status.type !== 'idle' && (
          <div className={`flex items-center space-x-2 p-4 rounded-lg ${
            status.type === 'success' ? 'bg-green-500/10 border border-green-500/30' :
            status.type === 'error' ? 'bg-red-500/10 border border-red-500/30' :
            'bg-yellow-500/10 border border-yellow-500/30'
          }`}>
            {status.type === 'success' && <CheckCircle className="w-5 h-5 text-green-400" />}
            {status.type === 'error' && <XCircle className="w-5 h-5 text-red-400" />}
            {status.type === 'sending' && (
              <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            )}
            <span className={`text-sm font-mono ${
              status.type === 'success' ? 'text-green-400' :
              status.type === 'error' ? 'text-red-400' :
              'text-yellow-400'
            }`}>
              {status.message}
            </span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === 'sending'}
          className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>TRANSMIT</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
};