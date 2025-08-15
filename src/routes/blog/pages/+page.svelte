<script lang="ts">
import { Button, Heading } from 'flowbite-svelte'
import { ArrowRightOutline, BookSolid } from 'flowbite-svelte-icons'
import { onDestroy } from 'svelte'
import { page } from '$app/stores'

type MicroCMSImage = { url: string }
type Blog = {
	id: string
	title: string
	content: string
	eyecatch?: MicroCMSImage
}
type BlogResponse = {
	totalCount: number
	offset: number
	limit: number
	contents: Blog[]
}

let loading = true
let errorMessage: string | null = null
let data: BlogResponse | null = null

let abortController: AbortController | null = null

async function loadList(currentPage: number) {
	loading = true
	errorMessage = null
	data = null
	abortController?.abort()
	abortController = new AbortController()
	try {
		const res = await fetch(`/api/blog/pages?page=${currentPage}`, {
			signal: abortController.signal,
		})
		if (!res.ok) throw new Error(`Failed to load (status ${res.status})`)
		data = (await res.json()) as BlogResponse
	} catch (e) {
		errorMessage = (e as Error).message
	} finally {
		loading = false
	}
}

const unsubscribe = page.subscribe($page => {
	const p = Number($page.url.searchParams.get('page') || '1')
	loadList(Number.isFinite(p) && p > 0 ? p : 1)
})
onDestroy(() => unsubscribe())
</script>

<svelte:head>
	<title>Blog | NaoNao</title>
	<meta name="description" content="NaoNao blog" />
</svelte:head>

<Heading tag="h2" class="mt-8 mb-12 px-4 sm:px-auto">
	<BookSolid class="inline-block" size="xl" />
	Blog
</Heading>

{#if loading}
	<!-- Loading placeholder -->
	<section class="px-4 sm:px-auto">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
			{#each Array(6) as _, i}
				<div class="animate-pulse bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md overflow-hidden" aria-busy="true" aria-live="polite" aria-label="Loading blog cards">
					<div class="bg-gray-200 dark:bg-gray-700 aspect-video"></div>
					<div class="p-4">
						<div class="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
						<div class="h-10 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
					</div>
				</div>
			{/each}
		</div>
	</section>
{:else if errorMessage}
	<p class="px-4 text-red-600">{errorMessage}</p>
{:else if data}
	<section class="flex flex-wrap gap-4 md:gap-12 px-4 sm:px-auto">
		{#each data.contents as content (content.id)}
			<a href="/blog/page?pageId={content.id}"
				class="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md w-full sm:w-1/4 md:w-1/4 max-w-sm flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700"
			>
				<img src="{content.eyecatch?.url ?? '/images/No_Image.png'}"
					 alt="{content.eyecatch ? content.title : 'No Image'}"
					 class="rounded-t-lg object-cover aspect-video" />
				<div class="h-full p-4 sm:p-6 flex flex-col justify-between">
					<Heading tag="h3" class="mb-4 text-xl">{content.title}</Heading>
					<Button class="w-fit mt-auto">
						Read more
						<ArrowRightOutline class="w-6 h-6 ms-2 text-white" />
					</Button>
				</div>
			</a>
		{/each}
	</section>
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
