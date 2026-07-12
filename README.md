# seancoughlin.me

My personal homepage and blog — a deliberately minimal, content-first site.

**Live:** [seancoughlin.me](https://www.seancoughlin.me)

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19
- TypeScript, [Tailwind CSS v4](https://tailwindcss.com/)
- Markdown blog via `gray-matter` + `react-markdown`
- Tested with [Vitest](https://vitest.dev/), deployed on [Vercel](https://vercel.com/)

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

Package manager is **pnpm** (Node 24 — see `.nvmrc`).

| Command | What it does |
| --- | --- |
| `pnpm dev` | Start the dev server |
| `pnpm build` | Production build |
| `pnpm test` | Run the Vitest suite |
| `pnpm lint` | ESLint |
| `pnpm pretty-write` | Format with Prettier |

## Project layout

```
app/            # routes (App Router)
  page.tsx      # homepage
  blog/         # blog index + [slug] post renderer
lib/posts.ts    # reads Markdown from content/posts/
content/posts/  # drop a .md file here to publish a post
```

## Writing a post

Create `content/posts/<slug>.md` with frontmatter:

```markdown
---
title: "Post title"
date: "YYYY-MM-DD"
description: "One sentence."
---

Body in Markdown.
```

It appears on `/blog` automatically.

## More

- [`CLAUDE.md`](./CLAUDE.md) — architecture, conventions, and tooling notes
- [`CHANGELOG.md`](./CHANGELOG.md) — notable changes over time
