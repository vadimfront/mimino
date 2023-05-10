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
});
