"use client";
import { useState } from "react";
import { useSendMessage } from "../model/useSendMessage";

export const SendPacketForm = () => {
  const [msg, setMsg] = useState("");
  const { send, loading } = useSendMessage();

  const handleSubmit = async () => {
    if (!msg || loading) return;
    await send(msg);
    setMsg("");
    alert("PACKET_TRANSMITTED_TO_FIREBASE");
  };

  return (
    <div className="flex gap-4 border-b border-green-900/50 py-2">
      <span className="text-green-500 animate-pulse"> {">"} </span>
      <input 
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Enter encrypted message..."
        className="bg-transparent outline-none flex-1 text-green-400 placeholder:text-green-900"
      />
      <button onClick={handleSubmit} className="text-xs border border-green-500 px-3 hover:bg-green-500 hover:text-black transition-all">
        {loading ? "SENDING..." : "EXECUTE"}
      </button>
    </div>
  );
};