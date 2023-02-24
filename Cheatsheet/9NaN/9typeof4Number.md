## Number + typeof 
function printExponentialValues(x, y) {
    if ((typeof x !== "number") || (typeof y !== "number")) {
        console.log("x or y is not a number");
    }
    let exponentResult = 1;
    let values = "";
    for (let i = 0; i < y; i++) {
            exponentResult *= x;
            values += `${exponentResult} `;
        }
    console.log(values);
}

printExponentialValues(3, 5);
// 3 9 27 81 243 
printExponentialValues(3, 'n');
//x or y is not a number



