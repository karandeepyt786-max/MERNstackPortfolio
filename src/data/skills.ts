export interface SkillGroup {
  category: string;
  subtitle: string;
  skills: { name: string; badge: string; level: number }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend & UI Architecture',
    subtitle: 'Constructing performant, responsive & kinetic interfaces.',
    skills: [
      { name: 'React.js', badge: 'v18.3', level: 96 },
      { name: 'TypeScript', badge: 'Strict Type Systems', level: 90 },
      { name: 'Next.js', badge: 'App Router / SSR', level: 88 },
      { name: 'Tailwind CSS', badge: 'Utility First', level: 98 },
      { name: 'Framer Motion', badge: 'Micro-Interactions', level: 92 },
      { name: 'HTML5 & CSS3', badge: 'Semantic Standards', level: 98 },
      { name: 'JavaScript (ES6+)', badge: 'Modern ES', level: 96 },
    ]
  },
  {
    category: 'Backend & Systems API',
    subtitle: 'Architecting resilient server-side routes, microservices & auth.',
    skills: [
      { name: 'Node.js', badge: 'Async I/O Engine', level: 94 },
      { name: 'Express.js', badge: 'REST Endpoints', level: 95 },
      { name: 'REST APIs', badge: 'JSON Protocol', level: 96 },
      { name: 'WebSockets', badge: 'Realtime Bi-directional', level: 86 },
      { name: 'JWT Auth', badge: 'Tokens & HTTP-Only', level: 92 },
      { name: 'OAuth 2.0', badge: 'Google Identity PKCE', level: 88 },
    ]
  },
  {
    category: 'Databases & DevOps Infrastructure',
    subtitle: 'Schema indexing, caching layers & automated edge deployments.',
    skills: [
      { name: 'MongoDB', badge: 'Document Store', level: 92 },
      { name: 'Mongoose ORM', badge: 'Schema Validation', level: 94 },
      { name: 'Redis', badge: 'In-Memory Cache', level: 84 },
      { name: 'Git & GitHub', badge: 'VCS Workflow', level: 96 },
      { name: 'Postman', badge: 'API Debugging', level: 92 },
      { name: 'Vercel / Render', badge: 'CI/CD Edge Deploy', level: 95 },
    ]
  }
];
