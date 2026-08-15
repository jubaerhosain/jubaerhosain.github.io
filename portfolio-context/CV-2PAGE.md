<!-- 2-PAGE CV. The long form of CV-1PAGE-BEST.md. Same facts, same guardrails, more room.
     Structure matches the one-pager exactly: position-based experience entries, employment type
     stated on each, client and project named. The two must never contradict each other.

     DELIBERATELY NOT CLAIMED, no evidence behind them: on-call rotation, TDD, pair programming,
     incident retrospectives, mentoring or onboarding engineers. Java is a language entry only.
     Spring appears nowhere. AWS items are Udemy courses, never "certified".

     ALSO NOT PRESENT, by decision: pull request totals, any duration claim implying continuous
     full-time work since Jan 2024, invented percentages, tenant names.

     >> CONFIRM BEFORE SENDING: the trainee split (full-time Jan–Jun 2024, part-time Aug 2024–Feb
     2025) is taken from your old portfolio site via FINDINGS 2.3, not from a confirmed source.
     Cefalo Payroll ran May 2024 to Feb 2025, so it straddles both trainee periods; it is listed
     under part-time, where most of it fell. Correct the months if these are wrong.

     MEASURED, do not guess: at 10pt Calibri, 1.08 line-height, A4, 0.5in margins this renders to
     exactly 2 pages, 99% full on page 1 and 94% on page 2. Body is 1,630 words. The one-pager is
     637 words and fills 96% of one page at the same settings. Re-measure after any edit with
     scratchpad/md2cv.py plus headless Chrome rather than counting words, since the two files have
     different words-per-line densities and word count mispredicts by 20%.

     IF IT SPILLS TO A THIRD PAGE, cut in this order:
       1. The "Also" paragraph at the end of Projects
       2. Courses down to the three AWS and Anthropic entries
       3. Awards down to five entries
       4. CV Analyzer AI Agent, then CloudTask
       5. The communication and invoicing bullet
     NEVER CUT: the Subrite product line, tenant isolation, the payments fix, the stakeholder bullet.
     NO EM DASHES by design. En dash appears in date ranges only. -->

<div align="center">

# MD. JUBAER HOSAIN

Dhaka, Bangladesh · jubaerhosain1119@gmail.com · +8801717407400

linkedin.com/in/jubaerhosain · github.com/jubaerhosain · jubaerhosain.github.io

</div>

---

## SUMMARY

Backend-focused fullstack engineer at Cefalo since 2024, promoted twice. Spent 2025 and 2026 on
Subrite, a subscription SaaS in live production, working on multi-tenant isolation, billing
correctness across four card providers and production observability. Strong problem-solving base
from competitive programming, 1700+ problems and LeetCode Knight. Maintains published open-source
tooling.

---

## EXPERIENCE

**CEFALO BANGLADESH LTD.** · Dhaka · Norwegian software consultancy

**Associate Software Engineer II**, full-time · Mar 2026 – Present

*Client: **Subrite** (subrite.no), a subscription and media monetization SaaS built for a Norwegian
client and in live production use by Nordic media publishers. 136 entities, 605 API routes, 4 card
providers, 4 locales, enterprise accounts of 3000+ members.*

- **Designed and rolled out the platform-wide tenant isolation layer**, a scoped repository over
  TypeORM and continuation-local storage that scopes every read and stamps every write. Took
  tenant-scoped entities from **78 to 90 of 136**, behind **830 lines** of tests. Self-proposed after
  finding two live cross-tenant exposure paths; **nine security-typed pull requests** in total.
- **Ended a recurring class of incorrect-charge incidents** by diagnosing a four-part compound defect
  in recurring payments and replacing four divergent per-provider guards with one, covered by
  **40 tests**. Built idempotent recovery tooling for payments debited at the provider but never
  recorded locally, and caught a locale bug reading `249,50` as **24950**.
- **Made the largest enterprise subscriptions usable at 3000+ members** with paginated APIs and
  batched lookups that removed an N+1, and cut **114 Datadog error-tracking hits in 14 days** so
  genuine failures surface. Owned **56 production hotfixes** end to end.

