$(document).ready(function() {

  $(".btn-danger").on("click", function() {
  modal = "#" + $(this).parent().parent().parent().parent().attr('id');
  $(modal).hide();
  $('body').removeClass('modal-open');
  $('.modal-backdrop').remove();
  $(this).parentsUntil(".ANY").remove();
    });

});