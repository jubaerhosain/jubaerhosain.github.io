# Findings Register

> Everything surfaced while rebuilding your CV from source: conflicts between your own
> documents, material missing from the old CV, claims that won't survive scrutiny, repo
> hygiene issues, and the decisions still waiting on you.
>
> **Sources examined:** `MY-PRS.md.csv` (251 merged PRs, 7,450 lines) · `CV-MATERIAL.md.csv` ·
> the Cefalo CV PDF (4 pages) · `my-words.md` · `important-links.md` · both Optimizely
> postings (fetched live) · the reference CV and portfolio · your GitHub account including
> private repos and two secondary accounts · your portfolio repo across all branches.
>
> Severity: 🔴 fix before applying · 🟡 decide before applying · 🟢 opportunity or context.

---

## 1. Open decisions — waiting on you

| # | 🔴🟡 | Decision | Why it matters |
|---|---|---|---|
| 1.1 | 🔴 | **Did you leave the Subrite project in July 2026?** | Notes from your July portfolio work say you left the *Subrite project* end of July 2026 while staying at Cefalo — and the PR log stops exactly at 2026-07-28. When I asked about employment you said "still at Cefalo, use Present", which I applied to the whole entry. If you're off Subrite, "Cefalo Jan 2024 – Present" stays right but describing Subrite as current work does not; it should read Mar 2025 – Jul 2026 with current work as its own line. **Raised twice, still unresolved.** |
| 1.2 | 🟡 | **Beautified You: Projects or Experience?** | It's paid client work, which conventionally belongs under Experience as freelance/contract, and it would strengthen that section noticeably. I placed it under Projects because its span (May 2024 – Apr 2025) overlaps your Cefalo Payroll period and some employers read concurrent paid work as moonlighting. Your call — worth asking your referrer. |
| 1.3 | 🟡 | **Final CGPA** | Omitted per your instruction. Your old site published `3.24/4.00 (up to 5th semester)`; the final figure is nowhere in your files. If it's materially higher, it's worth including. |
| 1.4 | 🔴 | **Are the AWS certifications exams or courses?** | Your CV lists "AWS Certified Developer Associate (DVA-C02)" and "Solutions Architect Associate" under *Courses*, with **Udemy certificate URLs**. Udemy course completion is not AWS certification. I wrote them as courses. If you haven't sat the proctored exams, claiming the certification is checkable and wrong. |
| 1.5 | 🟡 | **Tenant names and your NDA** | `CV-CLIENTS.md` names six of your employer's client publications. Fine to discuss in an interview; a printed CV or public page is a different exposure. Check your Cefalo contract. The CV drafts say "six Nordic media tenants" as the safe default. |
| 1.6 | 🟡 | **HSC/SSC on the 2-page version?** | Usually dropped at 2.5 years' experience. Your GPAs are strong (5.00/5.00 and 4.78/5.00), so it's a judgement call. |
| 1.7 | 🟡 | **Which summary do you want?** | Three options in `CV-MASTER.md` §2 — SE II weighted, AI-first weighted, or neutral. The 1-page has none (matching your reference CV); the 2-page uses the SE II one. |
| 1.8 | 🟢 | **Promote any deprioritized projects?** | Seven are listed but not on the drafts (Smart GPT, SPL, Mini LinkedIn, Potato Disease, Bangla Summarizer, Gomoku, blog-verse). Say the word. |

---

## 2. Conflicts between your own documents

### Resolved with your input

| Conflict | Sources in disagreement | Resolution |
|---|---|---|
| Cefalo start date | Astro site `Jan 2024` · Cefalo CV dates Blog training `March 2024` | **Jan 2024** |
| Current role end | CV and material file both `July 2026`, no "Present" | **Present** — but see finding 1.1 |
| Degree end | Astro site `2019–2023` · Cefalo CV `2019–2024` | **2019–2024** |
| Job title | Astro site `Software Engineer` · CV `Associate Software Engineer II` · CV header `Associate Software Engineer` (no numeral) | **Associate Software Engineer II** |
| Email | filename `jubaer.hosain@cefalo.com` · old site `bsse1255@iit.du.ac.bd` · Astro site `jubaerhosain1119@gmail.com` | **gmail** |
| Phone | old site `+8801581401964` | **+8801717407400** (you supplied; the old one is dead) |

