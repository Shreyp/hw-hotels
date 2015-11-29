$(document).ready(function() {

  $(".delete-hotel").on("click", function() {
    if(confirm("Are you sure?")){
      $(this).closest(".hotel-item").remove();
      $(".modal-backdrop").remove();
    }
  });

});