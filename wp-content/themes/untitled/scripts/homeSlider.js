
$(window).ready(function () {
    setTimeout(function(){
        $('.untitled-text-overlay').animate({ opacity: 1 }, 1200, 'swing');
    }, 500);
    setTimeout(function(){
        $('.home-slider').animate({ opacity: 1 }, 750);
        initializeHomeSlider();
    }, 900);
    setTimeout(function(){
        $('.home-button-wrapper').animate({ opacity: 1 }, 600);
    }, 1300);
});

function initializeHomeSlider() {
    $('.home-slider').slick({
        autoplay: false,
        arrows: false,
        autoplaySpeed: 1000,
        infinite: true,
        useTransform: false,
        fade: true,
        cssEase: 'none',
        slidesToShow: 1,
        slidesToScroll: 1
    });
}

// function pauseHomeSlider(){
//     $('.home-slider').slick('slickSetOption', 'autoplay', false).slick('slickPause');
// };