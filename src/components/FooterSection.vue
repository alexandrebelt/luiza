<template>
    <section id="cta" class="center-content">
        <div>

        </div>
        <div id="cta-block1">
            <h3 class="langs" v-html="$t('footer.heading')" :style="{ maxWidth: $i18n.locale === 'pt' ? '950px' : '900px' }">

            </h3>
            <a href="#">
                <h6 class="heading-uppercase langs">
                    <router-link to="/contact">
                        {{ $t('footer.sub1') }}
                    </router-link>
                </h6>
            </a>
        </div>
        <div id="footer">
            <div id="social" class="footer-col">
                <a href="#">
                    <h6>Instagram</h6>
                </a>
                <a href="#">
                    <h6>Behance</h6>
                </a>
                <a href="#">
                    <h6>Threads</h6>
                </a>
            </div>
            <div id="credits" class="footer-col">
                <h6>© 2024 Luiza Bola Design</h6>
            </div>
        </div>
    </section>
</template>

<script>
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
    }
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

    a {
        color: var(--preto);

    }

    h3 {
        font-family: var(--neue);
        max-width: 929px;

        span {
            font-family: var(--ivy);
        }
    }

    #footer {
        display: flex;
        justify-content: space-between;
        position: absolute;
        width: 100%;

        bottom: 0px;
        left: 50%;
        transform: translatex(-50%);

        .footer-col {
            display: flex;
            gap: 30px;
            padding: 30px;
        }
    }

    h6 {
        margin-top: 40px;
    }
}

@media(max-width:700px) {
    #footer {
        flex-direction: column;

        .footer-col {
            width: 100%;
            justify-content: center;
            padding: 0 0 15px !important;
            text-align: center;

            h6 {
                font-size: 13px;
            }
        }
    }
}
</style>