<template>
  <div id="home">
    <section id="intro-banner" class="langs">
      <div class="intro-banner-content limit">
        <div v-html="$t('home.section1.heading1')"></div>
      </div>
      <div class="intro-banner-content limit-content">
        <p>
          {{ $t('home.section1.sub2') }}
        </p>
      </div>
    </section>

    <section id="projects">
      <div class="project" v-for="(proj, index) in tradsProjs" v-bind:key="index">
        <div class="blur">
        </div>
        <router-link :to="{ name: 'project', params: { projectTitle: proj.title } }">
          <img :src="proj.cover" class="links">
          <div class="text-content limit-content links">
            <h1>{{ proj.title }}</h1>
          </div>
        </router-link>
      </div>

    </section>

    <section id="see-more-works">
      <router-link to="/portfolio">
        <div class="langs links" :class="{ 'pt-see-more-works': $i18n.locale === 'PT' }"
          v-html="$t('home.section3.heading')"></div>
      </router-link>
    </section>

    <FooterSection />

  </div>
</template>

<script lang="js">
import FooterSection from '@/components/FooterSection.vue';
import { defineComponent } from 'vue'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import axios from 'axios';
import initGsap from '../utils/gsap'
import data from '@/assets/singleProjs.json'

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  mounted() {
    initGsap()
  },
  components: {
    FooterSection
  },
  data() {
    return {
      projs: data.projs.slice(0, 3)
    }
  },
  computed: {
    tradsProjs() {
      return this.projs.map(proj => ({
        ...proj,
      }));
    }
  },
  beforeMount() {

    axios.get('@/assets/singleProjs.json').then(res => {
      this.projs = res.data.projs
      console.log(this.projs)
    }).catch(error => {
      console.log(error)
    })
  },


})

</script>

<style lang="scss">
#home {
  text-align: center;

  .limit {
    max-width: 1290px;
  }

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
      background: url('/public/images/grain-horizontal.png');
      background-blend-mode: multiply;
      -webkit-backdrop-filter: blur(40px);
      backdrop-filter: blur(50px);
      background-size: cover;
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

  #see-more-works {
    display: flex;
    align-items: center;

    a {
      max-width: clamp(300px, 70vw, 1000px);
      margin: 0 auto;
    }
  }

  @media (max-width:650px) {

    .intro-banner-content,
    #see-more-works {
      h2 {
        font-size: 72px;
      }

      p {
        max-width: 280px !important;
        font-size: 17px;
      }
    }
  }
}

.pt-see-more-works {
  @media (max-width:650px) {
    h2 {
      font-size: 42px !important;
    }
  }
}
</style>
