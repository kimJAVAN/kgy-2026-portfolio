"use client";

export const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind", level: 95 },
    { name: "Firebase", level: 75 },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h2 className="text-[10px] font-bold mb-8 text-emerald-600 tracking-[0.4em] uppercase">-- Hardware_Capabilities --</h2>
        <div className="space-y-6 font-mono">
          {skills.map((skill) => (
            <div key={skill.name} className="border border-emerald-900/20 p-5 bg-zinc-950/30 relative group overflow-hidden hover:border-emerald-700/40 transition-all duration-300">
              <div className="flex justify-between mb-3 uppercase text-xs">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-emerald-500">{skill.level}%</span>
              </div>
              <div className="w-full bg-emerald-950/30 h-1.5 relative overflow-hidden">
                <div 
                  className="bg-emerald-600 h-full transition-all duration-1000 group-hover:bg-emerald-400" 
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-30 transition-opacity">
                <span className="text-[8px] text-emerald-500">M_0x{Math.random().toString(16).slice(2, 6).toUpperCase()}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 border border-emerald-900/20 text-[10px] text-emerald-700 leading-loose font-mono bg-zinc-950/20">
        [SYSTEM_LOG]<br/>
        {">"} MEMORY_USAGE: OPTIMAL<br/>
        {">"} CORE_TEMP: 42.0°C<br/>
        {">"} ENCRYPTION: AES-256
      </div>
    </div>
  );
};