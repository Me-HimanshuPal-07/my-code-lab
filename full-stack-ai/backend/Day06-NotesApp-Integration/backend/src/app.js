const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const notesRoute = require("./routes/notes.routes");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);
app.use("/notes", notesRoute);
connectDB();

app.get("/", (req, res) => {
  res.end("Hello, We are here.");
});


module.exports = app;
