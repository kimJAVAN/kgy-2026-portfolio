'use client';

import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, Button } from '@/shared/ui';

const ROLES = ['Frontend Developer', 'Full-stack Engineer', 'UI/UX Enthusiast', 'Problem Solver'];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          } else {
            setDisplayText(displayText.slice(0, -1));
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <Section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="text-center space-y-8">
        {/* Glowing orb effect */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
        
        <div className="relative z-10">
          <p className="text-emerald-400 font-mono text-sm mb-4 animate-fade-in">
            &lt;hello_world /&gt;
          </p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Hi, I'm <span className="text-emerald-400">Geun Young</span>
          </h1>
          
          <div className="h-12 mb-8">
            <p className="text-2xl md:text-3xl text-gray-400 font-mono">
              {displayText}
              <span className="animate-blink">|</span>
            </p>
          </div>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-12">
            Crafting elegant solutions to complex problems. Passionate about clean code, 
            innovative design, and building experiences that matter.
          </p>
          
          <div className="flex gap-4 justify-center">
            <Button onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
            <Button 
              variant="secondary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-emerald-400 animate-bounce cursor-pointer"
        >
          <ChevronDown className="w-8 h-8" />
        </a>
      </div>
    </Section>
  );
};