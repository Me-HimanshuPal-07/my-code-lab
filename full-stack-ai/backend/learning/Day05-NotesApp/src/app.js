const express = require("express");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.routes");
const app = express();
app.use(express.json());
connectDB();

app.get("/", (req, res) =>{
    res.end("Hello, We are here.");
});

app.use("/notes",  notesRoute);

module.exports = app;