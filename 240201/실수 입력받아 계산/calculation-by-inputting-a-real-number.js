const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

const afterDecimalPoint = 100;

let a = input[0]*100;
let b = input[1]*100;

let result = (a + b)/afterDecimalPoint;

console.log(result.toFixed(2));