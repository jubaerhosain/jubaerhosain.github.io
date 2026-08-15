# Client & Tenant Reference — Subrite

> **What this file is for.** Talking material, not CV copy. It gives you the named accounts
> you onboarded and what you actually did for each, so you can answer "tell me about the
> scale you worked at" concretely instead of vaguely.
>
> **Keep these names off the printed CV.** `CV-1PAGE.md` and `CV-2PAGE.md` say "six Nordic
> media tenants" instead. That's deliberate — see the NDA note at the end.
>
> Everything here is sourced from `MY-PRS.md.csv`. PR numbers are given so you can re-read the
> original before an interview.

---

## The commercial chain

| Layer | Who |
|---|---|
| Your employer | **Cefalo Bangladesh Ltd.** (Dhaka) |
| The product you build | **Subrite** — multi-tenant subscription & media-monetization SaaS (`subrite.no`) |
| Product owner / upstream org | **Skavl Media** (the repo is `skavl-media/subrite`) |
| End customers | Nordic media publishers, each a tenant on its own subdomain |

Worth knowing so you're not caught out: you are a Cefalo engineer working on a Norwegian
client's product, whose own customers are Norwegian publishers. That's three layers, and
interviewers often ask which one you actually talked to. Per the PR record, you coordinated
directly with **the product owner, the CTO, and non-technical customer support** — so you were
working at the client layer, not behind a Cefalo account manager.

---

## Platform scale — the numbers worth quoting

These are the defensible ones. All appear in the PR record's own framing notes.

| Figure | What it is |
|---|---|
| **136 entities** | size of the backend data model |
| **605 API routes** | backend surface |
| **623 frontend routes** | Next.js surface |
| **251 merged PRs** | your contribution, Mar 2025 – Jul 2026 |
| **56 production hotfixes** | 22% of your merged PRs went straight to production |
| **175+ Linear issues** | delivered |
| **4 card providers** | Stripe, Vipps, Nets, SwedbankPay (+ an Orbyt config model) |
| **4 locales** | member portal in English, Norwegian, Danish, Swedish; admin in EN + NO |
| **3000+ members** | largest single enterprise/group subscriptions you optimised for |
| **78 → 90 of 136** | entities you brought under enforced tenant isolation |

