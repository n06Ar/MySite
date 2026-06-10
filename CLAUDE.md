# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # dev server (Vite + SvelteKit)
pnpm build        # production bundle
pnpm preview      # serve built bundle
pnpm check        # svelte-kit sync + type check
pnpm lint         # Biome lint
pnpm format       # Biome format (writes)
```

No automated test suite exists. Verification is done via `pnpm check`, `pnpm build`, and manual QA.

## Architecture

Portfolio and blog site built with SvelteKit, deployed to Vercel. Blog content is served from **microCMS** (headless CMS) via the SDK.

### Data flow

All data fetching happens server-side in `+page.server.ts` files. The central data access layer is `src/lib/microCMS.ts`, which exports:

- `getBlogPageList(queries?)` — paginated list (always filters `publishedAt[exists]` to exclude drafts)
- `getBlogPageDetail(contentId, queries?)` — single article

Blog content HTML from microCMS is sanitized with `sanitize-html` in `src/routes/blog/pages/[contentId]/+page.server.ts` before being passed to the template.

### Routes

| Route | Purpose |
|---|---|
| `/` | Top page — loads 3 latest posts via `+page.server.ts` |
| `/blog/[page]` | Paginated blog list (50 posts/page, 1-indexed) |
| `/blog/pages/[contentId]` | Article detail |

### Shared UI

`src/lib/components/` — page-level components (`BlogCard`, `HeroSection`, `WorkCard`, etc.)  
`src/lib/components/layout/` — persistent shell (`SiteHeader`, `SiteFooter`)

### Styling

Tailwind CSS with `darkMode: 'class'`. Custom color tokens defined in `tailwind.config.ts`:
- `brand.*` — indigo-based accent palette
- `primary.*` — blue-grey palette

## Code Style

Biome enforces: **tabs** for indentation, **single quotes** in JS/TS, no semicolons, trailing commas. Run `pnpm lint` before PRs.

Svelte files have `noUnusedVariables` disabled (Biome override) because Svelte's template references aren't visible to the linter.

## Environment Variables

Required in `.env` (never commit):

```
MICROCMS_SERVICE_DOMAIN=
MICROCMS_API_KEY=
```

## Commit Format

```
<emoji> <type>(<scope>): <subject>

- detail bullets
```

Types: `feat`, `fix`, `refactor`, `style`, `test`, `docs`, `chore`. Use Gitmoji; max 2 emoji per commit.

Branch naming: `feature/<scope>-<summary>`, `fix/<scope>-<summary>`, `chore/<scope>-<summary>`.