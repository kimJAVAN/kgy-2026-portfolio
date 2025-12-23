"use client";
import { useState } from "react";

export const SendPacketForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = () => {
    console.log("Packet sent:", formData);
  };

  return (
    <div className="space-y-6 font-mono uppercase">
      {["name", "email", "message"].map((key) => (
        <div key={key}>
          <label className="block text-[10px] text-emerald-600 mb-2 tracking-widest font-bold">
            {key === "name" ? "SENDER_ID" : key === "email" ? "EMAIL_ADDR" : "MESSAGE_BODY"}:
          </label>
          {key === "message" ? (
            <textarea 
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              className="w-full bg-black border border-emerald-900/30 p-3 text-emerald-400 text-sm focus:border-emerald-600 focus:outline-none transition-colors resize-none h-40"
              placeholder="ENTER_DATA..."
            />
          ) : (
            <input 
              type={key === "email" ? "email" : "text"}
              value={formData[key as keyof typeof formData]}
              onChange={(e) => setFormData({...formData, [key]: e.target.value})}
              className="w-full bg-black border border-emerald-900/30 p-3 text-emerald-400 text-sm focus:border-emerald-600 focus:outline-none transition-colors"
              placeholder={`INPUT_${key.toUpperCase()}...`}
            />
          )}
        </div>
      ))}
      <button 
        onClick={handleSubmit}
        className="w-full bg-emerald-900/30 border border-emerald-600 text-emerald-500 py-4 text-xs font-bold hover:bg-emerald-600 hover:text-black transition-all duration-300 tracking-[0.3em]"
      >
        TRANSMIT_PACKET
      </button>
    </div>
  );
};