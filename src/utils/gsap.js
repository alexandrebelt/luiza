
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import router from "@/router";

gsap.registerPlugin(ScrollTrigger);

export default function initGsap() {
    const tl = gsap.timeline();

    //GERAL
    setTimeout(() => {
        document.querySelector(".nav-buttons").classList.remove("on-footer");
    }, 500);
    gsap.set('.blur', {
        opacity:0
    })
    setTimeout(() => {
        gsap.to('.blur', {

        })
    }, 500);
    //INICIO

    if (router.currentRoute.value.name === "home") {
        gsap.set('.intro-banner-content', {
            opacity: 0,
            filter: "blur(30px)"
        })
        gsap.set('#see-more-works h2', {
            opacity: 0,
            filter: "blur(30px)"
        })
       /*  gsap.set('.intro-banner-content', {
            filter: 'blur(0)',
        }) */
        setTimeout(() => {
            let projs = document.querySelectorAll('.project');

            gsap.to('.intro-banner-content', {
                opacity: 1,
                duration: 1,
                filter: "blur(0px)",
                stagger: .3
            })


            /* gsap.to('.intro-banner-content', {
                opacity: 0,
                scrollTrigger: {
                    trigger: '#intro-banner',
                    start: 'center 20%',
                    end: 'bottom top',
                    scrub: 2
                }
            })
 */

            projs.forEach((proj) => {
                gsap.set('.text-content', {
                    opacity: 1,
                    filter: "blur(0px)"
                })
                gsap.set('.blur', {
                    x: 0
                })

                gsap.to(proj.querySelector('.text-content'), {
                    opacity: 0,
                    filter: "blur(30px)",
                    scrollTrigger: {
                        trigger: proj,
                        start: 'center 30%',
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

            gsap.to('#see-more-works h2', {
                opacity: 1,
                filter: "blur(0px)",
                scrollTrigger:{
                    trigger: '#see-more-works',
                    start:'top center',
                    end:'center center',
                    scrub: 1
                }
            })
            
            

        }, 400);


    }

    //SOBRE

    if (router.currentRoute.value.name === "about") {

        gsap.set("#estudio-intro h4", { opacity: 0, filter: "blur(30px)" })
        gsap.set("#destaque", { opacity: 0, filter: "blur(30px)" })
        gsap.set('.estudio-content h6, .estudio-content p', {
            opacity: 0,
        })
        gsap.set('.estudio-content h4', {
            opacity: 0,
            scale: 2
        })

        setTimeout(() => {
            tl.to("#estudio-intro h4", { opacity: 1, duration: 1, delay: 0.5, filter: "blur(0px)" })
            tl.to("#destaque", { opacity: 1, filter: "blur(0px)", duration: 1, ease: "power4.out" })

        }, 150);

        gsap.set('#estudio-servicos h5', {
            opacity: 0,
            filter: "blur(30px)"
        })

        setTimeout(() => {


            gsap.to('#estudio-servicos h5', {
                opacity: 1,
                filter: "blur(0px)",
                stagger: 0.33,
                scrollTrigger: {
                    trigger: '#estudio-servicos',
                    start: 'top, center',
                    end: 'center center',
                    scrub: 2
                }
            })

            tl.to('.estudio-content h6', {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".estudio-content h4",
                    start: "center center",
                    end: "+=100",
                    scrub: 1,
                }
            })

            tl.to('.estudio-content h4', {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: "#estudio-session",
                    start: "center center",
                    end: "bottom 10%",
                    scrub: 2,
                    pin: true,
                }
            })


            tl.to('.estudio-content p', {
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: ".estudio-content h4",
                    start: "center 20%",
                    end: "bottom top",
                    scrub: 1,
                }
            })
        }, 600)
    }

    //PORTFOLIO

    if (router.currentRoute.value.name === "portfolio") {

        const projects = document.querySelector(".projects");

        gsap.set('#portfolio .estudio-heading', {
            opacity: 0,
            filter: 'blur(30px)'
        })
        gsap.set('.projects-wrap', {
            opacity: 0,
            filter: 'blur(30px)'
        })

        // eslint-disable-next-line no-inner-declarations
        setTimeout(() => {

            tl.to('#portfolio .estudio-heading', {
                opacity: 1,
                duration: 1,
                filter: 'blur(0px)'
            })
            tl.to('.projects-wrap', {
                opacity: 1,
                duration: 1,
                filter: 'blur(0px)'
            })

            function getScrollAmount() {
                let projectsWidth = projects.scrollWidth;
                return -(projectsWidth - window.innerWidth);
            }

            const tween = gsap.to(projects, {
                x: getScrollAmount,
                duration: 3,
                ease: "power2.inOut",
            });


            ScrollTrigger.create({
                trigger: ".projects-wrap",
                start: "center center",
                end: () => `+=${getScrollAmount() * -1}`,
                pin: true,
                anticipatePin: true,
                animation: tween,
                scrub: 1,
                invalidateOnRefresh: true,
            })
        }, 1000);

    }

}