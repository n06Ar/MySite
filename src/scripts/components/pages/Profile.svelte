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
        display: hidden;
        margin-top: 5rem;
        flex-basis: 100%;
    }

    .profile__icon {
        width: 60%;
        height: 50%;
        border-radius: 50%;
    }

    .profile-account__link {
        color: #666;

        &:link {
            color: #666;
        }
    }

    .profile-account__icon.-twitter {
        color: rgb(29, 161, 242);
    }
</style>

<section class="profile">
    <h2>Profile</h2>

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
                <dt>Programming Language</dt>
                <dd>
                    <ul>
                        <li>Java</li>
                        <li>PHP</li>
                        <li>Objective-C</li>
                        <li>Swift</li>
                        <li>Kotlin</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Framework</dt>
                <dd>
                    <ul>
                        <li>Spring</li>
                        <li>CakePHP</li>
                        <li>Laravel</li>
                        <li>Vue.js</li>
                        <li>React</li>
                        <li>Svelte</li>
                        <li>Scss</li>
                    </ul>
                </dd>
            </dl>
            <dl>
                <dt>Account</dt>
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
                                ></span> @N06AR</a>
                        </li>
                        <li>
                            <a class="profile-account__link" href=""><span
                                    data-uk-icon="github"
                                ></span> @N06AR</a>
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
