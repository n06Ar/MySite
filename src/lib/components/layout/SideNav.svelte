<script lang="ts">
import { page } from '$app/stores'
import ThemeToggle from '$lib/components/ThemeToggle.svelte'
import type { Blog } from '$lib/microCMS'

let { articles = [] }: { articles: Blog[] } = $props()

let isOpen = $state(false)

const currentPath = $derived($page.url.pathname)

const isSelected = (href: string) => {
	if (href === '/') return currentPath === '/'
	return currentPath.startsWith(href)
}
</script>

<!-- PC: always open (260px), SP: closed (77px) / open (165px) -->
<nav
	class="side-nav"
	class:open={isOpen}
	aria-label="サイドナビゲーション"
>
	<!-- 猫アイコン (ホームリンク) -->
	<a href="/" class="logo-link" aria-label="ホームへ戻る">
		<img src="/cats.jpeg" alt="NaoNao home" class="logo-img" />
	</a>

	<!-- ナビアイテム -->
	<div class="nav-items">
		<!-- Home -->
		<a href="/" class="nav-item" class:selected={isSelected('/')} aria-current={isSelected('/') ? 'page' : undefined}>
			<span class="outer-circle">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="home-icon" aria-hidden="true">
					<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7A1 1 0 003 11h1v6a1 1 0 001 1h4v-4h2v4h4a1 1 0 001-1v-6h1a1 1 0 00.707-1.707l-7-7z"/>
				</svg>
				<span class="sr-only">Home</span>
			</span>
			<span class="nav-label">Home</span>
		</a>

		<!-- ブログ記事一覧 -->
		{#each articles as article (article.id)}
			{@const href = `/blog/pages/${article.id}`}
			<a
				{href}
				class="nav-item"
				class:selected={isSelected(href)}
				aria-current={isSelected(href) ? 'page' : undefined}
				title={article.title}
			>
				<span class="outer-circle">
					<span class="inner-circle"></span>
					<span class="sr-only">{article.title}</span>
				</span>
				<span class="nav-label">{article.title}</span>
			</a>
		{/each}
	</div>

	<!-- SP 開閉ボタン -->
	<button
		class="toggle-btn"
		onclick={() => (isOpen = !isOpen)}
		aria-label={isOpen ? 'サイドバーを閉じる' : 'サイドバーを開く'}
		aria-expanded={isOpen}
	>
		{isOpen ? '←' : '→'}
	</button>

	<!-- テーマトグル -->
	<div class="theme-area">
		<ThemeToggle />
	</div>
</nav>

<style>
	.side-nav {
		position: sticky;
		top: 0;
		height: 100dvh;
		width: 260px;
		flex-shrink: 0;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 24px 16px;
		gap: 0;
		background-color: var(--sidebar);
		border-right: 1px solid var(--sidebar-border);
		overflow-y: auto;
		overflow-x: hidden;
		transition:
			width 0.25s ease,
			background-color 0.2s ease;
		z-index: 10;
	}

	.logo-link {
		display: block;
		margin-bottom: 20px;
		flex-shrink: 0;
	}

	.logo-img {
		width: 48px;
		height: 48px;
		border-radius: 9999px;
		object-fit: cover;
		display: block;
	}

	.nav-items {
		flex: 1;
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 2px;
		overflow-y: auto;
		overflow-x: hidden;
	}

	/* ---- nav item ---- */
	.nav-item {
		display: flex;
		align-items: center;
		gap: 10px;
		padding: 3px 0;
		color: var(--text-muted);
		text-decoration: none;
		min-width: 0;
		transition: color 0.15s ease;
	}

	.nav-item:hover {
		color: var(--text-strong);
	}

	/* outer circle */
	.outer-circle {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
		border-radius: 9999px;
		border: 2px solid var(--divider);
		display: flex;
		align-items: center;
		justify-content: center;
		transition: border-color 0.15s ease;
		position: relative;
	}

	/* ダーク: 未選択の外円を白系に */
	:global(.dark) .outer-circle {
		border-color: rgba(255, 255, 255, 0.22);
	}

	/* 繋ぎ線（XスタイルのリプライUI） */
	.nav-item + .nav-item .outer-circle::before {
		content: '';
		position: absolute;
		top: -8px;
		left: 50%;
		transform: translateX(-50%);
		width: 2px;
		height: 8px;
		background-color: var(--divider);
	}

	:global(.dark) .nav-item + .nav-item .outer-circle::before {
		background-color: rgba(255, 255, 255, 0.15);
	}

	/* ライト: hover / 選択時 */
	.nav-item:hover .outer-circle,
	.nav-item.selected .outer-circle {
		border-color: var(--brand);
	}

	/* ダーク: 選択時の外円をゴールドに */
	:global(.dark) .nav-item.selected .outer-circle {
		border-color: var(--gold);
	}

	/* inner circle */
	.inner-circle {
		width: 10px;
		height: 10px;
		border-radius: 9999px;
		background-color: var(--divider);
		transition: background-color 0.15s ease;
	}

	:global(.dark) .inner-circle {
		background-color: rgba(255, 255, 255, 0.2);
	}

	.nav-item.selected .inner-circle {
		background-color: var(--brand);
	}

	:global(.dark) .nav-item.selected .inner-circle {
		background-color: var(--gold);
	}

	/* home icon */
	.home-icon {
		width: 13px;
		height: 13px;
		fill: var(--divider);
		transition: fill 0.15s ease;
		flex-shrink: 0;
	}

	:global(.dark) .home-icon {
		fill: rgba(255, 255, 255, 0.3);
	}

	.nav-item:hover .home-icon {
		fill: var(--brand);
	}

	.nav-item.selected .home-icon {
		fill: var(--brand);
	}

	:global(.dark) .nav-item.selected .home-icon {
		fill: var(--gold);
	}

	/* label */
	.nav-label {
		font-size: 13px;
		font-family: var(--font-body);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		max-width: 170px;
		transition: opacity 0.2s ease, max-width 0.25s ease;
	}

	/* テーマエリア */
	.theme-area {
		margin-top: 16px;
		flex-shrink: 0;
		width: 100%;
	}

	/* SP 開閉ボタン（PC では非表示） */
	.toggle-btn {
		display: none;
	}

	/* ===== SP（<768px）===== */
	@media (max-width: 767px) {
		.side-nav {
			width: 66px;
			padding: 20px 10px;
			align-items: center;
		}

		.side-nav.open {
			width: 165px;
			align-items: flex-start;
		}

		.logo-img {
			width: 38px;
			height: 38px;
		}

		.nav-label {
			opacity: 0;
			max-width: 0;
			pointer-events: none;
		}

		.side-nav.open .nav-label {
			opacity: 1;
			max-width: 100px;
			pointer-events: auto;
		}

		.nav-item {
			gap: 6px;
			justify-content: center;
		}

		.side-nav.open .nav-item {
			justify-content: flex-start;
		}

		.toggle-btn {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 28px;
			height: 28px;
			border-radius: 9999px;
			border: 1px solid var(--divider);
			background: transparent;
			color: var(--text-muted);
			cursor: pointer;
			margin-top: 12px;
			flex-shrink: 0;
			font-size: 11px;
			transition: border-color 0.15s ease;
		}

		.toggle-btn:hover {
			border-color: var(--brand);
			color: var(--brand);
		}
	}

	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		white-space: nowrap;
		border-width: 0;
	}
</style>
