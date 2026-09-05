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
    description: 'A comprehensive full-stack e-commerce platform featuring advanced product management, secure authentication, and seamless user experience.',
    longDescription: 'Built from ground up as an enterprise-ready storefront. Incorporates atomic stateful shopping cart operations, webhook verification for payment flows, role-based admin dashboard, and sub-50ms API response times.',
    image: '/screenshots/e-commerce.jpg',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind', 'JWT Auth', 'Razorpay'],
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
    title: 'Industrial Sewing Machinery & Parts',
    subtitle: 'Specialized High-Density Product Catalog',
    description: 'A focused e-commerce experience for sewing machines and sewing parts with technical component indexing.',
    longDescription: 'High-performance catalog handling hundreds of industrial replacement SKUs with instant client-side filtering, category trees, and quick checkout routes.',
    image: '/screenshots/sewing-machines.png',
    tags: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS', 'E-Commerce'],
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
    title: 'Learn Hub Educational Portal',
    subtitle: 'Developer Course & Technical Resource Hub',
    description: 'A responsive educational platform landing page designed to showcase courses, tutorials, and learning resources.',
    longDescription: 'Features responsive course matrices, dark mode UI patterns, video preview modals, and clean CSS layout mechanics optimized for all screen sizes.',
    image: '/screenshots/learn-hub.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
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
    title: 'Geeks Tech Community Platform',
    subtitle: 'Developer Insights & Code Showcase',
    description: 'A responsive interface for tech enthusiasts, featuring modern UI components and fluid layouts for optimal viewing on all devices.',
    longDescription: 'Architected with responsive component design principles, high-contrast readability, and light DOM footprint.',
    image: '/screenshots/geeks.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'UI/UX'],
    year: '2024',
    github: 'https://github.com/karandeepyt786-max/Geeks_Responsive',
    live: 'https://karandeepyt786-max.github.io/Geeks_Responsive/',
    architecture: {
      frontend: ['Modular JavaScript', 'CSS Variables', 'HTML5'],
      backend: ['GitHub Pages CDN'],
      database: ['Static Metadata'],
      security: ['Standard SSL / TLS']
    }
  },
  {
    index: '05',
    id: 'furniture-storefront',
    title: 'Minimalist Furniture Storefront',
    subtitle: 'E-Commerce Aesthetics & Product Showcase',
    description: 'A stylish and elegant web storefront for a furniture brand, emphasizing product presentation and seamless user experience.',
    longDescription: 'A custom aesthetic storefront designed with extreme attention to typography, spatial hierarchy, and visual symmetry.',
    image: '/screenshots/furniture.jpg',
    tags: ['HTML', 'CSS', 'Design System'],
    year: '2024',
    github: 'https://github.com/karandeepyt786-max/Furniture',
    live: 'https://karandeepyt786-max.github.io/Furniture/',
    architecture: {
      frontend: ['HTML5', 'Custom CSS Utility System'],
      backend: ['GitHub Pages Edge CDN'],
      database: ['Static Catalog'],
      security: ['Mock Cart System']
    }
  },
  {
    index: '06',
    id: 'numitech-solutions',
    title: 'Numitech Corporate IT Platform',
    subtitle: 'Enterprise Tech Services Website',
    description: 'A professional corporate website for IT solutions and services, completely responsive and optimized for performance.',
    longDescription: 'Includes service portfolios, corporate client testimonials, lead capture forms, and clean responsive layout mechanics.',
    image: '/screenshots/numitech.jpg',
    tags: ['HTML', 'CSS', 'JavaScript', 'Corporate'],
    year: '2024',
    github: 'https://github.com/karandeepyt786-max/Numitech-Solution-2-Responsive',
    live: 'https://karandeepyt786-max.github.io/Numitech-Solution-2-Responsive/',
    architecture: {
      frontend: ['HTML5', 'CSS3', 'JavaScript'],
      backend: ['GitHub Pages'],
      database: ['Lead Data Handler'],
      security: ['N/A']
    }
  }
];
