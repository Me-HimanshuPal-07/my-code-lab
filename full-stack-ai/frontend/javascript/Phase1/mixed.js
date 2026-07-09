// ## Mixed Practice Questions

// 1. Create a mini biodata program using variables and template literals.
// let fullName = prompt("Enter Full Name : ");
// let age = Number(prompt("Enter Age : "));
// let gender = prompt("Enter Gender : ");
// console.log(
// `Your Full Name is ${fullName},
// Your Age is ${age},
// Your Gender is ${gender}.`);

// 2. Calculate the area of a rectangle.
// let length = Number(prompt("Enter Length : "));
// let width = Number(prompt("Enter Width : "));
// console.log(
// `Length Of Rectangle : ${length}
// Width Of Rectangle : ${width}
// Area Of Rectangle : ${length*width}.`);

// 3. Calculate the simple interest.
// let principleAmount = Number(prompt("Enter Principle Amount : "));
// let rate = Number(prompt("Enter Rate OF Interest (%) : "));
// let time = Number(prompt("Enter Time (Years): "));
// console.log(
// `Principle Amount : ${principleAmount}
// Rate (%) : ${rate}%
// Time (Years) : ${time} Years
// Simple Interest : ${(principleAmount*rate*time)/100}`
// );

// 4. Convert temperature from Celsius to Fahrenheit.
// let temp = Number(prompt("Enter Temperature in Celcius : "));
//  console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`); 

// 5. Convert kilometers into meters.
// let kiloMeter = Number(prompt("Enter Distance In Kilometer : "));
// console.log(`${kiloMeter} Kilo Meter : ${kiloMeter*1000} Meter.`);

// 6. Calculate total marks and percentage of 5 subjects.
// let firstSubjectMarks = Number(prompt("Enter First subject Marks : "));
// let secondSubjectMarks = Number(prompt("Enter Second subject Marks : "));
// let thirdSubjectMarks = Number(prompt("Enter Third subject Marks : "));
// let fourthSubjectMarks = Number(prompt("Enter Fourth subject Marks : "));
// let fifthSubjectMarks = Number(prompt("Enter Fifth subject Marks : "));
// console.log(
// `//--- Calculate total marks and percentage of 5 subjects. ---//

// First subject Marks : ${firstSubjectMarks}
// Second subject Marks : ${secondSubjectMarks}
// Third subject Marks : ${thirdSubjectMarks}
// Fourth subject Marks : ${fourthSubjectMarks}
// Fifth subject Marks : ${fifthSubjectMarks}

// Total Marks : ${firstSubjectMarks+secondSubjectMarks+thirdSubjectMarks+fourthSubjectMarks+fifthSubjectMarks}
// Total Percentage : ${(firstSubjectMarks+secondSubjectMarks+thirdSubjectMarks+fourthSubjectMarks+fifthSubjectMarks)/5}

// //--------------------------//
// `);

// 7. Calculate electricity bill based on units consumed.
// let prevMonthReading = Number(prompt("Enter Previous Month Meter Reading : "));
// let currMonthReading = Number(prompt("Enter Current Month Meter Reading : "));
// let ratePerUnit = Number(prompt("Enter Rate per unit (₹): "));
// console.log(`
// Previous Month Meter Reading : ${prevMonthReading}
// Current Month Meter Reading : ${currMonthReading}
// Rate per unit (₹): ${ratePerUnit}

// Total Units Consumed : ${currMonthReading-prevMonthReading}
// Toal Electricity Bill (₹) : ${(currMonthReading-prevMonthReading)*ratePerUnit}


// `);

// 8. Create a username generator using first name and birth year.
// let firstName = prompt("Enter First Name : ");
// let lastName = prompt("Enter Last Name : ");
// let birthYear = Number(prompt("Enter Your Birth Year : "));
// console.log(`
// Name : ${firstName} ${lastName}
// Birth Year : ${birthYear}

// Your username : ${firstName + birthYear}
// `);

// 9. Check whether a string starts with a specific letter.
// let str = prompt("Enter Word : ").toLowerCase();
// let specific = prompt("Enter Specific Letter : ").trim().toLowerCase();

// if(str[0]=== specific){
// console.log(`
// Yes, Your Word (${str}) starts with ${str[0]}    
// `);
// }
// else {
// console.log(`
// Sorry, Your Word (${str}) Not starts with ${specific}, It Starts with ${str[0]}    
// `);
// }

// 10. Count the total characters in a sentence excluding spaces.
// let sentence = prompt("Enter Sentence : ");
// let cleanSentence = sentence.replaceAll(" ", ""); 

// let totalChars = cleanSentence.length;
// console.log(totalChars);