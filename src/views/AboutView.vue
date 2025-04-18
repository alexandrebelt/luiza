<script setup lang="ts">
</script>

<template>
  <div id="estudio">
    <section id="estudio-intro" class="limit limit-content">
      <div class="estudio-intro-content">
        <div class="langs" v-html="$t('about.section1.heading1')"></div>
        <a class="destaque-link links" href="https://www.behance.net/luizabola" target="_blank">
          <div id="destaque">
            <img src="/images/Be.webp" alt="behance" />
            <img src="/images/flag.webp" alt="behance" />
            <div class="langs" v-html="$t('about.section1.sub1')"></div>
          </div>
        </a>
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

    <section id="estudio-session" class="container">
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
<script>
import FooterSection from '@/components/FooterSection.vue';
import initGsap from '@/utils/gsap';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  data() {
    return {

    }
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
      display: flex;
      flex-direction: column;

      .destaque-link {
        position: absolute;
        bottom: 50px;
        width: 100%;
        left: 50%;
        transform: translateX(-50%);
        @media (max-width: 650px) {
          position: relative;
          bottom: unset;
      }
      }
    }

    h4 {
      max-width: 1100px;
      text-align: center;
      margin: 0 auto;
    }

    #destaque {
      margin: 0 auto;
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
          max-width: 340px;
          flex-wrap: wrap;
          text-align: center;
          justify-content: center;
          border-radius: 0;
          margin-top: 40px;
          row-gap: 10px;

          .langs {
            flex-basis: 100%;

            p {
              margin: 0 auto;
              padding: 0 20px;
            }
          }

          p {
            border-bottom: none;
            font-size: 13px !important;
          }

          img {
            width: 50% !important;
          }
        }
      }
    }

    @media (max-width:600px) {
      .estudio-intro-content {
        
        h4 {
          max-width: 300px !important;
          font-size: 40px;
        }
      }
    }
  }



  #estudio-servicos {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    background-color: var(--branco);
    color: var(--preto);

    .estudio-heading {
      margin-bottom: 50px;
    }

    h5 {
      line-height: 1.5em;
      span{
          font-weight: 200 !important;
        }
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
  text-align: center;




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
</style>
