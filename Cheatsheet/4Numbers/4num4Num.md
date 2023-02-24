## Number + Number
## Example 1
const apples = 10; 
const pears = 5; 
console.log (apples+pears)//15
## Example 2
const snackServings = 20;
const guests = 30;
console.log(snackServings - guests);//-10
## Example 3 
const hoursDay = 7; 
const weekDays =4; 
console.log(hoursDay*weekDays) //28
## Example 4
const ticketsSold = 6450;
const price = 15;
const numberPeople = ticketsSold / price;
console.log( `BER123: ${numberPeople} bought tickets`); 
//BER123: 430 bought tickets
## Example 5
const calcPercent = (17 * 100) / 30;
console.log(`${calcPercent.toFixed(2)}%`);
//56.67%
## Example 6 
function calcBaseToExponent(base, exponent) {
  return base ** exponent; 
}

console.log(calcBaseToExponent(3, 3));
//27

## Example 7 
function calculateBMI(weight, height) {
  return (weight/ (height/100 * height/100)).toFixed(2) 
}
console.log(calculateBMI(80, 175))
//26.12

## Example 8 
let integer = "1005";
console.log(parseInt(integer));
//1005

## Example 9 
let float = "10.05";
console.log(parseFloat(float));
//10.05 

## Example 10 

const markHeight = 1.65;
const markMass = 85;
const markBMI = markMass / (markHeight * markHeight);
console.log(markBMI.toFixed(0))
//31
