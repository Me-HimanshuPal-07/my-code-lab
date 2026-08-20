
// Topics: 
            // 1. Understanding ExpressJS.
            // 2. Why we use express instead of http sever.
            // 3. Understand what are the API/.
            // 4. Rest Apis: GET, POST, PUT/PATCH, DELETE.API
            // 5. Create our first Apis.

const http = require("http");
const server = http.createServer((req, res) => {
    console.log("Hello Himanshu.");
    res.end("Mujhe tumhari request mil gyi , I LOve U.")
});

server.listen('3000', () =>{
    console.log("Bro, Himanshu Server is ON.");
    
});