import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vite'

export default defineConfig({
    base: 'https://n06ar.me',
    plugins: [sveltekit()],
    resolve: {
        alias: {
            '@components/': `${__dirname}/src/components/`,
        },
    },
})
