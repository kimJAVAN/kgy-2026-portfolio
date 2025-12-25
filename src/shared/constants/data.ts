import { Project, Skill, SocialLink } from '@/shared/types/index';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Kt cloud Tech-up / Bookstore Project',
    description: '빠르고 편한 구매 경험 중심의 Next.js 기반 온라인 서점 플랫폼. Firebase 인증, Supabase DB, 실시간 재고 관리 및 관리자 페이지 구현',
    tags: ['Next.js', 'JavaScript', 'Firebase', 'Supabase', 'Tailwind CSS','Next.js API'],
    githubUrl: 'https://github.com/yourusername/triplecore-bookstore',
    liveUrl: 'https://readme-kt-2025.vercel.app/',
    featured: true,
  },
  {
    id: '2',
    title: '[개발중] Kt cloud Tech-up / IT Node Communication Web',
    description: 'AI 및 LLM 통합을 통한 IT 노드 커뮤니케이션 플랫폼. Next.js, Supabase, Tailwind CSS 기반으로 구축, Claude 및 Gemini API 활용',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS','Next.js API','Axios', 'React Query','AI / LLM Integration (Claude, Gemini)'],
    githubUrl: 'https://github.com/kt-triple-core/NEXTSTEP_KT_2025',

    featured: true,
  },
  {
    id: '3',
    title: 'Portfolio Website',
    description: '개인 포트폴리오 웹사이트로, Next.js와 TypeScript를 사용하여 개발. 프로젝트 전시, 기술 스택 소개, 블로그, 방명록 기능 포함',
    tags: ['Next.js', 'TypeScript', 'Firebase', 'Tailwind CSS',],
    githubUrl: 'https://github.com/kimJAVAN/kgy-2026-portfolio',
    liveUrl: 'https://kgy-2026-portfolio.vercel.app/',
    featured: true,
  },
  {
    id: '4',
    title: '오늘은 뭐 입지?',
    description: '위치 기반으로 옷차림을 추천해주는 서비스',
    tags: ['React','JavaScript','OpenWeatherMap API',],
    githubUrl: 'https://github.com/kimJAVAN/2025weather',
    liveUrl: 'https://kimjavan.github.io/2025weather/',
    featured: false,
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