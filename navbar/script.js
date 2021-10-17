"use strict";

// selectors
const btn = document.querySelector(".hidden-btn");
const navbarLinks = document.querySelector(".navbar-links");

const add1 = function() {
 navbarLinks.classList.toggle("active");
}

btn.addEventListener("click", add1);