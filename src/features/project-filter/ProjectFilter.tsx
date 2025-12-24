'use client';

import { useState } from 'react';

interface ProjectFilterProps {
  onFilterChange: (filter: string) => void;
}

const FILTERS = ['All', 'Frontend', 'Backend', 'Full-stack', 'Featured'];

export const ProjectFilter = ({ onFilterChange }: ProjectFilterProps) => {
  const [active, setActive] = useState('All');

  const handleClick = (filter: string) => {
    setActive(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          onClick={() => handleClick(filter)}
          className={`
            px-5 py-2 rounded-full font-mono text-sm transition-all duration-300
            ${
              active === filter
                ? 'bg-emerald-500 text-black shadow-[0_0_20px_rgba(16,185,129,0.5)]'
                : 'bg-black/40 text-emerald-400 border border-emerald-500/30 hover:border-emerald-500/50'
            }
          `}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};