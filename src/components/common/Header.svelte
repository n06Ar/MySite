<script>
	import { Navbar, NavBrand, NavUl, NavLi, Heading } from 'flowbite-svelte'
	import { BookSolid, HomeOutline, ProfileCardOutline } from 'flowbite-svelte-icons'
</script>

<header class='sticky top-0 left-0 right-0'>
	<Navbar color='primary' shadow='true' class='bg-primary-600'>
		<NavBrand href='/'>
			<Heading tag='h1' class='text-2xl text-primary-50 '>NaoNao</Heading>
		</NavBrand>

		<NavUl>
			<NavLi href='/' activeClass='text-primary-800' nonActiveClass='text-primary-50 '>
				<HomeOutline class='inline-block' />
				Home
			</NavLi>
			<NavLi href='/profile' nonActiveClass='text-primary-50 '>
				<ProfileCardOutline class='inline-block' />
				Profile
			</NavLi>
			<NavLi href='https://n06ar.hatenablog.com' nonActiveClass='text-primary-50 '>
				<BookSolid class='inline-block' />
				Blog
			</NavLi>
		</NavUl>
	</Navbar>
</header>
