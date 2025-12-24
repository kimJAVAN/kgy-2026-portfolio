import { Navigation } from '@/widgets/Navigation/Navigation';
import { Hero } from '@/widgets/Hero/Hero';
import { About } from '@/widgets/About/About';
import { Projects } from '@/widgets/Projects/Projects';
import { Skills } from '@/widgets/Skills/Skills';
import { Contact } from '@/widgets/Contact/Contact';
import { Footer } from '@/widgets/Footer/Footer';

export default function Home() {
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