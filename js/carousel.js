$(document).ready(function(){
    $( '.partners-logos').slick({
        slidesToShow:6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint:520,
            settings: {
                slidesToShow: 2
            }
        }]
    });
});