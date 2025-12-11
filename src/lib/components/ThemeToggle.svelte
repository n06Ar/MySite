<script lang="ts">
	import { onMount } from 'svelte'

	type Theme = 'light' | 'dark'

	let theme: Theme = 'light'

	const applyTheme = (next: Theme) => {
		theme = next
		const root = document.documentElement
		root.classList.toggle('dark', next === 'dark')
		localStorage.setItem('theme', next)
	}

	onMount(() => {
		const stored = localStorage.getItem('theme')
		const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
		if (stored === 'dark' || (!stored && prefersDark)) {
			applyTheme('dark')
		} else {
			applyTheme('light')
		}
	})
</script>

<button
	class="inline-flex items-center gap-2 rounded-full border border-black/5 dark:border-white/10 px-3 py-1.5 text-sm font-semibold bg-white/70 dark:bg-white/5 backdrop-blur hover:border-brand-300 dark:hover:border-brand-400 transition-colors"
	on:click={() => applyTheme(theme === 'light' ? 'dark' : 'light')}
	aria-label="テーマ切替"
>
	{#if theme === 'dark'}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-brand-200">
			<path
				d="M21.64 13A9 9 0 0111 2.36 9 9 0 1021.64 13z" />
		</svg>
		<span>ダーク</span>
	{:else}
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-brand-500">
			<path
				d="M12 4.5a1 1 0 011-1h0a1 1 0 00-1-1 1 1 0 100 2zm5.657 2.343a1 1 0 00-1.414-1.414 1 1 0 001.414 1.414zM19.5 11a1 1 0 100-2 1 1 0 000 2zm-7.5 9.5a1 1 0 001-1 1 1 0 10-1 1zm-7-8.5a1 1 0 100-2 1 1 0 000 2zm1.843-6.157a1 1 0 10-1.414-1.414 1 1 0 001.414 1.414zM4.5 13a1 1 0 00-1-1h0a1 1 0 001 1zm12 4a1 1 0 10-1.414 1.414A1 1 0 0016.5 17zm-9 0a1 1 0 00-1.414 1.414A1 1 0 007.5 17zm4.5-9.5A3.5 3.5 0 118.5 11 3.5 3.5 0 0112 7.5z" />
		</svg>
		<span>ライト</span>
	{/if}
</button>
