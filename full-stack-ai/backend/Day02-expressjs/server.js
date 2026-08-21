// Topics:
// 1. Understanding ExpressJS.
// 2. Why we use express instead of http sever.
// 3. Understand what are the API/.
// 4. Rest Apis: GET, POST, PUT/PATCH, DELETE.API
// 5. Create our first Apis.

// const http = require("http");
// const server = http.createServer((req, res) => {
//    if (req.url === "/home"){
//     res.end("Hello Home.");
//    }

//    if (req.url === "/cart"){
//     res.end("Hello cart");
//    }
//    if (req.url === "/about"){
//     res.end("Hello about.");
//    }
//    if (req.url === "/job"){
//     res.end("Hello  job.");
//    }
//     //this approach is repeatable this approach is not good for api's so we use express js.
// });

// server.listen(3000, () =>{
//     console.log("Hello, i am running.")
// });

const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("hello i am also here in home");
});
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
