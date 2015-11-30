function hotelSort () {
  var local = pageObject.location.slice(1);
  var $zdp = $('#startingDate').data('Zebra_DatePicker');

  
 

  $(".hotel-item").each(function(index) {


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

 /* for (var i = 0; i< hiddenHotels.length; i++) {
    hiddenHotels[i].fadeOut("500");

  };

    for (var i = 0; i< shownHotels.length; i++) {
      shownHotels[i].fadeIn("500");
  };
    
    
   })

   for (var i = 0; i< shownHotels.length; i++) { 
     if ($(this).hasClass(local) === false) {
      hiddenHotels.push(($this));
      delete shownHotels[i];
     }
     if (pageObject.stars[5] === false && $(this).hasClass('star5')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.stars[4] === false && $(this).hasClass('star4')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.stars[3] === false && $(this).hasClass('star3')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.stars[2] === false && $(this).hasClass('star2')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.stars[1] === false && $(this).hasClass('star1')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
      if (pageObject.reviews.Po === false && $(this).hasClass('Po')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.reviews.Ok === false && $(this).hasClass('Ok')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.reviews.Go === false && $(this).hasClass('Go')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
     if (pageObject.reviews.Ex === false && $(this).hasClass('Ex')) {
      hiddenHotels.push(shownHotels[i]);
      delete shownHotels[i];
     }
   };

  for (var i = 0; i< hiddenHotels.length; i++) {
    hiddenHotels[i].fadeOut("500");

  };

    for (var i = 0; i< shownHotels.length; i++) {
      shownHotels[i].fadeIn("500");
  };
    

}; */