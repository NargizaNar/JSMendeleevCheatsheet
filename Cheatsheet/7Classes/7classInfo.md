# Class

Classes are a template for creating objects.

## Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

## Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

## Expression; the class has its own name
const Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};

## Example 1
class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
		// Complete the code!
		this.fullname = `${firstname} ${lastname}`;
		this.email = `${firstname}.${lastname}@company.com`.toLowerCase();
	}
}

let nargiza= new Employee("Nargiza", "Walther")
console.log(nargiza)

// Employee {
//   firstname: 'Nargiza',
//   lastname: 'Walther',
//   fullname: 'Nargiza Walther',
//   email: 'nargiza.walther@company.com'
// }

## Example 2 
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    return `${this.name}, ${this.age} years old.`;
  }
}

const fran = new Person("Fran", 25);
console.log(fran.describe());
//Fran, 25 years old.
