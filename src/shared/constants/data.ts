import { Project, Skill, SocialLink } from '@/shared/types';

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
  { name: 'React', category: 'frontend', level: 95 },
  { name: 'Next.js', category: 'frontend', level: 90 },
  { name: 'TypeScript', category: 'frontend', level: 90 },
  { name: 'Tailwind CSS', category: 'frontend', level: 85 },
  { name: 'Node.js', category: 'backend', level: 85 },
  { name: 'PostgreSQL', category: 'backend', level: 80 },
  { name: 'MongoDB', category: 'backend', level: 75 },
  { name: 'Docker', category: 'tools', level: 80 },
  { name: 'Git', category: 'tools', level: 90 },
  { name: 'AWS', category: 'tools', level: 70 },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'Twitter', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:dev@example.com', icon: 'mail' },
];

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];