'use client';

import { useEffect, useState } from 'react';
import { Terminal, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const LOGS = [
  'Initializing system...',
  'Accessing route...',
  'Error: Route not found',
  'Status: 404',
  'Permission denied.',
];

export default function NotFound() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) =>
        prev < LOGS.length ? prev + 1 : prev
      );
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-emerald-400 flex items-center justify-center px-6">
      <div className="max-w-2xl w-full space-y-8 font-mono">
        {/* Header */}
        <div className="flex items-center gap-3 text-emerald-400">
          <Terminal className="w-6 h-6" />
          <h1 className="text-xl md:text-2xl font-bold">
            SYSTEM ERROR
          </h1>
        </div>

        {/* Console */}
        <div className="bg-black/60 border border-emerald-500/30 rounded-lg p-6 space-y-2 shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          {LOGS.slice(0, visibleLines).map((line, index) => (
            <p key={index} className="text-sm md:text-base">
              <span className="text-emerald-500">$</span> {line}
            </p>
          ))}

          {visibleLines === LOGS.length && (
            <p className="text-sm md:text-base text-red-400 mt-4">
              <span className="text-emerald-500">$</span>{' '}
              The page you are looking for does not exist.
            </p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-2 text-gray-400">
          <p>
            요청하신 페이지를 찾을 수 없습니다.
          </p>
          <p>
            주소가 잘못되었거나, 더 이상 존재하지 않는 경로일 수 있습니다.
          </p>
        </div>

        {/* Action */}
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
}
