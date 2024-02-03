const fs = require("fs");
let input = fs.readFileSync(0).toString();

let a = input[0];

console.log(((a*2)+3).toString());