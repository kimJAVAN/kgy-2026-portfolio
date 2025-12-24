'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal } from 'lucide-react';
import { NAV_ITEMS } from '@/shared/constants/data.ts';
import { Container } from '@/shared/ui/Container';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isExternalLink = (href: string) => href.startsWith('#');

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/80 backdrop-blur-md border-b border-emerald-500/20'
          : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors">
            <Terminal className="w-6 h-6" />
            <span className="font-mono font-bold text-lg">dev.portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.href}
                  href={item.href}
                  className="font-mono text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-mono text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-emerald-500/20">
            {NAV_ITEMS.map((item) => (
              isExternalLink(item.href) ? (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-mono text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block py-3 font-mono text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </Container>
    </nav>
  );
};