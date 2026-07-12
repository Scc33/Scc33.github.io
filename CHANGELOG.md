# Changelog

Notable changes to [seancoughlin.me](https://www.seancoughlin.me), newest first.
Dates are `YYYY-MM-DD`. Each entry notes the primary commit and, where useful,
what we learned. Seeded from git history on 2026-07-12; maintained by hand from
here on — add an entry when you ship something worth remembering.

## 2026-07-12 — Dependency & tooling refresh

Commit: `cdc8dcb`

### Changed

- Upgraded **Next.js 15 → 16**, React 19.2.7, **TypeScript 6**, **Vitest 4**,
  `@vercel/analytics` 2, `lint-staged` 17, and the latest Tailwind / types /
  prettier / postcss.

### Fixed

- **ESLint flat config now actually loads the Next.js plugin.** It previously
  composed only `typescript-eslint` + prettier, so `eslint-config-next`'s
  core-web-vitals rules never ran (lint even warned "plugin not detected").
- Migrated the `lint` script off the deprecated `next lint` to the ESLint CLI
  (`next lint` is removed in Next 16).
- CI: added a real **test** step, bumped pnpm to 10, and fixed the build
  artifact path (`dist/` → `.next/`, which is what Next produces).

### Learnings (deliberate version ceilings)

- **ESLint 9** — ESLint 10 crashes `eslint-plugin-react` (bundled by
  `eslint-config-next`).
- **TypeScript 6** — TS 7 (the native compiler) isn't supported by
  `typescript-eslint` yet.
- **`@vitejs/plugin-react` 5** — v6 requires Vite 8, but Vitest 4 ships Vite 7.

## 2026-05-10 — Dependency & CI maintenance

Commit: `00bede3`

- jsdom 29, Node engine requirement bump, package-size-report workflow, and a
  batch of Dependabot updates (GitHub Actions + npm production dependencies).

## 2026-04-26 — Site redesign: minimal serif homepage + file-based blog

Commits: `be447d3`, `8afa921`, `b094ce8`

- Rebuilt the site as a single narrow-column (`max-w-2xl`) serif layout (Lora)
  on a warm off-white (`#fafaf7`) background — content first, no floating
  header, scroll hijacking, or animations.
- Removed the resume download, portfolio section, skills grid, and work
  timeline (LinkedIn covers that).
- Added a Markdown file-based blog (`content/posts/`, `gray-matter`,
  `react-markdown`, `remark-gfm`).
- Added `CLAUDE.md`; updated the bio (Forward Deployed Engineer at Palantir).

## Earlier history (pre-changelog)

The site dates back to **2020-07-07** (`Scc33/Scc33.github.io`) and went through
several iterations before this changelog began: content redesigns (2021, 2023),
tooling experiments including Bun (2024), and ongoing framework/dependency
maintenance through 2025 (Tailwind CSS v4, Node upgrades). See `git log` for the
full record.
