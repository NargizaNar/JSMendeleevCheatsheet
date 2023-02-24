## Number + Loop 
function pow(x, n) {
    let result = x;
  for(let i=1;i<n;i++){
    result *= x
  }
  return result
  }
console.log(pow(1, 100))
  //1