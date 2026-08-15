<!-- V1 IMPACT. Numbers lead every bullet. Built for a hiring manager doing a 10-second skim.
     Nine short Subrite bullets, one fact each. The least mechanism of the four, the most magnitude.
     SECTION ORDER: Summary, Experience, Projects, Skills, Problem solving, Awards, Education.

     STRUCTURE: four dated position entries under one employer line, each with employment type
     (full-time / part-time) and its client or product named. No continuous "Jan 2024 - Present".

     DELIBERATELY NOT CLAIMED, no evidence behind them: on-call rotation, TDD, pair programming,
     incident retrospectives, mentoring or onboarding engineers. Java is a language entry only.
     Spring appears nowhere. AWS items are Udemy courses, never "certified". No pull request totals,
     no duration claim implying continuous full-time work since Jan 2024, no invented percentages.

     >> CONFIRM BEFORE SENDING: the trainee split (full-time Jan–Jun 2024, part-time Aug 2024–Feb
     2025) comes from your old portfolio site via FINDINGS 2.3, not a confirmed source.

     BUDGET: 657 words, ~4% longer than CV-1PAGE-BEST.md, which fills 96% of one page at 10pt
     Calibri, 1.08 line-height, A4, 0.5in margins. This one will be tight. Measure before sending
     with scratchpad/md2cv.py plus headless Chrome rather than trusting the word count.

     IF IT SPILLS, cut in this order:
       1. Courses line
       2. Awards down to three entries
       3. The 1,233-net-lines sentence
       4. Beautified You project
       5. Summary from two lines to one
     NEVER CUT: the Subrite client line, tenant isolation, the payments fix.
     RENDERS AS: centered name, two contact lines, ruled section headings.
     NO EM DASHES by design. En dash appears in date ranges only. Max two bold spans per bullet. -->

<div align="center">

# MD. JUBAER HOSAIN

Dhaka, Bangladesh · jubaerhosain1119@gmail.com · +8801717407400

linkedin.com/in/jubaerhosain · github.com/jubaerhosain · jubaerhosain.github.io

</div>

---

## SUMMARY

Backend-focused fullstack engineer at Cefalo since 2024. Spent 2025 and 2026 on Subrite, a
subscription SaaS in production of 136 entities and 605 API routes, covering multi-tenant isolation,
billing correctness across four card providers, and production observability.

---

## EXPERIENCE

**CEFALO BANGLADESH LTD.** · Dhaka · Norwegian software consultancy

**Associate Software Engineer II**, full-time · Mar 2026 – Present
**Associate Software Engineer I**, full-time · Mar 2025 – Mar 2026
*Client: **Subrite**, a subscription and media monetization SaaS built for a Nordic client and live
in production with publishers. 136 entities, 605 API routes, 4 card providers, 4 locales.*

- Brought tenant-scoped entities from **78 to 90 of 136** with a scoped repository over TypeORM,
  backed by **830 lines of tests**.
- Found and closed two paths where one tenant's data could be read by another, then proposed the
  isolation programme myself. **9 security-typed pull requests** in total.
- Ended a run of incorrect charges by tracing a four-part defect in recurring payments and giving
  all four card providers one shared guard, covered by **40 tests**.
- Built idempotent tooling that recovered payments debited at the provider but never recorded
  locally, without double charging anyone.
- Caught a locale bug reading `249,50` as **24950**, billing customers 10x and 100x their price, and
  migrated the amount column from integer to numeric.
- Made **3000+ member** subscriptions usable with paginated APIs and batched lookups that removed an
  N+1, shipped behind a deprecation path.
- Cut **114 Datadog error hits in 14 days** and rewrote outage alerting to one alert per two-hour
  window.
- Removed **1,233 net lines** by moving the most-used admin screen and all ten of its filters onto
  one shared framework. Owned **56 production hotfixes**.
- Delivered tenant onboarding across Stripe, Vipps, Nets and SwedbankPay with Norwegian EHF
  e-invoicing, and moved tenant configuration to self-service.

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

## PROJECTS

**nestjs-transactions** · *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
Published two MIT npm packages (**v5.0.3** and **v1.0.4**) providing a `@Transactional()` decorator
that propagates transactions through AsyncLocalStorage with no monkey-patching. Changesets releases
and dockerized dual-Postgres integration tests.

**Beautified You** · *NestJS, MongoDB, Next.js* · May 2024 – Apr 2025
Paid client project built with one collaborator, live with real customers. Owned the backend across
products, categories, carts, orders and JWT authentication on a NestJS and Mongoose API.

---

## SKILLS

**Languages**: TypeScript, JavaScript, SQL, Python, Java, C++
**Backend and data**: NestJS, Node.js, REST APIs, PostgreSQL, MySQL, Redis, TypeORM, Prisma,
Temporal, BullMQ, Kafka
**Frontend**: React, Next.js, Tailwind CSS
**Platform**: Docker, AWS, GitHub Actions, Datadog, Sentry, Jest, Stripe, Vipps, EHF e-invoicing,
JWT, OIDC/OAuth 2.0, multi-tenant isolation
**AI-assisted development**: Claude, Cursor, Anthropic SDK, LangChain, RAG

**Problem solving**: 1700+ problems solved. **LeetCode Knight (top 5%)**, best rank 652 ·
HackerEarth best rank 23 · CodeChef 4-star, best rank 96 · Codeforces Specialist.

**Courses**: AWS Developer Associate · AWS Solutions Architect Associate · Building with the Claude API

---

## AWARDS

**Champion**, Independence Cup Programming Contest 2022 · **6th of 650+**, Phitron Programming
Contest 2022 · **Onsite finalist**, BUET CSE FEST Hackathon 2023 · **Round 2**, Meta Hacker Cup 2023

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* · Dhaka, Bangladesh
