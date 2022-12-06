// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  //Realtime clock
  var clock = dayjs();

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?

  //Event listner for save buttons
  const saveButton = $(".saveBtn");
  saveButton.click(function() {
    //Will save text to local storage depending on which save button was pressed
    var hour = $(this).parent().attr('id');
    var textContainer = $(this).prev().val();
    localStorage.setItem(hour, textContainer);
  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //Sets current hour to hour of realtime clock
  var currentHour = clock.format("H");

  //Gets element by ID for each hour time-block
  for(let i =9; i < 18; i++) {
    var id = "hour-" + i;
    var hourElement = document.getElementById(id);

    //Sets hour time-block to past if it is lower than the real time clock,
    //present if it's the same as the real time clock, and future if it is
    //above the real time clock
    if(i < currentHour) {
      hourElement.classList.add("past")
      hourElement.classList.remove("present")
      hourElement.classList.remove("future");
    } else if (i === currentHour) {
      hourElement.classList.remove("past");
      hourElement.classList.add("present");
      hourElement.classList.remove("future");
    } else {
      hourElement.classList.remove("past");
      hourElement.classList.remove("present");
      hourElement.classList.add("future");
    }
  }

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for(let i=9; i<18; i++) {
    var id = "hour-" +i;
    var storedText = localStorage.getItem(id);
    var hourElement = document.getElementById(id);
    hourElement.children[1].value = storedText;
  }

  // TODO: Add code to display the current date in the header of the page.
  $("#currentDay").text(clock.format('MMM D, YYYY'))
});
