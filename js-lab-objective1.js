// Lab 11/11/2015 by Darryl Mendonez

// 1. Write a function to determine if a given variable is a 
// string or not

function dataType() {

  var value = prompt("Type something in and I will tell you what kind of data type it is.");

  if ((value === "") || (isNaN(value))) {
    alert("You typed '" + value + "' which is a string.");
  } else {
    alert("You typed '" + value + "' which is a number.")
  }
}