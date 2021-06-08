var navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
  if(window.scrollY >= 200) {
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }
})

var burger = document.querySelector('.hamburger');
var navitems = document.querySelector('.links-items');

burger.addEventListener('click', function() {
  navitems.classList.toggle('open');
  burger.classList.toggle('isactive');
  document.body.classList.toggle('open-nav');
});