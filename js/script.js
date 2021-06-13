var navbar = document.querySelector(".navbar");
var burger = document.querySelector('.hamburger');
var navitems = document.querySelector('.links-items');
var forscroll = document.querySelector("#for-scroll");
var requestaquote = document.querySelector('.btn');
// var button = document.querySelector('.btn');
var searchmodal = document.querySelector('#form-list');
var close = document.querySelector('.close-form-list');
var text = document.querySelector('.text');

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
requestaquote.addEventListener('click', function() {
  searchmodal.classList.add('fadein')

})
close.addEventListener('click', function(){
  searchmodal.classList.remove('fadein')
})



