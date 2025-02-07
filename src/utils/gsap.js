
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import router from "@/router";

gsap.registerPlugin(ScrollTrigger);

export default function initGsap() {
    const tl = gsap.timeline();
    setTimeout(() => {

        //GERAL
        setTimeout(() => {
            document.querySelector(".nav-buttons").classList.remove("on-footer");
        }, 300);
        //INICIO

        if (router.currentRoute.value.name === "home") {
            let projs = document.querySelectorAll('.project');

            gsap.set('.intro-banner-content h4, .intro-banner-content p', {
                opacity: 0,
                filter: "blur(30px)"
            })


            gsap.set('.estudio-content h6, .estudio-content p', {
                opacity: 0,
            })
            gsap.set('.estudio-content h4', {
                opacity: 0,
                scale: 2
            })
            gsap.set('.intro-banner-content', {
                filter: 'blur(0)',
            })
            gsap.set('.estudio-lb', {
                opacity: 0,
                width: "clamp(230px, 10vw, 500px)",
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


            gsap.to('.intro-banner-content', {
                opacity: 0,
                scrollTrigger: {
                    trigger: '#intro-banner',
                    start: 'center 20%',
                    end: 'bottom top',
                    scrub: 2
                }
            })


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



            tl.to('.estudio-lb', {
                keyframes: {
                    "0%": { opacity: 0 },
                    "25%": { opacity: 1 },
                    "50%": {
                        opacity: 1,
                        y:"0vh",
                        width: "clamp(230px, 10vw, 500px)",

                    },
                    "100%": {
                        opacity: 0.2,
                        y:"20vh",
                        minHeight: '100%',
                        width:'100vw'
                    },
                },
                scrollTrigger: {
                    trigger: "#estudio-session",
                    start: 'center 80%',
                    end: 'bottom 25%',
                    scrub: 4,

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
        }
    }, 400);

    //SOBRE

    if (router.currentRoute.value.name === "about") {

        gsap.set("#estudio-intro h5", { opacity: 0, filter: "blur(30px)" })
        gsap.set("#destaque", { opacity: 0, x: 100 })

        setTimeout(() => {
            tl.to("#estudio-intro h5", { opacity: 1, duration: 1, delay: 0.5, filter: "blur(0px)" })
            tl.to("#destaque", { opacity: 1, x: 0, duration: 1, ease: "power4.out" })

            let hoverProjs = document.querySelectorAll(".project-content")

            for (let i = 0; i < hoverProjs.length; i++) {
                let hoverProj = hoverProjs[i];
                let hover = hoverProj.querySelector('.project-image');

                hoverProj.addEventListener('mouseover', () => {
                    gsap.to(hover, {
                        maxWidth: "100%",
                        minHeight: "100%",
                        duration: 0.5,
                        ease: 'power4.out-in'
                    })
                }
                )
                hoverProj.addEventListener('mouseleave', () => {
                    gsap.to(hover, {
                        maxWidth: "70%",
                        minHeight: "unset",
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

            gsap.set('#estudio-servicos h5', {
                opacity: 0,
                filter: "blur(30px)"
            })
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
        }, 600)
    }

}