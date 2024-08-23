(() => {
  const sliderHero = document.getElementsByClassName('head-swiper')[0];
  const swiperHero = new Swiper(sliderHero, {
    speed: 1500,
    autoplay: {
      delay: 2000,
    },
    slidesPerView: 1,
    loop: true,
  });

  const sliderGallery = document.getElementsByClassName('gallery__swiper')[0];
  const swiperGallery = new Swiper(sliderGallery, {
    speed: 1500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,

    breakpoints: {
      1700: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1200: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 34,
      },

      679: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 38,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 38,
      },
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });

  const sliderEvents = document.getElementsByClassName('events__slider')[0];
  const swiperEvents = new Swiper(sliderEvents, {
    speed: 1500,
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 25,

    breakpoints: {
      1400: {
        slidesPerView: 3,
        spaceBetween: 50,
      },

      950: {
        slidesPerView: 3,
        spaceBetween: 34,
      },

      678: {
        slidesPerView: 2,
        spaceBetween: 25,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },

    navigation: {
      nextEl: document.querySelector('.swiper-button-next-2'),
      prevEl: document.querySelector('.swiper-button-prev-2'),
    },

    pagination: {
      el: '.swiper-pagination-events',
      type: 'bullets',
    },
  });

  const sliderProjects = document.getElementsByClassName('projects__swiper')[0];
  const swiperProjects = new Swiper(sliderProjects, {
    speed: 1500,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 38,

    breakpoints: {
      1400: {
        spaceBetween: 50,
        slidesPerView: 3,
        slidesPerGroup: 3,
      },

      1125: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 38,
      },

      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },

      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
    },

    navigation: {
      nextEl: document.querySelector('.swiper-button-next-3'),
      prevEl: document.querySelector('.swiper-button-prev-3'),
    },
  });
})();
