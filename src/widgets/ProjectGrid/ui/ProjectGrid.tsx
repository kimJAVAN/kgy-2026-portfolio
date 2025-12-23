import { TerminalCard } from "@/shared/ui/TerminalCard";

const PROJECTS = [
  { id: "01", name: "CYBER_ARCHIVE", desc: "Next.js 15 기반의 데이터 시각화" },
  { id: "02", name: "GHOST_SHELL", desc: "Firebase 리얼타임 통신 엔진" }
];

export const ProjectGrid = () => (
  <section className="grid md:grid-cols-2 gap-12 py-10">
    {PROJECTS.map((p) => (
      <TerminalCard key={p.id} title={`PROJECT_B_0${p.id}`}>
        <div className="h-48 bg-zinc-900/50 mb-4 overflow-hidden border border-green-900/30 group-hover:border-green-500/50 transition-all flex items-center justify-center">
          <span className="text-[10px] tracking-[0.5em] text-green-900 uppercase">Image_Not_Found</span>
        </div>
        <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
        <p className="text-sm text-green-800">{p.desc}</p>
      </TerminalCard>
    ))}
  </section>
);