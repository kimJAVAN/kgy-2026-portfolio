# 🚀 Green-Terminal Portfolio

> **Building the future, one commit at a time.**
> 프론트엔드 다크 테마 포트폴리오입니다.

---

## ✨ Key Features

- **Interactive Custom Cursor**: 사용자 경험을 극대화하는 부드러운 원형 커스텀 포인터.
- **Mouse Spotlight Effect**: 프로젝트 카드 위에 마우스를 올릴 때 반응하는 은은한 광채 효과.
- **Glassmorphism UI**: 다크 테마 기반의 투명도와 보더 라인을 활용한 모던한 디자인.
- **Responsive Grid**: 모든 기기에서 최적화된 레이아웃을 제공하는 프로젝트 그리드.
- **Clean Architecture**: `shared/ui`, `project`, `layout` 등으로 분리된 체계적인 폴더 구조.

---

## 🛠 Tech Stack

| Category | Tech Stack |
| :--- | :--- |
| **Framework** | Next.js 14+ (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS |
| **Icons** | Lucide React |
| **Lint/Format** | ESLint, Prettier, Prettier-plugin-tailwindcss |

---

## 📂 상세 폴더 구조 도식화

src/
├── app/                  # Next.js App Router (페이지 및 레이아웃)
│   ├── layout.tsx        # 전역 레이아웃 (CustomCursor, Navbar 포함)
│   ├── page.tsx          # 메인 홈 페이지
│   └── globals.css       # 전역 스타일 (커서 숨김 로직 포함)
├── components/           # UI 컴포넌트 모음
│   ├── layout/           # 특정 페이지가 아닌 '틀'을 구성하는 요소
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── project/          # 특정 도메인(프로젝트 섹션) 전용 컴포넌트
│   │   ├── ProjectCard.tsx
│   │   └── ProjectGrid.tsx
│   └── shared/           # 프로젝트 어디서든 재사용되는 공통 요소
│       └── ui/           # 범용적인 UI 원자 단위
│           ├── CustomCursor.tsx
│           ├── Button.tsx
│           └── SpotlightCard.tsx
├── data/                 # 하드코딩된 데이터 관리
│   └── projects.ts       # 프로젝트 리스트 (id, title, desc 등)
├── hooks/                # 커스텀 훅 (로직 분리)
│   └── useMousePosition.ts # 마우스 좌표 추적 로직만 따로 분리 가능
├── styles/               # 필요한 경우 추가적인 CSS 모듈
└── types/                # TypeScript 인터페이스/타입 정의
    └── project.d.ts      # Project 관련 타입 선언