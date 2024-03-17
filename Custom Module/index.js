//2 ways of importing module :
const calculator = require("./calculator");
const { add, subtract } = require("./calculator");


console.log(add(10, 20));
console.log(subtract(20, 10));
console.log(calculator.multiply(10, 20));
console.log(calculator.divide(20, 10));
console.log(calculator.join(1, 2));