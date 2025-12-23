import React, { useState, useEffect } from 'react';

interface LoaderProps {
onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('');
  const fullText = 'INITIALIZING PORTFOLIO_SYSTEM...';

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  useEffect(() => {
    let index = 0;
    const textInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(textInterval);
      }
    }, 50);

    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center space-y-8">
        <div className="font-mono text-green-400 text-xl mb-8">
          {text}
          <span className="animate-pulse">_</span>
        </div>
        
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-green-500 to-cyan-500 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="font-mono text-green-400 text-sm">
          [{progress}%] LOADING_MODULES...
        </div>

        <div className="mt-8 space-y-2 text-xs font-mono text-green-500/50">
          <div className="flex items-center justify-center space-x-2">
            <span className={progress > 20 ? 'text-green-400' : ''}>✓</span>
            <span>Loading React.js...</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className={progress > 40 ? 'text-green-400' : ''}>✓</span>
            <span>Loading TypeScript...</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className={progress > 60 ? 'text-green-400' : ''}>✓</span>
            <span>Loading Tailwind CSS...</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <span className={progress > 80 ? 'text-green-400' : ''}>✓</span>
            <span>Compiling components...</span>
          </div>
        </div>
      </div>
    </div>
  );
};