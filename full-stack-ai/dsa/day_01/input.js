// let prompt = require("prompt-sync")();

// let greet = prompt("Enter your name : ");
// console.log(`Good Afternoon : ${greet}`);

// Second Approach:
const fs = require("fs"); // load fs module from node package in your program.
const input = fs.readFileSync(0, "UTF-8"); // read input from terminal it give you string not integer like "7 8".

const value = input.trim().split(" "); // trim() " 7 8 " ---> "7 8" dega side ke space hta dega. aur split space ko separater mankar "7 8" --> "7" "8".
