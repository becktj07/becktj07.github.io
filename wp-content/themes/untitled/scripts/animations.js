
$(document).ready(function() {
    var infoShown = false;
    $('.info-flex-container').css('display', 'none');
    $('.info-flex-container--lower').css('display', 'none');
    $('body').css('overflow-y', 'hidden');
    $('.home-button-wrapper > a').addClass('information-closed');

    //prevent native touch activity like scrolling
    if ($('.home-button-wrapper > a').hasClass('information-closed')){
        $('html').on('touchmove', function(lock){
            lock.preventDefault();
        });
    }

    if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
        desktopFunctions();
    }
    else {
        mobileFunctions();
    }
});

$(window).resize(function() {
    if ($('.home-button-wrapper > a').hasClass('information-open')){
        if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
            $('.information-container').css('height', 'auto');
            $('.info-flex-container').css('padding-top','0px');
            $('.untitled-text-overlay').css({
                'top' : '75px',
                'left' : '50%',
                'transform' : 'translate(-50%, -50%)'
            });
        }
        else {
            $('.info-flex-container').css('padding-top','40px');
            $('.information-container').css('height', '100vh');
            $('.untitled-text-overlay').css({
                'top' : '35px',
                'left' : '20px',
                'transform' : 'none'
            });
        }
    }
    if ($('.home-button-wrapper > a').hasClass('information-closed')){
        if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
            $('.information-container').css('height', 'auto');
        }
        else {
            $('.information-container').css('height', '100vh');
        }
    }
});

function desktopFunctions(){
    $(document).on("click","#info-button-trigger",function(iButtonClick){

        $('html').on('touchmove', function(lock){
            return true;
            $('body').css('overflow-y', 'scroll');
        });

        iButtonClick.preventDefault();
        $(this).removeAttr('id', 'info-button-trigger');
        $('.home-button-wrapper > a').removeClass('information-closed').addClass('information-open');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('svg > #i-icon').animate({ opacity: 0}, 500, function(){
            $('svg > #x-icon').animate({ opacity: 1}, 500); 
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 0 }, 1000, 'easeOutCubic');
                $('.info-flex-container').css('display', 'flex');
                $('.info-flex-container--lower').css('display', 'flex');
            }, 300);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '75px'}, 500, 'easeOutCubic');
                $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.5s'});
            }, 600);
            setTimeout(function(){
                $('.branding-text-watermark__creative').css('display', 'block');
                $('.branding-text-watermark__creative').animate({ opacity: 1 }, 650);
            }, 1100);
            setTimeout(function(){
                $('.branding-text-watermark__studio').css('display', 'block');
                $('.branding-text-watermark__studio').animate({ opacity: 1 }, 650);
            }, 1400);
            setTimeout(function(){
                $('.untitled-text-overlay').css('z-index', -3);
                $('.information').css('z-index', 2);
                //$('.info-flex-container').css('padding-top','40px');
            }, 1600);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 1}, 500, 'easeInCubic');
                $('body').css('overflow-y', 'auto');
            }, 1700);
        }); 
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'x-button-trigger');
        }, 2000);
        var infoShown = true; 
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        xButtonClick.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "350");
        $('.home-button-wrapper > a').removeClass('information-open').addClass('information-closed');
        $(this).removeAttr('id', 'x-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('svg > #x-icon').animate({ opacity: 0}, 500, function(){
            $('svg > #i-icon').animate({ opacity: 1}, 500); 
            $('body').css('overflow-y', 'hidden');
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 0}, 800, 'easeOutCubic');
            }, 200);
            setTimeout(function(){
                //$('.info-flex-container').css('padding-top','0px');
                $('.branding-text-watermark__studio').animate({ opacity: 0 }, 650);
            }, 500);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 0 }, 650);
            }, 900);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '50%'}, 500, 'easeOutCubic').css('z-index', 999);
                $('.untitled-text-overlay').css({
                    'left' : '50%',
                    'transform' : 'translate(-50%, -50%)'
                });
                $('.untitled-text-overlay > svg > g > path').css({fill: '#000', transition: '.5s'});
                $('.untitled-text-overlay').css('z-index', 999);
            }, 1300);
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 1 }, 500);
            }, 1600);
        });
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'info-button-trigger');
        }, 2000);
        setTimeout(function(){
            $('.info-flex-container').css('display', 'none');
            $('.info-flex-container--lower').css('display', 'none');
            $('.branding-text-watermark__creative').css('display', 'none');
            $('.branding-text-watermark__studio').css('display', 'none');
        }, 2200);
        var infoShown = false; 
    });
}

