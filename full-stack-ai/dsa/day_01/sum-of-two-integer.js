// let a = 20;
// let b = 30;
// console.log(a + b);

//second Approach : Accept inputs from terminal then calculate them.

// const { log } = require("console");
// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8");

// const value = input.trim().split(" ");

// const a = parseInt(value[0]);
// const b = parseInt(value[1]);

// const sum = a + b;

// console.log(sum);

// Take two integers as input, calculate their sum, and print a message along with the sum.
const fs = require("fs");
const input = fs.readFileSync(0, "utf-8");

const value = input.trim().split(" ");

const a = Number(value[0]);
const b = Number(value[1]);

console.log("Sum is " + (a +b));

console.log(`Sum of ${a} and ${b} : ${a + b}`);