import express from "express";
import userRoute from "../routes/auth.route.js";
const app = express();
app.use(express.json());
app.use("/api/auth", userRoute);
export default app;