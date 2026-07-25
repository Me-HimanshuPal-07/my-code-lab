let a = 10;
let b = 30;
console.log("The Sum OF" + a + " And " + b + " Is " + a +b); //Comment out and run then you see 1030?

/* Why does a + b evaluate to 1030?
In JavaScript, the + operator works left-to-right. Once a string gets involved, the + operator switches to string concatenation (joining text together) for every step after.
Here is how JavaScript evaluates it step by step:
"The Sum OF" + 10 → "The Sum OF10"
"The Sum OF10" + " And " → "The Sum OF10 And "
"The Sum OF10 And " + 30 → "The Sum OF10 And 30"
"The Sum OF10 And 30" + " Is " → "The Sum OF10 And 30 Is "
"The Sum OF10 And 30 Is " + 10 → "The Sum OF10 And 30 Is 10"
"The Sum OF10 And 30 Is 10" + 30 → "The Sum OF10 And 30 Is 1030"*/

//How to get 40

//1. Use parentheses around (a + b)
//Parentheses force JavaScript to perform the arithmetic addition first before doing string concatenation:
//JavaScript

console.log("The Sum OF " + a + " And " + b + " Is " + (a + b));
// Output: The Sum OF 10 And 30 Is 40

// 2. Use Template Literals (Modern JavaScript)
// Enclose the text in backticks (`) and wrap variables or expressions in ${}. Expressions inside ${} are computed mathematically automatically:
// JavaScript

console.log(`The Sum OF ${a} And ${b} Is ${a + b}`);
// Output: The Sum OF 10 And 30 Is 40