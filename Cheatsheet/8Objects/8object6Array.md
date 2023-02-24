## Object + Array 
## Example 1 
function getKeysAndValues(obj) {
  const keyArray = Object.keys(obj);
  const valueArray = Object.values(obj);
  return [keyArray, valueArray];
}

console.log(getKeysAndValues({ a: 1, b: 2, c: 3 })); 
//[ [ 'a', 'b', 'c' ], [ 1, 2, 3 ] ]

## Example 2 
const myObjects = {
  cats: 1,
  dogs: 2,
  turtles: 4,
};

function getKeyValuePairs(object) {
  return Object.entries(object);
}

console.log(getKeyValuePairs(myObjects)); 
// [ [ 'cats', 1 ], [ 'dogs', 2 ], [ 'turtles', 4 ] ]

## Example 3 
const scrabbleHand = [
    { tile: "N", score: 1 },
    { tile: "K", score: 5 },
    { tile: "Z", score: 10 },
    { tile: "X", score: 8 },
    { tile: "D", score: 2 },
    { tile: "A", score: 1 },
    { tile: "E", score: 1 }
];

function calcMaxScrabbleScore(tiles) {
    let total = 0;
    for (let i = 0; i < tiles.length; i++) {
        total += tiles[i]['score'];
    }
    return total;
}

console.log(calcMaxScrabbleScore(scrabbleHand));
//28
