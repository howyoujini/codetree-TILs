const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);
let c = Number(input[2]);

console.log(`${a+b+c}\n${((a+b+c)/3).toFixed(1)}`);