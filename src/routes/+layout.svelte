<script lang='ts'>
import '../app.css'
import Footer from '@components/common/Footer.svelte'
import Header from '@components/common/Header.svelte'
</script>

<Header />
<main class='bg-white dark:bg-gray-900 dark:text-primary-50'>
	<div class='container mx-auto mb-12 sm:mb-4'>
		<slot />
	</div>
</main>
<Footer />
