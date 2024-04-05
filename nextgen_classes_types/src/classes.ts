abstract class Department {
  static fiscalYear = 2023;
  //   private id: string;
  //   public name: string;
  protected employees: string[] = [];

  constructor(protected readonly id: string, public name: string) {
    // this.id = id;
    // this.name = name;
    //   this.fiscalYear  = Department.fiscalYear; error as we can not access static mthod or variable from non static method also we can't use this keyword
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  //   static describe(this: Department): void;
  //{
  //     console.log(`Department (${this.id}) Name is ${this.name}`);
  //   }

  addEmployees(employee: string) {
    //   this.id = 'd2' //will give error as its readonly
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Department.createEmployee("Manu");
console.log(employee1, Department.fiscalYear);

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

const it = new ITDepartment("d1", ["Sam"]);
// console.log(it);

// it.addEmployees("Sam");
// it.addEmployees("Max");

// it.describe();
// it.printEmployeeInformation();

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No reports yet");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please provide a valid value");
    }
    this.addReports(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "Sam") {
      return;
    }
    this.employees.push(name);
  }

  addReports(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  describe() {
    console.log("Accounting department -ID ", this.id);
  }
  printReports() {
    console.log(this.reports);
  }
}

const accounting = new AccountingDepartment("d2", []);
// console.log(accounting);

// console.log(accounting.mostRecentReport);

// accounting.addEmployees("Sam");
// accounting.addEmployees("Max");

// accounting.addEmployee("Sam");
// accounting.addEmployee("Max");

// accounting.employees[2] = "Anna"; //will give error as employess is private and so can't access
// accounting.name = 'new name' //has access as it is public

accounting.describe();
// accounting.printEmployeeInformation();

// const accountingCopy = { name: "Marketing", describe: accounting.describe };
// accountingCopy.describe();

// accounting.mostRecentReport = "Year end report";
// accounting.addReports("SOMETHING WENT WRONG....");
// console.log(accounting.mostRecentReport);

// accounting.printReports();
