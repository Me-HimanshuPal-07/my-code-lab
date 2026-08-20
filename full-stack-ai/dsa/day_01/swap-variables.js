// Swap two variables via 3 methods

const fs = require("fs");

const input = fs.readFileSync(0, "utf-8");

const value = input.trim().split(" ");

let a = Number(value[0]);
let b = Number(value[1]);

//method 01: Swap two variables using extra variables
// let extraVar ;
// extraVar = a;
// a = b;
// b = extraVar;

//Method 2: Swap two variables without using extra variables.

// a = b+a; // 40 + 20 = 60
// b = a-b; // a = 60 now, 60 - 40 = 20 
// a = a-b; // b is now 20, 60-20 = 40

// Method 3: Swap two varibles using array method
// [a, b] = [b, a];
// console.log(`a : ${a}`);
// console.log(`b : ${b}`);
