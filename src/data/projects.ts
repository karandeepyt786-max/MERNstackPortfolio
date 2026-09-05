export interface Project {
  index: string;
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  year: string;
  github: string;
  live: string;
  featured?: boolean;
  architecture: {
    frontend: string[];
    backend: string[];
    database: string[];
    security: string[];
  };
  metrics?: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    index: '01',
    id: 'e-commerce-engine',
    title: 'Full-Stack E-Commerce Engine',
    subtitle: 'Production MERN Storefront & Microservices',
    description: 'Comprehensive commercial web architecture featuring real-time product inventory, role-based access control, Razorpay payments, and JWT / Google OAuth auth pipelines.',
    longDescription: 'Built from ground up as an enterprise-ready storefront. Incorporates atomic stateful shopping cart operations, webhook verification for payment flows, role-based admin dashboard, and sub-50ms API response times.',
    image: '/screenshots/e-commerce.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT Auth', 'Razorpay'],
    year: '2026',
    github: 'https://github.com/karandeepyt786-max',
    live: 'https://e-commerce-ten-pi-22.vercel.app/',
    featured: true,
    architecture: {
      frontend: ['React.js (Vite)', 'Tailwind CSS', 'Redux Toolkit State', 'Framer Motion'],
      backend: ['Node.js Event Loop', 'Express.js RESTful API', 'Express Validator Sanitization'],
      database: ['MongoDB Cloud Atlas', 'Mongoose ORM Indexing & Aggregations'],
      security: ['JWT Tokens in HTTP-Only Cookies', 'Google OAuth 2.0 PKCE', 'Razorpay Webhook Cryptography']
    },
    metrics: [
      { label: 'Lighthouse Score', value: '98 / 100' },
      { label: 'API Response Time', value: '< 42ms' },
      { label: 'Security Grade', value: 'A+' }
    ]
  },
  {
    index: '02',
    id: 'sewing-parts-hub',
    title: 'Industrial Machinery & Parts Hub',
    subtitle: 'Specialized High-Density Product Catalog',
    description: 'Niche e-commerce portal tailored for industrial sewing machinery and replacement components with parametric search.',
    longDescription: 'High-performance catalog handling hundreds of industrial replacement SKUs with instant client-side filtering, category trees, and quick checkout routes.',
    image: '/screenshots/sewing-machines.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    year: '2025',
    github: 'https://github.com/karandeepyt786-max',
    live: 'https://sewing-machine-and-sewing-parts-gfzpqy58s.vercel.app/',
    featured: true,
    architecture: {
      frontend: ['React.js Component Architecture', 'Tailwind CSS Grid'],
      backend: ['Node.js API Services', 'REST Endpoints'],
      database: ['MongoDB Relational Parts Schema'],
      security: ['Custom Auth Middleware', 'CORS Safeguards']
    },
    metrics: [
      { label: 'Catalog Capacity', value: '500+ SKUs' },
      { label: 'Load Latency', value: '0.7s' }
    ]
  },
  {
    index: '03',
    id: 'learn-hub-edtech',
    title: 'Learn Hub EdTech Platform',
    subtitle: 'Developer Course & Technical Resource Portal',
    description: 'Modern educational platform landing page designed to showcase technical courses, tutorials, and interactive developer roadmaps.',
    longDescription: 'Features responsive course matrices, dark mode UI patterns, video preview modals, and clean CSS layout mechanics optimized for all screen sizes.',
    image: '/screenshots/learn-hub.jpg',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Responsive UI'],
    year: '2025',
    github: 'https://github.com/karandeepyt786-max/Learn-Hub-Responsive',
    live: 'https://karandeepyt786-max.github.io/Learn-Hub-Responsive/',
    architecture: {
      frontend: ['HTML5 Semantic Markup', 'Vanilla ES6 JavaScript', 'CSS Flexbox / Grid'],
      backend: ['Static Edge Hosting'],
      database: ['Client-Side JSON Feed'],
      security: ['Input Sanitization']
    }
  },
  {
    index: '04',
    id: 'geeks-tech-portal',
    title: 'Geeks Tech Community Portal',
    subtitle: 'Developer Insights & Code Showcase',
    description: 'Dynamic web interface for technology enthusiasts featuring code preview widgets, structured articles, and fluid layouts.',
    longDescription: 'Architected with responsive component design principles, high-contrast readability, and light DOM footprint.',
    image: '/screenshots/geeks.jpg',
    tags: ['JavaScript', 'HTML/CSS', 'UI/UX Design'],
    year: '2024',
    github: 'https://github.com/karandeepyt786-max/Geeks_Responsive',
    live: 'https://karandeepyt786-max.github.io/Geeks_Responsive/',
    architecture: {
      frontend: ['Modular JavaScript', 'CSS Variables', 'HTML5'],
      backend: ['GitHub Pages CDN'],
      database: ['Static Metadata'],
      security: ['Standard SSL / TLS']
    }
  }
];
