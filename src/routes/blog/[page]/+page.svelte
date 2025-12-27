<script lang="ts">
import BlogCard from '$lib/components/BlogCard.svelte'
import SectionHeading from '$lib/components/SectionHeading.svelte'
import type { PageData } from './$types'

export let data: PageData
</script>

<svelte:head>
	<title>Blog | n06ar</title>
	<meta name="description" content="n06ar のブログ一覧" />
</svelte:head>

<section class="section-shell section-space space-y-8">
	<SectionHeading label="Blog" eyebrow="Latest" />
	{#if data.contents.length}
		<div class="grid gap-6 md:grid-cols-3">
			{#each data.contents as content (content.id)}
				<BlogCard blog={content} />
			{/each}
		</div>
	{:else}
		<p class="text-muted">まだ記事がありません。</p>
	{/if}
</section>
