## Loop + Boolean 

## Example 1
for (let i = 1; i <= 2; i ++) {
    if (i > 1) {
        console.log(`There are ${i} bottles of beer on the wall.`);
    } else {
        console.log(`There is ${i} bottle of beer on the wall.`);
    }   
}
// Expected output:There is 1 bottle of beer on the wall.
// Expected output:There are 2 bottles of beer on the wall.

## Example 2 
for (let i = 1; i <= 5; i ++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    } else if (i % 3 == 0) {
        console.log("Fizz");
    } else if (i % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}
<!--Expected output: 
1
2
Fizz
4
Buzz -->
