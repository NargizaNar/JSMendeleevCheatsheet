## Number + Boolean 


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


## Example 6 
function isEqualSlices(totalSlices, numOfRecipients, slicesPP) {
  const NEEDED_SLICES = numOfRecipients * slicesPP;
  return totalSlices >= NEEDED_SLICES;
}
console.log(isEqualSlices(4, 2, 3));
//false
console.log(isEqualSlices(4, 2, 2));
//true
## Example 7 

let num1 = 30;
console.log((num1 % 2 === 0) ? `${num1} is even` : `${num1} is odd`);
//30 is even

## Example 8.1

let a=3;
let b=6;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result)

## Example 8.2 
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} 

## Example 9 
let int1 = 6; let int2 = 60;
let sumTwoIntegers = int1 + int2;

if (sumTwoIntegers >= 50 && sumTwoIntegers <= 80) {
    console.log(65);
} else {
    console.log(80);
}
//65, within a range, it is true


## Example 10
const markHeight = 1.65;
const markMass = 85;

const johnHeight = 1.90;
const johnMass = 120;

const markBMI = markMass / (markHeight * markHeight);
const johnBMI = johnMass / (johnHeight * johnHeight);
const markMoreBeefCake = markBMI > johnBMI;

console.log(markMoreBeefCake); // false

if (markMoreBeefCake) {
    console.log(`Is Mark's BMI higher than John's? Why yes, it's ${markMoreBeefCake}, it is`);
} else {
    console.log(`That is blatantly ${markMoreBeefCake}, John may be built for speed, but Mark? Mark is built for comfort.`);
}
//That is blatantly false, John may be built for speed, but Mark? Mark is built for comfort.
if (markMoreBeefCake === true) {
    console.log(`Mark ${markBMI.toFixed(2)}`);
} else {
    console.log(`John ${johnBMI.toFixed(2)}`);
}
//John 33.24

## Example 11 
let int4 = 6; int5 = 2;

if ((int4 + int5 == 8) || ((Math.abs(int4 - int5 == 8)))) { 
    console.log(true);
} else {
    console.log(false);
}
//true

## Example 12 
int4 = 9; int5 = 6;

if (((int4 == 15) || (int5 == 15)) || (int4 + int5 == 15)) {
    console.log(true);
} else {
    console.log(false);
}
// true

## Example 13
int4 = 9; int5 = 6;
if ((int4 % 11 == 0 || int4 % 7 == 0) || (int5 % 11 == 0 || int5 % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}
// false
## Example 14
int4 = 9; int5 = 6;
sumTwoIntegers = int4 + int5;
const tripleSum = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum);
} else {
    console.log(sumTwoIntegers);
}
//15

## Example 15 (based on Example 14)
int5 = 9; //reassign the value 

sumTwoIntegers = int4 + int5;
const tripleSum2 = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum2);
} else {
    console.log(sumTwoIntegers);
}
//54