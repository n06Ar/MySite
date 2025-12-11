<script lang="ts">
	type Cta = { label: string; href: string; variant?: 'primary' | 'ghost' }

	export let headline = 'Webエンジニア / Frontend-leaning Fullstack'
	export let name = 'n06ar'
	export let lead = 'n06arです。SvelteKit が好きなフロントエンドエンジニアです。'
	export let description =
		'フロントエンドを中心に、Webアプリケーションの設計・実装・改善をしています。個人開発や業務で得た知見、つまづきの記録をこのサイトにまとめています。'
	export let tags: string[] = []
	export let ctas: Cta[] = []
</script>

<section class="section-shell section-space flex flex-col gap-6">
	<div class="space-y-4">
		<p class="text-sm font-semibold text-brand-600 dark:text-brand-200">{headline}</p>
		<h1 class="text-4xl md:text-5xl font-black leading-tight">{name}</h1>
		<p class="text-lg text-muted">{lead}</p>
		<p class="text-base text-muted max-w-3xl leading-relaxed">{description}</p>
	</div>

	{#if tags.length}
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="rounded-full bg-brand-50 dark:bg-brand-900/40 text-brand-700 dark:text-brand-100 px-3 py-1 text-xs font-semibold">
					{tag}
				</span>
			{/each}
		</div>
	{/if}

	<div class="flex flex-wrap gap-3">
		{#each ctas as cta}
			{#if cta.variant === 'ghost'}
				<a
					class="inline-flex items-center gap-2 rounded-full border border-brand-200 dark:border-brand-400 px-4 py-2 font-semibold text-brand-700 dark:text-brand-100 hover:bg-brand-50/70 dark:hover:bg-brand-900/30 transition"
					href={cta.href}
				>
					{cta.label}
				</a>
			{:else}
				<a
					class="inline-flex items-center gap-2 rounded-full bg-brand-500 text-white px-5 py-2.5 font-semibold shadow-md shadow-brand-500/30 hover:bg-brand-600 transition"
					href={cta.href}
				>
					{cta.label}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
						<path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
					</svg>
				</a>
			{/if}
		{/each}
	</div>
</section>
