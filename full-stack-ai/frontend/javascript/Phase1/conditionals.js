// ## Conditionals

// 1. Check whether a number is positive or negative.
// let number = Number(prompt("Enter Number : "));
// if(number > 0){
//     console.log(`${number} is Positive.`);
// }
// else {
//     console.log(`${number} is Negative.`);
    
// }


// 2. Check whether a number is even or odd.
// if(number%2==0){
//     console.log(`${number} is Even.`);
// }
// else {
//     console.log(`${number} is odd.`);
// }

// 3. Check whether a person is eligible to vote.
// let personAge = Number(prompt("Enter Your Age : "));
// if (personAge >= 18){console.log("Person is Eligible To Vote!");}
// else {console.log("Sorry! You are't Eligible.");}

// 4. Find the largest among two numbers.
// let firstNumber = Number(prompt("Enter First Number : "));
// let secondNumber = Number(prompt("Enter Second Number : "));
// if (firstNumber > secondNumber){console.log("First Number Is Greater.");}
// else {console.log("Second Number Is Greater.");}

// 5. Find the largest among three numbers.
// let one = Number(prompt("Enter First Number : "));
// let second = Number(prompt("Enter Second Number : "));
// let third = Number(prompt("Enter Third Number : "));

// if ((one > second) && (one > third)) {console.log("One Number is greater!");}
// else if (second > third) {console.log("Second Number is greater!");}
// else {console.log("Third Number is greater!");}

//                     //or

// // Agar kabhi aapse koi bole ki bina if-else ke ek line mein batao sabse bada number kaun sa hai, toh JavaScript ka ek built-in shortcut hota hai:
// // JavaScript
//   let largest = Math.max(one, second, third);
// console.log(largest); // Output: 54


// 6. Check whether a year is a leap year.
//let year = Number(prompt("Enter Year : "));
// if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))console.log("Leap Year!");
// else console.log("Not a Leap Year!");

// // 7. Check whether a number is divisible by both 3 and 5.
// //var num = Number(prompt("Enter number : "));
// if((num % 3 == 0) && (num % 5 == 0)) {console.log(`${num} is divisible by both 3 and 5.`);}
// else {console.log(`${num} isn't divisible by 3 and 5.`);}

// 8. Create a simple grading system:
// - 90+ → A
// - 75+ → B
// - 50+ → C
// - below 50 → Fail
// var marks = Number(prompt("enter marks : "));
// if ((marks == 0) || (marks > 100)){console.log("Wrong Marks Enter!!");}
// else if ((marks > 90) && (marks <= 100)){console.log("A Grade.");}
// else if ((marks > 75) && (marks <= 90)){console.log("B Grade.");}
// else if ((marks > 50) && (marks <= 75)){console.log("C Grade.");}
// else {console.log("Fail");}


// 1. Check whether a character is a vowel or consonant.
//  let char = prompt("Enter a single character: ").toLocaleLowerCase();
//  if (char !== "" && /^[a-z]$/.test(char)){
//     if(char.match(/^[aeiou]$/)){
//         console.log(`${char} is a vovel.`);
        
//     }
//     else {
//         console.log(`${char} is a consonant.`);
        
//     }
//  }
//  else {
//     console.log(`Invalid Input!!`);
    
//  }


// 2. Create a calculator using `switch` statement.
// let num1 = Number(prompt("Enter First Number : "));
// let num2 = Number(prompt("Enter Second Number : "));
// let operator = prompt("Enter Operator (+, -, *, /, %): ");
// let result;
// switch (operator){
//     case "+" : {
//         result = num1 + num2;
//         console.log(`Result : ${num1} + ${num2} = ${result}.`);
//         break;   
//     }
//     case "-" : {
//         result = num1 - num2;
//         console.log(`Result : ${num1} - ${num2} = ${result}.`);
//         break;
//     }
//     case "*" : {
//         result = num1 * num2;
//         console.log(`Result : ${num1} * ${num2} = ${result}.`);
//         break;
//     }
//     case "/" : {
//         result = num1 / num2;
//         console.log(`Result : ${num1} / ${num2} = ${result}.`);
//         break;
//     }
//     case "%" : {
//         result = num1 % num2;
//         console.log(`Result : ${num1} % ${num2} = ${result}.`);
//         break;
//     }
//     default : {
//         console.log(`Invalid Operator Choose Only From +, -, *, /, % .`);
//     }
// }

// 3. Print the day name based on a number (1–7).
// let number = Number(prompt("Enter Number (1-7): "));

// switch (number) { // Seedhe number ko bitha diya switch par!
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday"); // Spelling fixed!
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Number !! Please Enter Number Between (1-7)");
// }



// 4. Check whether a username is `"admin"` and password is `"1234"`.
// let username = prompt("Enter Username: ").trim().toLowerCase();
// let password = prompt("Enter Password: ");

// switch (true) {
//     case (username === "admin" && password === "1234"):
//         console.log("Login Successful! Welcome Admin.");
//         break;
//     default:
//         console.log("Login Failed! Invalid Username or Password.");
// }