<script lang='ts'>
import { load } from 'cheerio'
import { Badge, Heading } from 'flowbite-svelte'
import { TagSolid } from 'flowbite-svelte-icons'
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
	description = cheeDescription('*').text().substring(0, 50)
}

export { article, description }
</script>

<svelte:head>
	<title>{data.title} | NaoNao Blog</title>
	<meta name='description' content='{description}' />
</svelte:head>

<article>
	{#if data.eyecatch}
		<img class='w-full max-h-96 object-cover' src={data.eyecatch?.url ?? "/images/No_Image.png"}
			 alt='{data.title}' />
	{/if}

	<div class='mt-8 mx-4 sm:mx-auto'>
		<Heading tag='h1' class='text-4xl mb-8'>{data.title}</Heading>

		<main class='content'>
			{@html article}
		</main>

		<div class='flex justify-between flex-wrap'>
			{#if data.category}
				<Badge border class='ml-auto'>
					<TagSolid class='mr-1' />
					{data.category.name}
				</Badge>
			{/if}
		</div>
	</div>

</article>

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
