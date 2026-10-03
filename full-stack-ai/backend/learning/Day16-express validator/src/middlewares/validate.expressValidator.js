import { matchedData, validationResult } from "express-validator";
import { ApiError } from "../utils/ApiError.js";

export const validateExpressValidator = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const errors = result.array().map((e) => ({ field: e.path, message: e.msg }));
    return next(new ApiError(400, "Validation failed", errors));
  }

  // express-validator extra fields hataata nahi, isliye sirf validated fields lo
  req.body = matchedData(req, { locations: ["body"] });
  next();
};