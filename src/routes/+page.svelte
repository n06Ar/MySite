<svelte:head>
	<title>NaoNao</title>
	<meta name="description" content="n06ar のポートフォリオとブログがあるNaoNaoというWebサイトです" />
</svelte:head>

<div class="section-shell section-space space-y-10">
	<!-- 名前 -->
	<div class="space-y-2">
		<h1 class="display-name">NaoNao</h1>
		<p class="subtitle">Webエンジニア / Frontend-leaning Fullstack</p>
	</div>

	<!-- Bio -->
	<div class="card p-6 md:p-8 space-y-3">
		<p class="text-muted leading-relaxed">
			私は n06ar です 🙋
		</p>
		<p class="text-muted leading-relaxed">
			東京で働いているフロント寄りフルスタックエンジニアです。<br />
			仕事ではフロントエンドを中心に、バックエンドやインフラの設計・開発をしています！<br />
			試したことや悩んだこと、学んだことをこのサイトにまとめていきたいと思っています！
		</p>
	</div>

	<!-- 技術スタック -->
	<div class="space-y-4">
		<p class="section-label">技術スタック</p>
		<div class="grid gap-4 md:grid-cols-2">
			<div class="card p-5 space-y-2">
				<p class="stack-heading">フロントエンド</p>
				<ul class="stack-list">
					<li>Next.js / Nuxt / SvelteKit</li>
					<li>React / Vue / Svelte</li>
					<li>TypeScript / Tailwind CSS</li>
				</ul>
			</div>
			<div class="card p-5 space-y-2">
				<p class="stack-heading">バックエンド・インフラ</p>
				<ul class="stack-list">
					<li>Node.js (REST / GraphQL)</li>
					<li>PHP (Laravel, CakePHP) / Spring Boot</li>
					<li>AWS / GitHub Actions / Vercel</li>
				</ul>
			</div>
		</div>
	</div>

	<!-- リンク -->
	<div class="space-y-3">
		<p class="section-label">リンク</p>
		<div class="flex flex-wrap gap-3">
			<a
				href="https://github.com/n06Ar"
				class="link-btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
					<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
				</svg>
				GitHub
			</a>
			<a
				href="https://twitter.com/N06Ar"
				class="link-btn"
				target="_blank"
				rel="noopener noreferrer"
			>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4 fill-current" aria-hidden="true">
					<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.213 5.567zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
				</svg>
				X (Twitter)
			</a>
		</div>
	</div>
</div>

<style>
	.display-name {
		font-family: var(--font-display);
		font-size: clamp(2.5rem, 6vw, 4rem);
		font-weight: 700;
		color: var(--text-strong);
		line-height: 1.1;
	}

	.subtitle {
		font-size: 1rem;
		color: var(--text-label);
		font-weight: 500;
	}

	.section-label {
		font-size: 0.7rem;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		color: var(--brand);
	}

	.stack-heading {
		font-size: 0.8rem;
		font-weight: 700;
		color: var(--text-strong);
		margin-bottom: 4px;
	}

	.stack-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.stack-list li {
		font-size: 0.85rem;
		color: var(--text-muted);
	}

	.link-btn {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		padding: 8px 16px;
		border-radius: 9999px;
		border: 1px solid var(--divider);
		font-size: 0.85rem;
		font-weight: 500;
		color: var(--text-muted);
		background-color: var(--card);
		transition:
			border-color 0.15s ease,
			color 0.15s ease;
		text-decoration: none;
	}

	.link-btn:hover {
		border-color: var(--brand);
		color: var(--brand);
	}
</style>
