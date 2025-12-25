import { Project, Skill, SocialLink } from '@/shared/types/index';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce solution with real-time inventory management and payment integration',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Real-time Chat Application',
    description: 'WebSocket-based chat app with end-to-end encryption and file sharing',
    tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '3',
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with customizable widgets and real-time updates',
    tags: ['Vue.js', 'D3.js', 'Express', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: false,
  },
  {
    id: '4',
    title: 'AI Content Generator',
    description: 'ML-powered content generation tool with custom fine-tuning capabilities',
    tags: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    githubUrl: 'https://github.com',
    featured: true,
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'JavaScript (ES6+)', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 85 },

  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'Chakra UI', category: 'frontend', level: 70 },
  { name: 'MUI', category: 'frontend', level: 80 },

  { name: 'Axios', category: 'frontend', level: 75 },
  { name: 'React Query', category: 'frontend', level: 75 },
  { name: 'Swiper', category: 'frontend', level: 90 },

  // Backend
  { name: 'Next.js API Routes / Route Handlers', category: 'backend', level: 80 },
  { name: 'Express.js', category: 'backend', level: 70 },
  { name: 'REST API 연동', category: 'backend', level: 90 },

  { name: 'Firebase (Authentication)', category: 'backend', level: 70 },
  { name: 'Supabase (Database)', category: 'backend', level: 80 },

  // Tools & DevOps
  { name: 'GitHub', category: 'tools', level: 90 },
  { name: 'Vercel', category: 'tools', level: 90 },

  // Other
  { name: 'Figma', category: 'other', level: 90 },
  { name: 'Photoshop', category: 'other', level: 85 },
  { name: 'Illustrator', category: 'other', level: 85 },
];


export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com/kimJAVAN', icon: 'github' },
  { name: 'Blog', url: 'https://fron-end-note.tistory.com/', icon: 'blog' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/%EA%B7%BC%EC%98%81-%EA%B9%80-48143b342/', icon: 'linkedin' },
  { name: 'Email', url: 'ookim7717@naver.com', icon: 'mail' },
];

export const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Guestbook', href: '/guestbook' },
  { label: 'Contact', href: '#contact' },
];