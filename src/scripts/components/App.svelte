<script lang="ts">
    import Header from './common/Header.svelte'
    import Footer from './common/Footer.svelte'
    import routes from '../Router.ts'
    import Router, {
        link,
        push,
        pop,
        replace,
        location,
        querystring,
    } from 'svelte-spa-router'
</script>

<style>

</style>

<Header />
<main>
    <Router {routes} />
</main>
<Footer />
