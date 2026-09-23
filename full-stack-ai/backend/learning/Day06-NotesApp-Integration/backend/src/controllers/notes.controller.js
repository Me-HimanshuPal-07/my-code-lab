const NotesModel = require("../models/notes.model");

const createNotesController = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNote = await NotesModel.create({
      title,
      description,
    });
    return res.status(201).json({
      message: "Note created successfuly.",
      data: newNote,
    });
  } catch (error) {
     return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const getAllNotesController = async (req, res) => {
  try {
    const allNotes = await NotesModel.find();

    return res.status(200).json({
      message: "All Notes Fetch.",
      data: allNotes,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const getNotesController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const note = await NotesModel.findById(noteId);

    return res.status(200).json({
      message: "Note fetch successfully.",
      data: note,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const updatedNotesController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const body = req.body;
    const updateNote = await NotesModel.findByIdAndUpdate(noteId, body, {
      new: true,
    });
    return res.status(200).json({
      message: "Note Updated Successfully.",
      data: updateNote,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const singleEntityUpdateController = async (req, res) => {
  try {
    const noteId = req.params.id;
    const body = req.body;
    const singleEntityUpdate = await NotesModel.findByIdAndUpdate(
      noteId,
      body,
      {
        new: true,
      },
    );

    return res.status(200).json({
      message: "Single entity updated successfully",
      data: singleEntityUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
const deleteNoteController = async (req, res) => {
  try {
    const noteId = req.params.id;
    await NotesModel.findByIdAndDelete(noteId);
    return res.status(200).json({
      message: "Note deleted Successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};
module.exports = {
  createNotesController,
  getAllNotesController,
  getNotesController,
  updatedNotesController,
  singleEntityUpdateController,
  deleteNoteController,
};
