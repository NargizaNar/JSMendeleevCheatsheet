## Number 

There are different types of numbers: 
-integer, e.g. 1, 2, 3
- float, e.g. 1.5
- primeNumbers, e.g. 7 because it can be diveded only by itself without a remainder
- absolute numbers. 

## Declarations 
 let x = 3.14;    // A number with decimals
let y = 3;       // A number without decimals 
 let x = 123e5;    // 12300000
let y = 123e-5;   // 0.00123 

## Main methods with numbers 
## Example 1
console.log(Math.min(-1, 0, 1, 2, 3, 4));
//-1

## Example 2 
console.log(Math.max(-1, 0, 1, 2, 3, 4));
// 4
## Example 2.1
const largestNum = (a,b,c,d,e) => Math.max(a,b,c,d,e);
console.log(largestNum(1,2,3,2,1));
//3 

## Example 3 
console.log(Math.ceil(326.76));
//327

## Example 4 
console.log(Math.floor(3321.32321));
//3321

## Example 5
console.log(Math.floor(Math.random() * 6) + 1)
3321
//2

## Example 6
console.log((0.1 * 0.2).toFixed(2));
//0.02

## Example 7 
let aleezaGame1 = 89;

let aleezaGame2 = 120;

let aleezaGame3 = 103;

const laraGame1 = 116;

const laraGame2 = 94;

const laraGame3 = 123;

let aleezaTeamAve = Math.round((aleezaGame1 + aleezaGame2 + aleezaGame3) / 3);

console.log(`Aleeza's team scored an average ${aleezaTeamAve}`);

let laraTeamAve = Math.round((laraGame1 + laraGame2 + laraGame3) / 3);

console.log(`Lara's team scored an average ${laraTeamAve}`);
// Aleeza's team scored an average 104
// Lara's team scored an average 111 


## 4 + 4 
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

## 4 + 5 
## Number + Loop 
function pow(x, n) {
    let result = x;
  for(let i=1;i<n;i++){
    result *= x
  }
  return result
  }
console.log(pow(1, 100))
  //1

## 4 + 6 
## Number + Array 
  function findGreatest(arrOfNumbers, num) {
    const greaterElements = [];
    for (let i = 0; i < arrOfNumbers.length; i++) {
        if (arrOfNumbers[i] > num) {
            greaterElements.push(arrOfNumbers[i]);
        }
    }
    return greaterElements.join(", ");
}

console.log(findGreatest([3, 4, 5], 4));
//5

## 4 + 3
## Number + Boolean 
## Example 1 
function isEqualSlices(totalSlices, numOfRecipients, slicesPP) {
  const NEEDED_SLICES = numOfRecipients * slicesPP;
  return totalSlices >= NEEDED_SLICES;
}
console.log(isEqualSlices(4, 2, 3));
//false
console.log(isEqualSlices(4, 2, 2));
//true

## Example 2 

let num1 = 30;
console.log((num1 % 2 === 0) ? `${num1} is even` : `${num1} is odd`);
//30 is even

## Example 3.1 

let a=3;
let b=6;
let result = (a + b < 4) ? 'Below' : 'Over';
console.log(result)

## Example 3.2 
if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
} 

## Example 4 
let int1 = 6; let int2 = 60;
let sumTwoIntegers = int1 + int2;

if (sumTwoIntegers >= 50 && sumTwoIntegers <= 80) {
    console.log(65);
} else {
    console.log(80);
}
//65, within a range, it is true


## Example 5 
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

## Example 6 
let int4 = 6; int5 = 2;

if ((int4 + int5 == 8) || ((Math.abs(int4 - int5 == 8)))) { 
    console.log(true);
} else {
    console.log(false);
}
//true

## Example 7 
int4 = 9; int5 = 6;

if (((int4 == 15) || (int5 == 15)) || (int4 + int5 == 15)) {
    console.log(true);
} else {
    console.log(false);
}
// true

## Example 8 
int4 = 9; int5 = 6;
if ((int4 % 11 == 0 || int4 % 7 == 0) || (int5 % 11 == 0 || int5 % 7 == 0)) {
    console.log(true);
} else {
    console.log(false);
}
// false
## Example 9
int4 = 9; int5 = 6;
sumTwoIntegers = int4 + int5;
const tripleSum = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum);
} else {
    console.log(sumTwoIntegers);
}
//15

## Example 10 (based on Example 9)
int5 = 9; //reassign the value 

sumTwoIntegers = int4 + int5;
const tripleSum2 = 3 * sumTwoIntegers;

if (int4 == int5) {
    console.log(tripleSum2);
} else {
    console.log(sumTwoIntegers);
}
//54

## Number + Replace 
function reverseNum(numToReverse) {
    // if (Number.isNaN(Number(numToReverse))) return 'Please Enter a number';
    return (
        parseFloat(
            numToReverse
                .toString()
                .split("")
                .reverse()
                .join("")
        ) * Math.sign(numToReverse)
    ); // Math.sign() returns the positive or negative sign of the integer
}

console.log(reverseNum(123));
//321
console.log(reverseNum("abc"));
//NaN