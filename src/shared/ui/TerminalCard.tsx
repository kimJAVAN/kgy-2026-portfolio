export const TerminalCard = ({ children, title }: { children: React.ReactNode; title?: string }) => (
  <div className="border border-green-900 bg-black/40 backdrop-blur-sm p-4 relative group hover:border-green-500 transition-colors">
    {title && <div className="absolute -top-3 left-4 bg-black px-2 text-xs text-green-500 font-bold">{title}</div>}
    {children}
  </div>
);