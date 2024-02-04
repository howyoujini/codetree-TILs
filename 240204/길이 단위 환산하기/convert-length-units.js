const fs = require("fs");
let n = fs.readFileSync(0).toString();

const ft = 30.48;
n = Number(n);

console.log((Math.floor(n*ft*100)/100).toFixed(1));