$(document).ready(function() {

  $('#ExCheckbox').click(function() {
 
    if ($(this).is(":checked")) {
      pageObject.reviews.Go = true;
      revShower("Ex");
      
    } else {
      pageObject.reviews.Ex = false;
      revHider("Ex");
   
};
    
}); 
   $('#GoCheckbox').click(function() {

    if ($(this).is(":checked")) {
      pageObject.reviews.Go = true;
      revShower("Go");
      
    } else {
      pageObject.reviews.Go = false;
      revHider("Go");
    }

    
}); 

  $('#OkCheckbox').click(function() {

    if ($(this).is(":checked")) {
      pageObject.reviews.Ex = true;
      revShower("Ok");
      
    } else {
      pageObject.reviews.Ex = false;
      revHider("Ok");
    }

    
}); 
   $('#MeCheckbox').click(function() {

    if ($(this).is(":checked")) {
      pageObject.reviews.Go = true;
      revShower("Me");
      
    } else {
      pageObject.reviews.Go = false;
      revHider("Me");
    }

    
}); 
    $('#PoCheckbox').click(function() {

    if ($(this).is(":checked")) {
      pageObject.reviews.Go = true;
      revShower("Po");
      
    } else {
      pageObject.reviews.Go = false;
      revHider("Po");
    }

    
}); 



});