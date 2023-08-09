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
