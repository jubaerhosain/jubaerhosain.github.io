<!-- 2-PAGE CV DRAFT — same visual structure as the 1-page version, but with a summary,
     the trainee engagements broken out, more projects, certifications, and the full
     competitive-programming record. Body ≈ 1,050 words. -->

<div align="center">

# MD. JUBAER HOSAIN

**Backend-focused Fullstack Software Engineer**

Dhaka, Bangladesh | jubaerhosain1119@gmail.com | +8801717407400

LinkedIn: linkedin.com/in/jubaerhosain | GitHub: github.com/jubaerhosain | jubaerhosain.github.io

</div>

---

## SUMMARY

Backend-focused fullstack engineer with ~2.5 years building a multi-tenant subscription SaaS
in production — **251 merged pull requests** across a platform of 136 entities and 605 API
routes, spanning tenant-isolation architecture, billing correctness across four payment
providers, and production observability. Strong problem-solving base from competitive
programming (1700+ problems, LeetCode Knight). Ships AI-assisted, and maintains published
open-source tooling.

---

## EXPERIENCE

**Cefalo Bangladesh Ltd.** — Dhaka, Bangladesh · Jan 2024 – Present

*Primary product: Subrite, a multi-tenant subscription and media-monetization SaaS used by
Nordic publishers — 136 entities, 605 API routes, 623 frontend routes, 4 card providers,
4 locales, enterprise accounts of 3000+ members.*

### Associate Software Engineer II · Mar 2026 – Present

- **Designed and rolled out the platform-wide tenant-isolation layer**, turning multi-tenant
  safety from a per-query convention into an enforced guarantee — a generic scoped repository
  over TypeORM and continuation-local storage that scopes every read and stamps every write,
  with an explicit escape hatch. Raised tenant-scoped entities from **78 to 90 of 136** across
  five modules, backed by **~830 lines** of unit and integration tests, and documented it as
  the codebase default so later module conversions were small and low-risk.
- **Self-originated that programme** after finding and fixing two live cross-tenant data
  exposure paths — payment-provider settings readable across tenants, and subscription records
  reachable by the wrong user — then generalised the fix into architecture rather than patching
  the same class of bug twice.
- **Ended a recurring class of incorrect-charge incidents** by diagnosing a four-part compound
  defect in the recurring-payment workflow — status read once at scheduling time, no
  terminal-state guard, in-flight workflow never cancelled, incomplete audit trail — and
  unifying the charge guards across **all four card providers**, which had each carried their
  own divergent variant. **40 tests** added.
- **Built idempotent operator recovery tooling** for the worst state a billing system can
  reach: money debited at the payment provider with no local record. Recovered real customer
  payments without double-charging, leaving a reusable mechanism rather than one-off SQL.
- **Repaired corrupted billing data in production, safely and verifiably** — read-only preview
  whose output doubles as the rollback record, snapshot table, transactional apply,
  attribution tags on every touched row, and deliberately narrow inclusion rules that excluded
  ambiguous cases. Became the template for later data operations in the repository.
- **Made the platform's largest enterprise subscriptions usable at 3000+ members** by
  replacing unbounded data loading with paginated APIs, eliminating an N+1 through batched
  lookups, and shipping the API-contract change behind a documented deprecation path instead
  of a break.
- **Cut production alert noise so genuine failures surface** — eliminated **114 Datadog
  error-tracking hits in 14 days** from expected webhook duplicates, diagnosed by verifying in
  Datadog which database constraint was actually being hit, and rewrote third-party outage
  alerting from one error per scheduled check to one per **two-hour** window.
- **Diagnosed and closed revenue leakage** in billing-period arithmetic, where annual
  e-invoice reactivations granted roughly a full extra billing period of free service, and a
  paid-invoice check compared the wrong date field in three duplicated places.
- **Standardised API error handling** behind one centralised normaliser, replacing six
  per-form error maps across the admin money flows, and removed **1,233 net lines** by
  migrating the most-used admin screen and all ten of its filters onto a shared framework.
- Worked independently across backend, frontend and database, coordinating directly with the
  product owner, CTO and non-technical customer support to triage escalations and agree scope.

### Associate Software Engineer I · Mar 2025 – Mar 2026

- Delivered fullstack features across Subrite using **NestJS and Next.js**, and led onboarding
  of new tenants with diverse payment integrations — Stripe, Vipps, Nets, SwedbankPay and
  Norwegian **EHF/Avtalegiro e-invoicing**.
