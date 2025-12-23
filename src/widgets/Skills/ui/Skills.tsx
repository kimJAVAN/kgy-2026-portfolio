"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Layers, Database, Wrench, ChevronRight } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

interface CategoryData {
  icon: React.ReactNode;
  title: string;
  skills: Skill[];
}

export const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('frontend');

  const skillCategories: Record<string, CategoryData> = {
    frontend: {
      icon: <Code className="w-5 h-5" />,
      title: 'Frontend',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'JavaScript', level: 93 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    backend: {
      icon: <Database className="w-5 h-5" />,
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 60 },
        { name: 'Express', level: 60 },
        { name: 'REST API', level: 90 },
      ]
    },
    tools: {
      icon: <Wrench className="w-5 h-5" />,
      title: 'Tools',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 60 },
        { name: 'Figma', level: 95 },
        { name: 'VS Code', level: 95 },
      ]
    },
    architecture: {
      icon: <Layers className="w-5 h-5" />,
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
    <section id="skills" className="min-h-screen py-32 px-6 flex flex-col justify-center items-center">
      <div className="max-w-7xl w-full mx-auto flex flex-col gap-10">
        
        {/* Header Section */}
        <div className="mb-16 space-y-4 flex flex-col gap-5">
          <div className="flex items-center space-x-2 text-green-500 font-mono text-sm tracking-widest uppercase">
            <span className="h-px w-8 bg-green-500/50"></span>
            <span>Expertise Area</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-white">Technical </span>
            <span className="glow-text text-white">Skills</span>
          </h2>
          <p className="text-gray-500 font-mono text-lg max-w-xl leading-relaxed">
            // 다양한 기술 스택을 활용하여 확장 가능하고 고성능의 웹 서비스를 구축합니다.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 mb-16">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`group flex items-center gap-3 space-x-3 px-8 py-4 rounded-xl font-mono text-sm transition-all duration-500 cursor-pointer border ${
                activeCategory === key
                  ? 'bg-green-500/10 text-green-400 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.15)]'
                  : 'bg-gray-900/40 text-gray-500 border-gray-800 hover:border-gray-600 hover:text-gray-300'
              }`}
            >
              <span className={`transition-transform duration-300 ${activeCategory === key ? 'scale-110' : 'opacity-50 group-hover:opacity-100'}`}>
                {category.icon}
              </span>
              <span className="uppercase tracking-widest">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Skills Grid with Animation */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode='wait'>
            {skillCategories[activeCategory].skills.map((skill, index) => (
          <motion.div
                key={`${activeCategory}-${skill.name}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                // 부모: items-center를 추가하여 자식을 가로 중앙으로 정렬
                className="relative bg-gray-900/30 border border-gray-800/60 rounded-2xl p-10 min-h-[100px] flex flex-col justify-center items-center hover:border-green-500/40 hover:bg-gray-900/50 transition-all duration-500 group overflow-hidden"
              >
                {/* 배경 Glow 효과 */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-green-500/5 blur-3xl rounded-full group-hover:bg-green-500/10 transition-colors duration-500" />
                
                {/* 자식: w-[90%]와 mx-auto를 사용하여 내부 콘텐츠를 중앙에 배치 */}
                <div className="relative z-10 w-[90%] mx-auto flex flex-col justify-center">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-gray-500 text-xs font-mono mb-1 tracking-tighter">SKILL_NAME</div>
                      <div className="text-xl font-bold text-white tracking-wide group-hover:text-green-400 transition-colors">
                        {skill.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-500 font-mono text-2xl font-black italic">
                        {skill.level}<span className="text-xs ml-1">%</span>
                      </div>
                    </div>
                  </div>

                  {/* 프로그레스 바 영역 (90% 너비 안에 꽉 차게 들어감) */}
                  <div className="relative w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.5, ease: "circOut" }}
                      className="absolute h-full bg-gradient-to-r from-green-600 via-green-400 to-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer Note */}
        <div className="mt-20 p-8 bg-gradient-to-r from-gray-900/40 to-transparent border-l-2 border-green-500 rounded-r-2xl">
          <div className="flex items-center space-x-2 text-green-400 font-mono text-sm mb-3">
            <span className="animate-pulse">●</span>
            <span>SYSTEM_STATUS: CONTINUOUS_LEARNING</span>
          </div>
          <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-3xl">
            새로운 기술을 습득하는 것은 단순히 도구를 늘리는 것이 아니라, 문제를 해결하는 더 나은 관점을 갖는 것이라 믿습니다. 
            클린 코드와 최적화된 사용자 경험을 향해 끊임없이 정진합니다.
          </p>
        </div>
      </div>
    </section>
  );
};