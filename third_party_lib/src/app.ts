// import _ from "lodash";

import { plainToClass } from "class-transformer";
import { Product } from "./product.model";
import { validate } from "class-validator";

// declare const GLOBAL: any;

// console.log(_.shuffle([1, 2, 3]));

// console.log(GLOBAL);

const products = [
  { title: "A ipad", price: 350 },
  { title: "A car", price: 9874 },
];

// const p1 = new Product("A book", 12.99);

// console.log(p1.getInformation());

const loadedProducts = plainToClass(Product, products);

for (const prod of loadedProducts) {
  console.log(prod.getInformation());
}

const newProd = new Product("", -7.6);
validate(newProd).then((errors) => {
  if (errors.length > 0) {
    console.log("VALIDATION ERRORS!");
    console.log(errors);
  } else {
    console.log(newProd.getInformation());
  }
});
