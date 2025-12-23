'use client';

import React, { useState } from 'react';

import { Loader } from '@/shared/ui/Loader';
import { Header } from '@/widgets/Header/ui/Header';
import { Skills } from '@/widgets/Skills/ui/Skills';
import { ProjectGrid } from '@/widgets/ProjectGrid/ui/ProjectCard';
import { Contact } from '@/widgets/Contact/ui/Contact';
import { Hero } from '@/widgets/Hero/ui/Hero';
import Footer from '@/widgets/Footer/ui/Footer';

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
      <Footer/>
    </main>
  );
}