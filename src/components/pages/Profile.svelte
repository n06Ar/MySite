<script lang="ts">
    const getAge = (year, month, day) => {
        const birthday = new Date(year, month - 1, day)
        const today = new Date()

        const thisYearBirthday = new Date(
            today.getFullYear(),
            birthday.getMonth(),
            birthday.getDate()
        )

        const age = today.getFullYear() - birthday.getFullYear()

        //今年の誕生日を迎えていなければage-1を返す
        return today < thisYearBirthday ? age - 1 : age
    }
</script>

<style lang="scss">
    .profile {
        width: 80%;
        max-width: 1440px;
        margin: auto;
    }

    .profile__body {
        margin-top: 5rem;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .profile-body__content {
        flex-basis: 40%;
    }

    .profile-body__content.-icon {
        text-align: center;
    }

    .profile-body__content.-text {
    }

    .profile-body__content.-history {
        display: none;
        margin-top: 5rem;
        flex-basis: 100%;
    }

    .profile__icon {
        width: 50%;
        height: auto;
        border-radius: 50%;
    }

    .profile-content__list.-two-rows {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .profile-content-list__item {
        flex-basis: 50%;
    }

    .profile-account__link {
        color: #666;

        &:link {
            color: #666;
        }
    }

    .profile-account__icon.-twitter {
        color: #1da1f2;
    }
</style>

<section class="profile">
    <h2>
        <span data-uk-icon="icon: user; ratio: 1.5" aria-hidden="true"></span> Profile
    </h2>

    <section class="profile__body">
        <div class="profile-body__content -icon">
            <img
                class="profile__icon"
                src="https://avatars0.githubusercontent.com/u/56122838?s=460&u=223fe136c3c00e8150fe1967439ae3e7b5ca87d5&v=4"
                alt="Nobuhito Arai's icon"
            />
        </div>
        <div class="profile-body__content -text">
            <dl>
                <dt>Name</dt>
                <dd>Nobuhito Arai</dd>
            </dl>
            <dl>
                <dt>Age</dt>
                <dd>{getAge(1991, 4, 12)} years old</dd>
            </dl>
            <dl>
                <dt>Academic Background</dt>
                <dd>
                    <ul>
                        <li>浦和実業学園高等学校 普通科</li>
                        <li>拓殖大学 工学部 情報工学科</li>
                        <li>拓殖大学大学院 工学研究科 情報デザイン工学専攻</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Programming Languages</dt>
                <dd>
                    <ul class="profile-content__list -two-rows">
                        <li class="profile-content-list__item">Java</li>
                        <li class="profile-content-list__item">PHP</li>
                        <li class="profile-content-list__item">Objective-C</li>
                        <li class="profile-content-list__item">Swift</li>
                        <li class="profile-content-list__item">Kotlin</li>
                        <li class="profile-content-list__item">JavaScript</li>
                        <li class="profile-content-list__item">HTML</li>
                        <li class="profile-content-list__item">CSS</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Frameworks</dt>
                <dd>
                    <ul class="profile-content__list -two-rows">
                        <li class="profile-content-list__item">Spring</li>
                        <li class="profile-content-list__item">CakePHP</li>
                        <li class="profile-content-list__item">Laravel</li>
                        <li class="profile-content-list__item">Vue.js</li>
                        <li class="profile-content-list__item">Nuxt.js</li>
                        <li class="profile-content-list__item">React</li>
                        <li class="profile-content-list__item">Next.js</li>
                        <li class="profile-content-list__item">Svelte</li>
                        <li class="profile-content-list__item">Scss</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Accounts</dt>
                <dd>
                    <ul>
                        <li>
                            <a
                                class="profile-account__link"
                                href="https://twitter.com/N06Ar"
                            >
                                <span
                                    class="profile-account__icon -twitter"
                                    data-uk-icon="twitter"
                                    aria-label="Twitter"
                                ></span> @N06AR</a>
                        </li>
                        <li>
                            <a
                                class="profile-account__link"
                                href="https://github.com/n06Ar"
                            ><span
                                    data-uk-icon="github"
                                    aria-label="GitHub"
                                ></span> @N06AR</a>
                        </li>
                        <li>
                            <a
                                class="profile-account__link"
                                href="https://qiita.com/N06AR"
                            ><span
                                    data-uk-icon="file-text"
                                    aria-label="Qiita"
                                ></span> @N06AR</a>
                        </li>
                        <li>
                            <a
                                class="profile-account__link"
                                href="https://n06ar.hatenablog.com/"
                            >
                                <span
                                    data-uk-icon="bookmark"
                                    aria-label="Hatena Blog"
                                ></span> @N06AR
                            </a>
                        </li>
                    </ul>
                </dd>
            </dl>
        </div>
        <section class="profile-body__content -history">
            <h3 class="profile-content__title">Working History</h3>
        </section>
    </section>
</section>
