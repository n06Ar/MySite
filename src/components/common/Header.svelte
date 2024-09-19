<script>
	import {
		Heading,
		NavBrand,
		NavHamburger,
		NavLi,
		NavUl,
		Navbar
	} from 'flowbite-svelte'
	import {
		BookSolid,
		HomeOutline,
		WandMagicSparklesOutline
	} from 'flowbite-svelte-icons'
</script>

<header class='sticky top-0 left-0 right-0'>
	<Navbar color='primary' shadow='true'>
		<NavBrand href='/'>
			<Heading tag='h1' class='text-2xl'>NaoNao</Heading>
		</NavBrand>

		<NavHamburger />

		<NavUl>
			<NavLi href='/'>
				<HomeOutline class='inline-block' />
				Home
			</NavLi>
			<NavLi href='/playground'>
				<WandMagicSparklesOutline class='inline-block' />
				Playground
			</NavLi>
			<NavLi href='/blog/1'>
				<BookSolid class='inline-block' />
				Blog
			</NavLi>
		</NavUl>
	</Navbar>
</header>
