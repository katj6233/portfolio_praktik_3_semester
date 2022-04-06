gsap.registerPlugin(ScrollTrigger);

// Scroll animationer
function scrollAnimationer() {
  console.log("hej");
  gsap.from(".projekter_wrapper", {
    ScrollTrigger: ".projekter_wrapper",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer();
