<template>


    <div id="portfolio">
        <section id="project-scroll">
            <div class="langs container estudio-heading">
                <h6>
                    {{ $t('portfolio.heading') }}
                </h6>
                <h6 class="heading-uppercase">
                    {{ $t('portfolio.sub') }}
                </h6>
            </div>
            <div class="projects-wrap">
                <div class="projects">
                    <div class="project" v-for="(proj, index) in projs" :key="index">
                        <div class="project-content">
                            <router-link :to="{ name: 'project', params: { projectSlug: proj.slug } }">
                                <div class="blur-port">
                                    <div class="grainy"></div>
                                </div>
                                <img class="project-image links" :src="proj.cover">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <FooterSection />
</template>

<script>
import data from '@/assets/singleProjs.json'
import initGsap from '@/utils/gsap'
import FooterSection from '@/components/FooterSection.vue'
import gsap from 'gsap'

export default {
    data() {
        return {
            projs: data.projs
        }
    },

    components: {
        'FooterSection': FooterSection
    },

    mounted() {
        initGsap()

        let projectsHover = document.querySelectorAll('.project-content');

        projectsHover.forEach((hover) => {
            let blur = hover.querySelector('.blur-port');

            hover.addEventListener('mouseover', () => {
                gsap.to(blur, {

                    clipPath: "inset(0 100% 0 0)",
                    duration: 1,
                })
            })
            hover.addEventListener('mouseout', () => {
                gsap.to(blur, {

                    clipPath: "inset(0 0% 0 0)",
                    duration: 1,
                })
            })
        })

    }
}
</script>

<style lang="scss">
#portfolio {
    .container {
        padding: 120px 0 60px;

        @media (max-width:800px) {
            padding-bottom: 30px;
        }
    }

    .langs {
        text-align: center;
    }

    .project-cover {
        img {
            max-width: 400px;
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
                    aspect-ratio: 3.1/4.6;
                    width: 25vw;
                    overflow: hidden;


                    .project-content {
                        display: flex;
                        aspect-ratio: 3.1/4.6;
                        overflow: hidden;
                        position: relative;

                        .blur-port {
                            background-blend-mode: multiply;
                            background-repeat: no-repeat;
                            background-position: left;
                            background-size: cover;
                            -webkit-backdrop-filter: blur(40px);
                            backdrop-filter: blur(40px);
                            width: 100%;
                            height: 100%;
                            position: absolute;
                            z-index: 10;
                            pointer-events: none;

                            .grainy {
                                background: url('/public/images/grain.jpg') center/cover;
                                content: "";
                                position: absolute;
                                inset: 0;
                                mix-blend-mode: overlay;
                                opacity: .3;
                                -webkit-filter: saturate(0%) contrast(150%) brightness(100%) opacity(54%);
                                filter:saturate(0%) contrast(150%) brightness(100%) opacity(54%);
                                pointer-events: none;
                                width: 30vw;
                            }

                        }

                        .project-grain-bg {
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
                            max-width: 100%;
                            width: fit-content;
                        }
                    }
                }

                @media(max-width: 700px) {
                    gap: 0;

                    .project {
                        width: 100vw;
                        height: 100vh;
                        aspect-ratio: unset;
                        object-fit: cover;

                        .project-content {
                            aspect-ratio: unset;
                            height: 100vh;

                            img {
                                height: 100%;
                                width: 100%;
                            }

                           .blur-port{
                            display: none;
                               width: 150vw !important ;
                               height: 150vw !important ;
                               background-position: center;
                            .grainy{
                                width: 150vw !important ;
                                height: 150vw !important ;
                            }
                           }
                        }
                    }
                }
            }
        }
    }
}
</style>