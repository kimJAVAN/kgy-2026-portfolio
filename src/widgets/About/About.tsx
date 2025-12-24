'use client';

import { Code, Zap, Users } from 'lucide-react';
import { Section } from '@/shared/ui/Section';
import { Card } from '@/shared/ui/Card';

const FEATURES = [
  {
    icon: Code,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and well-documented code is my priority.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and efficiency without compromising quality.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    description: 'Working effectively in teams and communicating complex ideas clearly.',
  },
];

export const About = () => {
  return (
    <Section id="about">
      <div className="space-y-12">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            I'm a passionate developer with a strong focus on creating innovative web solutions. 
            With years of experience in modern technologies, I transform ideas into reality through 
            code and creativity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title}>
                <div className="text-center space-y-4">
                  <div className="inline-flex p-3 bg-emerald-500/10 rounded-lg">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white font-mono">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400 font-mono">
              &gt; My Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Started coding at age 15, fell in love with problem-solving and building things that matter. 
              Over the years, I've worked on diverse projects ranging from small startups to enterprise applications. 
              Every line of code I write is an opportunity to learn something new and push the boundaries of what's possible.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, 
              or sharing knowledge with the developer community.
            </p>
          </div>
        </Card>
      </div>
    </Section>
  );
};