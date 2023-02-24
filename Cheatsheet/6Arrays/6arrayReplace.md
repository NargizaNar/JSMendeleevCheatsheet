## Array + Replace 
## Example 1 

function doubleValues(array) {
    const currentArray = array.map(element => element * 2);
    return currentArray;
}
console.log(doubleValues([1, 2, 3]));
//[ 2, 4, 6 ]

## Example 2 

let fruit, vegetable, food;
[fruit, vegetable, ...food] = ["banana", "cucumber", "bread", "cakes", "pizza"];
console.log(fruit, vegetable, food);
// banana cucumber [ 'bread', 'cakes', 'pizza' ]

## Example 3 
myArray[3] = "fourth element";
console.log(myArray);
// [ 1, 2, 3, 'fourth element', 5 ]

## Example 4 
const board = [
  [1, 2, 3],
  ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
  [true, false]
];

for (let i = 0; i < board.length; i++) {
  for (let j = 0; j < board[i].length; j++) {
    console.log(board[i][j]);
  }
}
<!-- 1
2
3
quick
brown
fox
jumped
over
lazy
dog
true
false -->
## Array + Add More to Array
## Example 1
const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities[0] = "Berlin";
console.log(euroCities);
// [ 'Berlin', 'London', 'Rome', 'Prague', 'Valletta' ]


## Example 2  
const worldCities = ["Paris", "London", "Tashkent", "Berlin", "Norwich"];
worldCities.splice(1, 0, "Washington");
console.log(worldCities);
//[ 'Paris', 'Washington', 'London', 'Tashkent', 'Berlin', 'Norwich' ], added Washington between Paris and London

## Example 3


const euroCities = ["Paris", "London", "Rome", "Prague", "Valletta"];
euroCities.push("Budapest");
console.log(euroCities); 
//[ 'Paris', 'London', 'Rome', 'Prague', 'Valletta', 'Budapest' ]. added Budapest at the end  -->


