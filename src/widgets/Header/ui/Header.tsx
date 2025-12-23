import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'skills', 'projects', 'contact'];

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${
      isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-green-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Terminal className="w-6 h-6 text-green-400" />
          <span className="font-mono text-green-400 text-lg">root@geun-young:~$</span>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 font-mono text-sm">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-gray-400 hover:text-green-400 transition-colors relative group"
            >
              <span className="relative">
                {`<${item}/>`}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300" />
              </span>
            </a>
          ))}
        </nav>

        {/* Social Links */}
        <div className="hidden md:flex space-x-4">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-green-400"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-lg border-b border-green-500/20">
          <nav className="flex flex-col space-y-4 px-6 py-4 font-mono text-sm">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-400 hover:text-green-400 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {`<${item}/>`}
              </a>
            ))}
            <div className="flex space-x-4 pt-4 border-t border-green-500/20">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-400 hover:text-green-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                 className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};