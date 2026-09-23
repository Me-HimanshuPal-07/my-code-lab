import express from "express";
import jwt from "jsonwebtoken";

const app = express();
app.use(express.json());

app.get("/auth", (req, res) => {
  res.status(200).json({
    message: "Welcome to Auth 01",
  });
});

app.post("/auth/register", (req, res) => {
  const { name, email, password } = req.body;

  //   Save Data To Database

  const token = jwt.sign(
    {
      email,
      name, //_id
    },
    "1072497f746f6a38f413cb2059589efafb498cff85ee2be7c7ea419338e37ecd",
  );

  res.status(201).json({
    message: "Register Successfully",
    data: {
      user: {
        name,
        email,
      },
      token,
    }
  });
});

export default app;
