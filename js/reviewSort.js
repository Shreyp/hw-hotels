$(document).ready(function () {

  $('#ExCheckbox').click(function () {

    if ($(this).is(":checked")) {
      pageObject.reviews.Ex = true;
      hotelSort();
    } else {
      pageObject.reviews.Ex = false;
      hotelSort();
    }
  }); 
  $('#GoCheckbox').click(function () {

    if ($(this).is(":checked")) {
      pageObject.reviews.Go = true;
      hotelSort();
    } else {
      pageObject.reviews.Go = false;
      hotelSort();
    }
  });

  $('#OkCheckbox').click(function () {

    if ($(this).is(":checked")) {
      pageObject.reviews.Ok = true;
      hotelSort();
    } else {
      pageObject.reviews.Ok = false;
      hotelSort();
    }
  });

  $('#MeCheckbox').click(function () {

    if ($(this).is(":checked")) {
      pageObject.reviews.Me = true;
      hotelSort();
    } else {
      pageObject.reviews.Me = false;
      hotelSort();
    }
  });

  $('#PoCheckbox').click(function () {

    if ($(this).is(":checked")) {
      pageObject.reviews.Po = true;
      hotelSort();
    } else {
      pageObject.reviews.Po = false;
      hotelSort();
    }
  });
});