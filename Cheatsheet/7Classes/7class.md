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

# Class + String 
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  containedVAT() {
    const taxIncluded = this.price * 0.16;
    return `${taxIncluded.toFixed(2)} € VAT incl.`;
  }

  toText() {
    return `${this.name} ${this.price.toFixed(
      2
    )} € in total. ${this.containedVAT()} (16%).`;
  }
}

class Cart {
  constructor() {
    this.products = [];
  }

  addProduct(shoppedProduct) {
    if (shoppedProduct instanceof Product) {
      this.products.push(shoppedProduct);
      return `Your shopping cart now contains ${this.products.length} products`;
    } else {
      return `This is not available in our shop!`;
    }
  }

  getProductInfoCart() {
    return this.products.forEach((item) => console.log(item.toText()));
  }

  getTotalPriceCart() {
    const sum = this.products
      .map((element) => Number(element.price))
      .reduce((acc, curr) => acc + curr, 0);
    return `The total for ${this.products.length} items in your cart amounts to ${sum} €.`;
  }
}

// Create products
const adidasShoes = new Product("Adidas running shoes", 150.0);
const tracksuit = new Product("Puma tracksuit", 99.99999);

// Test products
// console.log(adidasShoes.toText());
// console.log(adidasShoes.containedVAT());

// Create cart
const cart = new Cart();

// Test cart

console.log(cart.addProduct({ name: "painting brush", price: 20 }));
// Fails; not a product!
console.log(cart.addProduct(adidasShoes));
console.log(cart.addProduct(tracksuit));
console.log(cart.getTotalPriceCart());
console.log(cart.getProductInfoCart());
console.log(cart.addProduct("potato"));
// This is not available in our shop!
// Your shopping cart now contains 1 products
// Your shopping cart now contains 2 products
// The total for 2 items in your cart amounts to 249.99999 €.
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// Puma tracksuit 100.00 € in total. 16.00 € VAT incl. (16%).
// undefined
// This is not available in our shop!

## Class + Number 
class Cylinder {
  constructor(height, radius) {
    this.height = height;
    this.radius = radius;
  }
  getVolume() {
    return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}

const cylinder = new Cylinder(4, 6);
console.log(cylinder.getVolume());
//452.3893
# Class + Boolean 
class TV {
  constructor(brand) {
    this.brand = brand;
    this.channel = 1;
    this.volume = 50;
  }

  increaseVolume() {
    if (this.volume < 100) {
      this.volume++;
      console.log("Volume", this.volume);
    }
  }
  decreaseVolume() {
    if (this.volume >= 0) {
      this.volume--;
      console.log("Volume", this.volume);
    }
  }
  getNewChannel() {
    this.channel = Math.floor(Math.random() * 51);
    console.log(`Channel: ${this.channel}`);
  }

  getTVstatus() {
    return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
  }

  resetTV() {
    if(this.volume !== 1 || this.channel !== 50) {
      this.channel = 1;
      this.volume = 50
    }
  }
}

const tv = new TV("Panasonic");
tv.increaseVolume();
tv.decreaseVolume();
tv.getNewChannel();
console.log(tv.getTVstatus());
tv.resetTV();
console.log(tv.getTVstatus());
// Volume 51
// Volume 50
// Channel: 8
// Panasonic at channel 8, volume 50
// Panasonic at channel 1, volume 50

# Class + Replace 
class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  start() {
    this.render();
  }
}

let clock = new Clock({template: "h:m:s"});
clock.start();
//13:49:34


## Class + Add 
class Employee {
  constructor(id, firstName, lastName, socialSecurityNumber, salary) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.socialSecurityNumber = socialSecurityNumber;
    this.salary = salary;
  }

  generatePayslip() {
    let monthlySalary = this.salary / 12;
    return `Employee ID : ${this.id}
      Name : ${this.firstName} ${this.lastName}
      Tax ID : ${this.socialSecurityNumber}
      Pay : $ ${monthlySalary}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, socialSecurityNumber, salary) {
    // super refers to the parent class, in this case Employee
    super(id, firstName, lastName, socialSecurityNumber, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    this.managedEmployees.push(employee);
  }

  }


// Create a new employee instance
let anEmployee = new Employee(123, 'John', 'Smith', 99090, 60000.0);

// Create a new manager instance
let aManager = new Manager(113, 'Frank', 'Pointyhair', 88454, 90000.0);

console.log(anEmployee.generatePayslip());
// Employee ID : 123
//       Name : John Smith
//       Tax ID : 99090
//       Pay : $ 5000

console.log(aManager.generatePayslip());
// Employee ID : 113
//       Name : Frank Pointyhair
//       Tax ID : 88454
//       Pay : $ 7500 
