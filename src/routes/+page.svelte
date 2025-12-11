<script lang="ts">
	import BlogCard from '$lib/components/BlogCard.svelte'
	import HeroSection from '$lib/components/HeroSection.svelte'
	import SectionHeading from '$lib/components/SectionHeading.svelte'
	import WorkCard from '$lib/components/WorkCard.svelte'
	import type { PageData } from './$types'

	export let data: PageData

	type WorkLink = { label: string; href: string }
	type WorkItem = {
		title: string
		description: string
		tags: string[]
		status: 'wip' | 'released'
		links: WorkLink[]
	}

	const works: WorkItem[] = [
		{
			title: 'リニューアル中',
			description: 'SvelteKit + Tailwind でUIとUXを再設計中。公開準備ができ次第リンクを追加予定。',
			tags: ['SvelteKit', 'Tailwind CSS', 'Design System'],
			status: 'wip',
			links: [] as { label: string; href: string }[],
		},
		{
			title: 'API Playgrounds',
			description: 'バックエンド実験用の小さな playground を整備。GraphQL と REST の比較検証を実施中。',
			tags: ['Node.js', 'GraphQL', 'REST'],
			status: 'wip',
			links: [],
		},
		{
			title: 'UI Component Kit',
			description: 'ポートフォリオ共通の UI コンポーネントを整理し、アクセシビリティを強化予定。',
			tags: ['Accessibility', 'Storybook', 'Testing'],
			status: 'wip',
			links: [],
		},
	]
</script>

<svelte:head>
	<title>n06ar | Portfolio</title>
	<meta name="description" content="フルスタックエンジニア n06ar のポートフォリオとブログ。" />
</svelte:head>

<HeroSection
	name="のぶひと / NaoNao"
	headline="Webエンジニア / Frontend-leaning Fullstack"
	lead="のぶひとです。SvelteKit が好きなフロントエンドエンジニアです。"
	description="フロントエンドを中心に、Webアプリケーションの設計・実装・改善をしています。個人開発や業務で得た知見、つまづきの記録をこのサイトにまとめています。"
	tags={[
		'SvelteKit / TypeScript',
		'フロントエンド寄りフルスタック',
		'パフォーマンス改善',
		'DX 改善',
	]}
	ctas={[
		{ label: 'Worksを見る', href: '#works', variant: 'primary' },
		{ label: 'Blogを読む', href: '/blog/1', variant: 'ghost' },
		{ label: 'About', href: '#about', variant: 'ghost' },
	]}
/>

<section id="works" class="section-shell section-space space-y-8">
	<SectionHeading label="Featured Works" eyebrow="Works" />
	<div class="grid gap-6 md:grid-cols-2">
		{#each works as work (work.title)}
			<WorkCard {...work} />
		{/each}
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
		<p class="text-muted">まだ投稿がありません。</p>
	{/if}
</section>

<section id="about" class="section-shell section-space space-y-6">
	<SectionHeading label="About me" eyebrow="Profile" />
	<div class="card p-6 md:p-8 space-y-4">
		<p class="text-muted leading-relaxed">
			東京拠点のフロントエンド寄りフルスタックエンジニア。Web アプリの設計・開発からクラウド運用まで幅広く担当しています。
			React / Svelte / Node.js / PHP を中心に、UI/UX とパフォーマンスの両立を意識した開発が得意です。
		</p>
		<div class="grid gap-4 md:grid-cols-2">
			<div>
				<p class="text-xs font-semibold text-brand-500 uppercase tracking-wide mb-2">最近触っている技術</p>
				<ul class="text-sm text-muted space-y-1">
					<li>・SvelteKit, Vite, Tailwind CSS</li>
					<li>・Node.js (REST / GraphQL)</li>
					<li>・AWS / Cloudflare</li>
				</ul>
			</div>
			<div>
				<p class="text-xs font-semibold text-brand-500 uppercase tracking-wide mb-2">リンク</p>
				<ul class="text-sm text-muted space-y-1">
					<li><a class="hover:text-brand-600 dark:hover:text-brand-200" href="https://github.com/n06Ar">GitHub</a></li>
					<li><a class="hover:text-brand-600 dark:hover:text-brand-200" href="https://twitter.com/N06Ar">X (Twitter)</a></li>
					<li><a class="hover:text-brand-600 dark:hover:text-brand-200" href="/blog/1">Blog</a></li>
				</ul>
			</div>
		</div>
	</div>
</section>
