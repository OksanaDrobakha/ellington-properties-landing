new Swiper('.lifestyle-swiper', {
  // configure Swiper to use modules
  pagination: {
    el: '.swiper-pagination-lifestyle',
    clickable: true,
    dynamicBullets: true,
  },
  loop: true,

  // hashNavigation: {
  //   watchState: true,
  // },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  watchSlidesProgress: true,
  zoom: {
    maxRatio: 3,
    minRatio: 1,
  },
});
