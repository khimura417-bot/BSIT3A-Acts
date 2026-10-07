// Object literals (2)
const companyMeta = { name: "DevCorp", year: 2026 };
const taxRules = { rate: 0.15, deduction: 500 };

// Variables (3)
let totalPayroll = 0;
const maxLimit = 10;
let runCount = 0;

// Arrays (3)
let employeesArray = [];
let processingLogs = ["Init"];
let activeStatuses = [true, true, false];

console.log(`Initializing ${companyMeta.name} for year ${companyMeta.year}`);

// Class 1 (Abstract Base Class) - Abstraction (1) & Encapsulation (1)
class Employee {
  #id; // Encapsulation 1

  constructor(name, id) {
    // Conditional 1 (Abstraction check)
    if (this.constructor === Employee) {
      throw new Error("Cannot instantiate abstract class Employee directly.");
    }
    this.name = name;
    this.#id = id;
  }

  // Method 1
  getId() {
    return this.#id;
  }

  // Method 2 (Abstract Method)
  calculatePay() {
    throw new Error("Method 'calculatePay()' must be implemented.");
  }
}

// Class 2 - Inheritance (1), Constructor (1), Polymorphism (1), Encapsulation (2)
class FullTimeEmployee extends Employee {
  #monthlySalary; // Encapsulation 2

  constructor(name, id, salary) {
    super(name, id); // Constructor 1
    this.#monthlySalary = salary;
  }

  // Method 3 (Polymorphism - Method Overriding)
  calculatePay() {
    // Conditional 2
    if (this.#monthlySalary < 0) {
      return 0;
    }
    return this.#monthlySalary - taxRules.deduction;
  }
}

// Class 3 - Inheritance (2), Constructor (2)
class PartTimeEmployee extends Employee {
  constructor(name, id, hourlyRate, hoursWorked) {
    super(name, id); // Constructor 2
    this.hourlyRate = hourlyRate;
    this.hoursWorked = hoursWorked;
  }

  // Method 4 (Polymorphism - Method Overriding)
  calculatePay() {
    // Conditional 3
    if (this.hoursWorked > 40) {
      return (40 * this.hourlyRate) + ((this.hoursWorked - 40) * this.hourlyRate * 1.5);
    }
    return this.hoursWorked * this.hourlyRate;
  }
}

// Class 4
class Company {
  constructor() {
    this.staff = [];
  }

  // Method 5
  addStaff(employee) {
    if (this.staff.length < maxLimit) {
      this.staff.push(employee);
      employeesArray.push(employee.name);
    }
  }
}

// Objects (4 instances)
const emp1 = new FullTimeEmployee("Alice", 101, 5000); // Object 1
const emp2 = new FullTimeEmployee("Bob", 102, 4000);   // Object 2
const emp3 = new PartTimeEmployee("Charlie", 103, 20, 45); // Object 3
const myCompany = new Company(); // Object 4

myCompany.addStaff(emp1);
myCompany.addStaff(emp2);
myCompany.addStaff(emp3);

// Loop 1 (For loop)
for (let i = 0; i < myCompany.staff.length; i++) {
  let currentEmp = myCompany.staff[i];
  let pay = currentEmp.calculatePay();
  totalPayroll += pay;
}

// Loop 2 (While loop)
while (runCount < 2) {
  processingLogs.push(`Run step ${runCount}`); // Backticks added here
  runCount++;
}

// Loop 3 (For...of loop)
for (const status of activeStatuses) {
  if (status) {
    processingLogs.push("Active status verified");
  }
}

console.log("Total Payroll:", totalPayroll);