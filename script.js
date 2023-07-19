// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click',function(){
    // get the id of ancestor elements of the class saveBtn
    var timeBlockId = $(this).closest('.time-block').attr('id');
    console.log(timeBlockId);
    // Get the user input from the all textareas with class description
    var userInput = $(this).siblings('.description').val();
    // Save the user input in local storage using the time-block id as the key
    localStorage.setItem(timeBlockId, userInput);
  });
//  get the current day and set it to as the text value where id is "currentDay"
  var currentDay = dayjs().format('dddd, MMMM D hh:mm:ss a');
  $('#currentDay').text(currentDay); 
// find the current hour in a 24 hr time and set it to currentHour
  var currentHour = dayjs().hour();
  // each class time block will run this function separately
  $('.time-block').each(function() {
    // change the value after "-" to a number instead of a string
    // set it equal to timeBlockHour
  var timeBlockHour = parseInt($(this).attr('id').split('-')[1]);
  // check timeBlockHour against currentHour and set class based on results
    if (timeBlockHour < currentHour) {
      $(this).addClass('past');
    } else if (timeBlockHour == currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });
   // each class time block will run this function separately
  $('.time-block').each(function() {
    // get id when class is time-block 
    var timeBlockId = $(this).attr('id');
    // get local storage id when the value is saved to this certain id
    var userInput = localStorage.getItem(timeBlockId);
    // find where the class is description and set the value equal to the user input
    $(this).find('.description').val(userInput);
})
});


  