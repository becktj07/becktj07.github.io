
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
        autoplaySpeed: 1500,
        infinite: true,
        useTransform: false,
        fade: true,
        speed: 150,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });
    if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
        $('.slick-slide > img').css('max-height', 'calc(100% - 120px)');
        $('.slick-slide > img').css('padding-bottom', 20);
    }
    else {
        $('.slick-slide > img').css('max-height', '100%');
    }
}

// $(window).resize(function() {
//     if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
//         $('.slick-slide > img').css('max-height', 'calc(100% - 120px)');
//         $('.slick-slide > img').css('padding-bottom', 20);
//     }
//     else {
//         $('.slick-slide > img').css('max-height', '100%');
//     }
// });

$(window).resize(function() {
        $('.slick-slide > img').css('max-height', 'calc(100% - 120px)');
        $('.slick-slide > img').css('padding-bottom', 20);
});