**Norwegian market compliance you actually handled** — a genuinely uncommon skill set, and
worth leading with if the interviewer is European: **EHF / BIS3 / Avtalegiro** e-invoicing,
legal-entity name validation against the Norwegian organisation register (`^\d{9}$` plus MVA
suffix), Norwegian bank account formats, Oslo-timezone billing arithmetic, øre/sub-krone
precision, `kr` formatting with comma decimals and space thousands separators, Swedish
postal-code rules, `æ ø å` handling, and **Vipps** for both payments and login (Vipps login
matters commercially in Norway — it's the dominant consumer identity there).

---

## The six named tenants you onboarded

Each was a live production migration: reading the tenant's existing subscriber and payment
data out of a legacy system, mapping it, and importing it without breaking billing. The
migrations are dated below in merge order.

### 1. Harvest Magazine — first migration
`#3062` · 15 files, **+4863/-0**
Export-API analysis and data investigation. Your first tenant migration on the platform, and
the one that established the pattern: investigate the source system's export API first, write
the analysis down, *then* build the import.

### 2. Media tenant (unnamed in the record)
`#3459` · 31 files, **+5931/-0**
Import-manifest preparation. The record doesn't name this publication — if asked, say you
onboarded seven tenants of which six are identifiable from your own notes.

### 3. Dog Trainer
`#3816` · 22 files, **+3207/-0**
Import-script preparation.

### 4. Filter Nyheter — the hardest one
`#4169` · 35 files, **+7821/-0**, **57 commits** · plus `#4841` plan cleanup
The largest migration in the record, and your best interview story:
- **221 subscriptions had no payment provider recorded at all** — you had to decide what to do
  with them rather than fail the import, and brought them in as Stripe.
- You derived and documented a **Vipps renewal-buffer rule** to stop imported subscribers
  being charged the instant they landed: if `importDate − 8 days ≤ nextRenewal ≤ importDate +
  3 days`, set `nextRenewal = importDate + 3 days`. That is a business decision encoded as a
  rule, not a code fix — the kind of judgement call worth describing out loud.
- Nine numbered notebooks, one per migration stage.
- The follow-up `#4841` shipped a `list-non-qualifying.sh` that reports what was **not**
  migrated *and why* — so nothing was silently dropped.

### 5. Petro
`#4450` · 31 files, **+4175/-1** · seven numbered notebooks.

### 6. Minerva
`#4780` · 27 files, **+3492/-0** · six numbered notebooks plus split-tab handling in the source
export.

### 7. Psykologisk — the one with a production incident afterwards
`#5004` · 30 files, **+4622/-0**, **43 commits** · eight numbered notebooks.
Then three follow-ups, which together make the strongest ownership story you have:
- **`#5158` (Urgent, raised from customer support)** — the import had written
  `renewalAnchorDate` as the import date, so *every* monthly renewal snapped to the 20th of
  the month. You found it, then fixed it with a preview → snapshot table
  (`subrite_418_renewal_anchor_backup`) → transactional apply → verify-before-commit
  sequence, wrapped in a shell script that was **dry-run by default and required an explicit
  `--apply`**. That became the template for later data-ops fixes in the repo.
- **`#5059`** — reconciled default Stripe cards for the tenant. The script **refuses to run
  if the generated SQL file is absent**, rather than silently doing nothing.
- **`#5095`** — repaired corrupted billing periods across all tenants, including damage from
  a separate reactivation bug.

---

## How you ran production data operations

This is the methodology, and it's the part that reads as senior. Worth being able to recite:

1. **Investigate first** — analyse the source system's export API and write the findings down
   before touching an import script.
2. **Numbered notebooks, one per stage** — so the migration is reviewable and re-runnable by
   someone else, not a single opaque script.
3. **Written decision log** — `clarification.md` recorded each business question and the answer
   taken, with exact boundaries. Also `guidelines.md`, `post-import-work.md`, `checklist.md`.
4. **Dry-run by default** — shell wrappers with `set -euo pipefail`, requiring an explicit
   `--apply` flag, and a required `DATABASE_URL`.
5. **Preview → snapshot → transactional apply → verify** for any mutation of financial data.
6. **The preview output doubles as the rollback record.**
7. **Attribution tags** (`metaData.fix_pr`) on every row a repair touched.
8. **Narrow, explicit inclusion rules** — the `#5095` repair only touched rows whose corrupted
   period spanned ≥ 400 days *and* had no post-reactivation extension *and* no renewal event.
   As the record itself puts it: *"the engineering judgement is in the exclusions."*
9. **Say what you did not migrate, and why** — `list-non-qualifying.sh`.
10. **Keep the runbook current** — you maintained `ADDING_TENANTS.md`, the tenant-provisioning
    runbook, in step with every schema change (`#3595`, `#3522`, `#3317`, `#4861`, `#3316`).

---

## Suggested interview answers

**"What's the biggest system you've worked on?"**
> A multi-tenant subscription SaaS for Nordic publishers — 136 entities, around 600 API
> routes, four payment providers, four locales. I merged 251 PRs into it over 17 months, about
> a fifth of them production hotfixes.

**"Tell me about onboarding a customer."**
> I ran seven tenant migrations. The hardest was a news publication where 221 subscriptions had
> no payment provider recorded at all, and where importing naively would have charged people
> the day they landed — so I derived a renewal-buffer rule with the product owner and encoded
> it, then shipped a script that reported what didn't qualify and why.

**"Describe a production incident you owned."**
> An import I'd built set the wrong renewal anchor, so every monthly renewal for that tenant
> drifted to the same day of the month. Support escalated it. I fixed it with a preview,
> a snapshot table, a transactional apply and a verify step, dry-run by default — and that
> became the template the team used for later data repairs.

**"What was the riskiest change you made?"**
> Repairing corrupted billing periods across every tenant. The interesting part wasn't the
> update, it was the exclusions — I only touched rows I could prove were damaged, and tagged
> every one so the change was traceable afterwards.

---

## NDA note — read this once

This file names your employer's client and that client's customers. That is normally fine to
discuss in an interview under the usual "I can describe the work, not the confidential
details" framing, and naming a publicly-listed product like Subrite is low-risk. But:

- **Check your Cefalo contract** before putting these names in writing anywhere outside this
  file — a printed CV, a public portfolio page, or a LinkedIn post is a different exposure
  from a spoken interview answer.
- The **volumes and diff sizes** here are your own work product and safe to quote.
- The **tenant names** are the client's commercial relationships, not yours. Describing them
  as "a Norwegian news publication" or "a psychology magazine" gives an interviewer everything
  they need without naming anyone.

That's the reason the CV drafts say "six Nordic media tenants" — you keep the specifics
available for the conversation, without committing them to a document that gets forwarded.
