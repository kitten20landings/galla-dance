// main page start
const burgerMenuStripes = document.querySelector('.menu__stripes'),
    burgerMenuStripesActive = document.querySelector('.menu__stripes_active'),
    menuContent = document.querySelector('.menu__content'),
    menuMobile = document.querySelector('.menu-mobile'),
    menu = document.querySelector('.menu'),

    preloader = document.querySelector('.preloader');

document.body.onload = function(){
    preloader.classList.add('preloader_done');
}

burgerMenuStripes.addEventListener('click', function (e) {
    e.stopPropagation();

    burgerMenuStripes.classList.toggle('menu__stripes_active');
    menuContent.classList.toggle('menu__content_active');
})

const gallerySwiper = new Swiper(".main-page__gallery", {
    effect: "coverflow",
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 25,
        depth: 125,
        modifier: 2,
        slideShadows: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const mobileGallerySwiper = new Swiper(".main-page__gallery_mobile", {
    loop: true,
    slidesPerView: "1",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
//   main page end

// pagination swiper
var paginationSwiper = new Swiper(".paginationSwiper", {
    pagination: {
        el: '.swiper-pagination',
        type: 'custom',
        renderCustom: function (swiper, current, total) {
            return ('0' + current).slice(-2) + '/' + ('0' + total).slice(-2);
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    slidesPerView: '1',
    loop: true,
    spaceBetween: 0,
    renderCustom: function (swiper, current, total) {
        return current + '/' + total;
    },
});
// pagination swiper

// classes start
var classesSwiper = new Swiper(".numClassesSwiper", {
    breakpoints: {
        310: {
            slidesPerView: '1',
        },
        640: {
            slidesPerView: '1',
        },
        850: {
            slidesPerView: '1',
        },

    },
});
// classes end