- **Moved tenant configuration from staff-mediated to self-service** across settings,
  branding, communication and payment providers, reducing day-to-day operational load on the
  internal team — including a per-brand configuration system giving each brand its own
  hostname, logo, sender identity and one-time-password templates.
- **Built out email infrastructure on SendGrid across four Nordic languages**, improving
  deliverability, consent handling and templates, with hard- versus soft-bounce tracking and
  an event-priority model — necessary because provider events arrive out of order and a later,
  less definitive event must not overwrite an earlier one.
- **Extracted communication senders into a first-class approvable entity via a four-step
  ordered schema migration**, because doing it in one step risked losing every tenant's sender
  configuration.
- Delivered invoicing improvements that unblocked payment from business customers, plus
  reusable embeddable widgets published as versioned bundles so live third-party embeds don't
  change behaviour without warning.
- Built **repeatable tenant onboarding data migrations for six media tenants**, dry-run by
  default and requiring an explicit apply flag, making imports reviewable and safe to hand
  over.
- Carried production hotfix and support-escalation ownership. Across both Subrite roles,
  **56 of 251 merged PRs (22%) went straight to production as hotfixes.**

### Trainee Software Engineer · Jan 2024 – Feb 2025

- **Cefalo Payroll** (May 2024 – Feb 2025): **477 commits over 10 months.** Delivered employee
  management, salary calculation and tax-compliance workflows that replaced manual payroll
  processing. Integrated **Kafka** for asynchronous exchange with the HR Portal. NestJS,
  TypeORM, MySQL, MinIO; Next.js, Redux Toolkit, Ant Design. Reported an
  information-disclosure defect where error messages leaked database query details.
- **Cefalo ATS** (Nov – Dec 2024): one-month engagement — became productive on an unfamiliar
  codebase quickly and fixed reported defects across backend and frontend. NestJS, Prisma,
  Jenkins CI, Turborepo monorepo behind Nginx.
- **Cefalo Blog** (Jan – May 2024): two months of intensive training on HTTP, REST and core
  web concepts, then built a fullstack blogging platform end to end — rich-text authoring with
  image uploads, threaded comments, JWT auth with social login, and role-based access control.
  **648 commits in three months.**

Throughout: proactive code review, turning vague requirements into scoped and broken-down
tasks, and AI-assisted delivery with **Claude and Cursor**, including committed agent context
so the tooling stays useful for the next engineer.

---

## PROJECTS & OPEN SOURCE

**nestjs-transactions** | *TypeScript, NestJS, TypeORM, Prisma, pnpm* · Jul 2026 – Present
- Authored and published two MIT npm packages (**@nestjs-transactions/typeorm v5.0.3**,
  **/prisma v1.0.4**) providing a declarative `@Transactional()` decorator that propagates
  transactions across service boundaries via AsyncLocalStorage with no monkey-patching, built
  as a maintained replacement for an unmaintained predecessor.
- pnpm monorepo, Changesets releases, dockerized dual-Postgres integration tests, published
  documentation site, and CI that opens a nightly dependency-upgrade pull request. Grew
  directly out of the request-scoped transaction problem first encountered on Cefalo Payroll.

**Mess Ledger** | *NestJS 10, TypeORM, PostgreSQL 18, Expo 54, React Native* · Feb 2026 – Present
- Shipped a mobile product end to end: a 10-module API and a React Native app sharing a
  **generated OpenAPI client** for wire-level type safety, with subscriptions, push
  notifications, PDF reports, Sentry, argon2/JWT auth, and a Postgres UNLOGGED-table cache
  store with per-entity eviction policies.
- CI enforces branch and merge policy via a workflow guard and a committed pre-push hook;
  environment variables are fully validated so a missing value fails boot.

**CV Analyzer AI Agent** | *FastAPI, LangChain, Qdrant, OpenAI/Ollama, NestJS, Next.js* · Jul 2025
- Built real-time PDF parsing, the semantic-search API, and chat context and memory for a RAG
  recruitment assistant that ranks candidate CVs against a job description — including
  **anonymization of extracted personal data before it reaches the model**.

**CloudTask** | *Turborepo, Next.js, NestJS, AWS ECS Fargate, RDS, SQS, S3* · Jul 2026
- AWS reference architecture built in 9 days: monorepo with web app, API and SQS worker, Zod
  shared contracts, Testcontainers integration tests, Playwright E2E, Trivy scanning, and
  OIDC-authenticated container releases to ECR.

