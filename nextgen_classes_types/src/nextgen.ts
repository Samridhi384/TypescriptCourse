const n = "sam";
// n = 'john'

let age = 29;
age = 30; //can be changed value

// let result

// function add(a: number, b: number) {
//   let result;
//   return (result = a + b);
// }

// if (age > 50) {
//   let isOld;
//   isOld = true;
// }
// console.log(isOld);

// console.log(result);

// const add = (a: number, b: number = 1) => a + b;

// console.log(add(2, 5));

// const printOutput: (o: number | string) => void = (output) =>
//   console.log(output);

// printOutput(add(2)); //make sure to write default parameter afterwards as ts js considers the provided arguements are in order

const hobbies = ["dancing", "cooking"];

// const activities = ["skating", ...hobbies];

// // activities.push(hobbies);

const person = {
  name: "John Doe",
  age: 40,
};

// const copiedPerson = { ...person };

// const add = (...numbers: number[]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0);
// };

// console.log(add(3, 9, 7, 4.3, 2, 1.4));

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { name: userName, age: userAge } = person;

console.log(userName, age);
