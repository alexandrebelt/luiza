<template>
  <div id="home">
    <section id="intro-banner" class="langs">
      <div class="intro-banner-content">
        <div v-html="$t('home.section1.heading1')"></div>
        <p>{{ $t('home.section1.sub1') }}</p>
      </div>
      <div class="intro-banner-content">
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
        <div class="text-content">
          <h1>{{ proj.title }}</h1>
          <h5 class="heading-uppercase"> {{ proj.type }}</h5>
        </div>
      </div>

    </section>
    <section id="estudio-session" class="container">
      <div class="estudio-wrap">
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
    const tl = gsap.timeline();
    gsap.set('.intro-banner-content h4, .intro-banner-content p', {
      opacity: 0,
      filter: "blur(30px)"
    })
    setTimeout(() => {

      let projs = document.querySelectorAll('.project');


      gsap.set('.estudio-content h6, .estudio-content p', {
        opacity: 0,
      })
      gsap.set('.estudio-content h4', {
        opacity: 0,
        scale: 2
      })
      gsap.set('.intro-banner-content', {
        filter: 'blur(0)',
      })


      tl.to('.intro-banner-content h4', {
        opacity: 1,
        duration: 1,
        filter: "blur(0px)"
      })
      tl.to('.intro-banner-content p', {
        opacity: 1,
        duration: 0.5,
        ease: 'power4.in-out',
        filter: "blur(0px)"
      })


      gsap.to('.intro-banner-content', {
        filter: 'blur(100px)',
        scrollTrigger: {
          trigger: '#intro-banner',
          start: 'center 20%',
          end: 'bottom top',
          scrub: 2
        }
      })


      projs.forEach((proj) => {
        gsap.set('.text-content', {
          opacity: 0,
          filter: "blur(30px)"
        })
        gsap.set('.blur', {
          x: 0
        })

        gsap.to(proj.querySelector('.text-content'), {
          opacity: 1,
          filter: "blur(0px)",
          scrollTrigger: {
            trigger: proj,
            start: 'top top',
            end: 'center top',
            scrub: 1,
          }
        })


        gsap.to(proj.querySelector('.blur'), {
          x: "-100vw",
          scrollTrigger: {
            trigger: proj,
            start: 'center center',
            end: 'bottom top',
            scrub: 1,
            pin: true,
            pinSpacing: true
          }
        })
      });


      tl.to('.estudio-content h4', {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#estudio-session",
          start: "center center",
          end: "bottom top",
          scrub: 1,
          pin: true
        }
      })
      tl.to('.estudio-content h6, .estudio-content p', {
        opacity: 1,
        scale: 1,
        scrollTrigger: {
          trigger: "#estudio-session",
          start: "center center",
          end: "bottom top",
          scrub: 1
        }
      })


    }, 400);


  }
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
        bottom: 30px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);

        p {
          font-family: var(--ivy) !important;
          font-weight: 200;
          font-style: italic;
        }
      }
    }

    p {
      max-width: 757px;
    }

    h4 {
      margin-bottom: 30px;
      max-width: 1100px;
    }
  }

  #projects {
    position: relative;
    height: auto;

    .blur {
      -webkit-backdrop-filter: blur(40px);
      backdrop-filter: blur(40px);
      width: 100%;
      height: 100%;
      position: absolute;
      z-index: 0;
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
        z-index: 1;
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

    h4 {
      margin-bottom: 30px;
    }

    h6 {
      color: var(--branco) !important;
    }

    p {
      max-width: 784px;
      margin: 0 auto;
      font-size: clamp(13px, 2.5vw, 20px);
    }

    .estudio-content {
      &:nth-of-type(1) {
        padding-bottom: 25vh;
      }
    }
  }
}
</style>
