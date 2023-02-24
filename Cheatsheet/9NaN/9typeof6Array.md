## Array + typeof 
const len = x => typeof x === "string" || Array.isArray(x) ? x.length : null;
console.log(len("xx"));
//2
console.log(len(""));
//0
console.log(len([1]));
//1
console.log(len({}));
//0
