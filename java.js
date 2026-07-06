var swiper = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

var swiper = new Swiper(".mySwiper2", {
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });

var swiper = new Swiper('.mySwiper3', {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper('.mySwiper4', {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: swiper,
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
    },
      });

var swiper = new Swiper('.mySwiper5', {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
    },
      });