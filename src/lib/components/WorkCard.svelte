<script lang="ts">
type WorkLink = { label: string; href: string }

export let title: string
export let description: string
export let tags: string[] = []
export let links: WorkLink[] = []
export let status: 'wip' | 'released' = 'wip'
</script>

<article class="card p-6 h-full flex flex-col gap-4">
	<div class="flex items-center gap-3">
		<div class="h-10 w-10 rounded-2xl bg-brand-500/15 dark:bg-brand-500/20 flex items-center justify-center text-brand-700 dark:text-brand-100 font-bold">
			{title.slice(0, 1).toUpperCase()}
		</div>
		<div class="flex flex-col">
			<h3 class="text-lg font-bold">{title}</h3>
			{#if status === 'wip'}
				<span class="badge">WIP</span>
			{/if}
		</div>
	</div>

	<p class="text-sm text-muted leading-relaxed flex-1">{description}</p>

	{#if tags.length}
		<div class="flex flex-wrap gap-2">
			{#each tags as tag}
				<span class="badge text-xs">{tag}</span>
			{/each}
		</div>
	{/if}

	{#if links.length}
		<div class="flex flex-wrap gap-3 pt-2">
			{#each links as link}
				<a
					class="text-sm font-semibold text-brand-600 dark:text-brand-200 hover:text-brand-700 dark:hover:text-brand-100 inline-flex items-center gap-1"
					href={link.href}
				>
					{link.label}
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-3.5 w-3.5 fill-current">
						<path d="M14 3h7v7h-2V6.414l-9.293 9.293-1.414-1.414L17.586 5H14V3z" />
						<path d="M5 5h5V3H5c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-5h-2v5H5V5z" />
					</svg>
				</a>
			{/each}
		</div>
	{/if}
</article>
