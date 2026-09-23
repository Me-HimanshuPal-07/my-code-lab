const express = require("express");
const cors = require("cors");
const path = require("path");
const fileRoutes = require("./routes/file.route");
const errorHandler = require("./middleware/error.middleware");
const app = express();

const allowedOrigins = (process.env.CLIENT_ORIGINS || "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim());

app.use(cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            return callback(null, true);
        }

        return callback(new Error("Origin is not allowed by CORS."));
    },
}));
app.use(express.json({ limit: "1mb" }));
app.use("/uploads/profiles", express.static(path.join(__dirname, "../uploads/profiles"), {
    maxAge: "1d",
}));
app.use("/file", fileRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Profile upload API is running." });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found." });
});

app.use(errorHandler);

module.exports = app;