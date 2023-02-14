const $ = require("jquery");

$(function () {
  $("#carousel_left").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    prevArrow: $(".carousel_left_arrow .prev"),
    nextArrow: $(".carousel_left_arrow .next"),
  });
  $("#carousel_right").slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    prevArrow: $(".carousel_right_arrow > .prev"),
    nextArrow: $(".carousel_right_arrow > .next"),
  });
});
