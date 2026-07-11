// ## Intermediate Level

// 1. Write a function expression for multiplication.
// const multiply = function (a, b) {
//     return a * b;
// };

// console.log(multiply (5, 6));

// // 2. Convert a normal function into an arrow function.
// function simpleFunction (a) {
//     console.log(`hlo ${a}`);
    
// }
// simpleFunction("Himanshu");

// const arrowFunction = (a) => {
//     console.log(`hlo ${a}`);
// };
// arrowFunction("Himanshu");

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
// const unlimitedNumberSum = (...numbers) => {
//     let totalSum = 0;
//     for(let n of numbers){
//         totalSum += n;
//     }
//     return totalSum;
// };
// console.log(unlimitedNumberSum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));


// 4. Write a function that counts vowels in a string.
// const countVovels = (str) => {
//     let count = 0;
//     let vovels = ["a", "e", "i", "o", "u"];
//     for(let v of str.toLowerCase()){
//         if(vovels.includes(v)) count++;
//     }
//     return count;
// };
// console.log(countVovels("Himanshu"));

// 5. Create a function that checks if a string is palindrome.
// const isPalindromeShort = (str) => {
//     let cleanStr = str.toLowerCase();
    
//     // 2. Split kiya (array bana), Reverse kiya (ulta kiya), Join kiya (wapas string banayi)
//     let reversedStr = cleanStr.split('').reverse().join('');
    
//     // 3. Direct compare karke true/false bhej diya
//     return cleanStr === reversedStr;
// };


// console.log(isPalindromeShort("Arora")); 
// console.log(isPalindromeShort("Himanshu"));

// or

// const isPalindromeLoop = (str) => {
//     let cleanStr = str.toLowerCase();
//     let len = cleanStr.length;
    
//     // Sirf aadhi string tak loop chalaya (kyunki aage aur peeche ke jode ban rahe hain)
//     for (let i = 0; i < len / 2; i++) {
//         // Agar shuruat ka character peeche ke character se match NAHI hua
//         if (cleanStr[i] !== cleanStr[len - 1 - i]) {
//             return false; // direct exist
//         }
//     }
    

//     return true; 
// };

// console.log(isPalindromeLoop("121"));
// console.log(isPalindromeLoop("Nitin"));


// 6. Write a callback function example using `setTimeout`.
// setTimeout(function (){
//     console.log(`Hlo Himanshu.`);
    
// }, 5000);

//or

// const greet = (name) => {
//     console.log(`Hlo ${name}.`);
// };

// // setTimeout ko chalaya: (function, time, parameter1, parameter2...)
// setTimeout(greet, 5000, "Himanshu");

// 7. Create a higher-order function that executes another function twice.
// const sayhi = (name) => {
//     console.log(`Hello ${name}`);
// };

// const executedtwice = (fn, name) => {
//     fn(name);
//     fn(name);
// };

// executedtwice(sayhi, "Himanshu");

// 8. Write a function that returns another function.
// function makeGreeter(greeting) {
//     return function(name) {
//         console.log(greeting + ", " + name);
//     };
// }
// const helloGreeter = makeGreeter("Hello");
// helloGreeter("Aman");

// 9. Create a pure function for subtraction.
// function pure (a,b){
//     return a - b;
// }
// console.log(pure(6,3));


// 10. Create an impure function using global variable modification.
// let discountAmount = 0;
// function discount (billAmount) {
//     discountAmount  = billAmount*5/100;       
//     return discountAmount;
// }

// console.log(discount(4000));