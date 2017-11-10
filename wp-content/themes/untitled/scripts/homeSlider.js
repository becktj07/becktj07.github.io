
$(document).ready(function () {
    homeSlider();
});

function homeSlider() {
    $('.home-slider').slick({
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        infinite: true,
        adaptiveheight: true,
        //fade: true,
        //cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });
};