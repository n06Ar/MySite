<script lang="ts">
import { load } from 'cheerio'
import { Badge, Heading } from 'flowbite-svelte'
import { TagSolid } from 'flowbite-svelte-icons'
import highlight from 'highlight.js'
import { onDestroy } from 'svelte'
import { page } from '$app/stores'

type MicroCMSImage = { url: string }
type Blog = {
	id: string
	title: string
	content: string
	eyecatch?: MicroCMSImage
}

let loading = true
let errorMessage: string | null = null
let data: Blog | null = null

let article = ''
let description = 'Blog page'

let abortController: AbortController | null = null

async function loadDetail(pageId: string) {
	loading = true
	errorMessage = null
	data = null
	abortController?.abort()
	abortController = new AbortController()
	try {
		const res = await fetch(
			`/api/blog/page?pageId=${encodeURIComponent(pageId)}`,
			{ signal: abortController.signal },
		)
		if (!res.ok) {
			throw new Error(`Failed to load (status ${res.status})`)
		}

		data = (await res.json()) as Blog

		if (data.content) {
			const cheeArticle = load(data.content)
			cheeArticle('pre code').each((_, elm) => {
				const result = highlight.highlightAuto(cheeArticle(elm).text())
				cheeArticle(elm).html(result.value)
				cheeArticle(elm).addClass('hljs')
			})
			article = cheeArticle.html()

			const cheeDescription = load(data.content)
			description = cheeDescription('*').text().substring(0, 50)
		}
	} catch (e) {
		errorMessage = (e as Error).message
	} finally {
		loading = false
	}
}

const unsubscribe = page.subscribe($page => {
	const id = $page.url.searchParams.get('pageId')
	if (id) {
		loadDetail(id)
	} else {
		loading = false
		errorMessage = 'Missing pageId'
	}
})
onDestroy(() => unsubscribe())
</script>

<svelte:head>
	<title>{data?.title ?? 'Blog'} | NaoNao</title>
	<meta name="description" content={description} />
</svelte:head>

{#if loading}
	<section class="px-4 sm:px-auto">
		<div class="animate-pulse">
			<div class="h-8 bg-gray-200 dark:bg-gray-700 rounded w-2/3 mb-6"></div>
			<div class="h-64 bg-gray-200 dark:bg-gray-700 rounded"></div>
		</div>
	</section>

{:else if errorMessage}
	<p class="px-4 text-red-600">{errorMessage}</p>

{:else if data}
	<article class="prose dark:prose-invert max-w-none px-4 sm:px-auto">
		<Heading tag="h1" class="mb-4">{data.title}</Heading>

		{#if data.eyecatch}
			<img src={data.eyecatch.url} alt={data.title} class="rounded-lg mb-6" />
		{/if}

		<div class="content">
			{@html article}
		</div>

		<div class='flex justify-between flex-wrap'>
			{#if data.category}
				<Badge border class='ml-auto'>
					<TagSolid class='mr-1' />
					{data.category.name}
				</Badge>
			{/if}
		</div>

	</article>
{/if}

<style lang='scss'>
	@import 'highlight.js/styles/tokyo-night-dark.min.css';

	.content {
		font-size: 16px;

		:global(h1) {
			font-size: 2em;
			line-height: 2.5em;
			margin-top: .75em;
			margin-bottom: .5em;
			border-bottom-width: 1px;

			&::before {
				content: "#";
				margin-right: 0.25em;
				--tw-text-opacity: 1;
				color: rgb(74 89 137 / var(--tw-text-opacity));

				@media (prefers-color-scheme: dark) {
					--tw-text-opacity: 1;
					color: rgb(131 157 209 / var(--tw-text-opacity));
				}
			}
		}

		:global(h2) {
			font-size: 1.875em;
			line-height: 2.25em;
			margin-top: .75em;
			margin-bottom: .5em;

			&::before {
				content: "##";
				margin-right: .25em;
				--tw-text-opacity: 1;
				color: rgb(74 89 137 / var(--tw-text-opacity));

				@media (prefers-color-scheme: dark) {
					--tw-text-opacity: 1;
					color: rgb(131 157 209 / var(--tw-text-opacity));
				}
			}
		}

		:global(h3) {
			font-size: 1.5em;
			line-height: 2em;
			margin-top: .75em;
			margin-bottom: .5em;

			&::before {
				content: "###";
				margin-right: .25em;
				--tw-text-opacity: 1;
				color: rgb(74 89 137 / var(--tw-text-opacity));

				@media (prefers-color-scheme: dark) {
					--tw-text-opacity: 1;
					color: rgb(131 157 209 / var(--tw-text-opacity));
				}
			}
		}

		:global(h4) {
			font-size: 1.25em;
			line-height: 1.75em;
			margin-top: .75em;
			margin-bottom: .5em;

			&::before {
				content: "####";
				margin-right: .25em;
				--tw-text-opacity: 1;
				color: rgb(74 89 137 / var(--tw-text-opacity));

				@media (prefers-color-scheme: dark) {
					--tw-text-opacity: 1;
					color: rgb(131 157 209 / var(--tw-text-opacity));
				}
			}
		}

		:global(h5) {
			font-size: 1.125em;
			line-height: 1.75em;
			margin-top: .75em;
			margin-bottom: .5em;

			&::before {
				content: "#####";
				margin-right: .25em;
				--tw-text-opacity: 1;
				color: rgb(74 89 137 / var(--tw-text-opacity));

				@media (prefers-color-scheme: dark) {
					--tw-text-opacity: 1;
					color: rgb(131 157 209 / var(--tw-text-opacity));
				}
			}
		}

		:global(p) {
			margin: .5em auto 1em auto;
			line-height: 1.75em;
		}

		:global(a) {
			--tw-text-opacity: 1;
			color: rgb(106 127 193 / var(--tw-text-opacity));

			&:hover {
				text-decoration-line: underline;
			}

			@media (prefers-color-scheme: dark) {
				--tw-text-opacity: 1;
				color: rgb(131 157 209 / var(--tw-text-opacity));
			}
		}

		:global(blockquote) {
			padding: 1em 0 1em 1em;
			margin-top: .25em;
			border-left-width: 2px;
			--tw-border-opacity: 1;
			border-color: rgb(156 182 221 / var(--tw-border-opacity));
		}

		:global(code) {
			padding: .25em .5em;
			border-radius: .375em;
			--tw-text-opacity: 1;
			color: rgb(242 247 251 / var(--tw-text-opacity));
			--tw-bg-opacity: 1;
			background-color: rgb(38 44 64 / var(--tw-bg-opacity));
		}

		:global(pre) {
			width: 100%;
			margin-top: 1em;
			margin-bottom: 1em;
			border-width: 8px;
			--tw-border-opacity: 1;
			border-color: rgb(38 44 64 / var(--tw-border-opacity));
			border-radius: .375em;
			--tw-bg-opacity: 1;
			background-color: rgb(38 44 64 / var(--tw-bg-opacity));

			:global(code) {
				margin: .25em .75em;
				--tw-text-opacity: 1;
				color: rgb(242 247 251 / var(--tw-text-opacity));
				background-color: inherit;
			}
		}

		:global(ul) {
			padding-left: 1.25em;
			list-style-type: disc;
		}

		:global(li) {
			line-height: 1.75em;
		}

		:global(ol) {
			padding-left: 1.5em;
			list-style-type: decimal;
		}
	}
</style>
