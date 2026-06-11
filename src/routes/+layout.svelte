<script lang="ts">
import '../app.css'
import type { Snippet } from 'svelte'
import SideNav from '$lib/components/layout/SideNav.svelte'
import type { LayoutData } from './$types'

let { children, data }: { children: Snippet; data: LayoutData } = $props()
</script>

<div class="layout">
	<SideNav articles={data.navArticles} />
	<main class="main-content">
		{@render children()}
	</main>
</div>

<style>
	.layout {
		display: flex;
		min-height: 100dvh;
		background-color: var(--bg);
		color: var(--text-strong);
		transition:
			background-color 0.2s ease,
			color 0.2s ease;
	}

	.main-content {
		flex: 1;
		min-width: 0;
		background-color: var(--bg);
		overflow-x: hidden;
	}

	@media (max-width: 767px) {
		.main-content {
			margin-left: 66px;
		}
	}
</style>
