# 🎯 JavaScript Phase 1 — Interview Prep Notes

Bhai, yeh raha tumhara **superb interview.md**! Isme maine Phase 1 ke saare concepts ko interview-style questions mein convert kiya hai — jo bhi tricky, conceptual, aur coding-round wale sawaal aa sakte hain, sab yahan cover hain. Har answer ke sath short explanation bhi di hai taaki cramming na karni pade, samajh mein aa jaye.

---

## 📌 Section 1: JavaScript Basics

**Q1. JavaScript kya hai aur yeh kahan-kahan use hoti hai?**
JavaScript ek programming language hai jo originally sirf browsers ke liye bani thi (interactivity ke liye), par ab yeh browser, server (Node.js), mobile apps (React Native), aur desktop apps (Electron) — sab jagah use hoti hai.

**Q2. JavaScript engine kya hota hai? Kuch examples do.**
Engine woh software hai jo JS code ko run karta hai. Chrome mein **V8**, Firefox mein **SpiderMonkey**, Safari mein **JavaScriptCore**. Node.js bhi V8 use karta hai.

**Q3. `console.log()` ke alawa aur kaunse console methods hote hain?**
`console.warn()` (yellow warning), `console.error()` (red error), `console.table()` (data ko table format mein dikhata hai).

**Q4. Comments ka use kya hai?**
Comments code ko explain karne, temporarily disable karne, aur khud ko future mein reminder dene ke liye use hote hain. JS inhe ignore karta hai — `//` single line, `/* */` multi-line.

---

## 📌 Section 2: Variables (var, let, const)

**Q5. `var`, `let`, aur `const` mein kya difference hai?**

| Feature | var | let | const |
|---|---|---|---|
| Re-assign | ✅ | ✅ | ❌ |
| Re-declare (same scope) | ✅ | ❌ | ❌ |
| Scope | Function | Block | Block |
| Hoisted | ✅ (undefined) | ✅ (TDZ) | ✅ (TDZ) |

**Q6. Declaration aur Initialization mein kya farak hai?**
Declaration matlab variable banana (`let x;`), Initialization matlab uss variable ko value dena (`x = 10;`).

**Q7. `const` use karne ke bawajood kya hum object/array ke andar ki value change kar sakte hain?**
Haan! `const` sirf reference ko lock karta hai, value ko nahi. Yaani `const arr = [1,2]; arr.push(3)` chalega, but `arr = [4,5]` nahi chalega.

```javascript
const person = { name: "Aman" };
person.name = "Rahul"; // ✅ works
// person = {} // ❌ Error
```

**Q8. Variable naming rules kya hain?**
Letter, `_`, ya `$` se start hona chahiye. Digit se start nahi ho sakta. Reserved keywords use nahi kar sakte. Case-sensitive hota hai.

---

## 📌 Section 3: Data Types

