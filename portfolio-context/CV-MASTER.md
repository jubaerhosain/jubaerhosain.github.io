# CV Master — Md. Jubaer Hosain

> **What this file is.** The complete, evidence-backed dataset for your CV. Every bullet
> below is tagged with where it came from, so you can defend it in an interview or cut it if
> you'd rather not. It deliberately holds **more than fits on a CV** — pick from it.
>
> **Sources mined:** `MY-PRS.md.csv` (251 merged PRs, Mar 2025 – Jul 2026) ·
> `CV-MATERIAL.md.csv` · the Cefalo CV PDF · your GitHub account incl. private repos
> (6,427 authored commits, 55 repos) · your portfolio site on both `main` and `rebuild-astro`.
>
> **Targets:** Optimizely Dhaka **Software Engineer II** (primary fit) and **Software
> Engineer I** (Campaign team).
>
> Companion files: `CV-CLIENTS.md` (tenant names and detail) · `CV-1PAGE.md` · `CV-2PAGE.md`.

---

## 1. Identity & contact

| Field | Value |
|---|---|
| Name | **Md. Jubaer Hosain** |
| Title | Associate Software Engineer II |
| Positioning | Backend-focused fullstack engineer |
| Location | Dhaka, Bangladesh |
| Email | jubaerhosain1119@gmail.com |
| Phone | +8801717407400 |
| LinkedIn | linkedin.com/in/jubaerhosain |
| GitHub | github.com/jubaerhosain |
| Portfolio | jubaerhosain.github.io |

Total professional experience: **Jan 2024 – Present ≈ 2 yr 7 mo.** Sits inside the SE II
band (2–5 yrs) and above the SE I band (1–2 yrs).

---

## 2. Summary options

Pick one for the 2-page version. The 1-page version omits the summary, as your reference CV
does.

**A — SE II weighted (recommended).**
> Backend-focused fullstack engineer with ~2.5 years building a multi-tenant subscription
> SaaS in production. 251 merged PRs across a platform of 136 entities and 605 API routes,
> including the tenant-isolation architecture, billing-correctness work across four payment
> providers, and production alerting. Strong problem-solving base from competitive
> programming (1700+ problems, LeetCode Knight).

