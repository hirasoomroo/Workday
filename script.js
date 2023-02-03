//display today's date
var todayDate = moment().format('dddd, MMM Do YYYY');

var saveButton = document.querySelector("#savebutton");
$("#currentDay").html(todayDate);
$(function () {
});
//Time array for blocks of time listed
var timeArray = ["8AM", "9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var currentTime = [];

function timeTracker() {
    //get current number of hours.
    var thisMoment = moment().hour();
}

//create click button for saving 
function saveButton() {}
saveButton.addEventListener ("click", function() {
})

  //use storage to save button with the to do list
  $("btn saveBtn col-2 col-md-1").on("click", function(){
    $('input, select, textarea').each(function() {
     var value = $(this).val(),
         name = $(this).attr('name');
     localStorage[name] = value;
             
})});