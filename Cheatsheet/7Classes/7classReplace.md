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
//       Pay : $ 7500  -->
