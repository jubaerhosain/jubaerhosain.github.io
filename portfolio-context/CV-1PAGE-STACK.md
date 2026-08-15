<!-- V3 STACK. Skills promoted directly under the summary so the tech surface is scanned first.
     Built for a tech lead checking stack fit before an interview loop.
     Bullets are grouped by domain (payments, multi-tenancy, performance, delivery, observability)
     and open with build verbs, with the technology inside the first eight words.
     Lighter on raw numbers than V1 by design.
     SECTION ORDER: Summary, Skills, Experience, Projects, Problem solving, Awards, Education.

     STRUCTURE: four dated position entries under one employer line, each with employment type
     (full-time / part-time) and its client or product named. No continuous "Jan 2024 - Present".

     DELIBERATELY NOT CLAIMED, no evidence behind them: on-call rotation, TDD, pair programming,
     incident retrospectives, mentoring or onboarding engineers. Java is a language entry only.
     Spring appears nowhere despite the wide Skills block. AWS items are Udemy courses, never
     "certified". No pull request totals, no duration claim implying continuous full-time work.

     >> CONFIRM BEFORE SENDING: the trainee split (full-time Jan–Jun 2024, part-time Aug 2024–Feb
     2025) comes from your old portfolio site via FINDINGS 2.3, not a confirmed source.

     BUDGET: 662 words, ~4% longer than CV-1PAGE-BEST.md, which fills 96% of one page at 10pt
     Calibri, 1.08 line-height, A4, 0.5in margins. The nine-line Skills block makes this the
     longest of the four. Measure before sending with scratchpad/md2cv.py plus headless Chrome.

     IF IT SPILLS, cut in this order:
       1. Courses line
       2. Awards down to three entries
       3. Mess Ledger project
       4. The AI-assisted development skills line
       5. Summary from two lines to one
     NEVER CUT: the Subrite client line, tenant isolation, the payments bullet.
     NO EM DASHES by design. En dash appears in date ranges only. Max two bold spans per bullet. -->

<div align="center">

# MD. JUBAER HOSAIN

Dhaka, Bangladesh · jubaerhosain1119@gmail.com · +8801717407400

linkedin.com/in/jubaerhosain · github.com/jubaerhosain · jubaerhosain.github.io

</div>

---

## SUMMARY

Backend-focused fullstack engineer working in TypeScript across NestJS and Next.js. Spent 2025 and
2026 on a subscription SaaS in production, strongest on payment integrations, multi-tenant data
access, PostgreSQL and production observability.

---

## SKILLS

**Languages**: TypeScript, JavaScript, SQL, Python, Java, C++
**Backend**: NestJS, Node.js, Express, FastAPI, REST APIs, OpenAPI
**Data**: PostgreSQL, MySQL, MongoDB, Redis, TypeORM, Prisma, schema design, production data
migrations
**Async and workflow**: Temporal, BullMQ, Kafka, cron jobs, background workers
**Frontend**: React, Next.js (App Router), Tailwind CSS, TanStack Query, Redux Toolkit
**Payments**: Stripe, Vipps, Nets, SwedbankPay, EHF and Avtalegiro e-invoicing, recurring billing
**Platform**: Docker, AWS, GitHub Actions, Datadog, Sentry, Jest, Testcontainers
**Auth**: JWT, OIDC/OAuth 2.0, RBAC, multi-tenant isolation, argon2
**AI-assisted development**: Claude, Cursor, Anthropic SDK, LangChain, Qdrant, RAG

---

## EXPERIENCE

**CEFALO BANGLADESH LTD.** · Dhaka · Norwegian software consultancy

**Associate Software Engineer II**, full-time · Mar 2026 – Present
**Associate Software Engineer I**, full-time · Mar 2025 – Mar 2026
*Client: **Subrite**, a subscription and media monetization SaaS built for a Nordic client and live
in production with publishers. 136 entities, 605 API routes, 4 card providers, 4 locales.*

- Integrated Stripe, Vipps, Nets and SwedbankPay plus Norwegian EHF and Avtalegiro e-invoicing,
  unified the recurring charge guard across all four providers after tracing a four-part defect, and
  built recovery tooling for payments debited at the provider but never recorded locally.
- Built the tenant isolation layer, a scoped repository over TypeORM using continuation-local storage
  that scopes every read and stamps every write, taking enforced entities from **78 to 90 of 136**
  after finding two paths where one tenant's data could be read by another.
- Replaced unbounded loading with paginated APIs for **3000+ member** subscriptions, removed an N+1
  with batched lookups, and added a per-key-locked stale-while-revalidate cache reusable across the
  platform.
- Shipped tenant self-service configuration, SendGrid email in four Nordic languages with hard and
  soft bounce tracking, and repeatable onboarding migrations for six media tenants.
- Cut **114 Datadog error hits in 14 days**, rewrote outage alerting to one alert per two-hour
  window, and owned **56 production hotfixes** end to end.

**Trainee Software Engineer**, part-time · Aug 2024 – Feb 2025
*Internal Cefalo products: Payroll (May 2024 – Feb 2025) and ATS (Nov – Dec 2024).*

- NestJS, TypeORM, MySQL, Kafka and MinIO with Next.js and Redux Toolkit on Cefalo Payroll,
  **477 commits**, replacing manual salary and tax processing. Fixed defects across Cefalo ATS
  (NestJS, Prisma, Turborepo) in a one-month engagement.

**Trainee Software Engineer**, full-time · Jan 2024 – Jun 2024
*Internal Cefalo product: Blog.*

- Trained on HTTP, REST and web fundamentals, then built Cefalo Blog end to end with rich-text
  authoring, JWT auth with social login, and role-based access control.

---

## PROJECTS

**nestjs-transactions** · *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
Two published MIT npm packages: a `@Transactional()` decorator propagating transactions through
AsyncLocalStorage, with Changesets releases and dockerized dual-Postgres integration tests.

**Mess Ledger** · *NestJS, PostgreSQL, Expo, React Native* · Feb 2026 – Present
Shipped to the app stores. API and mobile app share a generated OpenAPI client, with subscriptions,
push notifications, PDF reports and Sentry.

**Beautified You** · *NestJS, MongoDB, Next.js* · May 2024 – Apr 2025
Paid client project with one collaborator, live with real customers. Owned the backend across
products, carts, orders and JWT authentication.

---

## PROBLEM SOLVING & AWARDS

1700+ problems solved. **LeetCode Knight (top 5%)**, best rank 652 · HackerEarth best rank 23 ·
CodeChef 4-star, best rank 96 · Codeforces Specialist.

**Champion**, Independence Cup Programming Contest 2022 · **6th of 650+**, Phitron Programming
Contest 2022 · **Onsite finalist**, BUET CSE FEST Hackathon 2023 · **Round 2**, Meta Hacker Cup 2023

**Courses**: AWS Developer Associate · AWS Solutions Architect Associate · Building with the Claude API

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* · Dhaka, Bangladesh
