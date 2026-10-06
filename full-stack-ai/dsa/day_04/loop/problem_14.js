let prompt = require("prompt-sync")();
let n;

do{
    console.log(`
        
    Welcome to basic calculator, where do you perform such operations : +, - , *, /, % .
        
        Enter "1" For Addition Operation.
        Enter "2" For Subtraction Operation.
        Enter "3" For Multiplication Operation.
        Enter "4" For Division Operation.
        Enter "5" For Remainder Operation.

        `);

        n = Number(prompt("Enter Number to perform Operations : "));

        switch (n) {
            case 1: {
                let a = Number(prompt("Enter First Number : "));
                let b = Number(prompt("Enter Second Number : "));
                console.log(`Addition of ${a} & ${b} : ${a+b}.`);
                break;
            }
            case 2: {
                let a = Number(prompt("Enter First Number : "));
                let b = Number(prompt("Enter Second Number : "));
                console.log(`Subtraction of ${a} & ${b} : ${a-b}.`);
                break;
            }
            case 3: {
                let a = Number(prompt("Enter First Number : "));
                let b = Number(prompt("Enter Second Number : "));
                console.log(`Multiplication of ${a} & ${b} : ${a*b}.`);
                break;
            }
            case 4: {
                let a = Number(prompt("Enter First Number : "));
                let b = Number(prompt("Enter Second Number : "));
                console.log(`Division of ${a} & ${b} : ${a/b}.`);
                break;
            }
            case 5: {
                let a = Number(prompt("Enter First Number : "));
                let b = Number(prompt("Enter Second Number : "));
                console.log(`Remainder of ${a} & ${b} : ${a%b}.`);
                break;
            }
                
                
        
            default: console.log("Invalid Number!!");
            
                break;
        }
        n = Number(prompt("Enter 10 For Re - Continue Program ."));
    
} while( n===10);