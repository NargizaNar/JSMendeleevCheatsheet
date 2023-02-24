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

## Example 
const firstLetter = x => x[0]
console.log(firstLetter("cat"));
// Expected output: c
console.log(firstLetter("quylthulg"));
// Expected output: q