### Still open

| # | 🔴🟡 | Conflict |
|---|---|---|
| 2.1 | 🟡 | **Beautified You dates.** Git says created 2024-05-07, last push 2025-04-10. Your portfolio site says `Mar – Jul 2024`. I used the git range. |
| 2.2 | 🟡 | **Beautified You stack.** Your site tags **Redis**; the API's `package.json` contains no Redis. Redux is front-end, and a Dockerfile does exist. I dropped the Redis claim. |
| 2.3 | 🟡 | **Your old site listed two Cefalo roles** — `Trainee Software Engineer, Jan 2024 – Jun 2024` and `Part-Time Trainee Software Engineer, Aug 2024 – Present` — which the Astro rebuild collapsed into one `Jan 2024 – Present` entry. Neither matches the Cefalo CV's three trainee engagements. **Was any of your early Cefalo time part-time?** That changes how the trainee period should be described, and there's an apparent July 2024 gap between those two old entries. |

---

## 3. Problems in the existing Cefalo CV

| # | 🔴🟡 | Finding |
|---|---|---|
| 3.1 | 🔴 | **Zero contact details.** No email, phone, LinkedIn, GitHub or portfolio anywhere in the 4-page PDF. The only URL is `www.cefalo.com`. Unusable as-is for an outside application. |
| 3.2 | 🔴 | **It's the Cefalo-branded internal template** — company logo, photo, "Experience *within Cefalo*". Wrong vehicle for applying to Optimizely. Not reused; the new drafts start clean. |
| 3.3 | 🔴 | **The Career Summary is stale and partly unsupported.** It leads on **Express.js** (used only in the 2024 Blog training project) and claims familiarity with **Scikit-learn and Keras**, which appear in no role, neither tools list, and no PR. It never mentions multi-tenancy, payments, Temporal or observability — i.e. it omits everything you're actually strong at. Dropped entirely. |
| 3.4 | 🟡 | **The PDF is one revision behind `CV-MATERIAL.md.csv`.** Missing an entire ASE II bullet (API error handling and production alerting), missing "across four Nordic languages", and its Tools section is the old one — the material file explicitly says its own version "replaces the current resume section". |
| 3.5 | 🟡 | **`Render` is claimed in the PDF** while the material file says to remove it because it appears in zero PRs. A live contradiction between two of your own files. |
| 3.6 | 🟡 | **Internal inconsistencies:** the Career Summary mentions **jenkins** but Jenkins is absent from the Tools section; months are variously spelled out and abbreviated ("March" vs "Mar", "February" vs "Feb"); Subrite rows use hyphens while older rows use en dashes. |
| 3.7 | 🟡 | **"Education & Certification" contains no certifications** — one degree plus six programming-contest results. The actual certifications sit under "Courses". Split into Education / Awards / Courses in the new drafts. |
| 3.8 | 🟡 | **"Preliminarist"** — ICPC bullet reads *"Online Preliminarist"*. Not a word; reads as a typo. *(I briefly reintroduced this while trimming and caught it.)* |
| 3.9 | 🟢 | **Reverse-chronological order is broken:** ATS (Nov–Dec 2024) is listed after Payroll (May 2024–Feb 2025) despite being nested inside it. Both your files share this. |
| 3.10 | 🟢 | **No Projects section at all**, and no CGPA. |

---

## 4. Material missing from the old CV entirely

Everything below is evidenced and was absent. 🟢 = pure upside.

