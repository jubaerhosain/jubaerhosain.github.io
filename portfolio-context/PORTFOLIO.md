# Project Portfolio — Md. Jubaer Hosain

> **What this is.** Every project explained properly — *what the thing actually is and what
> problem it solves*, not just a stack list. The CV drafts compress these to one line each;
> this is the version you talk from.
>
> **How to use it.** Before an interview, read the **Cross-cutting narratives** (§5) and the
> **Stack index** (§6) — those two sections are what turn a list of repos into an argument
> about what kind of engineer you are. Each entry ends with a *talking point*: the thing worth
> saying out loud if the project comes up.
>
> `[private]` = repo is private. Naming it is fine; the code stays closed.
> Descriptions are drawn from the repos themselves, not inferred.

---

## Contents

1. [Flagship work](#1-flagship-work) — lead with these
2. [Substantial builds](#2-substantial-builds)
3. [Academic, coursework and learning](#3-academic-coursework-and-learning)
4. [Competitive programming](#4-competitive-programming)
5. [Cross-cutting narratives](#5-cross-cutting-narratives) ← **read before interviews**
6. [Stack index](#6-stack-index-which-project-proves-what) ← **read before interviews**
7. [Status and links](#7-status-and-links)

---

## 1. Flagship work

### nestjs-transactions — published open-source library
`public` · TypeScript · Jul 2026 – present · 60 commits, ~75 PRs in 5 weeks

**What it is.** An npm library that solves a specific, well-known pain in NestJS
applications: keeping a database transaction coherent when a single business operation spans
several services. The usual options are to thread a transaction object through every function
signature, or to adopt a library that patches the ORM at runtime. This does neither — you
annotate a method with `@Transactional()` and the transaction propagates automatically through
`AsyncLocalStorage`, while your repositories stay ordinary `@InjectRepository` ones. It exists
because the widely-used predecessor (`typeorm-transactional`) went unmaintained; this is a
maintained replacement, deliberately positioned as such.

**Your role.** Sole author and maintainer.

**Stack.** TypeScript · pnpm workspaces · Changesets · Jest · Docker Compose · TypeORM ·
Prisma · built on `@nestjs-cls/transactional`.

**Notable engineering.** Three packages — an ORM-agnostic core plus TypeORM and Prisma
adapters. The TypeORM adapter ships a module that owns both the DataSource and transactions,
replacing `@nestjs/typeorm`'s own module. Public surface includes propagation modes, isolation
levels, and `runOnTransactionCommit`/`Rollback`/`Complete` lifecycle hooks. Integration tests
run against **two real Postgres containers** rather than mocks. Four CI workflows, one of which
opens a **nightly dependency-upgrade PR** — 30+ merged in the first six weeks. Breaking changes
are released deliberately with conventional-commit markers. Docs site published separately.

**Evidence.** `@nestjs-transactions/typeorm` **v5.0.3** and `@nestjs-transactions/prisma`
**v1.0.4** live on npm, MIT licensed.

**Talking point.** *"I hit this problem at work — request-scoped transaction handling on a
payroll system — solved it there, hit it again on the next codebase, and eventually decided the
general version belonged in a library. It's the same problem three times, which is how I knew it
was worth generalising."* This is your strongest single artifact: it shows you can identify a
recurring problem, generalise it correctly, and take on the maintenance burden that follows.

---

### Mess Ledger — shipped mobile product
`private` · TypeScript · Feb 2026 – present · 86+ commits on main, ~50 PRs

**What it is.** A cost-splitting app for shared households. In Bangladesh (and much of South
Asia) a *mess* is a shared living arrangement where several people cook and eat together and
split the grocery and meal costs at the end of the month — traditionally tracked in a paper
ledger or a spreadsheet, which gets contentious fast. Mess Ledger digitises that: members log
meals, someone records shared expenses, and the app produces the month-end settlement showing
who owes whom. It's a real product, not a demo — subscriptions, ads, a privacy policy, and app
store releases.

**Your role.** Sole author, end to end: API, mobile app, release engineering, monetisation.

**Stack.** NestJS 10 · TypeORM 0.3 · PostgreSQL 18 · Expo 54 · React Native · React 19 ·
expo-router 6 · react-native-paper · TanStack Query v5 · argon2 · JWT/passport · Sentry ·
Brevo (email) · Expo push notifications · Google sign-in · pdfmake · AdMob.

**Notable engineering.**
- **One contract, two codebases.** The API emits `openapi.json`; the mobile app regenerates a
  fully typed client from it. A breaking API change surfaces as a TypeScript error in the app
  rather than a runtime bug in someone's hands.
- **A Postgres UNLOGGED-table cache store** with per-entity TTL and eviction — deliberately
  choosing an unusual but well-suited mechanism over adding Redis to a small deployment.
- Env validation where every variable is required at boot, so misconfiguration fails loudly
  rather than at 2am.
- CI that **enforces the branch and merge policy** — a workflow guard auto-closes pull requests
  that violate it, plus a committed pre-push hook. Ten API modules: auth, meals, messes,
  notifications, reports, subscriptions, summary, transactions, users, shared.

**Talking point.** The interesting part isn't the CRUD — it's that shipping to app stores forces
you to care about things a web deploy lets you ignore: release channels, store review, ad
policy, privacy disclosure, and the fact that you cannot hotfix a native binary in five minutes.

---

### Beautified You — paid client project
`private` · TypeScript · May 2024 – Apr 2025 · **204 of 376 commits yours**

**What it is.** An e-commerce and inventory-management platform built for a cosmetics
retailer — a paying client, with the storefront live and real customers ordering through it.
The commercially important half is the admin side: catalogue and inventory management, order
processing, and a sales analytics dashboard the shop owner actually uses to run the business.

**Your role.** **Backend integration owner**, working with one collaborator who led the
front end. A third contributor account belongs to the client themselves.

**Stack.** NestJS · Mongoose/MongoDB · JWT + passport-jwt · bcryptjs · AutoMapper ·
class-validator · Swagger · slugify; front end Next.js · Ant Design · Tremor dashboards ·
Recharts · zustand.

**Notable engineering.** API modules across `products`, `categories`, `carts`, `orders`,
`users`, `auth`, `database` — plus an **`als` (AsyncLocalStorage) module** for request context,
the same pattern that recurs throughout your work. Seed data for categories, products and
orders is committed so the environment is reproducible.

**Evidence of a real engagement.** The repo's `todo.md` tracks the client's **change requests,
bug reports and feature requests with status markers** — a documented feedback loop with a
paying customer, which is unusually concrete evidence for a side project.

**Talking point.** This is your only paid, customer-facing delivery outside employment, and the
only one where you worked to someone else's changing requirements with money attached. If an
interviewer asks about handling feedback or shifting scope, this is the story — and the
`todo.md` is the receipt. *Note: it ran concurrently with your Cefalo trainee period, so decide
in advance how you want to frame that.*

---

### CV Analyzer AI Agent — LLM recruitment assistant (Cefalo)
`private, cefalobd org` · Python + TypeScript · Jul – Aug 2025 · **33 commits in 7 days**

**What it is.** A recruitment tool that reads a pool of candidate CVs and ranks them against a
job description, so a recruiter gets structured comparison and scoring instead of reading 200
PDFs. Candidates upload a CV; it's parsed into structured fields, embedded, and retrieved
against the job description through a RAG pipeline; recruiters can then query the pool
conversationally.

**Your role.** Contributor during an intensive build sprint — real-time CV parsing, the
semantic-search API, chat context and memory, and the PII anonymisation layer.

**Stack.** Three services. **`agent-api`** (Python): FastAPI · LangChain · **Qdrant** vector DB ·
OpenAI and **Ollama** · PyMuPDF4LLM for PDF extraction · spaCy · tiktoken · SQLAlchemy +
Alembic · MinIO. **`api-server`**: NestJS · TypeORM · PostgreSQL · MinIO. **`frontend`**:
Next.js · next-auth · Chart.js · TanStack Table · a typed client generated from Swagger.

**Notable engineering.** Your PR titled *"Llm security — anonymized extracted data"* strips
personally identifying information from parsed CVs **before** anything is sent to the model —
i.e. you treated the LLM as an untrusted third party handling candidate data, which is the
correct instinct and one most people building RAG pipelines skip. Also a similarity threshold
so weak matches are excluded rather than padded in.

**Talking point.** Both Optimizely postings ask for an AI-first mindset and agentic
capabilities. This is the answer, and the PII layer is what makes it a *senior* answer rather
than a tutorial-follower's.

---

### CloudTask — AWS reference architecture
`public` · TypeScript · Jul 2026 · 18 commits in 9 days

**What it is.** A deliberately over-engineered multi-user task manager, built for one purpose:
to exercise a realistic production AWS stack end to end rather than read about it. The app
itself is modest; the point is that it runs on VPC + ALB + ECS Fargate + RDS + ElastiCache +
SQS + S3 + Secrets Manager + CloudWatch, provisioned by following a runbook you wrote.

**Your role.** Sole author, plus the documentation and deployment runbooks.

**Stack.** pnpm + **Turborepo** monorepo, Node 24 · `apps/web` Next.js App Router + TanStack
Query + Tailwind 4 · `apps/api` NestJS + TypeORM + Postgres + ioredis + nestjs-zod +
nestjs-pino + AWS SDK with S3 presigned URLs · `apps/worker` a standalone NestJS SQS consumer ·
`packages/contracts` shared **Zod** schemas and env contracts.

**Notable engineering.** **Testcontainers** for API integration tests and LocalStack for local
SQS/S3, so tests hit real infrastructure rather than mocks. Playwright and Vitest on the web
app. Multi-stage Dockerfiles with a non-root production target per app. CI runs
lint → typecheck → unit → build → integration against service containers → **Trivy** filesystem
scan; release pushes images to ECR authenticated by **OIDC** rather than long-lived keys.
Documentation-first: an application spec, two deployment runbooks (manual and Terraform), and a
`DEVIATIONS.md` recording where the build departed from the plan and why.

**Talking point.** Delivered as seven numbered milestones in nine days. The `DEVIATIONS.md`
habit — writing down where you deviated from your own plan and why — is worth mentioning; it's
the same discipline as the decision logs in your production data migrations.

---

## 2. Substantial builds

### easy-shop — five-service commerce platform with AI features
`private` · TypeScript + Python · Jul 2024 – Jan 2025 · **1,147 commits** — your largest personal codebase

**What it is.** A full commerce platform built as five independently deployable services, used
as a vehicle for learning breadth: a storefront, an admin surface, a mobile app, a machine
learning recommender, and an LLM shopping assistant.

- **`es-api`** — NestJS + MongoDB core: auth (JWT + Google OAuth), carts, categories,
  countries, order history, notifications, orders, payments, products, reviews, users.
  Integrates **SSLCommerz**, a real Bangladeshi payment gateway.
- **`es-web`** — Next.js storefront and admin: Radix/shadcn, zustand, SWR, TanStack Table,
  Recharts, TinyMCE.
- **`es-mobile`** — Expo app with Jest.
- **`es-recommend-api`** — FastAPI + **scikit-learn** + pandas: "similar products" and
  "recommended products" models, developed in a notebook then served.
- **`es-ai-assistant`** — an **Ollama fine-tune of Mistral** with a translation-specialist
  system prompt, containerised with its own Makefile and compose file.

**Talking point.** 1,147 commits over seven months, solo. Useful for demonstrating sustained
throughput and genuine breadth — but be ready to say what you'd do differently now, because
five services for a personal project is over-architected and knowing that is the point.

---

### Academic Management System — built twice, second time multi-tenant
`private` · TypeScript · v1 Jan – Sep 2025 (282 commits) · v2 Jan 2026 (118 commits in one month)

**What it is.** An ERP for running an educational institution — programmes, classrooms,
students, teachers, semesters, admissions, exams, attendance, audit logs, notifications.

**Why it matters that there are two.** v1 was a conventional single-tenant app on NestJS +
TypeORM + MySQL + BullMQ with a Next.js/shadcn front end. **v2 is a deliberate rewrite** on
PostgreSQL with multi-tenancy as a first-class concern from the start: a dedicated `tenants`
module, an `ADDING-TENANTS.md` runbook, provisioning shell scripts, and expanded domain
modules — plus a companion mobile app, `.cursor/` rules and a `DEVELOPER-RULES.md`.

**Talking point.** You built the same domain twice and the second time changed the
architecture based on what you'd learned — and this happened *alongside* doing tenant-isolation
work professionally. It's independent evidence that the multi-tenant thinking is yours, not
just something you were assigned.

---

### Code Samurai 2024 — waste-management platform, 9 days
`private` · TypeScript + JavaScript · Mar – Apr 2024 · **201 commits in ~9 days**, 3-person team

**What it is.** A contest build for Code Samurai 2024: an administrative platform for municipal
**solid-waste management** — tracking waste from collection points through transfer stations to
landfills, with role-scoped dashboards for the different operators involved. **64 documented API
endpoints**, publicly documented in Postman, with a Visily UI prototype.

**Stack.** Express + Sequelize + MySQL2 + joi + JWT + nodemailer + node-cache + Cloudinary;
front end Vite + React + **MUI** + material-react-table + **react-leaflet** for mapping +
jsPDF/@react-pdf-renderer for export + reCAPTCHA + SWR. Fully containerised.

**Notable engineering.** RBAC bootstrapped at application startup with a permission model
across five roles (Admin, System Admin, STS Manager, Landfill Manager, Unassigned).

**Talking point.** Highest commit-per-day density in your entire account. Good answer to "tell
me about working under time pressure in a team" — and 64 endpoints in nine days with role-based
access is a real scoping achievement, not just late nights.

---

### Cefalo Blog — first professional TypeScript work
`private` · TypeScript · Feb – May 2024 · **648 commits across two repos in three months**

**What it is.** A full blogging platform built as the capstone of your Cefalo training: post
authoring with a rich-text editor and image uploads, likes, comments and threaded replies, and
role separation between readers, authors and post owners.

**Stack.** Backend TypeScript/Express + MySQL + Sequelize, Dockerised behind **Nginx**, with a
Jest suite. Front end Vite + React + Tailwind, deployed on Vercel.

**Talking point.** 428 backend + 220 frontend commits in three months is your densest sustained
output. It marks the transition from JavaScript to TypeScript and from coursework to
professional practice.

---

### SPL Management System — university project-lab platform
`public` · JavaScript · May – Dec 2023 · **365 commits**

**What it is.** A management system for the **Software Project Lab** at IIT, University of
Dhaka — the course sequence where students build supervised projects. It handles supervisor
allocation, mark evaluation and progress monitoring for staff and students.

**Stack.** Express + Sequelize + MySQL2 + **Redis** + joi + JWT + nodemailer + multer; front
end Next.js + MUI + SWR. An `old/` directory preserves the earlier iteration.

**Talking point.** Real users (your own department), a scheduling/allocation problem with actual
constraints, and your first use of Redis.

---

### blog-verse — queue-backed blogging API
`private` · TypeScript · Dec 2024 – Jan 2025 · **155 commits in three weeks**

**What it is.** A full-stack blogging application, rebuilt from the Cefalo Blog experience with
a heavier backend: NestJS + TypeORM + MySQL with **BullMQ** background queues for mail and
media work, cache-manager, AutoMapper, Google OAuth, Cloudinary, argon2, and faker-based
seeding.

**Talking point.** Chiefly interesting as the moment you started reaching for queues and
background workers by default rather than doing work inline in a request.

---

### Mini LinkedIn — microservice social app
`public` · JavaScript · Jul – Nov 2023 · 71 commits

**What it is.** A small social network — auth, posts, image uploads, notifications — built for a
**distributed systems course** and deliberately decomposed into microservices behind Nginx,
with MinIO for object storage and Docker throughout.

**Talking point.** Your earliest hands-on service decomposition. Honest framing: a course
exercise in distributed design, not production scale.

---

### Cefalo Payroll and Cefalo ATS — employment work
`private, cefalobd org` · covered in the CV's Experience section

**Payroll** (**477 commits, Apr 2024 – Feb 2025**) — Cefalo's in-house payroll platform:
employee records, salary calculation, tax-compliance workflows, payslip generation and
printing, replacing a manual process. NestJS + TypeORM + MySQL + **Kafka** (async exchange with
the HR Portal) + MinIO + Winston + Handlebars; front end Next.js + Redux Toolkit + Ant Design +
xlsx/file-saver/react-to-print. Makefile-driven Docker workflow, Husky + commitlint, and —
per its README — **AsyncLocalStorage for transaction handling under request-scoped context.**

**ATS** (Nov – Dec 2024) — the Applicant Tracking System: a one-month engagement fixing defects
across an unfamiliar codebase. NestJS + Prisma with a **Jenkinsfile**, and a Turborepo front end
serving separate internal (HR/admin/interviewer) and public applications behind Nginx.

**Talking point.** You also filed the only issue on the Payroll repo: *"Error message includes
database query details"* — an information-disclosure finding, in your first year.

---

### DevOps programme and capstone
`jubaerhosain1119-ostad` org · Aug 2025 – Jan 2026 · 7 repos

**What it is.** A structured, hands-on DevOps programme, each module a working artifact rather
than notes. The **capstone** takes a React + Node application all the way through:
multi-stage Dockerfiles, per-app GitHub Actions CI/CD, Kubernetes manifests
(frontend/backend/Redis/PostgreSQL + Ingress), Kubernetes secrets management, and a
Prometheus/Loki/Grafana monitoring stack with committed dashboard JSON — documented across five
markdown guides.

Other modules: **Terraform** provisioning EC2 + S3 · **Kubernetes monitoring and logging** with
Prometheus + Grafana + **Loki** + a **Promtail DaemonSet**, installable by Helm or raw
manifests on EC2 + Minikube · **SonarQube** quality gates in CI · a **zero-downtime rolling
update** demo · a Vite/TS app deployed under PM2.

**Talking point.** Be precise about depth here: this is lab and coursework proficiency, not
production operations experience. Said that way it's credible; overstated it's the first thing
an interviewer will find the bottom of.

---

### Good Habit, Shikkha Ponji, and other current work
`private`

- **Good Habit** (Dec 2025, Expo/React Native, 17 commits) — a habit-tracking mobile app; your
  first Expo build, and the warm-up for Mess Ledger.
- **Shikkha Ponji** (Jul 2026) — currently an architecture document rather than code, and a
  genuinely interesting one: a **multi-tenant education-management platform** designed around
  the structure of Bangladeshi education groups, where one organisation runs several campuses
  and each campus runs several *kinds* of institution (general school, college, Hifz unit) under
  one roof. The plan works out a four-level model — Platform → Tenant → Branch → Institution
  Unit → academic operations. Mention it as a design exercise in progress; don't imply shipped
  software.
- **SBHS Scrapper** (Jan 2026) — a notebook that scrapes and exports student records from a
  school system to CSV/JSON. Small, but a clean example of reaching for a scraper when no API
  exists.
- **`template-projects`** (2024, public, 21 MB) — reusable production-shaped starters:
  `express-ts-prisma`, `express-ts-sequelize`, an ecommerce template, an ebook platform, and
  `qualitybazar`. What you build when you've set up the same scaffolding one time too many.
- **`company-projects`** — a personal archive of work-project copies kept for reference.

---

## 3. Academic, coursework and learning

These are older and smaller. Their value is showing range and the fact that you write things
down, so keep them brief unless asked.

| Project | What it is |
|---|---|
| **anthropic-labs** `public` 2026 | Teaching notebooks for the Claude API using the official Python SDK, one concept per lab: streaming and multi-turn history, token and cost accounting, custom tool definitions, a **hand-written agentic loop**, and server-side web search with usage caps. Documents per-model pricing and stateless-API cost dynamics. |
| **Smart GPT** `public` 2023 | Built in the **BUET CSE FEST 2023 hackathon** (24h): generates customised PDFs — children's books, travel blogs — from text, voice and image input, with a platform to share and browse them. |
| **Potato Disease Classification** `public` 2023 | A CNN that detects disease in potato leaves from a photograph — an agricultural-diagnosis use case — served through FastAPI with a React front end. |
| **Bangla Text Summarizer** `public` 2022 | Extractive summarisation for **Bangla** text, in Java. Working in a low-resource language means the usual English NLP tooling doesn't apply. 70 commits. |
| **Gomoku** `public` 2022 | A 10×10 five-in-a-row game, AI versus human, using **minimax with alpha-beta pruning** and a heuristic board evaluator. PyQt5. |
| **Wumpus World** `public` 2023 | The classic AI exercise: a knowledge-based agent that reasons under uncertainty from local percepts to navigate a hazardous grid. In-browser. |
| **datacube** `private` 2023 | Data-warehousing coursework in T-SQL — building and querying an **OLAP cube**, with a written `whyDataCube.txt` arguing when a cube beats regular queries. |
| **design-patterns** `public` 2023–24 | All three Gang-of-Four families implemented in Java, plus a system-design section. 87 KB of Java. |
| **web-development** `public` 2023–24 | A curated reference repo of concepts *and* runnable code: Docker, Kubernetes, Nginx, Redis, load balancing, rate limiting, audit logging, access control, testing — plus small Spring Boot and .NET explorations. |
| **elibrary** `private` 2024 | A small Java library-management backend. |
| **course-work** `public` 2022–24 | BSSE 3rd–8th semester coursework, ~97 MB across Java, C++, C and Python. |
| **data-science** `public` 2024–25 | ~8 MB of notebooks organised into AI, machine learning, deep learning, NLP and Kaggle sections. |
| **game-projects**, **ges-calculator**, **Assembly**, **cpp** 2020–22 | Earliest work — Java games, a desktop GES calculator, and your first committed code (Assembly, May 2020). |

---

## 4. Competitive programming

**1700+ problems solved.** Handle `igloo11` across platforms.

| Platform | Standing |
|---|---|
| LeetCode | rating 1879 — **Knight, top 5%**, best global rank **652** |
| HackerEarth | rating 1884 — best global rank **23** |
| CodeChef | rating 1810 — **4-star**, best global rank **96** |
| Codeforces | rating 1401 — **Specialist** |

**`data-structures-and-algorithms`** `public` (2021–2025, **805 commits**) is the substantial
artifact: a ~60-topic C++ library covering AVL and segment/interval trees, range queries,
disjoint sets, binary and matrix exponentiation, meet-in-the-middle, bit manipulation, game
theory, string algorithms (Z-algorithm), sliding window, ternary search, difference arrays,
Kadane's, MEX and STL policy-based structures — plus a contest template and timing utilities.

Solution archives: `codeforces-solution` (623 commits, 5 stars), `hackerrank-solution` (331),
`cses-problemset-solution` (116), `SPOJ-Solutions`. **~1,875 competitive-programming commits
over four years.**

**Talking point.** Four years of consistency, not a burst. The useful claim isn't the ratings —
it's that this is where the instinct for complexity and edge cases came from, which is visible
in the production work: the N+1 you removed, the batched lookups, the pagination.

---

## 5. Cross-cutting narratives

**Read this section before an interview.** Individually these projects look like a scattered
side-project habit. These four threads are what make them an argument.

### Thread 1 — The request-context problem, followed for three years
You met it on **Cefalo Payroll**, whose README records AsyncLocalStorage being used to fix
transaction handling under request scope. You used the same pattern in **Beautified You** (an
`als` module). You built on it professionally at **Subrite**, where continuation-local storage
became the substrate for the whole tenant-isolation layer. Then you generalised it and published
it as **nestjs-transactions**. *One problem, four codebases, ending in a maintained library.*
This is the single most senior-sounding thing in your portfolio — most engineers with 2.5 years
cannot point to a problem they followed that far.

### Thread 2 — Multi-tenancy, professionally and independently
At **Subrite** you designed the tenant-isolation layer and took scoped entities from 78 to 90 of
136. Independently, you rewrote **Academic Management System** as a multi-tenant v2 with tenant
provisioning, and your **Shikkha Ponji** design document works out a four-level tenancy model
for a harder case (one organisation, several campuses, several institution types per campus).
*The professional work and the personal work reinforce each other* — it isn't a topic you were
handed once.

### Thread 3 — AI as a working tool, not a demo
**anthropic-labs** (the API itself: tool definitions, a hand-written agentic loop, token and
cost accounting) · **CV Analyzer** (production RAG with PII anonymisation before the model
sees anything) · **easy-shop** (a scikit-learn recommender and a fine-tuned Mistral) · and
Claude and Cursor in daily delivery with committed agent context so the tooling survives you.
*You've used AI at four different levels: as a consumer, an integrator, a fine-tuner, and as
part of your own workflow.* That directly answers the "AI-first mindset" ask.

### Thread 4 — Writing things down as an engineering practice
`DEVIATIONS.md` in CloudTask · `clarification.md` recording each business decision in your
production migrations · `ADDING_TENANTS.md` kept in step with every schema change ·
`api-server/CLAUDE.md` documenting the tenant-isolation pattern as the default ·
`whyDataCube.txt` arguing when to use a cube · five markdown guides in the DevOps capstone ·
`DEVELOPER-RULES.md` · a scraper's exclusion list explaining what was *not* migrated and why.
*This is the difference between doing the work and leaving the work usable by someone else,* and
it's unusually consistent across your whole history.

### An honest limit, stated before someone finds it
You **maintain** open source; you don't contribute to other people's. There are no merged PRs
to third-party repositories. Say it the first way — publishing and maintaining two npm packages
is the stronger claim anyway, and volunteering the limit costs you nothing while pre-empting a
gotcha.

---

## 6. Stack index — which project proves what

When an interviewer asks "have you used X?", this is where you look. Cite the strongest example,
not the first one you remember.

| Technology | Strongest evidence |
|---|---|
| **NestJS** | Subrite (production, 251 PRs) → then Mess Ledger, CloudTask, AMS, easy-shop, Beautified You, blog-verse, Payroll, CV Analyzer — 11 backends |
| **TypeORM** | Subrite; and you wrote a library extending it (`nestjs-transactions`) |
| **PostgreSQL** | Subrite (136 entities); Mess Ledger (v18, incl. an UNLOGGED cache table); CloudTask; AMS v2 |
| **MySQL** | Cefalo Payroll (production); AMS v1; SPL; blog-verse; Code Samurai |
| **MongoDB** | Beautified You (paid, live); easy-shop |
| **Redis** | CloudTask (ElastiCache); SPL; DevOps capstone. *Note: not in the Beautified You API* |
| **Next.js / React** | Subrite (Next 16 / React 19, 623 routes); ~10 other front ends |
| **React Native / Expo** | Mess Ledger (shipped to stores); Good Habit; easy-shop mobile |
| **Kafka** | Cefalo Payroll — async exchange with the HR Portal |
| **Temporal** | Subrite recurring-payment workflows — incl. a documented decision *against* using its retry |
| **BullMQ / queues** | Subrite; AMS v1; blog-verse; CloudTask (SQS worker) |
| **Python** | CV Analyzer (FastAPI/LangChain); easy-shop recommender; Subrite data-ops notebooks; anthropic-labs |
| **Java** | design-patterns, Bangla summarizer, coursework, HackerRank certs — **academic and personal only, no professional Java** |
| **AWS** | CloudTask (ECS Fargate, RDS, ElastiCache, SQS, S3, Secrets Manager, OIDC→ECR); Terraform module; two AWS courses |
| **Kubernetes / Terraform / Helm** | DevOps programme and capstone — **lab depth, not production** |
| **Docker** | ~15 repos; multi-stage non-root prod targets in CloudTask; Nginx-fronted Cefalo Blog |
| **CI/CD** | nestjs-transactions (4 workflows incl. nightly dependency PRs); CloudTask (Trivy, OIDC); Mess Ledger (policy-enforcing guard); Jenkins on Cefalo ATS |
| **Testing** | Subrite (~830 lines for tenant isolation, 40 tests for the charge fix); CloudTask (Testcontainers, Playwright, Vitest); nestjs-transactions (dual-Postgres integration) |
| **Observability** | Subrite — Datadog and Sentry in production, incl. an 8-PR alert-quality programme; Prometheus/Grafana/Loki in the capstone |
| **Payments** | Subrite — Stripe, Vipps, Nets, SwedbankPay, EHF/Avtalegiro; easy-shop — SSLCommerz |
| **Auth & security** | Subrite (OIDC provider, 9 security-typed PRs); JWT/OAuth across most projects; PII anonymisation in CV Analyzer; Trivy and SonarQube in CI |
| **LLM / RAG** | CV Analyzer (LangChain + Qdrant + OpenAI/Ollama); anthropic-labs; fine-tuned Mistral in easy-shop |
| **Monorepos** | CloudTask and nestjs-transactions (pnpm + Turborepo/workspaces); Cefalo ATS (Turborepo) |

---

## 7. Status and links

| Project | Visibility | Live | Source |
|---|---|---|---|
| nestjs-transactions | public | docs site + npm v5.0.3 / v1.0.4 | `github.com/jubaerhosain/nestjs-transactions` |
| Mess Ledger | private | app stores | — |
| Beautified You | private | `beautifiedyou.vercel.app` | — |
| CV Analyzer AI Agent | private (Cefalo) | internal | — |
| CloudTask | public | — | `github.com/jubaerhosain/cloudtask` |
| anthropic-labs | public | — | `github.com/jubaerhosain/anthropic-labs` |
| easy-shop | private | — | — |
| Academic Management System v1/v2 | private | — | — |
| Code Samurai 2024 | private | Postman docs | — |
| Cefalo Blog | private | `cefalo-blog-front-end.vercel.app` | — |
| SPL Management System | public | — | `github.com/jubaerhosain/spl-management-system` |
| Smart GPT | public | — | `github.com/jubaerhosain/smart-gpt` |
| Potato Disease Classification | public | — | `github.com/jubaerhosain/potato-disease-classification` |
| Bangla Text Summarizer | public | — | `github.com/jubaerhosain/bangla-text-summarizer` |
| Gomoku | public | — | `github.com/jubaerhosain/gomoku` |
| Mini LinkedIn | public | — | `github.com/jubaerhosain/mini-linkedin` |
| data-structures-and-algorithms | public | — | `github.com/jubaerhosain/data-structures-and-algorithms` |
| design-patterns / web-development / template-projects | public | — | under `github.com/jubaerhosain` |

**Account totals:** 55 repositories (45 non-fork), **6,427 authored commits since March 2020**.

---

## Two things to fix before you send anything

1. **Add descriptions to your public repos.** `cloudtask`, `spl-management-system`,
   `mini-linkedin`, `wumpus-world`, `template-projects`, `web-development`, `data-science` and
   `jubaerhosain.github.io` have **no GitHub description at all**. An interviewer who opens your
   profile sees a list of unexplained names. One line each is fifteen minutes of work and it
   changes the first impression more than anything else in this document.
2. **`beautfied-you` is misspelled** (missing the `i` in "beautified"). Renaming it would break
   the link on your portfolio site, so either fix both together or leave it — but know it's
   there before someone else notices.
