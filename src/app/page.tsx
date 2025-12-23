'use client';

import React, { useState } from 'react';

import { Loader } from '@/shared/ui/Loader';
import { Header } from '@/widgets/Header/ui/Header';
import { Skills } from '@/widgets/Skills/ui/Skills';
import { ProjectGrid } from '@/widgets/ProjectGrid/ui/ProjectCard';
import { Contact } from '@/widgets/Contact/ui/Contact';
import { Hero } from '@/widgets/Hero/ui/Hero';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    // Loader의 프롭명은 Loader 파일의 정의에 따라 onLoadingComplete 혹은 onComplete로 맞춰주세요
    return <Loader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Grid Background */}
      <div className="grid-background" />
      <div className="scanline" />
      
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Skills Section */}
      <Skills />

      {/* Projects Section */}
      <ProjectGrid />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
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
    </main>
  );
}