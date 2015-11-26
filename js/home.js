$(document).ready(function() {
    $("#startDate").Zebra_DatePicker({
    format: "m/d/y"
  });
    $("#endDate").Zebra_DatePicker({
    format: "m/d/y"
  });
    $("startDate").attr("placeholder",Date());
});


$(".btn-success").on("click", function() { 
  window.location.href = "http://stackoverflow.com";
  console.log(window.location.href)
});


$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
 
   var $target = $( event.currentTarget );
 
   $target.closest( '.btn-group' )
      .find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;

});