import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = ({ label, error, className = '', ...props }: InputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-emerald-400 font-mono text-sm mb-2">
          {label}
        </label>
      )}
      <input
        className={`
          w-full bg-black/40 border border-emerald-500/30 rounded px-4 py-2.5
          text-white font-mono placeholder:text-gray-500
          focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500
          transition-colors duration-200
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 font-mono">{error}</p>
      )}
    </div>
  );
};