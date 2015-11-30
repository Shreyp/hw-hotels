$(document).ready(function() {
  $("#searchByName").submit(function(event) {
    event.preventDefault();
    var searchForVal = $("#searchFor").val().toLowerCase();

    $(".hotel-name").each(function(index, el) {
      $(this).parentsUntil(".hotel-item").css('display', 'block');
      hotelSort();
    });

    if (searchForVal === "") {
      $(".hotel-name").each(function(index, el) {
      $(this).parentsUntil(".hotel-item").css('display', 'block');
      hotelSort();
    });
      $("#searchFor").val("");
      return;
    }



    $(".hotel-name").each(function(index, el) {
      var i = 0;
      while (i < searchForVal.length) {
        if (searchForVal[i] === $(this).text()[i].toLowerCase()){
          i++
        } else {
          $(this).parentsUntil(".hotel-item").fadeOut(1000);
          break;
        }
      }
      
    });
    $("#searchFor").val("");

  });
});