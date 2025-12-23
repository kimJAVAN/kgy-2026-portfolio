export const Skills = () => {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Tailwind", level: 95 },
    { name: "Firebase", level: 75 },
  ];

  return (
    <section className="py-10">
      <h2 className="text-xs font-bold mb-6 text-green-800 tracking-[0.3em]">-- HARDWARE_CAPABILITIES --</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((skill) => (
          <div key={skill.name} className="border border-green-900/30 p-4 bg-zinc-950/30 relative group overflow-hidden">
            <div className="flex justify-between mb-2 uppercase text-xs">
              <span className="text-white">{skill.name}</span>
              <span className="text-green-500">{skill.level}%</span>
            </div>
            <div className="w-full bg-green-950 h-1.5 relative">
              <div 
                className="bg-green-500 h-full transition-all duration-1000 group-hover:bg-white" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            {/* 장식용 디테일 */}
            <div className="absolute top-0 right-0 p-1 opacity-20 group-hover:opacity-100 transition-opacity">
              <span className="text-[8px]">M_0x{Math.random().toString(16).slice(2, 6)}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};