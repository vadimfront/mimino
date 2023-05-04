const $ = require("jquery");
import Swiper, { Navigation } from "swiper";

$(function () {
  // const swiperLeft = new Swiper(".left_side .swiper", {
  //   // Optional parameters
  //   modules: [Navigation],
  //   slidesPerView: "auto",
  //   slidesPerGroup: 1,
  //   spaceBetween: 0,
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //     enabled: true,
  //   },
  // });
  const swiperRight = new Swiper(".swiper", {
    // Optional parameters
    modules: [Navigation],
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
      enabled: true,
    },
  });
});
