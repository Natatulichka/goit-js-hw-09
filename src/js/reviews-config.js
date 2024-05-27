import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
    speed: 1000,
    // effect: "cube",
    // effect: 'fade',
    // fadeEffect: {
    //     crossFade: true
    // },
    slidesPerView: 1,
    spaceBetween: 20,
    mousewheel: {
        invert: false,
        sensitivity: 1,
    },
    // If we need pagination
    pagination: {
        el: '.reviews .swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<li class="' + className + '"></li>';
        },
    },
    autoplay: {
        delay: 4000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.reviews .swiper-button-next',
        prevEl: '.reviews .swiper-button-prev',
    },

    // And if we need scrollbar
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    // },
    breakpoints: {
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 30
        },
        // when window width is >= 640px
        1158: {
            slidesPerView: 3,
            spaceBetween: 40
        }
    },

});