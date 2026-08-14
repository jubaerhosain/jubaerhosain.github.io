<!-- 1-PAGE CV DRAFT — structure mirrors the reference CV: no summary, experience first,
     metrics bolded inline. Body = 670 words; fits one page at the reference CV's density.
     If it spills, cut the CV Analyzer project or the Courses line first.
     Renders as: centered name, two contact lines, then ruled section headings. -->

<div align="center">

# MD. JUBAER HOSAIN

Dhaka, Bangladesh | jubaerhosain1119@gmail.com | +8801717407400

LinkedIn: linkedin.com/in/jubaerhosain | GitHub: github.com/jubaerhosain | jubaerhosain.github.io

</div>

---

## EXPERIENCE

**Cefalo Bangladesh Ltd.** — Dhaka, Bangladesh · Jan 2024 – Present
*Subrite, a multi-tenant subscription SaaS for Nordic publishers — 136 entities, 605 API
routes, 4 payment providers, 4 locales. **251 merged PRs in 17 months, 56 of them production
hotfixes.***

**Associate Software Engineer II** · Mar 2026 – Present
- Designed and rolled out the platform-wide tenant-isolation layer, turning multi-tenant
  safety from a per-query convention into an enforced guarantee, raising tenant-scoped
  entities from **78 to 90 of 136** — a programme self-originated after finding and fixing two
  cross-tenant data-exposure paths.
- Ended a class of incorrect-charge incidents by diagnosing a four-part defect in the
  recurring-payment workflow and unifying charge guards across **all four card providers**,
  which had each carried a divergent implementation; **40 tests** added. Built idempotent
  recovery tooling that reclaimed real payments debited at the provider but never recorded
  locally.
- Made the largest enterprise subscriptions usable at **3000+ members** with paginated APIs
  shipped behind a deprecation path, and removed **1,233 net lines** consolidating duplicated
  admin interfaces onto a shared framework.
- Cut production alert noise so genuine failures surface — eliminated **114 Datadog error
  hits in 14 days** and rewrote outage alerting from one error per check to one per
  **two-hour** window.
- Reviewed teammates' pull requests proactively, turned vague requirements into scoped
  subtasks, and delivered AI-assisted with Claude and Cursor.

**Associate Software Engineer I** · Mar 2025 – Mar 2026
- Delivered fullstack features with NestJS and Next.js, onboarding new tenants across Stripe,
  Vipps, Nets, SwedbankPay and Norwegian EHF/Avtalegiro e-invoicing.
- Moved tenant configuration from staff-mediated to self-service across settings, branding,
  communication and payment providers, cutting operational load on the internal team.
- Built email infrastructure on SendGrid across **four Nordic languages** with hard- and
  soft-bounce tracking, and repeatable onboarding data migrations for **six media tenants**.

**Trainee Software Engineer** · Jan 2024 – Feb 2025
- Contributed **477 commits over 10 months** to Cefalo's payroll platform (NestJS, TypeORM,
  MySQL, Kafka, MinIO; Next.js and Redux Toolkit), delivering salary-calculation and
  tax-compliance workflows that replaced manual processing.
- Built a fullstack blogging platform end to end with JWT auth, social login and RBAC after
  two months of intensive training on HTTP, REST and core web concepts.

---

## PROJECTS

**nestjs-transactions** | *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
- Authored and published two MIT npm packages (**v5.0.3** / **v1.0.4**): a declarative
  `@Transactional()` decorator propagating transactions via AsyncLocalStorage with no
  monkey-patching, with Changesets releases and dockerized dual-Postgres integration tests.

**Mess Ledger** | *NestJS, PostgreSQL, Expo, React Native* · Feb 2026 – Present
- Shipped a mobile product end to end — API and React Native app sharing a generated OpenAPI
  client, with subscriptions, push notifications, PDF reports and Sentry.

**CV Analyzer AI Agent** | *FastAPI, LangChain, Qdrant, OpenAI, NestJS* · Jul 2025
- Built real-time PDF parsing, semantic search and chat memory for a RAG recruitment
  assistant, anonymizing extracted PII before it reaches the model.

---

## SKILLS & ACHIEVEMENTS

**Technical**: TypeScript, JavaScript, SQL, Python, Java, C++ · NestJS, Node.js, Express,
FastAPI, REST APIs · React, Next.js, Tailwind CSS · PostgreSQL, MySQL, MongoDB, Redis,
TypeORM, Prisma · Temporal, BullMQ, Kafka, event-driven architecture · Stripe, Vipps, Nets,
SwedbankPay, EHF e-invoicing · Datadog, Sentry, Jest, Docker, AWS, GitHub Actions · JWT,
OIDC/OAuth 2.0, RBAC, multi-tenant isolation · Claude, Cursor, LangChain, RAG

**Problem-Solving**: 1700+ problems solved. **LeetCode Knight (top 5%)**, best global rank
652 · **HackerEarth** best global rank 23 · **CodeChef 4-star**, best global rank 96 ·
**Codeforces Specialist**

**Courses**: AWS Certified Developer Associate · AWS Solutions Architect Associate ·
Building with the Claude API · Mastering DevOps

---

## AWARDS

**Champion** at Independence Cup Programming Contest 2022
**6th (out of 650+)** at Phitron Programming Contest 2022
**17th (out of 100+)** at SEC Inter-University Junior Programming Contest 2022
**Onsite finalist** at BUET CSE FEST Hackathon 2023
**Round 2** at Meta Hacker Cup 2023 · Code Samurai Hackathon 2024
**Online preliminary round** at ICPC Asia Dhaka Regional 2021 & 2022

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* — Dhaka, Bangladesh
