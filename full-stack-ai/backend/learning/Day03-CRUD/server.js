const express = require("express");
const app = express();
app.use(express.json());

//READ
app.get("/", (req, res) => {
    res.send("Home Page");
});

//CREATE
app.post("/create", (req, res) => {
    console.log(req.body);
    res.send(req.body, "Data save successfuly.");
});

//UPDATE
app.put("/update/$id", (req, res) => {

});

const port = 3000;
app.listen(port, () =>{
    console.log("Server is running on port " + port);
})