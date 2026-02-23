import type { Config } from 'tailwindcss'

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#daeaf9',
					100: '#b3d5f4',
					200: '#7ab6ec',
					300: '#3d93df',
					400: '#1a7fd4',
					500: '#096FCA',
					600: '#075ca8',
					700: '#054a87',
					800: '#033a69',
					900: '#022a4d',
					950: '#011830',
				},
				primary: {
					50: '#fafafa',
					100: '#f5f5f5',
					200: '#e5e5e5',
					300: '#d4d4d4',
					400: '#a3a3a3',
					500: '#737373',
					600: '#525252',
					700: '#404040',
					800: '#262626',
					900: '#171717',
					950: '#0a0a0a',
				},
			},
			fontFamily: {
				sans: ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
			},
		},
	},

	plugins: [],
} as Config
