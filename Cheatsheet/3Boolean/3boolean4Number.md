## Boolean + Number 

## Example 1
const apples = 20;
const oranges = 30;
const mangoes = 5;

console.log((mangoes + apples) >= (oranges - mangoes)); 
// true

## Example 2 
function checkAge(age) {
  if(age>18){
    return true
  }else{
    return false
  }
  }
console.log(checkAge(15))
  // false

## Example 3  
  function min(a, b) {
    if(a>b){
      return b
    }else{
      return a
    }
  }
console.log(min(7, 3))
  //3

## Example 4 
let int1 = 1; let int2 = 50;

if ((int1 >= 50 && int1 <= 99) || (int2 >= 50 && int2 <= 99)) {
    console.log(true);
} else {
    console.log(false);
}
// true

## Example 5
const myNum = 10;

if ((myNum % 3 == 0) && (myNum % 5 == 0)) {
    console.log("Fizzbuzz");
} else if (myNum % 3 == 0) {
    console.log("Fizz");
} else if (myNum % 5 == 0) {
    console.log("Buzz")
} else {
    console.log("What fresh hell is this?") 
    // this is good if the input is, despite all instructions, not a number.
}
//Buzz 

