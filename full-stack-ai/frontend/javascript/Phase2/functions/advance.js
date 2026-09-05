// # Part 2 — Advanced Functions (21–35)

// 1. Write a recursive function for factorial.
const factorial = (n) => {
    if (n <= 1) return 1;

    return n*factorial(n-1);
};

console.log(factorial(5));

// 2. Write recursive Fibonacci function.
const fibonacci = (n) => {
    if (n<= 0) return 0;
    if (n==1) return 1;
    return fibonacci(n-1) + fibonacci(n-2);
};

console.log(fibonacci(6));

// 3. Create a function that finds power using recursion.
const power = (base, exponent) => {
    if (exponent == 0) return 1;
    return base * power(base , exponent - 1)
};
console.log(power(2 , 5 ));


// 4. Create an IIFE that prints `"Executed"`
(function () {
    console.log("executed");
})();

// 5. Write a function that memoizes factorial calculation.

// 6. Create a closure counter function.
const createCounter = () => {
    let count = 0;
    return function (){
        count += 1;
        return count;
    };
};

const clickCounter =  createCounter();

console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());
console.log(clickCounter());

// 7. Write a function currying example for addition.
// 8. Create debounce function logic.
// 9. Create throttle function logic.
// 10. Write a function that executes only once.
// 11. Create custom implementation of `map`.
// 12. Create custom implementation of `filter`.
// 13. Create custom implementation of `reduce`.
// 14. Create custom `forEach`.
// 15. Explain output:

// jsx
// function test() {
//     return;
//     console.log("Hello");
// }
// console.log(test());