function mobileFunctions() {
    $(document).on("click","#info-button-trigger",function(iButtonClick){
        iButtonClick.preventDefault();
        $('.home-button-wrapper > a').removeClass('information-closed').addClass('information-open');    
        $(this).removeAttr('id', 'info-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('svg > #i-icon').animate({ opacity: 0}, 500, function(){
            $('svg > #x-icon').animate({ opacity: 1}, 500); 
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 0 }, 1000)
                $('.info-flex-container').css('display', 'flex');
                $('.info-flex-container--lower').css('display', 'flex');
            }, 300);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '30px'}, 500, 'easeOutCubic');
                $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.5s'});
            }, 600);
            setTimeout(function(){
                $('.untitled-text-overlay').css({
                    'left' : '20px',
                    'transform' : 'none'
                });
            }, 650);
            setTimeout(function(){
                $('.branding-text-watermark__creative').css('display', 'block');
                $('.branding-text-watermark__creative').animate({ opacity: 1 }, 650);
            }, 1200);
            setTimeout(function(){
                $('.branding-text-watermark__studio').css('display', 'block');
                $('.branding-text-watermark__studio').animate({ opacity: 1 }, 650);
                $('.untitled-text-overlay').css('z-index', -3);
                $('.information').css('z-index', 2);
                $('.info-flex-container').css('padding-top','40px');
            }, 1600);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 1}, 500, 'easeInCubic');
            }, 2000);
        }); 
        setTimeout(function(){
            $('body').css('overflow-y', 'auto');
        }, 2300);
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'x-button-trigger');
        }, 2500);
        var infoShown = true;
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        $("html, body").animate({ scrollTop: 0 }, "350");
        $('.home-button-wrapper > a').removeClass('information-open').addClass('information-closed');   
        $(this).removeAttr('id', 'x-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('svg > #x-icon').animate({ opacity: 0}, 500, function(){
            $('svg > #i-icon').animate({ opacity: 1}, 500); 
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 0}, 500, 'easeOutCubic');
                $('.info-flex-container--lower').animate({ opacity: 0}, 500, 'easeOutCubic');
            }, 200);
            setTimeout(function(){
                $('.info-flex-container').css('padding-top','0');
                $('.branding-text-watermark__studio').animate({ opacity: 0 }, 650);
            }, 600);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 0 }, 650);
            }, 1000);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '50%'}, 400, 'easeOutCubic').css('z-index', 999);
                $('.untitled-text-overlay > svg > g > path').css({fill: '#000', transition: '.4s'});
                $('.untitled-text-overlay').css('z-index', 999);
                $('.untitled-text-overlay').css({
                    'transform' : 'translate(-50%, -50%)',
                    'left' : '50%'
                });
            }, 1500);
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 1 }, 500);
                $('body').css('overflow-y', 'hidden');
                $('.info-flex-container').css('display', 'none');
                $('.info-flex-container--lower').css('display', 'none');
            }, 1800);
        });
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'info-button-trigger');
        }, 2200);
        setTimeout(function(){
            $('.branding-text-watermark__creative').css('display', 'none');
            $('.branding-text-watermark__studio').css('display', 'none');
        }, 2200);
        var infoShown = false; 
    });
}
