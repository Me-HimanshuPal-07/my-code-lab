const http = require("http");
const server = http.createServer((req, res) => {
    console.log("hello, i am server.");
    res.end("ok, maine tumhari baat sun li")
})
server.listen(3000, () => {
    console.log("hello, i am on 3000");
    
});