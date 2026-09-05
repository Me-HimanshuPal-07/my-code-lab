// Problem : Accept a number as input and prints its table. like 5 * 1 = 5 upto 10th term.

// Approach 01:

// let prompt = require("prompt-sync")();

// function printTable (n){
   
//     for(let i = 1; i<=10; i++){
//         console.log(`${n} * ${i} = ${n*i}`);
//     }
// }

// let number = Number(prompt("Enter Number : "));
// printTable(number);

// Approach 02:

let prompt = require("prompt-sync")();

function printTable (n){
   let result = "";
    for(let i = 1; i<=10; i++){
       result += `${n} * ${i} = ${n*i}\n`;
    }
    return result;
}

let number = Number(prompt("Enter Number : "));
console.log(printTable(number));
