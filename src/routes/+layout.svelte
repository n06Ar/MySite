<script lang='ts'>
	import '../app.css'
	import Header from '@components/common/Header.svelte'
	import Footer from '@components/common/Footer.svelte'
</script>

<svelte:head>
	<title>NaoNao</title>
	<meta name="description" content="N06's My Site." />
</svelte:head>

<Header />
<main class='bg-white dark:bg-gray-900 dark:text-primary-50'>
	<div class='container mx-auto mb-12 sm:mb-4'>
		<slot />
	</div>
</main>
<Footer />
