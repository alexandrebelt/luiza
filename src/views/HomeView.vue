<template>
  <div id="home">
    <section id="intro-banner" class="langs">
      <div class="intro-banner-content limit-content">
        <div v-html="$t('home.section1.heading1')"></div>
        <p>{{ $t('home.section1.sub1') }}</p>
      </div>
      <div class="intro-banner-content limit-content">
        <p>
          {{ $t('home.section1.sub2') }}
        </p>
      </div>
    </section>

    <section id="projects">
      <div class="project" v-for="(proj, index) in projs" v-bind:key="index">
        <div class="blur">
        </div>
        <img :src="proj.image">
        <div class="text-content limit-content">
          <h1>{{ proj.title }}</h1>
          <h5 class="heading-uppercase"> {{ proj.type }}</h5>
        </div>
      </div>

    </section>
    <section id="estudio-session" class="container">
      <img src="images/imagemLB.jpg" class="estudio-lb" />
      <div class="estudio-wrap limit-content">
        <div class="estudio-content langs">
          <h6>
            {{ $t('home.section2.heading1') }}
          </h6>
          <h6 class="heading-uppercase">
            {{ $t('home.section2.sub1') }}
          </h6>
        </div>

        <div class="estudio-content langs">
          <h4>
            Luiza <i>Bola</i>
          </h4>
          <p>
            {{ $t('home.section2.text') }}
          </p>
        </div>
      </div>
    </section>

    <FooterSection />

  </div>
</template>

<script lang="ts">
import FooterSection from '@/components/FooterSection.vue';
import { defineComponent } from 'vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import initGsap from '../utils/gsap'

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  components: {
    FooterSection
  },
  data() {
    return {
      projs: []
    }
  },
  beforeMount() {
    axios.get('projects.json').then(res => {
      this.projs = res.data.home
    }).catch(error => {
      console.log(error)
    })
  },
  mounted() {
    initGsap()
  },

})

</script>

<style lang="scss">
#home {
  text-align: center;

  section {
    h6 {
      color: var(--preto) !important;
    }
  }

  #intro-banner {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .intro-banner-content {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;


      &:nth-of-type(1) {}

      &:nth-of-type(2) {
        position: absolute;
        bottom: 50px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);

        p {
          font-family: var(--eb) !important;
          font-weight: 200;
          font-style: italic;
        }
      }
    }

    p {
      max-width: 640px;
    }

    h4 {
      margin-bottom: 30px;
      max-width: 1100px;
    }
  }

  #projects {
    position: relative;
    height: auto;
    z-index: 10;

    .blur {
      background: url('/public/images/Grain-Texture-op-02.png');
      background-blend-mode: multiply;
      -webkit-backdrop-filter: blur(40px);
      backdrop-filter: blur(40px);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 3;

    }

    .project {
      display: flex;
      justify-content: center;
      height: 100vh;
      align-items: end;
      overflow: hidden;


      .text-content {
        margin-bottom: 20vh;
        position: relative;
        z-index: 10;
        mix-blend-mode: difference;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        object-fit: cover;
        -moz-object-fit: cover;
        z-index: -1;
      }
    }

  }

  #estudio-session {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: auto !important;
    position: relative;
    overflow: hidden;



    .estudio-lb {
      z-index: -3;
      position: absolute;
      object-fit: cover;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 220px !important;
    }

    h4 {
      margin-bottom: 30px;
    }

    h6 {
      color: var(--branco) !important;
    }

    p {
      max-width: 700px;
      margin: 0 auto;
      font-size: clamp(13px, 2.5vw, 17px);
    }

    .estudio-content {
      &:nth-of-type(1) {
        padding-bottom: 25vh;
      }
    }
  }
}
</style>
