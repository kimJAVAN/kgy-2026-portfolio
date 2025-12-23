"use client";
import { motion } from "framer-motion";

export const Hero = () => (
  <section className="py-20">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
      <div className="text-xs text-green-800">ID: USER_ALPHA_01</div>
      <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic">
        Creative <span className="text-white bg-green-600 px-2 not-italic">Developer</span>
      </h1>
      <p className="text-green-700 max-w-xl text-lg leading-tight">
        Next.js 아키텍처와 시각적 인터랙션에 집착합니다. 시스템의 효율성과 아름다움 사이의 균형을 찾습니다.
      </p>
    </motion.div>
  </section>
);