document.addEventListener('DOMContentLoaded', () => {

  const initSlider = () => {
    const menuLinks = document.querySelectorAll('.rinit-slider-menu > li');

    const parameters = {
      zoom: true,
      direction: 'horizontal',
      slidePerView: 1,
      slidePerCount: 1,
      spaceBetween: 30,
      centeredSlides: true,
      autoHeight: true,
      loop: false,

      // pagination: {
      //   el: '.rinit-slider__pagination',
      //   type: 'fraction',
      // },

      navigation: {
        prevEl: '.rinit-slider__button-prev',
        nextEl: '.rinit-slider__button-next',
        disabledClass: 'disabled'
      },
    }

    const swiper = new Swiper('.rinit-slider', parameters);

    menuLinks.forEach((link, linkIndex) => {
      link.addEventListener('click', () => {
        swiper.slideTo(linkIndex + 1, 1000);
      });
    });
  }

  initSlider();
});