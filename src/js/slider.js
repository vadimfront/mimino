const $ = require("jquery");
import Swiper, { Navigation } from "swiper";

$(function () {
  const swiper = new Swiper(".swiper", {
    // Optional parameters
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  const swiperHero = new Swiper(".hero-swiper", {
    modules: [Navigation],
    direction: "horizontal",
    slidesPerView: 1,
    speed: 1000,
    parallax: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
