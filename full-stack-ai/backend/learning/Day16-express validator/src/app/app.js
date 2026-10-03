import express from "express";
import authRoutes from "../routes/auth.route.js";
import { errorHandler, notFound } from "../middlewares/errorHandler.js";

const app = express();

app.use(express.json({ limit: "10kb" }));

app.use("/api/v1/auth", authRoutes);

app.use(notFound);
app.use(errorHandler); // hamesha sabse last

export default app;