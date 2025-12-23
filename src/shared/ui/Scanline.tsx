export const Scanline = () => (
  <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.15)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px:100%]" />
    <div className="absolute inset-0 animate-pulse bg-green-500/5 opacity-10" />
  </div>
);