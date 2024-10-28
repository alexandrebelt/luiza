<script setup lang="ts">
</script>

<template>
  <div id="estudio">
    <section id="estudio-intro" class="limit">
      <h5>
        Combinamos design <span>minimalista</span> e <span>moderno</span> com <i>significado</i>, histórias e
        <span>essências</span> para criar <i>projetos</i> <span>de marca</span>
        autênticos <i>e exclusivos</i>.
      </h5>
      <div id="destaque">
        <img src="/images/Be.png" alt="behance" />
        <img src="/images/flag.png" alt="behance" />
        <p>5 vezes <strong>destaque internacional</strong> em Design Gráfico</p>
      </div>
    </section>

    <section id="project-scroll">
      <div class="projects-wrap">
        <div class="projects">
          <div class="project">
            <div class="project-content">
              <div class="project-background"></div>
              <img class="project-image" src="images/Project-acturo.jpeg">
            </div>
          </div>
          <div class="project">
            <div class="project-content">
              <div class="project-background"></div>
              <img class="project-image" src="images/Project-acturo.jpeg">
            </div>
          </div>
          <div class="project">
            <div class="project-content">
              <div class="project-background"></div>
              <img class="project-image" src="images/Project-acturo.jpeg">
            </div>
          </div>
          <div class="project">
            <div class="project-content">
              <div class="project-background"></div>
              <img class="project-image" src="images/Project-acturo.jpeg">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="estudio-servicos">
      <div class="estudio-heading">
        <h6>
          Estúdio
        </h6>
        <h6 class="heading-uppercase">
          Serviços
        </h6>
      </div>

      <h5>Identidade <span>visual</span></h5>
      <h5><i>Branding</i></h5>
      <h5><span>Website</span></h5>
      <h5><span>Design</span> <i>À-La-Carte</i></h5>
      <h5>Ilustração</h5>
    </section>

    <FooterSection />

  </div>
</template>
<script>
import FooterSection from '@/components/FooterSection.vue';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    let tl = gsap.timeline()
    gsap.set("#estudio-intro h5", {opacity: 0, filter: "blur(30px)"})
    gsap.set("#destaque", {opacity: 0, x:100})
    setTimeout(() => {
      tl.to("#estudio-intro h5", {opacity: 1, duration: 1, delay:0.5, filter: "blur(0px)"})
      tl.to("#destaque", {opacity:1, x:0,duration: 1, ease: "power4.out"})

      let hoverProjs = document.querySelectorAll(".project-content")

      for (let i = 0; i < hoverProjs.length; i++) {
        let hoverProj = hoverProjs[i];
        let hover = hoverProj.querySelector('.project-image');

        hoverProj.addEventListener('mouseover', () => {
          gsap.to(hover, {
            maxWidth: "100%",
            duration: 0.5,
            ease: 'power4.out-in'
          })
        }
        )
        hoverProj.addEventListener('mouseleave', () => {
          gsap.to(hover, {
            maxWidth: "70%",
            duration: 0.5,
            ease: 'power4.out-in'
          })
        })
      }
    }, 150);

    setTimeout(() => {
      const projects = document.querySelector(".projects");


      function getScrollAmount() {
        let projectsWidth = projects.scrollWidth;
        return -(projectsWidth - window.innerWidth);
      }

      const tween = gsap.to(projects, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });


      ScrollTrigger.create({
        trigger: ".projects-wrap",
        start: "center center",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true
      })

      gsap.set('#estudio-servicos h5', {
        opacity: 0,
        filter: "blur(30px)"
      })
      gsap.to('#estudio-servicos h5', {
        opacity: 1,
        filter: "blur(0px)",
        stagger:0.33,
        scrollTrigger: {
          trigger:'#estudio-servicos',
          start: 'top, center',
          end: 'center center',
          scrub: 2
        }
      })
    }, 1000)
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

    h5 {
      max-width: 842px;
    }

    #destaque {
      margin-top: 40px;
      background-color: var(--cinza-escuro);
      border-radius: 20px;
      display: flex;
      flex-direction: row;
      padding: 20px 40px;
      width: fit-content;
      align-items: center;
      gap: 20px;

      p {
        font-size: 16px;
        font-weight: 500;

        strong {
          font-weight: 600;
        }
      }

      img {
        height: auto;
        object-fit: contain;

        &:nth-of-type(1) {
          max-width: 35px;
        }

        &:nth-of-type(2) {
          max-width: 21px;
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
          aspect-ratio: 2/2.75;
          width: 40vw;
          overflow: hidden;

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
              background-image: url('/public/images/Project-acturo.jpeg');
              background-position: 25% center;
              -webkit-filter: blur(20px);
              -moz-filter: blur(20px);
              -o-filter: blur(20px);
              -ms-filter: blur(20px);
              filter: blur(20px);
              width: 100%;
              height: 100%;
              z-index: -1;
              overflow: hidden;
              will-change: auto;
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
