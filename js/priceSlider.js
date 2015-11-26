$(document).ready(function(){
   $( "#slider-range" ).slider({
      range: true,
      min: 35,
      max: 200,
      values: [ 35, 200 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});
var values = $( ".selector" ).slider( "option", "values" );