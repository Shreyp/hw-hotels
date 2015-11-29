$(document).ready(function() {

  $(".delete-hotel").on("click", function() {
    $(this).closest('.hotel-item').remove();
    $(this).closest('.modal').modal('hide');
    $('.modal-backdrop').remove();
  });

});