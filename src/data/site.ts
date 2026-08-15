export const site = {
  name: 'Md. Jubaer Hosain',
  title: 'Associate Software Engineer II',
  positioning: 'Backend-focused fullstack engineer',
  company: 'Cefalo Bangladesh Ltd.',
  tagline:
    'I build backend-heavy SaaS systems with TypeScript, NestJS and PostgreSQL: multi-tenant architecture, payment integrations, and production data migrations.',
  description:
    'Md. Jubaer Hosain, backend-focused fullstack engineer building multi-tenant subscription SaaS with TypeScript, NestJS and PostgreSQL.',
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

/**
 * Section order, the single source of truth. `ui/Section.astro` derives each
 * section's number from an entry's position here, so reordering means editing
 * this array and `pages/index.astro`, nothing else.
 */
export const nav: NavItem[] = [
  { label: 'intro', href: '#intro', id: 'intro' },
  { label: 'experience', href: '#experience', id: 'experience' },
  { label: 'projects', href: '#projects', id: 'projects' },
  { label: 'skills', href: '#skills', id: 'skills' },
  { label: 'achievements', href: '#achievements', id: 'achievements' },
  { label: 'courses', href: '#courses', id: 'courses' },
  { label: 'education', href: '#education', id: 'education' },
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
 * Introduction prose, one short paragraph. `<span class="highlight">` marks
 * emphasis, matching the `.highlight` rule in global.css; rendered with set:html.
 *
 * Deliberately kept to two or three lines. Everything it used to carry
 * (nestjs-transactions, the AsyncLocalStorage thread, what I'm learning) already
 * appears further down the page in Projects or Skills.
 */
export const about: string[] = [
  'I\'m a <span class="highlight">backend-focused fullstack engineer</span> at Cefalo Bangladesh Ltd., working on a <span class="highlight">multi-tenant subscription SaaS</span> for Nordic publishers. Most of my work sits where correctness is expensive: tenant isolation, billing across four card providers, and production data migrations. Before that I came up through competitive programming, 1700+ problems solved and LeetCode Knight.',
];

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
      'Subrite, a multi-tenant subscription and media monetization SaaS built for a Nordic client and live in production with publishers.',
    introLink: { label: 'subrite.no', url: 'https://www.subrite.no' },
    stack: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL', 'Next.js', 'Temporal', 'Datadog'],
    roles: [
      {
        title: 'Associate Software Engineer II',
        period: 'Mar 2026 – Present',
        bullets: [
          '<span class="highlight">Designed and rolled out multi-tenant isolation</span>, enforcing tenant-scoped data access across the platform after finding and fixing two cross-tenant exposures myself.',
          '<span class="highlight">Improved recurring-payment reliability</span> across Stripe, Vipps, SwedbankPay and Nets by unifying the charge guards each provider had implemented differently, ending a class of incorrect-charge incidents.',
          '<span class="highlight">Shipped features end to end</span>, turning a vague requirement into a plan and concrete tasks, then implementing, testing and deploying it and owning the result in production through monitoring, feedback and hotfix.',
        ],
      },
      {
        title: 'Associate Software Engineer I',
        period: 'Mar 2025 – Mar 2026',
        bullets: [
          '<span class="highlight">Led onboarding of new tenants</span>, working with technical and non-technical stakeholders to map legacy data and run safe, repeatable migrations.',
          '<span class="highlight">Delivered fullstack features</span> across the platform with NestJS and Next.js, from clarifying the requirement and breaking it into tasks through implementation, testing and release.',
          'Carried production hotfix and support-escalation ownership, working directly with the product owner and non-technical customer support.',
        ],
      },
      {
        title: 'Trainee Software Engineer',
        period: 'Jan 2024 – Feb 2025',
        bullets: [
          '<span class="highlight">Cefalo Payroll:</span> contributed to the NestJS and Next.js payroll platform, delivering employee management, salary calculation, tax-compliance workflows, and Kafka-based asynchronous exchange with the HR Portal.',
          '<span class="highlight">Cefalo ATS:</span> joined an unfamiliar codebase for a one-month engagement and fixed backend and frontend defects to stabilise recruitment workflows.',
          '<span class="highlight">Cefalo Blog:</span> trained on HTTP, REST and web fundamentals, then built a blogging platform end to end with rich-text authoring, JWT and social auth, and role-based access control.',
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
    period: '2019 – 2024',
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
      'Published npm packages giving NestJS a @Transactional() decorator, with transaction propagation through AsyncLocalStorage and configurable isolation levels. Written as a maintained replacement for the unmaintained typeorm-transactional, with adapters for TypeORM and Prisma and integration tests against real Postgres.',
    source: 'https://github.com/jubaerhosain/nestjs-transactions',
    featured: true,
  },
  {
    name: 'Mess Ledger',
    date: 'Feb 2026 – present',
    tags: ['NestJS', 'Expo', 'React Native', 'PostgreSQL', 'TypeORM', 'Sentry'],
    description:
      'A cost-splitting app for shared households, where several people cook together and split grocery and meal costs monthly. Shipped to app stores with subscriptions and ads; the API emits an OpenAPI spec and the mobile app regenerates a typed client from it, so a breaking change fails at compile time.',
    featured: true,
  },
  {
    name: 'CV Analyzer AI Agent',
    date: 'Jul – Aug 2025',
    tags: ['FastAPI', 'LangChain', 'Qdrant', 'OpenAI', 'NestJS', 'MinIO'],
    description:
      'A recruitment assistant that reads a pool of CVs and ranks them against a job description through a RAG pipeline, so a recruiter gets a structured comparison rather than a folder of PDFs. I built the real-time parsing, the semantic-search API, chat memory, and the PII anonymisation that runs before anything reaches the model.',
    featured: true,
  },
  {
    name: 'Beautified You',
    date: 'May 2024 – Apr 2025',
    tags: ['NestJS', 'MongoDB', 'Next.js', 'Ant Design', 'Swagger'],
    description:
      'An e-commerce and inventory platform built for a cosmetics retailer, live with real customers ordering through it. I owned the backend: catalogue and inventory management, order processing, and the sales dashboard the shop owner runs the business from.',
    live: 'https://beautifiedyou.vercel.app/',
    featured: true,
  },
  {
    name: 'CloudTask',
    date: 'Jul 2026',
    tags: ['AWS', 'ECS Fargate', 'Terraform', 'NestJS', 'Next.js', 'SQS'],
    description:
      'A deliberately over-engineered task manager, built to exercise a production AWS stack end to end rather than read about it. VPC, ALB, ECS Fargate, RDS, ElastiCache, SQS and Secrets Manager, with Testcontainers and LocalStack so tests hit real infrastructure and CI ending in an OIDC-authenticated push to ECR.',
    source: 'https://github.com/jubaerhosain/cloudtask',
    featured: true,
  },
  {
    name: 'Academic Management System',
    date: 'Jan 2025 – Jan 2026',
    tags: ['NestJS', 'PostgreSQL', 'MySQL', 'BullMQ', 'Next.js'],
    description:
      'An ERP for running an educational institution: programmes, students, teachers, semesters, admissions, exams and attendance. Built twice, with v2 a deliberate rewrite putting multi-tenancy in from the start, plus a tenant-provisioning runbook and a companion mobile app.',
  },
  {
    name: 'easy-shop',
    date: 'Jul 2024 – Jan 2025',
    tags: ['NestJS', 'MongoDB', 'Next.js', 'FastAPI', 'scikit-learn', 'Ollama'],
    description:
      'A commerce platform built as five independently deployable services, used as a vehicle for learning breadth. A NestJS core API integrating SSLCommerz, a Next.js storefront and admin, an Expo mobile app, a FastAPI recommender trained with scikit-learn, and an LLM shopping assistant on a fine-tuned Mistral.',
  },
  {
    name: 'Cefalo Blog',
    date: 'Feb – May 2024',
    tags: ['TypeScript', 'Express', 'MySQL', 'Sequelize', 'React', 'Tailwind CSS'],
    description:
      'A blogging platform built end to end during my training at Cefalo, with rich-text authoring and image uploads, likes, threaded comments and replies, JWT and social login, and role-based access control. My first professional TypeScript work.',
  },
  {
    name: 'Mini LinkedIn',
    date: 'Oct 2022',
    tags: ['React', 'Node.js', 'MongoDB', 'Docker', 'MinIO', 'Nginx'],
    description:
      'A microservice-based social app with auth, posts, image uploads and notifications split into separate services behind Nginx. Built for the distributed systems course.',
    source: 'https://github.com/jubaerhosain/mini-linkedin',
  },
  {
    name: 'SPL Management System',
    date: 'Oct 2022',
    tags: ['Express', 'MySQL', 'React', 'Tailwind CSS'],
    description:
      'A platform for the Software Project Lab at IIT, University of Dhaka, covering supervisor allocation, mark evaluation, and progress monitoring for student project work.',
    source: 'https://github.com/jubaerhosain/spl-management-system',
  },
  {
    name: 'Smart GPT',
    date: 'Sep 2023 · 24h hackathon',
    tags: ['Express', 'React', 'MongoDB'],
    description:
      'A BUET CSE FEST 2023 hackathon build that generates customised PDFs, such as children\'s books and travel blogs, from text, voice and image input. Comes with a platform to share and browse them.',
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
    items: ['NestJS', 'Express', 'FastAPI', 'REST APIs', 'OpenAPI / Swagger'],
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
    items: ['Kubernetes', 'Terraform', 'Kafka', 'Temporal', 'LangChain / LangGraph', 'RAG & agents'],
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

/**
 * Course completions and skill certificates.
 *
 * Wording rule, from CV-MASTER.md §8 and the note in portfolio-context/latex/
 * resume.tex: the AWS entries are Udemy *course completions*, not the proctored
 * DVA-C02 / SAA-C03 exams. "AWS Certified …" appears only as part of a Udemy
 * course title, always next to `Udemy` as the provider, never as a credential
 * held. Do not relabel these as certifications.
 */
export const coursesLead =
  'Course completions and skill certificates, each linked to its credential. The AWS entries are <span class="highlight">Udemy course completions</span>, not the proctored AWS exams.';

export interface Course {
  name: string;
  provider: string;
  year?: string;
  url: string;
}

export const courses: Course[] = [
  {
    name: 'Ultimate AWS Certified Developer Associate 2026 (DVA-C02)',
    provider: 'Udemy',
    year: '2026',
    url: 'https://www.udemy.com/certificate/UC-5644d052-45a5-420b-9888-cea3973fc3d0/',
  },
  {
    name: 'Ultimate AWS Certified Solutions Architect Associate 2026',
    provider: 'Udemy',
    year: '2026',
    url: 'https://www.udemy.com/certificate/UC-b2345c4a-fb8f-46f5-a08d-db30bcf0c2b6/',
  },
  {
    name: 'Building with the Claude API',
    provider: 'Anthropic',
    url: 'https://verify.skilljar.com/c/uqss9jm5tspk',
  },
  {
    name: 'Mastering DevOps: From Fundamentals to Advanced Practices',
    provider: 'Ostad',
    url: 'https://ostad.app/share/certificate/c38498-md.-jubaer-hosain',
  },
  {
    name: 'React Native – The Practical Guide',
    provider: 'Udemy',
    url: 'https://www.udemy.com/certificate/UC-b037a9da-e2db-477e-a7f5-2e28ac2a4c8d/',
  },
];

export interface Certificate {
  name: string;
  provider: string;
  logo: string;
  note?: string;
  url: string;
}

export const certificates: Certificate[] = [
  {
    name: 'Problem Solving (Intermediate)',
    provider: 'HackerRank',
    logo: '/images/hackerrank.png',
    url: 'https://www.hackerrank.com/certificates/c2575c2203f8',
  },
  {
    name: 'Problem Solving (Basic)',
    provider: 'HackerRank',
    logo: '/images/hackerrank.png',
    url: 'https://www.hackerrank.com/certificates/87843725b00c',
  },
  {
    name: 'Java (Basic)',
    provider: 'HackerRank',
    logo: '/images/hackerrank.png',
    url: 'https://www.hackerrank.com/certificates/4c24a51c3350',
  },
  {
    name: 'JavaScript (Basic)',
    provider: 'HackerRank',
    logo: '/images/hackerrank.png',
    url: 'https://www.hackerrank.com/certificates/41cbc875ba8a',
  },
  {
    name: "February Circuits '23",
    provider: 'HackerEarth',
    logo: '/images/hackerearth.png',
    note: 'Participation',
    url: 'https://drive.google.com/file/d/1GWmv8T1NP-6SlAzSYqf1Ze5Q70r8-tAI/view',
  },
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
