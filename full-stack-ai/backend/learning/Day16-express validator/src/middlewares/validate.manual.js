import { ApiError } from "../utils/ApiError.js";
import { validateRegister, sanitizeRegister } from "../validators/manual.validator.js";

export const validateRegisterManual = (req, res, next) => {
  const errors = validateRegister(req.body ?? {});
  if (errors.length > 0) {
    return next(new ApiError(400, "Validation failed", errors));
  }
  req.body = sanitizeRegister(req.body);
  next();
};