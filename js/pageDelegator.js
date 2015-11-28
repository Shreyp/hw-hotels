
    function revHider(tag) {
    for (var i = 0; i < visibleItems.length; i++) {
    if (visibleItems[i].hasClass(tag)) {
      //visibleItems[i].css('display', 'none');
      visibleItems[i].fadeOut('500');
    
    };
  };
};


    function revShower(tag) {
    for (var i = 0; i < visibleItems.length; i++) {
    if (visibleItems[i].hasClass(tag)) {
      console.log("hi");
      visibleItems[i].fadeIn('500');
    
    };
  };
};
  
  
