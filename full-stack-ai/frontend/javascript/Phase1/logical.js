// ## Logical Thinking Questions

// 1. Take two numbers and print which one is greater.
// let firstNumber = Number(prompt("Enter First Number : "));
// let secondNumber = Number(prompt("Enter Second Number : "));
// let result;
// if (firstNumber > secondNumber) result = firstNumber;
// else  result = secondNumber;

// console.log(`
// First Number : ${firstNumber}
// Second Number : ${secondNumber}

// ${result} is Greater.
// `);


// 2. Check whether a number lies between 10 and 50.
// let number = Number(prompt("Enter Number : "));
// let checkNumber = (number >= 10 && number <= 50) ? "Yes" : "No";
// console.log(`${number} is lie between 10 & 50 : ${checkNumber} `);

// 3. Check whether a password length is greater than 8.
// let password = prompt("Enter Password : ");
// let result;
// if (password.length > 8) result = "Yes";
// else result = "No";
// console.log(`
// Valid Password : ${result}`);

// 4. Check if a person can drive:
// - age > 18
// - has license = true
// let personAge = Number(prompt("Enter Your Age Driver : "));
// let haslicence = prompt("Did you have licence ? If 'Yes' : Type -> true or If 'No' :  Type -> false . ");
// if(personAge > 18 && haslicence === "true") console.log(" You Are Eligible For Driving !!");
// else console.log(" Sorry ! You Are not Eligible For Driving.");


// 1. Check whether a number is divisible by 2, 3, or both.
// let number = Number(prompt("Enter Number : "));
// if(number % 6 == 0)console.log(`${number} is Divisible by both 2 & 3.`);
// else if(number % 2 == 0)console.log(`${number} is Divisible by 2.`);
// else if(number % 3 == 0)console.log(`${number} is Divisible by 3.`);
// else console.log(`${number} isnot Divisible by 2 & 3.`);

// 2. Print `"Good Morning"`, `"Good Afternoon"`, or `"Good Evening"` based on time.
// let now = new Date();
// let hour = now.getHours();
// let greet ;

// if(hour >= 5 && hour < 12){
//     greet = "Good Morning 🌅";
// }
// else if(hour >= 12 && hour < 17){
//     greet = "Good AfterNoon 🌤️";
// }
// else {
//     greet = "Good Evening 🌆 ";
// }

// const currentDateTime = now.toLocaleString('en-IN', {
//     dateStyle: 'medium',
//     timeStyle: 'short'
// });


// console.log(`
// =====================================
// 👋 ${greet}!
// 📅 Date & Time: ${currentDateTime}
// =====================================
// `);

// 3. Find whether a number is a multiple of 10.
// let number = Number(prompt("Enter Number : "));
// if(number % 10 === 0)console.log(`${number} is a Multiple of 10.`);
// else console.log(`${number} isnot a Multiple of 10.`);


// 4. Create a simple discount calculator.
// let billAmount = Number(prompt("Enter Bill Amount to get Discount% : "));
// let discount = Number(prompt("Enter Discount% : "));
// let discountAmount = billAmount*discount/100;
// let finalAmount = billAmount - discountAmount;
// console.log(`
// ==============================

// Bill Amount : ${billAmount}
// Discount ${discount}% : ${discountAmount}

// Final Amount : ${finalAmount}

// ===============================`);


// 5. Check whether a product is in stock.
// let product = prompt("Check Products: 'Ghee, aata, daal, Oil' is in Stock or Not : ").toLowerCase();
// let stock = ["ghee","aata", "daal"];
// let checkproduct = stock.includes(product);
// if(checkproduct) console.log(`${product} : In Stock`);
// else console.log(`${product} ; Stock Out`) ;

// 6. Calculate final bill after GST.
// let billAmount = Number(prompt("Enter Final bill amount : "));
// let gst = 18;
// let finalAmount = billAmount + (billAmount*gst/100);
// console.log(`
// Bill Amount before Gst : ${billAmount}
// Gst % Applied : ${gst}%

// Final Amount : ${finalAmount}`);