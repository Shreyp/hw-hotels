$(document).ready(function() {
    $("#startDate").Zebra_DatePicker({
    format: "m/d/y"
  });
    $("#endDate").Zebra_DatePicker({
    format: "m/d/y"
  });
    $("startDate").attr("placeholder",Date());
});


  $(".btn-success").click(function() {
    var hotelLoc = $("#hotelLocation").val();
    if (hotelLoc === "") {
      alert("Please Choose a Hotel Location");
    } else {
      var chkDate = $("#startDate").val();
      if (chkDate === "") {
        alert("Please Choose a Check-in Date");
      } else {
        var outDate = $("#endDate").val();
        if (outDate === "") {
          alert("Please Choose a Check-out Date");
        } else {
          window.location.href = "comparison.html";
        };
      };
    };
  });


$( document.body ).on( 'click', '.dropdown-menu li', function( event ) {
 
   var $target = $( event.currentTarget );
 
   $target.closest( '.btn-group' )
      .find( '[data-bind="label"]' ).text( $target.text() )
         .end()
      .children( '.dropdown-toggle' ).dropdown( 'toggle' );
 
   return false;

});