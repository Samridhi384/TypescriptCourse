// type Person = {  //or interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// };

// let user1: Person;
// user1 = {
//   name: "Sam",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// };

// user1.greet("Hi there - I am");

//how to use interface with class?

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name?: string;
  age = 30;

  constructor(n?: string) {
    if (n) {
      this.name = n;
    }
  }

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log("Hello world!");
    }
  }
}

let user1: Greetable;

user1 = new Person();
user1.greet("Hi there - I am");

// user1.name = "sam"  error as it is readonly

// type AddFn = (a : number , b: number) => number
interface AddFn {
  (a: number, b: number): number;
}

// let add: AddFn;

// add = (n1: number, n2: number) => n1 + n2;
