const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let c = input[0];
let a = input[1];
let b = input[2];

function rounding(num){
    return (Math.round(num*100)/100).toFixed(2);
}

console.log(`${c}\n${rounding(a)}\n${rounding(b)}`);