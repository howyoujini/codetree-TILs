const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

function multiSol(x, y){
    return `${x} * ${y} = ${x*y}`;
}

function diviSol(x, y){
    return `${x} / ${y} = ${Math.floor(x/y)}`;
}

console.log(`${multiSol(a, b)}\n${diviSol(a, b)}`);