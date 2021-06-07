// 
$('.logo-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots:true,
    arrow:true,
    autoplay:true,
    autoplaSpeed:2000,
    infinite:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
});
$('.testimonial-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots:true,
    arrow:true,
    autoplay:true,
    autoplaSpeed:2000,
    infinite:true
});

var navbar = document.querySelector(".navbar");

window.addEventListener('scroll', function() {
  if(window.scrollY >= 200) {
    navbar.classList.add('sticky');
  }
  else {
    navbar.classList.remove('sticky');
  }
})





