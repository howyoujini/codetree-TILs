const fs = require("fs");
let input = fs.readFileSync(0).toString().split(":");

let h = input[0];
let m = input[1];

console.log(`${Number(h)+1}:${m}`);