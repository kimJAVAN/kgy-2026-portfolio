'use client';

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Section, Card, Button } from '@/shared/ui';
import { PROJECTS } from '@/shared/constants/data';
import { ProjectFilter } from '@/features/project-filter/ProjectFilter';

export const Projects = () => {
  const [filter, setFilter] = useState('All');

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'All') return true;
    if (filter === 'Featured') return project.featured;
    return project.tags.some(tag => tag.toLowerCase().includes(filter.toLowerCase()));
  });

  return (
    <Section id="projects">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-emerald-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            A selection of projects that showcase my skills and passion for development
          </p>
        </div>

        <ProjectFilter onFilterChange={setFilter} />

        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group">
              <div className="space-y-4">
                {/* Project Image Placeholder */}
                <div className="w-full h-48 bg-gradient-to-br from-emerald-500/20 to-emerald-900/20 rounded-lg flex items-center justify-center group-hover:from-emerald-500/30 group-hover:to-emerald-900/30 transition-all">
                  <div className="text-emerald-400/30 text-6xl font-mono">
                    {'</>'}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-mono group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded text-emerald-400 text-sm font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
};