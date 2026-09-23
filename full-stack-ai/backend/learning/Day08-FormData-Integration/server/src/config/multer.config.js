const fs = require("fs");
const path = require("path");
const { randomUUID } = require("crypto");
const multer = require("multer");

const originalDirectory = path.join(__dirname, "../../uploads/originals");
const profileDirectory = path.join(__dirname, "../../uploads/profiles");
fs.mkdirSync(originalDirectory, { recursive: true });
fs.mkdirSync(profileDirectory, { recursive: true });

const extensionByMimeType = {
  "image/jpeg": ".jpg",
  "image/png": ".png",
  "image/webp": ".webp",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, originalDirectory);
  },
  filename: (req, file, callback) => {
    callback(null, `${randomUUID()}${extensionByMimeType[file.mimetype]}`);
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024,
    files: 1,
  },
  fileFilter: (req, file, callback) => {
    if (!extensionByMimeType[file.mimetype]) {
      const error = new Error("Only JPG, PNG, and WebP images are allowed.");
      error.statusCode = 400;
      return callback(error);
    }

    callback(null, true);
  },
});

module.exports = upload;
module.exports.originalDirectory = originalDirectory;
module.exports.profileDirectory = profileDirectory;