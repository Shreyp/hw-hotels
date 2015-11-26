$( document ).ready(function() {
    $("#setLocalNY").click(function(event) {
      event.preventDefault();
      $(".currentLocation").text("New York, NY");

           $( ".NY" ).each(function( index ) {
          $(this).css("display", "block");
          });

        $( ".WA" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".TX" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".Chi" ).each(function( index ) {
          $(this).css("display", "none");
          });

    });

    $("#setLocalWA").click(function(event) {
      event.preventDefault();
      $(".currentLocation").text("Washington, DC");

      $( ".WA" ).each(function( index ) {
          $(this).css("display", "block");
          });

        $( ".NY" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".TX" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".Chi" ).each(function( index ) {
          $(this).css("display", "none");
          });
    });

    $("#setLocalTX").click(function(event) {
      event.preventDefault();
      $(".currentLocation").text("Dallas, Texas");

      $( ".TX" ).each(function( index ) {
          $(this).css("display", "block");
          });

        $( ".NY" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".WA" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".Chi" ).each(function( index ) {
          $(this).css("display", "none");
          });

    });

     $("#setLocalChi").click(function(event) {
      event.preventDefault();
      $(".currentLocation").text("Chicago, Illinois");

      $( ".Chi" ).each(function( index ) {
          $(this).css("display", "block");
          });

        $( ".NY" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".TX" ).each(function( index ) {
          $(this).css("display", "none");
          });

        $( ".WA" ).each(function( index ) {
          $(this).css("display", "none");
          });

    });

});