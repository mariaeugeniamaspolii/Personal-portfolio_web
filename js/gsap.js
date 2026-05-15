document.addEventListener("DOMContentLoaded", function () {

    const stackScrollers = document.querySelectorAll(".stackScroller");

    let mm = gsap.matchMedia();

    mm.add({
        isMobile: "(max-width: 991px)",
        isDesktop: "(min-width: 992px)",
    }, (context) => {
        let {
            isMobile,
            isDesktop
        } = context.conditions;

        //All project rows
        setTimeout(function () {
            const projects = document.querySelectorAll(".project, .other-project");

            projects.forEach(function (project) {
                const rows = project.querySelectorAll(".row");

                rows.forEach(function (row) {
                    gsap.fromTo(row, {
                        opacity: 0.5,
                        y: 100,
                    }, {
                        opacity: 1,
                        y: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: project,
                            end: "+=300",
                            scrub: 2,
                            // markers: {startColor: "red", endColor: "blue"},
                            // // markers: true,
                        }
                    });
                });
            });
        }, 1000);

        //About
        const aboutAnimate = document.querySelectorAll(
            ".about h2, .about h3, .about .row, .about .btn-cv, .stack h4");

        aboutAnimate.forEach(function (element) {
            gsap.fromTo(element, {
                y: 0,
                opacity: 0,
                scale: 0.95,
            }, {
                y: 0,
                duration: 1,
                opacity: 1,
                scale: 1,
                scrollTrigger: {
                    trigger: element,
                    scrub: 2,
                    end: "+=200",
                    // // markers: true
                },
            });
        });

        //Stack
        setTimeout(function () {
        stackScrollers.forEach(function (scroller) {
            const stackArticles = scroller.querySelectorAll("article");
            const containerWidth = scroller.offsetWidth;

            gsap.to(stackArticles, {
                x: isMobile ? -containerWidth * 4.4 : -containerWidth *1.6,
                ease: "none",
                scrollTrigger: {
                    trigger: scroller,
                    pin: false,
                    start: isMobile ? "top 75%" : "top 70%",
                    scrub: 2,
                    end: isMobile ? () => "+=" +
                        containerWidth *1.2 : () => "+=" +
                        containerWidth / 1.3,
                    // markers: true
                }
            });
        });
    }, 5000);

        //Title
        const titleContainers = document.querySelectorAll(".title-container");
        setTimeout(function () {
            titleContainers.forEach(function (titleContainer) {
                const titles = titleContainer.querySelectorAll(".title");
                titles.forEach(function (title) {
                    gsap.fromTo(title, {
                        x: title.offsetWidth
                    }, {
                        x: 0,
                        ease: "none",
                        scrollTrigger: {
                            trigger: titleContainer,
                            pinSpacing: false,
                            start: "top bottom",
                            end: "top 50%",
                            scrub: 1,
                            // // markers: true
                        }
                    });
                });
            });
        }, 2000);


        //SHIO
        const shioBg = document.querySelector(".shioBg img");
        const shio = document.querySelector(".project-cover.shio");
        const shioImages = document.querySelectorAll(".image-column .images");

        gsap.to(shioBg, {
            scale: 30,
            ease: "none",
            scrollTrigger: {
                trigger: shio, // Contenedor principal de shioBg
                start: `top top`,
                end: "+=500",
                scrub: 1,
                // // markers: true
            }
        });

        // Shio h1
        const shioCoverWidth = shio.offsetWidth;
        gsap.to(".project-cover.shio h1", {
            scale: 1,
            opacity: 1,
            x: isMobile ? -shioCoverWidth / 4 : -shioCoverWidth / 15,
            ease: "none",
            scrollTrigger: {
                trigger: shio,
                pin: true,
                start: "top top",
                end: "+=1200",
                scrub: 1,
                // // markers: true,
            }
        });

        //Shio images
        shioImages.forEach(function (scroller) {
            const shioImage = scroller.querySelectorAll("img");
            const containerHeight = scroller.offsetHeight;

            gsap.to(shioImage, {
                y: -containerHeight / 1.2,
                ease: "none",
                scrollTrigger: {
                    trigger: ".project.shio",
                    pin: isMobile ? false : ".project.shio",
                    start: "top top",
                    scrub: 2,
                    end: () => "+=" +
                        containerHeight,
                    // // markers: true
                }
            });
        });



        //TAURUS
        const taurusBg = document.querySelectorAll(".taurusBg");
        const taurus = document.querySelector(".project-cover.taurus");
        const taurusContent = document.querySelectorAll(".content-taurus");

        taurusBg.forEach(function (scroller) {
            const paths = scroller.querySelectorAll("path");
            const containerWidth = scroller.offsetWidth;

            gsap.to(paths, {
                x: 0,
                y: 0,
                ease: "none",
                scrollTrigger: {
                    trigger: taurus,
                    start: "top top",
                    scrub: 0.3,
                    end: () => "+=" + containerWidth / 5,
                    // // markers: true,
                },
            });
        });

        // Taurus svg
        const taurusContainerWidth = taurus.offsetWidth;
        gsap.to(".project-cover.taurus svg", {
            // x: -taurusCoverWidth/15,
            x: (-taurusContainerWidth + taurusContainerWidth * 0.3),
            ease: "none",
            delay: 0.5,
            scrollTrigger: {
                trigger: taurus,
                start: "40% top",
                end: () => "+=" + taurusContainerWidth * 0.8,
                scrub: 1,
                // // markers: true,
            }
        });

        // Taurus h1
        gsap.to(".project-cover.taurus h1", {
            x: (-taurusContainerWidth + taurusContainerWidth * 1.1),
            ease: "none",
            scrollTrigger: {
                trigger: taurus,
                pin: true,
                start: "top top",
                end: () => "+=" + taurusContainerWidth,
                scrub: 1,
                // // markers: true,
            }
        });

        // Taurus content
        const taurusContentFirstChildren = document.querySelectorAll(".content-taurus > :first-child");

        taurusContentFirstChildren.forEach(element => {
            gsap.fromTo(element, {
                x: -150,
                // scale: 0.8
            }, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element.parentNode, // Usa el elemento padre como activador
                    start: "top bottom",
                    end: "top bottom",
                    scrub: 1,
                    // // markers: true,
                }
            });
        });

        const taurusContentSecondChildren = document.querySelectorAll(".content-taurus > :nth-child(2)");

        taurusContentSecondChildren.forEach(element => {
            gsap.fromTo(element, {
                x: 150,
                // scale: 0.8
            }, {
                x: 0,
                y: 0,
                scale: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: element.parentNode, // Usa el elemento padre como activador
                    start: "10% bottom",
                    end: "top bottom",
                    scrub: 1,
                    // // markers: true,
                }
            });
        });



        //QUEST
        //Quest h1
        const quest = document.querySelector(".project-cover.quest");
        gsap.fromTo(".project-cover.quest h1", {
            // y: 200,
            letterSpacing: -50,
            // scale: 0.8
        }, {
            // y: 0,
            letterSpacing: 0,
            // scale: 1,
            ease: "none",
            scrollTrigger: {
                trigger: quest,
                pin: true,
                start: "top top",
                end: "+=50",
                scrub: 1,
                // // markers: true,
            }
        });
        //Quest images
        const questRow = document.querySelector(".project.quest");
        const questImages = document.querySelector(".quest-images");
        isMobile ?
            gsap.to(questImages, {
                x: -questImages.offsetWidth,
                ease: "none",
                scrollTrigger: {
                    trigger: questImages,
                    pin: true,
                    start: "center center",
                    end: () => "+=" + questImages.offsetWidth,
                    scrub: 1,
                    // // markers: true,
                }
            }) :
            gsap.to(".row-quest", {
                x: -questRow.offsetWidth*1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: questRow,
                    pin: true,
                    start: "center center",
                    end: () => "+=" + questRow.offsetWidth,
                    scrub: 1,
                    // // markers: true,
                }
            });



        //EVENTY
        const eventy = document.querySelector(".project-cover.eventy");

        //EVENTY h1
        const eventyH1 = document.querySelector(".project-cover.eventy h1");
        const eventyH1Leters = eventyH1.textContent.split("");
        eventyH1.textContent = "";

        eventyH1Leters.forEach((letter) => {
            eventyH1.innerHTML += '<hi class="eventy-letter">' + letter + '</hi>';
        });
        gsap.set(".eventy-letter", {
            display: "inline-block"
        });
        gsap.fromTo(".eventy-letter", {
            y: 500,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            delay: 2,
            duration: 2,
            stagger: 0.1,
            ease: "back.out(3)",
            scrollTrigger: {
                trigger: eventy,
                start: "bottom center",
                end: "+=500",
                scrub: 1,
                // markers: {
                //     startColor: "yellow",
                //     endColor: "blue"
                // },
            }
        })

        //Eventy timeline
        gsap.fromTo(".timeline-eventy", {
            opacity: 0,
        }, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: eventy,
                pin: true,
                start: "top top",
                end: "+=1500",
                scrub: 1,
                // markers: {
                //     startColor: "white",
                //     endColor: "brown"
                // },
            }
        });


        // Eventy paths
        const paths = document.querySelectorAll('.project-cover.eventy svg path');

        paths.forEach((path, index) => {
            gsap.set(path, {
                transformOrigin: 'center center'
            })

            gsap.fromTo(path, {
                scale: 0.5,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 0.6,
                ease: "none",
                scrollTrigger: {
                    trigger: ".project-cover.eventy",
                    start: "top top",
                    end: "top top",
                    scrub: 1,
                    // markers: {
                    //     startColor: "aqua",
                    //     endColor: "cadetblue",
                    // },
                }
            });
        });

        //EVENTY images
        const eventyContent = document.querySelector(".project.eventy");
        gsap.to(".eventy-images img:nth-child(odd)", {
            y: -eventyContent.offsetHeight * 1.2,
            ease: "none",
            scrollTrigger: {
                trigger: isMobile ? ".eventy-images" : eventyContent,
                start: "top top",
                end: () => "+=" + eventyContent.offsetHeight,
                scrub: 1,
                // // markers: true,
            }
        });
        gsap.to(".eventy-images img:nth-child(even)", {
            y: -eventyContent.offsetHeight * 1.3,
            ease: "none",
            scrollTrigger: {
                trigger: isMobile ? ".eventy-images" : eventyContent,
                pin: true,
                start: "top top",
                end: () => "+=" + eventyContent.offsetHeight,
                scrub: 1,
                // markers: {
                //     startColor: "yellow",
                //     endColor: "blue"
                // },
            }
        });



        //FIAT
        gsap.utils.toArray(".comparisonSection").forEach(section => {
            let tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: "top top",
                    end: () => "+=" + section.offsetWidth,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                    // markers: {
                    //     startColor: "pink",
                    //     endColor: "aqua"
                    // },
                },
                defaults: {
                    ease: "none"
                }
            });
            tl.fromTo(section.querySelector(".afterImage"), {
                    xPercent: 100,
                    x: 0
                }, {
                    xPercent: 0
                })
                .fromTo(section.querySelector(".afterImage img"), {
                    xPercent: -100,
                    x: 0
                }, {
                    xPercent: 0
                }, 0);
            tl.fromTo(section.querySelector(".afterImage h1"), {
                xPercent: -100,
                x: 0
            }, {
                xPercent: 0
            }, 0);
        });

        //FIAT images
        const fiatContent = document.querySelector(".project.fiat");
        const fiatImages = document.querySelectorAll(".fiat-images-content");
        gsap.to(".fiat-images-content div", {
            x: isMobile ? -fiatContent.offsetWidth * 3 : -fiatContent.offsetWidth * 0.7,
            ease: "none",
            scrollTrigger: {
                trigger: isMobile ? ".fiat-images-content div" : fiatContent,
                pin: isMobile ? ".fiat-images-content div" : true,
                start: isMobile ? "center center" : "top top",
                end: () => "+=" + fiatContent.offsetWidth,
                scrub: 1,
                // snap: 1 / 5,
                // markers: {
                //     startColor: "yellow",
                //     endColor: "blue"
                // },
            }
        });

        //PALA
        const pala = document.querySelector(".project-cover.pala");
        
        //Pala timeline
        gsap.fromTo(".timeline-pala", {
            opacity: 0,
        }, {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
                trigger: pala,
                pin: true,
                start: "top top",
                end: "+=500",
                scrub: 1,
                // markers: {
                //     startColor: "white",
                //     endColor: "brown"
                // },
            }
        });

        // Pala paths
        const palaPaths = document.querySelectorAll('.project-cover.pala svg path');

        palaPaths.forEach((path) => {
            gsap.set(path, {
                transformOrigin: 'center center'
            })

            gsap.fromTo(path, {
                scale: 0.5,
                opacity: 0,
            }, {
                scale: 1,
                opacity: 0.6,
                ease: "none",
                scrollTrigger: {
                    trigger: ".project-cover.pala",
                    // pin: ".project-cover.pala",
                    start: "top top",
                    end: "+=400",
                    scrub: 1,
                    // markers: {
                    //     startColor: "aqua",
                    //     endColor: "cadetblue",
                    // },
                }
            });
        });

        // //PALA h1
        gsap.fromTo(`.project-cover.pala h1`, {
            y: pala.offsetHeight * 0.1,
            scale: 0.8,
            opacity: 0,
        }, {
            y: 0,
            scale: 1,
            opacity: 1,
            delay: 2,
            ease: "none",
            scrollTrigger: {
                trigger: pala,
                start: "top top",
                end: "+=400",
                scrub: 1,
                // // markers: true,
            }
        });
        
        //Pala images
        const palaImages = document.querySelectorAll(".pala-column .pala-images");
        palaImages.forEach(function (scroller) {
            const palaImage = scroller.querySelectorAll("img");
            const containerHeight = scroller.offsetHeight;

            gsap.to(palaImage, {
                y: -containerHeight / 1.5,
                ease: "none",
                scrollTrigger: {
                    trigger: ".project.pala",
                    pin: ".project.pala",
                    start: "top top",
                    scrub: 2,
                    end: () => "+=" +
                        containerHeight,
                    // // markers: true
                }
            });
        });
    })

});