const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

let add = a + b;
let sub = a - b;
let quoti = (a / b).toFixed(0);
let rest = a % b;

console.log(`${add}\n${sub}\n${quoti}\n${rest}`);