//calculator
// console.log("//---- Simple Calculator Start ----//");
// let num1 = Number(prompt("Enter First Number : "));
// let operator = prompt(`Enter Opeator (+, -, *, /) : `);
// let num2 = Number(prompt("Enter Second Number : "));
// let result;
// if (operator === "+") result = num1 + num2; 
// else if (operator === "-") result = num1 - num2; 
// else if (operator === "*") result = num1 * num2; 
// else if (operator === "/") result = num2 !== 0 ? num1/num2 : "Cannot Divide By Zero !!";
// else result = "Invalid Operator";

// console.log("Result : ", result);

// console.log(`
// //---- Simple Calculator End ----//

// //---- (Reload Page To Start Again!!) ----//`);

console.log("//---- Advance Calculator Start ----//");

// 1. First Number Input + Validation Loop
let num1 = prompt("Enter First Number : ");
// Jab tak input khali hai ya Number nahi hai, tab tak user se dobara pucho
while (num1 === "" || num1 === null || isNaN(Number(num1))) {
    num1 = prompt("Bhai, valid number daalo! Enter First Number again : ");
}
num1 = Number(num1); // Ab safe hai convert karna

// 2. Operator Input + Validation Loop
let operator = prompt("Enter Operator (+, -, *, /) : ");
if (operator !== null) operator = operator.trim(); // Ekdum space saaf karo

while (!["+", "-", "*", "/"].includes(operator)) {
    operator = prompt("Galat operator hai! Sirf (+, -, *, /) daalo : ");
    if (operator !== null) operator = operator.trim();
}

// 3. Second Number Input + Validation Loop
let num2 = prompt("Enter Second Number : ");
while (num2 === "" || num2 === null || isNaN(Number(num2))) {
    num2 = prompt("Bhai, sahi second number daalo : ");
}
num2 = Number(num2);

// 4. Core Logic Execution
let result;
if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    // Zero division check
    result = num2 !== 0 ? num1 / num2 : "Cannot Divide By Zero !!";
}

// 5. Precision Handling (Agar result 0.1 + 0.2 jaisa floating point ho)
if (typeof result === "number" && !Number.isInteger(result)) {
    result = Math.round(result * 100000) / 100000; // Max 5 decimal places
}

console.log("------------------------");
console.log("Result : ", result);
console.log("//---- Calculator End ----//");