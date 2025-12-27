# NaoNao

![Deploy GithubPage](https://github.com/n06Ar/MySite/workflows/Deploy%20GithubPage/badge.svg)

## Overview

N06's portfolio and blog site featuring profile and articles.

## Tech Stack

- SvelteKit / Svelte
- Vite
- TypeScript
- Tailwind CSS (tailwind-merge)
- microCMS (microcms-js-sdk)
- Three.js / highlight.js
- Adapter: @sveltejs/adapter-vercel

## Tools

- Node.js 22.x
- pnpm 9
- Biome (lint / format)
- svelte-check (type check)

## Setup

1. Install dependencies

```bash
pnpm install
```

2. Create environment variables (`.env` or `.env.local`)

```bash
MICROCMS_SERVICE_DOMAIN=your-service-domain
MICROCMS_API_KEY=your-api-key
```

3. Start the dev server

```bash
pnpm dev
```

## Development Flow

- Local dev: `pnpm dev`
- Type check: `pnpm check`
- Lint: `pnpm lint`
- Format: `pnpm format`
- Build: `pnpm build`
- Preview build: `pnpm preview`

## What does NaoNao mean?

NaoNao is inspired by my cat's meow.
