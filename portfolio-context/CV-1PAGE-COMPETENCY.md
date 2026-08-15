<!-- V2 COMPETENCY. Written against the Optimizely SE II competency list and responsibility set.
     Built for a recruiter screening against the JD checklist, and for the ATS keyword pass.
     Bullets open with judgment verbs (Proposed, Traced, Diagnosed, Coordinated, Owned).
     Numbers support the sentence instead of opening it.
     SECTION ORDER: Summary, Experience, Open source, Skills, Awards, Education.

     STRUCTURE: four dated position entries under one employer line, each with employment type
     (full-time / part-time) and its client or product named. No continuous "Jan 2024 - Present".

     BUDGET: 648 words, ~2% longer than CV-1PAGE-BEST.md, which fills 96% of one page at 10pt
     Calibri, 1.08 line-height, A4, 0.5in margins. Measure before sending with scratchpad/md2cv.py
     plus headless Chrome rather than trusting the word count.

     DELIBERATELY NOT CLAIMED, because there is no evidence behind them: on-call rotation, TDD,
     pair programming, incident retrospectives, mentoring or onboarding engineers, and the
     "Utilizing Feedback" competency. Each is replaced by an outcome he actually produced.
     One of five competencies left unclaimed is cheaper than a hollow bullet in an interview.

     >> CONFIRM BEFORE SENDING: the trainee split (full-time Jan–Jun 2024, part-time Aug 2024–Feb
     2025) comes from your old portfolio site via FINDINGS 2.3, not a confirmed source.

     IF IT SPILLS, cut in this order:
       1. Courses line
       2. Awards down to three entries
       3. The ATS sentence in the part-time trainee bullet
       4. Problem solving line down to LeetCode only
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

Backend-focused fullstack engineer at Cefalo since 2024, promoted twice. Spent 2025 and 2026 on a
subscription SaaS in production, owning features from requirement clarification through design,
deployment, monitoring and the hotfix that follows.

---

## EXPERIENCE

**CEFALO BANGLADESH LTD.** · Dhaka · Norwegian software consultancy

**Associate Software Engineer II**, full-time · Mar 2026 – Present
**Associate Software Engineer I**, full-time · Mar 2025 – Mar 2026
*Client: **Subrite**, a subscription and media monetization SaaS built for a Nordic client and live
in production with publishers. 136 entities, 605 API routes, 4 card providers, 4 locales.*

- Proposed and led the multi-tenant isolation work after finding two paths where one tenant's data
  could be read by another. Built a scoped repository over TypeORM that scopes every read and stamps
  every write, taking enforced entities from **78 to 90 of 136** behind **830 lines of tests**.
  Raised nine security-typed pull requests in total.
- Traced a run of incorrect customer charges to four separate defects in recurring payments, with
  each of the four card providers carrying its own variant of the guard. Closed all four, replaced
  them with one shared guard covered by **40 tests**, and built recovery tooling for payments
  debited at the provider but never recorded locally.
- Diagnosed why real production failures were being missed: expected webhook duplicates were
  generating **114 Datadog error hits in 14 days**. Verified which constraint was actually firing,
  cleared the noise, and rewrote outage alerting to one alert per two-hour window.
- Coordinated directly with the product owner, CTO and non-technical customer support, turning vague
  requirements into scoped subtasks before writing code and taking escalations through to a deployed
  fix. Reviewed teammates' pull requests proactively. Owned **56 production hotfixes**.
- Reduced what the next engineer has to carry: moved the most-used admin screen and all ten of its
  filters onto one shared framework, a net removal of **1,233 lines**, and added a per-key-locked
  cache any expensive read on the platform can reuse.

**Trainee Software Engineer**, part-time · Aug 2024 – Feb 2025
*Internal Cefalo products: Payroll (May 2024 – Feb 2025) and ATS (Nov – Dec 2024).*

- Wrote **477 commits** on Cefalo Payroll (NestJS, TypeORM, MySQL, Kafka), replacing manual salary
  and tax processing. Became productive on the Cefalo ATS codebase in a one-month engagement with no
  prior exposure to it.

**Trainee Software Engineer**, full-time · Jan 2024 – Jun 2024
*Internal Cefalo product: Blog.*

- Trained on HTTP, REST and web fundamentals, then built Cefalo Blog end to end with rich-text
  authoring, JWT auth with social login, and role-based access control.

---

## OPEN SOURCE

**nestjs-transactions** · *TypeScript, NestJS, TypeORM, Prisma* · Jul 2026 – Present
Published two MIT npm packages providing a `@Transactional()` decorator that propagates transactions
through AsyncLocalStorage with no monkey-patching, as a maintained replacement for an abandoned
predecessor. Changesets releases and dockerized dual-Postgres integration tests.

---

## SKILLS

**Languages**: TypeScript, JavaScript, SQL, Python, Java, C++
**Backend and data**: NestJS, Node.js, REST APIs, PostgreSQL, MySQL, Redis, TypeORM, Prisma,
Temporal, BullMQ, Kafka, schema design and production data migrations
**Frontend**: React, Next.js, Tailwind CSS
**Platform**: Docker, AWS, GitHub Actions, Datadog, Sentry, Jest, unit and integration testing,
Stripe, Vipps, EHF e-invoicing, JWT, OIDC/OAuth 2.0, multi-tenant isolation
**AI-assisted development**: Claude, Cursor, Anthropic SDK, LangChain, RAG

**Problem solving**: 1700+ problems solved. **LeetCode Knight (top 5%)**, best rank 652 ·
HackerEarth best rank 23 · CodeChef 4-star, best rank 96 · Codeforces Specialist.

**Courses**: AWS Developer Associate · AWS Solutions Architect Associate · Building with the Claude API

---

## AWARDS

**Champion**, Independence Cup Programming Contest 2022 · **6th of 650+**, Phitron Programming
Contest 2022 · **Onsite finalist**, BUET CSE FEST Hackathon 2023

---

## EDUCATION

**Institute of Information Technology, University of Dhaka** · 2019 – 2024
*BSc in Software Engineering* · Dhaka, Bangladesh
