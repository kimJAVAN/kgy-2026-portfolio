import type { Metadata } from 'next';
import { JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { CursorEffect } from '@/features/cursor-effect/CursorEffect';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Developer Portfolio | Frontend Engineer',
  description: 'Professional portfolio showcasing modern web development projects and skills',
  keywords: ['developer', 'frontend', 'portfolio', 'react', 'nextjs', 'typescript'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <CursorEffect />
        <div className="matrix-bg min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}