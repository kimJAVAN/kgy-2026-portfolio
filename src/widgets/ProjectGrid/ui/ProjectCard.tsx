"use client";

import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 group">
      <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-6xl font-mono text-green-500/20">{'</>'}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/10 transition-all duration-300" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-mono rounded border border-green-500/30"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              <Github className="w-4 h-4" />
              <span>Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export const ProjectGrid: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 2,
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI with natural language processing capabilities.',
      tags: ['Next.js', 'TypeScript', 'OpenAI', 'WebSocket'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 3,
      title: 'Task Management System',
      description: 'Collaborative task management tool with drag-and-drop interface and team synchronization.',
      tags: ['React', 'Redux', 'Firebase', 'Tailwind'],
      githubUrl: 'https://github.com',
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description: 'Content management system for portfolios with custom themes and analytics dashboard.',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
    {
      id: 5,
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard aggregating data from multiple social media platforms.',
      tags: ['React', 'Chart.js', 'Express', 'OAuth'],
      githubUrl: 'https://github.com',
    },
    {
      id: 6,
      title: 'Code Snippet Manager',
      description: 'Developer tool for organizing and sharing code snippets with syntax highlighting.',
      tags: ['Vue.js', 'Node.js', 'MongoDB', 'Prism'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-green-400 font-mono">&gt; </span>
            <span className="glow-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm">
            // Building the future, one commit at a time
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};