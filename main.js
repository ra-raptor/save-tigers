let tl = gsap.timeline();
document.querySelector("h1").innerHTML = "";

tl.from("nav", { y: -50, opacity: 0, duration: 1.6 });
tl.from(".banner", { x: -300, opacity: 0, duration: 1.2 }, "-=.6");
tl.to(
  "h1",
  {
    duration: 3,
    text: {
      value:
        "Mighty tigers <br>hear them roar,<br>for they may<br> be no more..",
      delimiter: "",
    },
    ease: "none",
  },
  "-=.6"
);

function scrollToSection(section) {
  gsap.to(window, { duration: 1.2, scrollTo: `#${section}` });
}

gsap.from("#main-title", {
  scrollTrigger: ".main-title", // start the animation when ".box" enters the viewport (once)
  y: 100,
  opacity: 0,
});
gsap.from(".main-para", {
  scrollTrigger: ".main-v", // start the animation when ".box" enters the viewport (once)
  x: -100,
  stagger: 1,
  opacity: 0,
  duration: 1.5,
});
gsap.from("input", {
  scrollTrigger: "form", // start the animation when ".box" enters the viewport (once)
  x: 200,
  opacity: 0,
  stagger: 1,
  duration: 1,
});
