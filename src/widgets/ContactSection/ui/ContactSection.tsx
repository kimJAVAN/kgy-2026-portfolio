"use client";
import { useState } from "react";
import { useSendMessage } from "@/features/SendMessage/model/useSendMessage";

export const ContactSection = () => {
  const [msg, setMsg] = useState("");
  const { send } = useSendMessage();

  const handleSend = async () => {
    await send(msg);
    setMsg("");
    alert("PACKET_TRANSMITTED");
  };

  return (
    <section className="border-t border-green-900 p-8">
      <h2 className="text-xl mb-4 font-bold tracking-widest uppercase">Establish_Connection</h2>
      <div className="flex gap-2">
        <input 
          value={msg} 
          onChange={(e) => setMsg(e.target.value)}
          className="bg-transparent border-b border-green-800 outline-none flex-1 py-1"
          placeholder="Type message..."
        />
        <button onClick={handleSend} className="border border-green-500 px-4 hover:bg-green-500 hover:text-black">SEND</button>
      </div>
    </section>
  );
};