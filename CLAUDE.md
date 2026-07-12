# CLAUDE.md

## Project

Personal portfolio and blog for Sean Coughlin. Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, and Lora (Google Font). Hosted on Vercel at [seancoughlin.me](https://www.seancoughlin.me). The live site is deployed from the `master` branch.

## Commands

```bash
pnpm dev          # start dev server (http://localhost:3000)
pnpm build        # production build (Turbopack)
pnpm start        # serve the production build
pnpm test         # run the vitest suite once
pnpm test-watch   # vitest in watch mode
pnpm lint         # eslint (flat config; includes Next core-web-vitals rules)
pnpm pretty-check # verify formatting
pnpm pretty-write # format all ts/tsx files
```

Package manager is **pnpm** — never use npm or yarn. Node 24 (see `.nvmrc`).

## Architecture

- `app/page.tsx` — homepage (name, links, photo, bio)
- `app/blog/page.tsx` — blog post index
- `app/blog/[slug]/page.tsx` — individual post renderer
- `lib/posts.ts` — reads `.md` files from `content/posts/` via gray-matter
- `content/posts/` — drop a `.md` file here to publish a post

## Adding a blog post

Create `content/posts/<slug>.md` with frontmatter:

```markdown
---
title: "Post title"
date: "YYYY-MM-DD"
description: "One sentence."
---

Body in standard Markdown.
```

The post appears on the blog index (`/blog`) automatically. To surface it on the homepage too, uncomment the "recent writing" block in `app/page.tsx`.

## Design principles

- Content first — no floating headers, scroll hijacking, or animations
- Serif typography (Lora), warm off-white (`#fafaf7`) background
- Single narrow column (`max-w-2xl`), nothing competes with the text
- No skills grid or work timeline — LinkedIn covers that
- Date-prefixed posts (`YYYY-MM-DD | Title`), newest first

## Tooling & dependencies

- **ESLint** uses the flat config in `eslint.config.js`, composing `eslint-config-next` (core-web-vitals + typescript) with `eslint-config-prettier`. `pnpm lint` runs the ESLint CLI directly — `next lint` was removed in Next 16.
- **Pre-commit** (husky + lint-staged) runs `eslint --fix` and `prettier` on staged files.
- **Deliberate version ceilings** — do not bump these without re-checking the toolchain, they were verified to break:
  - **ESLint 9** — ESLint 10 crashes `eslint-plugin-react`, which `eslint-config-next` bundles.
  - **TypeScript 6** — TS 7 (the native compiler) isn't supported by `typescript-eslint` yet.
  - **@vitejs/plugin-react 5** — v6 requires Vite 8, but Vitest 4 ships Vite 7.

## Notes

- The "recent writing" section on the homepage is commented out in `app/page.tsx` — uncomment when there are real posts to show
- When editing, run `pnpm lint`, `pnpm test`, and `pnpm build` before committing; CI (`.github/workflows/ci.yml`) runs the same on every PR to `master`
