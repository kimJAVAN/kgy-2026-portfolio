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
    <section id="about" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {/* Terminal-style intro */}
          <div className="font-mono text-green-400 text-sm mb-8">
            <p><span className="text-gray-500">user@portfolio:~$</span> cat intro.txt</p>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="text-white">안녕하세요,</span>
              <br />
              <span className="glow-text">김근영</span>
              <span className="text-white">입니다</span>
            </h1>
            
            <div className="flex items-center space-x-2 text-2xl md:text-3xl">
              <ChevronRight className="text-green-400" />
              <span className="text-green-400 font-mono">
                {typedText}
                <span className="terminal-cursor">|</span>
              </span>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl space-y-4">
            <p className="text-gray-400 text-lg leading-relaxed">
              사용자 경험을 최우선으로 생각하며, 
              <span className="text-green-400"> 클린한 코드</span>와 
              <span className="text-cyan-400"> 혁신적인 솔루션</span>을 통해 
              웹의 미래를 만들어갑니다.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
                <Terminal className="w-5 h-5 text-green-400" />
                <span className="text-sm">3+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2 bg-gray-900/50 border border-gray-800 px-4 py-2 rounded-lg">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">20+ Projects</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-8">
            <a
              href="#projects"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-bold rounded-lg transition-all duration-300 flex items-center space-x-2 group"
            >
              <span>프로젝트 보기</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 hover:bg-green-500/10 font-bold rounded-lg transition-all duration-300"
            >
              연락하기
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 max-w-3xl">
            {[
              { label: 'Years Experience', value: '3+' },
              { label: 'Projects Completed', value: '20+' },
              { label: 'Technologies', value: '15+' },
              { label: 'Coffee Consumed', value: '∞' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};