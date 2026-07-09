let temp = Number(prompt("Enter Your temperature : "));
let unit = prompt("It is in C or F ?").toUpperCase();
if (unit === "C"){
    console.log(`${temp}°C = ${(temp * 9/5) + 32}°F`);   
}
else if (unit === "F") {
      console.log(`${temp}°F = ${((temp - 32) * 5/9).toFixed(2)}°C`);
}
else console.log("Invalid unit");