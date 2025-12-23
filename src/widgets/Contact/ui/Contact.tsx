"use client";
import { SendPacketForm } from "@/features/SendMessage/ui/SendPacketForm";

export const Contact = () => {
  return (
    <section className="py-32 border-t border-emerald-900/30">
      <div className="grid md:grid-cols-2 gap-20">
        <div className="font-mono">
          <h2 className="text-4xl font-black mb-8 italic text-slate-100 uppercase tracking-tighter">Establishing_Link</h2>
          <p className="text-emerald-700/80 text-base leading-loose mb-10 tracking-tighter">
            데이터 전송 준비 완료. 협업 제안이나 질문이 있다면 아래 터미널을 통해 패킷을 전송하십시오. 
            암호화된 채널을 통해 즉시 전달됩니다.
          </p>
          <div className="space-y-3 text-sm text-emerald-600 uppercase">
            <div>Email: user@kgy.archive</div>
            <div>Github: github.com/kgy_dev</div>
            <div>Location: 127.0.0.1 (Seoul, KR)</div>
          </div>
        </div>
        
        <div className="border border-emerald-600/30 p-8 bg-emerald-950/5 shadow-[inset_0_0_30px_rgba(16,185,129,0.05)]">
          <div className="flex items-center gap-2 mb-8 border-b border-emerald-600/20 pb-3">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-900/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-900/50"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-900/50"></div>
            </div>
            <span className="text-[10px] ml-auto text-emerald-600/50 font-mono">COMM_PORT: 443</span>
          </div>
          <SendPacketForm />
        </div>
      </div>
    </section>
  );
};