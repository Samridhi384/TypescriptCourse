let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Sam";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("Not a valid name", 101);
