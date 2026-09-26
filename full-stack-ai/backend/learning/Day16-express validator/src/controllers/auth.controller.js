import { config } from "../config/config.js";
import { userModel } from "../models/user.model.js";

export const register = async (req, res) => {
  const { email, phone, password } = req.body;

  if (!email || !phone || !password) {
    return res.status(401).json({
      message: "email, phone or password are required",
    });
  }
};