**Q9. JavaScript mein kitne primitive data types hain? Naam batao.**
7 primitive types: `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.

**Q10. `null` aur `undefined` mein kya difference hai? (Bohot common interview question!)**
`undefined` matlab JS ne khud diya hai kyunki variable ko koi value assign nahi ki gayi. `null` matlab developer ne jaan-boojh kar "empty" value assign ki hai.

```javascript
let a;          // undefined
let b = null;   // null
```

**Q11. `typeof null` ka output kya hoga aur kyun?**
Output hoga `"object"` — yeh JavaScript ka **1995 se chala aa raha ek famous bug hai** jo aaj tak fix nahi hua kyunki bohot saara existing code isi behavior par depend karta hai.

**Q12. `typeof` operator ke kuch outputs batao.**

```javascript
typeof "hello"     // "string"
typeof 42          // "number"
typeof true        // "boolean"
typeof undefined   // "undefined"
typeof null        // "object" (bug)
typeof {}          // "object"
typeof []          // "object" (arrays bhi object hain)
typeof function(){}// "function"
```

---

## 📌 Section 4: Type Conversion & Coercion

**Q13. Type Conversion aur Type Coercion mein kya difference hai?**
Conversion **explicit** hota hai (developer khud karta hai — `Number("42")`). Coercion **implicit** hota hai (JS khud-ba-khud type convert kar deta hai).

**Q14. Yeh output batao (Classic Trick Questions):**

```javascript
console.log("5" + 3);      // "53"  → string concatenation
console.log("5" - 3);      // 2     → number subtraction
console.log(true + 1);     // 2     → true = 1
console.log(false + 1);    // 1     → false = 0
console.log(null + 1);     // 1     → null = 0
console.log(undefined + 1);// NaN
```

**Rule of thumb:** `+` operator string dekhte hi concatenation kar deta hai. Baaki saare math operators number banane ki koshish karte hain.

**Q15. Falsy values kaunse hain? (6 values yaad rakho)**
`false`, `0`, `""` (empty string), `null`, `undefined`, `NaN`

**Q16. Kya `[]` (empty array) truthy hai ya falsy?**
**Truthy!** Yeh ek common trap hai — empty array aur empty object dono truthy hote hain, sirf empty string falsy hoti hai.

---

## 📌 Section 5: Operators

**Q17. `==` aur `===` mein kya farak hai? Kaunsa use karna chahiye?**
`==` (loose equality) type coercion karta hai. `===` (strict equality) type aur value dono check karta hai. **Hamesha `===` use karo** taaki hidden bugs se bacha ja sake.

```javascript
0 == false          // true  (surprising)
"" == false         // true  (surprising)
null == undefined   // true  (surprising)
0 === false         // false (sane)
```

**Q18. `x++` aur `++x` mein kya difference hai?**
`x++` (post-increment) pehle purani value return karta hai, phir increment karta hai. `++x` (pre-increment) pehle increment karta hai, phir new value return karta hai.

```javascript
let x = 5;
let y = x++;  // y = 5, x = 6
let z = ++x;  // x = 7, z = 7
```

**Q19. `&&` aur `||` operators short-circuit kaise karte hain?**
`&&` pehla **falsy** value return karta hai (agar sab truthy hain toh last value). `||` pehla **truthy** value return karta hai (agar sab falsy hain toh last value). Isi wajah se default values set karne ke liye use hota hai:

```javascript
let username = userInput || "Guest";
```

**Q20. Ternary operator ka syntax kya hai?**
`condition ? valueIfTrue : valueIfFalse`

```javascript
let status = age >= 18 ? "Adult" : "Minor";
```

---

## 📌 Section 6: Strings

**Q21. Template literals kya hote hain aur inka fayda kya hai?**
Backticks (`` ` ``) se banaye jaate hain aur `${...}` se variables directly embed kar sakte ho. Multi-line strings bhi naturally likh sakte ho.

```javascript
let name = "Aman";
console.log(`Hello, ${name}!`);
```

**Q22. Kya strings mutable hote hain?**
**Nahi, strings immutable hote hain.** Koi bhi method (`toUpperCase()`, `slice()` etc.) original string ko change nahi karta — naya string return karta hai.

```javascript
let x = "hello";
x.toUpperCase();
console.log(x); // "hello" — unchanged!
```

**Q23. `slice()` aur `substring()` mein kya difference hai?**
Dono similar kaam karte hain (part of string nikaalna), par `slice()` negative index accept karta hai jabki `substring()` negative ko 0 treat kar deta hai.

**Q24. Important string methods batao.**
`length`, `toUpperCase()`, `toLowerCase()`, `indexOf()`, `includes()`, `slice()`, `replace()`, `split()`, `trim()`, `repeat()`, `startsWith()`, `endsWith()`, `charAt()`.

---

## 📌 Section 7: Numbers & Math

**Q25. `Math.floor()`, `Math.ceil()`, aur `Math.round()` mein difference batao.**
`floor()` hamesha neeche round karta hai, `ceil()` hamesha upar round karta hai, `round()` nearest integer par round karta hai (0.5 se upar upar, neeche neeche).

**Q26. Random number kaise generate karte hain kisi range ke beech mein?**

```javascript
let rand = Math.floor(Math.random() * (max - min + 1)) + min;
```

