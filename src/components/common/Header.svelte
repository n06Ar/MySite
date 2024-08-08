<script>
	import { Navbar, NavBrand, NavUl, NavLi, Heading } from 'flowbite-svelte'
	import { BookSolid, HomeOutline, ProfileCardOutline } from 'flowbite-svelte-icons'
</script>

<header class='sticky top-0 left-0 right-0'>
	<Navbar color='blue' shadow='true'>
		<NavBrand href='/' class='menu-brand'>
			<Heading tag='h1' class='text-2xl text-primary-900'>NaoNao</Heading>
		</NavBrand>

		<NavUl>
			<NavLi href='/' class='menu-nav__list'>
				<HomeOutline class='inline-block' />
				Home
			</NavLi>
			<NavLi href='/profile' class='menu-nav__list'>
				<ProfileCardOutline class='inline-block' />
				Profile
			</NavLi>
			<NavLi href='https://n06ar.hatenablog.com' class='menu-nav__list'>
				<BookSolid class='inline-block' />
				Blog
			</NavLi>
		</NavUl>
	</Navbar>
</header>

<style>
	.menu-brand {
		@apply text-2xl text-primary-900 dark:text-primary-50
	}

	.menu-nav__list {
		@apply text-primary-950 dark:text-primary-50
	}
</style>
