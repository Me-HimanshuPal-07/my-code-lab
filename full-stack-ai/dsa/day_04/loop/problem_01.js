// Problem : Accept n number , Print "Hello, India 🇮🇳 "

let prompt = require ("prompt-sync")();

let n = Number(prompt("Enter Number : "));

for(let i = 0; i < n; i++){
    console.log("Hello, India 🇮🇳");
    
}

// Valid loop but it run infinite times.
for(let i = 0; i < n;){
    console.log("Hello, India 🇮🇳");
    
}

// Valid loop but it run infinite times.
for(let i = 0;;){
    console.log("Hello, India 🇮🇳");
    
}

// Valid loop but it run infinite times.
for(;;){
    console.log("Hello, India 🇮🇳");
    
}