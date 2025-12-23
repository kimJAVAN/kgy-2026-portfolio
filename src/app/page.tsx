"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader } from "@/shared/ui/Loader";
import { Header } from "@/widgets/Header/ui/Header";
import { Hero } from "@/widgets/Hero/ui/Hero";
import { Skills } from "@/widgets/Skills/ui/Skills";
import { ProjectGrid } from "@/widgets/ProjectGrid/ui/ProjectGrid";
import { Contact } from "@/widgets/Contact/ui/Contact";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 마우스 추적 (저사양 배려: 가벼운 상태 업데이트)
  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      {/* 1. 로딩 화면 */}
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* 2. 메인 콘텐츠 */}
      {!isLoading && (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative min-h-screen"
        >
          {/* 커스텀 커서 (선택 사항) */}
          <div 
            className="fixed w-6 h-6 border border-green-500 pointer-events-none z-[1000] hidden md:block transition-transform duration-75 ease-out"
            style={{ left: mousePos.x, top: mousePos.y, transform: 'translate(-50%, -50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-green-500"></div>
          </div>

          <main className="max-w-6xl mx-auto p-4 md:p-12 relative z-10">
            <Header />
            <div className="space-y-32">
              <Hero />
              <div className="grid lg:grid-cols-3 gap-16 items-start">
                <div className="lg:col-span-1">
                  <Skills />
                </div>
                <div className="lg:col-span-2">
                  <h2 className="text-xs font-bold mb-6 text-green-800 tracking-[0.3em]">-- ARCHIVED_FILES --</h2>
                  <ProjectGrid />
                </div>
              </div>
              <Contact />
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
}