| Missing | Evidence |
|---|---|
| **Published open-source packages** | `@nestjs-transactions/typeorm` **v5.0.3** and `/prisma` **v1.0.4** on npm, MIT, with docs site, Changesets releases, dual-Postgres integration tests, and nightly automated dependency CI |
| **A shipped mobile product** | Mess Ledger — NestJS 10 + PostgreSQL 18 API and an Expo 54 app sharing a generated OpenAPI client; subscriptions, push, PDF reports, Sentry, a Postgres UNLOGGED cache store |
| **A paid client engagement** | Beautified You — **204 of 376 commits yours**, live with real customers, the client's own account in the repo |
| **Production LLM work** | CV Analyzer — FastAPI + LangChain + Qdrant + OpenAI/Ollama, with PII anonymisation before the model |
| **AWS reference architecture** | CloudTask — ECS Fargate/RDS/ElastiCache/SQS/S3, Testcontainers, Trivy, OIDC→ECR, in 9 days |
| **Scale of your GitHub presence** | 55 repos, 45 non-fork, **6,427 authored commits since Mar 2020**; easy-shop alone is 1,147 commits |
| **Your competitive-programming record** | 1700+ problems; LeetCode **Knight, top 5%, best rank 652**; HackerEarth **rank 23**; CodeChef **4-star, rank 96**; Codeforces Specialist. On your site, never on the CV |
| **The observability programme** | 8 PRs; **114 Datadog error hits eliminated in 14 days**; alerting rewritten to one per 2-hour window. This is the single closest match to an SE II competency and it was nowhere |
| **Security work you initiated** | **9 security-typed PRs**, two flagged security concerns, plus the only issue ever filed on the Cefalo Payroll repo — an information-disclosure finding, in your first year |
| **The stale-while-revalidate work** | #5166 — a reusable `SwrCacheEntry` with a per-key lock added to the shared cache service, plus graceful degradation turning a total outage into a partial result |
| **Hotfix ownership** | **56 of 251 merged PRs (22%)** went straight to production |
| **Consolidation wins** | net **−1,233 lines** (#5346) and **−824 from a production hotfix** (#4303) |
| **DevOps programme** | Terraform AWS, Kubernetes zero-downtime rolling updates, Helm-installed Prometheus/Grafana/Loki, SonarQube gates |
| **Experience bullets on your site but not your CV** | BrandKit multi-brand support, the SendGrid sender-approval flow, layered OTP template resolution, a Spotify integration, and the hostname architecture analysis |

---

## 5. Claims that won't survive scrutiny — and how they're handled

| # | 🔴🟡 | Finding | Handling |
|---|---|---|---|
| 5.1 | 🔴 | **No professional Java or Spring.** The Subrite PR record contains zero Java, Spring or Hibernate — it's TypeScript/NestJS end to end. Your Java is academic and personal. The **SE I posting asks for Java + Spring**, so this is a genuine mismatch. | Java listed as a language only; **Spring appears nowhere**. Apply to SE II on backend depth (it names JavaScript explicitly). For SE I, lead with the AI-first evidence and say plainly that Spring exposure is academic. |
| 5.2 | 🟡 | **No open-source contributions to third-party projects.** All 100 PRs your account has authored are in your own or your employer's repos. The 10 forks have no upstream PRs. | Framed as "maintains open source" — publishing two npm packages is the stronger claim anyway, and volunteering the limit pre-empts a gotcha. |
| 5.3 | 🟡 | **No measured performance percentages exist.** Your own PR portfolio states: *"there are no fabricated percentages in this document"* and names the defensible figures as diff/file/entity counts, the Datadog hit counts, and the 3000+ seat target. | No invented percentages in any draft. The only two are "top 5%" (LeetCode) and 22% (56/251, arithmetic). |
| 5.4 | 🟡 | **The code-review claim has no artifact.** Your `my-words.md` claims proactive code reviews; the PR record shows no evidence of reviewing others' work — expected, since it's an *authored*-PR export. You confirmed it's true, so it's claimed. | Claimed. **Have a concrete example ready** — a review that caught a real defect. It's the one load-bearing claim with nothing behind it. |
| 5.5 | 🟡 | **Kubernetes, Terraform, Helm and Prometheus are lab depth**, from a course programme — not production operations. | Marked distinctly in the skills matrix. Overstating this is the fastest way for an interviewer to find the bottom of your knowledge. |
| 5.6 | 🟡 | **Playwright and Render appear in zero Subrite PRs.** Playwright is genuinely used on CloudTask. | Render dropped entirely; Playwright attributed to CloudTask only. |
| 5.7 | 🟢 | **No SMS vendor is named anywhere in the PR record** despite extensive SMS work. | "SMS" claimed, no vendor named. |
| 5.8 | 🟢 | **Mentoring and formal ADRs** aren't evidenced and you didn't claim them. | Not claimed. |
| 5.9 | 🟡 | **March 2026 has zero merged PRs**, and April is low-volume. | No bullet depends on that window. Have an explanation ready if anyone reads the PR log alongside the CV. |
| 5.10 | 🟢 | **Sentry appears only in 2025 PRs, Datadog only from July 2026.** | Sentry with the ASE I role, Datadog with ASE II. |

---

## 6. Repo and portfolio hygiene

| # | 🔴🟡 | Finding |
|---|---|---|
| 6.1 | 🔴 | **Eight public repos have no GitHub description at all** — `cloudtask`, `spl-management-system`, `mini-linkedin`, `wumpus-world`, `template-projects`, `web-development`, `data-science`, `jubaerhosain.github.io`. An interviewer opening your profile sees unexplained names. One line each is ~15 minutes and changes first impressions more than anything else here. |
| 6.2 | 🟡 | **`beautfied-you` is misspelled** (missing the `i`). Renaming breaks the link on your portfolio site, so fix both together or leave it knowingly. |
| 6.3 | 🟡 | **Your Astro rebuild is not on your default branch.** `main`, `portfolio-2026` and `modernize-portfolio` are byte-identical and still serve the 2023-era `index.html`; the Astro 5 site exists only on **`rebuild-astro`**. If you're putting `jubaerhosain.github.io` on your CV, what's live is the old site. |
| 6.4 | 🟡 | **The rebuild dropped content that still existed on `main`:** the SRBD Code Contest results (236th of 700+, 238th of 650+), HackerRank and SPOJ judge profiles, the count-up stats, an entire Licenses & Certifications block (commented out but populated — four HackerRank certificates plus HackerEarth), team names for contests, and Meta Hacker Cup's 6102nd of 20k+ placement. |
| 6.5 | 🟢 | **Your contribution graph is fragmented across three accounts** — `jubaerhosain`, `jubaerapps` (holds a Mess Ledger predecessor) and `jubaerhosain1119-ostad` (7 DevOps repos). 732 of your commits sit in repos you don't own. Anyone judging you by your main profile's graph sees less than you did. |
| 6.6 | 🟢 | **The Cefalo org repos show zero commits by you** (`quick-meet`, `claude-workshop`, `cefalo-marketplace`, etc.) — membership and workshop attendance only. Your real employment work is under `cefalobd`: Payroll (477 commits) and CV-Analyzer (33). |
| 6.7 | 🟢 | **Two CV PDFs are tracked on `rebuild-astro`** — the legacy `files/Md. Jubaer Hosain's CV.pdf` and a newer `jubaer-hosain-cv.pdf`. Keep the legacy URL resolving if anything links to it. |
| 6.8 | 🟢 | **`important-links.md` includes a colleague's portfolio and CV** (`inzamam-inz.github.io`) kept as format references. Noted so it isn't mistaken for your own work — it's the structural template you chose, and I used it that way only. |

---

## 7. Strengths you may be undervaluing

Worth reading before an interview. These are the findings that *help*.

| Finding | Why it matters |
|---|---|
| **You followed one problem across four codebases** | Request-scoped transactions: hit it on Cefalo Payroll (its README records the AsyncLocalStorage fix) → used the pattern in Beautified You (`als` module) → built the tenant-isolation layer on CLS at Subrite → published the general solution as an npm library. Most engineers at 2.5 years cannot point to a problem they followed that far. This is your best interview narrative. |
| **Your observability work is a precise competency match** | The SE II posting asks candidates to "identify operational metrics and build dashboards". You ran an 8-PR alert-quality programme, and diagnosed one fix by checking Datadog for *which constraint was actually being hit* (87 violations vs 27) to rule out the obvious answer. That's the exact skill, evidenced. |
| **`todo.md` in Beautified You is unusually good evidence** | It tracks a paying client's change requests, bugs and feature requests with status markers. "Utilizing Feedback" is a named SE II competency and most candidates have nothing this concrete for it. |
| **The client committed to your repo** | A `beautifiedyou24` account appears in the contributor list. That's third-party proof of a real commercial engagement, not a self-described one. |
| **Nordic compliance is a rare skill set** | EHF/BIS3/Avtalegiro e-invoicing, Norwegian organisation-register validation, Vipps for both payments *and* login, Oslo-timezone billing arithmetic, øre precision. Uncommon and directly valuable to any European employer. |
| **You self-originated your biggest architectural programme** | The tenant-isolation work came out of two cross-tenant exposures you found and fixed yourself (#3620 was a three-line hotfix) and then generalised rather than patching twice. "Demonstrating Initiative" is a named competency. |
| **You filed a security issue in your first year** | The only issue ever opened on the Cefalo Payroll repo, about database details leaking in error messages. |
| **Your own PR portfolio is calibrated honestly** | It repeatedly downgrades its own claims — "flagged honestly in the PR description that the full workflow had not been exercised end-to-end", "this is three small fixes shipped together", "a negative-margin patch is an acknowledged shortcut". That habit is itself a seniority signal; it's why the numbers in these documents can be trusted. |
| **Negative diffs** | −1,233 lines migrating the busiest admin screen onto a shared framework; −824 from a production hotfix consolidating charts. Removing code deliberately reads better than adding it. |

---

## 8. Method and reliability

Five read-only agents ran over the sources. Two needed relaunching — one died on an API error, one stalled — and both were re-run with narrower scope, so coverage is complete. Nothing in these documents comes from a partial read.

**Where the numbers come from.** Platform figures (136 entities, 605 API routes, 623 frontend routes, 4 providers, 4 locales) and the 3000+ seat target are from your PR portfolio's own framing notes. Commit counts and repo facts are from the GitHub API. PR counts, diff sizes and Datadog figures are quoted from the PR portfolio. Contest placements and judge ratings are from your portfolio site. Nothing is estimated.

**Verification run on the drafts:** no tenant names, no dead phone number, no Cefalo email, no Spring claim, no "preliminarist", and no percentages beyond the two legitimate ones. One encoding slip (a stray CJK character) was caught and fixed in `PORTFOLIO.md`.

---

## 9. What to do next

1. **Answer 1.1** (Subrite end date) — it's the only finding that changes the drafts' accuracy rather than their polish.
2. **Answer 1.4** (AWS courses vs exams) — the only finding where the current wording could be called dishonest if wrong.
3. Skim `CV-MASTER.md` §3 and mark bullets you want kept, cut, or reworded.
4. Take `CV-1PAGE.md` and `CV-2PAGE.md` to your referrer.
5. Add descriptions to those eight public repos (6.1) — highest impact per minute of anything on this list.
6. Decide whether the portfolio site gets promoted off `rebuild-astro` before you cite the URL (6.3).

**Files:** `CV-MASTER.md` (evidence dataset) · `CV-1PAGE.md` · `CV-2PAGE.md` ·
`CV-CLIENTS.md` (tenant detail, keep private) · `PORTFOLIO.md` (project narratives and
interview prep) · this file.
