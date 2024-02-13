window.addEventListener("scroll", function () {
  var navbar = document.getElementById("main-nav");
  var navLinks = navbar.querySelectorAll(".nav-link");
  var navbarBrand = navbar.querySelector(".navbar-brand");

  if (window.scrollY > 600) {
    navbar.classList.add("scrolled");
    navLinks.forEach(function (link) {
      link.classList.add("scrolled"); // Add scrolled class to nav links on scroll
    });
    navbarBrand.classList.add("scrolled"); // Add scrolled class to navbar brand on scroll
  } else {
    navbar.classList.remove("scrolled");
    navLinks.forEach(function (link) {
      link.classList.remove("scrolled"); // Remove scrolled class from nav links when scrolled to top
    });
    navbarBrand.classList.remove("scrolled"); // Remove scrolled class from navbar brand when scrolled to top
  }
});
