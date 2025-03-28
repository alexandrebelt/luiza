<template>
    <div id="single-project">
        <div class="single-project-cover">
            <img :src=project.cover />
        </div>
        <div class="single-project-content container">
            <div class="limit">
                <div v-if="!isMobile" class="single-project-tags">
                    <div class="langs tags-wapper">
                        <div v-for="(tag, index) in ($i18n.locale === 'PT' ? project.lang.PT.tags : project.lang.EN.tags)"
                            :key="index">
                            <p>{{ tag }}</p>
                        </div>
                    </div>
                </div>
                <div class="single-project-text">
                    <h4>{{ project.title }}</h4>
                    <div class="langs tags-wapper" v-if="isMobile">
                        <div v-for="(tag, index) in ($i18n.locale === 'PT' ? project.lang.PT.tags : project.lang.EN.tags)"
                            :key="index">
                            <p>{{ tag }}</p>
                        </div>
                    </div>
                    <p class="langs">{{ $i18n.locale === "PT" ? project.lang.PT.description :
                        project.lang.EN.description }}</p>
                </div>
            </div>
        </div>
        <div class="project-galery">
            <div class="single-image-galery" v-for="file in project.images" :key="file">
                <img v-if="!file.endsWith('.mp4')" :src="project.folder + '/' + file" />
                <video v-else :src="project.folder + '/' + file" autoplay loop></video>
            </div>
        </div>
        <div class="footer-return">
            <router-link to="/portfolio">
                <div class="langs button-return">
                    <span>{{ $t('single.backPort') }}</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
import projectsData from '@/assets/singleProjs.json'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger)
export default {
    data() {
        return {
            project: null,
            parseTags: null,
            isMobile: window.innerWidth < 800
        }
    },
    created() {
        this.loadProjectData();

    },
    beforeMount() {
        window.removeEventListener('resize', this.updateWidth);

    },
    beforeRouteLeave(to, from, next) {
        gsap.to('#single-project', {
            filter: 'blur(30px)',
            opacity: 0,
            duration: .5
        })
        setTimeout(() => {
            next();
        }, 500);
    },
    mounted() {
        window.addEventListener('resize', this.updateWidth);
        gsap.set('#single-project', {
            filter: 'blur(30px)',
            opacity: 0
        })
        setTimeout(() => {
            window.scrollTo(0, 0)
            gsap.to('#single-project', {
                filter: 'blur(0px)',
                opacity: 1,
                duration: 1
            })
        }, 1000);

        setTimeout(() => {
            gsap.set('.footer-return', {
                scale: 0
            })
            gsap.to('.footer-return', {
                scale: 1,
                duration: .5,
                delay: 2,
                ease: "power4.inOut",
                scrollTrigger: {
                    trigger: 'body',
                    start: '95% 95% ',
                    end: 'bottom bottom',
                    scrub: 2,
                }
            })

        }, 700)

    },
    watch: {
        '$route.params.projectSlug': 'loadProjectData',  // Recarrega os dados quando a URL mudar
    },
    methods: {
        updateWidth() {
            this.isMobile = window.innerWidth < 800
        },
        loadProjectData() {
            const projectSlug = this.$route.params.projectSlug;

            // Procurar o projeto correspondente no JSON com base no título
            const project = projectsData.projs.find(p => p.slug.toLowerCase().replace(/\s+/g, '-') === projectSlug.toLowerCase().replace(/\s+/g, '-'));

            if (project) {
                this.project = project;
            } else {
                this.project = null;  // Caso o projeto não seja encontrado
            }

        }
    }
}
</script>

<style lang="scss">
#single-project {
    overflow-y: hidden;

    .single-project-cover {
        display: flex;

        img {
            width: 100%;
            height: 100vh;
            object-fit: cover;
            object-position: top;
        }
    }

    .single-project-content {
        background-color: var(--branco);
        color: var(--preto);
        display: flex;
        min-height: 50vh;
        align-items: center;

        .limit {
            display: flex;
            flex-direction: row;
            margin: 0 auto;
            align-items: normal;
            height: fit-content;
        }

    }

    .single-project-tags {
        flex-basis: 30%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        .tags-wapper {
            max-width: fit-content;
        }

        p {
            font-family: var(--eb) !important;
            font-size: 20px;
            font-style: italic;
        }
    }

    .single-project-text {
        flex-basis: 70%;

        @media (max-width: 800px) {
            flex-basis: auto;

        }

        .tags-wapper {
            flex-basis: 30%;
            display: flex;
            flex-direction: column;
            margin-bottom: 20px;

            p {
                font-family: var(--eb) !important;
                font-size: 20px;
                font-style: italic;
            }
        }

        h4 {
            margin-bottom: 20px;
        }
    }

    .project-galery {
        .single-image-galery {
            display: flex;

            img,
            video {
                width: 100%;
            }
        }
    }

    .footer-return {
        position: fixed !important;
        display: flex;
        bottom: 0;
        overflow: hidden;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 30px;
        justify-content: center;
        mix-blend-mode: difference;
        background-color: white;
        border-radius: 100%;
        padding: 20px;


        .button-return {
            font-size: 13px;
            font-family: var(--neue);
            height: 50px;
            width: 50px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            mix-blend-mode: difference;

            span {
                mix-blend-mode: difference !important;
                font-weight: 600;
            }
        }
    }
}
</style>