<script lang="ts">
    import Header from '@components/common/Header.svelte'
    import Footer from '@components/common/Footer.svelte'
</script>

<Header />
<main class="main">
    <slot />
</main>
<Footer />

