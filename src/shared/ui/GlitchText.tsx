export const GlitchText = ({ text }: { text: string }) => (
  <span className="hover:animate-pulse hover:text-white cursor-default transition-colors">
    {text}
  </span>
);