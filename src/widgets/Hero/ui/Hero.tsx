"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronRight, Terminal, Code2 } from 'lucide-react';

export const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Frontend Developer";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-32">
      <div className="max-w-7xl mx-auto w-full">
        {/* 전체 컨테이너 간격 조정 */}
        <div className="flex flex-col gap-10">
          
          {/* Terminal-style intro */}
          <div className="font-mono text-green-400 text-sm mb-4">
            <p><span className="text-gray-500">user@portfolio:~$</span> cat intro.txt</p>
          </div>

          {/* Main Title Area */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
              <span className="text-white">안녕하세요,</span>
              <br />
              <div className="mt-2">
                <span className="glow-text">김근영</span>
                <span className="text-white">입니다</span>
              </div>
            </h1>
            
            <div className="flex items-center space-x-3 text-2xl md:text-4xl pt-2">
              <ChevronRight className="text-green-400 w-8 h-8" />
              <span className="text-green-400 font-mono tracking-tighter">
                {typedText}
                <span className="terminal-cursor ml-1">|</span>
              </span>
            </div>
          </div>

          {/* Description & Badge Area */}
          <div className="max-w-2xl space-y-8 flex flex-col gap-5">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
              사용자 경험을 최우선으로 생각하며, 
              <span className="text-green-400 font-medium"> 클린한 코드</span>와 
              <span className="text-cyan-400 font-medium"> 혁신적인 솔루션</span>을 통해 
              웹의 미래를 만들어갑니다.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-3 bg-gray-900/40 border border-gray-800 px-5 py-2.5 rounded-full">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="text-sm font-mono">3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-3 bg-gray-900/40 border border-gray-800 px-5 py-2.5 rounded-full">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm font-mono">20+ Projects</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-6 pt-6">
            <a
              href="#projects"
              className="px-30 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-xl transition-all duration-300 flex items-center space-x-2 group shadow-lg shadow-green-500/20"
            >
              <span>프로젝트 보기</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-10 py-4 bg-transparent border-2 border-gray-700 text-gray-300 hover:border-green-500 hover:text-green-400 font-bold rounded-xl transition-all duration-300"
            >
              연락하기
            </a>
          </div>

          {/* Stats Section - 간격을 더 넓게 벌림 */}
          <div className="pt-24">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-4xl">
              {[
                { label: 'Years Experience', value: '3+' },
                { label: 'Projects Completed', value: '20+' },
                { label: 'Technologies', value: '15+' },
                { label: 'Coffee Consumed', value: '∞' },
              ].map((stat) => (
                <div key={stat.label} className="space-y-2">
                  <div className="text-4xl font-bold text-green-400 font-mono">{stat.value}</div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};