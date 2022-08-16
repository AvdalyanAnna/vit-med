var swiper = new Swiper(".doctors__list", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".doctors .next",
    prevEl: ".doctors .prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var swiper = new Swiper(".feedback__list", {
  slidesPerView: 3,
  spaceBetween: 24,
  navigation: {
    nextEl: ".feedback__list .next",
    prevEl: ".feedback__list .prev",
  },
});
