// Problem : write a program to take two inputs a and b and find value of a raised to the power b.

let prompt = require("prompt-sync")();

let a = Number(prompt("Enter First Number:"));
let b = Number(prompt("Enter Second Number:"));
let result = 1;
for( let i = 1; i<=b; i++){
    result*=a;
}
console.log(result);
