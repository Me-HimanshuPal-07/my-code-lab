import bcrypt from "bcrypt";
import { config } from "../config/config.js";
import { userModel } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";

export const registerUser = async ({ email, phone, password }) => {
  const hashedPassword = await bcrypt.hash(password, config.bcryptRounds);

  try {
    return await userModel.create({ email, phone, password: hashedPassword });
  } catch (err) {
    // Unique index violation (duplicate email/phone)
    if (err.code === 11000) {
      throw new ApiError(409, "User already exists with this email or phone!");
    }
    throw err;
  }
};