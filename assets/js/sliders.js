$('.pricing_slider').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
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
    ]
});

$('.blocks_slider-management').slick({
    speed: 300,
    slidesToShow: 3,
    prevArrow: $('.prev-m'),
    nextArrow: $('.next-m'),
    dots: false,
    focusOnSelect: true,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                infinite: true,
                // dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
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
    ]
});

$('.slider-clean-workflows').slick({
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    prevArrow: $('.prev2'),
    nextArrow: $('.next2'),
    centerMode: true,
    infinite: true,
    dots: false,
    variableWidth: true,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                // dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
    ]
});
