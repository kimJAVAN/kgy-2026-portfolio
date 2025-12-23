"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Page() {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const sequence = [
    "> INITIALIZING NEURAL_NETWORK",
    "> LOADING QUANTUM_PROCESSORS...",
    "> ESTABLISHING SECURE_HANDSHAKE... ✓",
    "> DECRYPTING CLASSIFIED_DATA...",
    "> WELCOME TO THE MATRIX."
  ];

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      if (current < sequence.length) {
        setLogs(prev => [...prev, sequence[current]]);
        current++;
      } else {
        clearInterval(interval);
        setTimeout(() => setIsLoading(false), 800);
      }
    }, 350);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skills = [
    { name: "React Ecosystem", level: 95, icon: "⚛️", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js", level: 92, icon: "▲", color: "from-slate-200 to-slate-400" },
    { name: "TypeScript", level: 88, icon: "TS", color: "from-blue-400 to-blue-600" },
    { name: "UI/UX Design", level: 90, icon: "✨", color: "from-purple-400 to-pink-500" },
    { name: "Performance", level: 87, icon: "⚡", color: "from-yellow-400 to-orange-500" },
  ];

  const projects = [
    { 
      id: 1,
      uuid: "NX01", 
      title: "QuantumDash", 
      desc: "실시간 데이터 시각화를 위한 차세대 대시보드. WebGL 기반 3D 그래프와 AI 예측 엔진을 탑재했습니다.",
      tech: ["Next.js", "Three.js", "TensorFlow", "WebSocket"],
      color: "from-cyan-500 via-blue-500 to-purple-500"
    },
    { 
      id: 2,
      uuid: "GH02", 
      title: "GhostNet", 
      desc: "분산 네트워크 기반 실시간 협업 플랫폼. P2P 통신과 블록체인 인증을 활용한 보안 메시징 시스템입니다.",
      tech: ["React", "WebRTC", "IPFS", "Solidity"],
      color: "from-emerald-500 via-teal-500 to-cyan-500"
    },
    { 
      id: 3,
      uuid: "VX03", 
      title: "VortexUI", 
      desc: "제너레이티브 디자인 시스템. AI가 자동으로 디자인 토큰을 생성하고 컴포넌트를 최적화합니다.",
      tech: ["React", "Framer Motion", "Stable Diffusion"],
      color: "from-pink-500 via-rose-500 to-orange-500"
    }
  ];

  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.1 } 
    }
  };

  const itemVars = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=JetBrains+Mono:wght@400;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          font-family: 'Space Grotesk', sans-serif;
          overflow-x: hidden;
          background: #000;
        }
        
        .font-mono {
          font-family: 'JetBrains Mono', monospace;
        }
        
        ::selection {
          background: rgba(59, 130, 246, 0.3);
          color: #fff;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        .glass {
          background: rgba(15, 23, 42, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
      `}</style>

      {/* Dynamic Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950"></div>
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-500/20 rounded-full blur-xl"
              style={{
                width: Math.random() * 300 + 50,
                height: Math.random() * 300 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
        {/* Cursor Glow */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl pointer-events-none"
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
      </div>

      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 origin-left z-50"
        style={{ scaleX }}
      />

      {/* Loader */}
      {isLoading && (
        <motion.div 
          exit={{ opacity: 0, scale: 1.1 }}
          className="fixed inset-0 bg-black z-[200] flex items-center justify-center"
        >
          <div className="max-w-2xl w-full px-8">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mb-12 text-center"
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  KGY_NEXUS
                </span>
              </div>
            </motion.div>

            <div className="space-y-3">
              {logs.map((log, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring" }}
                  className="flex items-center gap-3 text-blue-400/90 text-sm font-mono"
                >
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="text-purple-400"
                  >
                    ◆
                  </motion.span>
                  {log}
                </motion.div>
              ))}
            </div>

            <div className="w-full bg-slate-800/50 h-2 mt-8 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full relative"
                initial={{ width: 0 }}
                animate={{ width: `${(logs.length / sequence.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                  animate={{ x: [-100, 200] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      )}

      {!isLoading && (
        <motion.div 
          ref={containerRef}
          variants={containerVars}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-8"
        >
          {/* Floating Header */}
          <motion.header 
            variants={itemVars}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-40 glass rounded-full px-8 py-4 flex items-center gap-8"
          >
            <div className="flex items-center gap-3">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg"
              />
              <span className="font-bold text-white">KGY</span>
            </div>

            <div className="flex gap-6 text-xs text-slate-400">
              <motion.button whileHover={{ scale: 1.1 }} className="hover:text-white transition">
                Work
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="hover:text-white transition">
                About
              </motion.button>
              <motion.button whileHover={{ scale: 1.1 }} className="hover:text-white transition">
                Contact
              </motion.button>
            </div>

            <div className="text-xs text-slate-500 font-mono">
              {time || "00:00:00"}
            </div>
          </motion.header>

          {/* Hero */}
          <motion.section variants={itemVars} className="pt-40 pb-32 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div 
                className="inline-block mb-6"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="px-6 py-2 glass rounded-full text-sm text-blue-400 font-mono">
                  ⚡ Available for new projects
                </div>
              </motion.div>

              <h1 className="text-7xl md:text-9xl font-black mb-8 leading-none">
                <motion.span 
                  className="inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                  animate={{ 
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                  style={{ backgroundSize: '200% 200%' }}
                >
                  Building
                </motion.span>
                <br />
                <span className="text-white">The Future</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-12">
                프론트엔드 엔지니어이자 디지털 아티스트. 
                <span className="text-white"> 코드로 경험을 설계</span>하고,
                <span className="text-white"> 디자인으로 감정을 전달</span>합니다.
              </p>

              <div className="flex justify-center gap-4">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-bold text-white shadow-lg shadow-blue-500/50"
                >
                  View Projects
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass rounded-full font-bold text-white"
                >
                  Get in Touch
                </motion.button>
              </div>
            </motion.div>
          </motion.section>

          {/* Skills Bento Grid */}
          <motion.section variants={itemVars} className="mb-32">
            <h2 className="text-sm font-bold text-blue-400 mb-12 tracking-wider uppercase">
              Core Capabilities
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skill, idx) => (
                <motion.div 
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="glass p-8 rounded-3xl group cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  
                  <div className="relative">
                    <div className="text-5xl mb-4">{skill.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{skill.name}</h3>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-slate-400">Proficiency</span>
                      <span className="text-sm font-mono text-blue-400">{skill.level}%</span>
                    </div>

                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color} relative`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Special Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: skills.length * 0.1 }}
                className="glass p-8 rounded-3xl md:col-span-3 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                <div className="relative">
                  <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div className="md:col-span-2">
                      <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
                      <p className="text-slate-400 leading-relaxed">
                        최신 기술 트렌드를 추적하고, AI/ML, Web3, 그리고 실시간 협업 도구에 깊은 관심을 가지고 있습니다.
                        지속적인 학습과 실험을 통해 기술의 경계를 확장합니다.
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-4xl"
                      >
                        🚀
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Projects Showcase */}
          <motion.section variants={itemVars} className="mb-32">
            <h2 className="text-sm font-bold text-purple-400 mb-12 tracking-wider uppercase">
              Featured Projects
            </h2>

            <div className="space-y-8">
              {projects.map((project, idx) => (
                <motion.div 
                  key={project.id}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                  onHoverStart={() => setActiveProject(project.id)}
                  onHoverEnd={() => setActiveProject(null)}
                  className="glass p-8 md:p-12 rounded-3xl group cursor-pointer relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  <div className="relative grid md:grid-cols-2 gap-12 items-center">
                    <div className={idx % 2 === 0 ? "order-1" : "order-2"}>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-mono text-slate-500 px-3 py-1 bg-slate-800 rounded-full">
                          {project.uuid}
                        </span>
                        <motion.div 
                          animate={activeProject === project.id ? { scale: [1, 1.2, 1] } : {}}
                          transition={{ duration: 1, repeat: Infinity }}
                          className="w-2 h-2 bg-green-400 rounded-full"
                        />
                      </div>

                      <h3 className="text-4xl md:text-5xl font-black text-white mb-6 group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {project.title}
                      </h3>

                      <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                        {project.desc}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tech.map(tech => (
                          <span key={tech} className="px-4 py-2 bg-slate-800/50 rounded-full text-xs text-slate-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <motion.button 
                        whileHover={{ scale: 1.05, x: 10 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-medium"
                      >
                        <span>Explore Project</span>
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          →
                        </motion.span>
                      </motion.button>
                    </div>

                    <motion.div 
                      className={`relative aspect-video bg-slate-900 rounded-2xl overflow-hidden ${idx % 2 === 0 ? "order-2" : "order-1"}`}
                      whileHover={{ scale: 1.05, rotateY: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          animate={{ 
                            scale: [1, 1.2, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ duration: 8, repeat: Infinity }}
                          className="w-32 h-32 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contact */}
          <motion.section variants={itemVars} className="mb-32">
            <div className="glass p-12 md:p-16 rounded-3xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
              
              <div className="relative grid md:grid-cols-2 gap-16">
                <div>
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl font-black text-white mb-6"
                  >
                    Let's Create
                    <br />
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      Something Amazing
                    </span>
                  </motion.h2>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-12">
                    혁신적인 아이디어가 있으신가요? 함께 현실로 만들어봅시다.
                  </p>

                  <div className="space-y-4">
                    {[
                      { icon: "📧", label: "Email", value: "hello@kgy.dev" },
                      { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/kgy" },
                      { icon: "🐙", label: "GitHub", value: "github.com/kgy" }
                    ].map((item, i) => (
                      <motion.div 
                        key={item.label}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-center gap-4 text-slate-300 cursor-pointer group"
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <div>
                          <div className="text-xs text-slate-500 uppercase">{item.label}</div>
                          <div className="font-medium group-hover:text-blue-400 transition">{item.value}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    { label: "Name", type: "text", placeholder: "Your name" },
                    { label: "Email", type: "email", placeholder: "your@email.com" },
                  ].map(field => (
                    <div key={field.label}>
                      <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                        {field.label}
                      </label>
                      <input 
                        type={field.type}
                        className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white focus:border-blue-500/50 focus:outline-none transition-colors placeholder:text-slate-600"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  
                  <div>
                    <label className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">
                      Message
                    </label>
                    <textarea 
                      className="w-full bg-slate-900/50 border border-slate-700/50 rounded-xl p-4 text-white focus:border-blue-500/50 focus:outline-none transition-colors resize-none placeholder:text-slate-600"
                      rows={5}
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-500/50 relative overflow-hidden group"
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      animate={{ x: [-200, 200] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.button>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Footer */}
          <motion.footer 
            variants={itemVars}
            className="text-center py-16 border-t border-slate-800"
          >
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl"
            />
            <p className="text-slate-500 text-sm font-mono">
              © 2025 KGY. Crafted with 💜 and ☕
            </p>
          </motion.footer>
        </motion.div>
      )}
    </div>
  );
}