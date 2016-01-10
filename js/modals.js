$(document).ready(function () {

  $(".delete-hotel").on("click", function () {
      if (confirm("Are you sure?")) {
      $(this).parent().parent().parent().hide;
      $('body').removeClass('modal-open');
      $('.modal-backdrop').remove();
      $(this).closest(".hotel-item").remove();
      $(".modal-backdrop").remove();
    }
  });

});