let a = 5;
let b = 6;
let c = 7;
let originA = a;
let originB = b;
let originC = c;

b = originA;
c = originB;
a = originC;

console.log(`${a}\n${b}\n${c}`);