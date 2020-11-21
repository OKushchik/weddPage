$(window).on('load resize orientationchange', function() {
  if ($('.carousel').hasClass('slick-initialized') === false && $(window).width() < 820) {
    $('.carousel').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      mobileFirst: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 420,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
            dots: true,
            arrows: false,
          }
        },
        {
          breakpoint: 820,
          settings: "unslick"
        },
      ]
    });
  }
})





