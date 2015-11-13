// Lab 11/11/2015 by Darryl Mendonez

// 1. Write a function to determine if a given variable is a string or not

function dataType() {

  var value = prompt("Type something in and I will tell you what kind of data type it is.");

  if ((value === "") || (isNaN(value))) {
    alert("You typed '" + value + "' which is a string.");
  } else {
    alert("You typed '" + value + "' which is a number.")
  }
}

// 2. Write a function that tells you which of 2 inputs is smaller

function comparison() {
  var value1;
  var value2;

  var value1 = prompt("Pick a number");
  var value2 = prompt("Pick another number");

  if(value1 > value2) {
    alert(value1 + " is greater than " + value2 + ".");
  } else if (value1 < value2) {
    alert(value1 + " is less than " + value2 + ".");
  } else {
    alert(value1 + " and " + value2 + " are equal.");
  }
}

// 3. Write a function that concatenates n number of strings together

function concatenator() {
  var ok = true;
  var response = prompt("Who is your favorite superhero?");
  while (ok===true) {
    if (confirm("Cool, think of another one or click 'Cancel' if you can't think of anything else.")) {
     response += " ";
      response += prompt("Who else?");
    } else {
        ok = false;
        alert("Okay, so your favorite superheroes are: " + response);
    }
  }
}