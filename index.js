document.getElementById('toggle').addEventListener('click', function () {
  var navList = document.getElementById('nav-list');
  var navbar = document.querySelector('.navbar');
  navbar.classList.toggle('toggle');
  navList.classList.toggle('show');
});

window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var nav__link = document.querySelectorAll(".nav__link");

  window.scrollY >= 10 ? navbar.classList.add("active") : navbar.classList.remove("active");
  window.scrollY >= 10 ? nav__link.forEach((link) => link.classList.add("active")) : nav__link.forEach((link) => link.classList.remove("active"));
});
  


  

