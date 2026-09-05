# 🎯 JavaScript Phase 1 — Interview Prep Notes

Here's your interview prep file — covering every concept from Phase 1, converted into interview-style questions and answers. These are the kind of conceptual, tricky, and coding-round questions that typically come up, with short explanations so you understand the "why," not just memorize the answer.

---

## 📌 Section 1: JavaScript Basics

**Q1. What is JavaScript and where is it used?**
JavaScript is a programming language originally built to add interactivity to web pages. Today it's used in browsers, on servers (Node.js), in mobile apps (React Native), and in desktop apps (Electron).

**Q2. What is a JavaScript engine? Give some examples.**
An engine is the software that actually runs JS code. Chrome uses **V8**, Firefox uses **SpiderMonkey**, Safari uses **JavaScriptCore**. Node.js also uses V8.

**Q3. Besides `console.log()`, what other console methods exist?**
`console.warn()` (shown in yellow), `console.error()` (shown in red), and `console.table()` (displays data as a formatted table).

**Q4. What's the purpose of comments?**
Comments explain code, temporarily disable code during testing, and act as reminders for the future. JS ignores them entirely — `//` for single line, `/* */` for multi-line.

---

## 📌 Section 2: Variables (var, let, const)

**Q5. What's the difference between `var`, `let`, and `const`?**

| Feature | var | let | const |
|---|---|---|---|
| Reassignable | ✅ | ✅ | ❌ |
| Redeclarable (same scope) | ✅ | ❌ | ❌ |
| Scope | Function | Block | Block |
| Hoisted | ✅ (as undefined) | ✅ (TDZ) | ✅ (TDZ) |

**Q6. What's the difference between declaration and initialization?**
Declaration is creating the variable (`let x;`). Initialization is assigning it a value (`x = 10;`).

**Q7. Can you mutate the contents of a `const` object or array?**
Yes! `const` only locks the reference, not the value. So `const arr = [1,2]; arr.push(3)` works fine, but `arr = [4,5]` throws an error.

```javascript
const person = { name: "Aman" };
person.name = "Rahul"; // ✅ works
// person = {} // ❌ Error
```

**Q8. What are the variable naming rules?**
Must start with a letter, `_`, or `$`. Cannot start with a digit. Cannot use reserved keywords. Names are case-sensitive.

---

## 📌 Section 3: Data Types

**Q9. How many primitive data types does JavaScript have? Name them.**
7 primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

**Q10. What's the difference between `null` and `undefined`? (Very common interview question!)**
`undefined` means JS itself assigned this because no value was given. `null` means the developer intentionally assigned an "empty" value.

```javascript
let a;          // undefined
let b = null;   // null
```

**Q11. What does `typeof null` return, and why?**
It returns `"object"` — this is a **famous bug from 1995** that was never fixed because too much existing code depends on that behavior.

**Q12. Give some outputs of the `typeof` operator.**

```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug)
typeof {}          // "object"
typeof []          // "object" (arrays are objects too)
typeof function(){}// "function"
```

---

## 📌 Section 4: Type Conversion & Coercion

**Q13. What's the difference between type conversion and type coercion?**
Conversion is **explicit** — the developer does it deliberately (`Number("42")`). Coercion is **implicit** — JS converts types automatically behind the scenes.

**Q14. Predict the output (classic trick questions):**

```javascript
console.log("5" + 3);      // "53"  → string concatenation
console.log("5" - 3);      // 2     → number subtraction
console.log(true + 1);     // 2     → true = 1
console.log(false + 1);    // 1     → false = 0
console.log(null + 1);     // 1     → null = 0
console.log(undefined + 1);// NaN
```

**Rule of thumb:** the `+` operator concatenates as soon as one side is a string. All other math operators try to convert operands to numbers.

**Q15. What are the falsy values? (Memorize these 6)**
`false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

**Q16. Is an empty array `[]` truthy or falsy?**
**Truthy!** This is a common trap — both empty arrays and empty objects are truthy; only an empty string is falsy.

---

## 📌 Section 5: Operators

**Q17. What's the difference between `==` and `===`? Which should you use?**
`==` (loose equality) performs type coercion. `===` (strict equality) checks both type and value. **Always prefer `===`** to avoid hidden bugs.

```javascript
0 == false          // true  (surprising)
"" == false         // true  (surprising)
null == undefined   // true  (surprising)
0 === false         // false (sane)
```

**Q18. What's the difference between `x++` and `++x`?**
`x++` (post-increment) returns the old value first, then increments. `++x` (pre-increment) increments first, then returns the new value.

```javascript
let x = 5;
let y = x++;  // y = 5, x = 6
let z = ++x;  // x = 7, z = 7
```

**Q19. How do `&&` and `||` short-circuit?**
`&&` returns the first **falsy** value (or the last value if all are truthy). `||` returns the first **truthy** value (or the last value if all are falsy). This is why they're used for default values:

```javascript
let username = userInput || "Guest";
```

**Q20. What's the syntax of the ternary operator?**
`condition ? valueIfTrue : valueIfFalse`

```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

---

## 📌 Section 6: Strings

