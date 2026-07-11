// ## Beginner

// 1. Create an array of 5 fruits.
const fruits = ["apple", "banana", "gavava", "orange", "kivi"];

// 2. Print first and last element of array.
console.log(fruits[0]);
console.log(fruits.at(-1));

// 3. Find length of array.
console.log(fruits.length);

// 4. Add element at end using `push`.
fruits.push("mangos");
console.log(fruits);

// 5. Remove last element using `pop`.
fruits.pop();
console.log(fruits);

// 6. Add element at beginning using `unshift`.
fruits.unshift("strawberry");
console.log(fruits);

// 7. Remove first element using `shift`.
fruits.shift();
console.log(fruits);

// 8. Reverse an array.
fruits.reverse();
console.log(fruits);

// 9. Sort numbers ascending.
const numbers = [1, 20, 100, 50, 25, 40];
numbers.sort((a, b) => (a-b));
console.log(numbers);

// 10. Sort numbers descending.
numbers.sort((a, b) => (b - a));
console.log(numbers);
