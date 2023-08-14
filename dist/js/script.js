"use strict";

const popupContainer = document.getElementById("popupContainer");
const closeButton = document.getElementById("closeButton");

document.querySelectorAll("#openButton").forEach((item) => {
  item.addEventListener("click", () => {
    popupContainer.classList.add("active");
  });
});

closeButton.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});

//* further form functionality could be added like emailing the form content
let form = document.getElementById("forminput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

form.querySelector("[name='sendbtn']").addEventListener("click", () => {
  // sending form logic might be here
  console.log("send button triggered");
  popupContainer.classList.remove("active");
});

//* aniamtion part

let btnAnim = () => {
  const btnMessagetl = gsap.timeline({
    defaults: { duration: 1, repeat: -1, repeatDelay: 3 },
  });
  btnMessagetl
    .to(".button-anim", { y: 5 })
    .to(".button-anim", { y: -5 })
    .to(".button-anim", { y: 0 });
  return btnMessagetl;
};

const tl = gsap.timeline({ defaults: { duration: 0.9 } });

tl.from(".heading-text", { opacity: 0, delay: 0.2, y: 30 });
tl.from(".classified", { opacity: 0, delay: 0.1 });
tl.from(".button-anim", { opacity: 0, delay: 0.1, y: 30 });
tl.add(btnAnim);

//
// Select the blocks
const blocks = document.querySelectorAll(".body-blocks");

// Create a timeline for the animations
const timeline = gsap.timeline({ paused: true });

// Loop through the blocks and add animations to the timeline
blocks.forEach((block, index) => {
  timeline.fromTo(
    block,
    { opacity: 0, x: -20 },
    { opacity: 1, x: 0, duration: 0.5 },
    index * 0.2
  );
});

// Detect when the user scrolls to the "elements" section
const elementsSection = document.querySelector(".elements");
const elementsSectionOffset = elementsSection.offsetTop;

window.addEventListener("scroll", () => {
  if (window.scrollY >= elementsSectionOffset) {
    timeline.play();
  }
});
