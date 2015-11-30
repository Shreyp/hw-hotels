$(document).ready(function() {
    $("#startingDate").Zebra_DatePicker({
    format: "m/d/y", direction: 1
  });
    $("#endingDate").Zebra_DatePicker({
    format: "m/d/y", direction: 1

  });
    $("startingDate").attr("placeholder",Date());
});

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

var months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

var mmN = parseInt(mm);

today = months[mmN-1]+' '+dd;
$("#checkin").text(today);

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var monthN = parseInt(month);

$("#checkout").text(( months[monthN-1] + " " + day));
