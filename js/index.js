document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const bars = document.querySelectorAll(".bar");
  const navLinks = document.querySelectorAll(".nav-link");
  const dropDownList = document.querySelector(".dropdown");
  const navBar = document.querySelector("nav");
  const testimonialContent = document.querySelector(".testimonial-content");
  var button = document.getElementById("testimonial-button");
  const testimonialForm = document.querySelector(".form");
  const year = document.querySelector(".year");

  function toggleMenu() {
    dropDownList.classList.toggle("show-list");
    navBar.classList.toggle("drop");
    bars.forEach((bar) => {
      bar.classList.toggle("show");
    });
  }
  hamburger.addEventListener("click", () => {
    toggleMenu();
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      toggleMenu();
    });
  });

  const date = new Date().getFullYear();
  year.innerHTML = date;
});
