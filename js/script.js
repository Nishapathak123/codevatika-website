var navbar = document.querySelector(".navbar");
var burger = document.querySelector('.hamburger');
var navitems = document.querySelector('.links-items');
var forscroll = document.querySelector("#for-scroll");

//sticky header
window.addEventListener('scroll', function() {
  if(window.scrollY >= 200) {
    navbar.classList.add('sticky');
    forscroll.classList.add('visible');
  }
  else {
    navbar.classList.remove('sticky');
    forscroll.classList.remove('visible');
  }
})


//hamburger
burger.addEventListener('click', function() {
  navitems.classList.toggle('open');
  burger.classList.toggle('isactive');
  document.body.classList.toggle('open-nav');
});

//scroll to top
forscroll.addEventListener('click', function(){
  window.scrollTo(0,0);
});






