<script lang="ts">
import BlogCard from '$lib/components/BlogCard.svelte'
import HeroSection from '$lib/components/HeroSection.svelte'
import SectionHeading from '$lib/components/SectionHeading.svelte'
import WorkCard from '$lib/components/WorkCard.svelte'
import type { PageData } from './$types'

export let data: PageData
</script>

<svelte:head>
	<title>NaoNao</title>
	<meta name="description" content="n06ar のポートフォリオとブログがあるNaoNaoというWebサイトです" />
</svelte:head>

<HeroSection
	name="NaoNao"
	headline="Frontend-leaning Fullstack Engineer"
	lead="n06ar"
	descriptions={[
		"東京を拠点に、フロントエンドを中心としたWebアプリケーション開発をしています。",
		"試したこと、悩んだこと、学んだことをこのサイトにまとめています。"
	]}
	ctas={[
		{ label: 'Worksを見る', href: '#works', variant: 'primary' },
		{ label: 'Blogを読む', href: '/blog/1', variant: 'ghost' },
		{ label: 'About', href: '#about', variant: 'ghost' },
	]}
/>

<section id="works" class="section-shell section-space space-y-8">
	<SectionHeading label="Featured Works" eyebrow="Works" />
	<div
		class="rounded-xl border border-dashed border-gray-300 bg-gray-50
         p-8 text-center
         dark:border-gray-700 dark:bg-gray-900"
	>
		<p class="mb-2 text-lg font-medium">
			Coming Soon ☕️
		</p>
		<p class="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
			まだ何も置いていません...<br />
			そのうち、個人開発や取り組んだことをここにまとめていく予定です！
		</p>
	</div>
</section>

<section class="section-shell section-space space-y-8 bg-transparent">
	<SectionHeading
		label="Latest Posts"
		eyebrow="Blog"
		actionHref="/blog/1"
		actionLabel="すべて見る"
	/>
	{#if data.latestPosts?.contents?.length}
		<div class="grid gap-6 md:grid-cols-3">
			{#each data.latestPosts.contents as post (post.id)}
				<BlogCard blog={post} />
			{/each}
		</div>
	{:else}
		<p class="text-muted">まだ投稿がありません</p>
	{/if}
</section>

<section id="about" class="section-shell section-space space-y-6">
	<SectionHeading label="About me" eyebrow="Profile" />
	<div class="card p-6 md:p-8 space-y-4">
		<p class="text-muted leading-relaxed">
			東京で働いているフロント寄りフルスタックエンジニアです！仕事では、フロントエンドを中心に開発をしていますが、バックエンドやインフラの設計や開発もします！
		</p>
		<div class="grid gap-4 md:grid-cols-2">
			<div>
				<p class="text-xs font-medium text-brand-500 uppercase tracking-widest mb-2">Tech Stack</p>
				<ul class="text-sm text-muted space-y-1 list-disc pl-5">
					<li>Next.js / Nuxt / SvelteKit / React / Vue / Svelte / TypeScript / Tailwind CSS</li>
					<li>Node.js (REST / GraphQL) / PHP (Laravel, CakePHP) / Spring Boot</li>
					<li>AWS / GitHub Actions / GitHub Pages / Vercel / Heroku</li>
				</ul>
			</div>
			<div>
				<p class="text-xs font-medium text-brand-500 uppercase tracking-widest mb-2">Links</p>
				<ul class="text-sm text-muted space-y-1 list-disc pl-5">
					<li><a class="underline hover:text-brand-600 dark:hover:text-brand-200" href="https://github.com/n06Ar">GitHub</a></li>
					<li><a class="underline hover:text-brand-600 dark:hover:text-brand-200" href="https://twitter.com/N06Ar">X (Twitter)</a></li>
					<li><a class="underline hover:text-brand-600 dark:hover:text-brand-200" href="/blog/1">Blog</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>
