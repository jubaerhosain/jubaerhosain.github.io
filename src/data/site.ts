export const site = {
  name: 'Md. Jubaer Hosain',
  title: 'Associate Software Engineer II',
  positioning: 'Backend-focused fullstack engineer',
  company: 'Cefalo Bangladesh Ltd.',
  tagline:
    'I build backend-heavy SaaS systems — multi-tenant architecture, payment integrations, and production data migrations — with TypeScript, NestJS, and PostgreSQL.',
  description:
    'Md. Jubaer Hosain — backend-focused fullstack engineer building multi-tenant subscription SaaS with TypeScript, NestJS, and PostgreSQL.',
  url: 'https://jubaerhosain.github.io',
  email: 'jubaerhosain1119@gmail.com',
  github: 'https://github.com/jubaerhosain',
  linkedin: 'https://www.linkedin.com/in/jubaerhosain/',
  resume: '/files/jubaer-hosain-cv.pdf',
  location: 'Dhaka, Bangladesh',
  avatar: '/images/profile.jpg',
};

export interface NavItem {
  label: string;
  href: string;
  id: string;
}

export const nav: NavItem[] = [
  { label: 'intro', href: '#intro', id: 'intro' },
  { label: 'work', href: '#work', id: 'work' },
  { label: 'projects', href: '#projects', id: 'projects' },
  { label: 'achievements', href: '#achievements', id: 'achievements' },
  { label: 'skills', href: '#skills', id: 'skills' },
  { label: 'contact', href: '#contact', id: 'contact' },
];

/** The four numbers in the Introduction stats grid. */
export const stats: { value: string; label: string }[] = [
  { value: '2.5+', label: 'Years Experience' },
  { value: '1700+', label: 'Problems Solved' },
  { value: '10+', label: 'Online Judges' },
  { value: '50+', label: 'Contests' },
];

/** Short tech pills shown on the intro profile card. */
export const profileTags = ['TypeScript', 'NestJS', 'PostgreSQL', 'Next.js', 'AWS', 'Docker'];

/**
 * Introduction prose. `<span class="highlight">` marks emphasis, matching the
 * `.highlight` rule in global.css — these are rendered with set:html.
 */
export const about: string[] = [
  'I\'m a <span class="highlight">backend-focused fullstack engineer</span> at Cefalo Bangladesh Ltd., where I\'ve spent the last two and a half years on <span class="highlight">Subrite</span> — a multi-tenant subscription and media-monetization platform used by Nordic publishers. It runs to 136 entities and 605 API routes, and I\'ve merged 251 pull requests into it.',
  'Most of my work sits where correctness matters and mistakes are expensive: the <span class="highlight">tenant-isolation layer</span> that makes multi-tenant safety an enforced guarantee rather than a per-query convention, <span class="highlight">billing correctness</span> across four card providers, and production data migrations where the preview output doubles as the rollback record.',
  'Before that I came up through competitive programming — 1700+ problems, LeetCode Knight. Outside work I publish and maintain open source, and I\'ve been going deeper on <span class="highlight">AWS, Kubernetes, and AI agent systems</span>.',
];

/** Cross-cutting narrative — PORTFOLIO.md §5, Thread 1. */
export const narrative = {
  heading: 'One problem, four codebases',
  body: 'I first met the request-context problem on Cefalo Payroll — keeping a database transaction coherent when a single business operation spans several services. I used <code>AsyncLocalStorage</code> to fix it there, reached for the same pattern again on Beautified You, then built continuation-local storage into the substrate of Subrite\'s tenant-isolation layer. Having solved it three times, I generalised it and published it: <span class="highlight">nestjs-transactions</span>, a maintained replacement for the unmaintained library everyone had been using. That is the thread I\'d point at first — not any single project, but a problem I kept following until it became something other people could install.',
};

export interface Role {
  title: string;
  period: string;
  bullets: string[];
}

export interface ExperienceEntry {
  company: string;
  companyUrl?: string;
  period: string;
  location?: string;
  intro?: string;
  introLink?: { label: string; url: string };
  stack?: string[];
  roles: Role[];
}

