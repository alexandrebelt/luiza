<template>
    <section id="cta" class="center-content">
        <div>

        </div>
        <div id="cta-block1" class="limit">
            <router-link class="links" to="/contact">
                <h2 class="langs" v-html="$t('footer.heading')">

                </h2>
                <!--  <h6 class="heading-uppercase langs">
                    {{ $t('footer.sub1') }}
                </h6>
                <span></span> -->
            </router-link>
        </div>
        <div id="footer">
            <div id="social" class="footer-col">
                <a href="https://www.instagram.com/luizabola.co/" target="_blank">
                    <h6>Instagram</h6>
                </a>
                <a href="https://www.behance.net/luizabola" target="_blank">
                    <h6>Behance</h6>
                </a>
                <a href="https://www.linkedin.com/in/luiza-bola-a34288139/" target="_blank">
                    <h6>LinkedIn</h6>
                </a>
            </div>
            <div id="credits" class="footer-col">
                <h6>© 2025 Luiza Bola Design</h6>
            </div>
        </div>
    </section>
</template>

<script>
import router from '@/router';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default {



    mounted() {


        setTimeout(() => {

            gsap.set('#cta-block1, #footer', {
                opacity: 0,
                filter: "blur(30px)"
            })

            gsap.set('.nav-buttons', { opacity: 1 })
            gsap.to('.nav-buttons', {
                keyframes: {
                    "0%": {
                        opacity: 1,
                    },
                    "40%": {
                        opacity: 0,
                        onUpdate: function () {
                            const progress = this.progress();  // Obtendo o progresso da animação

                            // Verificando o progresso e adicionando/removendo a classe
                            if (progress >= 0.5 && router.currentRoute.value.name !== 'contact') {
                                document.querySelector(".nav-buttons").classList.add("on-footer");
                            } else {
                                document.querySelector(".nav-buttons").classList.remove("on-footer");
                            }
                        }
                    },
                    '60%': {
                        opacity: 0,
                    },
                    "100%": {
                        opacity: 1,
                    }
                },

                scrollTrigger: {
                    trigger: "#cta",
                    start: "center bottom",
                    end: "center 60%",
                    scrub: 3,
                }
            })



            gsap.to('#cta-block1, #footer', {
                opacity: 1,
                filter: "blur(0px)",
                stagger: 0.5,
                scrollTrigger: {
                    trigger: "#cta",
                    start: "center 80%",
                    end: "center center",
                    scrub: 2
                    //toggleActions: "play pause resume reset",
                }
            })
        }, 700);
    },

}
</script>

<style lang="scss">
#cta {
    position: relative;
    background-color: var(--rose);
    color: var(--preto);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    z-index: 100;

    a {
        color: var(--preto);
        transition: 0.5s;
        display: inline-flex;
        justify-content: center;
        flex-direction: column;

        align-items: center;
        @media(max-width:650px){
            margin-top: unset !important;
        }

        h6 {
            margin-bottom: 5px;
        }

        &:hover {
            span {
                width: 100%;
            }
        }

        span {
            transition: .5s;
            width: 0px;
            height: 5px;
            background-color: var(--preto);
            justify-self: center;
        }
    }

    h2 {
        font-family: var(--neue);
        font-weight: 300 !important;
        max-width: 1000px !important;
        margin: 0 auto;
        transform:translatey(-20px);


        i {
            font-family: var(--ivy);
            font-weight: 200 !important;
        }
    }

    #footer {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;
        max-width: 1200px;
        bottom: 40px;
        left: 50%;
        transform: translatex(-50%);
        color: var(--marrom-claro);

        .footer-col {
            display: flex;
            gap: 30px;
            padding: 30px 30px 5px;
        }

        h6 {
            align-content: end;
            color: var(--marrom-claro) !important;
        }

        #social {
            a {
                transition: .5s;

                &:hover {
                    opacity: .5;

                }
            }
        }
    }

}

@media(max-width:700px) {
    #cta {

        #cta-block1 {
            padding: 0;
            h2{
                font-size: 72px;
                width: 280px;
            }
        }
    }

    #footer {
        flex-direction: column;


        .footer-col {
            width: 100%;
            justify-content: center;
            padding: 0 0 15px !important;
            text-align: center;

            h6 {
                font-size: 15px;
            }
        }

        #social {
            flex-direction: column;
            row-gap: 10px !important;
            margin-bottom: 10px;

            a {
                margin: 0;
            }
        }
    }
}
</style>