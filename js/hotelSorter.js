function hotelSort () {
  var local = pageObject.location.slice(1);

  $(".hotel-item").each(function () {


    if ($(this).hasClass(local) === false) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.stars[5] === false && $(this).hasClass('star5')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.stars[4] === false && $(this).hasClass('star4')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.stars[3] === false && $(this).hasClass('star3')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.stars[2] === false && $(this).hasClass('star2')) {
     $(this).fadeOut("1000");
    }

     else if (pageObject.reviews.Po === false && $(this).hasClass('Po')) {
     $(this).fadeOut("1000");
    }

     else if (pageObject.reviews.Me === false && $(this).hasClass('Me')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.reviews.Ok === false && $(this).hasClass('Ok')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.reviews.Go === false && $(this).hasClass('Go')) {
      $(this).fadeOut("1000");
    }

     else if (pageObject.reviews.Ex === false && $(this).hasClass('Ex')) {
      $(this).fadeOut("1000");
    } 

     else if (minPrice > ( $(this).find(".hotel-price").text() ) ) {
      $(this).fadeOut("1000");
    } 
     else if (maxPrice < ( $(this).find(".hotel-price").text() ) ) {
      $(this).fadeOut("1000");
    } 

     else {
      $(this).fadeIn("1000");
    }

  });
}