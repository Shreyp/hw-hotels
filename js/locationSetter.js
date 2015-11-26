$(document).ready(function() {
  $("#setLocalNY").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("New York, NY");
    pageObject.location = ".NY";

    $(".NY").each(function(index) {
      if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".DC").each(function(index) {
      $(this).css("display", "none");
    });

    $(".TX").each(function(index) {
      $(this).css("display", "none");
    });

    $(".Chi").each(function(index) {
      $(this).css("display", "none");
    });


    $(".LA").each(function(index) {
      $(this).css("display", "none");
    });

  });

  $("#setLocalWA").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("Washington, DC");
    pageObject.location = ".DC";

    $(".DC").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".NY").each(function(index) {
      $(this).css("display", "none");
    });

    $(".TX").each(function(index) {
      $(this).css("display", "none");
    });

    $(".Chi").each(function(index) {
      $(this).css("display", "none");
    });

    $(".LA").each(function(index) {
      $(this).css("display", "none");
    });
  });

  $("#setLocalTX").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("Dallas, Texas");
    pageObject.location = ".TX";

    $(".TX").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".NY").each(function(index) {
      $(this).css("display", "none");
    });

    $(".DC").each(function(index) {
      $(this).css("display", "none");
    });

    $(".Chi").each(function(index) {
      $(this).css("display", "none");
    });

    $(".LA").each(function(index) {
      $(this).css("display", "none");
    });

  });

  $("#setLocalChi").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("Chicago, Illinois");
    pageObject.location = ".Chi";

    $(".Chi").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".NY").each(function(index) {
      $(this).css("display", "none");
    });

    $(".TX").each(function(index) {
      $(this).css("display", "none");
    });

    $(".DC").each(function(index) {
      $(this).css("display", "none");
    });

    $(".LA").each(function(index) {
      $(this).css("display", "none");
    });

  });

  $("#setLocalLA").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("Los Angeles, CA");
    pageObject.location = ".LA";

    $(".LA").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".NY").each(function(index) {
      $(this).css("display", "none");
    });

    $(".TX").each(function(index) {
      $(this).css("display", "none");
    });

    $(".DC").each(function(index) {
      $(this).css("display", "none");
    });

    $(".Chi").each(function(index) {
      $(this).css("display", "none");
    });

  });
  $("#setLocalANY").click(function(event) {
    event.preventDefault();
    $(".currentLocation").text("Any Location");
    pageObject.location = ".ANY";

    $(".LA").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".NY").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".TX").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".DC").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

    $(".Chi").each(function(index) {
       if ($(this).hasClass('star2') && pageObject.stars[star2] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star3') && pageObject.stars[star3] == true){
      $(this).css("display", "block");
    }
     if ($(this).hasClass('star4') && pageObject.stars[star4] == true){
      $(this).css("display", "block");
    }
    if ($(this).hasClass('star5') && pageObject.stars[star5] == true){
      $(this).css("display", "block");
    }
    });

  });

});