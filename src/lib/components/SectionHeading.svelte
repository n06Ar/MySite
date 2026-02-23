<script lang="ts">
export let label: string
export let eyebrow: string | null = null
export let actionHref: string | null = null
export let actionLabel: string | null = null
</script>

<div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
	<div>
		{#if eyebrow}
			<p class="text-xs font-normal uppercase tracking-widest text-brand-500 mb-1">{eyebrow}</p>
		{/if}
		<h2 class="text-2xl md:text-3xl font-light tracking-tight">{label}</h2>
	</div>
	{#if actionHref && actionLabel}
		<a
			class="inline-flex items-center gap-2 text-sm font-normal text-brand-500 dark:text-brand-300 hover:text-brand-700 dark:hover:text-brand-100"
			href={actionHref}
		>
			{actionLabel}
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current">
				<path d="M13.172 12l-4.95-4.95 1.414-1.414L16 12l-6.364 6.364-1.414-1.414z" />
			</svg>
		</a>
	{/if}
</div>
