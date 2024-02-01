const fs = require("fs");
let input = fs.readFileSync(0).toString().split("\n");

let a = input[0];
let b = input[1];
let c = input[2];

function rounding(decimal){
    return (Math.round(decimal * 1000)/1000).toFixed(3);
}

console.log(`${rounding(a)}\n${rounding(b)}\n${rounding(c)}`);