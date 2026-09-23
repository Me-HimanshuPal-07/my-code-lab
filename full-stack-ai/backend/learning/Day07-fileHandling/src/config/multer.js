const multer = require("multer");

//Memory storage for Server
const storageForServer = multer.memoryStorage();


// Disk storage for locl
// const storageForLocal = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + "-" + file.originalname);
//   },
// });

const upload = multer({storage: storageForServer});

module.exports = upload;