'use client';

import { Section } from '@/shared/ui/Section';
import { Card } from '@/shared/ui/Card';
import { SKILLS } from '@/shared/constants/data.ts';

const CATEGORIES = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
  other: 'Other',
};

export const Skills = () => {
  const groupedSkills = SKILLS.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof SKILLS>);

  return (
    <Section id="skills">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technical <span className="text-emerald-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {Object.entries(groupedSkills).map(([category, skills]) => (
            <Card key={category}>
              <h3 className="text-xl font-bold text-emerald-400 mb-6 font-mono">
                {CATEGORIES[category as keyof typeof CATEGORIES]}
              </h3>
              <div className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-mono text-sm">
                        {skill.name}
                      </span>
                      <span className="text-emerald-400 font-mono text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-emerald-600 to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            Always learning and exploring new technologies. Currently diving deep into{' '}
            <span className="text-emerald-400 font-mono">Web3</span>,{' '}
            <span className="text-emerald-400 font-mono">AI/ML</span>, and{' '}
            <span className="text-emerald-400 font-mono">Cloud Architecture</span>
          </p>
        </Card>
      </div>
    </Section>
  );
};