var swiper = new Swiper(".slide-content", {
  slidesPerView: 6,
  spaceBetween: 15,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 1000,  // Delay between transitions in milliseconds
    disableOnInteraction: false, // Keeps autoplay running even after user interactions
  },
  breakpoints: {
    0: {
        slidesPerView: 1,
    },
    260: {
        slidesPerView: 2,
    },
    520: {
        slidesPerView: 3,
    },
    600: {
        slidesPerView: 4,
    },
    950: {
        slidesPerView: 5,
    },
    1200: {
        slidesPerView: 6,
    },
  }
});
