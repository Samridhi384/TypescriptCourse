// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "sam",
//   age: 21,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN = "Admin",
  AUTHOR = 100,
  READ_ONLY = "Read_only",
}

const person = {
  name: "sam",
  age: 21,
  hobbies: ["sports", "cooking"],
  //   role: [2, "author"],
  role: Role.ADMIN,
};

// person.role[1] = 10;
// person.role.push("admim");

// person.role = [0 , 'admin' ,'user']

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby);
}

let favouriteHobbie: any[]; //store the type of data that can be stored in this variable in array
favouriteHobbie = ["sports", 1];

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
