## Function + Loop
const multiStr = (a, b) => {
  let out = "";
  for (let counter = 0; counter < a; counter++) {
    out += b;
  }
  return out;
}
console.log(multiStr(3, "Woah"));
//WoahWoahWoah