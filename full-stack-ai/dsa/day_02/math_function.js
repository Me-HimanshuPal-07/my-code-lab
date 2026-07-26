// Math Functions

// 1. Math.abs() : convert Negative value to positive. End Goal : Is to make value Positive.
console.log(Math.abs(-10)); // Make Value positive is the end Goal
console.log(Math.abs(10)); // Make Value positive is the end Goal , agar value pehle se hi positive hain toh positive hi rahegi not convert.

// 2. Math.ceil() : is to round of value to high value
console.log(Math.ceil(10.5)); //11

// 3. Math.floor(): is to round of value to lower value
console.log(Math.floor(10.9));//10

// 4. Math.round(): if value below for example 10.5
console.log(Math.round(10.5));//11
console.log(Math.round(10.4));//10
console.log(Math.round(10.8));//11

// 5. Math.trunc()// Remove decimal values.
console.log(Math.trunc(10.3476));//10

// 6. Math.pow(x,y) : x is base; y  is power
console.log(Math.pow(2, 3));//8

// 7. Math.sqrt() : Square Root
console.log(Math.sqrt(25));// 5

// 8. Math.cbrt() : cube Root
console.log(Math.cbrt(27));// 3

// 9. Math.max() : maimum
console.log(Math.max(11, 34, 45, 56, 45));// 56

// 10. Math.min() : minimum
console.log(Math.min(11, 34, 45, 56, 45));// 11

// 11. Math.random() : give random values between 0 - 1.
console.log(Math.random());

// 12. toFixed()
let n = 49.8793475934;
console.log(n.toFixed(2));//49.88

// Problem 1: Calculate Compound Interest
    // CI = P * (1+r/100)^(t) - P
    // example : 
    //         Input : P = 100000, r = 5, t = 3
    //         output : 1576.25

     let prompt = require("prompt-sync")();

    // const p = Number(prompt("Enter Principal Amount : "));
    // const r = Number(prompt("Enter Rate : "));
    // const t = Number(prompt("Enter Time : "));

    // const CI = p * Math.pow((1+r/100), t) - p;

    // console.log(CI.toFixed(2));

// Problem 2: Gnerate OTP
console.log(Math.trunc((Math.random()*8999)+1000));

// Problem 3: Area of Triangle by heron's formula
const a = Number(prompt("Enter First side of Triangle : "));
const b = Number(prompt("Enter Second side of Triangle : "));
const c = Number(prompt("Enter Third side of Triangle : "));

const s = (a + b+ c)/2;
const A = Math.sqrt(s * (s-a)*(s-b)*(s-c));

console.log(A.toFixed(2));


// Problem 4: Circumference Of a Circle

const r = Number(prompt("Enter Radius : "));
const CircumferenceOfCircle = 2*Math.PI*r;
console.log(Math.trunc(CircumferenceOfCircle));
