<script lang="ts">
	import { onMount } from 'svelte'
	import ThemeToggle from '$lib/components/ThemeToggle.svelte'

	const navLinks = [
		{ label: 'Home', href: '/' },
		{ label: 'Works', href: '#works' },
		{ label: 'Blog', href: '/blog/1' },
		{ label: 'About', href: '#about' },
	]

	let isOpen = false

	const close = () => {
		isOpen = false
	}

	onMount(() => {
		const onScroll = () => (isOpen = false)
		window.addEventListener('scroll', onScroll)
		return () => window.removeEventListener('scroll', onScroll)
	})
</script>

<header class="sticky top-0 z-30 border-b border-black/5 dark:border-white/10 backdrop-blur bg-[color:var(--bg)]">
	<div class="section-shell h-16 flex items-center justify-between gap-4">
		<a href="/" class="flex items-center gap-2 font-black text-lg">
			<img
				src="/images/cat-avatar.png"
				alt="mimi the cat"
				class="h-7 w-7 rounded-full object-cover"
				loading="lazy"
			/>
			<span>NaoNao</span>
		</a>

		<nav class="hidden md:flex items-center gap-6 text-sm font-semibold">
			{#each navLinks as nav}
				<a
					class="hover:text-brand-600 dark:hover:text-brand-200 transition-colors"
					href={nav.href}
				>
					{nav.label}
				</a>
			{/each}
			<ThemeToggle />
		</nav>

		<button
			class="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-black/5 dark:border-white/10"
			on:click={() => (isOpen = !isOpen)}
			aria-label="ナビゲーション開閉"
		>
			{#if isOpen}
				<span class="text-lg">✕</span>
			{:else}
				<span class="text-lg">☰</span>
			{/if}
		</button>
	</div>

	{#if isOpen}
		<div class="md:hidden border-t border-black/5 dark:border-white/10 bg-[color:var(--bg)]">
			<div class="section-shell py-3 flex flex-col gap-3 text-sm font-semibold">
				{#each navLinks as nav}
					<a
						class="py-2 hover:text-brand-600 dark:hover:text-brand-200 transition-colors"
						href={nav.href}
						on:click={close}
					>
						{nav.label}
					</a>
				{/each}
				<div class="py-1">
					<ThemeToggle />
				</div>
			</div>
		</div>
	{/if}
</header>
