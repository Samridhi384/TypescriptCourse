//genric type array
// const names: Array<string> = []; //string[]
// names[0].split('')

//generic type promises
// const promise: Promise<number> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(10);
//   }, 2000);
// });

// promise.then((data) => {
//   // data.split('') //for string
// });

function merge<T extends object, U extends object>(objA: T, objB: U) {
  //objA :object can't be used as  a generic type because it doesn't have any type paramters
  return Object.assign({}, objA, objB);
}

const mergeObj = merge({ name: "sam", hobbie: ["dance"] }, { age: 30 });
console.log(mergeObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let description = "Got no element";
  if (element.length === 1) {
    description = "Got 1 element";
  } else if (element.length > 1) {
    description = `Got ${element.length} elements`;
  }

  return [element, description];
}

console.log(countAndDescribe(["a", "b"]));

//keyof constraint

function extractAndConvert<T extends Object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value of ${obj[key]}`;
}

console.log(extractAndConvert({ name: "Max" }, "name"));

//generic classes
class DataStorage<T extends string | number | boolean> {
  //only for primitive types
  private data: T[] = [];

  addData(item: T) {
    this.data.push(item);
  }

  removeData(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getData() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addData("Hello");
textStorage.addData("Hi");
textStorage.removeData("Hello");
console.log(textStorage.getData());

const numberStorage = new DataStorage<number>(); // or <number | string>

// const objStorage = new DataStorage<object>();
// const maxObject = { name: "max" };
// objStorage.addData(maxObject);
// objStorage.addData({ name: "manu" });
// objStorage.removeData(maxObject);
// console.log(objStorage.getData());

interface CourseGoal {
  title: string;
  desciption: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  desciption: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.desciption = desciption;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

const users: Readonly<string[]> = ["Max", "Manu"];
// name.push("ssm")
// name.pop() //as they are readonly
