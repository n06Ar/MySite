<script lang="ts">

</script>

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

<section class="home">
    <h2>
        <span data-uk-icon="icon: home; ratio: 1.5" aria-hidden="true"></span> Home
    </h2>
    <artcle class="home__content">
        <h3>ここはなんですか？</h3>
        <p>
            私、N06ARが、「そういえば個人サイトを作っていないな」とふと思い作ったサイトがここです。<br
            /> 残念ながら、今はコンテンツが何もないですが、私が過去に作っていたプログラムや書いた記事をここにまとめる予定です。
        </p>
        <div>
            <a href="https://github.com/n06ar/mysite">
                <img
                    src="https://github-link-card.s3.ap-northeast-1.amazonaws.com/n06ar/mysite.png"
                    width="460"
                    alt="このサイトのリポジトリ"
                />
            </a>
        </div>
    </artcle>
    <artcle class="home__content">
        <h3>このサイトを作るのに使っているもの</h3>
        <p>
            このサイトを作るにあたり次のFrameworkやLibrary、Packageを使いました
        </p>
        <ul>
            <li><a href="https://svelte.dev/">Svelte</a></li>
            <li><a href="https://parceljs.org/">PARCEL</a></li>
            <li><a href="https://www.typescriptlang.org/">TypeScript</a></li>
            <li><a href="https://sass-lang.com/">Sass</a></li>
            <li><a href="https://getuikit.com">UIkit</a></li>
        </ul>
    </artcle>
</section>
