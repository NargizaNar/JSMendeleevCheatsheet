## String + Extract 
## Example 1 
const getFirstWord = x => x.split(" ")[0]
console.log(getFirstWord("Hello World"));
//Hello 

## Example 2 

function showFirstAndLast(array) {
    const currentArray = array.map(element => element.substring(0, 1) + element.substring(element.length - 1));
    return currentArray;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']));
[ 'ct', 'mt', 'tm', 'uy' ]


## Example 3 
function isWaldoHere(str) {
  const LOWER_CASE_STR = str.toLowerCase(); // prep: includes() is case-sensitive
  return LOWER_CASE_STR.includes("waldo");
}
console.log(isWaldoHere("where is Wally?"));
//false
console.log(isWaldoHere("I found you Waldo!"));
//true