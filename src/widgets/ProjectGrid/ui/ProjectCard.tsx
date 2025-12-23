export const ProjectCard = ({ uuid, title, desc }: { uuid: string, title: string, desc: string }) => {
  return (
    <div className="border border-green-900 bg-zinc-950/50 p-6 group hover:bg-green-500/5 transition-all duration-300 relative overflow-hidden">
      {/* 배경 노이즈 효과 레이어 */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-10 pointer-events-none bg-[url('https://media.giphy.com/media/oEI9uWUicKgRTfA8v0/giphy.gif')] bg-cover"></div>
      
      <div className="text-[10px] text-green-900 mb-2 font-bold tracking-widest uppercase">UUID: {uuid}</div>
      <h2 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
        [ {title} ]
      </h2>
      
      <div className="aspect-video bg-black border border-green-950 mb-4 flex items-center justify-center relative overflow-hidden">
        <span className="text-green-950 group-hover:text-green-500 transition-all duration-500 tracking-[0.3em] font-bold">
          PREVIEW_LOCKED
        </span>
        {/* 호버 시 나타나는 스캔라인 바 */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-green-500/50 group-hover:animate-scan"></div>
      </div>
      
      <p className="text-sm text-green-800 mb-6 leading-relaxed group-hover:text-green-600">
        {desc}
      </p>
      
      <button className="border border-green-800 px-4 py-1 text-xs text-green-800 hover:border-green-400 hover:text-green-400 hover:shadow-[0_0_10px_rgba(34,197,94,0.5)] transition-all">
        DECRYPT_MORE
      </button>
    </div>
  );
};