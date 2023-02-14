const $ = require("jquery");

$(function () {
  $("#carousel_left").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    centerPadding: "205px",
    centerMode: true,
    prevArrow: $(".carousel_left_arrow .prev"),
    nextArrow: $(".carousel_left_arrow .next"),
  });
  $("#carousel_right").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    variableWidth: true,
    centerPadding: "205px",
    prevArrow: $(".carousel_right_arrow > .prev"),
    nextArrow: $(".carousel_right_arrow > .next"),
  });
});
