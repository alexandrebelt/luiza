<template>
  <SideMenu />


  <div class="ball">
    <div class="cross">+</div>
  </div>


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
import LoadingView from './components/loading/LoadingStart.vue';
import gsap from 'gsap';
import { TweenMax } from 'gsap';

gsap.registerPlugin(TweenMax);


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


    const ball = document.querySelector('.ball');


    let mouseX = 0;
    let mouseY = 0;
    let ballX = 0;
    let ballY = 0;
    let speed = .1;

    // Update ball position
    function animate() {

      let links = document.querySelectorAll('.links'); // Seleciona todos os links
      for (let i = 0; i < links.length; i++) {
        let link = links[i];
        link.addEventListener('mouseover', () => {
          ball.classList.add('scale-up');
          // Remover o ponto extra aqui
        });

        link.addEventListener('mouseout', () => {
          ball.classList.remove('scale-up');
        });

        link.addEventListener('click', () => {
          ball.classList.remove('scale-up');
        })
      }
      //Determine distance between ball and mouse
      let distX = mouseX - ballX;
      let distY = mouseY - ballY;

      // Find position of ball and some distance * speed
      ballX = ballX + (distX * speed);
      ballY = ballY + (distY * speed);

      ball.style.left = ballX + "px";
      ball.style.top = ballY + "px";



      requestAnimationFrame(animate);
    }
    animate();

    // Move ball with cursor
    window.addEventListener("mousemove", function (event) {
      mouseX = event.clientX;
      mouseY = event.clientY;
    });



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
  --h2: clamp(42px, 10vw, 128px);
  --h3: clamp(35px, 10vw, 96px);
  --h4: clamp(30px, 5.7vw, 64px);
  --h5: clamp(28px, 4vw, 48px);
  --h6: 20px;


  --ivy: "ivyjournal", sans-serif;
  --neue: "neue-haas-grotesk-display", sans-serif;
  --comm: "commuters-sans", sans-serif;
  --eb: "eb-garamond", serif;


}

html {
  ::-webkit-scrollbar {
    width: 5px;
    /* Largura da barra vertical */
    height: 12px;
    /* Altura da barra horizontal */
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, .3);
    /* Cor do polegar */
    border-radius: 6px;
    /* Bordas arredondadas */
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 6px;
    /* Opcional: bordas arredondadas */
  }

  scrollbar-color: rgba(255, 255, 255, .3);
  scrollbar-width: thin
}


.ball {
  background: #fff;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  transform: translate(-100%, -100%);
  pointer-events: none;
  mix-blend-mode: difference;
  z-index: 99999;
  scale: .5;
  font-size: 0;
  transition: background-color .3s, scale .3s, transform .3s;

  .cross {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}




* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  overflow-x: hidden;
  scrollbar-color: rgba(255, 255, 255, .3);


}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
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
  margin: 0 auto;

  @media(max-width:700px) {
    padding: 0 30px;
  }
}

.limit-content {
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
    font-family: var(--neue);
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
  line-height: 1em;
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

.scale-up {
  scale: 1 !important;
  background-color: var(--marrom-claro);
  mix-blend-mode: normal;
  font-size: 15px;
  transform: translate(-50%, -50%);

  .cross {
    color: var(--branco)
  }
}

.link {}


@media only screen and (hover: none) and (pointer: coarse) {
  .ball {
    display: none;
  }

  .blur-port {
    display: none !important;
  }
}
</style>
