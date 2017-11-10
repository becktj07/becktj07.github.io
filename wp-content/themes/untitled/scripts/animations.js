
$('.button-trigger').click(function(e) {
    e.preventDefault();
    $('.info-flex-container').animate({ opacity: 0 }, 300, function(){
        $('.branding-text-overlay > div:nth-of-type(3)').animate({ opacity: 0 }, 350, function(){
            $('.branding-text-overlay > div:nth-of-type(2)').animate({ opacity: 0 }, 400, function(){
                $('.branding-text-overlay > div:nth-of-type(1) > svg > g > path').css({fill: 'black', transition: '2.0s'}); 
                $('.branding-text-overlay > div:nth-of-type(1)').animate({ top: '50%' }, 500, function(){
                    location.href='/untitled';
                });  
            });  
        });        
    });
})

// setTimeout

// $('.button img').fadeTo(1000,0.30, function() {
//     if($(this).attr('src') == 'http://localhost:3000/untitled/wp-content/themes/untitled/images/x-button.svg') {
//         $('.button img').attr('src','http://localhost:3000/untitled/wp-content/themes/untitled/images/i-button.svg');
//     } else {
//         $('.button img').attr('src','http://localhost:3000/untitled/wp-content/themes/untitled/images/x-button.svg');
//     }
// }).fadeTo(500,1);


var $window = $(window), mobileOnce = false;


if (window.matchMedia("screen and (min-width: 768px)").matches) {
    mobileOnce = false;
} else {
    mobileOnce = true;
}

$window.smartresize(function() {
    if (window.matchMedia("screen and (min-width: 768px)").matches) {
        mobileOnce = false;
    } else {
        mobileOnce = true;
    }
})

function pgerber() {
    if(mobileOnce) {
        alert('desktop');
    } else if(!mobileOnce) {
        alert('mobile');
    }
}