import $ from "jquery";

$(function () {
  function openModal(modalId) {
    $(modalId).addClass("active_modal");
  }

  function closeModal() {
    $(".modal, .modal_close").removeClass("active_modal");
  }

  $(".open_modal").on("click", function () {
    const modalId = $(this).data("modal-id");
    openModal(modalId);
  });

  $(".modal, .modal_close").on("click", function (e) {
    const target = e.target;
    if ($(target).hasClass("modal") || $(target).hasClass("modal_close")) {
      closeModal();
    }
  });
});
