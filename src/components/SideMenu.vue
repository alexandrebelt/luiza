<template>
    <nav>
        <div class="side-menu">
            <div class="btn-menu">
                <span></span>
            </div>
            <div class="menu-content">
                <router-link to="/">
                    <h4 class="link-menu">{{$t('menu.home')}}</h4>
                </router-link>
                <router-link to="/about">
                    <h4 class="link-menu">{{$t('menu.studio')}}</h4>
                </router-link>
                <router-link :to="{ path: '/', hash: '#projects' }">
                    <h4 class="link-menu">{{$t('menu.projects')}}</h4>
                </router-link>
                <router-link to="/contact">
                    <h4 class="link-menu">{{$t('menu.contact')}}</h4>
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
            console.log(this.tween.progress())
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
    }
}
</script>

<style lang="scss">
nav {
    padding: 30px;
    position: fixed;
    z-index: 100;
    display: contents;

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

    .side-menu {
        position: relative;
        z-index: 1000;
        .btn-menu {
            position: fixed;
            top: 40px;
            right: 40px;
            cursor: pointer;
            z-index: 100;
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
            background-color: var(--marrom-claro);
        }

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
    @media(max-width:800px){
        .btn-menu{
            top: 20px !important;
            right: 20px !important;
        }
    }
}
</style>