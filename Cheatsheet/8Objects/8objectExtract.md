## Object + Extract 
## Example 1
const doggo = {
  name: "Toby",
  breed: "Yorkshire and Scottish terrier mix",
 
  favoriteFoods: ["meats", "doggy biscuits", "bones"],
};
console.log(doggo.favoriteFoods[1]);
//doggy biscuits

## Example 2 
let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

function groupById(array) {
  return array.reduce((obj, value) => {
    obj[value.id] = value;
    return obj;
  }, {})
  }

let usersById= groupById(users)
console.log(usersById)
<!-- {
  john: { id: 'john', name: 'John Smith', age: 20 },
  ann: { id: 'ann', name: 'Ann Smith', age: 24 },
  pete: { id: 'pete', name: 'Pete Peterson', age: 31 }
} -->
