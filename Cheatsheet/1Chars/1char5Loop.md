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