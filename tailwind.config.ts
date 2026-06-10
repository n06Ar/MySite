import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eef2fd',
					100: '#d4dfff',
					200: '#9aafef',
					300: '#7595e9',
					400: '#507be3',
					500: '#4169e1',
					600: '#3257d0',
					700: '#2846be',
					800: '#1e35a0',
					900: '#152680',
					950: '#0d1855',
				},
				gold: {
					50: '#fdf9e8',
					100: '#faf0c3',
					200: '#f6e08a',
					300: '#ecd283',
					400: '#e9c85c',
					500: '#e1b941',
					600: '#c99b26',
					700: '#a87e1e',
					800: '#876116',
					900: '#664b10',
					950: '#3d2c07',
				},
			},
		},
	},

	plugins: [],
} as Config
