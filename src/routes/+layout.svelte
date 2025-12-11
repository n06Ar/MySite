<script lang="ts">
	import '../app.css'
	import SiteFooter from '$lib/components/layout/SiteFooter.svelte'
	import SiteHeader from '$lib/components/layout/SiteHeader.svelte'
</script>

<div class="min-h-screen flex flex-col bg-[color:var(--bg)] text-[var(--text-strong)] transition-colors">
	<SiteHeader />
	<main class="flex-1">
		<slot />
	</main>
	<SiteFooter />
</div>
