$(document).ready(function() {
    $("#startingDate").Zebra_DatePicker({
    format: "m/d/y", direction: 1, onSelect: function() {
      dateChanger();

    }


  });
    $("#endingDate").Zebra_DatePicker({
    format: "m/d/y", direction: 1, onSelect: function() {
      dateChanger();

    }

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



var mmN = parseInt(mm);

today = months[mmN-1]+' '+dd;
$("#checkin").text(today);

var currentDate = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
var day = currentDate.getDate();
var month = currentDate.getMonth() + 1;
var year = currentDate.getFullYear();
var monthN = parseInt(month);

$("#checkout").text(( months[monthN-1] + " " + day));

function dateChanger () {
  if ($("#startingDate").val() !== "") {
    var startM = $("#startingDate").val().slice(0,2);
    var startMN = months[parseInt(startM) - 1];
    var startD = startM = $("#startingDate").val().slice(3,5);
    var startDN = parseInt(startD);
    var starting = startMN + " " + startDN;
     $("#checkin").text(starting);
  }
  if ($("#endingDate").val() !== "") {
    var endM = $("#endingDate").val().slice(0,2);
    var endMN = months[parseInt(endM) - 1];
    var endD = endM = $("#endingDate").val().slice(3,5);
    var endDN = parseInt(endD);
    var ending = endMN + " " + endDN;
    $("#checkout").text(ending);
}
   
    

}