**B — AI-first weighted (leans into the SE I posting's language).**
> Backend-focused fullstack engineer with ~2.5 years on a production multi-tenant SaaS,
> working AI-assisted end to end — Claude and Cursor in daily delivery, plus an LLM
> recruitment agent and published open-source tooling. 251 merged PRs spanning architecture,
> billing correctness and observability.

**C — Neutral / shortest.**
> Backend-focused fullstack engineer, ~2.5 years on a multi-tenant subscription SaaS.
> Owns features end to end: design, implementation, deployment, monitoring and hotfix.

---

## 3. Experience

### Cefalo Bangladesh Ltd. — Dhaka · Jan 2024 – Present

Client product throughout: **Subrite**, a multi-tenant subscription and media-monetization
SaaS used by Nordic publishers. Platform scale for reference: **136 entities, 605 API
routes, 623 frontend routes, 4 card providers, 4 locales.**

#### 3a. Associate Software Engineer II · Mar 2026 – Present

Candidate bullets — superset. `[evidence]` → `{posting keyword}`.

1. **Designed and rolled out the platform-wide tenant-isolation layer**, turning
   multi-tenant safety from a per-query convention into an enforced guarantee — a generic
   `TenantScopedRepository<T>` over TypeORM and continuation-local storage that scopes every
   read and stamps every write, with an explicit `.unscoped()` escape hatch. Raised
   tenant-scoped entities from **78 to 90 of 136** across five modules.
   `[PR #4893 — 35 files, +3142/-229, 48 commits, ~830 lines of tests; #5317, #5329, #5351, #5374]`
   → *{technical design, technical expertise, epic ownership}*
2. **Originated that programme from two cross-tenant exposures I found and fixed myself** —
   payment-provider settings readable across tenants, and subscription records reachable by
   the wrong user — then generalised the fix into architecture rather than patching twice.
   `[#3620 (3-line hotfix), #4432; programme framing in Appendix C]`
   → *{demonstrating initiative, critical thinking}*
3. **Ended a class of incorrect-charge incidents** by diagnosing a four-part compound defect
   in the recurring-payment workflow (status read once at scheduling time, no terminal-state
   guard, in-flight workflow not cancelled, incomplete audit) and unifying the charge guards
   across **all four card providers**, which had each carried their own divergent variant.
   `[#5194 — 17 files, 40 tests added, Urgent, raised from customer support]`
   → *{complex bug investigation, testing and troubleshooting}*
4. **Built operator recovery tooling** for the worst state a billing system can reach — money
   debited at the payment provider with no local record — matching on provider status plus
   subscription metadata, returning explicit `succeeded | already_processed | skipped`, and
   idempotent so it cannot double-charge. Recovered real customer payments.
   `[#5024 — production hotfix, +472/-0, batch-capped at 200]`
   → *{high-accountability support, PaaS/SaaS services}*
5. **Made the platform's largest enterprise subscriptions usable**, replacing unbounded data
   loading with paginated seat APIs for **3000+ member subscriptions**, eliminating an N+1
   via batched lookups, and shipping the API-contract change behind a Swagger deprecation
   path instead of a break.
   `[#5208 — 37 files, +2980/-310, est. L; #5249, #5231, #5368]`
   → *{moderate-to-complex problems, PaaS/SaaS at scale}*
6. **Cut production alert noise so genuine failures surface** — eliminated **114 Datadog
   error-tracking hits in 14 days** from expected webhook duplicates (diagnosed by verifying
   in Datadog which constraint was actually hit: 87 violations on one key vs 27 on another,
   which ruled out the obvious fix), and rewrote third-party feed alerting from
   one-error-per-check to **one alert per two-hour outage window**.
   `[#5270, #5370 (133 production errors), #5272, #5297, #5301, #5323, #5282 — 8-PR programme]`
   → *{identifies operational metrics, builds dashboards, incident retrospectives}* ← **strongest SE II match**
7. **Standardised API error handling** behind one centralised normaliser, replacing six
   per-form hardcoded error maps across the admin money flows, with translations and a Jest
   suite covering every fallback branch.
   `[#5316 — 12 files; #5331, #5354, and an in-progress module-agnostic extension]`
   → *{modern software quality techniques}*
8. **Repaired corrupted billing data in production, safely and verifiably** — read-only
   preview whose output doubles as the rollback record, snapshot table, transactional apply,
   attribution tags on every touched row, and deliberately narrow inclusion rules that
   excluded ambiguous cases. Became the template for later data-ops work in the repo.
   `[#5095 (+308/-0, all tenants), #5158 (Urgent)]`
   → *{critical thinking, high accountability}*
9. **Diagnosed and closed revenue leakage** in billing-period arithmetic: annual e-invoice
   reactivations were granting ~two years to next renewal instead of one period, and an
   invoice-already-paid check compared the wrong date field in three duplicated places.
   `[#5082, #5188 (hotfix), #5278]`
   → *{critical thinking, complex bugs}*
10. **Fixed a silent money-correctness bug** where locale-formatted decimal prices inflated
    amounts 10× and 100× (`249,50` → `24950`) and sub-krone amounts could not be entered at
    all — including migrating the underlying column from `integer` to `numeric` with a
    reversible migration.
    `[#5200 — Urgent]`
    → *{testing and troubleshooting}*
11. **Closed an authorization gap** where survey data was readable by anyone holding
    communications access, with an idempotent permission migration and server-side route
    enforcement that had been missing entirely.
    `[#5068 — Urgent, flagged security concern]`
12. **Consolidated duplicated interfaces**, migrating the admin panel's most-used screen and
    all ten of its filters onto a shared filter framework — a **net removal of 1,233 lines**
    — and extending the framework rather than special-casing it.
    `[#5346 — 45 files, +1872/-3105]`
    → *{utilizing feedback, technical expertise}*
13. **Worked independently across backend, frontend and database**, coordinating directly
    with the product owner, CTO and non-technical customer support to triage escalations and
    agree scope.
    `[CV-MATERIAL; corroborated by support-raised PRs #5194, #5229, #5158]`
    → *{agile delivery, utilizing feedback}*
14. **Reviewed teammates' pull requests proactively and turned vague requirements into
    scoped, broken-down tasks** before implementation.
    `[your own account — my-words.md; not visible in an authored-PR export]`
    → *{proactive code reviews}* ← **explicitly named in both postings**
15. **Delivered AI-assisted throughout** — Claude and Cursor in daily work, with committed
    agent context (`CLAUDE.md`, `.cursorrules`) so the tooling stays useful for the next
    person.
    `[my-words.md; `api-server/CLAUDE.md` documented in #4893; #4276]`
    → *{AI-first mindset, AI-assisted development tools, agentic AI capabilities}*
16. **Fixed a slow API by adding stale-while-revalidate caching to the shared cache service**
    — a reusable `SwrCacheEntry` with a per-key lock to prevent a revalidation stampede, so
    operators get an immediate cached response while expensive counts refresh in the
    background. Also made the underlying count query degrade gracefully, so one malfunctioning
    segment can no longer empty the entire dropdown: a partial failure now yields a partial
    result instead of a total outage. The SWR primitive is available to any other expensive
    read on the platform.
    `[#5166 — 7 files, +707/-42, SUBRITE-405 High; test suites for the SWR path and the lock]`
    → *{performance, moderately complex problems, technical expertise}* ← **your own pick**
17. **Raised security issues, not just fixed assigned ones** — **9 security-typed PRs**, two
    flagged as security concerns in the tracker. Found and reported cross-tenant payment-
    provider settings exposure, cross-user subscription access, and survey data readable
    without survey permission; also filed the only issue on Cefalo's payroll repo, an
    information-disclosure defect leaking database query details in error messages.
    `[#3620, #4432, #5068 (Urgent + Security concern), #5374 (SUBRITE-661 Security concern), #5317; cefalobd/payroll issue #1]`
    → *{demonstrating initiative, critical thinking}* ← **your own pick**
18. **Owned features end to end** — clarification and planning, implementation, deployment,
    monitoring, feedback and hotfix. Authored the deployment notes each change needed (profile
    cache clear, tenant settings cache clear across all tenants, "test all statistics screens
    on stage before production"), then watched the result in Datadog and fixed what surfaced.
    `[my-words.md; deployment notes in #5068, #3955, #4269; 56 production hotfixes; Datadog-raised issues #5370, #5362]`
    → *{epic ownership, on-call accountability, utilizing feedback}* ← **your own pick**

#### 3b. Associate Software Engineer I · Mar 2025 – Mar 2026

1. **Delivered fullstack features across Subrite**, a multi-tenant subscription-management
   SaaS for Nordic media, using NestJS and Next.js.
   `[163 PRs merged in 2025 alone; peak month 35 PRs]`
2. **Led onboarding of new tenants with diverse payment integrations** — Stripe, Vipps, Nets,
   SwedbankPay and EHF/Avtalegiro e-invoicing.
   `[24 payment-area PRs; Vipps is the most-referenced integration in the record]`
   → *{PaaS/SaaS product services}*
3. **Moved tenant configuration from staff-mediated to self-service** across settings,
   branding, communication and payment providers, reducing day-to-day operational load on
   the internal team — including a per-brand configuration system giving each brand its own
   hostname, logo, sender identity and OTP templates.
   `[15-PR programme: #3509 (100 files, +4638/-668, 85 commits — largest single feature), #3119 (73 files), #3143, #3194, #2949]`
   → *{ownership of small epics}*
4. **Built out communication and email infrastructure on SendGrid**, improving deliverability,
   consent handling and templates across four Nordic languages — including hard- vs
   soft-bounce tracking with an event-priority model, because provider events arrive out of
   order and a later, less definitive event must not overwrite an earlier one.
   `[#3992 — 47 files, 51 commits; #4292, #4118, #4296, #3903]`
5. **Extracted communication senders into a first-class approvable entity via a four-step
   ordered schema migration** — add, migrate, migrate, then deprecate — because doing it in
   one step risked losing every tenant's sender configuration.
   `[#3595 — 56 files, +3979/-2521]`
   → *{technical design, critical thinking}*
6. **Delivered invoicing improvements that unblocked payment from business customers**,
   alongside reusable embeddable widgets and hosted forms for tenant websites, published as
   versioned bundles so live third-party embeds don't change behaviour without warning.
   `[#3485 (28 files), #3522 (EHF/BIS3 compliance), #3860, #3867]`
7. **Built repeatable tenant onboarding data migrations**, making imports reviewable,
   repeatable and safe to hand over — dry-run by default, requiring an explicit apply flag.
   `[11-PR programme across six media tenants; #4169 (+7821/-0, 57 commits), #5004, #4450, #4780, #3816, #3459 — see CV-CLIENTS.md]`
8. **Carried production hotfix and support-escalation ownership**, communicating proactively
   with the product owner and non-technical customer support to keep integrations reliable.
   `[56 production hotfixes across both roles = 22% of merged PRs]`
   → *{on-call support, incident retrospectives}*

#### 3c. Trainee Software Engineer · Jan 2024 – Feb 2025

Three engagements. Combine into one entry on the 1-page version; break out on the 2-page.

- **Cefalo Payroll** (May 2024 – Feb 2025) — **477 commits over 10 months** on the in-house
  payroll platform. Employee management, salary calculation and tax-compliance workflows that
  replaced manual processing. Integrated **Kafka** for asynchronous exchange with the HR
  Portal. Backend NestJS + TypeORM + **MySQL** + MinIO; frontend Next.js + Redux Toolkit +
  Ant Design. Also **reported an information-disclosure defect** (database query details
  leaking in error messages) — the only issue filed on the repo.
  `[cefalobd/payroll, 2024-04-22 → 2025-02-11; issue #1]`
  → *{Java-adjacent: Kafka, MySQL — closest thing to the SE I messaging stack}*
- **Cefalo ATS** (Nov – Dec 2024) — one-month engagement; became productive on an unfamiliar
  codebase quickly and fixed reported defects across backend and frontend. NestJS + Prisma,
  **Jenkins** CI, Turborepo monorepo serving separate internal and public apps behind Nginx.
  `[company-projects archive]`
  → *{debugging existing systems — an explicit SE II requirement}*
- **Cefalo Blog** (Jan/Mar – May 2024) — two months of intensive training on HTTP, REST and
  core web concepts, then built a fullstack blogging platform end to end: rich-text authoring
  with image uploads, likes/comments/threaded replies, JWT auth with credential and social
  login, and role-based access control. **648 commits across the two repos in three months.**
  `[cefalo-blog-back-end 428 commits, cefalo-blog-front-end 220 commits]`

> **Note on the start date.** Your Astro site says Jan 2024; the Cefalo CV dates the Blog
> training March 2024. We're using **Jan 2024**, per your confirmation. Keep the story
> straight if a referrer is asked: training began January, the Blog project ran to May.

---

## 4. Projects & open source

Ordered by CV value. `[P]` = private repo — safe to name, code stays private.

1. **nestjs-transactions** — *TypeScript, NestJS, TypeORM, Prisma, pnpm, Changesets* ·
   Jul 2026 – Present · `github.com/jubaerhosain/nestjs-transactions`
   Authored and published two MIT npm packages (**@nestjs-transactions/typeorm v5.0.3**,
   **/prisma v1.0.4**) providing a declarative `@Transactional()` decorator that propagates
   transactions across service boundaries via AsyncLocalStorage with no monkey-patching —
   built as a maintained replacement for an unmaintained predecessor. pnpm monorepo,
   Changesets releases, dockerized dual-Postgres integration tests, published docs site, and
   CI that opens a nightly dependency-upgrade PR.
   → *Grew directly out of the request-scoped transaction problem first hit on Cefalo
   Payroll. Use that narrative — it shows a problem followed from production to a general
   solution.*
2. **Mess Ledger** `[P]` — *NestJS 10, TypeORM, PostgreSQL 18, Expo 54, React Native, React 19* ·
   Feb 2026 – Present
   Shipped meal-expense-splitting product: 10-module API and a mobile app sharing a
   **generated OpenAPI client** for end-to-end type safety. Subscriptions, push notifications,
   PDF reports, Sentry, argon2/JWT auth, a **Postgres UNLOGGED-table cache store** with
   per-entity TTL, and CI that enforces branch/merge policy via a workflow guard and a
   committed pre-push hook. Env fully validated so a missing variable fails boot.
3. **CV Analyzer AI Agent** `[P]` — *FastAPI, LangChain, Qdrant, OpenAI/Ollama, NestJS, Next.js* ·
   Jul – Aug 2025
   LLM recruitment assistant ranking CVs against job descriptions through a RAG pipeline.
   Contributed real-time PDF parsing (PyMuPDF4LLM), the semantic-search API, chat context and
   memory, and **anonymization of extracted PII before it reaches the LLM**. 33 commits in 7
   days.
   → *{AI-first mindset, agentic AI capabilities}*
4. **Beautified You** `[P]` — *NestJS, MongoDB/Mongoose, Next.js, Ant Design, Tremor* ·
   May 2024 – Apr 2025 · live at `beautifiedyou.vercel.app`
   **Paid client project, built with one collaborator** — an e-commerce and admin-inventory
   platform for a cosmetics retailer, in production with real customers. **Owned the backend
   integration**: NestJS + Mongoose API across products, categories, carts, orders, users and
   auth, with JWT/passport authentication, AutoMapper DTO mapping, class-validator, Swagger
   docs, slug generation, and an AsyncLocalStorage request-context module. The admin side
   covers catalogue and inventory management with a Tremor analytics dashboard.
   `[204 of 376 commits authored (collaborator 171); an account belonging to the client also committed — evidence of a live commercial engagement. todo.md tracks the client's change requests, bugs and feature requests with status.]`
   → *{delivering to a real customer, utilizing feedback, collaboration}*
   **Why this matters for these applications:** it's your only *paid, customer-facing*
   delivery outside employment, and the `todo.md` change-request log is concrete evidence of
   the "Utilizing Feedback" competency Optimizely names for SE II. Worth naming the
   collaboration explicitly — shared delivery is a plus, not a caveat.

5. **CloudTask** — *Turborepo, Next.js, NestJS, AWS ECS Fargate/RDS/ElastiCache/SQS/S3, Zod* ·
   Jul 2026 · `github.com/jubaerhosain/cloudtask`
   AWS reference architecture built in 9 days: monorepo with a web app, API and SQS worker,
   Zod-shared contracts, Testcontainers integration tests, Playwright E2E, Trivy scanning,
   and OIDC-authenticated ECR releases.
6. **easy-shop** `[P]` — *NestJS, MongoDB, Next.js, Expo, FastAPI, scikit-learn, Ollama* ·
   Jul 2024 – Jan 2025
   **1,147 commits.** Five-service commerce platform: API with SSLCommerz payments and Google
   OAuth, storefront, mobile app, a scikit-learn recommendation service, and a fine-tuned
   Mistral assistant.
7. **Academic Management System v1 + v2** `[P]` — *NestJS, TypeORM, MySQL→PostgreSQL, BullMQ, Next.js* ·
   Jan 2025 – Jan 2026
   282 commits on v1; then a **multi-tenant v2 rewrite** on PostgreSQL with tenant
   provisioning scripts, audit logging, and admissions/exams/attendance domains.
   → *Independent evidence of multi-tenant design outside work.*
8. **anthropic-labs** — *Jupyter, Python, Anthropic SDK* · Jul 2026 ·
   `github.com/jubaerhosain/anthropic-labs`
   Public lab series on the Claude Messages API: streaming, tool definitions, a hand-written
   agentic loop, server-side web search, and token/cost accounting.
9. **Code Samurai 2024 platform** `[P]` — *Express, Sequelize, MySQL, Vite, MUI, Leaflet* · Mar 2024
   3-person team, **64 documented API endpoints in 9 days** (201 commits): waste-management
   admin platform with startup-seeded RBAC across four roles, Leaflet mapping and PDF export.
10. **DevOps portfolio** — *Terraform, Kubernetes, Helm, Prometheus, Grafana, Loki, SonarQube* ·
   Aug 2025 – Jan 2026
   Hands-on program: Terraform-provisioned AWS EC2/S3, Kubernetes zero-downtime rolling
   updates, Helm-installed observability stack, SonarQube quality gates, GitHub Actions
   CI/CD, plus a containerized capstone.
11. **data-structures-and-algorithms** — *C++, Java* · 2021 – 2025 ·
    805 commits, ~60 topics (segment/interval trees, DP, graphs, policy-based structures).
    Part of **~1,875 competitive-programming commits** with the Codeforces/CSES/HackerRank
    archives.

**Also present, deliberately deprioritized — promote any of these if you'd rather.** These are
mostly 2022–23 university work, ranked below the above because you now have stronger recent
material; none of them are weak in themselves:
**Smart GPT** (BUET CSE FEST 2023 hackathon, 24h — generates custom PDFs from text, voice and
image input; the hackathon result is already in Awards) · **SPL Management System** (365
commits — Express/Sequelize/MySQL + Redis with a Next.js/MUI front end, used by IIT DU) ·
**Mini Linkedin** (microservice-based social app, Docker + MinIO + Nginx, distributed-systems
course) · **Potato Disease Classification** (CNN + FastAPI + React) · **Bangla Text
Summarizer** (extractive Bangla NLP, Java, 70 commits) · **Gomoku** (minimax with alpha-beta
pruning) · **blog-verse** (queue-backed NestJS/BullMQ blogging API, 155 commits in 3 weeks) ·
**Cefalo Blog** (currently under Experience rather than Projects — move it if you prefer).

**Honest framing for open source:** you *maintain* open source (published npm packages,
public teaching repos) rather than contributing to third-party projects — there are no merged
PRs to others' repos. Say it the first way; it's accurate and it's the stronger claim anyway.

**Two data conflicts on Beautified You, flagged rather than guessed.** Your portfolio site
dates it *Mar – Jul 2024* and tags it with *Redux, Redis, Docker*; the repository was created
2024-05-07 with commits through 2025-04-10, and the API's dependencies contain **no Redis**
(Redux is front-end, and a Dockerfile does exist). I've used the git dates and dropped the
Redis claim. Correct me if the site is right.

---

## 5. Skills

Reconciled across the PR record, GitHub language bytes, and dependency files. **Bold** =
heavy production evidence. *Italic* = real but lighter, or learning-track.

- **Languages:** **TypeScript**, **JavaScript**, **SQL**, Python, Java, C, C++
- **Backend:** **NestJS**, **Node.js**, Express, *FastAPI*, **REST APIs**, OpenAPI/Swagger
- **Frontend:** **React** (19), **Next.js** (16, App Router, server actions), **Tailwind CSS**,
  Ant Design, MUI, shadcn/Radix, TanStack Query/Table, Redux Toolkit, next-intl
- **Databases & data:** **PostgreSQL**, **MySQL**, MongoDB, **Redis**, **TypeORM**, Prisma,
  Sequelize, schema design, migrations, production data operations
- **Workflow, queues & async:** **Temporal workflows**, **Bull/BullMQ**, Kafka, cron jobs,
  background workers, event-driven architecture
- **Payments & billing:** **Stripe**, **Vipps**, **Nets**, **SwedbankPay**,
  **EHF/Avtalegiro/BIS3 e-invoicing**, recurring billing, dunning
- **Communication:** **SendGrid**, SMS, Firebase Cloud Messaging push notifications
- **Observability:** **Datadog**, **Sentry**, structured logging, production incident response
- **Cloud, DevOps & CI/CD:** **Docker**, Docker Compose, **GitHub Actions**, AWS (ECS, RDS,
  S3, SQS, ElastiCache, Secrets Manager, IAM, VPC), *Kubernetes*, *Terraform*, *Helm*,
  *Prometheus/Grafana/Loki*, Jenkins, Nginx, Cloudflare
- **Testing:** **Jest**, unit + integration testing, React Testing Library, Testcontainers,
  Supertest
- **Auth & security:** **JWT**, NextAuth, **OIDC/OAuth 2.0**, RBAC/CASL,
  **multi-tenant isolation**, argon2, OWASP practices
- **AI-assisted development:** **Claude**, **Cursor**, agent context files (`CLAUDE.md`,
  `.cursorrules`, MCP), Anthropic SDK, LangChain, Qdrant, RAG, Ollama
- **Practices:** SOLID, design patterns, code review, agile delivery, Linear, Jira

### Skills honesty notes

- **Java/Spring: do not imply professional experience.** Zero Java in the Subrite record.
  Java is real but academic/personal (design-patterns repo, Bangla summarizer, coursework,
  HackerRank certs). List it as a language; don't put Spring on the CV at all.
- **Kubernetes/Terraform/Helm/Prometheus** are course-and-lab depth, not production. Marked
  italic for that reason. Keeping them honest costs nothing — the AWS certifications and the
  CloudTask build carry the cloud signal.
- **Playwright** is real on CloudTask but **not** at Subrite. **Render** and any named SMS
  vendor: drop entirely, no evidence.
- **Sentry** belongs with the 2025 role, **Datadog** with the 2026 role.

---

## 6. Education

**BSc in Software Engineering** — Institute of Information Technology, University of Dhaka ·
2019 – 2024 · Dhaka, Bangladesh

CGPA omitted per your decision. (Your old site published `3.24/4.00 up to 5th semester`; it's
not on the CV. If your final CGPA is materially higher, it's worth reconsidering.)

Earlier, for the 2-page version only if space allows: HSC, Jamalganj Govt. College, GPA
5.00/5.00 · SSC, Sachna Bazar High School, GPA 4.78/5.00.

---

## 7. Awards & competitive programming

Own section, as in your reference CV.

**Contest results**
- **Champion** — Independence Cup Programming Contest, 2022
- **6th of 650+** — Phitron Programming Contest, 2022
- **17th of 100+** — SEC Inter-University Junior Programming Contest, 2022
- **Onsite finalist** — BUET CSE FEST Hackathon, 2023
- **Round 2** — Meta Hacker Cup, 2023
- **Round 2** — Code Samurai Inter-University Hackathon, 2024
- **Online preliminary** — ICPC Asia Dhaka Regional, 2021 & 2022
- 236th of 700+ (2022) and 238th of 650+ (2023) — SRBD Code Contest *(from your old site;
  include only if you want the extra line)*

**Problem-solving record** — 1700+ problems solved. Handle `igloo11` across platforms.
- **LeetCode 1879 — Knight, top 5%**, best global rank **652**
- **HackerEarth 1884** — best global rank **23**
- **CodeChef 1810 — 4-star**, best global rank **96**
- **Codeforces 1401 — Specialist**

> Fix from the old CV: it printed "ICPC Asia Dhaka Regional Site Online **Preliminarist**".
> Not a word — reads as a typo. Corrected above.

---

## 8. Certifications

All have verifiable URLs (in the old CV's "Courses" section).

- **AWS Certified Developer Associate (DVA-C02)** — Udemy course, 2026
- **AWS Certified Solutions Architect Associate** — Udemy course, 2026
- **Building with the Claude API** — Anthropic (verify.skilljar.com)
- **Mastering DevOps: From Fundamentals to Advanced Practices** — Ostad
- **React Native – The Practical Guide** — Udemy
- HackerRank: Problem Solving (Intermediate & Basic), Java (Basic), JavaScript (Basic)

> **Wording caution:** these are *course completion* certificates, not the AWS proctored
> exams. Write them as "AWS Certified Developer Associate **course**" or list them under a
> "Courses" heading — as your Cefalo CV did — unless you've actually sat DVA-C02. Claiming
> the certification itself would be checkable and wrong.

---

## 9. Coverage against the two postings

| Requirement | Evidence | Verdict |
|---|---|---|
| SE II: 2–5 yrs | Jan 2024 – Present, ~2 yr 7 mo | ✅ |
| SE II: Python/C#/Java/**JavaScript** | TypeScript/JS throughout; Python in data-ops and FastAPI | ✅ via JS/TS |
| SE II: PaaS/SaaS product services | Subrite, 136 entities / 605 routes / 4 locales | ✅ strong |
| SE II: owns epics, moderate portions of large ones | 7 named multi-PR programmes | ✅ strong |
| SE II: technical design & design review | tenant-isolation architecture, filter framework, staged migrations | ✅ |
| SE II: **proactive code reviews** | your own account only | ⚠️ claimed, no artifact |
| SE II: complex-bug investigation | #5194 four-part defect, #5188, #5082 | ✅ strong |
| SE II: on-call / high accountability | 56 production hotfixes (22%) | ✅ strong |
| SE II: **operational metrics & dashboards** | 8-PR Datadog programme, 114 hits in 14 days | ✅ strong |
| SE II: agile + modern quality techniques | Linear, Jest, integration tests, ESLint ratchet | ✅ |
| SE II: BSc CS/engineering | BSc SWE, IIT DU | ✅ |
| SE I: **Java + Spring** backend | **none in production**; Java academic/personal only | ❌ **real gap** |
| SE I: high-volume real-time messaging | SendGrid/SMS/FCM at tenant scale, Temporal, Bull queues | 🟡 adjacent, not Java |
| SE I: MySQL / PostgreSQL | both, in production | ✅ |
| SE I: REST APIs, DB, app lifecycle | 605 routes, migrations, deploys, hotfixes | ✅ strong |
| SE I: frontend HTML/CSS/JS + React | React 19 / Next.js 16 in production | ✅ strong |
| SE I: **AI-assisted dev, agentic AI, AI-first** | Claude/Cursor daily, CV-Analyzer agent, Claude API labs, agent context files | ✅ strong |
| SE I: English fluency | — | ✅ assumed |

**How to play the Java gap.** Don't hide it and don't pad it. The SE II posting names
JavaScript as an accepted language, so apply there on backend depth. For SE I, lead with the
AI-first evidence — where you're genuinely ahead of a 1–2 yr candidate — plus Kafka/MySQL from
Payroll, and be ready to say plainly that your Spring exposure is academic and you'd ramp on
it. That answer lands far better than a CV that implies otherwise.

---

## 10. Gaps needing your input

1. **Final CGPA** — omitted for now. Supply it if it helps.
2. **Code review evidence** — worth having a concrete example ready (a review that caught a
   real defect), since it's the one claim with no artifact behind it.
3. **AWS certifications** — did you sit the actual exams, or are these Udemy courses? Changes
   the wording (§8).
4. **March 2026 has zero merged PRs.** No bullet depends on it, but have an explanation ready
   if anyone reads the PR record alongside the CV.
5. **Referrer input** — you mentioned cross-checking. Their read on the ASE II vs SE II title
   framing is worth having.
6. **Subrite tenant names** — in `CV-CLIENTS.md`, kept out of the drafts. Check your NDA
   before naming them outside an interview.
7. **HSC/SSC** — include on the 2-page version or drop? Usually dropped at 2.5 yrs
   experience; the GPAs are strong, so your call.
8. **Beautified You — Projects or Experience?** It's paid client work, and paid work
   conventionally belongs under Experience as freelance or contract. I've put it under Projects
   on both drafts as the safe default, because its span (May 2024 – Apr 2025) overlaps your
   Cefalo Payroll period, and some employers read concurrent paid work as moonlighting. If
   you're comfortable with that, promoting it to a "Freelance — Backend Developer" entry makes
   your experience section materially stronger. Your call, and worth asking your referrer.
9. **Beautified You dates and stack** — the git history says May 2024 – Apr 2025 while your
   portfolio site says Mar – Jul 2024, and the site tags Redis, which isn't in the API's
   dependencies. I used git and dropped Redis. Confirm which is right.
10. **Other projects** — seven earlier projects are listed but deprioritized in §4. Say the
    word if you want any promoted onto the drafts.

---

## 11. Evidence appendix

**Primary sources**
- `MY-PRS.md.csv` — 251 merged PRs + 2 open + 1 in progress, Mar 2025 – Jul 2026; 56
  production hotfixes; 175+ Linear issues; 284 per-PR narrative entries. Self-declared
  guardrail: *"there are no fabricated percentages in this document"* — the defensible
  numbers are diff/file/entity counts, the Datadog hit counts, and the 3000+ seat target.
- `CV-MATERIAL.md.csv` — 148 lines, newer than the PDF; source of the role bullet baselines.
- `jubaer.hosain@cefalo.com_Cefalo_CV.pdf` — 4 pages; roles, education, contests, courses.
  No contact details. Career Summary is stale (leads on Express.js, claims Scikit-learn/Keras)
  and is **not** carried forward.
- GitHub via `gh` (incl. private): 55 repos, 45 non-fork, 6,427 authored commits since
  Mar 2020; `cefalobd/payroll` 477 commits; `cefalobd/CV-Analyzer-AI-Agent` 33 commits.
- Portfolio site: `rebuild-astro:src/data/site.ts` (current content, CP record, projects) and
  `main:index.html` (older; source of the phone number and CGPA, both since superseded).
- Optimizely postings, fetched live from careers.optimizely.com.

**PR numbers cited above** — #3119, #3459, #3485, #3509, #3522, #3595, #3620, #3816, #3860,
#3867, #3903, #3992, #4118, #4169, #4276, #4292, #4296, #4432, #4450, #4780, #4893, #5004,
#5024, #5068, #5082, #5095, #5158, #5188, #5194, #5200, #5208, #5229, #5231, #5249, #5270,
#5272, #5278, #5282, #5297, #5301, #5316, #5317, #5323, #5329, #5346, #5351, #5354, #5368,
#5370, #5374.

**Conflicts resolved**
| Conflict | Resolution |
|---|---|
| Cefalo start: Jan 2024 (site) vs Mar 2024 (CV) | **Jan 2024**, your call |
| Role end: Jul 2026 vs Present | **Present** — Jul 2026 was the PR-export cut-off |
| Degree end: 2023 (site) vs 2024 (CV) | **2024** |
| Title: Software Engineer (site) vs ASE II (CV) | **Associate Software Engineer II** |
| Email: cefalo vs gmail vs university | **jubaerhosain1119@gmail.com** |
| Phone: +8801581401964 (old site) | **+8801717407400** — you supplied this |
| PDF lists Render; material file says remove | **Removed** — zero PRs |
| PDF Career Summary claims Scikit-learn/Keras | **Dropped** — no supporting evidence |
