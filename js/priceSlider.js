$(document).ready(function () {
   $("#slider-range").slider({
      range: true,
      min: 35,
      max: 200,
      values: [35, 200],
      slide: function (ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        minPrice = ui.values[0];
        maxPrice = ui.values[1];
      }


    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
    $("#slider-range").on("slidestop", function (ui) {
      hotelSort();
    });
});