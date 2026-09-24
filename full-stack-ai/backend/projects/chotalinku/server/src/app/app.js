import express from "express";
import urlRoutes from "../routes/url.route.js";
import { urlModel } from "../models/url.model.js";
import { errorHandler } from "../middlewares/errorHandler.js";
const app = express();
app.use(express.json());
app.use("/api/url", urlRoutes);

app.get("/:code", async (req, res) => {
  const { code } = req.params;

  const url = await urlModel.findOne({ shortCode: code });

  if (!url) {
    res.status(404).json({
      message: "Url not found.",
    });
  }

  res.redirect(302, url.originalUrl);
  await urlModel.findOneAndUpdate(
    {
      shortCode: code,
    },
    {
      $inc: { clicks: 1 },
    },
  );
});

app.use(errorHandler);
export default app;
