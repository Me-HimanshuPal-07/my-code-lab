const express = require("express");
const upload = require("../config/multer.config");
const { getProfile, uploadFile } = require("../controllers/upload.controllers");


const router = express.Router();

router.post("/", upload.single("image"), uploadFile);
router.get("/", getProfile);

module.exports= router;