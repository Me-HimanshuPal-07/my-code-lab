// Project 3: Number Guessing Game

let secret = Math.floor(Math.random()*100)+1;
let attempts = 1;
let guess;

do {
    guess = Number(prompt(`Enter Guessing Number Between "1 to 100" (Attempt : ${attempts})!!`));
    attempts++;

    if(guess>secret)console.log("Too High !!");
    else  console.log("Too low!!");
} while(guess !== secret)
    console.log(`You Got it in Attempts :${attempts-1}`);
    