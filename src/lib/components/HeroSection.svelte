<script lang="ts">
type Cta = { label: string; href: string; variant?: 'primary' | 'ghost' }

export let headline = 'Webエンジニア / Frontend-leaning Fullstack'
export let name = 'NaoNao'
export let lead = 'こんにちは、n06arです 👋'
export let descriptions = [
	'ここは n06ar のポートフォリオとブログのNaoNaoというWebサイトです🙋',
	'普段はフロントエンドを中心に、Webアプリケーションを作っています',
	'試したことや悩んだこと、学んだことをこのサイトにまとめていきたいと思っています！',
]
export let tags: string[] = []
export let ctas: Cta[] = []
</script>

<section class="section-shell section-space flex flex-col gap-6">
	<div class="space-y-4">
		<p class="text-sm font-normal tracking-widest uppercase text-brand-500 dark:text-brand-300">{headline}</p>
		<h1 class="text-4xl md:text-5xl font-light leading-tight tracking-tight">{name}</h1>
		<p class="text-lg text-muted">{lead}</p>
		{#if descriptions.length}
			<div>
			{#each descriptions as description}
				<p class="text-base text-muted max-w-3xl leading-relaxed">{description}</p>
			{/each}
			</div>
		{/if}
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
					class="inline-flex items-center gap-2 rounded border border-gray-300 dark:border-gray-600 px-4 py-2 font-normal text-sm text-gray-600 dark:text-gray-300 hover:border-brand-500 hover:text-brand-500 dark:hover:border-brand-400 dark:hover:text-brand-400 transition"
					href={cta.href}
				>
					{cta.label}
				</a>
			{:else}
				<a
					class="inline-flex items-center gap-2 rounded border border-brand-500 text-brand-500 dark:text-brand-400 dark:border-brand-400 px-5 py-2.5 font-normal text-sm hover:bg-brand-500 hover:text-white dark:hover:bg-brand-400 dark:hover:text-gray-900 transition"
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
