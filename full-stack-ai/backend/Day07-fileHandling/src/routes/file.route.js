const express = require("express");
const upload = require("../config/multer");
const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
    try {
        const body = req.body;
        const file = req.file;
         
        console.log(body);
        console.log(file);
        
        
        return res.status(200).json({
            message: "File recieved successfully",
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal Server Error.",
            error: error,
        });
        
    }
});

module.exports = router;
