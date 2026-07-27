// Problem 01: Checker user is eligible for vote or not.

let prompt = require("prompt-sync")();
let name = prompt("Enter your Name : ");
let age = Number(prompt("Enter your age : "));
if (age >= 18){
    console.log(`${name} You are eligible for voting.`)
}
else{
    console.log(`Sorry !! ${name} you arenot eligible for voting.`);
}
