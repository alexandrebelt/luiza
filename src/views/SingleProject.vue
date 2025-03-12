<template>
    <div id="single-project">
        <div class="single-project-cover">
            <img :src=project.cover />
        </div>
        <div class="single-project-content container">
            <div class="limit">
                <div v-if="!isMobile" class="single-project-tags">
                    <div  class="langs tags-wapper">
                        <div v-for="(tag, index) in ($i18n.locale === 'PT' ? project.lang.PT.tags : project.lang.EN.tags)"
                            :key="index">
                            <p>{{ tag }}</p>
                        </div>
                    </div>
                </div>
                <div class="single-project-text">
                    <h4>{{ project.title }}</h4>
                    <div class="langs tags-wapper" v-if="isMobile">
                        <div  v-for="(tag, index) in ($i18n.locale === 'PT' ? project.lang.PT.tags : project.lang.EN.tags)"
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
    </div>
</template>

<script>
import projectsData from '@/assets/singleProjs.json'
import gsap from 'gsap';
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
    beforeMount(){
        window.removeEventListener('resize', this.updateWidth);
        
    },
    mounted(){
        window.addEventListener('resize', this.updateWidth);
        gsap.set('#single-project', {
            filter:'blur(30px)',
            opacity: 0
        })
        setTimeout(() => {
            window.scrollTo(0, 0)
            gsap.to('#single-project', {
                filter:'blur(0px)',
            opacity: 1,
            duration: 1
        })
        }, 1000);
    },
    watch: {
        '$route.params.projectTitle': 'loadProjectData',  // Recarrega os dados quando a URL mudar
    },
    methods: {
        updateWidth(){
            this.isMobile = window.innerWidth < 800
        },
        loadProjectData() {
            const projectTitle = this.$route.params.projectTitle;

            // Procurar o projeto correspondente no JSON com base no título
            const project = projectsData.projs.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === projectTitle.toLowerCase().replace(/\s+/g, '-'));

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
.tags-wapper{
    flex-basis: 30%;
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        p{
            font-family: var(--eb) !important;
            font-size: 20px;
            font-style: italic;
        }
}
        h4 {
            margin-bottom: 20px;
        }
    }

    .project-galery{
        .single-image-galery{
            display: flex;
            img, video{
                width: 100%;
            }
        }
    }
}
</style>