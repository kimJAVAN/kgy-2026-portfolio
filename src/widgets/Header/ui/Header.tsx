"use client";
import { useState, useEffect } from "react";

export const Header = () => {
  const [time, setTime] = useState("");
  const [cpu, setCpu] = useState("02");

  useEffect(() => {
    const timer = setInterval(() => {
      // 시간 업데이트
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
      
      // CPU 부하 시뮬레이션 (심심하지 않게 01~05 사이 랜덤값)
      const randomCpu = Math.floor(Math.random() * 5) + 1;
      setCpu(randomCpu.toString().padStart(2, "0"));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="flex justify-between items-center border-b border-green-900 pb-2 mb-10 text-[10px] md:text-xs font-mono tracking-widest">
      <div className="flex gap-4 md:gap-8">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="hidden md:inline text-green-800 uppercase">System_Status:</span>
          <span className="text-white">ONLINE</span>
        </div>
        <div className="flex gap-2">
          <span className="text-green-800 uppercase">Buffer:</span>
          <span className="text-white">{cpu}%</span>
        </div>
      </div>

      <div className="text-white font-bold bg-green-950 px-2 py-0.5">
        KGY_SYST_v2.0
      </div>

      <div className="flex gap-4 items-center">
        <div className="hidden sm:block text-green-800 italic">
          LOC: 127.0.0.1
        </div>
        <div className="text-white tabular-nums">
          [{time || "00:00:00"}]
        </div>
      </div>
    </header>
  );
};