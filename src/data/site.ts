export const site = {
  name: 'Md. Jubaer Hosain',
  role: 'Fullstack Software Engineer',
  tagline:
    'I build backend-heavy SaaS systems — multi-tenant architecture, integrations, and data migrations — with TypeScript, NestJS, and PostgreSQL.',
  description:
    'Md. Jubaer Hosain — fullstack software engineer building multi-tenant SaaS with TypeScript, NestJS, and PostgreSQL.',
  url: 'https://jubaerhosain.github.io',
  email: 'jubaerhosain1119@gmail.com',
  github: 'https://github.com/jubaerhosain',
  linkedin: 'https://www.linkedin.com/in/jubaerhosain/',
  resume: '/files/jubaer-hosain-cv.pdf',
  location: 'Dhaka, Bangladesh',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const about = [
  "I'm a fullstack engineer at Cefalo Bangladesh Ltd. and a Software Engineering graduate of the Institute of Information Technology, University of Dhaka. My background is competitive programming — 1700+ problems solved — and lately I've been going deeper on AWS, Kubernetes, and AI agent systems.",
];

export interface ExperienceEntry {
  title: string;
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  intro?: string;
  introLink?: { label: string; url: string };
  stack?: string[];
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    title: 'Software Engineer',
    company: 'Cefalo Bangladesh Ltd.',
    companyUrl: 'https://cefalo.com',
    period: 'Jan 2024 – Present',
    location: 'Dhaka, Bangladesh',
    intro:
      'Working on Subrite, a multi-tenant subscription and media-monetization SaaS used by Scandinavian publishers.',
    introLink: { label: 'subrite.no', url: 'https://www.subrite.no' },
    stack: ['NestJS', 'TypeScript', 'PostgreSQL', 'Redis'],
    bullets: [
      'Designed and built BrandKit — multi-brand support per tenant, with per-brand hostnames, logos, and OTP email templates.',
      'Built the email/SMS sender approval flow with SendGrid for tenant self-service sender verification.',
      'Implemented OTP template resolution with layered fallback (brand → tenant → platform default, per locale).',
      'Integrated Spotify into the podcast and content pipeline.',
      'Ran production data migrations — CSV imports, subscription data, and payment-provider migrations.',
      'Authored the hostname architecture analysis that shaped multi-brand traffic routing.',
    ],
  },
];

export interface EducationEntry {
  degree: string;
  school: string;
  period?: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'BSc in Software Engineering',
    school: 'Institute of Information Technology, University of Dhaka',
    period: '2019 – 2023',
  },
  {
    degree: 'Higher Secondary School Certificate',
    school: 'Jamalganj Govt. College',
    period: '2016 – 2018',
    note: 'GPA 5.00 / 5.00',
  },
  {
    degree: 'Secondary School Certificate',
    school: 'Sachna Bazar High School',
    period: '2010 – 2016',
    note: 'GPA 4.78 / 5.00',
  },
];

export interface Project {
  name: string;
  date: string;
  tags: string[];
  description: string;
  source?: string;
  live?: string;
}

