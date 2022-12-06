// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  const nine = $("#hour-9");
  nine.click(function() {
    alert("Success");
  })

  const ten = $("#hour-10");
  ten.click(function() {
    alert("Success");
  })

  const eleven = $("#hour-11");
  eleven.click(function() {
    alert("Success");
  })

  const tweleve = $("#hour-12");
  tweleve.click(function() {
    alert("Success");
  })

  const one = $("#hour-1");
  one.click(function() {
    alert("Success");
  })

  const two = $("#hour-2");
  two.click(function() {
    alert("Success");
  })

  const three = $("#hour-3");
  three.click(function() {
    alert("Success");
  })

  const four = $("#hour-4");
  four.click(function() {
    alert("Success");
  })

  const five = $("#hour-5");
  five.click(function() {
    alert("Success");
  })
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
