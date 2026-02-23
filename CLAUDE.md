# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NaoNao — n06ar's personal portfolio and blog site built with SvelteKit 2 + Svelte 4, Tailwind CSS 3, and microCMS. Deployed on Vercel.

## Development Environment

devbox + direnv for environment management. Node 22.x / pnpm 9 required (`.tool-versions`).

```bash
devbox shell          # or rely on direnv auto-activation
pnpm install
```

## Commands

| Command | Purpose |
|---|---|
| `pnpm dev` | Vite dev server |
| `pnpm build` | Production build |
| `pnpm preview` | Preview built output |
| `pnpm check` | SvelteKit sync + svelte-check (TypeScript) |
| `pnpm lint` | `biome check .` |
| `pnpm format` | `biome format . --write` |

No test suite exists yet. `pnpm check` and `pnpm lint` are the primary validation commands.

## Architecture

### Data Flow

All data fetching happens server-side in `+page.server.ts` files via microCMS SDK (`src/lib/microCMS.ts`). Blog content is sanitized with `sanitize-html` and code-highlighted with `cheerio` + `highlight.js` on the server.

### Environment Variables

```
MICROCMS_SERVICE_DOMAIN=   # microCMS service domain
MICROCMS_API_KEY=          # microCMS API key
```

Accessed via `$env/static/private` (server-only). Template: `.env.template`.

### Routes

- `/` — Top page (Hero + Works placeholder + Latest 3 posts + About)
- `/blog/[page]` — Blog list with pagination (limit=50)
- `/blog/pages/[contentId]` — Blog detail

### Theme System

CSS custom properties (`--bg`, `--card`, `--text-strong`, `--text-muted`, `--brand`) defined in `app.css`. Dark mode via `html.dark` class, toggled by `ThemeToggle.svelte` and persisted in `localStorage`. Tailwind uses `darkMode: 'class'`.

### Global CSS Classes

`section-shell`, `section-space`, `card`, `badge`, `text-muted`, `prose-content` are defined in `app.css` — not Tailwind utilities. Check there before creating new utility classes.

## Code Style

- **Linter/Formatter**: Biome (tab indent, single quotes in JS, double quotes in JSON, trailing commas)
- **Svelte**: Svelte 4 syntax (`export let` for props, not Svelte 5 runes)
- **Naming**: PascalCase components, camelCase utilities, kebab-case route dirs
- **CSS**: Tailwind classes + CSS custom properties for theming. Color tokens in `tailwind.config.ts`
- **Path aliases**: `$lib` → `src/lib/`, `@components` → `src/components/`

## Commit Convention

Gitmoji + type format per `AGENTS.md`. Example: `✨ feat(blog): add pagination`

## CI

- GitHub Actions: Biome CI on all pushes/PRs (`.github/workflows/biome-ci.yaml`)
- Qodana static analysis configured (`qodana.yaml`)
