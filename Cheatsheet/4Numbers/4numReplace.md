## Number + Replace 
function reverseNum(numToReverse) {
    // if (Number.isNaN(Number(numToReverse))) return 'Please Enter a number';
    return (
        parseFloat(
            numToReverse
                .toString()
                .split("")
                .reverse()
                .join("")
        ) * Math.sign(numToReverse)
    ); // Math.sign() returns the positive or negative sign of the integer
}

console.log(reverseNum(123));
//321
console.log(reverseNum("abc"));
//NaN