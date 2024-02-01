const fs = require("fs");
const re = /[" ", \n]/;
let input = fs.readFileSync(0).toString().split(re);

let a = input[0];
let b = input[1];
let c = input[2];

console.log(`${a} ${b} ${c}`);