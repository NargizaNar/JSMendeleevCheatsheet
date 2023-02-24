## Number + Array 
 
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

## Example 5
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