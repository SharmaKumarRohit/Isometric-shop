var tl = gsap.timeline();

tl.from("header, .content h1, .content p, .content .buttons, .content .icons, .image img", {
    opacity: 0,
    transform: "translateY(30px)",
    duration: 1,
    stagger: 0.4
})