export const projects: Project[] = [
  {
    name: 'CV Analyzer Agent',
    date: '2026',
    tags: ['NestJS', 'FastAPI', 'OpenAI', 'Qdrant', 'PostgreSQL', 'MinIO'],
    description:
      'AI recruitment assistant that ranks a pool of CVs against a job description via a RAG pipeline — a NestJS API plus a FastAPI ML service, with Qdrant vector search and MinIO document storage.',
  },
  {
    name: 'nestjs-transactions',
    date: 'Jul 2026',
    tags: ['TypeScript', 'NestJS', 'TypeORM', 'Prisma'],
    description:
      'Open-source NestJS library for declarative database transaction management via a @Transactional() decorator.',
    source: 'https://github.com/jubaerhosain/nestjs-transactions',
  },
  {
    name: 'Beautified You',
    date: 'Mar – Jul 2024',
    tags: ['NestJS', 'Next.js', 'Redux', 'MongoDB', 'Redis', 'Docker'],
    description:
      'E-commerce platform for a cosmetics shop — auth, user/product/order management, cart, and admin panel. Built with one teammate, deployed to production, used by real customers.',
    source: 'https://github.com/jubaerhosain/beautfied-you',
    live: 'https://beautifiedyou.vercel.app/',
  },
  {
    name: 'Cefalo Blog',
    date: 'Feb – Apr 2024',
    tags: ['TypeScript', 'Express', 'MySQL', 'Sequelize', 'React', 'Tailwind CSS'],
    description:
      'Blog platform built during my internship at Cefalo — posts with a rich-text editor, image uploads, comments, and replies.',
    source: 'https://github.com/jubaerhosain/cefalo-blog-front-end',
    live: 'https://cefalo-blog-front-end.vercel.app',
  },
  {
    name: 'Smart GPT',
    date: 'Sep 2023 · 24h hackathon',
    tags: ['Express', 'React', 'MongoDB'],
    description:
      'BUET CSE FEST 2023 hackathon project — generates customized PDFs (children’s books, travel blogs) from text, voice, and image inputs, with a platform to share and browse them.',
    source: 'https://github.com/jubaerhosain/smart-gpt',
  },
  {
    name: 'Potato Disease Classification',
    date: 'Oct 2022',
    tags: ['Python', 'Keras', 'FastAPI', 'React'],
    description:
      'Deep-learning model that detects potato leaf disease from images, served through a FastAPI backend with a React frontend.',
    source: 'https://github.com/jubaerhosain/potato-disease-classification',
  },
  {
    name: 'SPL Management System',
    date: 'Oct 2022',
    tags: ['Express', 'MySQL', 'React', 'Tailwind CSS'],
    description:
      'Web app for the Software Project Lab of IIT, DU — supervisor allocation, mark evaluation, and progress monitoring.',
    source: 'https://github.com/jubaerhosain/spl-management-system',
  },
  {
    name: 'Mini Linkedin',
    date: 'Oct 2022',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'MinIO', 'Nginx'],
    description:
      'Microservice-based social app with auth, posts, images, and notifications — built for the distributed systems course.',
    source: 'https://github.com/jubaerhosain/mini-linkedin',
  },
  {
    name: 'Bangla Text Summarizer',
    date: 'Aug 2022',
    tags: ['Java'],
    description: 'Extractive text summarization tool for Bangla.',
    source: 'https://github.com/jubaerhosain/bangla-text-summarizer',
  },
  {
    name: 'Gomoku',
    date: 'Jan – Mar 2022',
    tags: ['Python', 'PyQt5'],
    description:
      'AI vs. human five-in-a-row board game using minimax with alpha-beta pruning and a heuristic evaluator.',
    source: 'https://github.com/jubaerhosain/gomoku',
  },
];

export const skills: { label: string; items: string[] }[] = [
  { label: 'Languages', items: ['TypeScript', 'JavaScript', 'Python', 'C', 'C++', 'Java', 'SQL'] },
  { label: 'Backend', items: ['NestJS', 'Express', 'FastAPI', 'REST APIs'] },
  { label: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS'] },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'TypeORM', 'Prisma'],
  },
  {
    label: 'Infra & Tools',
    items: ['Docker', 'Git', 'GitHub Actions', 'Nginx', 'RabbitMQ', 'Linux'],
  },
  {
    label: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'System Design', 'Database Design', 'OOP'],
  },
  {
    label: 'Exploring',
    items: ['AWS (ECS, RDS, IAM, VPC)', 'Kubernetes', 'Terraform', 'LangChain / LangGraph', 'RAG & agents'],
  },
];

export interface JudgeProfile {
  name: string;
  rating: string;
  detail: string;
  url: string;
}

export const judges: JudgeProfile[] = [
  {
    name: 'LeetCode',
    rating: '1879',
    detail: 'Knight (top 5%) · best global rank 652',
    url: 'https://leetcode.com/igloo11/',
  },
  {
    name: 'HackerEarth',
    rating: '1884',
    detail: 'Best global rank 23',
    url: 'https://www.hackerearth.com/@igloo11',
  },
  {
    name: 'CodeChef',
    rating: '1810',
    detail: '4-star coder · best global rank 96',
    url: 'https://www.codechef.com/users/igloo11',
  },
  {
    name: 'Codeforces',
    rating: '1401',
    detail: 'Specialist',
    url: 'https://codeforces.com/profile/igloo11',
  },
];

export const achievementsLead =
  '1700+ problems solved across LeetCode, Codeforces, CodeChef, and HackerEarth.';

export interface Achievement {
  title: string;
  placement: string;
  year?: string;
}

export const achievements: Achievement[] = [
  { title: 'Independence Cup Programming Contest', placement: 'Champion', year: '2022' },
  { title: 'Phitron Programming Contest', placement: '6th of 650+', year: '2022' },
  {
    title: 'SEC Inter University Junior Programming Contest',
    placement: '17th of 100+',
    year: '2022',
  },
  {
    title: 'ICPC Asia Dhaka Regional',
    placement: 'Online preliminarist',
    year: '2021, 2022',
  },
  { title: 'BUET CSE FEST Hackathon', placement: 'Onsite finalist', year: '2023' },
  { title: 'Code Samurai Inter University Hackathon', placement: 'Round 2', year: '2024' },
  { title: 'Meta Hacker Cup', placement: 'Round 2 qualifier', year: '2023' },
];

export const contact = {
  heading: 'Get in touch',
  body: 'Happy to talk about backend architecture, interesting problems, or new opportunities — email is the fastest way to reach me.',
};