**Q21. What are template literals and what's their benefit?**
Created using backticks (`` ` ``), they let you embed variables directly with `${...}`. They also support multi-line strings naturally.

```javascript
let name = "Aman";
console.log(`Hello, ${name}!`);
```

**Q22. Are strings mutable?**
**No, strings are immutable.** No method (`toUpperCase()`, `slice()`, etc.) modifies the original string — each returns a new string.

```javascript
let x = "hello";
x.toUpperCase();
console.log(x); // "hello" — unchanged!
```

**Q23. What's the difference between `slice()` and `substring()`?**
Both extract part of a string, but `slice()` accepts negative indices while `substring()` treats negative indices as 0.

**Q24. Name some important string methods.**
`length`, `toUpperCase()`, `toLowerCase()`, `indexOf()`, `includes()`, `slice()`, `replace()`, `split()`, `trim()`, `repeat()`, `startsWith()`, `endsWith()`, `charAt()`.

---

## 📌 Section 7: Numbers & Math

**Q25. What's the difference between `Math.floor()`, `Math.ceil()`, and `Math.round()`?**
`floor()` always rounds down, `ceil()` always rounds up, `round()` rounds to the nearest integer (0.5 and above rounds up, below rounds down).

**Q26. How do you generate a random number within a range?**

```javascript
let rand = Math.floor(Math.random() * (max - min + 1)) + min;
```

**Q27. What's the difference between `parseInt()` and `Number()`?**
`Number("42abc")` returns `NaN` (the entire string must be a valid number). `parseInt("42abc")` returns `42` (parses as much as it can, then stops).

**Q28. Does `.toFixed()` return a number or a string?**
**It returns a string!** This is a common gotcha. If you need to do further math on it, wrap it with `Number()`.

```javascript
let x = (0.1 + 0.2).toFixed(2); // "0.30" - it's a string!
```

---

## 📌 Section 8: Conditionals & Loops

**Q29. What happens if you forget `break` in a `switch` statement?**
Execution "falls through" — meaning the next case runs too, without checking its condition. This is a silent bug that's hard to catch.

**Q30. What's the difference between `for`, `while`, and `do-while` loops?**
`for` is used when the number of iterations is known upfront. `while` checks the condition before running. `do-while` **always runs at least once**, even if the condition is false, because the condition is checked at the end.

```javascript
let x = 10;
do {
    console.log(x); // this runs once
} while (x < 5);
```

**Q31. What's the difference between `break` and `continue`?**
`break` exits the entire loop immediately. `continue` skips only the current iteration and moves to the next one.

**Q32. What's the difference between `for...of` and `for...in`?**
`for...of` iterates over **values** (used for arrays, strings). `for...in` iterates over **keys** (used for objects).

---

## 🔥 Section 9: Tricky "Guess the Output" Questions

These types of questions come up often in interviews — think it through first, then check the answer!

```javascript
// Q1
console.log(1 + "1");
// Answer: "11" (number + string = string concatenation)

// Q2
console.log("5" - "2");
// Answer: 3 (both convert to numbers because of '-')

// Q3
console.log([] + []);
// Answer: "" (empty array converts to empty string)

// Q4
console.log([] + {});
// Answer: "[object Object]"

// Q5
console.log(typeof NaN);
// Answer: "number" (yes, NaN is technically a "number" type!)

// Q6
console.log(2 == "2");
// Answer: true (loose equality coerces)

// Q7
let x = 10;
let y = x++ + ++x;
console.log(y);
// Answer: 22 → x++ returns 10 (x becomes 11), then ++x makes x=12 and returns 12 → 10+12=22
```

---

## 💻 Section 10: Coding Round Questions (Practice These!)

**Q1. Write FizzBuzz.**
Print numbers 1 to 50, but print "Fizz" for multiples of 3, "Buzz" for multiples of 5, and "FizzBuzz" for multiples of both.

**Q2. Write a function that counts vowels in a string.**

**Q3. Check whether a number is a palindrome (try it without converting to a string too).**

**Q4. Build a Temperature Converter that converts Celsius to Fahrenheit and vice-versa.**

**Q5. Write a Number Guessing Game where a secret number is generated with `Math.random()` and the user guesses it using a `do-while` loop.**

---

## ✅ Final Revision Checklist for Interview Day

- [ ] Can explain `var` vs `let` vs `const`, including scope and hoisting
- [ ] Know all 7 primitive types
- [ ] Can clearly explain the difference between `null` and `undefined`
- [ ] Remember the `typeof null` bug story
- [ ] Memorized the 6 falsy values
- [ ] Can explain `==` vs `===` and why `===` is preferred
- [ ] Know the difference between `x++` and `++x`
- [ ] Understand `&&` / `||` short-circuiting
- [ ] Understand that strings are immutable
- [ ] Remember that `.toFixed()` returns a string
- [ ] Can confidently write all 4 loops (`for`, `while`, `do-while`, `for...of`)
- [ ] Can write FizzBuzz without looking it up

---

**Pro Tip:** Whenever a "Guess the Output" question comes up, apply **coercion rules** (Section 4) first. 90% of tricky questions are based on exactly this concept. All the best! 🚀
