"use client";
import { useState, useEffect } from "react";

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [logs, setLogs] = useState<string[]>([]);
  const sequence = [
    "> INITIALIZING KERNEL_V2.1.0",
    "> LOADING SYSTEM MODULES...",
    "> ESTABLISHING SECURE_CONNECTION... OK",
    "> DECRYPTING PROJECT_ARCHIVES...",
    "> ACCESS GRANTED."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        setLogs(prev => [...prev, sequence[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 400);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black z-[200] p-8 flex flex-col justify-center font-mono">
      <div className="max-w-md mx-auto w-full">
        {logs.map((log, i) => (
          <div key={i} className="mb-2 text-emerald-400 animate-pulse font-mono tracking-tighter">
            {log}
          </div>
        ))}
        <div className="w-full bg-emerald-950 h-1 mt-4">
          <div 
            className="bg-emerald-400 h-full transition-all duration-300 shadow-[0_0_10px_#10b981]" 
            style={{ width: `${(logs.length / sequence.length) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};