**easy-shop** | *NestJS, MongoDB, Next.js, Expo, FastAPI, scikit-learn, Ollama* · Jul 2024 – Jan 2025
- **1,147 commits.** Five-service commerce platform: API with local payment-gateway and Google
  OAuth integration, storefront, mobile app, a scikit-learn recommendation service, and a
  fine-tuned Mistral assistant served through Ollama.

**Academic Management System (v1 and v2)** | *NestJS, TypeORM, MySQL → PostgreSQL, BullMQ* · 2025 – 2026
- 282 commits on v1, then a **multi-tenant v2 rewrite** on PostgreSQL with tenant provisioning
  scripts, audit logging, and admissions, exams and attendance domains.

Also: **anthropic-labs**, a public lab series on the Claude API covering streaming, tool use, a
hand-written agentic loop and token accounting; a **60-topic C++ algorithms library** with 805
commits; and a **DevOps portfolio** covering Terraform-provisioned AWS, Kubernetes zero-downtime
rolling updates, and a Helm-installed Prometheus/Grafana/Loki stack.

---

## TECHNICAL SKILLS

- **Languages**: TypeScript, JavaScript, SQL, Python, Java, C, C++
- **Backend**: NestJS, Node.js, Express, FastAPI, REST APIs, OpenAPI/Swagger
- **Frontend**: React 19, Next.js 16 (App Router, server actions), Tailwind CSS, Ant Design,
  MUI, shadcn/Radix, TanStack Query, Redux Toolkit, next-intl
- **Databases & data**: PostgreSQL, MySQL, MongoDB, Redis, TypeORM, Prisma, Sequelize, schema
  design, migrations, production data operations
- **Workflow & async**: Temporal workflows, Bull/BullMQ, Kafka, cron jobs, background workers,
  event-driven architecture
- **Payments & billing**: Stripe, Vipps, Nets, SwedbankPay, EHF/BIS3/Avtalegiro e-invoicing,
  recurring billing, dunning
- **Communication**: SendGrid, SMS, Firebase Cloud Messaging push notifications
- **Observability**: Datadog, Sentry, structured logging, production incident response
- **Cloud & DevOps**: Docker, Docker Compose, GitHub Actions, AWS (ECS, RDS, S3, SQS,
  ElastiCache, IAM, VPC), Kubernetes, Terraform, Helm, Prometheus/Grafana/Loki, Jenkins, Nginx
- **Testing**: Jest, unit and integration testing, React Testing Library, Testcontainers
- **Auth & security**: JWT, NextAuth, OIDC/OAuth 2.0, RBAC, multi-tenant isolation, argon2,
  OWASP practices
- **AI-assisted development**: Claude, Cursor, agent context files and MCP, Anthropic SDK,
  LangChain, Qdrant, RAG, Ollama
- **Fundamentals**: Data structures and algorithms, system design, database design, SOLID,
  design patterns

---

## COMPETITIVE PROGRAMMING

**1700+ problems solved** across LeetCode, Codeforces, CodeChef and HackerEarth. Handle
`igloo11`.

- **LeetCode** — rating 1879, **Knight (top 5%)**, best global rank **652**
- **HackerEarth** — rating 1884, best global rank **23**
- **CodeChef** — rating 1810, **4-star**, best global rank **96**
- **Codeforces** — rating 1401, **Specialist**

---

## AWARDS

**Champion** at Independence Cup Programming Contest 2022
**6th (out of 650+)** at Phitron Programming Contest 2022
**17th (out of 100+)** at SEC Inter-University Junior Programming Contest 2022
**Onsite finalist** at BUET CSE FEST Hackathon 2023
**Round 2 qualifier** at Meta Hacker Cup 2023
**Round 2** at Code Samurai Inter-University Hackathon 2024
**Online preliminary** at ICPC Asia Dhaka Regional 2021 and 2022

---

## COURSES & CERTIFICATIONS

- AWS Certified Developer Associate (DVA-C02) — Udemy course
- AWS Certified Solutions Architect Associate — Udemy course
- Building with the Claude API — Anthropic
- Mastering DevOps: From Fundamentals to Advanced Practices — Ostad
- React Native: The Practical Guide — Udemy
- HackerRank: Problem Solving (Intermediate), Java (Basic), JavaScript (Basic)

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* — Dhaka, Bangladesh
