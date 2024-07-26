const swiper = document.querySelector(".mySwiper");

swiper=new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    depth: 500,
    modifer: 1,
    slidesShadows: true,
    rotate: 0,
    stretch: 0,
  },
});