**Associate Software Engineer I**, full-time · Mar 2025 – Mar 2026

*Client: **Subrite**, continued.*

- **Led tenant onboarding across Stripe, Vipps, Nets and SwedbankPay** with Norwegian **EHF and
  Avtalegiro e-invoicing**, and built repeatable onboarding data migrations for **six media
  tenants**, dry-run by default.
- Moved tenant configuration from staff-mediated to self-service across settings, branding,
  communication and payment providers, including per-brand hostnames, logos and sender identities.
- Built SendGrid email infrastructure across four Nordic languages with hard and soft bounce
  tracking and an event-priority model, necessary because provider events arrive out of order and a
  later, less definitive event must not overwrite an earlier one.

**Trainee Software Engineer**, part-time · Aug 2024 – Feb 2025

*Internal Cefalo products: Payroll (May 2024 – Feb 2025) and ATS (Nov – Dec 2024).*

- **Cefalo Payroll**, **477 commits**: employee management, salary calculation and tax-compliance
  workflows replacing manual payroll processing, with **Kafka** for asynchronous exchange with the HR
  Portal. Reported an information-disclosure defect where error messages leaked query details.
  NestJS, TypeORM, MySQL; Next.js, Redux Toolkit.
- **Cefalo ATS**: a one-month engagement on a codebase new to me, fixing defects across backend and
  frontend. NestJS, Prisma, Jenkins CI, Turborepo monorepo.

**Trainee Software Engineer**, full-time · Jan 2024 – Jun 2024

*Internal Cefalo product: Blog.*

- Two months of intensive training on HTTP, REST and core web concepts, then built Cefalo Blog end to
  end: rich-text authoring with image uploads, threaded comments, JWT auth with social login, and
  role-based access control.

---

## PROJECTS & OPEN SOURCE

**nestjs-transactions** · *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
Two published MIT npm packages providing a declarative `@Transactional()` decorator that propagates
transactions across service boundaries via AsyncLocalStorage with no monkey-patching, as a maintained
replacement for an unmaintained predecessor. Changesets releases, dockerized dual-Postgres
integration tests, and CI that opens a nightly dependency-upgrade pull request. It grew out of the
request-scoped transaction problem first hit on Cefalo Payroll.

**Mess Ledger** · *NestJS, PostgreSQL, Expo, React Native* · Feb 2026 – Present
Shipped to the app stores. A 10-module API and a React Native app share a **generated OpenAPI
client** for wire-level type safety, with subscriptions, push notifications, PDF reports, Sentry,
argon2 and JWT auth, and a Postgres UNLOGGED-table cache with per-entity eviction policies. CI
enforces branch and merge policy through a workflow guard and a committed pre-push hook, and
environment variables are validated so a missing value fails boot.

**Beautified You** · *NestJS, MongoDB, Next.js* · May 2024 – Apr 2025
**Paid client project delivered with one collaborator**, an e-commerce and admin-inventory platform
for a cosmetics retailer, live with real customers. Owned the backend across products, categories,
carts, orders and JWT authentication, with Swagger docs and an AsyncLocalStorage request-context
module.

**CloudTask** · *Turborepo, Next.js, NestJS, AWS ECS Fargate, RDS, SQS, S3* · Jul 2026
An AWS reference architecture built in 9 days: web app, API and SQS worker in one monorepo, Zod
shared contracts, Testcontainers and Playwright tests, Trivy scanning, and OIDC-authenticated
container releases to ECR.

**CV Analyzer AI Agent** · *FastAPI, LangChain, Qdrant, NestJS, Next.js* · Jul 2025
Real-time PDF parsing, the semantic-search API, and chat context and memory for a RAG recruitment
assistant that ranks candidate CVs against a job description, including **anonymization of extracted
personal data before it reaches the model**.

**easy-shop** · *NestJS, MongoDB, Next.js, Expo, FastAPI, scikit-learn, Ollama* · Jul 2024 – Jan 2025
**1,147 commits.** A five-service commerce platform: an API with local payment-gateway and Google
OAuth integration, a storefront, a mobile app, a scikit-learn recommendation service, and a
fine-tuned Mistral assistant served through Ollama.

