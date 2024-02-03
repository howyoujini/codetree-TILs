let a = 5;
let b = 6;
let c = 7;
let originA = a;
let originB = b;

b = a;
c = originB;
originA = c;

console.log(`${a}\n${b}\n${c}`);