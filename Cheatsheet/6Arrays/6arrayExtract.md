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
