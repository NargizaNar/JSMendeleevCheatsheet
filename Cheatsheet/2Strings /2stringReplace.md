## String + Replace 
## Example 1.1  
.replace()
let fruityStr2 = "Bananas";
let modifiedFruityStr2 = fruityStr2.replace("Bananas", "BBananasB");
console.log(modifiedFruityStr2);
// BBananasB
## Example 1.2 
const oldStr = "Bananas";
const firstChar = oldStr[0];
const newStr = `${firstChar}${oldStr}${firstChar}`
console.log(newStr);
//BBananasB
## Example 2 
function camelize(str) {
  return str
    .split("-") // splits 'my-long-word' into array ['my', 'long', 'word']
    .map(
      // capitalizes first letters of all array items except the first one
      // converts ['my', 'long', 'word'] into ['my', 'Long', 'Word']
      (word, index) =>
        index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(""); // joins ['my', 'Long', 'Word'] into 'myLongWord'
}

console.log(camelize("background-color"))
//backgroundColor

## Example 3 
const boogieNightsStr = "BoogieWoogie";
const firstLetter = boogieNightsStr[0];
const lastLetter = boogieNightsStr[boogieNightsStr.length - 1];
const remainderString = boogieNightsStr.substring(1, boogieNightsStr.length - 1);
console.log(lastLetter + remainderString + firstLetter);
//eoogieWoogiB
