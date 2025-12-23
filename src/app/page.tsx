"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 쪼갠 컴포넌트들 Import
import { Loader } from "@/shared/ui/Loader";
import { Header } from "@/widgets/Header/ui/Header";
import { Skills } from "@/widgets/Skills/ui/Skills";
import { ProjectCard } from "@/widgets/ProjectGrid/ui/ProjectCard";
import { Contact } from "@/widgets/Contact/ui/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
    }
  };

  const itemVars = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#020603] selection:bg-emerald-500/30 selection:text-white" style={{
      backgroundImage: 'linear-gradient(to right, rgba(16, 185, 129, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.03) 1px, transparent 1px)',
      backgroundSize: '50px 50px'
    }}>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');
        body { font-family: 'Share Tech Mono', monospace; overflow-x: hidden; }
        @keyframes scan-line {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(1000%); }
        }
      `}</style>
      
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {!isLoading && (
        <motion.div 
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 md:px-12 py-12"
        >
          <Header />

          {/* Hero Section */}
          <motion.section variants={itemVars} className="py-32 mb-32">
            <h1 className="text-7xl md:text-[10rem] font-black italic tracking-tighter mb-12 text-emerald-500 leading-none drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]">
              KGY<span className="text-slate-300">_ARCHIVE</span>
            </h1>
            <p className="text-xl md:text-2xl text-emerald-700/80 max-w-4xl border-l-4 border-emerald-600 pl-10 leading-relaxed font-mono">
              프론트엔드 아키텍처와 시각적 인터랙션을 설계합니다. <br/>
              <span className="text-emerald-500 bg-emerald-950/20 px-2 py-1">시스템의 효율성과 미학을 동시에 추구합니다.</span>
            </p>
          </motion.section>

          {/* Skills & Projects */}
          <section className="grid lg:grid-cols-12 gap-24 mb-32">
            <motion.div variants={itemVars} className="lg:col-span-4">
              <Skills />
            </motion.div>

            <motion.div variants={itemVars} className="lg:col-span-8 space-y-16">
              <h2 className="text-[10px] font-bold text-emerald-700 tracking-[0.5em] mb-12 uppercase font-mono italic">-- Selected_Nodes --</h2>
              <div className="grid gap-16">
                <ProjectCard uuid="A1" title="CYBER_SHELL" desc="Next.js 기반의 고성능 대시보드 인터페이스. 실시간 데이터 시각화와 반응형 UI/UX를 구현했습니다." />
                <ProjectCard uuid="B2" title="GHOST_PROTOCOL" desc="Firebase 리얼타임 통신 기반 데이터 동기화 시스템. 멀티 디바이스 간 seamless한 상태 관리를 제공합니다." />
              </div>
            </motion.div>
          </section>

          <motion.div variants={itemVars}>
            <Contact />
          </motion.div>

          <footer className="text-center py-32 text-[10px] tracking-[1.5em] text-emerald-900/50 font-mono">
            END_OF_TRANSMISSION
          </footer>
        </motion.div>
      )}
    </div>
  );
}