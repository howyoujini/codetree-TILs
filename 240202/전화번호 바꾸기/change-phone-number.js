const fs = require("fs");
let input = fs.readFileSync(0).toString().split("-");

let z = input[0];
let x = input[1];
let y = input[2];

console.log(`${z}-${y}-${x}`);