import { body } from "express-validator";

export const registerRules = [
  body("email")
    .isString().withMessage("Email is required!").bail()
    .trim()
    .notEmpty().withMessage("Email is required!").bail()
    .isEmail().withMessage("Invalid email address!")
    .normalizeEmail({ gmail_remove_dots: false }),

  body("phone")
    .isString().withMessage("Phone number is required!").bail()
    .customSanitizer((v) => v.replace(/[\s-]/g, ""))
    .matches(/^(\+91)?[6-9]\d{9}$/).withMessage("Invalid phone number!")
    .customSanitizer((v) => (v.startsWith("+91") ? v : `+91${v}`)),

  body("password")
    .isString().withMessage("Password is required!").bail()
    .isLength({ min: 8 }).withMessage("Password must be at least 8 characters!").bail()
    .custom((v) => Buffer.byteLength(v, "utf8") <= 72).withMessage("Password is too long!"),
];