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
<main class='main'>
	<slot />
</main>
<Footer />

<style>
	.main {
		@apply  bg-white dark:bg-gray-900 dark:text-primary-50;
	}
</style>
