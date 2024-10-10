document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    
    gsap.from(".hero-title", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".hero-subtitle", {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.5,
        ease: "power2.out"
    });

    gsap.from(".cta-button", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        delay: 1,
        ease: "back.out(1.7)"
    });

    gsap.from(".about-photo", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        opacity: 0,
        x: -100,
        duration: 1
    });

    gsap.from(".about-text", {
        scrollTrigger: {
            trigger: ".about-section",
            start: "top 80%",
        },
        opacity: 0,
        x: 100,
        duration: 1,
        delay: 0.3
    });

    gsap.from(".project-card", {
        scrollTrigger: {
            trigger: ".projects-section",
            start: "top 80%",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1
    });
});



