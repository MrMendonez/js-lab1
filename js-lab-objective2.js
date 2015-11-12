// Lab 11/11/2015

// 2. Write a function that tells you which of 2 inputs is 
// smaller

var value1;
var value2;

var value1 = prompt("Pick a number");
var value2 = prompt("Pick another number");

console.log("The first number you picked is ", value1);
console.log("The second number you picked is ", value2);

if(value1 > value2) {
  alert(value1 + " is greater than " + value2);
} else if (value1 < value2) {
  alert(value2 + " is greater than " + value1);
} else {
  alert(value1 + " and " + value2 + " are equal");
}