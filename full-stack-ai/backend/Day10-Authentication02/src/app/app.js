import express from "express";
import jwt from "jsonwebtoken";
import userModel from "../models/user.models.js";
import { authenticate } from "../middleware/auth.middleware.js";
import bcrypt from "bcryptjs";
import "dotenv/config";

const app = express();
app.use(express.json());

app.get("/auth", (req, res) => {
  res.status(200).json({
    message: "Welcome to Auth 01",
  });
});

app.post("/auth/register", async (req, res) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    email,
    name,
    password : await bcrypt.hash(password, 10),
  });

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
  );

  res.status(201).json({
    message: "Register Successfully",
    data: {
      user: {
        name,
        email,
        id: user._id,
      },
      token,
    },
  });
});

app.get("/auth/me", authenticate, async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    data: {
      user: req.user,
    },
  });
});

app.post("/auth/login", async (req, res) =>{
  const {email, password} = req.body;
  const user = await userModel.findOne({
    email,
  });
  const isValidPassword = bcrypt.compare(password, user.password);

  if(!isValidPassword){
    res.status(400).json({
      message: "Invalid Email & Password",
    })
  }

  const token = jwt.sign({
    id: user._id
  }, process.env.JWT_SECRET);

  res.status(200).json({
    message: "user Login Successfully.",
    data:{
      user: {
        email: user.email,
        name: user.name,
      }
    }, token
  })
});

export default app;
