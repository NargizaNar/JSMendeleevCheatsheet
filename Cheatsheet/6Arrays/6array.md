
## 6 +6 
## Array + Array
let euroCountries = ['Germany', 'France']
let asiaCountries = ['Japan', 'Korea']
euroCountries = [...euroCountries, ...asiaCountries]
console.log(euroCountries)
//[ 'Germany', 'France', 'Japan', 'Korea' ]

## 6 + 4
## Array + Number 
## Example 1 
function getEvenNums(cutOffNumber) {
    const evenNumsArr = [];
    for (let i = 1; i <= cutOffNumber; i++) {
        if (i % 2 === 0) {
            evenNumsArr.push(i);
        }
    }
    return evenNumsArr;
}

console.log(getEvenNums(10));
// [ 2, 4, 6, 8, 10 ]

## Example 2 
function sumOfCubes(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        const cube = arrayOfNumbers[i] ** 3;
        sum += cube;
    }
    return sum;
}
console.log(sumOfCubes([3, 4, 5]));
//216 

## Example 3 

let arr =  [2, 7, 8]
function findLargestNumber(arr) {
    return Math.max(...arr)
}
console.log(findLargestNumber(arr))
// 8

## Example 4 
let arr =  [2, 7, 8]
function findSmallestNumber(arr) {
    return Math.min(...arr)
}
console.log(findSmallestNumber(arr))
// 2

## 6 + 5 
## Array + Loop 
const largestNumInArray = x => {
  let max = null; // yeah this does not work if all the inputs are <0
  for (let i = 0; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
  }
  return max;
}
console.log(largestNumInArray([1,6,83,91,0,-4,1337,5]));
// 1337

## Array + Replace 
## Example 1 

function doubleValues(array) {
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
//[ 2, 4, 6 ]

## Example 2 

let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, food);
// banana cucumber [ 'bread', 'cakes', 'pizza' ]

## Example 3 
myArray[3] = "fourth element";
console.log(myArray);
// [ 1, 2, 3, 'fourth element', 5 ]

## Example 4 
const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}
<!-- 1
2
3
quick
brown
fox
jumped
over
lazy
dog
true
false -->



## Array + Extract 
## Example 1
function findMissingNum(incompleteArray) {
    incompleteArray.push(0);
    let addUpArray = 0;
    let total = 0;
    for (let i = 0; i < incompleteArray.length; i++) {
        addUpArray += incompleteArray[i];
        total += (i + 1);
    }
    const missingNum = total - addUpArray;
    return missingNum;
}

const numbersArr = [1, 5, 6, 2, 4, 9, 8, 7, 10];
console.log(findMissingNum(numbersArr));
//3

## Example 2 
function dictionary(initialStr, arrayOfWords) {
    const initialStrLower = initialStr.toLowerCase();
    const filteredArr = [];
    for (let i = 0; i < arrayOfWords.length; i++) {
        let arrayOfWordsLower = arrayOfWords[i].toLowerCase();
        if (arrayOfWordsLower.includes(initialStrLower)) {
            filteredArr.push(arrayOfWordsLower);
        }
    }
    return filteredArr;
}

console.log(dictionary("boo", ["don't", "blame", "sunshine", "blame", "boogie"]));
//[ 'boogie' ]  


## Example 3 
function onlyEvenValues(array) {
    const currentArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });
    return currentArray;
}
console.log(onlyEvenValues([1, 2, 3])); 
// [2]


// 5,3,8,1 (not modified)

## Example 4 
function onlyEvenValues(array) {
    const currentArray = [];
    array.forEach(element => {
        if (element % 2 === 0) {
            currentArray.push(element);
        }
    });
    return currentArray;
}
console.log(onlyEvenValues([1, 2, 3])); 
// [2]


## Example 5
function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));
//[ 'ct', 'mt', 'tm', 'uy' ]

## Array + Add 
## Example 1
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities[0] = "Berlin";
console.log(euroCities);
// [ 'Berlin', 'London', 'Rome', 'Prague', 'Valletta' ]


## Example 2  
const worldCities = ["Paris", "London", "Tashkent", "Berlin", "Norwich"];
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
//[ 'Paris', 'Washington', 'London', 'Tashkent', 'Berlin', 'Norwich' ], added Washington between Paris and London

## Example 3


const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.push("Budapest");
console.log(euroCities); 
//[ 'Paris', 'London', 'Rome', 'Prague', 'Valletta', 'Budapest' ]. added Budapest at the end 


## Array + Remove 
## Example 1 
### nameArray.slice(position,position)
const asianCities = ["Hong Kong", "Taiwan", "Seoul", "Osaka", "Manila"];
const citiesArr = asianCities.slice(1, 4);
console.log(citiesArr);
//[ 'Taiwan', 'Seoul', 'Osaka' ], created variable 'citiesArr'

## Example 2 
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.pop();
console.log(euroCities);
//[ 'Paris', 'London', 'Rome', 'Prague' ], removed Valletta 

### Example 3 
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.splice(2, 1);
console.log(euroCities);
//[ 'Paris', 'London', 'Prague', 'Valletta' ], 'Rome' removed

