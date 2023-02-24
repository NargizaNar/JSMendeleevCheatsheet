## Function + Boolean 
function isLEQZero(number) {
  return number <= 0;
}

console.log(isLEQZero(-10));
// true

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

console.log(isPrime(7)); 
// true
console.log(isPrime(9)); 
// false