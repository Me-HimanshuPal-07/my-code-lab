// ### Project 2: FizzBuzz (the classic interview question)

// Print numbers 1 to 50. But:

// - For multiples of 3, print "Fizz"
// - For multiples of 5, print "Buzz"
// - For multiples of both, print "FizzBuzz"
 for(let number=1; number<=50; number++){
    if(number % 15 == 0) console.log("FizzBuzz");
    else if (number % 3 == 0) console.log("Fizz");
    else if (number % 5 == 0) console.log("Buzz");
    else console.log(number);
 }