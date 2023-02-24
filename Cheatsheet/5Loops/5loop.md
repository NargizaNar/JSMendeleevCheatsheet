## 5 Loop 
Loops offer a quick and easy way to do something repeatedly. 

## Types of loops

## 1 for - loops through a block of code a number of times
## Example 
let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}

console.log(str);
// Expected output: "012345678"

## 2 for/in - loops through the properties of an object
## Example 
const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: ${object[property]}`);
}

// Expected output:
// "a: 1"
// "b: 2"
// "c: 3"

## 3 for/of - loops through the values of an iterable object
## Example 
const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"

## 4 while - loops through a block of code while a specified condition is true
## Example 1 

let n = 0;

while (n < 3) {
  n++;
}

console.log(n);
// Expected output: 3

## Example 2 
while (i < 10) {
  text += "The number is " + i;
  i++;
}
<!-- The number is 0
The number is 1
The number is 2
The number is 3
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9 -->

## 5 do/while - also loops through a block of code while a specified condition is true
## Example 
let result = '';
let i = 0;

do {
  i = i + 1;
  result = result + i;
} while (i < 5);

console.log(result);
// Expected output: "12345" 
-----
## 5 + 2 
## Loop + String 
function validate(email) {
  let atSymPos;
  let atSymCounter = 0;
  let dotPos;

  for (let i = 0; i < email.length; i++) {
    if (email[i] === "@") {
      atSymCounter++;
      atSymPos = i;
      if (atSymPos === dotPos + 1) {
        return false; //checks if "." is directly before "@"
      }
      // inspect code at work: console.log(`@ located at ${atSymPos}`);
    }
    if (email[i] === ".") {
      dotPos = i; // NB: if there are multiple dots, Pos will indicate last dot placement
      // inspect code at work: console.log(`. located at ${dotPos}`);
      if (dotPos === atSymPos + 1) {
        // checks if "." is directly after "@"
        return false;
      }
      if (email[dotPos + 1] === ".") {
        // checks if there are consecutive "."
        return false;
      }
    }
  }

  if (atSymCounter !== 1 || atSymPos === 0 || atSymPos === email.length - 1) {
    //checks if we have exactly 1 "@" character AND that the "@" is NOT first or last character
    return false;
  } else if (
    email[0] === "." ||
    dotPos < atSymPos ||
    dotPos === email.length - 1
  ) {
    // checks if "." is first character, AND if there is no "." after "@", AND "." is NOT last character
    return false;
  } else {
    return true;
  }
}

console.log(validate("j@example.com"));
//true
console.log(validate("@example.com)"));
//false
---------------
-------------------
## 5 + 4 
## Loop + Number 
## Example 1 
let sumOneToTwenty = 0;
for (let i= 1; i <= 20; i ++) {
    sumOneToTwenty += i;
}
console.log(sumOneToTwenty);
//210

## Example 2 
let sumOfMultiplesOfThreeAndFive = 0;

for (let i = 1; i <= 1000; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        sumOfMultiplesOfThreeAndFive += i;
    }
}

console.log(sumOfMultiplesOfThreeAndFive);
// 33165

## Example 3 
const starter = 100; 

for (let i = 1; i <= 500/starter; i++) {
    console.log(starter * i);
}
//100, 200, 300, 400, 500  

## Example 4 
for (let i = 0; i <= 10;) {
        console.log(i);
        i += 2;
}
// 0, 2, 4... 10

## Example 5 
for (let i = 9; i >=0;) {
    console.log(i);
    i --;
} 
// 9, 8, 7... 0 

## Example 6 
let runCount = 0;
for (let i = 0; i <= 4;) {
    console.log(i);
    if ((i === 4) && (runCount <= 1)) {
        i = 0;
        runCount++;
    } else {
        i++;
    }
}
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

## Example 7 
let count = 1;
for (let i = 1; i <= 4;) {
    console.log(i);
    if ((count !== 0) && (count % 3 === 0)) {
        i++;
        count = 0;
    } 
    count++;
}

// 1 1 1 2 2 2 3 3 3 4 4 4

## Example 8 
for (let i = 0; i <= 10; i ++) {
    console.log(`${i} * 9 = ${i * 9}`);
}
for (let i = 0; i <=10; i++) {
    for (let y = 0; y <=10; y++) {
        const multiplier = i * y;
        console.log(`${i} * ${y} = ${multiplier}`);
    }
}
//  0 * 9 = 0
// 1 * 9 = 9, etc
---------------
--------------------
## 5 + 6
## Loop + Array 

## Example 1 
const ARR_Q2 = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for (let i = 0; i < ARR_Q2.length; i++) {
   console.log(`row ${i}`);
   for (let y = 0; y < ARR_Q2[i].length; y++) {
       console.log(` ${ARR_Q2[i][y]}`);
   }
}
// row 0
//  1
//  2
//  1
//  24
// row 1
//  8
//  11
//  9
//  4
// row 2
//  7
//  0
//  7
//  27
// row 3
//  7
//  4
//  28
//  14
// row 4
//  3
//  10
//  26
//  7

## Example 2 
const ARR_Q3a = [];

for (let i = 1; i <= 4; i++) {
   for (let y = 1; y <= 3; y++) {
       let strNums = i.toString();
       ARR_Q3a.push(strNums);
   }
}

console.log(ARR_Q3a.join(" "));
//1 1 1 2 2 2 3 3 3 4 4 4

## Example 3 
const ARR_Q3b = [];

for (let i = 0; i <= 2; i++) {
   for (let y = 0; y <= 4; y++) {
       strNums = y.toString();
       ARR_Q3b.push(strNums);
   }
}

console.log(ARR_Q3b.join(" "));
//0 1 2 3 4 0 1 2 3 4 0 1 2 3 4
--------------------
--------------------
## 5+3 
## Loop + Boolean 

## Example 1
for (let i = 1; i <= 2; i ++) {
    if (i > 1) {
        console.log(`There are ${i} bottles of beer on the wall.`);
    } else {
        console.log(`There is ${i} bottle of beer on the wall.`);
    }   
}
//There is 1 bottle of beer on the wall.
//There are 2 bottles of beer on the wall.

## Example 2 
for (let i = 1; i <= 5; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
//1
// 2
// Fizz
// 4
// Buzz
---------------