// ## Challenge Questions for Beginners

// 1. Generate a random OTP of 4 digits.

// let otp = Math.floor(Math.random()*9000)+1000;
// console.log(`OTP : ${otp}`);

// 2. Reverse a 3-letter string manually.
// let str = "Pal";
// let reverseStr = "";
// for(let i = str.length-1; i>=0; i--){
//     reverseStr += str[i];
// }
// console.log(`Reverse : ${reverseStr}`);

// 3. Find the last character of a string.
// console.log(`Last Character of ${str} : ${str[str.length-1]}`);

// 4. Convert a full name into uppercase initials.
// let fullName = "Himanshu Pal";
// let firstNameCapitalInitial = fullName[0].toUpperCase();
// let lastNameCapital ;

// for(let i = 0; i < fullName.length; i++ ){
//     if(fullName[i] === " "){
//         lastNameCapital = fullName[i + 1].toUpperCase();
//         break;

//     }
// }
// console.log(`Full Name (Capital Initials) : ${firstNameCapitalInitial+lastNameCapital}`);

// // 5. Check whether two strings are equal ignoring case sensitivity.
// let str1 = "Pal";
// let str2 = "pAl";

// if (str1.toLowerCase() == str2.toLowerCase()){console.log(` ${str1} is equal to ${str2} .`);
// }
// else {console.log(` ${str1} is not equal to ${str2} .`);
// }

// 6. Create a simple login validation system.
// let userName = "Admin";
// let password = "1234";
// if (userName === "Admin"){
//     if(password === "1234"){
//         console.log("Welcome !!");
//     }
//     else console.log("Invalid Password !!");
// }
// else console.log("User Name Invalid !!");

// 7. Find whether a number is a 2-digit or 3-digit number.
// let userInput  = prompt("Enter number :");
// if (!isNaN(userInput) && userInput.trim() !== ""){
//     if (userInput.length === 2) {
//         console.log(`${userInput} is a 2-Digit Number.`);
//     } 
//     else if (userInput.length === 3) {
//         console.log(`${userInput} is a 3-Digit Number.`);
//     } 
//     else {
//         console.log(`${userInput} is neither a 2-digit nor a 3-digit number (It has ${userInput.length} digits).`);
//     }
// } else {
//     console.log("Please enter a valid numeric input!");
// }

// 8. Create a mini ATM balance checker.
// let accountHolder = prompt("Enter your Name: ");
// let enteredPin = prompt("Enter your 4-Digit ATM PIN: ");

// let savedName = "Himanshu Pal"; 
// let correctPin = "2580"; 
// let availableBalance = 45000; 

// if (accountHolder.toLowerCase() === savedName.toLowerCase()) {
//     if (enteredPin.length === 4) {
//         if (enteredPin === correctPin) {
//             console.log(`\n🏪 Welcome back, ${savedName}!`);
//             console.log(`💰 Your Current Balance is: ₹${availableBalance}`);
//         } else {
//             console.log("❌ Incorrect PIN! Transaction Declined.");
//         }
//     } else {
//         console.log("⚠️ Invalid PIN format! ATM PIN must be exactly 4 digits.");
//     }
// } else {
//     console.log("❌ Account Holder Name not found in our database!");
// }

// 9. Simulate a traffic light system using `switch`
// let color = prompt("Enter traffic light color (Red, Yellow, Green): ").toLowerCase();

// switch (color) {
//     case "red":
//         console.log("🛑 STOP! The light is Red.");
//         break;
//     case "yellow":
//         console.log("⚠️ SLOW DOWN! The light is Yellow.");
//         break;
//     case "green":
//         console.log("🟢 GO! The light is Green.");
//         break;
//     default:
//         console.log("❌ Invalid Color! Please enter Red, Yellow, or Green.");
// }

// 10. Build a small marksheet generator using variables and conditionals.

// let studentName = "Himanshu Pal";
// let webDev = 95;
// let JavaScript = 88;
// let dsa = 82;

// let totalMarks = webDev + JavaScript + dsa;
// let percentage = (totalMarks / 300) * 100;
// let grade;

// if (percentage >= 90) {
//     grade = "A+ (Excellent)";
// } else if (percentage >= 75) {
//     grade = "A (Very Good)";
// } else if (percentage >= 50) {
//     grade = "B (Good)";
// } else {
//     grade = "F (Fail)";
// }

// console.log(`\n============== MARKSHEET ==============`);
// console.log(`Student Name : ${studentName}`);
// console.log(`Total Marks  : ${totalMarks}/300`);
// console.log(`Percentage   : ${percentage.toFixed(2)}%`);
// console.log(`Final Grade  : ${grade}`);
// console.log(`=======================================`);