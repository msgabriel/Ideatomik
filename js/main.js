//----- Scrolling
let anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

//----- Parallax
let scene = document.getElementById("hero-parallax");
let parallaxInstance = new Parallax(scene);

//----- Navbar
const navbar = document.querySelector("nav");
const home = document.querySelector("#home");
const arrow = document.querySelector(".menu-arrow");
const links = document.querySelector(".nav-links");
const buttons = document.querySelectorAll(".nav-links a");
const logo = document.querySelector(".brand")

window.addEventListener("scroll", function (e) {
  "use strict";
  if (window.innerWidth > 800) {
    if (
      document.body.scrollTop >= 100 ||
      document.documentElement.scrollTop >= 100
    ) {
      navbar.classList.add("bg-dark");
      home.style.display = "block";
    } else {
      navbar.classList.remove("bg-dark");
      home.style.display = "none";
    }
  } else {
    home.style.display = "none";
  }
});
//toggle on mobile
arrow.addEventListener("click", toggleNav);
buttons.forEach(btn => btn.addEventListener("click", toggleNav));
logo.addEventListener("click", backTop)

function toggleNav() {
  if (window.innerWidth < 800) {
    navbar.classList.toggle("grow");
    arrow.classList.toggle("slide");
    document.body.classList.toggle("noscroll");
  }
}

function backTop() {
  navbar.classList.remove("grow");
  arrow.classList.remove("slide");
  document.body.classList.remove("noscroll");
}