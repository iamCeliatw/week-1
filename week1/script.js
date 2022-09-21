"use strict";

const overlay = document.querySelector(".overlay");
const openMenu = document.querySelector(".desk-navbar");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  openMenu.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
overlay.addEventListener("click", function () {
  openMenu.classList.add("hidden");
  overlay.classList.add("hidden");
});
