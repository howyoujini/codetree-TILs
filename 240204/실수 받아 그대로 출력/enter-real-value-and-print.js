const fs = require("fs");
let n = fs.readFileSync(0).toString();

n = Number(n);

console.log((Math.floor(n*1000)/1000).toFixed(2));