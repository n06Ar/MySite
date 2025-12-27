import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eef2ff',
					100: '#e0e7ff',
					200: '#c7d2fe',
					300: '#a5b4fc',
					400: '#818cf8',
					500: '#6366f1',
					600: '#4f46e5',
					700: '#4338ca',
					800: '#3730a3',
					900: '#312e81',
					950: '#1e1b4b',
				},
				primary: {
					50: '#f2f7fb',
					100: '#e7f0f8',
					200: '#d3e2f2',
					300: '#b9cfe8',
					400: '#9cb6dd',
					500: '#839dd1',
					600: '#6a7fc1',
					700: '#6374ae',
					800: '#4a5989',
					900: '#414e6e',
					950: '#262c40',
				},
			},
		},
	},

	plugins: [],
} as Config
