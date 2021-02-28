
var swiper = new window.Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,

    },
    breakpoints: {
        670: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }
});

export default swiper;