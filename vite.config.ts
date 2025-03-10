import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'@components/': `${__dirname}/src/components/`,
			$lib: `${__dirname}/src/lib/`,
		},
	},
})
