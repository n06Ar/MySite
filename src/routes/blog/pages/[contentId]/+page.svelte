<script lang='ts'>
	import { Badge, Heading } from 'flowbite-svelte'
	import { TagSolid } from 'flowbite-svelte-icons'
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
		<img class='w-full' src={data.eyecatch?.url ?? "/images/No_Image.png"}
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
	@import '../../../../../node_modules/highlight.js/styles/tokyo-night-dark.min.css';

	.content {
		:global(h1) {
			@apply text-4xl my-4;

			&::before {
				content: "#";
				@apply text-primary-800 dark:text-primary-500 mr-1
			}
		}

		:global(h2) {
			@apply text-3xl my-3;

			&::before {
				content: "##";
				@apply text-primary-800 dark:text-primary-500 mr-1
			}
		}

		:global(h3) {
			@apply text-2xl my-2;

			&::before {
				content: "###";
				@apply text-primary-800 dark:text-primary-500 mr-1
			}
		}

		:global(h4) {
			@apply text-xl my-2;

			&::before {
				content: "####";
				@apply text-primary-800 dark:text-primary-500 mr-1
			}
		}

		:global(h5) {
			@apply text-lg my-2;

			&::before {
				content: "#####";
				@apply text-primary-800 dark:text-primary-500 mr-1
			}
		}

		:global(a) {
			@apply hover:underline text-primary-600 dark:text-primary-500;
		}

		:global(blockquote) {
			@apply p-4 pr-0 mt-1 mb-1 border-l-2 border-primary-400;
		}

		:global(pre) {
			@apply my-4 w-full border-8 border-primary-950 rounded-md bg-primary-950;

			:global(code) {
				@apply my-1 mx-3 text-primary-50;
			}
		}

		:global(ul) {
			@apply pl-5 list-disc
		}

		:global(ol) {
			@apply pl-6 list-decimal
		}
	}
</style>
