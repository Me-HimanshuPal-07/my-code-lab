import express from "express";
import urlRoutes from "../routes/url.route.js";
import { errorHandler} from "../middlewares/errorHandler.js"
const app = express();
app.use(express.json());
app.use("/api/url", urlRoutes);
app.use(errorHandler);
export default app;