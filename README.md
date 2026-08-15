# jubaerhosain.github.io

Personal portfolio — [jubaerhosain.github.io](https://jubaerhosain.github.io)

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
├─ data/site.ts              all content — edit here, not in components
├─ layouts/BaseLayout.astro  shell, meta/OG/JSON-LD, sidebar + main grid
├─ components/
│  ├─ Sidebar.astro          desktop rail: profile, nav, socials, CV
│  ├─ MobileNav.astro        < lg: fixed header + right drawer
│  ├─ Footer.astro
│  ├─ ui/                    Section, AccentCard, HoverCard, Tag, Icon
│  └─ sections/              the six numbered sections
├─ scripts/nav.ts            IntersectionObserver scroll-spy + drawer
└─ styles/global.css         @theme tokens (Tailwind 4, CSS-first)
```

Sections, in order: `01 Introduction` · `02 Work Experience` (Education nested) ·
`03 Selected Projects` · `04 Achievements` (Online Judges nested) ·
`05 Technical Skills` · `06 Get in touch`.

## Editing content

Everything user-visible lives in `src/data/site.ts`. A few fields are rendered
with `set:html` so they can carry `<span class="highlight">` emphasis and
`<code>`: `about`, `narrative.body`, `achievementsLead`, and experience bullets.

`public/files/jubaer-hosain-cv.pdf` is the CV linked from the sidebar and the
mobile header.

## Deploy

`.github/workflows/deploy.yml` builds with `withastro/action` and publishes to
GitHub Pages on every push to `main`.

## Notes

`portfolio-context/` holds the research and CV source material this site draws
from. It is not part of the build and never ships to `dist/`. Several files in
it are marked never-publish — client names, interview talking points, and the
gap analysis.
