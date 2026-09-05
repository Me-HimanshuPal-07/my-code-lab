// Default JavaScript behaviour execute code synchronously - 
//  Line by line, top to bottom,
//  first one task complete /end then next start, 
// either first tasks takes long time to complete no matter its wait to complete that task first 
// and freeze the browser user can,t do anything.
//Because javascript is a single threaded , Synchronous programming language.

console.log("1. Chai banao");
console.log("2. Chai piyo");
console.log("3. Cup dho do");

// Output:
// 1. Chai banao
// 2. Chai piyo
// 3. Cup dho do

// Maan lo ye ek 5 second wala blocking kaam hai
console.log("Start");

// Maan lo ye ek 5 second wala blocking kaam hai
let now = Date.now();
while (Date.now() - now < 5000) {
  // 5 second tak kuch nahi, bas wait... browser HANG ho gaya 😵
}

console.log("End");


// Asynchronous perform task javascript means if any task takes time it give this task to browser 
// and make it side and assume its end because here js only work to see that's type of task and give
//  it to browser that,s done it assume task complete.

console.log("Start");

setTimeout(() => {
  console.log("3 second baad ye chala");
}, 3000);

console.log("End");

// Output:
// Start
// End
// (3 second baad) 3 second baad ye chala
