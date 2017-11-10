var windowWidth;

$(function () {
    windowWidth = $(window).width();
    setupNav();
    checkSize();
});

$(window).resize(function () {
    if ($(window).width() != windowWidth) {
        checkSize();
    }
}).resize();

function checkSize() {
    if (Modernizr.mq('only screen and (min-width: 1025px)') || $(window).width() > 1024) {
        navReset();
        navDesktop();
    }
    else {
        navReset();
        mobileNav();
        mobileSecondaryNav();
    }
}

function setupNav() {
    $('.main-nav ul').eq(0).addClass('main-nav__list');
    $('.main-nav ul li').has('ul').addClass('has-secondary');
    $('.has-secondary ul').eq(0).addClass('secondary-nav');
    var secondaryExpander = "<div class=\"secondary-expander\">&#43;</div>";
    $('.has-secondary').each(function () {
        $(this).prepend(secondaryExpander);
        $(this).find('ul').addClass('secondary-nav');
    });
}

function navReset() {
    $('.main-nav').removeClass('mobile-nav-open');
    $('.secondary-expander').removeClass('secondary-nav-open').html('+');
    $('.main-nav__list, .utility-nav, .secondary-nav').removeAttr('style');
}

function setupSecondary() {
    $('.main-nav ul li').has('ul').addClass('has-secondary');
    var secondaryExpander = "<div class=\"secondary-expander\">&#43;</div>";
    $('.has-secondary').each(function () {
        $(this).prepend(secondaryExpander);
        $(this).find('ul').addClass('secondary-nav');
    });
}

function navDesktop() {
    $('.utility-nav').removeClass('visually-hidden');
    $('.secondary-nav').addClass('visually-hidden');
    $('.has-secondary').each(function () {
        $(this).off('hover').hover(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).find('.secondary-nav').removeClass('visually-hidden').css('height', 'auto');
        },
        function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(this).find('.secondary-nav').addClass('visually-hidden').removeAttr('style');
        });
    });
}

function mobileNav() {
    $('.utility-nav, .secondary-nav').addClass('visually-hidden').removeClass('visually-hidden-off');
    $('.nav-launch').off('click').click(function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$('.main-nav').hasClass('mobile-nav-open')) {
            $('.main-nav').addClass('mobile-nav-open');
            $('.main-nav__list').css({ 'height': 'auto', 'max-height': '1000px' });
            $('.utility-nav').removeClass('visually-hidden').addClass('visually-hidden-off');
        }
        else {
            $('.main-nav').removeClass('mobile-nav-open');
            $('.main-nav__list').css({ 'height': '0', 'max-height': '0' });
            $('.secondary-expander').removeClass('secondary-nav-open').html('+');
            $('.secondary-nav').removeClass('visually-hidden').addClass('visually-hidden');
            $('.utility-nav').removeClass('visually-hidden-off').addClass('visually-hidden');
        }
    });
}

function mobileSecondaryNav() {
    $('.has-secondary').unbind("mouseenter mouseleave");
    $('.secondary-expander').unbind("click").on("click", (function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (!$(this).hasClass('secondary-nav-open')) {
            $('.secondary-expander').removeClass('secondary-nav-open').html('-');
            $(this).addClass('secondary-nav-open').siblings('.secondary-nav').removeClass('visually-hidden');;
            $('.secondary-nav').removeClass('visually-hidden').css({ 'height': 'auto', 'max-height': '1000px' });
        }
        else {
            $('.secondary-expander').removeClass('secondary-nav-open').html('+');
            $('.secondary-nav').addClass('visually-hidden').removeAttr('style');
        }
    })
   );
}