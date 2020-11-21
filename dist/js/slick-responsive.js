/* Slick needs no get Reinitialized on window Resize after it was destroyed */
$(window).on('load resize orientationchange', function() {
    $('.carousel').each(function(){
        var $carousel = $(this);
        /* Initializes a slick carousel only on mobile screens */
        // slick on mobile
        if ($(window).width() > 824) {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }
        }
        else{
            if (!$carousel.hasClass('slick-initialized')) {
                $carousel.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    mobileFirst: true,
                });
            }
        }
    });
});


$('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
        {
            breakpoint: 824,
            settings: 'unslick'
        }
    ]
});


