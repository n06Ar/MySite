/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: '/',
        src: '/_dist_',
    },
    plugins: [
        '@snowpack/plugin-svelte',
        '@snowpack/plugin-dotenv',
        '@snowpack/plugin-typescript',
        '@snowpack/plugin-sass',
        [
            '@snowpack/plugin-optimize',
            {
                preloadModules: true,
                preloadCSS: true,
            },
        ],
    ],
    install: [
        /* ... */
    ],
    buildOptions: {
        out: 'docs',
    },
    alias: {
        '@app': './src',
        '@components': './src/components',
    },
}
