
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
