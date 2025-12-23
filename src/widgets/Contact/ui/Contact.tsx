"use client";
import { SendPacketForm } from "@/features/SendMessage/ui/SendPacketForm";

export const Contact = () => {
  return (
    <section className="py-20 border-t border-green-900/50">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-black mb-4 italic text-white uppercase">Establishing_Link</h2>
          <p className="text-green-800 text-sm leading-relaxed mb-6">
            데이터 전송 준비 완료. 협업 제안이나 질문이 있다면 아래 터미널을 통해 패킷을 전송하십시오. 
            암호화된 채널을 통해 즉시 전달됩니다.
          </p>
          <div className="space-y-2 text-xs text-green-900 uppercase">
            <div>Email: user@kgy.archive</div>
            <div>Github: github.com/kgy_dev</div>
            <div>Location: 127.0.0.1 (Seoul, KR)</div>
          </div>
        </div>
        
        <div className="border border-green-500 p-6 bg-green-500/5 shadow-[inset_0_0_20px_rgba(0,255,0,0.1)]">
          <div className="flex items-center gap-2 mb-6 border-b border-green-500/30 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-900/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-900/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-900/50"></div>
            <span className="text-[10px] ml-auto text-green-500/50">COMM_PORT: 443</span>
          </div>
          <SendPacketForm />
        </div>
      </div>
    </section>
  );
};