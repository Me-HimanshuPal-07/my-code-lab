const multer = require("multer");

const errorHandler = (error, req, res, next) => {
  if (res.headersSent) {
    return next(error);
  }

  let statusCode = error.statusCode || 500;
  let message = error.message || "Internal Server Error";

  if (error instanceof multer.MulterError) {
    statusCode = error.code === "LIMIT_FILE_SIZE" ? 413 : 400;
    message = error.code === "LIMIT_FILE_SIZE"
      ? "Image must be 5MB or smaller."
      : "Image upload failed.";
  }

  if (statusCode >= 500) {
    console.error(error);
    message = "Internal Server Error";
  }

  return res.status(statusCode).json({
    message,
  });
};

module.exports = errorHandler;
