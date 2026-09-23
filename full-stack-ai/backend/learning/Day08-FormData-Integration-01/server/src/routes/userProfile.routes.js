const express = require("express");
const userProfile = require("../controllers/user.controllers");
const upload = require("../middlewares/user.multer");

const router = express.Router();

router.post("/", upload.array("profilePic"), userProfile);

module.exports = router;