export const experience: ExperienceEntry[] = [
  {
    company: 'Cefalo Bangladesh Ltd.',
    companyUrl: 'https://cefalo.com',
    period: 'Jan 2024 – Present',
    location: 'Dhaka, Bangladesh',
    intro:
      'Subrite — a multi-tenant subscription and media-monetization SaaS used by Nordic publishers. 136 entities, 605 API routes, four card providers, four locales.',
    introLink: { label: 'subrite.no', url: 'https://www.subrite.no' },
    stack: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Next.js', 'Temporal', 'Datadog'],
    roles: [
      {
        title: 'Associate Software Engineer II',
        period: 'Mar 2026 – Present',
        bullets: [
          'Designed and rolled out the platform-wide tenant-isolation layer, turning multi-tenant safety from a per-query convention into an enforced guarantee — a generic <code>TenantScopedRepository</code> over TypeORM and continuation-local storage that scopes every read and stamps every write, with an explicit escape hatch. Raised tenant-scoped entities from 78 to 90 of 136 across five modules.',
          'Originated that programme from two cross-tenant exposures I found and fixed myself — payment-provider settings readable across tenants, and subscription records reachable by the wrong user — then generalised the fix into architecture rather than patching twice.',
          'Ended a class of incorrect-charge incidents by diagnosing a four-part compound defect in the recurring-payment workflow and unifying the charge guards across all four card providers, which had each carried their own divergent variant.',
          'Built operator recovery tooling for the worst state a billing system can reach — money debited at the provider with no local record — matching on provider status plus subscription metadata and idempotent so it cannot double-charge. Recovered real customer payments.',
          'Cut production alert noise so genuine failures surface: eliminated 114 Datadog error-tracking hits in 14 days from expected webhook duplicates, and rewrote third-party feed alerting from one error per check to one alert per two-hour outage window.',
          'Made the platform\'s largest enterprise subscriptions usable — paginated seat APIs for 3000+ member subscriptions, an N+1 eliminated via batched lookups, shipped behind a Swagger deprecation path instead of a breaking change.',
          'Repaired corrupted billing data in production, safely and verifiably: a read-only preview whose output doubles as the rollback record, a snapshot table, a transactional apply, and attribution tags on every touched row. It became the template for later data-ops work in the repo.',
          'Raised security issues rather than only fixing assigned ones — nine security-typed PRs, including cross-tenant settings exposure, cross-user subscription access, and survey data readable without survey permission.',
          'Owned features end to end: clarification and planning, implementation, deployment, monitoring, feedback and hotfix — writing the deployment notes each change needed, then watching the result in Datadog.',
        ],
      },
      {
        title: 'Associate Software Engineer I',
        period: 'Mar 2025 – Mar 2026',
        bullets: [
          'Delivered fullstack features across Subrite with NestJS and Next.js — 163 PRs merged in 2025 alone.',
          'Led onboarding of new tenants with diverse payment integrations: Stripe, Vipps, Nets, SwedbankPay, and EHF/Avtalegiro e-invoicing.',
          'Moved tenant configuration from staff-mediated to self-service across settings, branding, communication and payment providers — including a per-brand system giving each brand its own hostname, logo, sender identity and OTP templates.',
          'Built out communication and email infrastructure on SendGrid across four Nordic languages, including hard- vs soft-bounce tracking with an event-priority model, because provider events arrive out of order and a later, less definitive event must not overwrite an earlier one.',
          'Extracted communication senders into a first-class approvable entity via a four-step ordered schema migration — add, migrate, migrate, deprecate — because doing it in one step risked losing every tenant\'s sender configuration.',
          'Built repeatable tenant onboarding data migrations across six media tenants: dry-run by default, requiring an explicit apply flag, and reviewable enough to hand over.',
          'Carried production hotfix and support-escalation ownership, working directly with the product owner and non-technical customer support.',
        ],
      },
      {
        title: 'Trainee Software Engineer',
        period: 'Jan 2024 – Feb 2025',
        bullets: [
          '<span class="highlight">Cefalo Payroll</span> — 477 commits over 10 months on the in-house payroll platform: employee management, salary calculation and tax-compliance workflows replacing manual processing, with Kafka for asynchronous exchange with the HR Portal. NestJS + TypeORM + MySQL + MinIO; Next.js + Redux Toolkit front end. Also reported an information-disclosure defect leaking database query details in error messages.',
          '<span class="highlight">Cefalo ATS</span> — a one-month engagement fixing reported defects across backend and frontend on an unfamiliar codebase. NestJS + Prisma, Jenkins CI, a Turborepo monorepo serving separate internal and public apps behind Nginx.',
          '<span class="highlight">Cefalo Blog</span> — two months of intensive training on HTTP, REST and core web concepts, then a fullstack blogging platform built end to end: rich-text authoring with image uploads, threaded comments, JWT and social auth, and role-based access control. 648 commits across two repos in three months.',
        ],
      },
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
  featured?: boolean;
}

export const projects: Project[] = [
  {
    name: 'nestjs-transactions',
    date: 'Jul 2026 – present',
    tags: ['TypeScript', 'NestJS', 'TypeORM', 'Prisma', 'pnpm', 'Jest'],
    description:
      'A published npm library that keeps a database transaction coherent when one business operation spans several services. Annotate a method with @Transactional() and the transaction propagates through AsyncLocalStorage — no transaction object threaded through every signature, no runtime ORM patching. Three packages: an ORM-agnostic core plus TypeORM and Prisma adapters, with integration tests against two real Postgres containers and a nightly dependency-upgrade workflow. Written as a maintained replacement for the unmaintained typeorm-transactional.',
    source: 'https://github.com/jubaerhosain/nestjs-transactions',
    featured: true,
  },
  {
    name: 'Mess Ledger',
    date: 'Feb 2026 – present',
    tags: ['NestJS', 'Expo', 'React Native', 'PostgreSQL', 'TypeORM', 'Sentry'],
    description:
      'A cost-splitting app for shared households. In Bangladesh a "mess" is a shared living arrangement where several people cook together and split grocery and meal costs monthly — usually tracked in a paper ledger, which gets contentious fast. Members log meals, someone records shared expenses, and the app produces the month-end settlement. Shipped to app stores with subscriptions and ads. The API emits openapi.json and the mobile app regenerates a typed client from it, so a breaking API change surfaces as a TypeScript error rather than a runtime bug in someone\'s hands.',
    featured: true,
  },
  {
    name: 'CV Analyzer AI Agent',
    date: 'Jul – Aug 2025',
    tags: ['FastAPI', 'LangChain', 'Qdrant', 'OpenAI', 'NestJS', 'MinIO'],
    description:
      'A recruitment assistant that reads a pool of CVs and ranks them against a job description, so a recruiter gets structured comparison instead of 200 PDFs. CVs are parsed into structured fields, embedded, and retrieved through a RAG pipeline; recruiters then query the pool conversationally. I built the real-time parsing, the semantic-search API, chat memory, and the PII anonymisation layer that strips identifying data before anything reaches the model.',
    featured: true,
  },
  {
    name: 'Beautified You',
    date: 'May 2024 – Apr 2025',
    tags: ['NestJS', 'MongoDB', 'Next.js', 'Ant Design', 'Swagger'],
    description:
      'An e-commerce and inventory platform built for a cosmetics retailer — a paying client, live, with real customers ordering through it. The commercially important half is the admin side: catalogue and inventory management, order processing, and a sales dashboard the shop owner uses to run the business. I owned the backend integration; the repo\'s todo.md tracks the client\'s change requests and bug reports with status markers.',
    live: 'https://beautifiedyou.vercel.app/',
    featured: true,
  },
  {
    name: 'CloudTask',
    date: 'Jul 2026',
    tags: ['AWS', 'ECS Fargate', 'Terraform', 'NestJS', 'Next.js', 'SQS'],
    description:
      'A deliberately over-engineered multi-user task manager, built to exercise a realistic production AWS stack end to end rather than read about it. The app is modest; the point is that it runs on VPC + ALB + ECS Fargate + RDS + ElastiCache + SQS + S3 + Secrets Manager + CloudWatch, provisioned from a runbook. Testcontainers and LocalStack so tests hit real infrastructure, multi-stage non-root Docker targets, and CI that ends in a Trivy scan and an OIDC-authenticated push to ECR.',
    source: 'https://github.com/jubaerhosain/cloudtask',
    featured: true,
  },
  {
    name: 'Academic Management System',
    date: 'Jan 2025 – Jan 2026',
    tags: ['NestJS', 'PostgreSQL', 'MySQL', 'BullMQ', 'Next.js'],
    description:
      'An ERP for running an educational institution — programmes, classrooms, students, teachers, semesters, admissions, exams, attendance, audit logs. Built twice: v1 was a conventional single-tenant app, and v2 is a deliberate rewrite with multi-tenancy as a first-class concern from the start — a dedicated tenants module, a tenant-provisioning runbook and scripts, and a companion mobile app. Building the same domain twice and changing the architecture the second time is the useful part.',
  },
  {
    name: 'easy-shop',
    date: 'Jul 2024 – Jan 2025',
    tags: ['NestJS', 'MongoDB', 'Next.js', 'FastAPI', 'scikit-learn', 'Ollama'],
    description:
      'A commerce platform built as five independently deployable services, used as a vehicle for learning breadth: a NestJS core API integrating SSLCommerz, a Next.js storefront and admin, an Expo mobile app, a FastAPI recommender trained with scikit-learn, and an LLM shopping assistant running a fine-tuned Mistral. 1,147 commits over seven months — my largest personal codebase, and over-architected on purpose.',
  },
  {
    name: 'Cefalo Blog',
    date: 'Feb – May 2024',
    tags: ['TypeScript', 'Express', 'MySQL', 'Sequelize', 'React', 'Tailwind CSS'],
    description:
      'A blogging platform built end to end during my training at Cefalo — rich-text authoring with image uploads, likes, threaded comments and replies, JWT and social login, and role-based access control. 648 commits across two repos in three months, and my first professional TypeScript work.',
  },
  {
    name: 'Mini LinkedIn',
    date: 'Oct 2022',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'MinIO', 'Nginx'],
    description:
      'A microservice-based social app — auth, posts, image uploads and notifications split into separate services behind Nginx, built for the distributed systems course.',
    source: 'https://github.com/jubaerhosain/mini-linkedin',
  },
  {
    name: 'SPL Management System',
    date: 'Oct 2022',
    tags: ['Express', 'MySQL', 'React', 'Tailwind CSS'],
    description:
      'A platform for the Software Project Lab at IIT, University of Dhaka — supervisor allocation, mark evaluation, and progress monitoring for student project work.',
    source: 'https://github.com/jubaerhosain/spl-management-system',
  },
  {
    name: 'Smart GPT',
    date: 'Sep 2023 · 24h hackathon',
    tags: ['Express', 'React', 'MongoDB'],
    description:
      'A BUET CSE FEST 2023 hackathon build that generates customised PDFs — children\'s books, travel blogs — from text, voice and image input, with a platform to share and browse them.',
    source: 'https://github.com/jubaerhosain/smart-gpt',
  },
  {
    name: 'Potato Disease Classification',
    date: 'Oct 2022',
    tags: ['Python', 'Keras', 'FastAPI', 'React'],
    description:
      'A deep-learning model that detects potato leaf disease from a photograph, served through a FastAPI backend with a React front end.',
    source: 'https://github.com/jubaerhosain/potato-disease-classification',
  },
  {
    name: 'Gomoku',
    date: 'Jan – Mar 2022',
    tags: ['Python', 'PyQt5'],
    description:
      'An AI opponent for five-in-a-row, using minimax with alpha-beta pruning and a hand-written heuristic evaluator, wrapped in a PyQt5 desktop UI.',
    source: 'https://github.com/jubaerhosain/gomoku',
  },
  {
    name: 'Bangla Text Summarizer',
    date: 'Aug 2022',
    tags: ['Java'],
    description: 'An extractive text-summarisation tool for Bangla.',
    source: 'https://github.com/jubaerhosain/bangla-text-summarizer',
  },
];

export const skills: { label: string; items: string[] }[] = [
  {
    label: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'SQL', 'Java', 'C', 'C++'],
  },
  {
    label: 'Backend',
    items: ['NestJS', 'Express', 'FastAPI', 'REST APIs', 'OpenAPI / Swagger', 'Temporal', 'Kafka'],
  },
  {
    label: 'Frontend',
    items: ['React', 'Next.js', 'React Native / Expo', 'Redux Toolkit', 'Tailwind CSS'],
  },
  {
    label: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'TypeORM', 'Prisma', 'Sequelize'],
  },
  {
    label: 'Infra & Tooling',
    items: ['Docker', 'AWS', 'GitHub Actions', 'Jenkins', 'Nginx', 'Turborepo', 'Linux', 'Jira'],
  },
  {
    label: 'Testing & Observability',
    items: ['Jest', 'Testcontainers', 'Playwright', 'Datadog', 'Sentry'],
  },
  {
    label: 'CS Fundamentals',
    items: ['Data Structures & Algorithms', 'System Design', 'Database Design', 'OOP'],
  },
  {
    label: 'Exploring',
    items: ['Kubernetes', 'Terraform', 'LangChain / LangGraph', 'RAG & agents'],
  },
];

