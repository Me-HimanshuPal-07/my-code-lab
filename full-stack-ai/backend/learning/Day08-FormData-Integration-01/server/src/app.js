const express = require("express");
const cors = require("cors");
const userProfileRoutes = require("./routes/userProfile.routes");
const app = express();

const allowedOrigins = (
  process.env.CLIENT_ORIGINS || "http://localhost:5173"
)
  .split(",")
  .map((origin) => origin.trim());

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error("Origin is not allowed by CORS."));
    },
  })
);
app.use(express.json());
app.use("/userProfile", userProfileRoutes);

app.get("/", (req, res) =>{
    res.send("Hello, I am working Backend Api.");
});

module.exports = app;