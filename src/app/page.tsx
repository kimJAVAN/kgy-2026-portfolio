'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

import { Navigation } from '@/widgets/Navigation/Navigation';
import { Hero } from '@/widgets/Hero/Hero';
import { About } from '@/widgets/About/About';
import { Projects } from '@/widgets/Projects/Projects';
import { Skills } from '@/widgets/Skills/Skills';
import { Contact } from '@/widgets/Contact/Contact';
import { Footer } from '@/widgets/Footer/Footer';

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const section = searchParams.get('scrollTo');
    if (!section) return;

    requestAnimationFrame(() => {
      const el = document.getElementById(section);
      el?.scrollIntoView({ behavior: 'smooth' });
    });
  }, [searchParams]);

  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
