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

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        520:{
            items:2,
            nav:false
        },
        600:{
            items:3,
            nav:false
        },
       
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});