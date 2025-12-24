import { Navigation } from '@/widgets/Navigation/Navigation';
import { Hero } from '@/widgets/Hero/Hero';
import { About } from '@/widgets/About/About';
import { Projects } from '@/widgets/Projects/Projects';
import { Skills } from '@/widgets/Skills/Skills';
import { Contact } from '@/widgets/Contact/Contact';

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
      
      <footer className="bg-black/80 border-t border-emerald-500/20 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 font-mono text-sm">
            © 2025 Kim Geun Young. Built with Next.js, TypeScript & Tailwind CSS
          </p>
          <p className="text-emerald-400/50 font-mono text-xs mt-2">
            &lt;/&gt; with ❤️
          </p>
        </div>
      </footer>
    </>
  );
}