"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [time, setTime] = useState("");
  const [cpu, setCpu] = useState("02");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      const randomCpu = Math.floor(Math.random() * 5) + 1;
      setCpu(randomCpu.toString().padStart(2, "0"));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex justify-between items-center border-b border-emerald-900/30 pb-4 mb-20 text-[10px] md:text-xs font-mono tracking-widest">
      <div className="flex gap-4 md:gap-8 text-emerald-600">
        <div className="flex items-center gap-2 font-bold tracking-tighter">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500/50 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="hidden md:inline uppercase">System_Status:</span>
          <span className="text-slate-300">ONLINE</span>
        </div>
        <div className="flex gap-2">
          <span className="uppercase">Buffer:</span>
          <span className="text-slate-300 tracking-tighter">{cpu}%</span>
        </div>
      </div>

      <div className="text-slate-100 font-bold bg-emerald-950/50 px-3 py-1 border border-emerald-900/30">
        KGY_SYST_v2.0
      </div>

      <div className="flex gap-4 items-center">
        <div className="hidden sm:block text-emerald-700 italic text-[9px]">
          LOC: 127.0.0.1
        </div>
        <div className="text-slate-300 tabular-nums">
          [{time || "00:00:00"}]
        </div>
      </div>
    </header>
  );
};