$(document).ready(function() {

  $(".delete-hotel").on("click", function() {
    $(this).closest(".hotel-item").remove();
    $(".modal-backdrop").remove();
  });

});