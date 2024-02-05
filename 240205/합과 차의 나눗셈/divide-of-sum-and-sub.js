const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

console.log((Math.floor((a+b)/(a-b)*1000)/1000).toFixed(2));