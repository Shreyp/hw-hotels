$(document).ready(function() {

  $("#setLocalNY").click(function (event) {
    event.preventDefault();
    $(".currentLocation").text("New York, NY");
    pageObject.location = ".NY";
    hotelSort();
  });

  $("#nyOnly").click(function (event) {
    if ($(this).is(":checked")) {
    $(".currentLocation").text("New York, NY");
    pageObject.location = ".NY";
    hotelSort();
    } else {
    $(".currentLocation").text("Any Location");
    pageObject.location = ".ANY";
    hotelSort();
    }
  });

  $("#setLocalWA").click(function (event) {
    event.preventDefault();
     $("#nyOnly").prop("checked", false);
    $(".currentLocation").text("Washington, DC");
    pageObject.location = ".DC";
    hotelSort();
  });

  $("#setLocalTX").click(function (event) {
    event.preventDefault();
     $("#nyOnly").prop("checked", false);
    $(".currentLocation").text("Dallas, Texas");
    pageObject.location = ".TX";
    hotelSort();

  });

  $("#setLocalChi").click(function (event) {
    event.preventDefault();
     $("#nyOnly").prop("checked", false);
    $(".currentLocation").text("Chicago, Illinois");
    pageObject.location = ".Chi";
    hotelSort();

  });

  $("#setLocalLA").click(function (event) {
    event.preventDefault();
     $("#nyOnly").prop("checked", false);
    $(".currentLocation").text("Los Angeles, CA");
    pageObject.location = ".LA";
    hotelSort();

  });
  $("#setLocalANY").click(function (event) {
    event.preventDefault();
    $("#nyOnly").prop("checked", false);
    $(".currentLocation").text("Any Location");
    pageObject.location = ".ANY";
    hotelSort();
    });

  $("#setDist5").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("5 miles");
  });

  $("#setDist10").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("10 miles");
  });

  $("#setDist15").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("15 miles");
  });

  $("#setDist20").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("20 miles");
  });

  $("#setDist25").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("25 miles");
  });

  $("#setDist30").click(function (event) {
    event.preventDefault();
    $(".currentDist").text("30 miles");
  });

});