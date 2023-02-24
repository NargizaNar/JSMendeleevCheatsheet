## Object + Number 
## Example 1 
function isWhole(int1,int2,int3,int4) {
    return Number.isInteger((int1+int2+int3+int4)/4) 
}
console.log(isWhole(...[1, 2, 3, 6]));
//true
console.log(isWhole(...[1.5, 2, 3, 6]));
//false 
## Example 2 
function unique(arr) {
  const uniqueNumbers = [];
  for (let i = 0; i < arr.length; i++) {
    const currentElement = arr[i];
    if (arr.indexOf(currentElement) === arr.lastIndexOf(currentElement)) {
      uniqueNumbers.push(currentElement);
    }
  }

  return uniqueNumbers;
}

console.log(unique([3, 3, 3, 7, 3, 3, 5])); // [7, 5]
## Example 3 
function isWithinRange(num, obj) {
   if (num >= obj.min && num <= obj.max) {
       return true;
   } else {
       return false;
   }
}

console.log(isWithinRange(4, { min: 4, max: 5 }));
//true
## Example 4 
function freeShipping(object) {
    const orderArray = Object.values(object);
    let total = 0;
    for (let i = 0; i < orderArray.length; i ++) {
        total += orderArray[i];
    }
    return total > 50;
}
console.log(freeShipping({ "Wool": 13.99, "Knitting Needles": 15.50, "Bag": 13.99 }));
//false 

## Example 5 
function countLetters(str) {
    const strToArr = str.split("");
    const letterCount = {};
    for (let i = 0; i < strToArr.length; i ++) {
        if (letterCount.hasOwnProperty(strToArr[i])) {
            letterCount[strToArr[i]]++;
        }  else {
            letterCount[strToArr[i]] = 1;
        }
    }
    return letterCount;
}

console.log(countLetters("woolloomooloo"));
//{ w: 1, o: 8, l: 3, m: 1 }
