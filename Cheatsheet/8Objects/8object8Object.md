## Object + Object 
## Example 1 
const person = {name: "John"}
const job = {role: "Teacher"}

const employee = {...person, ...job}
console.log(employee)
//{ name: 'John', role: 'Teacher' }

## Example 2  
function addKeyAndValue(array, key, value) {
    return array.map(element => {
        element[key] = value;
        return element;
    });
}
console.log(addKeyAndValue([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'title', 'instructor'));
// [
//   { name: 'Elie', title: 'instructor' },
//   { name: 'Tim', title: 'instructor' },
//   { name: 'Matt', title: 'instructor' },
//   { name: 'Colt', title: 'instructor' }
// ]

## Example 3 
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));

console.log(usersMapped)
// [
//   { fullName: 'John Smith', id: 1 },
//   { fullName: 'Pete Hunt', id: 2 },
//   { fullName: 'Mary Key', id: 3 }
// ]
console.log(usersMapped[1].id); // 2
console.log(usersMapped[1].fullName); // Pete Hunt

## Example 4 
const student = {
    firstName: "John",
    lastName: "Smith",
    class: 12,
    printDetails() {
      return `${this.firstName} ${this.lastName} is a student in class ${this.class}`;
    }
  };
  
console.log(student.printDetails());
  //John Smith is a student in class 12

## Example 5   
let firstObject = { firstName: 'John' };
let secondObject = { lastName: 'Smith' };

function mergeObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

console.log(mergeObjects(firstObject, secondObject)); 
// { firstName: 'John', lastName: 'Smith' }
