
$(document).ready(function() {
    if (Modernizr.mq('only screen and (min-width: 768px)') || $(window).width() > 767) {
        desktopFunctions();
    }
    else {
        mobileFunctions();
    }
});

function desktopFunctions(){
    $(document).ready(function() {
        $('.home-button-wrapper > a').attr("href", "/");
    });
    $(document).on("click","#info-button-trigger",function(iButtonClick){
        iButtonClick.preventDefault();
        $(this).removeAttr('id', 'info-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('.sprite-i').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-i').addClass('sprite-x').animate({ opacity: 1}, 500);
            $('.information-container').css('overflow-y', 'visible');
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 0 }, 1000, 'easeOutCubic');
            }, 300);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '75px'}, 500, 'easeOutCubic');
                $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.5s'});
            }, 600);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 1 }, 650);
            }, 1500);
            setTimeout(function(){
                $('.branding-text-watermark__studio').animate({ opacity: 1 }, 650);
            }, 1800);
            setTimeout(function(){
                $('.untitled-text-overlay').css('z-index', -3);
                $('.information').css('z-index', 2);
            }, 2000);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 1}, 500, 'easeInCubic');
            }, 2200);
        }); 
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'x-button-trigger');
        }, 3000);
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        xButtonClick.preventDefault();
        $(this).removeAttr('id', 'x-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('.sprite-x').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-x').addClass('sprite-i').animate({ opacity: 1}, 500);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 0}, 800, 'easeOutCubic');
            }, 200);
            setTimeout(function(){
                $('.branding-text-watermark__studio').animate({ opacity: 0 }, 650);
            }, 500);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 0 }, 650);
            }, 900);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '50%'}, 500, 'easeOutCubic').css('z-index', 999);
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
    });
}

function mobileFunctions() {
    $(document).ready(function() {
        $('.home-button-wrapper > a').attr("href", "#top");
    });

    $(document).on("click","#info-button-trigger",function(iButtonClick){
        iButtonClick.preventDefault();
        $(this).removeAttr('id', 'info-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('.sprite-i').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-i').addClass('sprite-x').animate({ opacity: 1}, 500);
            $('.information-container').css('overflow-y', 'visible');
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 0 }, 1000);
            }, 300);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '75px'}, 500, 'easeOutCubic');
                $('.untitled-text-overlay > svg > g > path').css({fill: '#FFF6D6', transition: '.5s'});
            }, 600);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 1 }, 650);
            }, 1200);
            setTimeout(function(){
                $('.branding-text-watermark__studio').animate({ opacity: 1 }, 650);
                $('.untitled-text-overlay').css('z-index', -3);
                $('.information').css('z-index', 2);
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
    });
       
    $(document).on("click","#x-button-trigger",function(xButtonClick){
        $("html, body").animate({ scrollTop: 0 }, "350");
        $(this).removeAttr('id', 'x-button-trigger');
        $('.home-button-wrapper > a').on('click',function(event) {
            event.preventDefault();
        });
        $('.sprite-x').animate({ opacity: 0}, 500, function(){
            $(this).removeClass('sprite-x').addClass('sprite-i').animate({ opacity: 1}, 500);
            setTimeout(function(){
                $('.info-flex-container').animate({ opacity: 0}, 500, 'easeOutCubic');
            }, 200);
            setTimeout(function(){
                $('.branding-text-watermark__studio').animate({ opacity: 0 }, 650);
            }, 600);
            setTimeout(function(){
                $('.branding-text-watermark__creative').animate({ opacity: 0 }, 650);
            }, 1000);
            setTimeout(function(){
                $('.untitled-text-overlay').animate({ top: '50%'}, 400, 'easeOutCubic').css('z-index', 999);
                $('.untitled-text-overlay > svg > g > path').css({fill: '#000', transition: '.4s'});
                $('.untitled-text-overlay').css('z-index', 999);
                $('body').css('overflow-y', 'hidden');
            }, 1500);
            setTimeout(function(){
                $('.home-slider').animate({ opacity: 1 }, 500);
            }, 1800);
        });
        setTimeout(function(){
            $('.home-button-wrapper > a').attr('id', 'info-button-trigger');
        }, 2200);
    });
}