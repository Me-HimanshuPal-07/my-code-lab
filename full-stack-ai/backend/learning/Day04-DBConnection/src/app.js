const express = require("express");
const connectDB = require("./config/db");
const NotesModel = require("./models/note.model");

const app = express();

app.use(express.json());

connectDB().catch((error) => {
  console.error("Database connection failed:", error);
});

app.get("/", (req, res) => {
  res.send("Hello, How r u??");
});

app.post("/create", async (req, res) => {
  try {
    const { title, description } = req.body;

    const newNote = await NotesModel.create({
      title,
      description,
    });

    res.status(201).send({
      success: true,
      message: "Note Created Successfully.",
      data: newNote,
    });
  } catch (error) {
    console.error("Create note error:", error);

    res.status(500).send({
      success: false,
      message: "Failed to create note",
      error: error.message,
    });
  }
});



module.exports = app;