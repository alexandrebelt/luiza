<template>
    <nav>
        <div class="nav-buttons" :style="{mixBlendMode: $route.name === 'contact' ? 'unset' : 'difference'}">
            <div class="language" :style="{color: $route.name==='contact' ? 'var(--marrom-escuro) !important' : 'inherit'}">
                <a @click="changeLanguage('EN')" 
                :class="{ inactive: $i18n.locale && $i18n.locale === 'PT' }"
                :style="{color: $route.name==='contact' ? 'var(--marrom-escuro) !important' : 'inherit'}"
                >EN</a>
                <span>|</span>
                <a @click="changeLanguage('PT')" 
                :class="{ inactive: $i18n.locale !== 'PT' }"
                :style="{color: $route.name==='contact' ? 'var(--marrom-escuro) !important' : 'inherit'}"
                >PT</a>
            </div>
            <div class="btn-menu">

                <div class="btn-menu-wrap">
                    <span
                        :style="{ backgroundColor: $route.name === 'contact' ? 'var(--marrom-escuro) !important' : ' var(--branco)' }"></span>
                </div>
            </div>
        </div>
        <div class="side-menu">
            <div class="menu-content">
                <router-link to="/">
                    <h4 class="link-menu">{{ $t('menu.home') }}</h4>
                </router-link>
                <router-link to="/about">
                    <h4 class="link-menu">{{ $t('menu.studio') }}</h4>
                </router-link>
                <router-link :to="{ path: '/', hash: '#projects' }">
                    <h4 class="link-menu">{{ $t('menu.projects') }}</h4>
                </router-link>
                <router-link to="/contact">
                    <h4 class="link-menu">{{ $t('menu.contact') }}</h4>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
import $ from 'jquery'
import gsap from 'gsap';

export default {

    data() {
        return {
            hover: false,
            tween: null
        }
    },
    methods: {
        changeLanguage(locale) {
            if (this.$i18n.locale !== locale) {
                gsap.to('.langs', { duration: 1, filter: 'blur(40px)', ease: 'power4.in' })
                setTimeout(() => {
                    this.$i18n.locale = locale;
                    document.cookie = `locale=${locale}; path=/`
                    gsap.to('.langs', { duration: 1, filter: 'blur(0px)', ease: 'power4.out' })
                }, 1000)
            }
        },

        checkHover() {
            if (this.hover) {
                this.tween.restart()
            }
        },

        hoverOn() {
            if (document.querySelector('.menu-content').classList.contains('active-menu')) {
                this.hover = false
                return
            }
            this.hover = true
            this.tween.play()
            if (this.tween.progress() == 0) {
                this.tween.restart() //not sure why play() doesn't work when progress() == 0
            }
        },

        hoverOff() {
            this.hover = false
        }
    },
    mounted() {

        $(".btn-menu, .link-menu").click(() => {
            this.hover = false
            document.querySelector('.menu-content').classList.toggle('active-menu');
            document.querySelector('.btn-menu').classList.toggle('active-btn');

        });

        document.querySelector(".btn-menu").addEventListener("mouseenter", this.hoverOn);
        document.querySelector(".btn-menu").addEventListener("mouseleave", this.hoverOff);

        this.tween = gsap.to(".btn-menu span", {
            duration: 0.3,
            rotate: -15,
            repeat: 1,
            yoyo: true,
            ease: "sine.inOut",
            paused: true,
            onComplete: this.checkHover
        });
    },

}
</script>

<style lang="scss">
nav {
    padding: 30px;
    position: fixed;
    z-index: 100;
    display: contents;

    .nav-buttons {

        position: fixed;
        display: flex;
        max-width: 1260px;
        justify-content: space-between;
        width: 100%;
        left: 50%;
        top: 50px;
        z-index: 1010;
        mix-blend-mode: difference;
        transform: translatex(-50%);
        padding: 0 30px;
    }

    .language {
        font-family: var(--comm);
        font-weight: 600 !important;
        display: flex;
        gap: 10px;
        z-index: 100;
        top: 58px;
        left: 40px;
        mix-blend-mode: difference;
        span{
            font-size:13px;
        }

        a {
            font-size: 13px;
            cursor: pointer;
            color: var(--branco);
            font-family: var(--comm);

            &:hover {
                opacity: 1 !important;
                font-style: normal;
            }

        }

        @media(max-width:800px) {
            top: 30px !important;
            left: 20px !important;
        }

    }

    .inactive {
        opacity: 0.4;
        transition: .2s;
    }

    a {
        transition: var(--transition);
        color: var(--preto);
        font-family: var(--ivy);


        &:hover {
            font-style: italic;
        }


        &.router-link-exact-active {
            //color: #42b983;
        }
    }

    .btn-menu {
        top: 50px;
        right: 40px;
        cursor: pointer;
        z-index: 1010;
        transition: var(--transition);
        aspect-ratio: 1;
        display: flex;
        align-items: center;
        mix-blend-mode: difference;


        span {
            width: 36px;
            height: 9px;
            background-color: var(--branco);
            display: flex;

        }
    }

    .btn-menu.active-btn {
        transform: rotate(-30deg) !important;
        mix-blend-mode: normal;
    }

    .btn-menu.active-btn span {
        background-color: var(--marrom-claro) !important;
    }

    .side-menu {
        position: relative;
        z-index: 1000;


        .menu-content {
            opacity: 0;
            position: fixed;
            top: 0;
            right: 0;
            width: 100%;
            height: 100%;
            background-color: var(--rose);
            display: flex;
            flex-direction: column;
            text-align: center;
            justify-content: center;
            align-items: center;
            z-index: 10;
            transform: translatex(-150vw);
            transition: var(--transition);

            .link-menu {
                line-height: 1.5em;
            }
        }

        .active-menu {
            transform: translateX(0) !important;
            opacity: 1;
        }
    }

    @media(max-width:800px) {
        .btn-menu {
            top: 20px !important;
            right: 20px !important;
        }
    }
}

.on-footer{
    mix-blend-mode: unset !important;
    color:#A49688 !important;
    .btn-menu-wrap{
        span{
            background-color: var(--marrom-claro) !important;
        }
    }
    a{
        color: #A49688 !important;
        span{
            background-color: #A49688 !important;
            color: #A49688 !important;
        }
    }
}
</style>