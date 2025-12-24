"use client";

import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-16 space-y-6">
          <div className="flex items-center space-x-2 text-green-500 font-mono text-sm tracking-widest uppercase">
            <span className="h-px w-8 bg-green-500/50"></span>
            <span>Contact</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Get In </span>
            <span className="glow-text">Touch</span>
          </h2>
          
          <p className="text-gray-500 font-mono text-lg leading-relaxed max-w-xl">
            // Let's collaborate on something amazing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
              <h3 className="text-xl font-bold text-green-400 mb-8 font-mono">
                $ contact --info
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Email</p>
                    <a href="mailto:geun-young@example.com" className="text-white hover:text-green-400 transition-colors">
                      geun-young@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-green-400 mt-1" />
                  <div>
                    <p className="text-gray-400 text-sm mb-2">Location</p>
                    <p className="text-white">Seoul, South Korea</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/5 border border-green-500/20 rounded-lg p-8">
              <p className="text-gray-300 font-mono text-sm leading-relaxed space-y-2">
                <span className="block"><span className="text-green-400">&gt;</span> Currently open to new opportunities</span>
                <span className="block"><span className="text-green-400">&gt;</span> Response time: 24-48 hours</span>
                <span className="block"><span className="text-green-400">&gt;</span> Available for: freelance, full-time</span>
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-3">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-mono mb-3">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-mono mb-3">
                  Subject
                </label>
                <input
                  type="text"
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-mono mb-3">
                  Message
                </label>
                <textarea
                  rows={5}
                  className="w-full bg-black/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-black font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 group mt-8"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};