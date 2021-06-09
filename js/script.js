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

const pageTopBtn = document.getElementById('js-scroll-top');

window.addEventListener("scroll", () => {
  const currentY = window.pageYOffset;
  if ( currentY > 400){
    setTimeout(function(){
      pageTopBtn.style.opacity = 1;
    }, 1);
    pageTopBtn.classList.remove('is-hide');
  } else {
    setTimeout(function(){
      pageTopBtn.style.opacity = 0;
    }, 1);
    pageTopBtn.classList.add('is-hide');
  }
});


scrollTop('js-scroll-top', 550); 

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; 
    let step = duration/currentY > 1 ? 10 : 100; 
    let timeStep = duration/currentY * step; 
    let intervalId = setInterval(scrollUp, timeStep);
  

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); 
      } else {
          scrollBy( 0, -step ); 
      }
    }
  });
}


scrollTop('js-scroll-top', 150); 

function scrollTop(el, duration) {
  const target = document.getElementById(el);
  target.addEventListener('click', function() {
    let currentY = window.pageYOffset; 
    let step = duration/currentY > 1 ? 10 : 4000; 
    let timeStep = duration/currentY * step; 
    let intervalId = setInterval(scrollUp, timeStep);
    

    function scrollUp(){
      currentY = window.pageYOffset;
      if(currentY === 0) {
          clearInterval(intervalId); 
          
      } else {
          scrollBy( 0, -step ); 
      }
    }
  });
}