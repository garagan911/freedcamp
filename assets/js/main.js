"use strict";

console.log('main')

let blockCheckbox = $('.project-applications_block')
let subMenu = $('.sub-menu')
let menuContentProducts = $('.menu.products')
let menuContentFeatures = $('.menu.features')

subMenu.click(function() {
    if( $(this).hasClass('products')){
        $(this).toggleClass('active')
        $('.sub-menu.features').removeClass('active')
        menuContentProducts.toggleClass('active')
        menuContentFeatures.removeClass('active')
        $('header.header').addClass('active')
    }
    if( $(this).hasClass('features')){
        $(this).toggleClass('active')
        $('.sub-menu.products').removeClass('active')
        menuContentFeatures.toggleClass('active')
        menuContentProducts.removeClass('active')
        $('header.header').addClass('active')
    }
})
$('main').click(function (){
    $('.sub-menu.features').removeClass('active')
    $('.sub-menu.products').removeClass('active')
    menuContentProducts.removeClass('active')
    menuContentFeatures.removeClass('active')
    $('header.header').removeClass('active')
})




$('input.chkbx-toggle:checkbox').change(function(){
    if($(this).is(":checked")) {
        $(this).parent().parent().addClass("menuitemshow");
    } else {
        blockCheckbox.removeClass("menuitemshow");
    }
});

var header = $('.header'),
    scrollPrev = 0;


// mobile menu

let mobMenu = $('.mob-menu');
let headerNav = $('.header-nav');
let body = $('body');

mobMenu.click(function (){
    if(body.hasClass('hidden')) {
        body.removeClass('hidden')
    } else {
        body.addClass('hidden')
    }

    if (headerNav.hasClass('show')){
        headerNav.removeClass('show')
        menuContentFeatures.removeClass('active')
        menuContentProducts.removeClass('active')
        $('header.header').removeClass('active')
        subMenu.removeClass('active')
    } else {
        headerNav.addClass('show')
    }
    if (mobMenu.hasClass('active')) {
        mobMenu.removeClass('active')
    } else {
        mobMenu.addClass('active')
    }
    if (header.hasClass('mobStyle')) {
        header.removeClass('mobStyle')
    } else {
        header.addClass('mobStyle')
    }
})

$(window).scroll(function() {
    var scrolled = $(window).scrollTop();

    if ( scrolled > 30 && scrolled > scrollPrev ) {
        header.addClass('fixed');
    } else {
        header.removeClass('fixed');
        header.addClass('default');
    }

    if ( $(this).scrollTop() > 30 && header.hasClass("fixed") ){
        header.removeClass("default").addClass("fixed");
    } else if($(this).scrollTop() <= 30 && header.hasClass("default")) {
        header.removeClass("default").removeClass("fixed");
    }

    scrollPrev = scrolled;
});

// tasks page switcher start
let accordionWrap = $('.block_text-wrap');

accordionWrap.click(function () {
    if(accordionWrap.hasClass('active')) {
        accordionWrap.removeClass('active')
    }
    if($(this).hasClass('active')) {
        console.log('has')
        $(this).removeClass('active')
    } else {
        console.log('!has')
        $(this).addClass('active')
    }
})
// tasks page switcher end

let buttonLogin = $('#login');
    let wrapperLogin = $('.menu-login');

buttonLogin.click(() => {
    if(wrapperLogin.hasClass('show')){
        wrapperLogin.removeClass('show');
    } else {
        wrapperLogin.addClass('show');
    }
})

//slick slider

$('.featured_slider-fluid').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 2075,
            settings: {
                slidesToShow: 7,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1815,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1675,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1380,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

$('.blocks_slider').slick({
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 540,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});


// let jsonAnimRightRed2Cf7 = document.querySelector('.section-top_pic');
// let dataRightRed = 'assets/animation/Header.json';
//
// let btnAnimRightRed2Cf7 = {
//     name: 'dataRightRed',
//     container: jsonAnimRightRed2Cf7,
//     renderer: 'svg',
//     autoplay: true,
//     imagePreloader: '',
//     loop: true,
//     rendererSettings: {
//         progressiveLoad: true
//     },
//     path: dataRightRed
// };
//
// bodymovin.loadAnimation(btnAnimRightRed2Cf7)
