<template>
  <SideMenu />
  <div class="loading-content" v-if="isLoading">
    <LoadingView />
  </div>

  <Transition name="fade" mode="out-in" v-else>
    <router-view />
  </Transition>

</template>

<script>
import LocomotiveScroll from 'locomotive-scroll';
import SideMenu from './components/SideMenu';
import { defineComponent } from 'vue'
import LoadingView from './components/loading/LoadingStart.vue'


export default defineComponent({
  data() {
    return {
      isLoading: true
    }
  },
  components: {
    SideMenu,
    LoadingView,
  },
  
  mounted() {
    // eslint-disable-next-line
    const locomotiveScroll = new LocomotiveScroll();

    window.onload = () => {
      setTimeout(() => {

        const loading = document.querySelector('.loading-content');
        loading.classList.add('slide-up')

      }, 200);
      setTimeout(() => {
        this.isLoading = false

      }, 200);
    }
  }

})
</script>
<style lang="scss">
@import url("https://use.typekit.net/wrn0djw.css");

* {
  margin: 0;
  padding: 0;
}

:root {
  --transition: .5s;
  --preto: #000;
  --branco: #FBF9F5;
  --rose: #EFE5DF;
  --marrom-claro: #A49688;
  --marrom-escuro: #7E756C;
  --cinza-escuro: #3D3D3D;

  //Font-sizes
  --h1: clamp(42px, 13vw, 152px);
  --h2: 128px;
  --h3: clamp(35px, 10vw, 96px);
  --h4: clamp(30px, 5.7vw, 64px);
  --h5: clamp(28px, 4vw, 48px);
  --h6: 20px;


  --ivy: "ivyjournal", sans-serif;
  --neue: "neue-haas-grotesk-display", sans-serif;
  --comm: "commuters-sans", sans-serif;
  --eb: "eb-garamond", serif;

  
}
html{
  ::-webkit-scrollbar {
  width: 5px; /* Largura da barra vertical */
  height: 12px; /* Altura da barra horizontal */
}

::-webkit-scrollbar-thumb {
  background-color: var(--branco); /* Cor do polegar */
  border-radius: 6px; /* Bordas arredondadas */
}

::-webkit-scrollbar-track {
  background-color: transparent;
  border-radius: 6px; /* Opcional: bordas arredondadas */
}
scrollbar-color: var(--branco) transparent !important; 
scrollbar-width: thin

}


* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
  scrollbar-color: var(--branco);
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--branco)
}

.loading-content {
  z-index: 9999;
  transition: var(--transition);
  width: 100vw;
  height: 100vh;
}

.slide-up {
  opacity: 0;
  transform: translatey(-150vw);
}

body {
  background: var(--preto);
}

section {
  height: 100vh;
}

.container {
  padding: 120px 0;

}

.container-maior {
  padding: 60px 0;
  display: flex;
  justify-content: center;
}

.limit {
  padding: 0 50px;
  max-width: 1300px;
  width: 100%;
}
.limit-content{
  padding: 0 20px !important;
}

.center-content {
  display: flex;
  justify-content: center;
}

h1,
h2,
h3,
h4,
h5 {
  font-family: var(--ivy);
  font-weight: 200;
  margin: 0;

  span {
    font-family: var(--neue)
  }
}

p {
  font-family: var(--neue);
  font-size: clamp(13px, 2.5vw, 17px);
  line-height: 1.5em;
  font-weight: 500;
}

a {
  text-decoration: none;
  color: var(--branco);
}

h1 {
  font-size: var(--h1);
  font-style: italic;
}

h2 {
  font-size: var(--h2);
  line-height: 1.1em;
}

h3 {
  font-size: var(--h3);
  line-height: 1.1em;
}

h4 {
  font-size: var(--h4);
  line-height: 1.1em;
}

h5 {
  font-size: var(--h5);
  line-height: 1.1em;
}

h6 {
  font-family: var(--eb);
  font-weight: 200;
  font-style: italic;
  font-size: var(--h6);
}


.heading-uppercase {
  font-size: clamp(12px, 4vw, 13px);
  text-transform: uppercase;
  font-family: var(--comm);
  font-weight: 600;
  letter-spacing: 0.1em;
  margin-top: 5px;
  font-style: initial;
}


.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}




</style>
