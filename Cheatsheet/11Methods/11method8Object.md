## Object + Method 
let person = {
  firstName: 'Michael',
  lastName: 'Smith',
  citizenship: 'Germany',
  city: 'Berlin',
  gender: 'male',
  job: 'driver',
  age: 28,
  height: 178,
  'eye colour': 'brown',
};
person.printDetails = function () {
  return `${person.firstName} ${person.lastName} is a citizen of ${person.citizenship}. They are ${person.gender}, ${person.height}cm tall and have ${person['eye colour']} eyes.`;
};

console.log(person.printDetails()); // "Michael Smith is a citizen of Germany. They are male, 178cm tall and have brown eyes."