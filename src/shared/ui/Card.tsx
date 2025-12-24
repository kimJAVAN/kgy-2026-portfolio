import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = ({ children, className = '', hover = true }: CardProps) => {
  return (
    <div
      className={`
        bg-black/40 backdrop-blur-sm border border-emerald-500/20 rounded-lg p-6
        ${hover ? 'hover:border-emerald-500/50 hover:shadow-[0_0_30px_rgba(16,185,129,0.1)] transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};