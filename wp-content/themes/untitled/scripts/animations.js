
var windowWidth = $(window).width();

$(document).ready(function() {
    testHeight();

    if (windowWidth <= 768) {
        mobileAnimations();
    } else {
        desktopAnimations();
    }
});

$(window).resize(function () { 
    if (windowWidth <= 768) {
        //mobileClears();
    } else {
        //desktopClears();
    }
});

function testHeight(){
    // var untitledTextHeight = $('.untitled-text-overlay').height();
    // var animateHeight = untitledTextHeight / 2;
    var animateHeight = $('.untitled-text-overlay').outerHeight();
    var calc = 'calc(50% - "+ animateHeight +px")';
}

function desktopAnimations(){
    $(document).on("click","#info-button-trigger",function(iButtonClick){
        iButtonClick.preventDefault();
        iButtonClick.stopPropagation();
        $(this).removeAttr('id', 'info-button-trigger').attr('id', 'x-button-trigger');
        $('.sprite-i').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-i').addClass('sprite-x').animate({ opacity: 1}, 500);
            $('.untitled-text-overlay').animate({ top: '10%'}, 300);
            $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.25s'});
            $('.branding-text-watermark--desktop__creative').animate({ opacity: 1 }, 300);
            setTimeout(function(){
                $('.branding-text-watermark--desktop__studio').animate({ opacity: 1 }, 300);
                $('.information').css('z-index', 1);
            }, 100);
        }); 
        $('.home-slider').animate({ opacity: 0 }, 1200, function(){
            $('.untitled-text-overlay').css('z-index', -3);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 1}, 750);
            }, 250);
        });
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        xButtonClick.preventDefault();
        xButtonClick.stopPropagation();
        $(this).removeAttr('id', 'x-button-trigger').attr('id', 'info-button-trigger');
        $('.sprite-x').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-x').addClass('sprite-i').animate({ opacity: 1}, 500);
            $('.info-flex-container').animate({ opacity: 0}, 750, function(){
                $('.branding-text-watermark--desktop__studio').animate({ opacity: 0 }, 300);
                setTimeout(function(){
                    $('.branding-text-watermark--desktop__creative').animate({ opacity: 0 }, 200);
                }, 200);
                setTimeout(function(){
                    $('.information').css('z-index', 2);
                    $('.untitled-text-overlay').animate({ top: '50%'}, 300).css('z-index', 999);
                    $('.untitled-text-overlay > svg > g > path').css({fill: '#000', transition: '.25s'});
                }, 200);
                $('.home-slider').animate({ opacity: 1 }, 1200);
            });
        });
    });
}

function mobileAnimations() {
    $(document).on("click","#info-button-trigger",function(iButtonClick){
        iButtonClick.preventDefault();
        $(this).removeAttr('id', 'info-button-trigger').attr('id', 'x-button-trigger');
        $('.sprite-i').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-i').addClass('sprite-x').animate({ opacity: 1}, 500);
            $('.untitled-text-overlay').animate({ top: '10%'}, 300);
            $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.25s'});
            setTimeout(function(){
                $('.branding-text-watermark--mobile__untitled').animate({ opacity: 1 }, 300);
            }, 400);
            setTimeout(function(){
                $('.branding-text-watermark--mobile__creative').animate({ opacity: 1 }, 300);
            }, 500);
            setTimeout(function(){
                $('.branding-text-watermark--mobile__studio').animate({ opacity: 1 }, 300);
                $('.untitled-text-overlay').css('z-index', -3);
                $('.information').css('z-index', 2);
            }, 600);
        }); 
        $('.home-slider').animate({ opacity: 0 }, 1200, function(){
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 1}, 750);
            }, 250);
        });
        setTimeout(function(){
            $('body').css('overflow-y', 'auto');
        }, 1000);
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        $("html, body").animate({ scrollTop: 0 }, "600");
        $(this).removeAttr('id', 'x-button-trigger').attr('id', 'info-button-trigger');
        setTimeout(function(){
            $('.sprite-x').animate({ opacity: 0}, 500, function(){
                $(this).removeClass('sprite-x').addClass('sprite-i').animate({ opacity: 1}, 500);
                $('.info-flex-container').animate({ opacity: 0}, 750, function(){
                    $('.branding-text-watermark--mobile__untitled').animate({ opacity: 0 }, 300);
                    setTimeout(function(){
                        $('.branding-text-watermark--mobile__creative').animate({ opacity: 0 }, 300);
                        $('.branding-text-watermark--mobile__studio').animate({ opacity: 0 }, 300);
                    }, 250);
                    setTimeout(function(){
                            $('.untitled-text-overlay > svg > g > path').css({fill: '#000', transition: '.25s'});
                            $('.untitled-text-overlay').animate({ top: '50%'}, 300).css('z-index', 999);
                        }, 250);
                    $('.home-slider').animate({ opacity: 1 }, 1200);
                });
                setTimeout(function(){
                    $('body').css('overflow-y', 'hidden');
                }, 1000);
            });
        }, 700);
    });
}