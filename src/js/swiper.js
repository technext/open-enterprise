
var swiper = new window.Swiper('.swiper-container', {
    slidesPerView: 1,

    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,

    },
    breakpoints: {
        576: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // 1024: {
        //   slidesPerView: 2,
        //   spaceBetween: 50,
        // },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
});

export default swiper;