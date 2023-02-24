# Char + Info

Char means character, e.g. a letter (a,b,c) or a sign (@, *). 
Char has the same syntax as a string. i.e. it always has quotation marks ('n', "L", `$`). 

## Declaration 
let a = "a"; 
const emailSign= "@"; 

## Main methods for Char are same as for String, e.g.  
function alphabetise(str) {
    sortedStr = str.toLowerCase()
        .split("")
        .sort()
        .join("");
    return sortedStr;
}

console.log(alphabetise("waddUpArray"));  
//aaaddprruwy


## 1
## Char 
const firstLetter = x => x[0]
console.log(firstLetter("cat"));
//c
console.log(firstLetter("quylthulg"));
//q

-------------------

## 1 + 2 
## Char + String 
## Example 1 
function vowelCounter(strToCheck) {
    const vowelArr = ["a", "e", "i", "o", "u"];
    let counter = 0;
    for (let i = 0; i < strToCheck.length; i++) {
        if (vowelArr.includes(strToCheck[i])) {
            counter++;
        }
    }
    return counter;
}
console.log(vowelCounter("count this"));
//3

--------------------


## 1 + 4 
## Char + Number 
## Example 1 
function countOccurrences(str, letter) {
  let counter = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      counter++;
    }
  }
  return counter;
}

console.log(countOccurrences("this is a string", "i"));
//3
## Example 2 
function getLongestWord(str) {
    let words = str.split(' ');
    let maxLength = 0;
    let longestWord = null;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > maxLength) {
            maxLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
}

console.log(getLongestWord("this is one of my strings"));
//strings
---------------
## 1 + 3 
## Char + Boolean 
## Example 1 
const foo = x => x[x.length-1] === "o"
console.log(foo(""));
//false
console.log(foo("Bravo"));
//true
console.log(foo("Blanket"));
//false
## Example 2 
function isEqualNumXandOs(str) {
  const LOWER_CASE_STR = str.toLowerCase();
  let countX = 0;
  let countO = 0;
  for (let i = 0; i < str.length; i++) {
    if (LOWER_CASE_STR[i] === "x") {
      countX++;
    } else if (LOWER_CASE_STR[i] === "o") {
      countO++;
    }
  }
  if (countX === 0 && countO === 0) {
    return true;
  } else if (countX === countO) {
    return true;
  } else if (countX !== countO) {
    return false;
  }
}

console.log(isEqualNumXandOs("ooxx"));
//true
console.log(isEqualNumXandOs("xooxx"));
//false
----------
## Char + Loop || Loop + Char
## Example 1 
for (let i = 0; i < 4; i++) {
    let asteriskStr = "";
    for (let y = 0; y <= i; y++) {
        asteriskStr += "*";
    }
    console.log(asteriskStr);
}
//*
// **
// ***
// ****
----------
## 1 + 14 
## Char + Extract 
## Example 1
const firstLetters = x => {
  const arr = x.split(" ");
  let out = "";
  for (let i = 0; i < arr.length; i++) {
    out += arr[i][0];
  }
  return out;
}
console.log(firstLetters("What the fruit"));
//Wtf

## Example 2.1 
function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];
eachRight 
    vowelArray.forEach(vowel => {
        let count = currentArray.filter(letter => letter === vowel);
        if (count.length > 0) {
            countObject[vowel] = count.length;
        };
    });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};

## Example 2.2 
function vowelCount(string) {
    const vowelArray = ["a", "e", "i", "o", "u"];
    const countObject = {};
    const currentArray = [...string.toLowerCase()];

    currentArray.forEach((letter) => {
        if (vowelArray.includes(letter)) {
            countObject[letter] = (countObject[letter] || 0) + 1;
        }
    });
    return countObject;
}

console.log(vowelCount('Elie')); // {e:2,i:1};


