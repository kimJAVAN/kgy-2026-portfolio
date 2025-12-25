'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, X } from 'lucide-react';

interface ToastProps {
  message: string;
  onClose: () => void;
}

export const Toast = ({ message, onClose }: ToastProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const enter = setTimeout(() => setIsVisible(true), 10);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => {
      clearTimeout(enter);
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div
      className={`fixed top-24 right-4 z-[9999] flex items-center gap-3
      bg-emerald-500 text-black px-6 py-4 rounded-lg
      shadow-[0_0_30px_rgba(16,185,129,0.5)]
      font-mono transition-all duration-300
      ${
        isVisible
          ? 'translate-x-0 opacity-100'
          : 'translate-x-full opacity-0'
      }`}
    >
      <CheckCircle className="w-5 h-5" />
      <span className="font-medium">{message}</span>
      <button
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
        className="ml-2 hover:opacity-70 transition-opacity"
      >
        <X className="w-5 h-5" />
      </button>
    </div>
  );
};
