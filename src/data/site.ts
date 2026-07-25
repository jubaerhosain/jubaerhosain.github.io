export const site = {
  name: 'Md. Jubaer Hosain',
  shortName: 'JH',
  role: 'Fullstack Software Engineer',
  tagline:
    'I build backend-heavy SaaS systems — multi-tenant architecture, integrations, and data migrations — with TypeScript, NestJS, and PostgreSQL. Currently engineering media-monetization infrastructure at Cefalo, working on Subrite.',
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
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const about = [
  "I'm a fullstack engineer at Cefalo Bangladesh Ltd. with about two years of experience, and a Software Engineering graduate from the Institute of Information Technology, University of Dhaka. Most of my day-to-day work is on Subrite, a Norwegian multi-tenant media-monetization platform, where I own features end to end — from database schema and API design to the admin UI.",
  "My background is competitive programming — 1700+ problems across LeetCode, Codeforces, CodeChef, and HackerEarth — and it shows up in how I work: breaking down ambiguous problems, caring about edge cases, and writing code that holds up under change. Lately I've been going deeper on AWS, Kubernetes, and building AI agent systems.",
];

export const experience = {
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
    'Designed and built BrandKit, a multi-brand system letting each tenant run multiple brands with their own hostnames, logos, and OTP email templates — including the hostname-resolution architecture behind it.',
    'Built the email/SMS sender approval flow with SendGrid, so tenants can verify and manage their own sending identities without manual ops work.',
    'Implemented OTP template resolution with layered fallback (brand → tenant → platform default, per locale), keeping login emails correct across every brand and language combination.',
    "Integrated Spotify into the platform's podcast and content pipeline.",
    'Ran production data migrations — CSV imports, subscription data, and payment-provider migrations — moving live customer data safely.',
    'Authored an internal hostname architecture analysis that shaped how the platform routes multi-brand traffic.',
  ],
  education: {
    degree: 'BSc in Software Engineering',
    school: 'Institute of Information Technology, University of Dhaka',
  },
};

export interface Project {
  name: string;
  tags: string[];
  description: string;
  source?: string;
  live?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'CV Analyzer Agent',
    tags: ['NestJS', 'FastAPI', 'OpenAI', 'Qdrant', 'PostgreSQL', 'MinIO'],
    description:
      'An AI recruitment assistant that ingests a pool of CVs and ranks candidates against a job description. Uploaded PDFs are parsed, chunked, and embedded into Qdrant for vector search; a RAG pipeline feeds the retrieved evidence to an LLM that scores and explains each candidate’s fit. Built as two services — a NestJS API for auth, jobs, and orchestration, and a FastAPI service for the ML pipeline — with MinIO for document storage.',
    featured: true,
  },
  {
    name: 'Beautified You',
    tags: ['NestJS', 'Next.js', 'MongoDB', 'Redis', 'Docker'],
    description:
      'Full-stack e-commerce platform for a cosmetics shop — auth, product and order management, cart, and an admin panel. Built with one teammate and deployed to production, serving real customers.',
    source: 'https://github.com/jubaerhosain/beautfied-you',
    live: 'https://beautifiedyou.vercel.app/',
  },
  {
    name: 'nestjs-transactions',
    tags: ['TypeScript', 'NestJS', 'TypeORM', 'Prisma'],
    description:
      'An open-source NestJS library for declarative database transaction management — wrap a service method in a @Transactional() decorator instead of hand-wiring QueryRunner boilerplate.',
    source: 'https://github.com/jubaerhosain/nestjs-transactions',
  },
  {
    name: 'Potato Disease Classification',
    tags: ['Python', 'Keras', 'FastAPI', 'React'],
    description:
      'Deep-learning model that detects potato leaf disease from photos, served through a FastAPI backend with a React frontend for point-and-shoot classification.',
    source: 'https://github.com/jubaerhosain/potato-disease-classification',
  },
];

export const skills = [
  { label: 'Languages', tags: ['TypeScript', 'JavaScript', 'Python', 'SQL'], exploring: false },
  { label: 'Backend', tags: ['NestJS', 'Express', 'FastAPI', 'REST APIs'], exploring: false },
  { label: 'Frontend', tags: ['React', 'Next.js', 'Tailwind CSS'], exploring: false },
  {
    label: 'Data & Infra',
    tags: ['PostgreSQL', 'MySQL', 'Redis', 'Docker', 'GitHub Actions', 'Nginx', 'Linux'],
    exploring: false,
  },
  {
    label: 'Exploring',
    tags: [
      'AWS (ECS, RDS, IAM, VPC)',
      'Kubernetes',
      'Terraform',
      'LangChain / LangGraph',
      'RAG & agents',
    ],
    exploring: true,
  },
];

export const achievements = {
  lead: "1700+ problems solved across major judges. It's where I learned to think in edge cases.",
  judges: [
    {
      name: 'LeetCode',
      stat: '1879',
      detail: 'Knight · top 5%',
      url: 'https://leetcode.com/igloo11/',
    },
    {
      name: 'HackerEarth',
      stat: '1884',
      detail: 'Best global rank 23',
      url: 'https://www.hackerearth.com/@igloo11',
    },
    {
      name: 'CodeChef',
      stat: '1810',
      detail: '4-star coder',
      url: 'https://www.codechef.com/users/igloo11',
    },
    {
      name: 'Codeforces',
      stat: '1401',
      detail: 'Specialist',
      url: 'https://codeforces.com/profile/igloo11',
    },
  ],
  highlights:
    'Champion, Independence Cup 2022 · 2× ICPC Asia Dhaka Regional preliminarist (2021, 2022)',
};

export const contact = {
  heading: 'Get in touch',
  body: "I'm always happy to talk about backend architecture, interesting problems, or new opportunities. The fastest way to reach me is email.",
};
