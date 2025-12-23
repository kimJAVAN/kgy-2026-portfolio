import React, { useState } from 'react';
import { Code, Layers, Database, Wrench } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');

  const skillCategories = {
    frontend: {
      icon: <Code className="w-6 h-6" />,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'JavaScript', level: 93 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    backend: {
      icon: <Database className="w-6 h-6" />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 82 },
        { name: 'MongoDB', level: 80 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'REST API', level: 87 },
      ]
    },
    tools: {
      icon: <Wrench className="w-6 h-6" />,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'Webpack', level: 80 },
        { name: 'Figma', level: 85 },
        { name: 'VS Code', level: 95 },
      ]
    },
    architecture: {
      icon: <Layers className="w-6 h-6" />,
      title: 'Architecture',
      skills: [
        { name: 'Clean Architecture', level: 82 },
        { name: 'Microservices', level: 75 },
        { name: 'State Management', level: 88 },
        { name: 'Performance Optimization', level: 85 },
      ]
    }
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400 font-mono">&gt; </span>
            <span className="glow-text">Technical Skills</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            // Mastering the art of code
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-green-500/20 text-green-400 border border-green-500'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-green-500/50'
              }`}
            >
              {category.icon}
              <span>{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-green-500/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-mono">{skill.name}</span>
                <span className="text-green-400 font-mono text-sm">{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-green-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 p-6 bg-green-500/5 border border-green-500/20 rounded-lg">
          <p className="text-gray-400 font-mono text-sm">
            <span className="text-green-400">$</span> cat skills.txt
          </p>
          <p className="text-gray-300 mt-2">
            Continuously learning and adapting to new technologies. 
            Passionate about clean code, performance optimization, and user experience.
          </p>
        </div>
      </div>
    </section>
  );
};