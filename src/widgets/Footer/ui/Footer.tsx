"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 py-12 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="font-mono text-sm text-gray-400">
            <span className="text-green-400">©</span> 2024 김근영. All rights reserved.
          </div>
          <div className="font-mono text-sm text-gray-400">
            Built with <span className="text-red-500">♥</span> using Next.js & TypeScript
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;