**Academic Management System** · *NestJS, TypeORM, MySQL to PostgreSQL, BullMQ* · 2025 – 2026
282 commits on v1, then a multi-tenant v2 rewrite on PostgreSQL with tenant provisioning scripts,
audit logging, and admissions, exams and attendance domains.

Also: **anthropic-labs**, a public lab series on the Claude API covering streaming, tool use, a
hand-written agentic loop and token accounting; a **60-topic C++ algorithms library**; and a DevOps
portfolio covering Terraform-provisioned AWS, Kubernetes zero-downtime rolling updates and a
Helm-installed Prometheus, Grafana and Loki stack.

---

## TECHNICAL SKILLS

- **Languages**: TypeScript, JavaScript, SQL, Python, Java, C, C++
- **Backend**: NestJS, Node.js, Express, FastAPI, REST APIs, OpenAPI/Swagger
- **Frontend**: React, Next.js (App Router, server actions), Tailwind CSS, Ant Design, shadcn/Radix,
  TanStack Query, Redux Toolkit, next-intl
- **Databases and data**: PostgreSQL, MySQL, MongoDB, Redis, TypeORM, Prisma, Sequelize, schema
  design, migrations, production data operations
- **Workflow and async**: Temporal, BullMQ, Kafka, cron jobs, background workers, event-driven
  architecture
- **Payments and billing**: Stripe, Vipps, Nets, SwedbankPay, EHF/BIS3/Avtalegiro e-invoicing,
  recurring billing, dunning
- **Communication**: SendGrid, MJML, SMS, Firebase Cloud Messaging push notifications
- **Observability**: Datadog, Sentry, structured logging, production incident response
- **Cloud and DevOps**: Docker, Docker Compose, GitHub Actions, AWS (ECS, RDS, S3, SQS, ElastiCache,
  IAM, VPC), Kubernetes, Terraform, Helm, Prometheus/Grafana/Loki, Jenkins, Nginx
- **Testing**: Jest, unit and integration testing, React Testing Library, Testcontainers, Playwright
- **Auth and security**: JWT, NextAuth, OIDC/OAuth 2.0, RBAC, multi-tenant isolation, argon2, OWASP
  practices
- **AI-assisted development**: Claude, Cursor, agent context files and MCP, Anthropic SDK, LangChain,
  Qdrant, RAG, Ollama
- **Fundamentals**: Data structures and algorithms, system design, database design, SOLID, design
  patterns
- **Other**: Swagger/OpenAPI, MinIO, Cloudflare Images, Jira, Linear

---

## COMPETITIVE PROGRAMMING

**1700+ problems solved** across LeetCode, Codeforces, CodeChef and HackerEarth. Handle `igloo11`.

- **LeetCode**: rating 1879, **Knight (top 5%)**, best global rank **652**
- **HackerEarth**: rating 1884, best global rank **23**
- **CodeChef**: rating 1810, **4-star**, best global rank **96**
- **Codeforces**: rating 1401, **Specialist**

---

## AWARDS

- **Champion**, Independence Cup Programming Contest 2022
- **6th of 650+**, Phitron Programming Contest 2022
- **17th of 100+**, SEC Inter-University Junior Programming Contest 2022
- **Onsite finalist**, BUET CSE FEST Hackathon 2023 · **Round 2**, Meta Hacker Cup 2023
- **Round 2**, Code Samurai Inter-University Hackathon 2024
- **Online preliminary**, ICPC Asia Dhaka Regional 2021 and 2022

---

## COURSES

AWS Developer Associate (DVA-C02) · AWS Solutions Architect Associate · Building with the Claude API
(Anthropic) · Mastering DevOps: From Fundamentals to Advanced Practices · React Native: The Practical
Guide · HackerRank Problem Solving (Intermediate), Java (Basic), JavaScript (Basic)

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* · Dhaka, Bangladesh
