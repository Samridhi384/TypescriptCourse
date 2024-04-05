function add(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  if (showResult) {
    console.log(phrase + result);
  } else {
    return result;
  }
}

let number1: number;
number1 = 7;
const number2 = 3.8;
const printOutput = true;
const message = "The sum is ";

add(number1, number2, printOutput, message);
