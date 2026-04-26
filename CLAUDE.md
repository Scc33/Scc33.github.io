# CLAUDE.md

## Project

Personal portfolio and blog for Sean Coughlin. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, and Lora (Google Font). Hosted on Vercel.

## Commands

```bash
pnpm dev        # start dev server
pnpm build      # production build
pnpm test       # run vitest suite
pnpm lint       # eslint
pnpm pretty-write  # format all ts/tsx files
```

Package manager is **pnpm** — never use npm or yarn.

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

## Notes

- The "recent writing" section on the homepage is commented out in `app/page.tsx` — uncomment when there are real posts to show
- ESLint config was rewritten in the Node 24 upgrade (the old `eslint-config-next` compat shim broke with `@rushstack/eslint-patch`)
- `next lint` emits a warning that the Next.js plugin isn't detected — harmless, the config still catches real issues
