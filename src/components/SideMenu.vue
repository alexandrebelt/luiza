<template>
    <nav>
        <div class="side-menu">
            <div class="btn-menu">
                <span></span>
            </div>
            <div class="menu-content">
                <router-link to="/">
                    <h4 class="link-menu">Home</h4>
                </router-link>
                <router-link to="/about">
                    <h4 class="link-menu">Estúdio</h4>
                </router-link>
                <router-link to="/about">
                    <h4 class="link-menu">Projetos</h4>
                </router-link>
                <router-link to="/contact">
                    <h4 class="link-menu">Contato</h4>
                </router-link>
            </div>
        </div>
    </nav>
</template>
<script>
import $ from 'jquery'
export default {
    mounted() {

        $(".btn-menu, .link-menu").click(() => {
            document.querySelector('.menu-content').classList.toggle('active-menu')
            document.querySelector('.btn-menu').classList.toggle('active-btn')
        });
    }
}
</script>

<style lang="scss">
nav {
    padding: 30px;
    position: fixed;
    z-index: 100;

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

        .btn-menu {
            position: fixed;
            top: 40px;
            right: 40px;
            width: 36px;
            height: 9px;
            background-color: var(--branco);
            cursor: pointer;
            z-index: 100;
            transition: var(--transition);

        }

        .btn-menu.active-btn {
            transform: rotate(-30deg) !important;
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
}
</style>