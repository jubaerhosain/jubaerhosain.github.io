# jubaerhosain.github.io

Personal portfolio: [jubaerhosain.github.io](https://jubaerhosain.github.io)

Astro 5 + Tailwind 4, static, no client framework. A fixed left sidebar with a
single-page numbered scroll; light theme only.

## Develop

```sh
npm install
npm run dev       # http://127.0.0.1:4321
npm run build     # → dist/
npm run preview
```

## Layout

```
src/
├─ data/site.ts              all content, edit here not in components
├─ layouts/BaseLayout.astro  shell, meta/OG/JSON-LD, sidebar + main grid
├─ components/
│  ├─ Sidebar.astro          desktop rail: profile, nav, socials, CV
│  ├─ MobileNav.astro        < lg: fixed header + right drawer
│  ├─ Footer.astro
│  ├─ ui/                    Section, AccentCard, HoverCard, Tag, Icon
│  └─ sections/              the eight numbered sections
├─ scripts/nav.ts            IntersectionObserver scroll-spy + drawer
└─ styles/global.css         @theme tokens (Tailwind 4, CSS-first)
```

Sections, in order: `01 Introduction` · `02 Experience` · `03 Selected Projects` ·
`04 Technical Skills` · `05 Achievements` (Online Judges nested) ·
`06 Courses & Certificates` · `07 Education` · `08 Get in touch`.

**Section order and numbering come from the `nav` array in `site.ts`.**
`ui/Section.astro` derives each number from an entry's position there, so
reordering or inserting a section means editing `nav` and `pages/index.astro`,
nothing else. A section whose `id` is absent from `nav` renders unnumbered.

## Editing content

Everything user-visible lives in `src/data/site.ts`. A few fields are rendered
with `set:html` so they can carry `<span class="highlight">` emphasis and
`<code>`: `about`, `achievementsLead`, `coursesLead`, and
experience bullets.

**Wording rule for `courses`.** The AWS entries are Udemy *course completions*,
not the proctored DVA-C02 / SAA-C03 exams. "AWS Certified …" may appear only as
part of a verbatim Udemy course title, always alongside `Udemy` as the visible
provider, never as a credential held. See `CV-MASTER.md` §8 and the note in
`portfolio-context/latex/resume.tex`.

`public/files/jubaer-hosain-cv.pdf` is the CV linked from the sidebar and the
mobile header.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes to
GitHub Pages on every push to `main`.

## Notes

`portfolio-context/` holds the research and CV source material this site draws
from. It is not part of the build and never ships to `dist/`. Several files in
it are marked never-publish: client names, interview talking points, and the
gap analysis.
