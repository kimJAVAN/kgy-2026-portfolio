"use client";
import { motion } from "framer-motion";

export const ProjectCard = ({ uuid, title, desc }: { uuid: string, title: string, desc: string }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.01, y: -8 }}
      transition={{ duration: 0.3 }}
      className="relative p-10 bg-zinc-950/50 group cursor-pointer border border-emerald-900/20 hover:border-emerald-600/50 transition-all duration-500 font-mono"
    >
      <div className="absolute top-0 left-0 w-3 h-3 border-l-2 border-t-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 border-r-2 border-b-2 border-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>

      <div className="flex justify-between items-start mb-8 text-[10px] text-emerald-700 font-bold tracking-[0.2em]">
        <span>NODE_0x{uuid}</span>
        <div className="w-2 h-2 bg-emerald-500 group-hover:animate-ping"></div>
      </div>

      <h3 className="text-4xl font-black text-slate-100 mb-6 group-hover:text-emerald-400 transition-colors duration-300 italic">
        {title}
      </h3>

      <div className="relative aspect-video bg-black border border-emerald-900/20 mb-8 overflow-hidden group-hover:border-emerald-700/40 transition-all duration-300">
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity" 
             style={{
               backgroundImage: 'linear-gradient(to right, rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
               backgroundSize: '40px 40px'
             }}></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] tracking-[1em] text-emerald-800 group-hover:text-emerald-600 transition-colors">ENCRYPTED_DATA</span>
        </div>
        <div className="absolute top-0 left-0 w-full h-[2px] bg-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_15px_rgba(16,185,129,0.5)]" 
             style={{ animation: 'scan-line 2s linear infinite' }}></div>
      </div>

      <p className="text-emerald-700/80 text-sm leading-loose mb-10 group-hover:text-emerald-500/90 transition-colors tracking-tighter">
        {desc}
      </p>

      <div className="flex justify-between items-center text-[10px]">
        <span className="text-emerald-800 italic">STATUS: STABLE</span>
        <motion.button 
          whileTap={{ scale: 0.95 }}
          className="px-8 py-2.5 bg-transparent border border-emerald-600 text-emerald-500 text-xs font-bold hover:bg-emerald-600 hover:text-black transition-all duration-300 uppercase"
        >
          Execute_View
        </motion.button>
      </div>
    </motion.div>
  );
};