export interface JudgeProfile {
  name: string;
  logo: string;
  rating?: string;
  detail?: string;
  url: string;
}

export const judges: JudgeProfile[] = [
  {
    name: 'LeetCode',
    logo: '/images/leetcode.png',
    rating: '1879',
    detail: 'Knight · best rank 652',
    url: 'https://leetcode.com/igloo11/',
  },
  {
    name: 'HackerEarth',
    logo: '/images/hackerearth.png',
    rating: '1884',
    detail: 'Best rank 23',
    url: 'https://www.hackerearth.com/@igloo11',
  },
  {
    name: 'CodeChef',
    logo: '/images/codechef.png',
    rating: '1810',
    detail: '4★ · best rank 96',
    url: 'https://www.codechef.com/users/igloo11',
  },
  {
    name: 'Codeforces',
    logo: '/images/codeforces.png',
    rating: '1401',
    detail: 'Specialist',
    url: 'https://codeforces.com/profile/igloo11',
  },
  {
    name: 'HackerRank',
    logo: '/images/hackerrank.png',
    url: 'https://www.hackerrank.com/igloo11',
  },
  {
    name: 'SPOJ',
    logo: '/images/spoj.png',
    url: 'https://www.spoj.com/users/igloo11/',
  },
  {
    name: 'Toph',
    logo: '/images/toph.png',
    url: 'https://toph.co/u/igloo11',
  },
  {
    name: 'LightOJ',
    logo: '/images/lightoj.png',
    url: 'https://lightoj.com/user/igloo11',
  },
  {
    name: 'AtCoder',
    logo: '/images/atcoder.png',
    url: 'https://atcoder.jp/users/igloo11',
  },
];

