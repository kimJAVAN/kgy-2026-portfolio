import { TextareaHTMLAttributes } from 'react';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export const Textarea = ({ label, error, className = '', ...props }: TextareaProps) => {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-emerald-400 font-mono text-sm mb-2">
          {label}
        </label>
      )}
      <textarea
        className={`
          w-full bg-black/40 border border-emerald-500/30 rounded px-4 py-2.5
          text-white font-mono placeholder:text-gray-500
          focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500
          transition-colors duration-200 resize-none
          ${error ? 'border-red-500' : ''}
          ${className}
        `}
        rows={5}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm mt-1 font-mono">{error}</p>
      )}
    </div>
  );
};