// DO while loop

let prompt = require("prompt-sync")();
let computer = Math.floor(Math.random() * 100 + 1);
let number;
let attempt = 0;
do {
  attempt++;
   number = Number(
    prompt(`
        Welcome to Guess Game.
        ~ where computer choose internally a number between 1 to 100. user has to find that number.

        Attempt : ${attempt}
        Enter your Number : `),
  );

  if (computer > number) {
    console.log("Number too small!!");
  } else if (computer < number) {
    console.log("Number too large!!");
  } else if (computer === number) {
    console.log(
      `Congratulations!! 🥳 You Guessed Number Correctly. In ${attempt} Attempts.`,
    );
  }
} while (number !== computer);
