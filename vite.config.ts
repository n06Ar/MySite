import adapter from '@sveltejs/adapter-vercel'
import { sveltekit } from '@sveltejs/kit/vite'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

export default defineConfig(({ command }) => ({
	plugins: [
		tailwindcss(),
		sveltekit({ preprocess: [vitePreprocess()], adapter: adapter() }),
	],
	ssr: {
		// sanitize-html (CJS) require()s htmlparser2@12 (ESM-only), which the Vercel runtime rejects (ERR_REQUIRE_ESM).
		// Bundling it lets the bundler resolve the ESM import at build time instead of at runtime.
		// Build only: in dev, Vite's SSR loader cannot evaluate a bundled CJS module ("require is not defined").
		noExternal: command === 'build' ? ['sanitize-html'] : [],
	},
}))
