// 10. Sort numbers descending.

// ---

// ## Intermediate
const members = ["HR","dean", "SDE", "CEO", "CFO"];
// 1. Use `splice` to remove elements.
const removeElement = members.splice(3, 2);
console.log(removeElement);

// 2. Use `splice` to insert elements.
members.splice(-1, 0, "PD");
console.log(members);

// 3. Use `slice` to copy array.
const newMembers = members.slice();
console.log(newMembers);

// 4. Find index of an element.
console.log(members.indexOf("SDE"));

// 5. Check if array contains a value.
console.log(members.includes("PWD"));
console.log(members.includes("PD"));

// 6. Join array elements with .
console.log(members.join("."));

// 7. Merge two arrays using spread operator.
const arr1 = [1, 3, 4, 5, 6];
const arr2 = [4, 5, 6, 4, 5];
const mergearr = [ ... arr1, ... arr2];
console.log(mergearr);

// 8. Copy array using spread operator.
const copyarr1 = [... arr1];
console.log(copyarr1);

// 9. Find maximum value using `Math.max`.
const numbers = [32, 43, 432, 457];
const maxNumber = Math.max(... numbers);
console.log(maxNumber);

// 10. Swap two variables using destructuring.
let fruit1 = "orange";
let fruit2 = "gavava";
[fruit1, fruit2] = [fruit2, fruit1];
console.log(fruit1);
console.log(fruit2);