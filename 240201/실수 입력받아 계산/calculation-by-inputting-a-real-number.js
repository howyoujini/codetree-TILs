const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let a = input[0]*100;
let b = input[1]*100;

let result = (a + b)* 0.01;

console.log(result.toFixed(2));