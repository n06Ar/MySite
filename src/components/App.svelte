<script lang="ts">
    import Header from './common/Header.svelte'
    import Footer from './common/Footer.svelte'
    import routes from '../utility/Router.ts'
    import Router from 'svelte-spa-router'
</script>

<style lang="scss">
    .main {
        flex: 1;
    }
</style>

<Header />
<main class="main">
    <Router routes="{routes}" />
</main>
<Footer />
