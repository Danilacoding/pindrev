let mySwiper = new Swiper(".swiper-container", {
    spaceBetween: -80,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
        },
    },
});