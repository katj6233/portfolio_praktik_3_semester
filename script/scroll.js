gsap.registerPlugin(ScrollTrigger);

// Scroll animationer

// overskrift
function scrollAnimationer_overskrift_h2() {
  console.log("det virker");
  gsap.from(".streg_efter_tekst", {
    ScrollTrigger: ".streg_efter_tekst",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_overskrift_h2();

// velkommen sektion
function scrollAnimationer_velkommen_tekst() {
  console.log("det virker også");
  gsap.from(".welcome_tekst", {
    ScrollTrigger: ".welcome_tekst",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_velkommen_tekst();

// projekter sektion
function scrollAnimationer_projekter_tekst() {
  console.log("test1");
  gsap.from(".p_intro", {
    ScrollTrigger: ".p_intro",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_projekter_tekst();

// projekter sektion
function scrollAnimationer_projekter_boks() {
  console.log("det virker også også");
  gsap.from(".boks", {
    ScrollTrigger: ".boks",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_projekter_boks();

// projekter sektion
function scrollAnimationer_projekter_boks_1() {
  console.log("det virker også også");
  gsap.from(".boks_1", {
    ScrollTrigger: ".boks_1",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_projekter_boks_1();

// about sektion
function scrollAnimationer_about_tekst() {
  console.log("det virker også også");
  gsap.from(".about_grid", {
    ScrollTrigger: ".about_grid",
    y: "20rem",
    duration: 0.9,
    ease: Cubic.easeOut,
    stagger: { amount: 0.5, from: "edges" },
  });
}

scrollAnimationer_about_tekst();
