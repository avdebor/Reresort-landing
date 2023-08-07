"use strict";

const openButton = document.getElementById("openButton");
const popupContainer = document.getElementById("popupContainer");
const closeButton = document.getElementById("closeButton");

openButton.addEventListener("click", () => {
  popupContainer.classList.add("active");
});

closeButton.addEventListener("click", () => {
  popupContainer.classList.remove("active");
});
