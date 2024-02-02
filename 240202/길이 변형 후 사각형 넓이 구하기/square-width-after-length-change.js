const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let r = Number(input[0]);
let c = Number(input[1]);

function resulting(row, column){
    row += 8;
    column *= 3;
    console.log(`${row}\n${column}\n${row*column}`);
}

resulting(r, c);