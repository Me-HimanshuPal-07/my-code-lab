import { config } from "../config/config.js";

export const notFound = (req, res) =>
  res.status(404).json({ success: false, message: "Route not found" });

export const errorHandler = (err, req, res, next) => {
  // Galat JSON body
  if (err.type === "entity.parse.failed") {
    return res.status(400).json({ success: false, message: "Invalid JSON" });
  }

  // Expected errors (ApiError)
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.errors?.length && { errors: err.errors }),
    });
  }

  // Unexpected bug
  console.error(err);
  return res.status(500).json({
    success: false,
    message: "Internal server error",
    ...(config.nodeEnv !== "production" && { stack: err.stack }),
  });
};