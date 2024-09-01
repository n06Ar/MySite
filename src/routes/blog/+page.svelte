<script lang='ts'>
	import { Heading, Button } from 'flowbite-svelte'
	import { BookSolid, ArrowRightOutline } from 'flowbite-svelte-icons'
	import type { PageData } from './$types'

	export let data: PageData
</script>

<svelte:head>
	<title>Blog | NaoNao</title>
	<meta name='description' content='NaoNao blog' />
</svelte:head>

<Heading tag='h2' class='mb-12 px-4 sm:px-auto'>
	<BookSolid class='inline-block' size='xl' />
	Blog
</Heading>

<section class='flex flex-wrap gap-4 md:gap-12 px-4 sm:px-auto'>
	{#each data.contents as content}
		<a href='/blog/{content.id}'
		   class='bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-lg border border-gray-200 dark:border-gray-700 divide-gray-200 dark:divide-gray-700 shadow-md w-full sm:w-1/4 md:w-1/4 max-w-sm flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700'
		>
			<img src='{content.eyecatch?.url ?? "/images/No_Image.png"}'
				 alt='{content.eyecatch ? content.title : "/images/No_Image.png"}'
				 class='object-cover aspect-video'>
			<div class='h-full p-4 sm:p-6 flex flex-col justify-between'>
				<Heading tag='h3' class='mb-4 text-xl'>{content.title}</Heading>
				<Button class='w-fit mt-auto'>
					Read more
					<ArrowRightOutline class='w-6 h-6 ms-2 text-white' />
				</Button>
			</div>
		</a>
	{/each}
</section>

