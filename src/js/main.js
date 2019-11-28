"use strict";
(function ($) {
    $('.header__burger').click(function (e) {
        e.preventDefault();
        $('.header__menu').toggleClass('header__open');
    });
    $('.header__close').click(function (e) {
        e.preventDefault();
        $('.header__menu').removeClass('header__open');
    });
    $('a[href^="#"]').click(function () {
        var target = $(this).attr('href');
        $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
        return false;
    });
})(jQuery);
$(window).scroll(function () {
    if (window.pageYOffset >= 600) {
        $(".header__hidden").addClass("header__heading--fixed");
    }
    else {
        $(".header__hidden").removeClass("header__heading--fixed");
    }
});
$(document).ready(function () {
    $(".dots li button").each(function () {
        $(this).text("0" + $(this).text())
    });

});

$('.header__slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "div",
    autoplay: false,
    infinite: true,
    speed: 3000,
    centerPadding: 0,
    adaptiveHeight: true,
    dotsClass: ' slick-dots header__dots dots',

});
$('.services__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "div",
    autoplay: false,
    infinite: true,
    centerPadding: '20px',
    adaptiveHeight: true,
    dotsClass: ' slick-dots services__dots dots',
    prevArrow: "<div class=\"services__prev services__arrow\" ></div>",
    nextArrow: "<div class=\"services__next services__arrow\" ></div>",

});

$('.reviews__slider').slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slide: "div",
    autoplay: false,
    infinite: true,
    centerPadding: '20px',
    adaptiveHeight: true,
    dotsClass: ' slick-dots reviews__dots dots',
    prevArrow: "<div class=\"reviews__prev reviews__arrow\" ></div>",
    nextArrow: "<div class=\"reviews__next reviews__arrow\" ></div>",

});

$(document).ready(function () {

    $('.about__item').click(function () {
        var tab_id = $(this).attr('data-tab');

        $('.about__item').removeClass('about__item--active');
        $('.about__tabs').removeClass('about__tabs--current');

        $(this).addClass('about__item--active');
        $("#" + tab_id).addClass('about__tabs--current');
    })

});
$(".modal").each(function () {
    $(this).wrap('<div class="overlay"></div>')
});

$(".open-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).parents(".overlay").addClass("open");
    setTimeout(function () {
        $(modal).addClass("open");
    }, 350);

    $(document).on('click', function (e) {
        var target = $(e.target);

        if ($(target).hasClass("overlay")) {
            $(target).find(".modal").each(function () {
                $(this).removeClass("open");
            });
            setTimeout(function () {
                $(target).removeClass("open");
            }, 350);
        }

    });

});

$(".close-modal").on('click', function (e) {
    e.preventDefault();
    e.stopImmediatePropagation;

    var $this = $(this),
        modal = $($this).data("modal");

    $(modal).removeClass("open");
    setTimeout(function () {
        $(modal).parents(".overlay").removeClass("open");
    }, 350);

});
$(".modal__thank").on('click', function (e) {
    $('#modal-tel').removeClass('open');
    $('#modal-tel').parents(".overlay").removeClass("open");
    $('#modal-quest').removeClass('open');
    $('#modal-quest').parents(".overlay").removeClass("open");
    $('#modal-org').removeClass('open');
    $('#modal-org').parents(".overlay").removeClass("open");
    $('#modal-koord').removeClass('open');
    $('#modal-koord').parents(".overlay").removeClass("open");
    $('#modal-thanks').addClass('open');

});