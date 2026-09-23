import userModel from "../models/user.models.js";
import bcrypt from "bcryptjs";
import config from "../config/config.js";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "Name, email and password are required." });
    }

    const isUserExists = await userModel.findOne({ email });

    if (isUserExists) {
      return res.status(400).json({
        message: "User already exists.",
        errors: [{ field: "email", message: "User already exists" }],
      });
    }

    const user = await userModel.create({
      name,
      email,
      passwordHash: await bcrypt.hash(password, 12),
    });

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: config.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 din milliseconds mein
    });

    res.status(201).json({
      message: "User registered successfully.",
      data: {
        user: { name: user.name, email: user.email },
      },
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password.",
        errors: [{ field: "email", message: "Invalid email or password" }],
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

    if (!isPasswordValid) {
      return res.status(400).json({
        message: "Invalid email or password.",
        errors: [{ field: "password", message: "Invalid email or password" }],
      });
    }

    const { accessToken, refreshToken } = generateTokens({ userId: user._id });

    user.refreshToken = refreshToken;
    await user.save();

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      message: "Login successful.",
      data: {
        user: { name: user.name, email: user.email },
      },
      accessToken,
    });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const refresh = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res
        .status(401)
        .json({ message: "Unauthorized, refresh token not found" });
    }

    const decoded = verifyRefreshToken(refreshToken);
    const user = await userModel.findById(decoded.userId);

    if (!user || refreshToken !== user.refreshToken) {
      if (user) {
        user.refreshToken = null;
        await user.save();
      }
      return res
        .status(401)
        .json({ message: "Unauthorized, refresh token mismatch" });
    }

    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      userId: user._id,
    });

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      message: "Tokens refreshed successfully.",
      accessToken,
    });
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Unauthorized, invalid refresh token." });
  }
};

export const me = async (req, res) => {
  try {
    const accessToken = req.headers.authorization?.split(" ")[1];
    const decoded = verifyAccessToken(accessToken);
    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({
      message: "User fetched successfully",
      data: {
        user: { name: user.name, email: user.email },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, invalid or expired access token",
    });
  }
};
