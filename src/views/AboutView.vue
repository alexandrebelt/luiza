<script setup lang="ts">
</script>

<template>
  <div id="estudio">
    <section id="estudio-intro" class="limit limit-content">
      <div class="estudio-intro-content">
        <div class="langs" v-html="$t('about.section1.heading1')"></div>
        <a href="https://www.behance.net/luizabola" target="_blank">
          <div id="destaque">
            <img src="/images/Be.png" alt="behance" />
            <img src="/images/flag.png" alt="behance" />
            <div class="langs" v-html="$t('about.section1.sub1')"></div>
          </div>
        </a>
      </div>
    </section>

    <section id="project-scroll">
      <div class="projects-wrap">
        <div class="projects">
          <div class="project" v-for="(proj, index) in projs" :key="index">
            <div class="project-content">
              <div class="project-background" :style="{ backgroundImage: `url('${proj}')` }">
              </div>
              <img class="project-image" :src="proj">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="estudio-servicos">
      <div class="langs estudio-heading">
        <h6>
          {{ $t('about.section2.heading1') }}
        </h6>
        <h6 class="heading-uppercase">
          {{ $t('about.section2.sub1') }}
        </h6>
      </div>

      <h5 class="langs" v-html="$t('about.section2.item1')"></h5>
      <h5 class="langs" v-html="$t('about.section2.item2')"></h5>
      <h5 class="langs" v-html="$t('about.section2.item3')"></h5>
      <h5 class="langs" v-html="$t('about.section2.item4')"></h5>
      <h5 class="langs" v-html="$t('about.section2.item5')"></h5>
    </section>

    <FooterSection />

  </div>
</template>
<script>
import FooterSection from '@/components/FooterSection.vue';
import initGsap from '@/utils/gsap';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {
      projs: []
    }
  },
  created() {
    const requireImages = require.context(
      '../assets/studio',
      false,
      /\.(png|jpe?g|svg)$/
    );

    this.projs = requireImages.keys().map(requireImages).sort().reverse();
  },
  mounted() {
    initGsap();
  },
  components: {
    FooterSection
  }
}
</script>
<style lang="scss">
#estudio {
  #estudio-intro {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .estudio-intro-content {
      margin-left: 80px;
    }

    h5 {
      max-width: 842px;
    }

    #destaque {
      margin-top: 20px;
      //background-color: var(--cinza-escuro);
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      padding: 20px 0px;
      width: fit-content;
      align-items: center;
      gap: 15px;
      transition: opacity .3s;

      &:hover {
        opacity: .5 !important;
      }

      p {
        font-size: clamp(11px, 1.5vw, 15px) !important;
        font-weight: 500;
        border-bottom: 1px solid var(--branco);

        strong {
          font-weight: 600;
        }
      }

      img {
        height: auto;
        object-fit: contain;

        &:nth-of-type(1) {
          max-width: 25px;
        }

        &:nth-of-type(2) {
          max-width: 14px;
        }
      }
    }

    @media(max-width:800px) {
      .estudio-intro-content {
        margin-left: 0px;
        display: flex;
        flex-direction: column;
      }

      h5 {
        max-width: 842px;
        text-align: center;
      }

      a {
        margin: 0 auto;

        #destaque {
          align-self: center;
          max-width: 250px;
          flex-wrap: wrap;
          text-align: center;
          justify-content: center;
          border: 1px solid var(--branco);
          border-radius: 0;
          margin-top: 40px;

          .langs {
            flex-basis: 100%;

            p {
              margin: 0 auto;
            }
          }

          p {
            border-bottom: none;
            font-size: 15px !important;
            max-width: 200px;
          }

          img {
            width: 50% !important;
          }
        }
      }
    }
  }

  #project-scroll {
    height: auto !important;

    .projects-wrap {
      .projects {
        display: flex;
        flex-wrap: nowrap;
        overflow-x: hidden;
        width: fit-content;
        gap: 40px;

        .project {
          position: relative;
          aspect-ratio: 2/2.65;
          width: 25vw;
          overflow: hidden;

          @media(max-width: 800px) {
            width: 100vw;
            height: 100vh;
          }

          .project-content {
            display: flex;
            aspect-ratio: 2/2.75;
            overflow: hidden;

            .project-background {
              position: absolute;
              left: 0;
              right: 0;
              z-index: 1;
              display: block;
              background-position: 25% center;
              width: 100%;
              height: 100%;
              z-index: -1;
              overflow: hidden;

            }
            .project-grain-bg{
              max-width: 100%;
              min-height: 100%;
              object-fit: cover;
            }



            img {
              position: absolute;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -50%);
              aspect-ratio: 2/3;
              height: auto;
              object-fit: cover;
              object-position: center;
              max-width: 70%;
              width: fit-content;
            }
          }
        }
      }
    }
  }

  #estudio-servicos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    .estudio-heading {
      margin-bottom: 50px;
    }

    h5 {
      line-height: 1.5em;
    }
  }
}
</style>
