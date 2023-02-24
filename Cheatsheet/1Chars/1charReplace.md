## Char + Replace 
## Example 1
let bar = x => "Cat" + x.substring(2);
console.log(bar("Cat"));
//Catt
console.log(bar("Foobar"));
//Catobar
console.log(bar("Potato"));
//Cattato 
## Example 2 
const foxStr = "the quick brown fox";
const firstCharacter = foxStr[0].toUpperCase();
const remainderStr = foxStr.slice(1);
console.log(firstCharacter + remainderStr);
//The quick brown fox