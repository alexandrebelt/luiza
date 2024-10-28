<template>
  <div id="home">
    <section id="intro-banner">
      <div class="intro-banner-content">
        <h4>Design para <i>marcas</i> incríveis se
          conectarem com pessoas incríveis.</h4>
        <p>
          Somos um estúdio de design apaixonados pelo poder de transformar vidas e marcas através de soluções modernas,
          minimalistas e cheias de significado.
        </p>
      </div>
      <div class="intro-banner-content">
        <p>
          Identidade Visual + Direção de Arte + Web Design e Desenvolvimento
        </p>
      </div>
    </section>
    <section id="projects">
      <div class="project">
        <div class="blur">

        </div>
        <img src="/images/project1.jpeg">
        <div class="text-content">
          <h1>Project</h1>
          <h5 class="heading-uppercase"> identidade visual + branding</h5>
        </div>
      </div>
      <div class="project">
        <div class="blur">

        </div>
        <img src="/images/project1.jpeg">
        <div class="text-content">
          <h1>Project</h1>
          <h5 class="heading-uppercase"> identidade visual + branding</h5>
        </div>
      </div>
    </section>
    <section id="estudio-session" class="container">
      <div class="estudio-wrap">
        <div class="estudio-content">
          <h6>
            Estúdio
          </h6>
          <h6 class="heading-uppercase">
            The founder
          </h6>
        </div>

        <div class="estudio-content">
          <h4>
            Luiza <i>Bola</i>
          </h4>
          <p>
            Olá, eu sou a Luiza! Apaixonada por arte e comunicação, acredito no design não só como uma ferramenta
            essencial
            para as marcas, mas também como agente transformador, com potencial de contar histórias que conectam pessoas
            através das mais significativas mensagens. Com mais de nove anos de experiência no mercado, fundei o Luiza
            Bola
            Estúdio para dar vida ao meu sonho de, através do design minimalista, moderno e com propósito, ajudar cada
            vez
            mais marcas a expressarem visualmente sua história.
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

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  components: {
    FooterSection
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
          trigger:"#estudio-session",
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
          trigger:"#estudio-session",
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
      max-width: 1120px;
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
