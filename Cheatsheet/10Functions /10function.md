## 10 Function 

A JavaScript function is a block of code designed to perform a particular task. A function is executed when "something" invokes it (calls it).

# Example 
// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  return p1 * p2;
}
console.log(myFunction(4, 3))
//12

Functions can be long, shortened, and short. For example, we have "BoogieWoogie", which is our input. And we want to get "eoogieWoogiB" as an output. 

## Option 1: Long function 
function makeBoogieNights1 (string) {
    const firstLetter = string[0];
    const lastLetter = string[string.length - 1];
    const remainderString = string.substring(1, string.length - 1);

    return lastLetter + remainderString + firstLetter;
}
console.log(makeBoogieNights1("BoogieWoogie"));
//eoogieWoogiB

## Option 2: Shortend Function

function makeBoogieNights2 (string) {
    return string[string.length - 1] + string.substring(1, string.length - 1) + string[0];
}
console.log(makeBoogieNights2("BoogieWoogie"));
//eoogieWoogiB

## Option 3: One liner Arrow Function

## Example 1
let myFunction = (a, b) => a * b;
## Example 2 
hello = () => "Hello World!"; 
## Example 3
const makeBoogieNights3 = (string) => string[string.length - 1] + string.substring(1, string.length - 1) + string[0];
console.log(makeBoogieNights3("BoogieWoogie"));
//eoogieWoogiB

### Function scope (local, global)
 let fruit = "banana"

 function printFavoriteFruit() {
     fruit = "watermelon"
    console.log("My favorite fruit is: " + fruit);
 }

 printFavoriteFruit()
 // My favorite fruit is: watermelon//, local, within the function scope

## 1 + 10 || 10 + 1
## Function + Char
const triplet = x => {
  console.log(x+x+x);
}
triplet("A");
//AAA

# 2 + 10 || 10 + 2
## Function + String 
const quintuplet = x => "" + x + x + x + x + x;
console.log(quintuplet("Cat"));
//CatCatCatCatCat

## 4 + 10 || 10 + 4
## Function + Number 
### Example 1: 
function sumIntFrom1ToN(int) {
  let sum = 0;
  for (let i = 0; i <= int; i++) {
    sum += i;
  }
  return sum;
}

console.log(sumIntFrom1ToN(25));
//325

### Example 2: 
function sumOfCubes(a, b, c) {
  return a ** 3 + b ** 3 + c ** 3;
}
console.log(sumOfCubes(1, 5, 9));
// 855 

## Example 3.1 
function multiply(a, b) {
  console.log(a * b);
}

multiply(7, 5);
//35
## Example 3.2
const myMultiply = function(a, b) {
  console.log(a * b);
};

myMultiply(21, 3); 
//63 
## Example 3.3  
const myMultiplyFunc = (a, b) => console.log(a * b);
myMultiplyFunc(4, 31)
//124 

## Example 4.1 
function remainderOfDivision1(a, b) {
    console.log(a % b);
}

remainderOfDivision1(23, 5);
// 3

## Example 4.2
const remainderOfDivision2 = function(a, b) {
    console.log(a % b);
}

remainderOfDivision2(11, 3);
//2

## Example 4.3 
const remainderOfDivision3 = (a, b) => console.log(a % b);
remainderOfDivision3(125, 10);
//5

## Example 5 
const exponent = (num1, num2) => {
    for (let i = 1; i <= num2; i++) {
        let result = Math.pow(num1, i);
        console.log(`${num1} ^ ${i} is ${result}`);
    }
};
//console.log(result);

exponent(2, 8);

<!-- 2 ^ 1 is 2
2 ^ 2 is 4
2 ^ 3 is 8
2 ^ 4 is 16
2 ^ 5 is 32
2 ^ 6 is 64
2 ^ 7 is 128
2 ^ 8 is 256 -->

## Example 6
const  createBase = (x) => {
    return function(y){
        return x+y 
        
    }
}
const addSix = createBase(6);
const anony =()=>({x:addSix,y:10})
console.log(addSix(10))
// 16




## 3 + 10 || 10 + 3
## Function + Boolean 
function isLEQZero(number) {
  return number <= 0;
}

console.log(isLEQZero(-10));
// true

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(7)); 
// true
console.log(isPrime(9)); 
// false

## 5 + 10 
## Function + Loop
const multiStr = (a, b) => {
  let out = "";
  for (let counter = 0; counter < a; counter++) {
    out += b;
  }
  return out;
}
console.log(multiStr(3, "Woah"));
//WoahWoahWoah

## Function + Array 
## Example 1
function amplifyMultiplesOfFour(num) {
  const numArr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      let ampByTen = i * 10;
      numArr.push(ampByTen);
    } else {
      numArr.push(i);
    }
  }

  return numArr;
}

console.log(amplifyMultiplesOfFour(8)); 
// [1, 2, 3, 40, 5, 6, 7, 80]


## 10 + 8
## Function + Object 
const programming = {
  languages: ["JavaScript", "Python", "Ruby"],
  isChallenging: true,
  isRewarding: true,
  difficulty: 8,
};
programming.worthwhile = () => {
  if (programming.isChallenging && programming.isRewarding) {
    return `Learning the programming languages: ${programming.languages.join(', ')} is rewarding and challenging`;
  } 
  return false
};

console.log(programming.worthwhile())
 //Learning the programming languages: JavaScript, Python, Ruby is rewarding and challenging

