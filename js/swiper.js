document.addEventListener("DOMContentLoaded", function () {
    const swipers = document.querySelectorAll('.swiper');

    swipers.forEach(function (swiperContainer, index) {
        if (swiperContainer.classList.contains('mobileSwiper')) {
            var swiperMobile = new Swiper(swiperContainer, {
                slidesPerView: 1.4,
                spaceBetween: 30,
                centeredSlides: true,
            });
        } else {
            var swiper = new Swiper(swiperContainer, {
                // Optional parameters
                direction: 'horizontal',
                loop: true,

                pagination: {
                    el: `.swiper-pagination${index + 1}`,
                    clickable: true,
                },

                navigation: {
                    nextEl: `.swiper-button-next${index + 1}`,
                    prevEl: `.swiper-button-prev${index + 1}`,
                },
            });
        }
    });
});
