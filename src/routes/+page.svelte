<script lang='ts'>
import { A, Heading, Li, List, P } from 'flowbite-svelte'
import { BookSolid, GithubSolid, XSolid } from 'flowbite-svelte-icons'

const _SKILL_EXPERIENCES = {
	languages: [
		'Java',
		'PHP',
		'Objective-C',
		'Swift',
		'KotLin',
		'JavaScript',
		'HTML',
		'CSS',
	],
	frameworks: [
		'Spring',
		'Ktor',
		'CakePHP',
		'Laravel',
		'React',
		'Next.js',
		'Vue.js',
		'Nuxt.js',
		'Svelte',
		'SvelteKit',
		'Node.js',
		'Express.js',
		'bun',
	],
}

const _PACKAGES = {
	Svelte: 'https://svelte.dev/',
	'Svelte Kit': 'https://kit.svelte.dev/',
	Vite: 'https://vitejs.dev',
	TypeScript: 'https://www.typescriptlang.org/',
	Sass: 'https://sass-lang.com/',
	tailwindcss: 'https://tailwindcss.com',
	Flowbite: 'https://flowbite.com',
	'Flowbite Svelte': 'https://flowbite-svelte.com/',
}
</script>

<svelte:head>
	<title>NaoNao</title>
	<meta name="description" content="N06's My Site." />
</svelte:head>

<div class='m-8 sm:m-auto sm:mt-8 flex flex-wrap'>
	<section class='w-full md:w-1/4 pb-8 md:pb-0'>
		<img
			class='w-24 ml-auto mr-auto rounded-full'
			src='https://avatars0.githubusercontent.com/u/56122838?s=460&u=223fe136c3c00e8150fe1967439ae3e7b5ca87d5&v=4'
			alt="N06AR's profile icon"
		/>
	</section>

	<div class='md:w-3/4 sm:w-full'>
		<section class='mb-12'>
			<Heading tag='h2' class='text-3xl'>
				Hello!👋 My name is <A href='#Accounts'>N06AR</A>.
			</Heading>
			<P>I am a software engineer working in Japan. I work for a company and do front-end and back-end
				development.</P>
			<P>This web site will contain programs I developed and blog.</P>
		</section>

		<section class='mb-12'>
			<Heading tag='h3' class='text-2xl'>Academic Backgrounds</Heading>
			<List List='disc'>
				<Li>Takushoku University, Engineering Department of Information Engineering</Li>
				<Li>Takushoku University Graduate School, Graduate School of Engineering, Department of Information Design Engineering</Li>
			</List>
		</section>

		<section class='mb-12 flex flex-wrap'>
			<Heading tag='h3' class='w-full text-2xl'>Development Skills</Heading>
			<div class='w-1/2'>
				<Heading tag='h4' class='text-xl'>Programming & Markup Languages</Heading>
				<List>
					{#each _SKILL_EXPERIENCES.languages as language}
						<Li>{language}</Li>
					{/each}
				</List>
			</div>

			<div class='w-1/2'>
				<Heading tag='h4' class='text-xl'>Frameworks</Heading>
				<List>
					{#each _SKILL_EXPERIENCES.frameworks as framework}
						<Li>{framework}</Li>
					{/each}
				</List>
			</div>
		</section>

		<section class='mb-12'>
			<Heading tag='h3' id='Accounts'>Accounts</Heading>
			<List>
				<Li>
					<A href='https://twitter.com/N06Ar'>
						<XSolid class='inLine-block' />
						@N06AR
					</A>
				</Li>
				<Li>
					<A href='https://github.com/n06Ar'>
						<GithubSolid class='inLine-block' />
						@N06AR
					</A>
				</Li>
				<Li>
					<A href='https://n06ar.hatenablog.com/'>
						<BookSolid class='inLine-block' />
						@N06AR
					</A>
				</Li>
			</List>

		</section>

		<section class='mb-12'>
			<Heading tag='h2'>Package List</Heading>
			<P>I used the following packages to create this site</P>
			<List>
				{#each Object.entries(_PACKAGES) as [name, url]}
					<Li>
						<A href='{url}'>{name}</A>
					</Li>
				{/each}
			</List>
		</section>
	</div>
</div>
