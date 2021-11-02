new Swiper('.slider-image')

const swiper = new Swiper('.image-slider',{
    navigation: {
        nextEl:'.swiper-button-next',
        prevEl:'.swiper-button-prev '
    },
    autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    },
    loop: true,
    speed: 300,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
