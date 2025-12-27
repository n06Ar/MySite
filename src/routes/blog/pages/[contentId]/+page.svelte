<script lang="ts">
import { load } from 'cheerio'
import highlight from 'highlight.js'
import type { PageData } from './$types'

export let data: PageData

let article = ''
let description = ''

if (data.content) {
	const cheeArticle = load(data.content)
	cheeArticle('pre code').each((_, elm) => {
		const result = highlight.highlightAuto(cheeArticle(elm).text())
		cheeArticle(elm).html(result.value)
		cheeArticle(elm).addClass('hljs')
	})
	article = cheeArticle.html()

	const cheeDescription = load(data.content)
	const fullText = cheeDescription('*').text()
	description = fullText.length > 120 ? fullText.slice(0, 120) + '…' : fullText
}

const formatDate = (value: string) =>
	new Date(value).toLocaleDateString('ja-JP', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	})

export { article, description }
</script>

<svelte:head>
	<title>{data.title} | n06ar Blog</title>
	<meta name="description" content={description} />
</svelte:head>

<article class="section-shell section-space prose-content">
	{#if data.eyecatch}
		<img
			class="w-full max-h-96 object-cover mb-8"
			src={data.eyecatch?.url ?? '/images/No_Image.png'}
			alt={data.title}
		/>
	{/if}

	<div class="space-y-4 mb-8">
		<p class="text-sm font-semibold text-brand-600 dark:text-brand-200">{formatDate(data.publishedAt)}</p>
		<h1 class="text-3xl md:text-4xl font-black leading-tight">{data.title}</h1>
		{#if data.category}
			<span class="badge w-fit">{data.category.name}</span>
		{/if}
	</div>

	<div class="card p-6 md:p-8 text-base leading-relaxed space-y-6">
		<main class="content prose-content">
			{@html article}
		</main>
	</div>
</article>

<style lang="scss">
	.content {
		font-size: 16px;

		:global(h1),
		:global(h2),
		:global(h3),
		:global(h4),
		:global(h5) {
			font-weight: 800;
			color: var(--text-strong);
			scroll-margin-top: 80px;
		}

		:global(h1) {
			font-size: 2em;
			line-height: 1.2;
			margin: 0.75em 0 0.5em;
		}

		:global(h2) {
			font-size: 1.6em;
			line-height: 1.3;
			margin: 0.75em 0 0.5em;
		}

		:global(h3) {
			font-size: 1.35em;
			line-height: 1.4;
			margin: 0.75em 0 0.5em;
		}

		:global(p) {
			margin: 0.5em 0 1em;
			line-height: 1.8;
			color: var(--text-muted);
		}

		:global(a) {
			color: var(--brand);
			text-decoration: underline;
			text-decoration-thickness: 2px;
			text-underline-offset: 3px;
		}

		:global(img) {
			margin: 1.5em 0;
		}

		:global(ul),
		:global(ol) {
			padding-left: 1.25em;
			color: var(--text-muted);
		}

		:global(li) {
			line-height: 1.7;
		}
	}
</style>
