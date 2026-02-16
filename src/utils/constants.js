// API Configuration
const VITE_API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  CONTACT: `${VITE_API_URL}/contact`,
  HEALTH: `${VITE_API_URL}/health`,
};

// Contact Form Constants
export const CONTACT_FORM_DEFAULTS = {
  name: '',
  email: '',
  message: '',
};

// Tech Stack
export const TECH_STACK = [
  { name: 'React.js', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Angular', level: 78 },
  { name: 'TypeScript', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'PostgreSQL', level: 78 },
  { name: 'MongoDB', level: 85 },
  { name: 'Redis', level: 75 },
  { name: 'AWS', level: 78 },
];

// Navigation Links
export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

// Social Links
export const SOCIAL_LINKS = {
  github: 'https://github.com/suhanisagar2410',
  linkedin: 'https://www.linkedin.com/in/suhani-sagar-390549220',
  email: 'suhaniisagar33@gmail.com',
  phone: '+91 9875181355',
};

// Skills Data
export const SKILLS_DATA = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'Angular', level: 78 },
      { name: 'TypeScript', level: 85 },
      { name: 'React Query', level: 82 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Material UI', level: 80 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'Microservices Architecture', level: 80 },
    ],
  },
  {
    category: 'State Management',
    skills: [
      { name: 'Redux', level: 82 },
      { name: 'MobX', level: 78 },
      { name: 'Zustand', level: 80 },
    ],
  },
  {
    category: 'Database & ORM',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'PostgreSQL', level: 78 },
      { name: 'Prisma', level: 78 },
      { name: 'Mongoose', level: 82 },
    ],
  },
  {
    category: 'Caching & Message Broker',
    skills: [
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, CloudWatch)', level: 78 },
      { name: 'Cloudinary', level: 80 },
    ],
  },
  {
    category: 'API & Real-Time Communication',
    skills: [
      { name: 'REST APIs', level: 88 },
      { name: 'Socket.IO', level: 82 },
      { name: 'JWT Authentication', level: 84 },
      { name: 'Plaid', level: 70 },
      { name: 'Twilio', level: 72 },
    ],
  },
  {
    category: 'Monitoring & Observability',
    skills: [
      { name: 'Sentry', level: 75 },
      { name: 'New Relic', level: 70 },
    ],
  },
  {
    category: 'Version Control & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 88 },
      { name: 'Bitbucket', level: 75 },
      { name: 'Postman', level: 85 },
    ],
  },
  {
    category: 'Testing',
    skills: [
      { name: 'Jest', level: 78 },
    ],
  },
];

// Experience Data
export const EXPERIENCE_DATA = [
  {
    company: 'Meru Technosoft',
    role: 'Full Stack Developer',
    period: 'Apr 2025 – Present',
    color: 'from-secondary to-accent',
    description: [
      'Built AI-based accounting software with advanced automation workflows',
      'Designed scalable backend architecture with clean system design principles',
      'Optimized performance across services and data flows',
      'Collaborated on production-grade releases and reliability improvements',
    ],
  },
  {
    company: 'Freelance & Open Source',
    role: 'Full Stack Developer',
    period: 'Feb 2025 – Apr 2025',
    color: 'from-highlight to-secondary',
    description: [
      'Delivered full-stack applications for client and community needs',
      'Contributed to open-source initiatives and collaborative codebases',
      'Focused on clean architecture, performance, and user-centric delivery',
    ],
  },
  {
    company: 'Rayo Innovations',
    role: 'Full Stack Developer Intern',
    period: 'Sep 2024 – Feb 2025',
    color: 'from-accent to-highlight',
    description: [
      'Built production-ready features using React, Node.js, and Express.js',
      'Worked with PostgreSQL, MongoDB, Prisma, and Mongoose for data modeling',
      'Implemented microservices patterns and caching with Redis',
      'Supported AWS and Cloudinary integrations for deployment and assets',
    ],
  },
];

// Projects Data
export const PROJECTS_DATA = [
  {
    title: 'Accounting Software (Meru Technosoft)',
    description: 'AI-based accounting platform with automation-first workflows and clean system design.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Redis', 'AWS'],
    features: [
      'Automation-first accounting workflows',
      'Scalable backend architecture',
      'Performance optimization and reliability work',
    ],
    metrics: 'Production-grade system for finance teams',
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Gaming Platform (200K+ Users)',
    description: 'Large-scale platform serving more than 200,000 users with real-time features.',
    tech: ['Node.js', 'Socket.IO', 'MongoDB', 'Redis', 'AWS'],
    features: [
      'High-traffic performance tuning',
      'Real-time gameplay and events',
      'Scalable architecture for peak concurrency',
    ],
    metrics: 'Sustained 200K+ user scale',
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Music Streaming Platform',
    description: 'Streaming application focused on seamless media handling and responsive UI.',
    tech: ['React', 'Node.js', 'Cloudinary', 'MongoDB'],
    features: [
      'Media streaming and asset management',
      'Responsive, performance-focused UI',
      'Optimized backend delivery',
    ],
    metrics: 'Smooth playback and user experience',
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'Lawyer Management System',
    description: 'Personalized legal management software for cases, documentation, and workflows.',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'JWT'],
    features: [
      'Secure case record management',
      'Document tracking and workflow tools',
      'Structured data access and permissions',
    ],
    metrics: 'Secure data handling for legal teams',
    liveUrl: null,
    githubUrl: null,
  },
  {
    title: 'CineBlogs',
    description: 'Blog platform with AI-assisted post creation, authentication, and social features.',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'AI'],
    features: [
      'User authentication and profiles',
      'CRUD publishing workflows',
      'Follow/unfollow and discovery',
    ],
    metrics: 'Live demo available',
    liveUrl: 'https://cineblogs.netlify.app',
    githubUrl: null,
  },
  {
    title: "Let's Talk (Chat Application)",
    description: 'Real-time chat application with one-to-one messaging and core chat features.',
    tech: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    features: [
      'User authentication',
      'Real-time messaging',
      'Clean, scalable chat UI',
    ],
    metrics: 'Production-style chat architecture',
    liveUrl: null,
    githubUrl: null,
  },
];

// Other Projects
export const OTHER_PROJECTS = [
  { name: 'News Aggregator', tech: ['JavaScript', 'APIs'], url: null },
  { name: 'Text Utility Tool', tech: ['JavaScript', 'DOM'], url: null },
  { name: 'Currency Converter', tech: ['JavaScript', 'APIs'], url: null },
  { name: 'Password Generator', tech: ['JavaScript'], url: null },
  { name: 'Advanced To-Do List', tech: ['JavaScript', 'LocalStorage'], url: null },
];
