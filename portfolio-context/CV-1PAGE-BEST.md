<!-- BEST FIT. The synthesis, tuned to the Optimizely Software Engineer II posting specifically.
     This is the one to send unless you have a reason to pick another.

     WHAT IT TAKES FROM EACH:
       from IMPACT      the number-led openings and the locale decimal bug
       from COMPETENCY  the stakeholder bullet, and the honest substitutes for JD rituals
       from STACK       Skills placed directly after Experience, so a tech lead finds it fast

     BULLET SHAPE: outcome or number first, mechanism second. The mechanism is what makes an
     Associate-level engineer claiming architecture work credible, so it stays in.

     STRUCTURE: four dated position entries under one employer line, each with employment type
     (full-time / part-time) and its client or product named. There is no continuous
     "Jan 2024 - Present" block, because employment was not continuous or uniformly full-time.

     JD COVERAGE (Optimizely SE II), by the bullet's opening words rather than by number, since
     numbering shifts whenever bullets are merged:
       Ownership of small epics ......... "Proposed and built", "Onboarded tenants"
       Design through production ........ "Proposed and built", "Made 3000+ member"
       Debug complex issues independently "Ended a run of incorrect charges", "Caught a locale bug"
       Testing and troubleshooting ...... 830 lines of tests, 40 tests
       Demonstrating initiative ......... "Proposed and built" (self-originated), 9 security PRs
       Critical thinking ................ "Ended a run", "Cut 114 Datadog error hits"
       On-call support .................. "Worked directly with", framed as hotfix ownership,
                                          NOT a rota. He has never been on a rota.
       Strong English / global role ..... "Worked directly with", shown by audience, never asserted
       PaaS/SaaS services ............... the Subrite client line
       Agile ............................ scoped subtasks in "Worked directly with"

     DELIBERATELY NOT CLAIMED, no evidence behind them: on-call rotation, TDD, pair programming,
     incident retrospectives, mentoring or onboarding engineers, and "Utilizing Feedback".
     Java is a language entry only. Spring appears nowhere. There is no professional Java here.

     >> CONFIRM BEFORE SENDING: the trainee split (full-time Jan–Jun 2024, part-time Aug 2024–Feb
     2025) is taken from your old portfolio site via FINDINGS 2.3, not from a confirmed source.
     Cefalo Payroll ran May 2024 to Feb 2025, so it straddles both trainee periods; it is listed
     under part-time, where most of it fell. Correct the months if these are wrong.

     MEASURED, do not guess: 637 words, rendering to exactly 1 page at 10pt Calibri, 1.08
     line-height, A4, 0.5in margins, filling 96% of the page. Re-measure after any edit with
     scratchpad/md2cv.py plus headless Chrome. Word count alone mispredicts page fill by up to 20%
     because sections differ in words per line.

     IF IT SPILLS, cut in this order:
       1. Courses line
       2. Awards down to three entries
       3. Beautified You project
       4. The ATS clause in the part-time trainee bullet
       5. Summary from two lines to one
     NEVER CUT: the Subrite client line, tenant isolation, the payments fix, the stakeholder bullet.
     NO EM DASHES by design. En dash appears in date ranges only. Max two bold spans per bullet. -->

<div align="center">

# MD. JUBAER HOSAIN

Dhaka, Bangladesh · jubaerhosain1119@gmail.com · +8801717407400

linkedin.com/in/jubaerhosain · github.com/jubaerhosain · jubaerhosain.github.io

</div>

---

## SUMMARY

Backend-focused fullstack engineer at Cefalo since 2024, promoted twice. Spent 2025 and 2026 on
Subrite, a subscription SaaS in production, working on multi-tenant isolation, billing correctness
across four card providers and production observability.

---

## EXPERIENCE

**CEFALO BANGLADESH LTD.** · Dhaka · Norwegian software consultancy

**Associate Software Engineer II**, full-time · Mar 2026 – Present
**Associate Software Engineer I**, full-time · Mar 2025 – Mar 2026
*Client: **Subrite**, a subscription and media monetization SaaS built for a Nordic client and live
in production with publishers. 136 entities, 605 API routes, 4 card providers, 4 locales.*

- Proposed and built the tenant isolation layer after finding two paths where one tenant's data
  could be read by another. A scoped repository over TypeORM took enforced entities from **78 to 90
  of 136**, behind **830 lines of tests**.
- Ended a run of incorrect charges by tracing a four-part defect in recurring payments and replacing
  four divergent provider guards with one, covered by **40 tests**.
- Owned **56 production hotfixes** end to end, working directly with the product owner, CTO and
  customer support to scope vague requirements into subtasks.

**Trainee Software Engineer**, part-time · Aug 2024 – Feb 2025
*Internal Cefalo products: Payroll (May 2024 – Feb 2025) and ATS (Nov – Dec 2024).*

- Wrote **477 commits** on Cefalo Payroll (NestJS, TypeORM, MySQL, Kafka; Next.js, Redux Toolkit),
  replacing manual salary and tax processing. Fixed defects across Cefalo ATS in a one-month
  engagement on a codebase new to me.

**Trainee Software Engineer**, full-time · Jan 2024 – Jun 2024
*Internal Cefalo product: Blog.*

- Trained on HTTP, REST and web fundamentals, then built Cefalo Blog end to end with rich-text
  authoring, JWT auth with social login, and role-based access control.

---

## SKILLS

**Languages**: TypeScript, JavaScript, SQL, Python, Java, C++
**Backend and data**: NestJS, Node.js, REST APIs, PostgreSQL, MySQL, Redis, TypeORM, Prisma,
Temporal, BullMQ, Kafka, production data migrations
**Frontend**: React, Next.js, Tailwind CSS, Redux Toolkit
**Platform**: Docker, AWS, GitHub Actions, Datadog, Sentry, Jest, Stripe, Vipps, EHF e-invoicing,
JWT, OIDC/OAuth 2.0, multi-tenant isolation
**AI-assisted development**: Claude, Cursor, Anthropic SDK, LangChain, RAG

---

## PROJECTS

**nestjs-transactions** · *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
Published two MIT npm packages providing a `@Transactional()` decorator that propagates transactions
through AsyncLocalStorage with no monkey-patching, as a maintained replacement for an unmaintained
predecessor. Changesets releases and dockerized dual-Postgres integration tests.

**Mess Ledger** · *NestJS, PostgreSQL, Expo, React Native* · Feb 2026 – Present
Shipped to the app stores. The API and mobile app share a generated OpenAPI client for wire-level
type safety, with subscriptions, push notifications, PDF reports and Sentry.

**Beautified You** · *NestJS, MongoDB, Next.js* · May 2024 – Apr 2025
Paid client project built with one collaborator, live with real customers. Owned the backend:
products, carts, orders and JWT authentication.

**CloudTask** · *Turborepo, NestJS, Next.js, AWS ECS Fargate, RDS, SQS* · Jul 2026
An AWS reference architecture built in 9 days: web app, API and SQS worker in one monorepo, with
Testcontainers and Playwright tests and OIDC-authenticated container releases to ECR.

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
