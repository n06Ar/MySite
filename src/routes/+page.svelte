<script lang="ts">
</script>

<section class="home">
    <h2>
        <span data-uk-icon="icon: home; ratio: 1.5" aria-hidden="true"></span> Home
    </h2>
    <article class="home__content">
        <h3>ここはなんですか？</h3>
        <p>
            私、N06ARが、「そういえば個人サイトを作っていないな」とふと思い作ったサイトがここです。
        </p>
        <div>
            <a href="https://github.com/n06ar/mysite">
                <img
                    src="https://github-readme-stats.vercel.app/api/pin/?username=n06Ar&repo=MySite&show_owner=true"
                    alt="このサイトのリポジトリ"
                />
            </a>
        </div>
    </article>
    <article class="home__content">
        <h3>このサイトを作るのに使っているもの</h3>
        <p>
            このサイトを作るにあたり次のFrameworkやLibrary、Packageを使いました
        </p>
        <ul>
            <li><a href="https://svelte.dev/">Svelte</a></li>
            <li><a href="https://kit.svelte.jp/">Svelte Kit</a></li>
            <li><a href="https://vitejs.dev">Vite</a></li>
            <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
            <li><a href="https://sass-lang.com/">Sass</a></li>
            <li><a href="https://getuikit.com">UIkit</a></li>
        </ul>
    </article>
</section>

<style lang="scss">
    .home {
        width: 80%;
        max-width: 1440px;
        margin: auto;
    }

    .home__content {
        display: block;

        &:not(:first-child) {
            margin-top: 3rem;
        }
    }
</style>