**Q27. `parseInt()` aur `Number()` mein kya farak hai?**
`Number("42abc")` deta hai `NaN` (poora string valid number hona chahiye). `parseInt("42abc")` deta hai `42` (jitna parse ho sake, utna leke aage rukk jaata hai).

**Q28. `.toFixed()` kya return karta hai — number ya string?**
**String return karta hai!** Yeh ek common gotcha hai. Agar aage math karna hai toh `Number()` se wrap karo.

```javascript
let x = (0.1 + 0.2).toFixed(2); // "0.30" - string!
```

---

## 📌 Section 8: Conditionals & Loops

**Q29. `switch` statement mein `break` bhoolne se kya hota hai?**
"Fall-through" ho jaata hai — matlab agla case bhi (bina condition check kiye) execute ho jaata hai. Yeh silent bug hota hai jo detect karna mushkil hota hai.

**Q30. `for`, `while`, aur `do-while` loop mein kya farak hai?**
`for` jab iterations ki count pata ho tab use hota hai. `while` jab condition pehle check karni ho. `do-while` **hamesha kam se kam ek baar** run hota hai, chahe condition false hi kyun na ho (kyunki condition end mein check hoti hai).

```javascript
let x = 10;
do {
    console.log(x); // yeh chalega ek baar
} while (x < 5);
```

**Q31. `break` aur `continue` mein kya difference hai?**
`break` poore loop ko turant band kar deta hai. `continue` sirf current iteration ko skip karke agli iteration par chala jaata hai.

**Q32. `for...of` aur `for...in` mein kya farak hai?**
`for...of` **values** ke upar iterate karta hai (arrays, strings ke liye). `for...in` **keys** ke upar iterate karta hai (objects ke liye).

---

## 🔥 Section 9: Tricky "Guess the Output" Questions

Interview mein aksar yeh type ke questions puche jaate hain — dimag lagao pehle, phir answer dekho!

```javascript
// Q1
console.log(1 + "1");
// Answer: "11" (number + string = string concat)

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
// Answer: 21 (10 + 11 → x++ gives 10 then x=11, ++x makes x=12... 
// wait: x++ returns 10 (x becomes 11), ++x makes x=12 and returns 12 → 10+12=22)
```

---

## 💻 Section 10: Coding Round Questions (Practice These!)

**Q1. FizzBuzz likho.**
1 se 50 tak numbers print karo, par 3 ke multiple par "Fizz", 5 ke multiple par "Buzz", aur dono ke multiple par "FizzBuzz" print karo.

**Q2. Ek string mein vowels count karne ka function likho.**

**Q3. Check karo ki koi number palindrome hai ya nahi (bina string conversion ke bhi try karo).**

**Q4. Temperature Converter banao jo Celsius ko Fahrenheit mein aur vice-versa convert kare.**

**Q5. Number Guessing Game likho jisme `Math.random()` se secret number generate ho aur user guess kare `do-while` loop use karke.**

---

## ✅ Interview Ke Din Ka Final Revision Checklist

- [ ] `var` vs `let` vs `const` — scope aur hoisting ke sath explain kar sakta hu
- [ ] 7 primitive types yaad hain
- [ ] `null` vs `undefined` ka farak clearly bata sakta hu
- [ ] `typeof null` ka bug wala story yaad hai
- [ ] 6 falsy values ratta hain
- [ ] `==` vs `===` — kyun `===` better hai, explain kar sakta hu
- [ ] `x++` vs `++x` ka difference pata hai
- [ ] `&&` / `||` short-circuiting samajh mein aati hai
- [ ] Strings immutable hoti hain — yeh concept clear hai
- [ ] `.toFixed()` string return karta hai — yaad hai
- [ ] Saare 4 loops (`for`, `while`, `do-while`, `for...of`) confidently likh sakta hu
- [ ] FizzBuzz bina dekhe likh sakta hu

---

**Pro Tip:** Interview mein jab bhi "Guess the Output" wala sawaal aaye, **coercion rules** (Section 4) sabse pehle apply karo. 90% tricky questions isi concept par based hote hain. All the best bhai! 🚀
