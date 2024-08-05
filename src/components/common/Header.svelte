<header
	data-uk-sticky='sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky'
>
	<nav class='uk-navbar-container uk-margin' data-uk-navbar>
		<div class='header'>
			<div class='uk-navbar-left'>
				<h1 class='header__title uk-logo'>
					<a href='/' class='header-title__text'> NaoNao </a>
				</h1>
			</div>

			<div class='uk-navbar-right'>
				<ul class='header__nav uk-navbar-nav'>
					<li>
						<a href='/' class='header-nav__link'>
							<span uk-icon='home' aria-hidden='true'></span>
							<span class='header-nav__letter-gap'></span> Home
						</a>
					</li>
					<li>
						<a href='/profile' class='header-nav__link'>
							<span uk-icon='user' aria-hidden='true'></span>
							<span class='header-nav__letter-gap'></span> Profile
						</a>
					</li>
					<li>
						<a href='/science-room' class='header-nav__link'>
							<span uk-icon='user' aria-hidden='true'></span>
							<span class='header-nav__letter-gap'></span> Science Room
						</a>
					</li>
					<li>
						<a
							href='https://n06ar.hatenablog.com'
							class='header-nav__link'
						>
							<span uk-icon='bookmark' aria-hidden='true'></span>
							<span class='header-nav__letter-gap'></span> Blog
							<span class='header-nav__letter-gap'></span>
							<span uk-icon='icon: push;' aria-hidden='true'
							></span>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</nav>
</header>

<style lang='scss'>
	.header {
		display: flex;
		width: 80%;
		max-width: 1440px;
		margin: auto;
	}

	.header__title {
		margin: auto 0;
	}

	.header-title__text {
		font-size: 2rem;
		font-weight: bold;
		color: #333333;
		text-decoration: none;

		&:link {
			color: #333333;
		}
	}

	.header-nav__link {
		font-size: 1rem;
		text-decoration: none;
	}

	.header-nav__letter-gap {
		margin-right: 0.5rem;
	}
</style>
