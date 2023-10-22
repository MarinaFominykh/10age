// инициализация слайдера:
const swiper = new Swiper('.swiper', {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  centeredSlides: false,
  speed: 800,
  simulateTouch: true,
 
});
