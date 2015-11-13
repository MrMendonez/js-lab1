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
  i = 0;
  n = 1;
  var ok = true;
  var list = [];
  list[i] = prompt("What is your favorite movie?")
  while (ok === true) {
    if (confirm("Ok, tell me others by pressing OK or press CANCEL to stop.")) {
      list[i+n] = prompt("What is another of your favorite movies?");
      n += 1
    } else {
      ok = false;
      console.log(list);
      i = 0
      if (list.length === 1) {
        var result = "Ok, so your favorite movie is " + list[i] + "."
        alert(result);
      } else {
        while (i < list.length) {
          var n = list[i] + ", "
          n += n
          i++
          console.log(n)
          var result = "Ok, so your favorite movies are " + n
          alert(result)
        }
      }
    }
  }
}