$(document).ready(function() {
  //var test = [1,2,3];
  //console.log((jQuery.inArray(4, test)));

  $('#5starCheckbox').click(function() {

    if ($("#5starCheckbox").is(":checked")) {
        pageObject.stars[5] = true;
        hotelSort();

    } else {
        pageObject.stars[5] = false;
        hotelSort();
    }
    
}); 

  $('#4starCheckbox').click(function() {

    if ($("#4starCheckbox").is(":checked")) {
        pageObject.stars[4] = true;
        hotelSort();


    } else {
        pageObject.stars[4] = false;
        hotelSort();
    }
    
}); 

    $('#3starCheckbox').click(function() {

    if ($("#3starCheckbox").is(":checked")) {
        pageObject.stars[3] = true;
        hotelSort();

    } else {
        pageObject.stars[3] = false;
        hotelSort();
        }
    
}); 

      $('#2starCheckbox').click(function() {

    if ($("#2starCheckbox").is(":checked")) {
        pageObject.stars[2] = true;
        hotelSort();

    } else {
        pageObject.stars[2] = false;
        hotelSort();
        }
     
    
}); 

});