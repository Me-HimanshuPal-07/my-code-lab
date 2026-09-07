const express = require("express");
const {
  createNotesController,
  getAllNotesController,
  getNotesController,
  updatedNotesController,
  deleteNoteController,
  singleEntityUpdateController,
} = require("../controllers/notes.controller");

const router = express.Router();

router.post("/create", createNotesController); // Create Api
router.get("/allNotes", getAllNotesController); // Read all
router.get("/:id", getNotesController); //Read one
router.put("/:id", updatedNotesController); //Update via put
router.patch("/:id", singleEntityUpdateController); //update via patch
router.delete("/:id", deleteNoteController); //delete

module.exports = router;