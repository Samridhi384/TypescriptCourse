type Admin = {
  name: string;
  privilege: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends  Employee, Admin {}

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "sam",
  privilege: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

//function overloading
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: number, b: string): string;
function add(a: string, b: number): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(1, "s");
result.split("");

const fetchUser = {
  name: "jd",
  job: { title: "ceo", description: "high post" },
};
console.log(fetchUser?.job?.title); //optional chaining check whether property exists

const userInput = "";

const data1 = userInput ?? "Default";
console.log(data1);

// type UnknownEmployee = Employee | Admin;

// function printInformationOfEmployee(emp: UnknownEmployee) {
//   console.log("Name: " + emp.name);

//   if ("privilege" in emp) {
//     console.log("Privileges: " + emp.privilege);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date: " + emp.startDate);
//   }
// }

// printInformationOfEmployee(e1);

// class Car {
//   drive() {
//     console.log("Drive a car....");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Drive a truck....");
//   }

//   loadCargo(amount: number) {
//     console.log("Loading Cargo... ", amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) {
//     vehicle.loadCargo(1222);
//   }
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "Bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "Horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "Bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "Horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed  ", speed);
// }

// moveAnimal({ type: "Bird", flyingSpeed: 20 });

// // const userInputElement = <HTMLInputElement>document.getElementById("messageInput")!;
// // const userInputElement = document.getElementById(
// //   "messageInput"
// // )! as HTMLInputElement;

// // userInputElement.value = "Hi there";

// //alternative to use !
// const userInputElement = document.getElementById("messageInput");

// if (userInputElement) {
//   (userInputElement as HTMLInputElement).value = "Hi there";
// }

// //BELOW IS USED WHEN WE DO NOT KNOW HOW MANY PROPERTIES WE NEED TO USE
// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not a valid mail",
//   userName: "Username is required",
// };
