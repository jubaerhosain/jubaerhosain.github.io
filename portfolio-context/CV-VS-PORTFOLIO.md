# What goes in the CV vs the portfolio

**The rule:** the CV earns the interview, the portfolio earns the offer.

They have different readers, so they get different budgets. The site shouldn't repeat the CV —
it should let someone go *deeper* after reading it. **Selection on the CV, depth on the site.**

---

## The four tiers

| | CV | Portfolio site | `PORTFOLIO.md` / `CV-MASTER.md` | GitHub repo descriptions |
|---|---|---|---|---|
| Reader | Recruiter, ~30-second scan | Someone already interested | Only you | Someone who clicked through |
| Budget | 1 page, ~650 words | 8–10 projects | Unlimited | One line each |
| Projects shown | **3** | 8–10, with real descriptions | All 45 | All public ones |
| Purpose | Get past the filter | Answer "is he actually good?" | Interview prep | Stop names looking unexplained |

---

## Which projects, where

**CV (3):** nestjs-transactions · Beautified You · Mess Ledger.
Nothing before 2024 except awards and education. Every line must serve *this specific
application* — if it doesn't, cut it, however fond you are of it.

**Portfolio site (8–10):** the ten you already list. The gap on your site today isn't project
count, it's that several entries never say **what the thing is**. Fix that with the
plain-language descriptions from `PORTFOLIO.md` §1–3.

Also put on the site, because a CV can't carry them:
- The **cross-cutting narrative** — the request-context/AsyncLocalStorage thread followed across
  four codebases into a published library. It's your best story and it needs a paragraph.
- The full **competitive-programming record** with judge profiles and links.
- Live links and screenshots. A working URL beats any bullet you could write.

**Interview prep only:** everything else — the 45-repo inventory, the stack index, the talking
points.

---

## Never publish

- **`CV-CLIENTS.md`** — names your employer's clients. Interview conversation only, and check
  your NDA first.
- **The talking points** from `PORTFOLIO.md` — they're written as things to *say*, and read
  oddly in public.
- **`FINDINGS.md`** — it catalogues your own weak spots. Useful to you, nobody else.
- Your **phone number and address** on the public site. The CV is sent to a person; the site is
  crawled by anyone. (Phone on the CV, not on the site.)

---

## Four tests when you can't decide

1. **Would a recruiter skip it?** → keep it off the CV.
2. **Does it need more than one sentence to land?** → site, not CV.
3. **Would it be checkable and embarrassing if wrong?** → cut it, or reword until it's exactly
   true. (This is what killed "Render", "Spring", and the Scikit-learn claim.)
4. **Does it prove something no other item proves?** → keep it, even if it's old. This is why
   Beautified You survives at 2024: it's your only *paid, customer-facing* delivery.

---

## The failure modes this prevents

- **A two-page CV that says less than a one-pager**, because nothing was prioritised.
- **A portfolio that's just the CV again** — no reason for anyone to read it.
- **Unexplained repo names**, which is what your GitHub profile looks like right now: eight
  public repos have no description at all.
- **Claiming breadth you can't defend.** Depth on three things beats a list of twenty.
