import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

const config = {
    preprocess: [vitePreprocess()],
    kit: {
        adapter: adapter(),
        paths: {
            base: dev ? '' : '/{リポジトリ名}',
        },
    },
}

export default config
