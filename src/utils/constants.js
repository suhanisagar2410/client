// API Configuration
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export const API_ENDPOINTS = {
  CONTACT: `${API_BASE_URL}/contact`,
  HEALTH: `${API_BASE_URL}/health`,
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
  { name: 'JavaScript (ES6+)', level: 85 },
  { name: 'Node.js', level: 85 },
  { name: 'MongoDB', level: 85 },
  { name: 'Express.js', level: 85 },
  { name: 'Tailwind CSS', level: 90 },
  { name: 'Socket.IO', level: 80 },
  { name: 'Git & GitHub', level: 90 },
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
      { name: 'Redis', level: 75 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, CloudWatch, SES)', level: 78 },
      { name: 'Cloudinary', level: 80 },
    ],
  },
  {
    category: 'API & Real-Time',
    skills: [
      { name: 'REST APIs', level: 88 },
      { name: 'Socket.IO', level: 82 },
      { name: 'JWT Authentication', level: 84 },
      { name: 'Twilio', level: 72 },
    ],
  },
  {
    category: 'Monitoring & Performance',
    skills: [
      { name: 'New Relic', level: 70 },
      { name: 'Sentry', level: 75 },
    ],
  },
  {
    category: 'Task Scheduling & Automation',
    skills: [
      { name: 'Cron Jobs', level: 78 },
    ],
  },
  {
    category: 'Version Control & Tools',
    skills: [
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 88 },
      { name: 'Bitbucket', level: 75 },
      { name: 'Postman', level: 85 },
      { name: 'VS Code', level: 90 },
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
      'Developed scalable applications using React.js, Node.js, PostgreSQL, and Prisma',
      'Implemented microservices architecture for improved scalability',
      'Integrated AWS services (S3, EC2, CloudWatch) for cloud deployment',
      'Improved performance using React Query and Zustand for efficient state management',
      'Built real-time features using Socket.IO',
    ],
  },
  {
    company: 'Freelance & Open Source',
    role: 'Full Stack Developer',
    period: 'Feb 2025 – Apr 2025',
    color: 'from-highlight to-secondary',
    description: [
      'Worked on MERN stack projects for various clients',
      'Delivered full-stack applications with focus on user experience',
      'Contributed to open-source projects',
      'Built custom solutions tailored to client requirements',
    ],
  },
  {
    company: 'Rayo Innovations',
    role: 'Full Stack Developer Intern',
    period: 'Sep 2024 – Feb 2025',
    color: 'from-accent to-highlight',
    description: [
      'Built frontend setup from scratch using React, JavaScript, and MobX',
      'Created RESTful APIs using Node.js, Express, and Jest testing framework',
      'Developed real-time functionality with Angular and Socket.IO',
      'Utilized MongoDB for database management',
      'Collaborated on MERN stack projects delivering client-focused solutions',
    ],
  },
];

// Projects Data
export const PROJECTS_DATA = [
  {
    title: 'Cineblogs',
    description: 'A social blogging platform with AI-powered post creation, user authentication, and social features including follow/unfollow functionality.',
    image: '/images/placeholder.jpg',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'AI API'],
    features: [
      'User authentication & authorization',
      'CRUD operations for blog posts',
      'AI-assisted content generation',
      'Social networking features',
      'Profile management system',
    ],
    metrics: 'Supports unlimited users with real-time interactions',
    liveUrl: 'https://cineblogs.netlify.app',
    githubUrl: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A comprehensive chat platform with video/audio sharing, group chats, and personal messaging capabilities.',
    image: '/images/placeholder.jpg',
    tech: ['React', 'Socket.IO', 'Node.js', 'MongoDB', 'WebRTC'],
    features: [
      'Real-time messaging with Socket.IO',
      'Video, audio, and photo sharing',
      'Group chat rooms',
      'Personal DMs',
      'User profiles with follow/unfollow',
    ],
    metrics: 'Sub-100ms message delivery',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Microservices Suite',
    description: 'Enterprise-grade applications built with microservices architecture, deployed on AWS cloud infrastructure.',
    image: '/images/placeholder.jpg',
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Prisma'],
    features: [
      'Microservices architecture',
      'AWS cloud deployment (EC2, S3, CloudWatch)',
      'PostgreSQL with Prisma ORM',
      'State management with Zustand',
      'Performance optimization with React Query',
    ],
    metrics: '40% improvement in API response time',
    liveUrl: '#',
    githubUrl: '#',
  },
];

// Other Projects
export const OTHER_PROJECTS = [
  { name: 'News Aggregator', tech: ['JavaScript', 'API'], github: '#' },
  { name: 'Currency Converter', tech: ['React', 'API'], github: '#' },
  { name: 'Advanced To-Do List', tech: ['React', 'LocalStorage'], github: '#' },
  { name: 'Text Utility Tool', tech: ['JavaScript', 'DOM'], github: '#' },
  { name: 'Password Generator', tech: ['JavaScript'], github: '#' },
];
