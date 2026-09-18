import { Router } from "express";
import userModel from "../models/user.models.js";
import bcrypt from "bcryptjs";
import {
  generateTokens,
  verifyAccessToken,
  verifyRefreshToken,
} from "../utils/auth.js";

const router = Router();

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const isUserExists = await userModel.findOne({ email });

  if (isUserExists) {
    return res.status(400).json({
      message: "User already exists.",
      errors: [
        {
          field: "email",
          message: "User already exists",
        },
      ],
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
  });

  res.status(201).json({
    message: "User register Successfuly.",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

router.get("/me", async (req, res) => {
  const accessToken = req.headers.authorization?.split(" ")[1];
  try {
    const decoded = verifyAccessToken(accessToken);
    const user = await userModel.findById(decoded.userId);
    return res.status(200).json({
      Message: "user fetch successfuly",
      data: {
        user: {
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized, Invalid or Expired access token",
      error: error,
    });
  }
});

router.post("/refresh", async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({
      message: "unauthorized, Refresh Token not found",
    });
  }

  try {
    const decoded = verifyRefreshToken(refreshToken);
    const user = await userModel.findById(decoded.userId);
    if (refreshToken !== user.refreshToken) {
      user.refreshToken = null;
      await user.save();

      return res.status(401).json({
        message: "Unauthorized, refresh token mismatch",
      });
    }

    const {accessToken, refreshToken: newRefreshToken} = generateTokens({userId: user._id});

    user.refreshToken = newRefreshToken;
    await user.save();

    res.cookie("refreshToken", newRefreshToken, {httpOnly: true});

    return res.status(200).json({
      message: "Tokens Refresh Successfully.",
      accessToken,
    });
  } catch (error) {
    return res.status(401).json({
      message: "unauthorized, Invalid refresh token.",
    });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(400).json({
      message: "Invalid email or password.",
      errors: [
        {
          field: "email",
          message: "Invalid email or password",
        },
      ],
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

  if (!isPasswordValid) {
    return res.status(400).json({
      message: "Invalid email or password.",
      errors: [
        {
          field: "password",
          message: "Invalid email or password",
        },
      ],
    });
  }

  const { accessToken, refreshToken } = generateTokens({ userId: user._id });

  user.refreshToken = refreshToken;
  await user.save();

  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
  });

  res.status(200).json({
    message: "Login Successful.",
    data: {
      user: {
        name: user.name,
        email: user.email,
      },
    },
    accessToken,
  });
});

export default router;