export const achievementsLead =
  '1700+ problems solved across LeetCode, Codeforces, CodeChef, HackerEarth and six other judges, under the handle <span class="highlight">igloo11</span>.';

export interface Achievement {
  title: string;
  placement: string;
  year?: string;
}

export const achievements: Achievement[] = [
  { title: 'Independence Cup Programming Contest', placement: 'Champion', year: '2022' },
  { title: 'Phitron Programming Contest', placement: '6th of 650+', year: '2022' },
  {
    title: 'SEC Inter-University Junior Programming Contest',
    placement: '17th of 100+',
    year: '2022',
  },
  { title: 'ICPC Asia Dhaka Regional', placement: 'Online preliminarist', year: '2021, 2022' },
  { title: 'BUET CSE FEST Hackathon', placement: 'Onsite finalist', year: '2023' },
  { title: 'Meta Hacker Cup', placement: 'Round 2 qualifier', year: '2023' },
  { title: 'Code Samurai Inter-University Hackathon', placement: 'Round 2', year: '2024' },
];

export const contact = {
  heading: 'Get in touch',
  body: 'Happy to talk about backend architecture, multi-tenancy, billing systems, or interesting problems generally. Email is the fastest way to reach me.',
};

export interface ContactItem {
  icon: 'mail' | 'github' | 'linkedin' | 'location';
  label: string;
  value: string;
  href?: string;
}

export const contactItems: ContactItem[] = [
  { icon: 'mail', label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: 'github', label: 'GitHub', value: 'github.com/jubaerhosain', href: site.github },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin.com/in/jubaerhosain', href: site.linkedin },
  { icon: 'location', label: 'Location', value: site.location },
];
