'use client';

import { Code, Zap, Users } from 'lucide-react';
import { Section } from '@/shared/ui/Section';
import { Card } from '@/shared/ui/Card';

const FEATURES = [
  {
    icon: Code,
    title: '클린 코드',
    description:
      '유지보수와 확장이 쉬운 구조를 고민하며\n읽기 좋은 코드를 작성합니다.',
  },
  {
    icon: Zap,
    title: '성능 최적화',
    description:
      '품질을 해치지 않으면서도\n빠르고 효율적인 화면을 구현합니다.',
  },
  {
    icon: Users,
    title: '협업',
    description:
      '팀과의 원활한 소통을 통해\n복잡한 요구사항을 명확하게 풀어냅니다.',
  },
];

export const About = () => {
  return (
    <Section id="about">
      <div className="space-y-12">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="text-emerald-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            사용자 경험을 중심으로 문제를 해결하는 프론트엔드 개발자입니다.
            <br />
            <br/>
            현대적인 웹 기술을 기반으로,<br/> 아이디어를 실제로 동작하는 화면과 의미 있는 경험으로 구현합니다.
          </p>
        </div>

        {/* Features */}
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
                  <p className="text-gray-400 whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* My Journey */}
        <Card className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-emerald-400 font-mono">
              &gt; My Journey
            </h3>
            <p className="text-gray-400 leading-relaxed">
              문제를 해결하고
         
              실제로 사용되는 화면을 만드는 과정에
      
              매력을 느껴 개발을 시작했습니다.

               다양한 프로젝트를 경험하며,
 
              단순히 동작하는 코드가 아닌
       
              구조적이고 유지보수 가능한 구현의
       
              중요성을 깨닫게 되었습니다.

              새로운 기술을 탐구하고,
       
              작업한 내용을 기록하며 공유하는 과정을 통해
         
              더 나은 사용자 경험과 팀 생산성을 만드는
       
              개발자로 성장하고 있습니다.
            </p>

          </div>
        </Card>
      </div>
    </Section>
  );
};
